"use client";
import React from "react";
import Link from "next/link";

/**
 * Apple/AJAX-style top navigation for NOOCUPAS (desktop first)
 * - 52px height, translucent blur, no bottom divider
 * - Palette: white / black / yellow-400
 */

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-[1380px] px-4 md:px-6 lg:px-8">
        <div className="mt-2 h-[56px] rounded-full border border-black/5 bg-white/90 backdrop-blur-md supports-[backdrop-filter]:bg-white/80 shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
          <div className="flex h-full items-center justify-between px-3 md:px-5">
            {/* Brand */}
            <Link href="/" className="inline-flex items-center gap-2">
              <span className="inline-block h-3 w-3 rounded-full bg-yellow-400" />
              <span className="text-[15px] font-semibold tracking-tight">NOOCUPAS</span>
            </Link>

            {/* Links (desktop only) */}
            <nav className="hidden md:flex items-center gap-6">
              <Link href="#products"  className="text-[15px] font-medium tracking-tight text-neutral-800 hover:text-black">Products</Link>
              <Link href="#solutions" className="text-[15px] font-medium tracking-tight text-neutral-800 hover:text-black">Solutions</Link>
              <Link href="#pricing"   className="text-[15px] font-medium tracking-tight text-neutral-800 hover:text-black">Pricing</Link>
              <Link href="#support"   className="text-[15px] font-medium tracking-tight text-neutral-800 hover:text-black">Support</Link>
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <Link
                href="#contact"
                className="hidden md:inline-flex items-center rounded-full border border-black/10 px-5 py-[7px] text-[15px] font-medium tracking-tight text-neutral-800 hover:border-black/20 transition-colors"
              >
                Contact
              </Link>
              <Link
                href="#install"
                className="inline-flex items-center rounded-full bg-yellow-400 px-5 py-[7px] text-[15px] font-semibold tracking-tight text-black hover:shadow-[0_0_25px_rgba(250,204,21,0.3)] active:scale-[0.99] transition-all"
              >
                Install now
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* bottom divider removed to avoid a visible line */}
    </header>
  );
}
