"use client";
import React from "react";

// ——————————————————————————————————————————————————————————
// Small UI primitives
const Container: React.FC<React.PropsWithChildren<{ className?: string }>> = ({
  className = "",
  children,
}) => <div className={`mx-auto w-full ${className}`}>{children}</div>;

const Buttons: React.FC<{
  dark?: boolean;
  primaryLabel?: string;
  secondaryLabel?: string;
}> = ({
  dark = false,
  primaryLabel = "Get started",
  secondaryLabel = "Learn more",
}) => (
  <div className="mt-6 flex items-center justify-center gap-3">
    <a
      href="#contact"
      className="inline-flex items-center rounded-full px-5 py-2.5 text-sm font-medium shadow-sm transition bg-yellow-400 text-black hover:shadow-[0_0_30px_rgba(250,204,21,0.35)] active:scale-[0.99]"
    >
      {primaryLabel}
    </a>
    <a
      href="#learn"
      className={`inline-flex items-center rounded-full px-5 py-2.5 text-sm font-medium transition ${
        dark
          ? "border border-white/30 text-white hover:border-white/60"
          : "border border-black/10 text-black hover:border-black/30"
      }`}
    >
      {secondaryLabel}
    </a>
  </div>
);

// Placeholder visual block in Apple style (clean, glossy, product-centric)
const VisualPlaceholder: React.FC<{
  dark?: boolean;
  label?: string;
}> = ({ dark = false, label = "Product image placeholder" }) => (
  <div className={`relative isolate w-full ${dark ? "bg-black" : "bg-white"}`}>
    <div className="aspect-[2/1] md:aspect-[21/9] lg:aspect-[16/7] w-full overflow-hidden rounded-3xl">
      <div
        className={`h-full w-full ${
          dark ? "bg-[#0A0A0A]" : "bg-[#F5F5F7]"
        } relative`}
      >
        <div
          className={`pointer-events-none absolute inset-0 opacity-70 ${
            dark
              ? "[background:radial-gradient(80%_60%_at_50%_60%,#1a1a1a,transparent)]"
              : "[background:radial-gradient(80%_60%_at_50%_60%,#ffffff,transparent)]"
          }`}
        />
        {/* ослабляем бордер, чтобы не давал паразитных линий под прозрачным меню */}
        <div
          className={`absolute inset-6 rounded-3xl border ${
            dark ? "border-white/5" : "border-black/5"
          }`}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className={`select-none rounded-full px-3 py-1 text-xs ${
              dark
                ? "bg-white/10 text-white/80"
                : "bg-black/5 text-black/60"
            }`}
          >
            {label}
          </div>
        </div>
      </div>
    </div>
  </div>
);

// ——————————————————————————————————————————————————————————
// Section: Hero (dark) — with pro gradient + anchor
const HeroDark: React.FC = () => (
  <section
    id="products"
    className="bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] text-white"
  >
    <Container className="max-w-[980px] px-[24px] sm:px-[30px] md:px-[40px] lg:px-[56px] text-center">
      <div className="pt-24 pb-10 md:pt-28 md:pb-14">
        <h1 className="text-[44px] md:text-[64px] lg:text-[80px] leading-[0.95] font-extrabold tracking-[-0.02em]">
          NOOCUPAS Pro
        </h1>
        <p className="mt-3 text-lg md:text-2xl text-white/80">
          Smart home security that acts in minutes. Installation within 24
          hours.
        </p>
        <Buttons dark primaryLabel="Install now" secondaryLabel="How it works" />
      </div>
    </Container>
    <Container className="max-w-[1400px] px-[24px] sm:px-[30px] md:px-[40px] lg:px-[56px] pb-10 md:pb-16 lg:pb-20">
      <VisualPlaceholder dark label="Flagship Kit — camera • siren • hub" />
    </Container>
  </section>
);

