const request = require("supertest");
const { createApp } = require("../../src/app");

test("GET /health visszaadja, hogy az alkalmazás él", async () => {
  const app = createApp();

  const response = await request(app).get("/health");

  expect(response.status).toBe(200);
  expect(response.body.status).toBe("ok");
});
