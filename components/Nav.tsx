"use client";
import React from "react";
import Link from "next/link";

// маленький жёлтый логотип-уточка
const DuckIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    {...props}
  >
    {/* тело */}
    <path
      d="M6 13.5C6 10.46 8.46 8 11.5 8c1.05 0 1.9.23 2.6.63.38.22.63.34 1.02.34.76 0 1.38-.5 1.61-1.23L17 7h1a2 2 0 0 1 0 4h-.36c-.5 2.9-2.95 5-6.39 5H9.5A3.5 3.5 0 0 1 6 13.5Z"
      className="fill-yellow-400"
    />
    {/* голова */}
    <circle cx="8.5" cy="8.5" r="2.1" className="fill-yellow-400" />
    {/* клюв */}
    <path
      d="M7.7 8.2h-1.6c-.4 0-.6.3-.6.7 0 .4.24.7.64.7h1.2c.28 0 .46-.07.64-.26l.38-.4-.38-.4c-.17-.18-.36-.3-.64-.3Z"
      className="fill-[#f97316]"
    />
    {/* глаз */}
    <circle cx="9.2" cy="7.9" r="0.25" className="fill-black" />
  </svg>
);

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#0b0b0b]/80 backdrop-blur-md supports-[backdrop-filter]:bg-[#0b0b0b]/60 border-b border-white/10">
      <div className="mx-auto flex h-[44px] md:h-[48px] max-w-[1400px] items-center justify-between px-4 sm:px-6 md:px-8 lg:px-10">
        {/* Left: brand */}
        <Link href="/" className="inline-flex items-center gap-2">
          <DuckIcon className="h-4 w-4 md:h-5 md:w-5" />
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
