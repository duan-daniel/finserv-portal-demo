import { paginate } from "../lib/pagination";

const items = Array.from({ length: 23 }, (_, i) => ({ id: i + 1 }));

describe("paginate", () => {
  it("returns correct page of items", () => {
    const result = paginate(items, 1, 5);
    expect(result.items).toHaveLength(5);
    expect(result.items[0]).toEqual({ id: 1 });
    expect(result.page).toBe(1);
  });

  it("returns correct total and totalPages", () => {
    const result = paginate(items, 1, 5);
    expect(result.total).toBe(23);
    expect(result.totalPages).toBe(5);
  });

  it("returns partial last page", () => {
    const result = paginate(items, 5, 5);
    expect(result.items).toHaveLength(3);
  });

  it("reflects the total of the filtered collection passed in", () => {
    const filtered = items.filter((item) => item.id <= 7);
    const result = paginate(filtered, 1, 5);

    expect(result.total).toBe(filtered.length);
    expect(result.totalPages).toBe(2);
    expect(result.items).toEqual(filtered.slice(0, 5));
  });
});