// Section: Hero (light) — with anchor
const HeroLight: React.FC = () => (
  <section id="solutions" className="bg-[#F5F5F7] text-black">
    <Container className="max-w-[980px] px-[24px] sm:px-[30px] md:px-[40px] lg:px-[56px] text-center">
      <div className="pt-20 pb-8 md:pt-24 md:pb-12">
        <h2 className="text-[40px] md:text-[56px] leading-[0.95] font-bold tracking-[-0.02em]">
          NOOCUPAS Air
        </h2>
        <p className="mt-3 text-lg md:text-2xl text-neutral-700">
          Minimal, discreet, powerful. A clean setup that blends into any
          interior.
        </p>
        <Buttons primaryLabel="See plans" secondaryLabel="Compare kits" />
      </div>
    </Container>
    <Container className="max-w-[1400px] px-[24px] sm:px-[30px] md:px-[40px] lg:px-[56px] pb-10 md:pb-16 lg:pb-20">
      <VisualPlaceholder label="Slim sensors • hidden wiring • low-profile mounts" />
    </Container>
  </section>
);

// ——————————————————————————————————————————————————————————
// Apple-style promo card (как блоки Watch / iPad)
const Tile: React.FC<{
  theme?: "light" | "dark" | "soft";
  eyebrow?: string; // маленький заголовок сверху (категория)
  title: string; // большое название устройства/услуги
  subtitle?: string; // подзаголовок
  ctaPrimary?: string; // текст кнопки 1
  ctaSecondary?: string; // текст кнопки 2
}> = ({
  theme = "light",
  eyebrow,
  title,
  subtitle,
  ctaPrimary = "Learn more",
  ctaSecondary = "Order now",
}) => {
  const isDark = theme === "dark";
  const isSoft = theme === "soft"; // soft gray

  // фоны в духе Apple
  const bg =
    theme === "dark"
      ? "bg-[#0B0B0B] text-white" // iPad Pro / dark promo
      : theme === "soft"
      ? "bg-[#F5F5F7] text-black" // Trade In / AirPods
      : "bg-white text-black"; // белые промо-блоки

  return (
    <div
      className={`relative overflow-hidden rounded-3xl ${bg}
        shadow-[0_18px_40px_rgba(0,0,0,0.08)]
        hover:shadow-[0_24px_60px_rgba(0,0,0,0.12)]
        transition-shadow duration-300`}
    >
      <div className="flex h-full flex-col">
        {/* Верхняя текстовая часть как у Apple Watch карточек */}
        <div className="px-6 md:px-10 pt-10 md:pt-14 pb-6 text-center">
          {eyebrow && (
            <div
              className={`mb-1 text-xs font-semibold tracking-[0.12em] uppercase ${
                isDark ? "text-white/70" : "text-neutral-600"
              }`}
            >
              {eyebrow}
            </div>
          )}

          <h3 className="text-[30px] md:text-[36px] lg:text-[40px] font-semibold tracking-[-0.02em]">
            {title}
          </h3>

          {subtitle && (
            <p
              className={`mt-2 text-sm md:text-[15px] leading-relaxed ${
                isDark ? "text-white/80" : "text-neutral-700"
              }`}
            >
              {subtitle}
            </p>
          )}

          {/* Кнопки в стиле Learn more / Buy */}
          <div className="mt-6 flex items-center justify-center gap-3">
            <button
              className={`inline-flex items-center rounded-full px-5 py-2 text-sm font-medium tracking-tight ${
                isDark
                  ? "bg-white text-black hover:bg-white/90"
                  : "bg-yellow-400 text-black hover:shadow-[0_0_20px_rgba(250,204,21,0.35)]"
              } transition`}
            >
              {ctaPrimary}
            </button>
            <button
              className={`inline-flex items-center rounded-full px-5 py-2 text-sm font-medium tracking-tight border ${
                isDark
                  ? "border-white/40 text-white hover:border-white/70"
                  : "border-black/10 text-black hover:border-black/30"
              } transition`}
            >
              {ctaSecondary}
            </button>
          </div>
        </div>

        {/* Нижняя зона под картинку устройства */}
        <div className="mt-4 px-6 md:px-8 pb-10">
          <div className="overflow-hidden rounded-2xl border border-black/5 dark:border-white/10">
            <div
              className={`aspect-[16/9] w-full flex items-center justify-center ${
                isDark ? "bg-black" : isSoft ? "bg-[#ECECEC]" : "bg-[#F7F7F7]"
              }`}
            >
              <span
                className={`text-xs md:text-sm ${
                  isDark ? "text-white/70" : "text-black/45"
                }`}
              >
                Image / security device render
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Rows of two tiles like Apple home page
const TwoUpRow: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Container className="max-w-[1400px]">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
      {children}
    </div>
  </Container>
);

// ——————————————————————————————————————————————————————————
// Footer + legal
const Legal: React.FC = () => (
  <section className="bg-white">
    <Container className="max-w-[1400px] px-[24px] sm:px-[30px] md:px-[40px] lg:px-[56px]">
      <div className="border-t border-neutral-200 pt-10 pb-6">
        <p className="text-xs leading-6 text-neutral-500">
          1. Installation time depends on location and availability. Same-day
          service may not be available in all regions.
          {"\n"}
          2. Monitoring and police dispatch follow local regulations and our
          security protocol.
          {"\n"}
          3. Features are subject to change. Some services may be unavailable in
          certain areas or languages.
        </p>
      </div>
    </Container>
  </section>
);

const Footer: React.FC = () => (
  <footer className="bg-[#F5F5F7] text-black">
    <Container className="max-w-[1400px] px-[24px] sm:px-[30px] md:px-[40px] lg:px-[56px]">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 py-10">
        {[
          { h: "Products", i: ["Pro Kit", "Air Kit", "Cameras", "Sirens"] },
          {
            h: "Services",
            i: ["24/7 Monitoring", "Installation", "Maintenance", "CRM App"],
          },
          { h: "Company", i: ["About", "Careers", "Press", "Contact"] },
          { h: "Legal", i: ["Privacy", "GDPR", "Terms", "SLA"] },
        ].map((col) => (
          <div key={col.h}>
            <h4 className="mb-3 text-sm font-semibold">{col.h}</h4>
            <ul className="space-y-2">
              {col.i.map((x) => (
                <li
                  key={x}
                  className="cursor-pointer text-sm text-neutral-700 hover:text-black"
                >
                  {x}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-start justify-between border-t border-black/10 py-6 md:flex-row md:items-center">
        <p className="text-xs text-neutral-600">
          © {new Date().getFullYear()} NOOCUPAS. All rights reserved.
        </p>
        <div className="mt-2 flex items-center gap-2 text-xs text-neutral-600 md:mt-0">
          <span className="inline-block h-2 w-2 rounded-full bg-yellow-400" />
          <span>Designed with a clean, Apple-inspired aesthetic.</span>
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
      <section id="pricing" className="py-8 md:py-10">
        <TwoUpRow>
          <Tile
            theme="light"
            eyebrow="Indoor kit"
            title="Apartment Protection"
            subtitle="Hub, keypad and motion sensors for apartments and small offices."
            ctaPrimary="Learn more"
            ctaSecondary="Order install"
          />
          <Tile
            theme="dark"
            eyebrow="Outdoor cameras"
            title="Perimeter View"
            subtitle="Weatherproof cameras with instant access from your phone."
            ctaPrimary="View cameras"
            ctaSecondary="Book visit"
          />
        </TwoUpRow>
      </section>

      <section className="py-8 md:py-10">
        <TwoUpRow>
          <Tile
            theme="soft"
            eyebrow="Sirens"
            title="Loud deterrence"
            subtitle="Wireless sirens and light beacons that stop intruders fast."
            ctaPrimary="Hear the power"
            ctaSecondary="Compare options"
          />
          <Tile
            theme="light"
            eyebrow="Control app"
            title="NOOCUPAS App"
            subtitle="Arm, disarm and review events in seconds, from anywhere."
            ctaPrimary="Preview app"
            ctaSecondary="Get demo"
          />
        </TwoUpRow>
      </section>

      <section id="support" className="py-8 md:py-10">
        <TwoUpRow>
          <Tile
            theme="dark"
            eyebrow="Integration"
            title="Use existing devices"
            subtitle="We reuse supported sensors and cameras to save your budget."
            ctaPrimary="Check compatibility"
            ctaSecondary="Book inspection"
          />
          <Tile
            theme="soft"
            eyebrow="Plans"
            title="Plans that fit"
            subtitle="Simple monthly subscriptions with monitoring and support."
            ctaPrimary="See plans"
            ctaSecondary="Talk to expert"
          />
        </TwoUpRow>
      </section>

      {/* Legal + Footer */}
      <Legal />
      <Footer />
    </main>
  );
}
