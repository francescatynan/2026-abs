import { spawn } from 'node:child_process';
import assert from 'node:assert/strict';
import { setTimeout as delay } from 'node:timers/promises';
import test from 'node:test';

const apiPort = Number(process.env.E2E_API_PORT ?? 3000);
const webPort = Number(process.env.E2E_WEB_PORT ?? 5173);
const startTimeoutMs = Number(process.env.E2E_START_TIMEOUT_MS ?? 90000);

const apiUrl = `http://127.0.0.1:${apiPort}`;
const webUrl = `http://127.0.0.1:${webPort}`;

const procs = [];

function startProcess(name, cmd, extraEnv = {}) {
  const child = spawn(cmd, {
    shell: true,
    stdio: ['ignore', 'pipe', 'pipe'],
    env: { ...process.env, ...extraEnv },
  });

  child.stdout?.on('data', (chunk) => process.stdout.write(`[${name}] ${chunk}`));
  child.stderr?.on('data', (chunk) => process.stderr.write(`[${name}] ${chunk}`));

  procs.push(child);
  return child;
}

function stopAll() {
  for (const proc of procs) {
    if (proc.killed || proc.exitCode !== null) {
      continue;
    }
    proc.kill('SIGTERM');
  }
  setTimeout(() => {
    for (const proc of procs) {
      if (proc.killed || proc.exitCode !== null) {
        continue;
      }
      proc.kill('SIGKILL');
    }
  }, 3000).unref();
}

async function waitForHttp(url, matcher, timeoutMs) {
  const deadline = Date.now() + timeoutMs;
  let lastErr = null;

  while (Date.now() < deadline) {
    try {
      const res = await fetch(url);
      const body = await res.text();
      if (matcher(res, body)) {
        return { status: res.status, body };
      }
      lastErr = new Error(`Unexpected response ${res.status} for ${url}`);
    } catch (err) {
      lastErr = err;
    }
    await delay(1000);
  }

  throw new Error(`Timed out waiting for ${url}: ${lastErr?.message ?? 'unknown error'}`);
}

test('cross-app e2e (api + web)', async (t) => {
  startProcess('api', 'npm run start --workspace @2026-abs/api', {
    PORT: String(apiPort),
  });
  startProcess(
    'web',
    `npm run dev --workspace @2026-abs/web -- --host 127.0.0.1 --port ${webPort}`,
  );

  t.after(() => {
    stopAll();
  });

  const [apiRes, webRes] = await Promise.all([
    waitForHttp(`${apiUrl}/`, (res, body) => res.status === 200 && body.includes('Hello World!'), startTimeoutMs),
    waitForHttp(`${webUrl}/`, (res, body) => res.status === 200 && body.toLowerCase().includes('<!doctype html>'), startTimeoutMs),
  ]);

  assert.equal(apiRes.status, 200);
  assert.equal(webRes.status, 200);
});
