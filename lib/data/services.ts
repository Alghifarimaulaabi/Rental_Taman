import { Service } from "@/lib/types/service";

export const servicesData: Service[] = [
  {
    id: "serv-1",
    slug: "rental-tanaman-kantor",
    title: "Rental Tanaman Kantor & Corporate",
    subtitle: "Solusi biofilik modern untuk meningkatkan produktivitas, estetika, dan kualitas udara ruangan kerja.",
    category: "Corporate & Office",
    badge: "Populer untuk Perusahaan",
    heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop",
    shortDesc: "Sewa tanaman hias indoor berkala lengkap dengan pemeliharaan profesional harian/mingguan untuk kantor dan area perkantoran corporate.",
    fullDesc: "Layanan Rental Tanaman Kantor dari Aliza Decoration memberikan solusi praktis bagi perusahaan yang ingin menghadirkan nuansa alam tropis yang asri tanpa kerepotan alur perawatan. Kami menyediakan tanaman pilihan kelas tinggi seperti Monstera Deliciosa, Ficus Lyrata, Sansevieria, dan Palem Hias dalam pot minimalis mewah. Seluruh tanaman dirawat secara rutin oleh tim botanis terlatih kami, termasuk pembersihan daun, pemupukan, dan rotasi tanaman berkala agar area kerja selalu tampak segar.",
    startingPrice: "Rp 1.500.000 / bulan",
    benefits: [
      {
        title: "Peningkatan Produktivitas",
        description: "Elemen tanaman hijau biofilik terbukti secara ilmiah meningkatkan fokus dan menurunkan tingkat stres karyawan hingga 15%.",
        iconName: "Sparkles",
      },
      {
        title: "Pembersih Udara Alami",
        description: "Tanaman pilihan kami efektif menyerap polutan udara ruangan (VOC), formaldehida, dan emisi perangkat elektronik.",
        iconName: "ShieldCheck",
      },
      {
        title: "Rotasi Tanaman Berkala",
        description: "Ganti varietas tanaman secara rutin setiap bulan tanpa biaya tambahan agar suasana ruangan tidak monoton.",
        iconName: "RefreshCw",
      },
      {
        title: "Bebas Kerepotan Maintenance",
        description: "Tim ahli kami menangani penyiraman, pemangkasan, pemupukan, hingga penggantian jika ada tanaman yang kurang sehat.",
        iconName: "HeartHandshake",
      },
    ],
    facilities: [
      { name: "Survei & Layout Design Gratis", description: "Tim botanis mendesain titik peletakan pot sesuai intensitas cahaya kantor Anda.", included: true },
      { name: "Pot Premium Minimalis / Terakota", description: "Pilihan pot elegan disesuaikan dengan tema interior kantor Anda.", included: true },
      { name: "Perawatan Rutin 2-3x Seminggu", description: "Penyiraman, pembersihan debu daun, dan perawatan nutrisi tanah.", included: true },
      { name: "Garansi Ganti Tanaman Layu", description: "Penggantian tanaman rusak/layu dalam waktu maksimal 1x24 jam.", included: true },
      { name: "Rotasi Varietas 1-2 Bulan Sekali", description: "Penyegaran jenis tanaman agar suasana kerja tetap segar & menarik.", included: true },
      { name: "Laporan Perawatan Bulanan", description: "Rekap data kondisi kesehatan tanaman untuk transparansi layanan.", included: true },
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
        alt: "Instalasi tanaman indoor di ruang rapat corporate",
        caption: "Area Lobby & Meeting Room Tokopedia Tower Jakarta",
      },
      {
        url: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200&auto=format&fit=crop",
        alt: "Pot Monstera di sudut ruang kerja terbuka",
        caption: "Open Workspace & Co-Working Area Coworking SCBD",
      },
      {
        url: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1200&auto=format&fit=crop",
        alt: "Deretan tanaman meja dan partition planter box",
        caption: "Partition Planter Box Gedung Menara BCA",
      },
      {
        url: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?q=80&w=1200&auto=format&fit=crop",
        alt: "Tanaman hias lorong executive suite",
        caption: "Executive Lounge Office Park Bandung",
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Konsultasi & Discovery",
        description: "Diskusi kebutuhan jumlah titik pot, gaya interior, dan anggaran bulanan perusahaan Anda.",
      },
      {
        step: "02",
        title: "Survei Lokasi & Proposal Layout",
        description: "Kunjungan fisik tim botanis untuk mengecek pencahayaan ruangan dan mengusulkan jenis tanaman paling ideal.",
      },
      {
        step: "03",
        title: "Pengiriman & Penataan",
        description: "Pengiriman pot dan tanaman segar sesuai jadwal, dirakit rapi tanpa mengganggu aktivitas kantor.",
      },
      {
        step: "04",
        title: "Maintenance & Rotasi Berkala",
        description: "Tim maintenance rutin merawat dan melakukan penyegaran rotasi jenis tanaman secara periodik.",
      },
    ],
    faqs: [
      {
        question: "Berapa minimal jumlah tanaman untuk sewa kantor?",
        answer: "Kami melayani paket sewa mulai dari minimal 5 pot tanaman ukuran medium/large untuk area perkantoran.",
      },
      {
        question: "Bagaimana jika tanaman di kantor layu atau daunnya menguning?",
        answer: "Tim kami akan langsung mengganti tanaman tersebut dengan tanaman baru yang sehat dalam waktu 1x24 jam secara gratis tanpa biaya tambahan.",
      },
      {
        question: "Apakah penyiraman tanaman mengotori lantai kantor?",
        answer: "Tidak sama sekali. Semua pot kami dilengkapi dengan inner pot dan tatakan anti-bocor serta sistem tatakan berbahan khusus yang menjaga kerapian lantai.",
      },
      {
        question: "Apakah ada durasi kontrak minimal untuk paket corporate?",
        answer: "Kontrak sewa bulanan fleksibel mulai dari 3 bulan, 6 bulan, hingga kontrak tahunan dengan diskon khusus.",
      },
    ],
    testimonials: [
      {
        id: "t-1",
        name: "Hendra Wijaya",
        role: "Head of Facility Management",
        company: "PT GoTo Gojek Tokopedia Tbk",
        avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
        comment: "Layanan rental tanaman Aliza Decoration sangat profesional. Tanaman selalu segar dan tim maintenance bekerja secara efisien tanpa mengganggu jam kerja staf kami.",
        rating: 5,
        date: "14 Mei 2026",
      },
      {
        id: "t-2",
        name: "Siska Amanda",
        role: "General Manager HR",
        company: "BCA Tower Representative Office",
        avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
        comment: "Ruang kerja kami terasa jauuuh lebih segar sejak menggunakan jasa rental tanaman dari Aliza. Karyawan sangat menyukai rotasi tanaman bulanan yang dihadirkan!",
        rating: 5,
        date: "28 Juni 2026",
      },
    ],
    metaTitle: "Sewa & Rental Tanaman Kantor Bandung Jakarta | Aliza Decoration",
    metaDescription: "Layanan sewa tanaman hias indoor kantor berkala profesional. Lengkap dengan perawatan rutin, rotasi jenis tanaman, dan garansi ganti baru.",
    keywords: ["sewa tanaman kantor", "rental tanaman indoor kantor", "dekorasi kantor biofilik", "maintenance tanaman kantor", "rental tanaman bandung jakarta"],
  },

  {
    id: "serv-2",
    slug: "rental-tanaman-hotel-restoran",
    title: "Rental Tanaman Hotel & Restoran",
    subtitle: "Ciptakan atmosfer tropis mewah dan instagrammable yang memikat mata setiap pengunjung dan tamu VIP.",
    category: "Hospitality & Dining",
    badge: "Luxury Aesthetic Choice",
    heroImage: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600&auto=format&fit=crop",
    shortDesc: "Sewa tanaman tropis eksotis, hanging plants, dan pot arsitektural untuk lobby hotel, restoran fine dining, cafe, dan resort mewah.",
    fullDesc: "Sektor hospitality memerlukan visualisasi lanskap yang tidak hanya indah, tetapi juga memancarkan aura kemewahan dan keasrian kelas atas. Jasa rental tanaman hotel dan restoran dari Aliza Decoration dirancang khusus untuk memenuhi standar estetika tinggi. Kami menghadirkan kombinasi tanaman tropis eksotis seperti Palem Sadeng, Philodendron Gloriosum, Calathea Kipas, serta instalasi hanging garden yang tertata rapi. Tim kami menjaga jadwal perawatan secara hening (silent maintenance) agar tidak mengganggu kenyamanan para tamu.",
    startingPrice: "Rp 2.500.000 / bulan",
    benefits: [
      {
        title: "Daya Tarik Visual & Foto",
        description: "Menambah spot foto estetis (instagrammable) yang meningkatkan promosi organik dari pengalaman menginap & makan tamu.",
        iconName: "Sparkles",
      },
      {
        title: "Silent Maintenance",
        description: "Proses perawatan dilakukan di jam-jam sepi (early morning) sebelum jam operasional atau sesuai permintaan pihak manajemen.",
        iconName: "Clock",
      },
      {
        title: "Koleksi Tanaman Tropis Impor & Eksotis",
        description: "Pilihan varietas tanaman langka dengan bentuk daun arsitektural mewah yang memberikan kesan eksklusif.",
        iconName: "Leaf",
      },
      {
        title: "Garansi Kualitas & Kerapian",
        description: "Penampilan pot dan daun disemprot shine khusus agar selalu bersih mengkilap setiap saat.",
        iconName: "ShieldCheck",
      },
    ],
    facilities: [
      { name: "Desain Konseptual Tematik Tropis/Japandi", description: "Penyelarasan jenis pot dan tanaman dengan konsep arsitektur tempat usaha Anda.", included: true },
      { name: "Pot Premium Terakota / Fiber Semen Handcrafted", description: "Pot berbobot kokoh dengan finishing mewah menyesuaikan warna interior.", included: true },
      { name: "Silent Maintenance 3x Seminggu", description: "Perawatan profesional di luar jam sibuk tamu hotel/restoran.", included: true },
      { name: "Daun Mengkilap (Leaf Shine Treatment)", description: "Perlakuan khusus agar pemandangan daun selalu mengkilap tanpa debu.", included: true },
      { name: "Rotasi & Refresher Berkala", description: "Penggantian rutin tanaman agar ambience tetap menarik dan tidak monoton.", included: true },
      { name: "Free Survey & Mockup Layout 3D", description: "Visualisasi tata letak tanaman sebelum proses instalasi dilakukan.", included: true },
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop",
        alt: "Instalasi tanaman lobby hotel bintang 5",
        caption: "Lobby Utama Grand Hyatt Hotel Jakarta",
      },
      {
        url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
        alt: "Taman indoor restoran fine dining",
        caption: "Artisan Culinary Dining Room Bandung",
      },
      {
        url: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop",
        alt: "Hanging plants di cafe rooftop bistro",
        caption: "Botanical Rooftop Bistro Bali",
      },
      {
        url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop",
        alt: "Rangkaian tanaman tropis di lorong resort",
        caption: "Villas & Resort Corridor Seminyak",
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Konsep & Moodboard Visual",
        description: "Penyesuaian konsep interior hotel/restoran dengan katalog koleksi tanaman eksotis Aliza.",
      },
      {
        step: "02",
        title: "Survey & Pengukuran Cahaya",
        description: "Pengukuran lux pencahayaan ruangan untuk pemilihan spesies tanaman indoor yang berdaya tahan lama.",
      },
      {
        step: "03",
        title: "Instalasi Hening (Silent Setup)",
        description: "Pemasangan dilakukan pada malam/dini hari tanpa mengganggu aktivitas operasional bisnis Anda.",
      },
      {
        step: "04",
        title: "Jadwal Routine Maintenance",
        description: "Kunjungan rutin staf pemelihara tanaman sesuai jadwal sepakat.",
      },
    ],
    faqs: [
      {
        question: "Apakah perawatan bisa dilakukan sebelum jam restoran/hotel buka?",
        answer: "Tentu. Kami menyediakan skema jadwal perawatan fleksibel, termasuk jam 06.00 - 08.00 pagi atau sesuai SOP keamanan hotel Anda.",
      },
      {
        question: "Apakah bisa menyewa tanaman untuk event banquet atau dinner khusus di hotel?",
        answer: "Sangat bisa. Kami juga memiliki paket sewa temporer durasi pendek (harian/mingguan) untuk event banquet hotel.",
      },
      {
        question: "Bagaimana dengan tanaman gantung (hanging plants) di area restoran?",
        answer: "Tim instalasi kami berpengalaman memasang braket dan pot gantung dengan standar keamanan tinggi dan sistem irigasi tersembunyi.",
      },
    ],
    testimonials: [
      {
        id: "t-3",
        name: "Chef Raymond Tan",
        role: "Executive Chef & Owner",
        company: "Artisan Culinary Sanctuary Bandung",
        avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
        comment: "Sentuhan tanaman tropis dari Aliza mengubah keseluruhan aura restoran kami. Tamu-tamu sering sekali berfoto di dekat sudut tanaman!",
        rating: 5,
        date: "03 Juli 2026",
      },
      {
        id: "t-4",
        name: "Clara Sugiarto",
        role: "Director of Housekeeping",
        company: "Grand Hyatt Hotel Jakarta",
        avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
        comment: "Kualitas tanaman sangat prima dan potnya sangat mewah. Tim maintenance mereka selalu datang tepat waktu dan bekerja sangat rapi.",
        rating: 5,
        date: "19 Mei 2026",
      },
    ],
    metaTitle: "Rental Tanaman Hotel & Restoran | Aliza Decoration",
    metaDescription: "Layanan sewa tanaman hias tropis eksotis untuk lobby hotel, restoran, dan cafe. Silent maintenance profesional dan jaminan tanaman mengkilap.",
    keywords: ["sewa tanaman hotel", "rental tanaman restoran", "dekorasi cafe tropis", "sewa tanaman indoor resort", "sewa monstera hotel"],
  },

  {
    id: "serv-3",
    slug: "dekorasi-wedding",
    title: "Dekorasi Wedding Tropis & Botanical",
    subtitle: "Wujudkan lanskap taman pernikahan outdoor & indoor impian dengan perpaduan bunga fresh dan tanaman eksotis.",
    category: "Wedding & Romance",
    badge: "Best Seller Wedding Decor",
    heroImage: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop",
    shortDesc: "Penyewaan lanskap taman temporer, lorong pelaminan, photo booth botanical, dan mini garden untuk resepsi pernikahan eksklusif.",
    fullDesc: "Pernikahan adalah momen sekali seumur hidup yang patut dirayakan dalam balutan suasana keasrian alam yang memukau. Layanan Dekorasi Wedding dari Aliza Decoration menyajikan konsep taman pernikahan tropis, rustic botanical, hingga gaya pelaminan biofilik mewah. Kami merancang lanskap pelaminan lengkap dengan pepohonan rimbun, lorong walk-in taman, hingga photo booth kaya akan vegetasi hijau dan bunga-bunga segar. Seluruh instalasi dipasang H-1 oleh tim berpengalaman dan dibongkar secara rapi seusai acara.",
    startingPrice: "Rp 8.500.000 / paket event",
    benefits: [
      {
        title: "Konsep Custom Sesuai Tema",
        description: "Bebas berdiskusi dan menyesuaikan gaya lanskap pelaminan dengan tema pernikahan Anda (Modern Tropical, Rustic, Glasshouse).",
        iconName: "Sparkles",
      },
      {
        title: "Tanaman & Bunga Fresh 100%",
        description: "Menggunakan perpaduan tanaman segar hidup bertali dedaunan rimbun dan bunga fresh terpilih yang masih harum segar.",
        iconName: "Leaf",
      },
      {
        title: "Tim Designer & Decorator Standby",
        description: "Tim ahli kami tetap bersiaga dari awal acara hingga selesai untuk memastikan setiap sudut taman tampil sempurna.",
        iconName: "ShieldCheck",
      },
      {
        title: "Instalasi Cepat & Bebas Sampah",
        description: "Pemasangan efisien H-1 dan pembersihan lokasi secara menyeluruh pasca resepsi tanpa meninggalkan sisa sampah.",
        iconName: "Clock",
      },
    ],
    facilities: [
      { name: "Desain Backdrop & Pelaminan Taman Botanical", description: "Lanskap pelaminan lengkap dengan vegetasi hijau dan spot pencahayaan spotlight.", included: true },
      { name: "Lorong Red Carpet Garden (Entrance Pathway)", description: "Deretan pot tanaman dan mini garden di sepanjang jalan pengantin.", included: true },
      { name: "Photo Booth Botanical Backdrop", description: "Spot foto khusus tamu dengan dekorasi monstera, palem, dan neon sign custom.", included: true },
      { name: "Pemasangan H-1 & Demolisi H+1", description: "Waktu penataan yang fleksibel mengikuti regulasi gedung/venue wedding.", included: true },
      { name: "Tim Standby Selama Acara Berlangsung", description: "Penanganan sigap jika ada penyesuaian tata letak selama pesta.", included: true },
      { name: "Pencahayaan Garden Warm Light Included", description: "Lampu taman warm white dan fairy lights penunjang atmosfer romantis.", included: true },
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
        alt: "Backdrop pelaminan pernikahan bernuansa taman tropis",
        caption: "Emerald Grand Wedding Bali",
      },
      {
        url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop",
        alt: "Dekorasi meja pengantin dan bunga tropis",
        caption: "Intimate Outdoor Wedding Bandung",
      },
      {
        url: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=1200&auto=format&fit=crop",
        alt: "Lorong masuk dengan mini garden dan bunga segar",
        caption: "Glasshouse Wedding Pathway Jakarta",
      },
      {
        url: "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?q=80&w=1200&auto=format&fit=crop",
        alt: "Photo booth botanical dengan tanaman Monstera",
        caption: "Botanical Photo Booth Area",
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Konsultasi Impian & Budget",
        description: "Sesi diskusi awal untuk memahami skema warna, tema pernikahan, serta ukuran venue gedung/outdoor.",
      },
      {
        step: "02",
        title: "Visual 3D / Sketch Design",
        description: "Tim desainer menyusun rancangan layout pelaminan dan titik-titik taman untuk persetujuan calon pengantin.",
      },
      {
        step: "03",
        title: "Instalasi H-1 di Venue",
        description: "Pengiriman material tanaman & bunga serta perakitan taman oleh 10+ dekorator berpengalaman.",
      },
      {
        step: "04",
        title: "Standby & Demolisi Pasca Event",
        description: "Tim menjaga kerapian selama acara dan membongkar instalasi secara rapi tepat setelah acara berakhir.",
      },
    ],
    faqs: [
      {
        question: "Apakah bisa membuat dekorasi taman untuk pernikahan outdoor dan indoor?",
        answer: "Sangat bisa. Kami berpengalaman mendekorasi hall ballroom hotel indoor maupun lokasi outdoor seperti kebun dan pantai.",
      },
      {
        question: "Kapan sebaiknya kami melakukan pemesanan jadwal wedding?",
        answer: "Kami menyarankan booking minimal 1-3 bulan sebelum hari-H untuk menjamin ketersediaan koleksi tanaman dan tim desainer kami.",
      },
      {
        question: "Apakah bunga yang digunakan segar atau buatan?",
        answer: "Kami memprioritaskan 100% bunga dan tanaman hidup segar. Namun bisa dikombinasikan sesuai permintaan dan kebutuhan konsep acara Anda.",
      },
    ],
    testimonials: [
      {
        id: "t-5",
        name: "Anindya & David",
        role: "Bride & Groom",
        company: "Wedding Bali Private Resort",
        avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
        comment: "Dekorasi taman pernikahan kami benar-benar melebihi ekspektasi! Pelaminan terlihat sangat alami, elegan, dan semua tamu memuji keindahannya.",
        rating: 5,
        date: "12 April 2026",
      },
      {
        id: "t-6",
        name: "Reza & Maya",
        role: "Bride & Groom",
        company: "Glasshouse Wedding Bandung",
        avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
        comment: "Terima kasih Aliza Decoration! Timnya sangat tanggap dan profesional. Photo booth taman botanical jadi favorit semua teman yang hadir.",
        rating: 5,
        date: "20 Mei 2026",
      },
    ],
    metaTitle: "Sewa Dekorasi Taman Wedding & Pernikahan Tropis | Aliza Decoration",
    metaDescription: "Jasa dekorasi lanskap taman pernikahan tropis, pelaminan botanical, lorong pengantin, dan photo booth bunga segar untuk event pernikahan mewah.",
    keywords: ["dekorasi wedding taman", "sewa taman pernikahan", "pelaminan botanical", "dekorasi pernikahan tropis", "photo booth taman bandung"],
  },

  {
    id: "serv-4",
    slug: "dekorasi-event",
    title: "Dekorasi Event & Exhibition Temporer",
    subtitle: "Instalasi taman temporer megah untuk pameran, gala dinner, konser, peluncuran produk, dan acara kementerian.",
    category: "Events & Exhibitions",
    badge: "Solusi Event Instan",
    heroImage: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1600&auto=format&fit=crop",
    shortDesc: "Penyewaan tanaman hias temporer skala besar (harian/mingguan) lengkap dengan wall garden, panggung bervegetasi, dan spot pameran.",
    fullDesc: "Untuk gelaran event internasional, pameran bisnis, konser musik, maupun gala dinner perusahaan, menghadirkan nuansa hijau segar adalah cara terbaik memberikan kesan elegan dan profesional. Layanan Dekorasi Event Temporer Aliza Decoration menyediakan pengerjaan instalasi taman mini kilat dalam durasi sewa harian hingga mingguan. Kami siap menangani kebutuhan puluhan hingga ratusan pot tanaman, vertical garden portabel, hingga dekorasi panggung utama secara cepat dan presisi.",
    startingPrice: "Rp 3.000.000 / event",
    benefits: [
      {
        title: "Pemasangan Kilat & Efisien",
        description: "Tim ahli siap melakukan penataan 100+ pot tanaman dalam hitungan jam sebelum jam pembukaan acara (loading in cepat).",
        iconName: "Clock",
      },
      {
        title: "Skala Besar Hingga Ratusan Pot",
        description: "Kapasitas persediaan puluhan ribu koleksi tanaman hias segar siap mendukung event kapasitas ribuan pengunjung.",
        iconName: "Sparkles",
      },
      {
        title: "Layanan Bongkar Pasang Bebas Repot",
        description: "Proses bongkar (loading out) dilakukan segera setelah event selesai dengan standar kebersihan venue tertinggi.",
        iconName: "ShieldCheck",
      },
      {
        title: "Konsep Visual Brand-Matching",
        description: "Penyesuaian jenis pot dan varietas tanaman dengan identitas warna brand corporate atau tema exhibition.",
        iconName: "RefreshCw",
      },
    ],
    facilities: [
      { name: "Penyewaan Ratusan Pot Tanaman Hias Fresh", description: "Pilihan ukuran dari tabletop mini hingga pohon palem hias setinggi 3 meter.", included: true },
      { name: "Vertical Garden / Green Wall Portabel", description: "Dinding tanaman hijau buatan/hidup portabel cocok untuk backdrop photo booth.", included: true },
      { name: "Dekorasi Panggung Utama & Stage Garden", description: "Lanskap depan panggung agar podium terlihat asri dan menyatu dengan alam.", included: true },
      { name: "Loading In & Loading Outepat Waktu", description: "Pekerjaan mengikuti jadwal slot izin venue yang ketat.", included: true },
      { name: "Petugas Kebersihan & Standby Crew", description: "Petugas khusus yang memastikan pot dan area tanaman tidak berdebu selama event.", included: true },
      { name: "Garansi Kerapian & Keamanan Instalasi", description: "Pot berbobot stabil dan tidak mudah bergoyang di area padat pengunjung.", included: true },
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1200&auto=format&fit=crop",
        alt: "Instalasi taman depan panggung gala dinner",
        caption: "Gala Dinner Tech Summit Surabaya",
      },
      {
        url: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
        alt: "Pameran expo bisnis dengan deretan pot tanaman",
        caption: "International Trade Expo ICE BSD",
      },
      {
        url: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1200&auto=format&fit=crop",
        alt: "Dekorasi panggung konferensi pers corporate",
        caption: "Product Launching Automotive Jakarta",
      },
      {
        url: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1200&auto=format&fit=crop",
        alt: "Vertical garden photo booth acara kementerian",
        caption: "Ministry Conference Wall Garden",
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Review Rundown & Layout Venue",
        description: "Analisis teknis jadwal loading in, slot waktu rehearsal, dan floorplan lokasi pameran.",
      },
      {
        step: "02",
        title: "Penyiapan Tanaman & QC",
        description: "Pemeriksaan kualitas daun dan kebersihan pot di nursery Aliza sebelum dikirim ke lokasi acara.",
      },
      {
        step: "03",
        title: "Loading In & Penataan Kilat",
        description: "Penataan oleh tim lapangan mengikuti instruksi stage manager & EO.",
      },
      {
        step: "04",
        title: "Loading Out Pasca Acara",
        description: "Pengangkutan kembali seluruh tanaman dengan cepat tanpa meninggalkan sampah sedikit pun.",
      },
    ],
    faqs: [
      {
        question: "Apakah bisa menyewa tanaman hanya untuk event 1 hari?",
        answer: "Bisa sekali. Kami berpengalaman melayani sewa harian (1 hari), 3 hari, hingga pameran mingguan.",
      },
      {
        question: "Apakah ada biaya tambahan untuk pengiriman dan bongkar pasang?",
        answer: "Semua estimasi harga dalam proposal kami sudah mencakup biaya kirim, bongkar pasang, dan kru standby.",
      },
      {
        question: "Bagaimana jika ruang pameran berada di lantai atas tanpa lift barang?",
        answer: "Tim kargo kami terlatih menangani mobilisasi manual melalui tangga/escalator dengan pengamanan pot yang rapi.",
      },
    ],
    testimonials: [
      {
        id: "t-7",
        name: "Bambang Perkasa",
        role: "Event Director",
        company: "Indonesia Tech Summit 2026",
        avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
        comment: "Sangat puas dengan kecepatan kerja tim Aliza! Penataan 120 pot selesai dalam waktu kurang dari 3 jam sebelum pintu gala dinner dibuka.",
        rating: 5,
        date: "08 Juni 2026",
      },
      {
        id: "t-8",
        name: "Diana Putri",
        role: "Senior Project Manager EO",
        company: "Spectra Event Organizer",
        avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
        comment: "Partner dekorasi tanaman paling andal di Indonesia. Tanamannya sangat mulus dan hijau mengkilap, membuat stage pameran kami terlihat amat berkelas.",
        rating: 5,
        date: "22 Mei 2026",
      },
    ],
    metaTitle: "Sewa Dekorasi Taman Event & Pameran Temporer | Aliza Decoration",
    metaDescription: "Sewa tanaman hias event harian/mingguan untuk gala dinner, pameran expo, konser, dan konferensi pers. Pemasangan kilat & pelayanan profesional.",
    keywords: ["sewa tanaman event", "dekorasi pameran temporer", "sewa tanaman harian", "stage garden panggung", "rental tanaman pameran bsd"],
  },

  {
    id: "serv-5",
    slug: "rental-tanaman-residensial",
    title: "Rental Tanaman Rumah & Penthouse Residensial",
    subtitle: "Hadirkan kenyamanan oasis tropis pribadi di vila, penthouse, dan hunian mewah tanpa kerepotan berkebun.",
    category: "Residential & Living",
    badge: "Exclusive Home Comfort",
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
    shortDesc: "Sewa tanaman hias eksklusif untuk ruang keluarga, balkon, patio, dan area kolam renang rumah tinggal kelas atas.",
    fullDesc: "Mewujudkan rumah impian yang hijau, asri, dan menenangkan kini menjadi sangat mudah. Melalui layanan Rental Tanaman Residensial dari Aliza Decoration, pemilik rumah dan penthouse tidak perlu lagi khawatir akan tanaman yang layu akibat salah perawatan atau kesibukan harian. Kami menyediakan koleksi tanaman indoor & outdoor pilihan seperti Monstera King, Ficus Lyrata, Aglaonema, dan Palem Sadeng dalam pot terakota dan keramik eksklusif yang menyatu harmonis dengan arsitektur rumah Anda.",
    startingPrice: "Rp 1.200.000 / bulan",
    benefits: [
      {
        title: "Bebas Repot Hama & Layu",
        description: "Jaminan tanaman selalu segar tanpa perlu khawatir masalah hama, tanah berbau, atau daun menguning.",
        iconName: "ShieldCheck",
      },
      {
        title: "Penyesuaian Tata Letak Fengshui",
        description: "Konsultasi penataan sudut tanaman yang dipercaya membawa aura kesejukan dan keharmonisan energi rumah.",
        iconName: "Sparkles",
      },
      {
        title: "Pemeliharaan Bersih & Higenis",
        description: "Tim ahli merawat tanaman dengan obat organik ramah anak dan hewan peliharaan (pet-friendly).",
        iconName: "HeartHandshake",
      },
      {
        title: "Garansi Ganti Baru Kapan Saja",
        description: "Jika Anda ingin mengubah suasana dekorasi atau ada tanaman yang layu, kami ganti baru secara cuma-cuma.",
        iconName: "RefreshCw",
      },
    ],
    facilities: [
      { name: "Konsultasi Layout & Pencahayaan Hunian", description: "Penetapan lokasi terbaik di ruang tamu, balkon, patio, atau master bedroom.", included: true },
      { name: "Pot Keramik / Terakota / Fiber Etnik", description: "Pilihan vas dan pot estetis yang cocok dengan desain interior hunian Anda.", included: true },
      { name: "Perawatan Rutin 2x Seminggu", description: "Penyiraman presisi, penyemprotan nutrisi organik, dan perawatan permukaan daun.", included: true },
      { name: "Penggunaan Pupuk & Nutrisi Organik", description: "Aman bagi anak-anak, kucing, dan anjing peliharaan di dalam rumah.", included: true },
      { name: "Rotasi Varietas Setiap 2 Bulan", description: "Penggantian spesies tanaman agar sudut favorit keluarga Anda selalu tampil segar.", included: true },
      { name: "Layanan Pembersihan Pot & Tatakan", description: "Memastikan tidak ada genangan air atau noda tanah di lantai marmer/kayu Anda.", included: true },
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
        alt: "Tanaman hias di ruang keluarga rumah mewah",
        caption: "Private Penthouse Tropical Oasis PIK 2",
      },
      {
        url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
        alt: "Balkon apartemen dengan deretan pot palem hias",
        caption: "Luxury Residence Balcony Menteng",
      },
      {
        url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop",
        alt: "Sudut tanaman Monstera di dekat jendela",
        caption: "Living Room Modern Tropical Villa Bali",
      },
      {
        url: "https://images.unsplash.com/photo-1545241047-6083a3684587?q=80&w=1200&auto=format&fit=crop",
        alt: "Pot terakota minimalis di area teras",
        caption: "Teras Depan Residence Dago Bandung",
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Survei Hunian & Konsultasi",
        description: "Tim mendatangi rumah Anda untuk mengecek titik masuk sinar matahari dan preferensi gaya favorit.",
      },
      {
        step: "02",
        title: "Pemilihan Pot & Tanaman",
        description: "Pemilihan kombinasi pot dan jenis tanaman hias dari katalog eksklusif Aliza.",
      },
      {
        step: "03",
        title: "Pengantaran & Penataan",
        description: "Pengiriman dilakukan dengan hati-hati lengkap dengan tatakan pot anti-gores.",
      },
      {
        step: "04",
        title: "Maintenance Rutin Berkala",
        description: "Staf Aliza berkunjung sesuai jadwal yang nyaman bagi keluarga Anda.",
      },
    ],
    faqs: [
      {
        question: "Apakah obat/pupuk yang digunakan aman untuk kucing atau anjing peliharaan?",
        answer: "Sangat aman. Kami hanya menggunakan cairan nutrisi organik berbasis hayati dan tanaman non-toxic untuk tempat tinggal ber-pet.",
      },
      {
        question: "Bagaimana jika kami bepergian keluar kota saat jadwal perawatan?",
        answer: "Anda cukup mengabarkan jadwal Anda. Kami dapat menyesuaikan waktu kunjungan atau memberikan panduan perawatan sederhana selama Anda liburan.",
      },
      {
        question: "Berapa paket sewa rumah minimal yang bisa dipesan?",
        answer: "Paket rumah tangga mulai dari 3-5 pot tanaman ukuran medium/large untuk ruang tamu dan balkon.",
      },
    ],
    testimonials: [
      {
        id: "t-9",
        name: "Ibu Maya Kartika",
        role: "Home Owner",
        company: "Penthouse Residence PIK 2",
        avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
        comment: "Sangat terbantu! Dulu sering beli tanaman tapi mati karena salah siram. Sekarang pakai sewa Aliza rumah jadi segar terus tanpa pusing merawatnya.",
        rating: 5,
        date: "11 Mei 2026",
      },
      {
        id: "t-10",
        name: "Bpk. Victor Susanto",
        role: "Architect & Home Owner",
        company: "Modern Tropis Villa Dago",
        avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
        comment: "Pot-potnya sangat estetik dan match dengan desain villa kami. Tim maintenancenya juga sangat sopan dan menjaga kebersihan lantai marmer.",
        rating: 5,
        date: "30 Juni 2026",
      },
    ],
    metaTitle: "Rental Tanaman Rumah & Penthouse Residensial | Aliza Decoration",
    metaDescription: "Sewa tanaman hias indoor & outdoor rumah mewah. Bebas repot perawatan, lengkap dengan pupuk organik aman untuk anak & hewan peliharaan.",
    keywords: ["sewa tanaman rumah", "rental tanaman penthouse", "sewa monstera rumah", "dekorasi balkon tanaman", "maintenance tanaman rumah bandung"],
  },

  {
    id: "serv-6",
    slug: "perawatan-tanaman",
    title: "Jasa Maintenance & Perawatan Tanaman",
    subtitle: "Layanan pemeliharaan profesional harian, mingguan, dan bulanan oleh tim botanis ahli.",
    category: "Maintenance & Care",
    badge: "Expert Plant Doctor",
    heroImage: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=1600&auto=format&fit=crop",
    shortDesc: "Jasa perawatan berkala untuk koleksi tanaman hias pribadi maupun tanaman kantor Anda. Menangani kesehatan tanah, hama, pemupukan, hingga pemangkasan.",
    fullDesc: "Apakah Anda sudah memiliki koleksi tanaman hias sendiri namun kewalahan merawatnya atau tanaman Anda mulai menunjukkan gejala layu dan terserang hama? Jasa Maintenance & Perawatan Tanaman dari Aliza Decoration hadir sebagai solusi lengkap. Tim ahli hortikultura kami berpengalaman mendiagnosis kesehatan tanaman, memberikan terapi nutrisi tanah, memangkas bagian mati, menyemprotkan pestisida organik ramah lingkungan, serta mengganti media tanah yang sudah jenuh.",
    startingPrice: "Rp 800.000 / bulan",
    benefits: [
      {
        title: "Diagnosis Dokter Tanaman (Plant Doctor)",
        description: "Pemeriksaan menyeluruh terhadap penyakit daun, kelembaban akar, dan infeksi jamur/hama.",
        iconName: "ShieldCheck",
      },
      {
        title: "Formula Nutrisi & Pemupukan Khusus",
        description: "Penggunaan racikan pupuk mikro dan makro esensial yang memicu pertumbuhan daun baru yang rimbun.",
        iconName: "Sparkles",
      },
      {
        title: "Penanganan Hama Bebas Racun Kimia",
        description: "Penyemprotan pembasmi hama berbahan neem oil dan zat biologis aman tanpa aroma menyengat.",
        iconName: "HeartHandshake",
      },
      {
        title: "Repotting & Penggantian Media Tanah",
        description: "Pemberian media tanam poros ber-porositas tinggi (porous soil mix) untuk kesehatan akar jangka panjang.",
        iconName: "RefreshCw",
      },
    ],
    facilities: [
      { name: "Pemeriksaan Kesehatan Berkala 2-4x Seminggu", description: "Monitoring rutin kadar air tanah dan kebersihan daun.", included: true },
      { name: "Pembersihan & Kilap Daun (Leaf Polish)", description: "Pembersihan seluruh helai daun dari debu dan noda air keras.", included: true },
      { name: "Pemangkasan Daun Mati & Styling Bentuk", description: "Pruning teratur agar rimbun tanaman terlihat proporsional.", included: true },
      { name: "Pemberian Pupuk Nutrisi Organik", description: "Asupan vitamin akar dan pemicu tunas daun baru.", included: true },
      { name: "Pengendalian Hama Hama Kutu Putih / Spider Mites", description: "Tindakan kuratif dan preventif penyakit tanaman.", included: true },
      { name: "Jasa Repotting & Ganti Media Tanam", description: "Penggantian pot besar dan tanah baru sesuai jadwal usia media.", included: true },
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=1200&auto=format&fit=crop",
        alt: "Tim botanis menyemprotkan nutrisi ke tanaman indoor",
        caption: "Treatment Nutrisi & Spray Daun",
      },
      {
        url: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=1200&auto=format&fit=crop",
        alt: "Proses repotting pot Monstera Deliciosa",
        caption: "Repotting & Media Tanam Porous Mix",
      },
      {
        url: "https://images.unsplash.com/photo-1463320726281-696a485928c7?q=80&w=1200&auto=format&fit=crop",
        alt: "Pemeriksaan akar dan pemangkasan daun kuning",
        caption: "Pruning & Styling Bentuk Tanaman",
      },
      {
        url: "https://images.unsplash.com/photo-1592150621744-aca64f48394a?q=80&w=1200&auto=format&fit=crop",
        alt: "Tanaman hias segar hasil pemeliharaan rutin",
        caption: "Hasil Perawatan Tanaman Kantor SCBD",
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Audit & Diagnosa Awal",
        description: "Survei tim ahli ke lokasi Anda untuk mendata jenis tanaman dan kondisi kesehatannya.",
      },
      {
        step: "02",
        title: "Penyusunan Jadwal Perawatan",
        description: "Menentukan intensitas penyiraman, pemupukan, dan perlakuan khusus per jenis tanaman.",
      },
      {
        step: "03",
        title: "Eksekusi Maintenance Berkala",
        description: "Kunjungan staf berpengalaman sesuai kesepakatan waktu (mingguan/bulanan).",
      },
      {
        step: "04",
        title: "Evaluasi & Progress Report",
        description: "Laporan perkembangan kesehatan tanaman secara berkala kepada pemilik.",
      },
    ],
    faqs: [
      {
        question: "Apakah Aliza melayani perawatan untuk tanaman milik saya sendiri yang tidak disewa dari Aliza?",
        answer: "Ya, tentu saja. Jasa maintenance ini berlaku baik untuk tanaman sewaan maupun tanaman koleksi milik Anda pribadi.",
      },
      {
        question: "Berapa kali dalam seminggu staf maintenance akan berkunjung?",
        answer: "Frekuensi dapat disesuaikan kebutuhan, umumnya 2 kali seminggu untuk tanaman indoor dan 1 kali seminggu untuk outdoor.",
      },
      {
        question: "Bagaimana jika ada tanaman koleksi saya yang sudah sekarat akibat hama parah?",
        answer: "Tim 'Plant Doctor' kami akan melakukan karantina sementara dan perawatan intensif di nursery Aliza hingga pulih kembali.",
      },
    ],
    testimonials: [
      {
        id: "t-11",
        name: "Ibu Siska Hermanto",
        role: "Plant Collector",
        company: "Private Residence Menteng",
        avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
        comment: "Koleksi Monstera Variegata dan Ficus saya kembali segar dan bertunas lebat setelah ditangani tim maintenance Aliza. Sangat recomended!",
        rating: 5,
        date: "04 Mei 2026",
      },
      {
        id: "t-12",
        name: "Bpk. Rian Ardianto",
        role: "Building Manager",
        company: "Wisma MRA Jakarta",
        avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
        comment: "Layanan perawatannya sangat komprehensif. Masalah kutu putih pada palem di lobby langsung teratasi dalam 2 minggu.",
        rating: 5,
        date: "17 Juni 2026",
      },
    ],
    metaTitle: "Jasa Maintenance & Perawatan Tanaman Hias | Aliza Decoration",
    metaDescription: "Jasa pemeliharaan tanaman hias kantor & rumah profesional. Layanan dokter tanaman, pembasmian hama organik, pemupukan, dan repotting.",
    keywords: ["jasa perawatan tanaman", "maintenance tanaman kantor", "dokter tanaman bandung", "pembasmi hama tanaman indoor", "repotting tanaman hias"],
  },

  {
    id: "serv-7",
    slug: "konsultasi-landscape",
    title: "Konsultasi Lanskap Biofilik & Fengshui",
    subtitle: "Perancangan tata letak tanaman berkonsep biofilik dan keharmonisan elemen alam oleh desainer lanskap profesional.",
    category: "Design & Consultation",
    badge: "Professional Landscape Architect",
    heroImage: "https://images.unsplash.com/photo-1558904541-efa843a96f01?q=80&w=1600&auto=format&fit=crop",
    shortDesc: "Jasa konsultasi perancangan konsep lanskap indoor/outdoor, pemilihan vegetasi berdaya tahan tinggi, dan penataan elemen keberuntungan.",
    fullDesc: "Menata ruangan bernuansa alam tidak sekadar meletakkan pot di sembarang tempat. Diperlukan pemahaman mendalam mengenai arah sinar matahari, tingkat kelembaban udara, sirkulasi angin, serta keharmonisan estetika bangunan. Jasa Konsultasi Lanskap Biofilik & Fengshui dari Aliza Decoration membantu Anda merencanakan konsep taman yang indah, fungsional, dan memberikan dampak psikologis menenangkan. Kami menyediakan visualisasi 3D layout, analisis pencahayaan lux, serta daftar spesies tanaman rekomendasi.",
    startingPrice: "Rp 2.000.000 / sesi konsultasi",
    benefits: [
      {
        title: "Perancangan Visual 3D & Layout Plan",
        description: "Gambaran tepat skala posisi tanaman, tipe pot, dan tata cahaya sebelum eksekusi dimulai.",
        iconName: "Sparkles",
      },
      {
        title: "Analisis Pencahayaan (Lux Meter Test)",
        description: "Memastikan tanaman yang dipilih sesuai dengan intensitas cahaya alami yang tersedia di titik tersebut.",
        iconName: "ShieldCheck",
      },
      {
        title: "Prinsip Desain Biofilik Modern",
        description: "Mengintegrasikan elemen kayu, batu alam, air, dan tanaman hijau untuk kenyamanan mental optimal.",
        iconName: "Leaf",
      },
      {
        title: "Harmoni Fengshui Tanaman",
        description: "Rekomendasi jenis tanaman penyerap energi negatif dan pembawa kesejukan hoki bagi tempat usaha & rumah.",
        iconName: "HeartHandshake",
      },
    ],
    facilities: [
      { name: "Survei Lokasi & Pengukuran Lux Cahaya", description: "Pengukuran teknis kondisi ruang indoor / outdoor.", included: true },
      { name: "Draft Masterplan Layout 2D & Render 3D", description: "Visualisasi realistis penataan tanaman di lokasi Anda.", included: true },
      { name: "Rekomendasi Spesies Vegetasi (Plant Palette)", description: "Daftar spesifikasi nama tanaman, ukuran pot, dan karakter perawatan.", included: true },
      { name: "Perhitungan Rencana Anggaran Biaya (RAB)", description: "Rincian biaya investasi sewa atau pembelian lanskap secara transparan.", included: true },
      { name: "Sesi Diskusi & Revisi Desain 2x", description: "Penyesuaian draft rancangan sesuai selera dan masukan Anda.", included: true },
      { name: "Panduan Panduan Pemeliharaan Mandiri", description: "Buku panduan (e-book care guide) khusus lanskap tempat Anda.", included: true },
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1558904541-efa843a96f01?q=80&w=1200&auto=format&fit=crop",
        alt: "Desain masterplan taman biofilik indoor",
        caption: "3D Rendering Biofilik Office Lounge",
      },
      {
        url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
        alt: "Konsep lanskap taman vertikal dan air terjun mini",
        caption: "Water Feature & Vertical Garden Layout",
      },
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
        alt: "Penataan tanaman Fengshui di entrance vila",
        caption: "Fengshui Landscape Design Villa Bali",
      },
      {
        url: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop",
        alt: "Hasil konsultasi lanskap di atrium mal",
        caption: "Atrium Botanical Layout Concept",
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Sesi Wawancara & Site Visit",
        description: "Diskusi kebutuhan fungsi ruang, preferensi estetika, dan survei fisik lokasi.",
      },
      {
        step: "02",
        title: "Pembuatan Konsep & Render 3D",
        description: "Penyusunan gambar tata letak 3D beserta palet kombinasi jenis tanaman.",
      },
      {
        step: "03",
        title: "Presentasi & Finalisasi RAB",
        description: "Pemaparan hasil desain dan perincian estimasi biaya secara transparan.",
      },
      {
        step: "04",
        title: "Eksekusi / Serah Terima Plan",
        description: "Lanjut ke tahap eksekusi sewa/instalasi Aliza atau penyerahan dokumen masterplan.",
      },
    ],
    faqs: [
      {
        question: "Apakah biaya konsultasi bisa dipotongkan dari total transaksi jika kami lanjut menyewa lanskap dari Aliza?",
        answer: "Ya! Biaya konsultasi akan dipotong 100% (gratis) jika Anda melanjutkan ke kontrak sewa/instalasi lanskap bersama kami.",
      },
      {
        question: "Berapa lama proses pembuatan desain 3D lanskap berlangsung?",
        answer: "Proses penyusunan render 3D dan masterplan membutuhkan waktu sekitar 3-5 hari kerja setelah survei lokasi.",
      },
      {
        question: "Apakah bisa berkonsultasi mengenai Fengshui posisi tanaman?",
        answer: "Bisa. Tim desainer kami bekerja sama dengan praktisi tanaman yang paham tata letak elemen kayu & air sesuai sudut mata angin.",
      },
    ],
    testimonials: [
      {
        id: "t-13",
        name: "Ir. Fajar Nugroho",
        role: "Principal Architect",
        company: "Nugroho Design Studio",
        avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
        comment: "Aliza Decoration sangat membantu proyek-proyek arsitektur kami. Analisis cahaya dan pemilihan jenis tanamannya sangat akurat!",
        rating: 5,
        date: "25 Mei 2026",
      },
      {
        id: "t-14",
        name: "Sylvia Tanuwidjaja",
        role: "Interior Designer",
        company: "Studio Interior Jakarta",
        avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
        comment: "Render 3D-nya sangat informatif dan mempermudah presentasi ke klien kami. Sangat profesional!",
        rating: 5,
        date: "14 Juli 2026",
      },
    ],
    metaTitle: "Jasa Konsultasi Lanskap Biofilik & Fengshui Tanaman | Aliza Decoration",
    metaDescription: "Jasa konsultasi perancangan lanskap taman indoor & outdoor, desain 3D biofilik, analisis pencahayaan, dan penataan Fengshui tanaman.",
    keywords: ["konsultasi lanskap bandung", "desain 3d taman biofilik", "fengshui tanaman indoor", "arsitek lanskap taman", "konsultan tanaman kantor"],
  },
];

// Helper functions
export function getAllServices(): Service[] {
  return servicesData;
}

export function getServiceBySlug(slug: string): Service | undefined {
  return servicesData.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return servicesData.map((s) => s.slug);
}

export function getRelatedServices(currentSlug: string, count: number = 3): Service[] {
  return servicesData.filter((s) => s.slug !== currentSlug).slice(0, count);
}
