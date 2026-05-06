"use client";

import { useEffect, useState } from "react";

const banners = [
  {
    title: "Fresh Groceries Delivered",
    desc: "Get daily essentials at best prices",
  },
  {
    title: "Big Discounts on Vegetables",
    desc: "Save more on healthy choices every day",
  },
  {
    title: "Fast Delivery at Your Doorstep",
    desc: "Order now and get same-day delivery",
  },
];

export const Banner = () => {
  const [index, setIndex] = useState(0);

  // Auto change every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const current = banners[index];

  return (
    <div className="w-full rounded-xl bg-[var(--color-primary)] text-white p-8 flex items-center justify-between transition-all duration-500">

      {/* Text */}
      <div>
        <h2 className="text-2xl font-bold">{current.title}</h2>
        <p className="text-sm opacity-80 mt-1">
          {current.desc}
        </p>

        {/* Dots */}
        <div className="flex gap-2 mt-4">
          {banners.map((_, i) => (
            <span
              key={i}
              className={`w-2 h-2 rounded-full ${
                i === index
                  ? "bg-white"
                  : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>

      {/* CTA */}
      <button className="bg-white text-[var(--color-primary)] px-5 py-2 rounded-md font-medium hover:opacity-90 transition">
        Shop Now
      </button>

    </div>
  );
};