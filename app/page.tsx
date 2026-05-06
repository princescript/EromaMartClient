import { Banner } from "@/components/banner/Banner";
import { CategoriesGrid } from "@/components/categories/CategoriesGrid";
import { ProductsGrid } from "@/components/products/ProductsGrid";
import { Trending } from "@/components/trending/Trending";

export default function Home() {
  return (
    <main className="flex flex-col gap-10 px-4 py-6 bg-[var(--color-background)] text-[var(--color-foreground)]">
      {/* Hero / Offers */}
      <section id="offers" className="scroll-mt-32">
        <Banner />
      </section>

      {/* Categories */}
      <section id="categories" className="scroll-mt-32">
        <CategoriesGrid />
      </section>

      {/* Products */}
      <section id="products" className="scroll-mt-32">
        <ProductsGrid />
      </section>

      {/* Trending */}
      <section id="trending" className="scroll-mt-32">
        <Trending />
      </section>
    </main>
  );
}
