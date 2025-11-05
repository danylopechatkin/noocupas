"use client";
import React from "react";

/**
 * NOOCUPAS — Apple‑style landing
 * Single‑file page for Next.js App Router (app/page.tsx)
 * — No top nav for now
 * — English copy
 * — Colors: white / black / yellow-400 (#FACC15)
 * — Apple‑like spacing, typography, tiles layout
 * Tailwind required. Suggested container paddings: px-4 md:px-6 lg:px-8
 */

// ——————————————————————————————————————————————————————————
// Small UI primitives
const Container: React.FC<React.PropsWithChildren<{className?: string}>> = ({ className = "", children }) => (
  <div className={`mx-auto w-full ${className}`}>
    {children}
  </div>
);

const Buttons: React.FC<{ dark?: boolean; primaryLabel?: string; secondaryLabel?: string }>
  = ({ dark = false, primaryLabel = "Get started", secondaryLabel = "Learn more" }) => (
  <div className="mt-6 flex items-center justify-center gap-3">
    <a href="#contact" className={`inline-flex items-center rounded-full px-5 py-2.5 text-sm font-medium transition shadow-sm
      bg-yellow-400 text-black hover:shadow-[0_0_30px_rgba(250,204,21,0.35)] active:scale-[0.99]`}>
      {primaryLabel}
    </a>
    <a href="#learn" className={`inline-flex items-center rounded-full px-5 py-2.5 text-sm font-medium transition
      ${dark ? "border border-white/30 text-white hover:border-white/60" : "border border-black/10 text-black hover:border-black/30"}`}>
      {secondaryLabel}
    </a>
  </div>
);

// Placeholder visual block in Apple style (clean, glossy, product‑centric)
const VisualPlaceholder: React.FC<{ dark?: boolean; label?: string }>
  = ({ dark = false, label = "Product image placeholder" }) => (
  <div className={`relative isolate w-full ${dark ? "bg-black" : "bg-white"}`}>
    <div className={`aspect-[2/1] md:aspect-[21/9] lg:aspect-[16/7] w-full overflow-hidden rounded-3xl`}> 
      <div className={`h-full w-full ${dark ? "bg-[#0A0A0A]" : "bg-[#F5F5F7]"} relative`}> 
        <div className={`pointer-events-none absolute inset-0 opacity-70 ${dark ? "[background:radial-gradient(80%_60%_at_50%_60%,#1a1a1a,transparent)]" : "[background:radial-gradient(80%_60%_at_50%_60%,#ffffff,transparent)]"}`} />
        <div className={`absolute inset-6 rounded-3xl border ${dark ? "border-white/10" : "border-black/5"}`} />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={`select-none rounded-full px-3 py-1 text-xs ${dark ? "bg-white/10 text-white/80" : "bg-black/5 text-black/60"}`}>
            {label}
          </div>
        </div>
      </div>
    </div>
  </div>
);

// ——————————————————————————————————————————————————————————
// Section: Hero (dark)
const HeroDark: React.FC = () => (
  <section className="bg-[#0A0A0A] text-white">
    <Container className="max-w-[980px] px-4 md:px-6 text-center">
      <div className="pt-28 pb-10 md:pt-40 md:pb-14">
        <h1 className="text-[44px] md:text-[64px] lg:text-[80px] leading-[0.95] font-semibold tracking-tight">
          NOOCUPAS Pro
        </h1>
        <p className="mt-3 text-lg md:text-2xl text-white/80">
          Smart home security that acts in minutes. Installation within 24 hours.
        </p>
        <Buttons dark primaryLabel="Install now" secondaryLabel="How it works" />
      </div>
    </Container>
    <Container className="max-w-[1380px] px-4 md:px-6 lg:px-8 pb-14 md:pb-20">
      <VisualPlaceholder dark label="Flagship Kit — camera • siren • hub" />
    </Container>
  </section>
);

// Section: Hero (light)
const HeroLight: React.FC = () => (
  <section className="bg-[#F5F5F7] text-black">
    <Container className="max-w-[980px] px-4 md:px-6 text-center">
      <div className="pt-24 pb-8 md:pt-28 md:pb-12">
        <h2 className="text-[40px] md:text-[56px] leading-[0.95] font-semibold tracking-tight">
          NOOCUPAS Air
        </h2>
        <p className="mt-3 text-lg md:text-2xl text-neutral-700">
          Minimal, discreet, powerful. A clean setup that blends into any interior.
        </p>
        <Buttons primaryLabel="See plans" secondaryLabel="Compare kits" />
      </div>
    </Container>
    <Container className="max-w-[1380px] px-4 md:px-6 lg:px-8 pb-14 md:pb-20">
      <VisualPlaceholder label="Slim sensors • hidden wiring • low‑profile mounts" />
    </Container>
  </section>
);

