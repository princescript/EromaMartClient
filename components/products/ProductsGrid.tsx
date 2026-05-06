const products = Array.from({ length: 8 }).map((_, i) => ({
  id: i,
  name: `Product ${i + 1}`,
  price: 50 + i * 20,
}));

export const ProductsGrid = () => {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-3">Products</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((p) => (
          <div
            key={p.id}
            className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-3 hover:shadow-sm transition"
          >
            <div className="h-32 bg-[var(--color-muted)] rounded-md mb-2" />

            <h3 className="font-medium">{p.name}</h3>
            <p className="text-sm text-[var(--color-text-muted)]">
              ₹{p.price}
            </p>

            <button className="mt-2 w-full py-1 rounded-md bg-[var(--color-primary)] text-white text-sm hover:bg-[var(--color-primary-hover)] transition">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};