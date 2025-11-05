import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "NOOCUPAS – Smart Security in 24h",
  description: "Professional alarm installation and monitoring within 24 hours.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-white">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
