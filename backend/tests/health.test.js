import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import app from '../src/app.js';
import http from 'node:http';

describe('Health & Diagnostic Endpoints', () => {
  let server;
  let baseUrl;

  // Start test server before running suite
  test('setup test server', async () => {
    await new Promise((resolve) => {
      server = http.createServer(app);
      server.listen(0, () => {
        const port = server.address().port;
        baseUrl = `http://127.0.0.1:${port}`;
        resolve();
      });
    });
  });

  test('GET /health returns 200 and healthy status', async () => {
    const res = await fetch(`${baseUrl}/health`);
    assert.equal(res.status, 200);

    const data = await res.json();
    assert.equal(data.status, 'healthy');
    assert.equal(data.service, 'hdc-fashion-backend');
    assert.ok(data.uptime >= 0);
    assert.ok(data.timestamp);
    assert.ok(data.memory);
  });

  test('GET /health/ready returns 200 and ready state', async () => {
    const res = await fetch(`${baseUrl}/health/ready`);
    assert.equal(res.status, 200);

    const data = await res.json();
    assert.equal(data.status, 'ready');
    assert.equal(data.database, 'connected');
  });

  test('GET /health/ping returns pong text', async () => {
    const res = await fetch(`${baseUrl}/health/ping`);
    assert.equal(res.status, 200);
    const text = await res.text();
    assert.equal(text, 'pong');
  });

  test('GET / returns 200 welcome message', async () => {
    const res = await fetch(`${baseUrl}/`);
    assert.equal(res.status, 200);
    const data = await res.json();
    assert.equal(data.status, 'online');
    assert.ok(data.version);
  });

  test('GET /non-existent-route returns 404 error format', async () => {
    const res = await fetch(`${baseUrl}/non-existent-route`);
    assert.equal(res.status, 404);
    const data = await res.json();
    assert.equal(data.success, false);
    assert.equal(data.error.code, 'NOT_FOUND');
  });

  // Teardown server
  test('teardown test server', async () => {
    await new Promise((resolve) => {
      server.close(resolve);
    });
  });
});
