"use client";
import React from "react";
import Link from "next/link";

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* полупрозрачная панель с blur */}
      <div className="mx-auto max-w-[1380px] px-4 md:px-6 lg:px-8">
        <div className="mt-2 h-[56px] rounded-full border border-black/10 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
          <div className="flex h-full items-center justify-between px-3 md:px-5">
            {/* Лого/бренд */}
            <Link href="/" className="inline-flex items-center gap-2">
              <span className="inline-block h-3 w-3 rounded-full bg-yellow-400" />
              <span className="text-sm font-semibold tracking-[-0.01em]">NOOCUPAS</span>
            </Link>

            {/* Линки (на мобиле скрыты) */}
            <nav className="hidden md:flex items-center gap-6">
              <Link href="#products" className="text-sm font-medium tracking-[-0.01em] text-neutral-800 hover:text-black">Products</Link>
              <Link href="#solutions" className="text-sm font-medium tracking-[-0.01em] text-neutral-800 hover:text-black">Solutions</Link>
              <Link href="#pricing" className="text-sm font-medium tracking-[-0.01em] text-neutral-800 hover:text-black">Pricing</Link>
              <Link href="#support" className="text-sm font-medium tracking-[-0.01em] text-neutral-800 hover:text-black">Support</Link>
            </nav>

            {/* Кнопки справа */}
            <div className="flex items-center gap-2">
              <Link href="#contact" className="hidden md:inline-flex items-center rounded-full border border-black/10 px-4 py-2 text-sm font-medium tracking-[-0.01em] hover:border-black/30">Contact</Link>
              <Link href="#install" className="inline-flex items-center rounded-full bg-yellow-400 px-4 py-2 text-sm font-semibold tracking-[-0.01em] text-black hover:shadow-[0_0_20px_rgba(250,204,21,0.35)] active:scale-[0.99]">Install now</Link>
            </div>
          </div>
        </div>
      </div>

      {/* тонкая линия снизу, как у Apple */}
      <div className="pointer-events-none absolute inset-x-0 top-[56px] h-px bg-black/10" />
    </header>
  );
}
