"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FiUser, FiShoppingCart } from "react-icons/fi";

export const TopBar = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (!query.trim()) return;
    router.push(`/products?search=${query}`);
  };

  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="flex items-center justify-between px-3 md:px-4 py-3 border-b border-[var(--color-border)] sticky top-0 z-50 bg-[var(--color-header-bg)] text-[var(--color-header-text)]">

        {/* Logo */}
        <div
          className="text-lg md:text-xl font-bold cursor-pointer"
          onClick={() => router.push("/")}
        >
          EromaMart
        </div>

        {/* Desktop Search */}
        <div className="hidden md:flex flex-1 max-w-xl mx-4">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products..."
            className="w-full px-3 py-2 rounded-l-md border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
          />

          <button
            onClick={handleSearch}
            className="px-4 py-2 rounded-r-md bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] transition"
          >
            Search
          </button>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 md:gap-5">

          <button className="flex items-center gap-2 hover:text-[var(--color-primary-hover)] transition">
            <FiUser className="text-lg" />
            <span className="hidden md:inline">Login</span>
          </button>

          <button className="flex items-center gap-2 hover:text-[var(--color-primary-hover)] transition">
            <FiShoppingCart className="text-lg" />
            <span className="hidden md:inline">Cart</span>
          </button>

        </div>
      </header>

      {/* ================= MOBILE SEARCH (ALWAYS VISIBLE) ================= */}
      <div className="md:hidden w-full bg-[var(--color-surface)] border-b border-[var(--color-border)] px-3 py-3 flex gap-2 items-center">

        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search products..."
          className="flex-1 px-3 py-2 rounded-md border border-[var(--color-border)] bg-white text-[var(--color-text)] focus:outline-none"
        />

        <button
          onClick={handleSearch}
          className="px-3 py-2 bg-[var(--color-primary)] text-white rounded-md"
        >
          Go
        </button>

      </div>
    </>
  );
};