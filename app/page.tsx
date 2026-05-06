import { Banner } from "@/components/banner/Banner";
import { CategoriesGrid } from "@/components/categories/CategoriesGrid";
import { ProductsGrid } from "@/components/products/ProductsGrid";
import { Trending } from "@/components/trending/Trending";

export default function Home() {
  return (
    <main className="flex flex-col gap-10 px-4 py-6 bg-[var(--color-background)] text-[var(--color-foreground)]">

      {/* Hero / Offers */}
      <section>
        <Banner />
      </section>

     /* {/* Categories */}
      <section>
        <CategoriesGrid />
      </section>

      {/* Products */}
      <section>
        <ProductsGrid />
      </section>

      {/* Trending */}
      <section>
        <Trending />
      </section>

    </main>
  );
}