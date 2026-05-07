import Image from "next/image";
import products from "@/services/productService";

export const ProductsGrid = () => {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-3">Products</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {products.map((p) => (
          <div
            key={p.id}
            className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-4 hover:shadow-md transition relative"
          >
            {/* LIKE BUTTON */}
            <button className="absolute top-2 right-2 text-gray-400 hover:text-red-500 text-lg">
              ♡
            </button>

            {/* IMAGE */}
            <div className="relative h-44 w-full rounded-md overflow-hidden mb-3">
              <Image
                src={p.image}
                alt={p.name}
                fill
                className="object-cover"
              />
            </div>

            {/* NAME */}
            <h3 className="font-medium text-sm leading-tight">
              {p.name}
            </h3>

            {/* PRICE */}
            <p className="text-sm font-semibold mt-1">₹{p.price}</p>

            {/* UNIT INFO */}
            <p className="text-xs text-[var(--color-text-muted)]">
              {p.unit} | ₹{p.perPiece}/pc
            </p>

            {/* BUTTON */}
            <button className="mt-3 w-full py-2 rounded-md bg-[var(--color-primary)] text-white text-sm hover:bg-[var(--color-primary-hover)] transition">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};