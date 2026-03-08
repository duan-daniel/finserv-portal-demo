import type { NextApiRequest, NextApiResponse } from "next";
import customers from "../../../data/customers.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const customerId = Array.isArray(id) ? id[0] : id;

  if (!customerId) {
    return res.status(400).json({ error: "Customer id is required" });
  }

  const customer = customers.find((c) => c.id === customerId);

  if (!customer) {
    return res.status(404).json({ error: `Customer ${customerId} not found` });
  }

  return res.status(200).json({
    id: customer.id,
    name: customer.name,
    email: customer.email,
    tier: customer.tier,
    balance: customer.balance,
    createdAt: customer.createdAt,
  });
}
