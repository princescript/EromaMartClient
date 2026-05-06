"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
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
  const searchParams = useSearchParams();
  const active = searchParams.get("category") || "all";

  return (
    <div className="w-full border-b border-[var(--color-border)] bg-[var(--color-surface)] overflow-x-auto">

      <div className="flex gap-3 px-4 py-2 whitespace-nowrap">

        {categories.map((c) => {
          const Icon = c.icon;

          const href =
            c.id === "all"
              ? "/products"
              : `/products?category=${c.id}`;

          return (
            <Link
              key={c.id}
              href={href}
              className={cn(
                "flex items-center gap-2 px-3 py-1 rounded-md text-sm transition",
                active === c.id
                  ? "bg-[var(--color-primary)] text-white"
                  : "text-[var(--color-text)] hover:bg-[var(--color-muted)]"
              )}
            >
              <Icon className="text-base" />
              <span>{c.name}</span>
            </Link>
          );
        })}

      </div>
    </div>
  );
};