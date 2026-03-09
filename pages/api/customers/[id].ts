import type { NextApiRequest, NextApiResponse } from "next";
import customers from "../../../data/customers.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  
  const customer = customers.find((c) => c.id === id);
  if(!customer){
    return res.status(404).json({
      error : "Customer not found"
    })
  }
  // BUG (Issue 3): No null check — accessing properties on undefined
  // throws a 500 instead of returning a 404.
  res.status(200).json({
    id: customer!.id,
    name: customer!.name,
    email: customer!.email,
    tier: customer!.tier,
    balance: customer!.balance,
    createdAt: customer!.createdAt,
  });
}
