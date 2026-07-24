import { Project } from "../types/project";

export const projectsData: Project[] = [
  {
    id: "proj-1",
    slug: "grand-hyatt-botanical-lobby",
    title: "Grand Hyatt Botanical Lobby",
    category: "Hotel",
    location: "Jakarta Pusat",
    rentalPrice: "Rp 12.500.000",
    pricePeriod: "bulan",
    availabilityStatus: "Tersedia",
    shortDescription:
      "Instalasi 45+ tanaman tropis eksotis dengan sistem penyiraman otomatis & perawatan harian untuk lobi hotel bintang lima.",
    fullDescription: [
      "Mengubah area lobi utama Grand Hyatt Jakarta menjadi suaka alam tropis nan mewah. Konsep penataan ini memadukan Monstera Deliciosa raksasa, Philodendron Marble, dan Palem Sadeng langka dalam pot semen terakota buatan tangan.",
      "Seluruh tanaman dilengkapi dengan sensor kelembaban pintar tanah dan micro-drip irrigation system tersembunyi. Tim botanis profesional kami melakukan inspeksi harian dan pembersihan pemeliharaan daun 3x seminggu untuk menjamin kesegaran prima sepanjang tahun."
    ],
    features: [
      "45+ Jenis Tanaman Tropis Premium",
      "Sistem Penyiraman Otomatis Terintegrasi",
      "Perawatan Rutin 3x Seminggu oleh Tim Expert",
      "Garansi Diganti Baru Jika Tanaman Layu",
      "Desain Pot Custom Sesuai Interior Lobi"
    ],
    specs: [
      { label: "Luas Area", value: "180 m²" },
      { label: "Durasi Kontrak", value: "Minimum 6 Bulan" },
      { label: "Jumlah Tanaman", value: "48 Pot Besar" },
      { label: "Fasilitas Perawatan", value: "Termasuk (All-in)" }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop",
        alt: "Grand Hyatt Botanical Lobby Main View",
        caption: "Suasana utama lobi hotel dengan instalasi tanaman tropis eksotis"
      },
      {
        url: "https://images.unsplash.com/photo-1545241047-6083a3684587?q=80&w=1200&auto=format&fit=crop",
        alt: "Detail Monstera Deliciosa Raksasa",
        caption: "Detail tanaman Monstera Deliciosa dengan daun sempurna"
      },
      {
        url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
        alt: "Penataan Area Lounge",
        caption: "Sudut bersantai lobi yang dikelilingi vegetasi hijau rindang"
      },
      {
        url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop",
        alt: "Lighting Malam Hari",
        caption: "Pencahayaan sore hari yang menonjolkan estetika tanaman"
      }
    ],
    isFeatured: true
  },
  {
    id: "proj-2",
    slug: "tokopedia-tower-biophilic-office",
    title: "Tokopedia Tower Biophilic Office",
    category: "Office",
    location: "Jakarta Selatan",
    rentalPrice: "Rp 18.000.000",
    pricePeriod: "bulan",
    availabilityStatus: "Reservasi Terbatas",
    shortDescription:
      "Konsep taman kerja biofilik di 5 lantai kantor corporate untuk meningkatkan kualitas udara dan produktivitas karyawan.",
    fullDescription: [
      "Penataan lanskap hijau indoor seluas 5 lantai di Tokopedia Tower Jakarta Selatan. Menampilkan vertical garden hemat ruang, room divider dari srigading dan sansevieria pemurni udara, serta breakout area bergaya oasis.",
      "Desain biofilik ini dirancang khusus untuk mengurangi tingkat stres area kerja, menyerap sinyal radiasi elektromagnetik, dan meningkatkan kualitas sirkulasi udara di dalam ruangan ber-AC."
    ],
    features: [
      "Sistem Vertical Garden Modular",
      "Tanaman Pemurni Udara (Air Purifying Plants)",
      "Perawatan Mingguan Pasca Jam Kerja",
      "Sertifikasi Ramah Lingkungan & Biofilik",
      "Penggantian Tanaman Berkala Setiap Bulan"
    ],
    specs: [
      { label: "Luas Area", value: "5 Floors (450 m²)" },
      { label: "Durasi Kontrak", value: "12 Bulan" },
      { label: "Jumlah Tanaman", value: "120+ Pot & 3 Vertical Walls" },
      { label: "Fasilitas Perawatan", value: "Termasuk Pembersihan Dusting" }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
        alt: "Tokopedia Tower Office Landscape",
        caption: "Taman biofilik terintegrasi di ruang kerja utama"
      },
      {
        url: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1200&auto=format&fit=crop",
        alt: "Open Space Meeting Area",
        caption: "Breakout zone karyawan dengan dekorasi tanaman hijau"
      },
      {
        url: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200&auto=format&fit=crop",
        alt: "Desk Divider Plants",
        caption: "Pembatas meja kerja menggunakan tanaman hidroponik"
      }
    ]
  },
  {
    id: "proj-3",
    slug: "emerald-grand-wedding-backdrop",
    title: "Emerald Grand Wedding Backdrop",
    category: "Wedding",
    location: "Bali",
    rentalPrice: "Rp 25.000.000",
    pricePeriod: "event",
    availabilityStatus: "Tersedia",
    shortDescription:
      "Dekorasi lanskap taman tropis impian untuk pernikahan outdoor mewah dengan perpaduan bunga fresh dan monstera eksotis.",
    fullDescription: [
      "Instalasi dekorasi pernikahan lanskap tropis di tepi pantai Uluwatu, Bali. Menggabungkan gerbang lorong masuk berbunga putih segar, pelaminan bertema botanical sanctuary, dan photo booth alami.",
      "Tim profesional kami mengurus persiapan instalasi H-1 sebelum acara dan pembongkaran cepat pasca acara tanpa merusak venue lokasi pernikahan."
    ],
    features: [
      "Custom Design Lanskap Pelaminan",
      "Perpaduan 100% Bunga Live & Tanaman Eksotis",
      "Pemasangan H-1 & Demobilisasi Cepat",
      "Tim Landscape Designer On-site Selama Acara",
      "Spot Foto Instagramable untuk Tamu Undangan"
    ],
    specs: [
      { label: "Jenis Acara", value: "Pernikahan Outdoor" },
      { label: "Kapasitas Area", value: "300+ Tamu" },
      { label: "Durasi Sewa", value: "3 Hari (Setup - Event - Teardown)" },
      { label: "Fasilitas Perawatan", value: "Tim Standby 24 Jam" }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
        alt: "Emerald Grand Wedding Backdrop",
        caption: "Backdrop pelaminan outdoor berbunga dan bertanaman tropis"
      },
      {
        url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop",
        alt: "Aisle Floral Walkway",
        caption: "Lorong karpet merah berhias pot tanaman hias & bunga"
      },
      {
        url: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=1200&auto=format&fit=crop",
        alt: "Table Centerpiece Botanical",
        caption: "Dekorasi meja tamu bertema botanical wedding"
      }
    ]
  },
  {
    id: "proj-4",
    slug: "gala-dinner-tech-summit",
    title: "Gala Dinner Tech Summit",
    category: "Event",
    location: "Surabaya",
    rentalPrice: "Rp 15.000.000",
    pricePeriod: "event",
    availabilityStatus: "Tersedia",
    shortDescription:
      "Penataan 120 pot tanaman hias eksklusif & wall garden temporer untuk gala dinner internasional berkapasitas 1000 tamu.",
    fullDescription: [
      "Dekorasi lanskap temporer di Grand Ballroom Grand City Surabaya untuk konferensi teknologi internasional. Menampilkan panggung utama dengan latar tanaman palem perak dan photo booth bermotif biophilic.",
      "Semua pot menggunakan finish gold-amber matte yang memantulkan pencahayaan panggung dengan sangat anggun."
    ],
    features: [
      "120+ Pot Tanaman Eksklusif Pot Matte Gold",
      "Temporary Wall Garden Photo Booth",
      "Pemasangan Kilat Dalam 6 Jam",
      "Logistik & Transportasi Terkoordinasi",
      "Pencahayaan Lampu Spotlight Tanaman Tambahan"
    ],
    specs: [
      { label: "Jenis Acara", value: "Gala Dinner / Konferensi" },
      { label: "Durasi Sewa", value: "2 Hari" },
      { label: "Lokasi Acara", value: "Ballroom Indoor" },
      { label: "Fasilitas Perawatan", value: "Pembersihan Harian Pre-Event" }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1200&auto=format&fit=crop",
        alt: "Gala Dinner Tech Summit",
        caption: "Dekorasi panggung & meja gala dinner bertema alam"
      },
      {
        url: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1200&auto=format&fit=crop",
        alt: "Conference Hall Stage Greenery",
        caption: "Penataan tanaman panggung utama konferensi"
      },
      {
        url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200&auto=format&fit=crop",
        alt: "Photo Booth Wall Garden",
        caption: "Dinding tanaman temporer untuk foto tamu undangan"
      }
    ]
  },
  {
    id: "proj-5",
    slug: "artisan-culinary-botanical-sanctuary",
    title: "Artisan Culinary Botanical Sanctuary",
    category: "Restaurant",
    location: "Bandung",
    rentalPrice: "Rp 8.500.000",
    pricePeriod: "bulan",
    availabilityStatus: "Tersedia",
    shortDescription:
      "Pengalaman bersantap di tengah hutan tropis mini dengan penataan hanging plants dan monstera deliciosa rindang.",
    fullDescription: [
      "Sentuhan estetika alam tropis untuk fine dining restaurant di kawasan Dago Bandung. Menghadirkan gantung pot pakis monstera di atap kaca, tanaman hias meja makan, serta kolam tanaman air mini.",
      "Menciptakan lanskap bersantap hangat dan menenangkan yang menjadi daya tarik foto bagi setiap pengunjung resto."
    ],
    features: [
      "Instalasi Hanging Plants Atap Kaca",
      "Miniatur Garden Dining Table",
      "Perawatan Rutin Bebas Pestisida Berbahaya",
      "Tanaman Tahan Cahaya Lampu Warm-Indoor",
      "Rotasi Tanaman Setiap 2 Bulan Sekali"
    ],
    specs: [
      { label: "Luas Area Resto", value: "220 m²" },
      { label: "Durasi Kontrak", value: "Minimum 6 Bulan" },
      { label: "Jumlah Pot", value: "35 Hanging + 20 Floor Plants" },
      { label: "Fasilitas Perawatan", value: "Pembersihan Daun Harian" }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
        alt: "Artisan Culinary Botanical Sanctuary Main",
        caption: "Suasana restoran fine dining dengan sentuhan hutan tropis mini"
      },
      {
        url: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop",
        alt: "Dining Area Hanging Plants",
        caption: "Atap gantung tanaman pakis di area bersantap"
      },
      {
        url: "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?q=80&w=1200&auto=format&fit=crop",
        alt: "Bar Counter Greenery",
        caption: "Sudut bar restoran berhias tanaman Philodendron"
      }
    ]
  },
  {
    id: "proj-6",
    slug: "private-penthouse-tropical-oasis",
    title: "Private Penthouse Tropical Oasis",
    category: "Residence",
    location: "PIK 2 Jakarta",
    rentalPrice: "Rp 9.500.000",
    pricePeriod: "bulan",
    availabilityStatus: "Reservasi Terbatas",
    shortDescription:
      "Rancangan lanskap balkon & ruang keluarga penthouse mewah dengan perpaduan palem hias dan pot terakota minimalis.",
    fullDescription: [
      "Transformasi balkon dan ruang tamu penthouse mewah di PIK 2 Jakarta menjadi oasis pribadi. Menggunakan perpaduan Palem Bismarckia, Aglaonema langka, serta pot stoneware buatan khusus.",
      "Sangat cocok untuk pemilik hunian privat yang mendambakan kesegaran taman tropis tanpa perlu repot melakukan perawatan harian sendiri."
    ],
    features: [
      "Penataan Lanskap Balkon Penthouse High-rise",
      "Tanaman Tahan Angin Kencang Elevasi Tinggi",
      "Pot Terakota Minimalis Premium",
      "Tim Gardener Privat 2x Seminggu",
      "Garansi Keasrian Tanaman 100%"
    ],
    specs: [
      { label: "Luas Area Balkon", value: "95 m²" },
      { label: "Durasi Kontrak", value: "12 Bulan" },
      { label: "Jumlah Tanaman", value: "24 Pot Eksklusif" },
      { label: "Fasilitas Perawatan", value: "Privat Personal Gardener" }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
        alt: "Private Penthouse Tropical Oasis",
        caption: "Balkon penthouse mewah berlatar pemandangan kota dan taman tropis"
      },
      {
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
        alt: "Living Room Green Sanctuary",
        caption: "Sudut ruang keluarga hangat dengan tanaman palem hias"
      },
      {
        url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200&auto=format&fit=crop",
        alt: "Sunroom Botanical Corner",
        caption: "Area berjemur pagi dengan koleksi sukulen dan monstera"
      }
    ]
  }
];

export function getProjectById(id: string): Project | undefined {
  return projectsData.find((p) => p.id === id || p.slug === id);
}

export function getAllProjectIds(): string[] {
  return projectsData.map((p) => p.id);
}

export function getRelatedProjects(currentId: string, category: string, limit = 3): Project[] {
  const sameCategory = projectsData.filter((p) => p.id !== currentId && p.category === category);
  if (sameCategory.length >= limit) return sameCategory.slice(0, limit);

  const remaining = projectsData.filter(
    (p) => p.id !== currentId && p.category !== category
  );
  return [...sameCategory, ...remaining].slice(0, limit);
}
