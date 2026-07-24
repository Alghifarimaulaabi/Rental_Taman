import dynamic from "next/dynamic";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero";
import About from "@/components/about";

// Code-split komponen below-the-fold untuk mengurangi initial JS bundle
// SSR tetap aktif agar SEO terjaga (HTML di-render server-side, JS chunk terpisah)
const Galery = dynamic(() => import("@/components/Galery"), { ssr: true });
const Process = dynamic(() => import("@/components/process"), { ssr: true });
const Footer = dynamic(() => import("@/components/layout/Footer"), { ssr: true });

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col bg-[#F4F7F4] selection:bg-emerald-900 selection:text-white overflow-x-hidden">
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Gallery Section (Bento Grid) — lazy loaded */}
      <Galery />

      {/* Order Workflow / Process Section — lazy loaded */}
      <Process />

      {/* Footer Layout — lazy loaded */}
      <Footer />
    </main>
  );
}
