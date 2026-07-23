import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero";
import About from "@/components/about";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col bg-[#F4F7F4] selection:bg-emerald-900 selection:text-white overflow-x-hidden">
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />
    </main>
  );
}
