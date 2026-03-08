import type { NextApiRequest, NextApiResponse } from "next";
import customers from "../../../data/customers.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  const customer = customers.find((c) => c.id === id);

  if (!customer) {
    return res.status(404).json({ error: "Customer not found" });
  }

  res.status(200).json({
    id: customer.id,
    name: customer.name,
    email: customer.email,
    tier: customer.tier,
    balance: customer.balance,
    createdAt: customer.createdAt,
  });
}
