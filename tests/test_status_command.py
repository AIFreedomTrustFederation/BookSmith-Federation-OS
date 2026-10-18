"""Regression tests: federation status must inspect its own checkout."""
import os
from pathlib import Path
import subprocess
import tempfile
import unittest

SCRIPT = Path(__file__).resolve().parents[1] / '.aift' / 'commands' / 'status.sh'


class StatusCommandTest(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.addCleanup(self.temp.cleanup)
        self.base = Path(self.temp.name)
        self.target = self.base / 'target checkout with spaces'
        self.other = self.base / 'other checkout'
        self.outside = self.base / 'outside'
        (self.target / '.aift' / 'commands').mkdir(parents=True)
        self.other.mkdir()
        self.outside.mkdir()
        (self.target / '.aift' / 'commands' / 'status.sh').write_bytes(SCRIPT.read_bytes())
        for repo in (self.target, self.other):
            subprocess.run(['git', 'init', '-q', str(repo)], check=True)
        subprocess.run(['git', '-C', str(self.target), 'add', '.aift/commands/status.sh'], check=True)
        subprocess.run(['git', '-C', str(self.target), '-c', 'user.name=Test',
                        '-c', 'user.email=test@example.invalid', 'commit', '-qm', 'fixture'], check=True)
        (self.target / 'target-only.txt').touch()
        (self.other / 'other-only.txt').touch()

    def invoke(self, cwd):
        env = dict(os.environ, AIFT_REPO_NAME='BookSmith-Federation-OS')
        return subprocess.run(['sh', str(self.target / '.aift/commands/status.sh')],
                              cwd=cwd, env=env, text=True, capture_output=True, timeout=5)

    def assert_target(self, cwd):
        result = self.invoke(cwd)
        self.assertEqual(result.returncode, 0, result.stderr)
        self.assertEqual(result.stdout, 'AIFT repo: BookSmith-Federation-OS\n?? target-only.txt\n')
        self.assertNotIn('other-only.txt', result.stdout)

    def test_from_unrelated_git_repository(self):
        self.assert_target(self.other)

    def test_from_non_repository_directory(self):
        self.assert_target(self.outside)

    def test_from_target_checkout(self):
        self.assert_target(self.target)


if __name__ == '__main__':
    unittest.main()
