import Image from "next/image";
import Link from "next/link";
import products from "@/services/productService";

export const ProductsGrid = () => {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-3">Products</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {products.map((p) => (
          <Link href={`/products/${p.id}`} key={p.id}>
            <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-4 hover:shadow-md transition relative cursor-pointer">

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

              <h3 className="font-medium text-sm leading-tight">
                {p.name}
              </h3>

              <p className="text-sm font-semibold mt-1">₹{p.price}</p>

              <p className="text-xs text-[var(--color-text-muted)]">
                {p.unit} {p.perPiece ? `| ₹${p.perPiece}/pc` : ""}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};