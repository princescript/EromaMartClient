const categories = [
  "Fruits",
  "Vegetables",
  "Dairy",
  "Snacks",
  "Beverages",
  "Bakery",
];

export const CategoriesGrid = () => {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-3">Categories</h2>

      <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
        {categories.map((cat) => (
          <div
            key={cat}
            className="p-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] text-center text-sm cursor-pointer hover:bg-[var(--color-muted)] transition"
          >
            {cat}
          </div>
        ))}
      </div>
    </div>
  );
};