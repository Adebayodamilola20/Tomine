/** "Meals & Proteins" -> "meals-proteins" (used for section anchors). */
export const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

/** "01", "02", … for the section numerals. */
export const numeral = (index: number) => String(index + 1).padStart(2, '0');
