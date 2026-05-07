import Image from "next/image";
import categories from "@/services/categoryService";

export const CategoriesGrid = () => {

  return (
    <div>
      <h2 className="text-lg font-semibold mb-3">Categories</h2>

      <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-6 sm:gap-3">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="group cursor-pointer rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] px-2 py-3 text-center hover:-translate-y-0.5 hover:border-[var(--color-primary)]/30 hover:shadow-sm transition sm:px-3 sm:py-4"
          >
            <div className="relative mx-auto h-14 w-14 overflow-hidden rounded-full ring-1 ring-black/5 sm:h-16 sm:w-16">
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                sizes="(max-width: 640px) 56px, 64px"
                className="object-cover group-hover:scale-110 transition duration-300"
              />
            </div>

            <div className="mt-2 text-xs font-medium leading-tight sm:text-sm">
              {cat.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
