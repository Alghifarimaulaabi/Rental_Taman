import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-serif-display",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aliza Decoration | Premium Garden & Botanical Rental",
  description:
    "Layanan sewa tanaman hias, dekorasi taman, dan konsep lanskap botanical mewah untuk pernikahan, event corporate, kantor, & hunian eksklusif.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${playfair.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F6F8F5] text-emerald-950 font-sans selection:bg-emerald-800 selection:text-emerald-50">
        {children}
      </body>
    </html>
  );
}
