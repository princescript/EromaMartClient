"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { FiGrid, FiCoffee, FiActivity, FiShoppingBag } from "react-icons/fi";

const categories = [
  { id: "all", name: "All", icon: FiGrid },
  { id: "fruits", name: "Fruits", icon: FiCoffee },
  { id: "vegetables", name: "Vegetables", icon: FiActivity },
  { id: "dairy", name: "Dairy", icon: FiCoffee },
  { id: "snacks", name: "Snacks", icon: FiShoppingBag },
];

export const DownBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const active = searchParams.get("category") || "all";

  const handleClick = (category: string) => {
    if (category === "all") {
      router.push("/products");
    } else {
      router.push(`/products?category=${category}`);
    }
  };

  return (
    <div className="w-full border-b border-[var(--color-border)] bg-[var(--color-surface)] overflow-x-auto">
      
      <div className="flex gap-3 px-4 py-2 whitespace-nowrap">

        {categories.map((c) => {
          const Icon = c.icon;

          return (
            <button
              key={c.id}
              onClick={() => handleClick(c.id)}
              className={cn(
                "flex items-center gap-2 px-3 py-1 rounded-md text-sm transition",
                active === c.id
                  ? "bg-[var(--color-primary)] text-white"
                  : "text-[var(--color-text)] hover:bg-[var(--color-muted)]"
              )}
            >
              <Icon className="text-base" />
              <span>{c.name}</span>
            </button>
          );
        })}

      </div>
    </div>
  );
};