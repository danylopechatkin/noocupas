"use client";
import React from "react";
import Link from "next/link";

/**
 * Apple-style top navigation for NOOCUPAS (desktop first)
 * - Full-width dark bar, attached to top
 * - Sticky while scrolling
 * - Text links center, actions right
 * - Colors: dark background, white text, yellow CTA
 */

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#111111]/95 backdrop-blur border-b border-white/10">
      <div className="mx-auto flex h-[44px] md:h-[48px] max-w-[1380px] items-center justify-between px-4 md:px-8">
        {/* Left: brand */}
        <Link href="/" className="inline-flex items-center gap-2">
          <span className="inline-block h-3 w-3 rounded-full bg-yellow-400" />
          <span className="text-[14px] md:text-[15px] font-semibold tracking-tight text-white">
            NOOCUPAS
          </span>
        </Link>

        {/* Center: links (desktop only) — как у Apple */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="#products"
            className="text-[13px] font-medium tracking-tight text-zinc-200 hover:text-white"
          >
            Products
          </Link>
          <Link
            href="#solutions"
            className="text-[13px] font-medium tracking-tight text-zinc-200 hover:text-white"
          >
            Solutions
          </Link>
          <Link
            href="#pricing"
            className="text-[13px] font-medium tracking-tight text-zinc-200 hover:text-white"
          >
            Pricing
          </Link>
          <Link
            href="#support"
            className="text-[13px] font-medium tracking-tight text-zinc-200 hover:text-white"
          >
            Support
          </Link>
        </nav>

        {/* Right: actions */}
        <div className="flex items-center gap-2">
          <Link
            href="#contact"
            className="hidden md:inline-flex items-center rounded-full px-4 py-[6px] text-[13px] font-medium tracking-tight text-zinc-200 hover:text-white"
          >
            Contact
          </Link>
          <Link
            href="#install"
            className="inline-flex items-center rounded-full bg-yellow-400 px-4 md:px-5 py-[6px] text-[13px] md:text-[14px] font-semibold tracking-tight text-black hover:shadow-[0_0_22px_rgba(250,204,21,0.35)] active:scale-[0.99] transition-all"
          >
            Install now
          </Link>
        </div>
      </div>
    </header>
  );
}
