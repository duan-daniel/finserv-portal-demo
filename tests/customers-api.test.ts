import type { NextApiRequest, NextApiResponse } from "next";
import handler from "../pages/api/customers/[id]";

describe("GET /api/customers/:id", () => {
  const createResponse = () => {
    const res: Partial<NextApiResponse> & {
      statusCode?: number;
      body?: unknown;
    } = {};

    res.status = jest.fn((code: number) => {
      res.statusCode = code;
      return res as NextApiResponse;
    });

    res.json = jest.fn((body: unknown) => {
      res.body = body;
      return res as NextApiResponse;
    });

    return res as NextApiResponse & { statusCode?: number; body?: unknown };
  };

  it("returns customer details when the id exists", () => {
    const req = { query: { id: "C001" } } as NextApiRequest;
    const res = createResponse();

    handler(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.body).toEqual(
      expect.objectContaining({
        id: "C001",
        name: "Acme Financial Corp",
      })
    );
  });

  it("returns 404 when the customer id does not exist", () => {
    const req = { query: { id: "missing-id" } } as NextApiRequest;
    const res = createResponse();

    handler(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.body).toEqual({ error: "Customer missing-id not found" });
  });
});
