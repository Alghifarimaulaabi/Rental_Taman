import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero";
import About from "@/components/about";

import Galery from "@/components/Galery";
import Process from "@/components/process";
import Footer from "@/components/layout/Footer";

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
