import Navbar from "@/components/layout/Navbar";
import Galery from "@/components/Galery";

export default function GaleryPage() {
  return (
    <main className="relative flex min-h-screen flex-col bg-[#F4F7F4] selection:bg-emerald-900 selection:text-white overflow-x-hidden">
      <Navbar />
      <div className="pt-6">
        <Galery />
      </div>
    </main>
  );
}
