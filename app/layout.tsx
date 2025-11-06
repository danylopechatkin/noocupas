// app/layout.tsx
import Nav from "../components/Nav";
import "./globals.css";
import { Manrope } from "next/font/google";  // ⬅ вместо Inter

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"], // нужные веса под меню/заголовки
});

export const metadata = {
  title: "NOOCUPAS – Smart Security in 24h",
  description: "Professional alarm installation and monitoring within 24 hours.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-white">
      <body className={`${manrope.className} antialiased`}>  {/* ⬅ используем Manrope */}
        {/* Nav и контент */}
         <Nav />
        {children}
      </body>
    </html>
  );
}
