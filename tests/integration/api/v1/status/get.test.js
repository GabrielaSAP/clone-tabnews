test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);
  // const response = await request.get("/api/v1/status");
  // expect(response.statusCode).toBe(200);
});
