import type { NextApiRequest, NextApiResponse } from "next";
import allIssues from "../../data/issues.json";
import { filterIssues } from "../../lib/filters";
import { paginate } from "../../lib/pagination";

const PAGE_SIZE = 5;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { search, page } = req.query;

  const searchQuery = typeof search === "string" ? search : "";
  const pageNum = typeof page === "string" ? parseInt(page, 10) : 1;

  const filtered = filterIssues(allIssues, searchQuery);
  const paginated = paginate(filtered, pageNum, PAGE_SIZE);

  res.status(200).json(paginated);
}
