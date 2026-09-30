import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import app from '../src/app.js';
import http from 'node:http';

describe('Products & B2B API Endpoints', () => {
  let server;
  let baseUrl;

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

  test('GET /api/v1/products returns product array', async () => {
    const res = await fetch(`${baseUrl}/api/v1/products`);
    assert.equal(res.status, 200);

    const data = await res.json();
    assert.equal(data.success, true);
    assert.ok(Array.isArray(data.data));
    assert.ok(data.data.length > 0);
    assert.ok(data.meta.total > 0);
  });

  test('GET /api/v1/products/:id returns single product', async () => {
    const res = await fetch(`${baseUrl}/api/v1/products/1`);
    assert.equal(res.status, 200);

    const data = await res.json();
    assert.equal(data.success, true);
    assert.equal(data.data.id, 1);
    assert.ok(data.data.name.includes('Sơ Mi'));
  });

  test('GET /api/v1/products/99999 returns 404', async () => {
    const res = await fetch(`${baseUrl}/api/v1/products/99999`);
    assert.equal(res.status, 404);

    const data = await res.json();
    assert.equal(data.success, false);
    assert.equal(data.error.code, 'PRODUCT_NOT_FOUND');
  });

  test('POST /api/v1/b2b/estimate calculates discount correctly', async () => {
    const res = await fetch(`${baseUrl}/api/v1/b2b/estimate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ quantity: 150, fabric: 'sen' })
    });

    assert.equal(res.status, 200);
    const data = await res.json();
    assert.equal(data.success, true);
    assert.equal(data.data.quantity, 150);
    assert.equal(data.data.discountPercent, 25);
    assert.ok(data.data.totalBudget > 0);
  });

  test('POST /api/v1/b2b/estimate validates invalid quantity', async () => {
    const res = await fetch(`${baseUrl}/api/v1/b2b/estimate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ quantity: -10 })
    });

    assert.equal(res.status, 400);
    const data = await res.json();
    assert.equal(data.success, false);
    assert.equal(data.error.code, 'INVALID_QUANTITY');
  });

  test('teardown test server', async () => {
    await new Promise((resolve) => {
      server.close(resolve);
    });
  });
});
