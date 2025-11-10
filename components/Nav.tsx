"use client";
import React from "react";
import Link from "next/link";

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#0b0b0b]/80 backdrop-blur-md supports-[backdrop-filter]:bg-[#0b0b0b]/60 border-b border-white/10">
      <div className="mx-auto flex h-[44px] md:h-[48px] max-w-[1400px] items-center justify-between px-4 sm:px-6 md:px-8 lg:px-10">
        {/* Left: brand */}
        <Link href="/" className="inline-flex items-center gap-2">
          <span className="inline-block h-3 w-3 rounded-full bg-yellow-400" />
          <span className="text-[14px] md:text-[15px] font-semibold tracking-tight text-white">
            NOOCUPAS
          </span>
        </Link>

        {/* Center: nav links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-7 text-[13px]">
          <Link href="#products" className="text-zinc-200 hover:text-white transition-colors">
            Products
          </Link>
          <Link href="#solutions" className="text-zinc-200 hover:text-white transition-colors">
            Solutions
          </Link>
          <Link href="#business" className="text-zinc-200 hover:text-white transition-colors">
            For business
          </Link>
          <Link href="#pricing" className="text-zinc-200 hover:text-white transition-colors">
            Pricing
          </Link>
          <Link href="#learn" className="text-zinc-200 hover:text-white transition-colors">
            Learn
          </Link>
          <Link href="#support" className="text-zinc-200 hover:text-white transition-colors">
            Support
          </Link>
        </nav>

        {/* Right: actions */}
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="hidden md:inline-flex items-center rounded-full px-4 py-[6px] text-[13px] font-medium text-zinc-300 hover:text-white transition-colors"
          >
            Login
          </Link>
          <Link
            href="#contact"
            className="hidden md:inline-flex items-center rounded-full px-4 py-[6px] text-[13px] font-medium text-zinc-300 hover:text-white transition-colors"
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
