"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import banners from "@/services/bannerService";

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