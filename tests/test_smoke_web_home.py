"""Dependency-free regression tests for the federation homepage smoke gate."""
import json
import os
from pathlib import Path
import subprocess
import tempfile
import textwrap
import unittest

SCRIPT = Path(__file__).resolve().parents[1] / 'scripts' / 'smoke-web-home.mjs'


class HomepageSmokeTest(unittest.TestCase):
    def run_fixture(self, mode):
        with tempfile.TemporaryDirectory() as folder:
            fake = Path(folder) / 'corepack'
            fake.write_text(textwrap.dedent('''\
                #!/usr/bin/env node
                const http = require('node:http');
                const args = process.argv;
                const port = Number(args[args.indexOf('--port') + 1]);
                const mode = process.env.BOOKSMITH_TEST_MODE;
                if (mode === 'exit') process.exit(4);
                let requests = 0;
                const server = http.createServer((req, res) => {
                  requests += 1;
                  if (mode === 'redirect' && req.url === '/') {
                    res.writeHead(302, { Location: '/ready' });
                    res.end();
                    return;
                  }
                  const warming = (mode === 'warming' || mode === 'warming404') && requests === 1;
                  res.statusCode = warming ? 503 : mode === '404' || mode === 'warming404' ? 404 : mode === '201' ? 201 : 200;
                  res.end(mode === 'wrong' ? '<h1>Other Site</h1>' : '<h1>BookSmith Federation OS</h1>');
                });
                server.listen(port, '127.0.0.1');
            '''))
            fake.chmod(0o755)
            env = dict(os.environ, PATH=f'{folder}:{os.environ.get("PATH", "")}', BOOKSMITH_TEST_MODE=mode)
            return subprocess.run(['node', str(SCRIPT)], env=env, capture_output=True, text=True, timeout=12)

    def test_expected_homepage_passes(self):
        result = self.run_fixture('ok')
        self.assertEqual(result.returncode, 0, result.stderr)
        self.assertIn('passed', result.stdout)

    def test_transient_503_then_200_passes(self):
        result = self.run_fixture('warming')
        self.assertEqual(result.returncode, 0, result.stderr)
        self.assertIn('passed', result.stdout)

    def test_transient_503_then_404_fails(self):
        result = self.run_fixture('warming404')
        self.assertNotEqual(result.returncode, 0)
        self.assertIn('HTTP 404', result.stderr)

    def test_redirect_is_not_root_http_200(self):
        result = self.run_fixture('redirect')
        self.assertNotEqual(result.returncode, 0)
        self.assertIn('HTTP 302', result.stderr)

    def test_http_404_fails(self):
        result = self.run_fixture('404')
        self.assertNotEqual(result.returncode, 0)
        self.assertIn('HTTP 404', result.stderr)

    def test_http_201_fails_even_with_expected_heading(self):
        result = self.run_fixture('201')
        self.assertNotEqual(result.returncode, 0)
        self.assertIn('HTTP 201', result.stderr)

    def test_wrong_homepage_fails(self):
        result = self.run_fixture('wrong')
        self.assertNotEqual(result.returncode, 0)
        self.assertIn('expected homepage heading', result.stderr)

    def test_server_crash_fails(self):
        result = self.run_fixture('exit')
        self.assertNotEqual(result.returncode, 0)
        self.assertIn('exited before passing', result.stderr)


class WiringTest(unittest.TestCase):
    def test_manifest_runs_home_smoke_after_build(self):
        root = SCRIPT.parents[1]
        manifest = json.loads((root / 'aift.repo.json').read_text())
        verify = manifest['commands']['verify']
        self.assertLess(verify.index('corepack pnpm run build'), verify.index('node scripts/smoke-web-home.mjs'))

    def test_hosted_ci_uses_same_home_smoke(self):
        root = SCRIPT.parents[1]
        workflow = (root / '.github/workflows/verify.yml').read_text()
        self.assertIn('node scripts/smoke-web-home.mjs', workflow)


if __name__ == '__main__':
    unittest.main()
