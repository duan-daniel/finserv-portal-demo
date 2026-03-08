import { filterIssues, filterByLabel } from "../lib/filters";

const mockIssues = [
  { title: "Payment processing timeout", status: "open", label: "bug" },
  { title: "Account balance mismatch", status: "open", label: "bug" },
  { title: "Add dark mode", status: "closed", label: "feature" },
  { title: "KYC verification email not sent", status: "closed", label: "bug" },
];

describe("filterIssues", () => {
  it("returns all items when query is empty", () => {
    expect(filterIssues(mockIssues, "")).toEqual(mockIssues);
    expect(filterIssues(mockIssues, "   ")).toEqual(mockIssues);
  });

  it("filters by exact substring match", () => {
    const result = filterIssues(mockIssues, "Payment");
    expect(result).toHaveLength(1);
    expect(result[0].title).toBe("Payment processing timeout");
  });

  it("is case-insensitive", () => {
    const upper = filterIssues(mockIssues, "Payment");
    const lower = filterIssues(mockIssues, "payment");
    expect(upper).toEqual(lower);
  });
});

describe("filterByLabel", () => {
  it("returns all items when label is empty", () => {
    expect(filterByLabel(mockIssues, "")).toEqual(mockIssues);
  });

  it("filters by label", () => {
    const result = filterByLabel(mockIssues, "bug");
    expect(result).toHaveLength(3);
  });
});
