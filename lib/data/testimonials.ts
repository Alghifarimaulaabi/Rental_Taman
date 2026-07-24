import { Testimonial } from "../types/project";

export const testimonialsData: Testimonial[] = [
  {
    id: "testi-1",
    customerName: "Budi Santoso",
    customerRole: "General Manager, Grand Hyatt Jakarta",
    customerAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
    rating: 5,
    content:
      "Layanan sewa tanaman Aliza Decoration sangat luar biasa! Tanaman di lobi hotel kami selalu tampak segar, hijau, dan sangat terawat. Tamu-tamu hotel sering memuji atmosfer tropis yang menenangkan.",
    date: "14 Mei 2026",
    projectId: "proj-1"
  },
  {
    id: "testi-2",
    customerName: "Siti Rahmawati",
    customerRole: "Head of Workplace & Facility, Tokopedia",
    customerAvatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop",
    rating: 5,
    content:
      "Konsep taman biofilik di kantor kami berhasil meningkatkan produktivitas dan semangat kerja tim. Tim Aliza sangat responsif dan rutin melakukan perawatan pasca jam kerja tanpa mengganggu kegiatan operasional.",
    date: "28 April 2026",
    projectId: "proj-2"
  },
  {
    id: "testi-3",
    customerName: "Clarissa & Kevin",
    customerRole: "Bridal Couple, Bali Wedding",
    customerAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
    rating: 5,
    content:
      "Dekorasi pelaminan tropis impian kami terwujud dengan sempurna! Perpaduan monstera eksotis dan bunga fresh nya benar-benar memukau. Hasil foto-foto pernikahan kami kelihatan mahal dan sangat elegan.",
    date: "10 Juni 2026",
    projectId: "proj-3"
  },
  {
    id: "testi-4",
    customerName: "Hendrik Wijaya",
    customerRole: "Event Director, Tech Summit Indonesia",
    customerAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
    rating: 5,
    content:
      "Pemasangan 120 pot tanaman dan temporary wall garden untuk gala dinner sangat cepat dan presisi. Pot bernuansa matte gold mereka mempercantik panggung utama secara drastis.",
    date: "02 Juli 2026",
    projectId: "proj-4"
  },
  {
    id: "testi-5",
    customerName: "Chef Andrea Pratama",
    customerRole: "Owner, Artisan Culinary Bandung",
    customerAvatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=400&auto=format&fit=crop",
    rating: 5,
    content:
      "Atmosfer resto kami berubah total sejak bekerja sama dengan Aliza. Pengunjung betah berlama-lama karena udara rasanya jauh lebih segar dan estetik untuk spot konten sosial media.",
    date: "19 Juni 2026",
    projectId: "proj-5"
  },
  {
    id: "testi-6",
    customerName: "Dr. Natasha Vernanda",
    customerRole: "Penthouse Owner, PIK 2",
    customerAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop",
    rating: 5,
    content:
      "Sebagai pemilik hunian yang sibuk, fasilitas personal gardener dari Aliza sangat membantu. Balkon penthouse saya sekarang seperti resort mewah pribadi tanpa pusing soal perawatan.",
    date: "15 Juli 2026",
    projectId: "proj-6"
  }
];

export function getTestimonialsForProject(projectId?: string): Testimonial[] {
  if (!projectId) return testimonialsData;
  const projectSpecific = testimonialsData.filter((t) => t.projectId === projectId);
  if (projectSpecific.length > 0) {
    // Fill remaining with other testimonials so slider always has full cards
    const others = testimonialsData.filter((t) => t.projectId !== projectId);
    return [...projectSpecific, ...others];
  }
  return testimonialsData;
}
