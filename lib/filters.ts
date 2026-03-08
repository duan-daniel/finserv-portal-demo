/**
 * Filter issues by a search query.
 * Matches against the issue title.
 */
export function filterIssues(
  items: Array<{ title: string; status: string }>,
  query: string
) {
  const normalizedQuery = query.trim().toLowerCase();
  if (!normalizedQuery) return items;

  return items.filter((item) =>
    item.title.toLowerCase().includes(normalizedQuery)
  );
}

/**
 * Filter issues by label.
 */
export function filterByLabel(
  items: Array<{ label: string }>,
  label: string
) {
  if (!label) return items;
  return items.filter((item) => item.label === label);
}
