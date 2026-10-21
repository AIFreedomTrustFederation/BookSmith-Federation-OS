#!/usr/bin/env node
// Exercise the built Next.js homepage, not merely a successful Next.js build.
import { spawn } from 'node:child_process';
import { createServer } from 'node:net';
import { setTimeout as sleep } from 'node:timers/promises';

const timeoutMs = 30_000;
const heading = /<h1[^>]*>BookSmith Federation OS<\/h1>/;

async function unusedPort() {
  const server = createServer();
  await new Promise((resolve, reject) => {
    server.once('error', reject);
    server.listen(0, '127.0.0.1', resolve);
  });
  const port = server.address().port;
  await new Promise((resolve) => server.close(resolve));
  return port;
}

const port = await unusedPort();
const child = spawn('corepack', [
  'pnpm', '--filter', '@booksmith-federation-os/web-os', 'exec',
  'next', 'start', '--port', String(port), '--hostname', '127.0.0.1',
], { stdio: ['ignore', 'pipe', 'pipe'], detached: process.platform !== 'win32' });

let output = '';
let childExited = false;
let childError = null;
for (const stream of [child.stdout, child.stderr]) {
  stream.on('data', (chunk) => { output = (output + chunk.toString()).slice(-16_384); });
}
child.on('error', (error) => { childError = error; childExited = true; });
child.on('exit', () => { childExited = true; });

function stopChild() {
  if (!child.pid) return;
  try {
    if (process.platform === 'win32') child.kill('SIGTERM');
    else process.kill(-child.pid, 'SIGTERM');
  } catch (error) {
    if (error.code !== 'ESRCH') process.stderr.write(`${error.message}\n`);
  }
}
process.once('SIGINT', () => { stopChild(); process.exitCode = 130; });
process.once('SIGTERM', () => { stopChild(); process.exitCode = 143; });

let verified = false;
let failure = 'homepage did not return HTTP 200';
try {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    if (childExited) {
      failure = `web server exited before passing smoke test${childError ? `: ${childError.message}` : ''}`;
      break;
    }
    try {
      const response = await fetch(`http://127.0.0.1:${port}/`, { signal: AbortSignal.timeout(2000) });
      if (response.status === 200) {
        const body = await response.text();
        if (heading.test(body)) verified = true;
        else failure = 'HTTP 200 response is missing the expected homepage heading';
        break;
      }
      failure = `homepage returned HTTP ${response.status}`;
      // A server can briefly report 5xx while its routes become ready.
      // Keep the existing fail-fast behavior for unexpected non-5xx responses.
      if (response.status >= 500 && response.status <= 599) {
        await response.body?.cancel();
        await sleep(250);
        continue;
      }
      break;
    } catch {
      await sleep(250);
    }
  }
} finally {
  stopChild();
}
if (verified) {
  console.log('BookSmith homepage smoke test passed (HTTP 200 and expected heading).');
} else {
  console.error(`BookSmith homepage smoke test failed: ${failure}`);
  if (output) console.error(output);
  process.exitCode = 1;
}
