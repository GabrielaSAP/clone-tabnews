test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const responseBody = await response.json();

  expect(responseBody.updated_at).toBeDefined();
  const parsedUpdatedAt = new Date(responseBody.updated_at).toISOString();
  expect(responseBody.updated_at).toEqual(parsedUpdatedAt);

  expect(responseBody.postgres_version).toBeDefined();
  expect(responseBody.postgres_version).toMatch(/PostgreSQL/);

  expect(responseBody.max_connections).toBeDefined();
  expect(responseBody.max_connections).toBeGreaterThan(0);

  expect(responseBody.used_connections).toBeDefined();
  expect(responseBody.used_connections).toBeGreaterThanOrEqual(0);
  expect(responseBody.used_connections).toBeLessThanOrEqual(
    responseBody.max_connections
  );

  console.log("Response body:", responseBody);
});
