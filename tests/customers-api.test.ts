import handler from "../pages/api/customers/[id]";
import type { NextApiRequest, NextApiResponse } from "next";

function createMockReqRes(id: string) {
  const req = { query: { id } } as unknown as NextApiRequest;
  const res = {
    statusCode: 0,
    body: null as unknown,
    status(code: number) {
      this.statusCode = code;
      return this;
    },
    json(data: unknown) {
      this.body = data;
      return this;
    },
  } as unknown as NextApiResponse & { statusCode: number; body: unknown };
  return { req, res };
}

describe("GET /api/customers/[id]", () => {
  it("returns 200 with customer data for a valid ID", () => {
    const { req, res } = createMockReqRes("C001");
    handler(req, res);
    expect(res.statusCode).toBe(200);
    expect(res.body).toMatchObject({
      id: "C001",
      name: "Acme Financial Corp",
    });
  });

  it("returns 404 with error message for an invalid ID", () => {
    const { req, res } = createMockReqRes("INVALID");
    handler(req, res);
    expect(res.statusCode).toBe(404);
    expect(res.body).toEqual({ error: "Customer not found" });
  });

  it("returns 404 for an empty ID", () => {
    const { req, res } = createMockReqRes("");
    handler(req, res);
    expect(res.statusCode).toBe(404);
    expect(res.body).toEqual({ error: "Customer not found" });
  });
});
