type Product = {
  id: number;
  name: string;
  price: number;
  image?: string;
};

const trendingProducts: Product[] = [
  { id: 1, name: "Fresh Milk", price: 60 },
  { id: 2, name: "Red Apple", price: 120 },
  { id: 3, name: "Brown Bread", price: 45 },
  { id: 4, name: "Banana Bunch", price: 40 },
  { id: 5, name: "Potato Chips", price: 20 },
  { id: 6, name: "Orange Juice", price: 90 },
];

export const Trending = () => {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-3">Trending Products</h2>

      <div className="flex gap-4 overflow-x-auto pb-2">

        {trendingProducts.map((product) => (
          <div
            key={product.id}
            className="min-w-[160px] rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-3 hover:shadow-sm transition"
          >
            
            {/* Image placeholder */}
            <div className="h-24 bg-[var(--color-muted)] rounded-md mb-2" />

            {/* Name */}
            <h3 className="text-sm font-medium truncate">
              {product.name}
            </h3>

            {/* Price */}
            <p className="text-sm text-[var(--color-text-muted)]">
              ₹{product.price}
            </p>

            {/* Action */}
            <button className="mt-2 w-full text-sm py-1 rounded-md bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] transition">
              Add
            </button>

          </div>
        ))}

      </div>
    </div>
  );
};