// ——————————————————————————————————————————————————————————
// Generic Tile (for 2‑up grid rows)
const Tile: React.FC<{
  theme?: "light" | "dark" | "soft";
  title: string;
  subtitle?: string;
  ctaPrimary?: string;
  ctaSecondary?: string;
}> = ({ theme = "light", title, subtitle, ctaPrimary = "Learn more", ctaSecondary = "Buy plan" }) => {
  const isDark = theme === "dark";
  const isSoft = theme === "soft"; // soft gray
  return (
    <div className={`relative min-h-[660px] rounded-3xl overflow-hidden p-8 md:p-12 lg:p-16
      ${isDark ? "bg-[#0A0A0A] text-white" : isSoft ? "bg-[#F5F5F7] text-black" : "bg-white text-black"}`}>
      <div className="max-w-[520px]">
        <h3 className="text-[32px] md:text-[44px] font-semibold tracking-tight">
          {title}
        </h3>
        {subtitle && (
          <p className={`mt-3 text-base md:text-lg ${isDark ? "text-white/80" : "text-neutral-700"}`}>
            {subtitle}
          </p>
        )}
      </div>
      <div className="mt-8 md:mt-10 lg:mt-12">
        <Buttons dark={isDark} primaryLabel={ctaPrimary} secondaryLabel={ctaSecondary} />
      </div>
      <div className="absolute inset-x-6 bottom-6 md:inset-x-8 md:bottom-8">
        <div className="rounded-2xl overflow-hidden border border-black/10 dark:border-white/10">
          <div className={`aspect-[16/9] w-full ${isDark ? "bg-black" : isSoft ? "bg-[#ECECEC]" : "bg-[#F7F7F7]"} flex items-center justify-center`}>
            <span className={`${isDark ? "text-white/70" : "text-black/50"} text-sm`}>Image / product render</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Rows of two tiles like Apple home page
const TwoUpRow: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Container className="max-w-[1380px] px-4 md:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
      {children}
    </div>
  </Container>
);

// ——————————————————————————————————————————————————————————
// Footer + legal
const Legal: React.FC = () => (
  <section className="bg-white">
    <Container className="max-w-[1380px] px-4 md:px-6 lg:px-8">
      <div className="pt-10 pb-6 border-t border-neutral-200">
        <p className="text-xs leading-6 text-neutral-500">
          1. Installation time depends on location and availability. Same‑day service may not be available in all regions.\n
          2. Monitoring and police dispatch follow local regulations and our security protocol.\n
          3. Features are subject to change. Some services may be unavailable in certain areas or languages.
        </p>
      </div>
    </Container>
  </section>
);

const Footer: React.FC = () => (
  <footer className="bg-[#F5F5F7] text-black">
    <Container className="max-w-[1380px] px-4 md:px-6 lg:px-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 py-10">
        {[
          { h: "Products", i: ["Pro Kit", "Air Kit", "Cameras", "Sirens"] },
          { h: "Services", i: ["24/7 Monitoring", "Installation", "Maintenance", "CRM App"] },
          { h: "Company", i: ["About", "Careers", "Press", "Contact"] },
          { h: "Legal", i: ["Privacy", "GDPR", "Terms", "SLA"] },
        ].map((col) => (
          <div key={col.h}>
            <h4 className="text-sm font-semibold mb-3">{col.h}</h4>
            <ul className="space-y-2">
              {col.i.map((x) => (
                <li key={x} className="text-sm text-neutral-700 hover:text-black cursor-pointer">{x}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between border-t border-black/10 py-6">
        <p className="text-xs text-neutral-600">© {new Date().getFullYear()} NOOCUPAS. All rights reserved.</p>
        <div className="mt-2 md:mt-0 flex items-center gap-2 text-xs text-neutral-600">
          <span className="inline-block h-2 w-2 rounded-full bg-yellow-400" />
          <span>Designed with a clean, Apple‑inspired aesthetic.</span>
        </div>
      </div>
    </Container>
  </footer>
);

// ——————————————————————————————————————————————————————————
// Page assembly
export default function Page() {
  return (
    <main className="bg-white text-[#111] font-sans">
      {/* Dark hero (Pro) */}
      <HeroDark />

      {/* Light hero (Air) */}
      <HeroLight />

      {/* Grid rows 1–3 (like Apple home pairs) */}
      <section className="py-8 md:py-12">
        <TwoUpRow>
          <Tile
            theme="light"
            title="24/7 Monitoring"
            subtitle="Professionals verify alerts and escalate via a clear protocol."
            ctaPrimary="See details"
            ctaSecondary="Get quote"
          />
          <Tile
            theme="dark"
            title="Cameras, done right"
            subtitle="Crisp image, instant access, privacy for owners only."
            ctaPrimary="View cameras"
            ctaSecondary="Install now"
          />
        </TwoUpRow>
      </section>

      <section className="py-2 md:py-6">
        <TwoUpRow>
          <Tile
            theme="soft"
            title="Siren & deterrence"
            subtitle="Wireless sirens and beacons that stop intruders fast."
            ctaPrimary="Hear the power"
            ctaSecondary="Compare"
          />
          <Tile
            theme="light"
            title="NOOCUPAS App"
            subtitle="Arm, disarm, and review events in seconds."
            ctaPrimary="Preview"
            ctaSecondary="Download"
          />
        </TwoUpRow>
      </section>

      <section className="py-2 md:py-6">
        <TwoUpRow>
          <Tile
            theme="dark"
            title="Use your existing gear"
            subtitle="We integrate supported devices and save your budget."
            ctaPrimary="Check compatibility"
            ctaSecondary="Book visit"
          />
          <Tile
            theme="soft"
            title="Plans that fit"
            subtitle="Simple monthly pricing. No surprises."
            ctaPrimary="See plans"
            ctaSecondary="Talk to us"
          />
        </TwoUpRow>
      </section>

      {/* Legal + Footer */}
      <Legal />
      <Footer />
    </main>
  );
}
