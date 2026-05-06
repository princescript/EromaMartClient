"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const banners = [
  {
    title: "Fresh Groceries Delivered",
    desc: "Get daily essentials at best prices",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1600&q=80",
    href: "/#products",
    cta: "Shop Groceries",
  },
  {
    title: "Big Discounts on Vegetables",
    desc: "Save more on healthy choices every day",
    image:
      "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1600&q=80",
    href: "/#categories",
    cta: "Browse Categories",
  },
  {
    title: "Fast Delivery at Your Doorstep",
    desc: "Order now and get same-day delivery",
    image:
      "https://images.unsplash.com/photo-1523294587484-bae6cc870010?auto=format&fit=crop&w=1600&q=80",
    href: "/#trending",
    cta: "See Trending",
  },
];

export const Banner = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const current = banners[index];

  return (
    <div className="relative w-full min-h-[55vh] md:min-h-[65vh] rounded-2xl overflow-hidden flex items-center px-6 md:px-12 text-white">

      {/* Background Image */}
      <Image
        src={current.image}
        alt={current.title}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 max-w-xl space-y-3">

        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          {current.title}
        </h2>

        <p className="text-sm md:text-lg text-white/80">
          {current.desc}
        </p>

        <Link
          href={current.href}
          className="inline-block mt-4 bg-white text-[var(--color-primary)] px-6 py-3 rounded-md font-medium hover:scale-105 transition"
        >
          {current.cta}
        </Link>

        {/* Dots */}
        <div className="flex gap-2 pt-4">
          {banners.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2.5 h-2.5 rounded-full transition ${
                i === index ? "bg-white" : "bg-white/40"
              }`}
            />
          ))}
        </div>

      </div>
    </div>
  );
};