import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { GalleryCard, type GalleryProject } from "./gallery/GalleryCard";

// Bento Grid Gallery Projects Dataset (Exactly 6 items covering required categories)
const bentoProjects: GalleryProject[] = [
  {
    id: "proj-1",
    title: "Grand Hyatt Botanical Lobby",
    category: "Hotel",
    location: "Jakarta Pusat",
    description:
      "Instalasi 45+ tanaman tropis eksotis dengan sistem penyiraman otomatis & perawatan harian untuk lobi hotel bintang lima.",
    imageUrl:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Dekorasi tanaman hias lobi hotel bintang lima",
    bentoClass: "md:col-span-2 lg:col-span-2 lg:row-span-2 min-h-[380px] sm:min-h-[460px] lg:min-h-[520px]",
    isFeatured: true,
  },
  {
    id: "proj-2",
    title: "Tokopedia Tower Biophilic Office",
    category: "Office",
    location: "Jakarta Selatan",
    description:
      "Konsep taman kerja biofilik di 5 lantai kantor corporate untuk meningkatkan kualitas udara dan produktivitas karyawan.",
    imageUrl:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Taman tanaman hias indoor ruangan kantor modern",
    bentoClass: "md:col-span-1 lg:col-span-1 min-h-[250px] lg:min-h-[250px]",
  },
  {
    id: "proj-3",
    title: "Emerald Grand Wedding Backdrop",
    category: "Wedding",
    location: "Bali",
    description:
      "Dekorasi lanskap taman tropis impian untuk pernikahan outdoor mewah dengan perpaduan bunga fresh dan monstera eksotis.",
    imageUrl:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Dekorasi taman dan bunga pernikahan outdoor mewah",
    bentoClass: "md:col-span-1 lg:col-span-1 min-h-[250px] lg:min-h-[250px]",
  },
  {
    id: "proj-4",
    title: "Gala Dinner Tech Summit",
    category: "Event",
    location: "Surabaya",
    description:
      "Penataan 120 pot tanaman hias eksklusif & wall garden temporer untuk gala dinner internasional berkapasitas 1000 tamu.",
    imageUrl:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Instalasi taman temporer untuk acara gala dinner",
    bentoClass: "md:col-span-1 lg:col-span-1 min-h-[260px] lg:min-h-[270px]",
  },
  {
    id: "proj-5",
    title: "Artisan Culinary Botanical Sanctuary",
    category: "Restaurant",
    location: "Bandung",
    description:
      "Pengalaman bersantap di tengah hutan tropis mini dengan penataan hanging plants dan monstera deliciosa rindang.",
    imageUrl:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Dekorasi tanaman hias restoran fine dining",
    bentoClass: "md:col-span-2 lg:col-span-2 min-h-[260px] lg:min-h-[270px]",
  },
  {
    id: "proj-6",
    title: "Private Penthouse Tropical Oasis",
    category: "Residence",
    location: "PIK 2 Jakarta",
    description:
      "Rancangan lanskap balkon & ruang keluarga penthouse mewah dengan perpaduan palem hias dan pot terakota minimalis.",
    imageUrl:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Taman indoor dan balkon hunian penthouse eksklusif",
    bentoClass: "md:col-span-1 lg:col-span-3 min-h-[240px] lg:min-h-[250px]",
  },
];

const Galery = () => {
  return (
    <section className="relative w-full py-20 px-4 sm:px-8 lg:px-12 xl:px-16 bg-[#F4F7F4] overflow-hidden">
      {/* Background Decorative Ambient Glow */}
      <div className="pointer-events-none absolute left-1/2 top-10 -translate-x-1/2 -z-10 h-[450px] w-[700px] rounded-full bg-emerald-200/20 blur-[120px]" />

      <div className="mx-auto max-w-7xl">
        {/* ================= SECTION HEADER ================= */}
        <div className="mx-auto max-w-3xl text-center flex flex-col items-center gap-4 mb-14 animate-fade-up">
          {/* Section Title */}
          <h2 className="text-3xl font-extrabold tracking-tight text-emerald-950 sm:text-4xl lg:text-5xl">
            Galeri <span className="font-serif-display italic font-normal text-emerald-800">Proyek</span>
          </h2>

          {/* Section Subtitle */}
          <p className="text-base sm:text-lg leading-relaxed text-emerald-900/70 max-w-2xl font-normal">
            Lihat berbagai proyek dekorasi tanaman yang telah kami kerjakan untuk kantor, hotel, restoran, wedding, dan berbagai event lainnya.
          </p>
        </div>

        {/* ================= BENTO GRID CONTAINER ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-6 mb-3">
          {bentoProjects.map((project, index) => (
            <GalleryCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* ================= CENTERED ACTION BUTTON ================= */}
        <div
          className="mt-14 flex justify-center animate-fade-up"
          style={{ animationDelay: "400ms" }}
        >
          <Link
            href="/galery"
            className="group relative flex items-center justify-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-emerald-900 via-emerald-850 to-emerald-950 px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-emerald-950/20 transition-all hover:scale-[1.03] hover:shadow-2xl hover:shadow-emerald-950/35 active:scale-95"
          >
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Sparkles className="h-4 w-4 text-emerald-300" />
            <span>Lihat Lebih Banyak</span>
            <ArrowRight className="h-4 w-4 text-emerald-300 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Galery;