import { Plant } from "../types/plant";

export const plantsData: Plant[] = [
  {
    id: "plant-1",
    slug: "monstera-deliciosa-king",
    name: "Monstera Deliciosa King",
    botanicalName: "Monstera deliciosa Liebm.",
    category: "Indoor",
    rentalPrice: 250000,
    pricePeriod: "bulan",
    availabilityStatus: "Tersedia",
    isAvailable: true,
    shortDescription:
      "Ratu tanaman hias indoor dengan daun hijau tua berlubang ikonik. Memberikan nuansa tropis mewah dan menyaring udara ruangan.",
    fullDescription: [
      "Monstera Deliciosa King adalah varietas Monstera pilihan kelas atas dengan karakter daun yang lebar, kokoh, serta belahan alami (fenestrasi) yang sempurna.",
      "Cocok diletakkan di sudut lobi kantor, ruang tamu rumah eksklusif, maupun lounge cafe untuk menciptakan titik fokus visual yang dramatis dan menenangkan.",
      "Sewa mencakup pot semen terakota premium, penyiraman berkala, serta pembersihan daun rutin oleh botanis Aliza Decoration."
    ],
    careLevel: "Mudah",
    lightRequirement: "Cahaya Tidak Langsung (Medium)",
    height: "140 - 180 cm",
    potType: "Semen Terakota Minimalis / Custom Fiber",
    features: [
      "Daun fenestrasi simetris & sehat",
      "Pembersih udara alami (air-purifying)",
      "Free maintenance & penggantian rutin",
      "Pot desainer serasi dengan arsitektur"
    ],
    specs: [
      { label: "Tinggi Tanaman", value: "160 cm" },
      { label: "Diameter Pot", value: "45 cm" },
      { label: "Tingkat Perawatan", value: "Rendah (Mudah)" },
      { label: "Rekomendasi Ruang", value: "Lobi, Resepsionis, Ruang Direksi" }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=1000&auto=format&fit=crop",
        alt: "Monstera Deliciosa King di sudut ruangan elegan",
        caption: "Monstera Deliciosa King dalam pot terakota modern"
      },
      {
        url: "https://images.unsplash.com/photo-1545241047-6083a3684587?q=80&w=1000&auto=format&fit=crop",
        alt: "Detail tekstur daun Monstera",
        caption: "Tekstur daun fenestrasi nan segar"
      }
    ],
    isFeatured: true,
    isPopular: true,
    createdAt: "2026-06-01"
  },
  {
    id: "plant-2",
    slug: "ficus-lyrata-fiddle-leaf",
    name: "Ficus Lyrata (Fiddle Leaf Fig)",
    botanicalName: "Ficus lyrata Warb.",
    category: "Indoor",
    rentalPrice: 320000,
    pricePeriod: "bulan",
    availabilityStatus: "Tersedia",
    isAvailable: true,
    shortDescription:
      "Pohon indoor berdaun biola besar bertekstur mekar. Pilihan utama arsitek interior untuk ruang kerja kontemporer dan penthouse.",
    fullDescription: [
      "Ficus Lyrata membawa kemewahan arsitektural lewat struktur daun tebal yang menyerupai biola. Batangnya yang tegak tinggi memberi kesan megah dan lapang.",
      "Sangat populer untuk latar belakang video conference executive, sudut showroom mobil mewah, atau atrium hotel bintang 5.",
      "Disertai perawatan intensif dari botanis kami untuk memastikan kesehatan daun tetap kilap dan bebas dari debu atau hama."
    ],
    careLevel: "Sedang",
    lightRequirement: "Cahaya Terang (High)",
    height: "170 - 220 cm",
    potType: "Pot Keramik Glaze Putih Glossy",
    features: [
      "Bentuk daun struktural memikat",
      "Batang kokoh bercabang 2-3",
      "Perawatan rutin & pemupukan organik",
      "Garansi segarkan ruang usaha"
    ],
    specs: [
      { label: "Tinggi Tanaman", value: "190 cm" },
      { label: "Diameter Pot", value: "50 cm" },
      { label: "Tingkat Perawatan", value: "Sedang" },
      { label: "Rekomendasi Ruang", value: "Executive Suite, Atrium, Showroom" }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1597055181300-e3633a207519?q=80&w=1000&auto=format&fit=crop",
        alt: "Ficus Lyrata di ruangan bernuansa skandinavia",
        caption: "Ficus Lyrata tinggi tegak dengan daun biola tebal"
      }
    ],
    isFeatured: true,
    isPopular: true,
    createdAt: "2026-06-05"
  },
  {
    id: "plant-3",
    slug: "palem-sadeng-livistona",
    name: "Palem Sadeng (Livistona Rotundifolia)",
    botanicalName: "Livistona rotundifolia",
    category: "Palem & Pohon",
    rentalPrice: 450000,
    pricePeriod: "bulan",
    availabilityStatus: "Tersedia",
    isAvailable: true,
    shortDescription:
      "Palem tropis eksotis berdaun kipas bulat nan rindang. Sangat cocok untuk lorong outdoor covered, teras hotel, dan area komersial.",
    fullDescription: [
      "Palem Sadeng menghadirkan aura resor Bali dan tropikal kemewahan di mana pun ditempatkan. Kipas daunnya berbentuk lingkaran utuh yang sangat artistik.",
      "Tahan terhadap perubahan kondisi cuaca dan cocok dipadukan dengan pencahayaan sorot malam hari untuk nuansa lanskap dramatis."
    ],
    careLevel: "Mudah",
    lightRequirement: "Cahaya Terang (High)",
    height: "200 - 260 cm",
    potType: "Pot Ukir Batu Alam / Terakota Besar",
    features: [
      "Daun kipas bulat simetris",
      "Tahan udara panas & AC",
      "Ideal untuk dekorasi event & lanskap",
      "Termasuk pemangkasan berkala"
    ],
    specs: [
      { label: "Tinggi Tanaman", value: "230 cm" },
      { label: "Diameter Pot", value: "60 cm" },
      { label: "Tingkat Perawatan", value: "Mudah" },
      { label: "Rekomendasi Ruang", value: "Teras Hotel, Courtyard, Function Hall" }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1000&auto=format&fit=crop",
        alt: "Palem Sadeng dalam pot tropis",
        caption: "Palem Sadeng memberi aura tropis mewah"
      }
    ],
    isFeatured: true,
    createdAt: "2026-05-15"
  },
  {
    id: "plant-4",
    slug: "strelitzia-nicolai-bird-of-paradise",
    name: "Strelitzia Nicolai (Giant Bird of Paradise)",
    botanicalName: "Strelitzia nicolai",
    category: "Palem & Pohon",
    rentalPrice: 380000,
    pricePeriod: "bulan",
    availabilityStatus: "Tersedia",
    isAvailable: true,
    shortDescription:
      "Tanaman pisang-pisangan eksotis berdaun lebar mengkilap. Pilihan favorit untuk tema dekorasi tropical modern dan lanskap minimalis.",
    fullDescription: [
      "Strelitzia Nicolai dikenal sebagai Giant Bird of Paradise dengan pesona daun panjang yang tegak dan elegan. Tanaman ini sangat efektif mengisi sudut beratap tinggi.",
      "Menghasilkan atmosfer rileks dan segar seperti sedang berada di resor tropis bintang lima."
    ],
    careLevel: "Mudah",
    lightRequirement: "Cahaya Terang (High)",
    height: "180 - 240 cm",
    potType: "Pot Fiber Hitam Matte Minimalis",
    features: [
      "Postur tinggi ramping menjulang",
      "Daun hijau emerald mengkilat",
      "Pembersih udara alami",
      "Sudah termasuk sistem irigasi tersembunyi"
    ],
    specs: [
      { label: "Tinggi Tanaman", value: "210 cm" },
      { label: "Diameter Pot", value: "50 cm" },
      { label: "Tingkat Perawatan", value: "Mudah" },
      { label: "Rekomendasi Ruang", value: "Lobi Gedung, Cafe Outdoor, Ballroom" }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=1000&auto=format&fit=crop",
        alt: "Strelitzia Nicolai berdaun lebar",
        caption: "Strelitzia Nicolai berdaun mengkilap nan anggun"
      }
    ],
    isPopular: true,
    createdAt: "2026-06-10"
  },
  {
    id: "plant-5",
    slug: "sansevieria-trifasciata-snake-plant",
    name: "Sansevieria Trifasciata (Lidah Mertua Premium)",
    botanicalName: "Sansevieria trifasciata",
    category: "Tanaman Meja",
    rentalPrice: 95000,
    pricePeriod: "bulan",
    availabilityStatus: "Tersedia",
    isAvailable: true,
    shortDescription:
      "Tanaman penyerap polutan terbaik dengan bentuk pedang tegak bergaris emas. Pilihan utama meja kerja kantor dan area tertutup.",
    fullDescription: [
      "Sansevieria Trifasciata terbukti secara ilmiah oleh NASA mampu menetralisir racun udara seperti benzena dan formaldehida 24 jam non-stop.",
      "Sangat tahan banting, tidak memerlukan penyiraman sering, dan tampil super bersih di meja kerja maupun rak resepsionis."
    ],
    careLevel: "Mudah",
    lightRequirement: "Cahaya Redup (Low)",
    height: "50 - 75 cm",
    potType: "Pot Keramik Putih Meja Minimalis",
    features: [
      "Penyerap racun udara efisiensi tinggi",
      "Tahan di ruangan AC dingin",
      "Ukuran compact pas untuk meja kerja",
      "Bebas repot penyiraman harian"
    ],
    specs: [
      { label: "Tinggi Tanaman", value: "60 cm" },
      { label: "Diameter Pot", value: "22 cm" },
      { label: "Tingkat Perawatan", value: "Sangat Mudah" },
      { label: "Rekomendasi Ruang", value: "Meja Kerja, Workstation, Bilik Kantor" }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1593482892290-f54927ae1bf6?q=80&w=1000&auto=format&fit=crop",
        alt: "Sansevieria dalam pot meja keramik",
        caption: "Sansevieria penyerap racun udara di meja kerja"
      }
    ],
    createdAt: "2026-04-20"
  },
  {
    id: "plant-6",
    slug: "calathea-orbifolia-luxury",
    name: "Calathea Orbifolia Luxury",
    botanicalName: "Goeppertia orbifolia",
    category: "Indoor",
    rentalPrice: 210000,
    pricePeriod: "bulan",
    availabilityStatus: "Tersedia",
    isAvailable: true,
    shortDescription:
      "Daun bulat besar berkilau dengan motif garis perak-hijau menawan. Memberikan sentuhan karya seni alami pada interior.",
    fullDescription: [
      "Calathea Orbifolia dianggap sebagai salah satu tanaman interior berdaun motif paling spektakuler. Garis-garis perak di atas warna hijau zamrud menciptakan ilusi optik yang memukau.",
      "Sangat ideal dipajang di ruang santai, klinik estetika, boutique hotel, dan studio kreatif."
    ],
    careLevel: "Sedang",
    lightRequirement: "Cahaya Tidak Langsung (Medium)",
    height: "60 - 90 cm",
    potType: "Pot Keramik Abu-abu Terazzo",
    features: [
      "Motif garis perak eksklusif",
      "Respon pergerakan daun harian (nyctinasty)",
      "Ramah hewan peliharaan (Non-toxic)",
      "Termasuk perawatan kelembapan udara"
    ],
    specs: [
      { label: "Tinggi Tanaman", value: "75 cm" },
      { label: "Diameter Pot", value: "30 cm" },
      { label: "Tingkat Perawatan", value: "Sedang" },
      { label: "Rekomendasi Ruang", value: "VIP Lounge, Spa, Studio Photo" }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1592150621744-aca64f48394a?q=80&w=1000&auto=format&fit=crop",
        alt: "Calathea Orbifolia di atas meja kayu",
        caption: "Motif garis perak pada daun Calathea Orbifolia"
      }
    ],
    isPopular: true,
    createdAt: "2026-06-18"
  },
  {
    id: "plant-7",
    slug: "philodendron-birkin-variegated",
    name: "Philodendron Birkin Variegated",
    botanicalName: "Philodendron 'Birkin'",
    category: "Tanaman Meja",
    rentalPrice: 165000,
    pricePeriod: "bulan",
    availabilityStatus: "Tersedia",
    isAvailable: true,
    shortDescription:
      "Tanaman kolektor berdaun tebal dengan garis variegasi putih krem kontras. Pilihan eksklusif untuk hiasan meja direktur.",
    fullDescription: [
      "Philodendron Birkin adalah kultivar mutasi cantik yang menampilkan garis-garis kuning-krem simetris pada setiap daun mudanya.",
      "Tampil sangat mewah di meja resepsionis hotel, meja direksi, maupun meja rapat konsultan bisnis."
    ],
    careLevel: "Mudah",
    lightRequirement: "Cahaya Tidak Langsung (Medium)",
    height: "40 - 60 cm",
    potType: "Pot Keramik Marmer Gold Rim",
    features: [
      "Variegasi cream murni unik",
      "Karakter pertumbuhan kompak",
      "Pembersih udara indoor",
      "Termasuk pot edisi terbatas"
    ],
    specs: [
      { label: "Tinggi Tanaman", value: "50 cm" },
      { label: "Diameter Pot", value: "25 cm" },
      { label: "Tingkat Perawatan", value: "Mudah" },
      { label: "Rekomendasi Ruang", value: "Meja Direktur, Ruang Meeting Utama" }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1620127682229-33388276e540?q=80&w=1000&auto=format&fit=crop",
        alt: "Philodendron Birkin variegasi",
        caption: "Garis variegasi putih yang mempesona"
      }
    ],
    createdAt: "2026-05-28"
  },
  {
    id: "plant-8",
    slug: "epipremnum-aureum-golden-pothos-gantung",
    name: "Golden Pothos (Sirih Gading Gantung)",
    botanicalName: "Epipremnum aureum",
    category: "Tanaman Gantung",
    rentalPrice: 120000,
    pricePeriod: "bulan",
    availabilityStatus: "Tersedia",
    isAvailable: true,
    shortDescription:
      "Tanaman juntai hijau keemas-emasan yang menjuntai indah dari pot gantung atau rak tinggi. Menyegarkan sudut atas ruangan.",
    fullDescription: [
      "Golden Pothos memberikan efek waterfall hijau yang menyejukkan. Daun berbentuk hati berwarna hijau bercak emas ini sangat aktif menyerap emisi elektronik di ruangan kantor.",
      "Cocok dipasang di rak partisi open office, gantungan kanopi cafe, atau balkon indoor."
    ],
    careLevel: "Mudah",
    lightRequirement: "Cahaya Redup (Low)",
    height: "Juntai 80 - 150 cm",
    potType: "Pot Gantung Macrame / Pot Plastik Anyam",
    features: [
      "Juntaian panjang lebat",
      "Sangat adaptif di kondisi minim cahaya",
      "Media tanam hydro-organic tanpa kotor",
      "Sudah termasuk sistem gantung kuat"
    ],
    specs: [
      { label: "Panjang Juntaian", value: "120 cm" },
      { label: "Diameter Pot", value: "25 cm" },
      { label: "Tingkat Perawatan", value: "Mudah" },
      { label: "Rekomendasi Ruang", value: "Rak Partisi Kantor, Bar Cafe, Meja Kasir" }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1596724803932-d17b4c6e8e81?q=80&w=1000&auto=format&fit=crop",
        alt: "Sirih Gading menjuntai",
        caption: "Juntaian Golden Pothos menghiasi sudut ruangan"
      }
    ],
    createdAt: "2026-04-10"
  },
  {
    id: "plant-9",
    slug: "pachira-aquatica-money-tree",
    name: "Pachira Aquatica (Pohon Uang Kepang)",
    botanicalName: "Pachira aquatica",
    category: "Palem & Pohon",
    rentalPrice: 390000,
    pricePeriod: "bulan",
    availabilityStatus: "Tersedia",
    isAvailable: true,
    shortDescription:
      "Pohon berbatang kepang artistik yang melambangkan kemakmuran dan keberuntungan. Pilihan populer untuk peresmian kantor baru.",
    fullDescription: [
      "Pachira Aquatica dengan 5 batang berkepang rapi melambangkan 5 elemen keberuntungan (kayu, api, tanah, logam, air). Memiliki tajuk daun hijau segar berbentuk jari.",
      "Banyak disewa untuk peresmian kantor cabang baru, bank, boutique finance, dan rumah tinggal."
    ],
    careLevel: "Mudah",
    lightRequirement: "Cahaya Tidak Langsung (Medium)",
    height: "150 - 190 cm",
    potType: "Pot Keramik Merah Marun / Hitam Minimalis",
    features: [
      "Batang kepang simetris nan unik",
      "Simbol keberuntungan & keberhasilan",
      "Struktur tajuk rimbun",
      "Termasuk pita ucapan & garansi perawatan"
    ],
    specs: [
      { label: "Tinggi Tanaman", value: "175 cm" },
      { label: "Diameter Pot", value: "45 cm" },
      { label: "Tingkat Perawatan", value: "Mudah" },
      { label: "Rekomendasi Ruang", value: "Pintu Masuk Utama, Banking Hall, Kantor" }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?q=80&w=1000&auto=format&fit=crop",
        alt: "Pachira Aquatica kepang",
        caption: "Pachira Aquatica berbatang kepang unik"
      }
    ],
    isFeatured: true,
    createdAt: "2026-06-22"
  },
  {
    id: "plant-10",
    slug: "aglaonema-red-ruby-masterpiece",
    name: "Aglaonema Red Ruby Masterpiece",
    botanicalName: "Aglaonema 'Red Ruby'",
    category: "Indoor",
    rentalPrice: 185000,
    pricePeriod: "bulan",
    availabilityStatus: "Tersedia",
    isAvailable: true,
    shortDescription:
      "Tanaman daun corak merah delima cerah memikat. Memberikan aksen warna hangat yang kontras pada interior bernuansa monokrom.",
    fullDescription: [
      "Aglaonema Red Ruby menjadi primadona karena kombinasi warna merah delima berkilau di atas tepi hijau tua. Mampu bertahan di tempat minim pencahayaan.",
      "Sangat cocok menjadi focal point warna merah alami di ruang tamu, meja kopi lounge, maupun meja konsultasi."
    ],
    careLevel: "Mudah",
    lightRequirement: "Cahaya Redup (Low)",
    height: "45 - 65 cm",
    potType: "Pot Keramik Putih Mat",
    features: [
      "Warna merah delima kontras menyala",
      "Tahan ruangan AC dingin",
      "Pembersih racun benzena",
      "Perawatan hemat energi"
    ],
    specs: [
      { label: "Tinggi Tanaman", value: "55 cm" },
      { label: "Diameter Pot", value: "28 cm" },
      { label: "Tingkat Perawatan", value: "Mudah" },
      { label: "Rekomendasi Ruang", value: "Coffee Table, Ruang Tunggu, Resepsionis" }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1600411833196-7c1f6b1a8b90?q=80&w=1000&auto=format&fit=crop",
        alt: "Aglaonema Red Ruby bercorak merah",
        caption: "Warna merah delima alami memikat mata"
      }
    ],
    createdAt: "2026-05-02"
  },
  {
    id: "plant-11",
    slug: "euphorbia-trigona-african-milk-tree",
    name: "Euphorbia Trigona (Kaktus Katedral)",
    botanicalName: "Euphorbia trigona",
    category: "Succulent & Cactus",
    rentalPrice: 280000,
    pricePeriod: "bulan",
    availabilityStatus: "Tidak Tersedia",
    isAvailable: false,
    shortDescription:
      "Kaktus eksotis berbentuk arsitektural vertikal dengan aksen daun merah maroon kecil. Pilihan favorit gaya interior industrial dan desert modern.",
    fullDescription: [
      "Euphorbia Trigona menawarkan siluet katedral dengan 3-4 rusuk bersudut tajam. Tanaman succulent besar ini memberikan karakter arsitektural yang kuat.",
      "Saat ini status sedang terkonfirmasi dalam kontrak sewa 6 bulan di galeri seni ternama, namun dapat diajukan untuk pre-booking periode mendatang."
    ],
    careLevel: "Mudah",
    lightRequirement: "Cahaya Terang (High)",
    height: "130 - 170 cm",
    potType: "Pot Semen Ekspos Industrial",
    features: [
      "Siluet struktur arsitektural tinggi",
      "Kebutuhan air sangat minim",
      "Cocok untuk gaya interior industrial/boho",
      "Media pasir malang khusus tanpa bau"
    ],
    specs: [
      { label: "Tinggi Tanaman", value: "150 cm" },
      { label: "Diameter Pot", value: "35 cm" },
      { label: "Tingkat Perawatan", value: "Sangat Mudah" },
      { label: "Rekomendasi Ruang", value: "Art Gallery, Studio Arsitek, Rooftop Lounge" }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797?q=80&w=1000&auto=format&fit=crop",
        alt: "Euphorbia Trigona kaktus katedral",
        caption: "Siluet tegas Euphorbia Trigona bergaya industrial"
      }
    ],
    createdAt: "2026-04-05"
  },
  {
    id: "plant-12",
    slug: "bougainvillea-spectabilis-taman-outdoor",
    name: "Bougainvillea Spectabilis (Kembang Kertas Rimbun)",
    botanicalName: "Bougainvillea spectabilis",
    category: "Outdoor",
    rentalPrice: 290000,
    pricePeriod: "bulan",
    availabilityStatus: "Tersedia",
    isAvailable: true,
    shortDescription:
      "Tanaman berbunga lebat warna magenta tajam untuk area outdoor, gate pesta pernikahan, dan taman teras restoran.",
    fullDescription: [
      "Bougainvillea Spectabilis hadir dengan mahkota bunga ungu magenta yang mekar lebat merata. Menjadikan area outdoor atau pintu masuk utama terasa meriah dan sambutan hangat.",
      "Tahan panas matahari penuh sepanjang hari dan sangat cocok untuk latar foto pameran atau gate pernikahan outdoor."
    ],
    careLevel: "Mudah",
    lightRequirement: "Cahaya Terang (High)",
    height: "150 - 200 cm",
    potType: "Pot Tanah Liat Besar Tradisional",
    features: [
      "Bunga mekar lebat sepanjang tahun",
      "Tahan panas terik matahari direct",
      "Cocok untuk pembatas area outdoor",
      "Pemangkasan tajuk artistik"
    ],
    specs: [
      { label: "Tinggi Tanaman", value: "170 cm" },
      { label: "Diameter Pot", value: "50 cm" },
      { label: "Tingkat Perawatan", value: "Mudah" },
      { label: "Rekomendasi Ruang", value: "Teras Restaurant, Lawn Garden, Entrance Hall" }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=1000&auto=format&fit=crop",
        alt: "Bougainvillea berbunga lebat",
        caption: "Bunga magenta lebat menyegarkan outdoor"
      }
    ],
    createdAt: "2026-03-30"
  },
  {
    id: "plant-13",
    slug: "schefflera-arboricola-dwarf-umbrella",
    name: "Schefflera Arboricola (Wali Songo Variegata)",
    botanicalName: "Schefflera arboricola",
    category: "Indoor",
    rentalPrice: 195000,
    pricePeriod: "bulan",
    availabilityStatus: "Tersedia",
    isAvailable: true,
    shortDescription:
      "Tanaman bertajuk payung dengan warna daun perpaduan hijau dan kuning emas. Terbukti handal menyerap asap rokok & polusi.",
    fullDescription: [
      "Schefflera Arboricola Variegata memiliki susunan daun menyerupai payung terbuka dengan corak kuning keemasan yang ceria. Sangat tangguh dan menyukai ruangan terbuka maupun ruangan ber-AC.",
      "Disukai untuk area lounge merokok outdoor covered, koridor kantor, dan ruang santai keluarga."
    ],
    careLevel: "Mudah",
    lightRequirement: "Cahaya Tidak Langsung (Medium)",
    height: "120 - 150 cm",
    potType: "Pot Fiber Putih Minimalis",
    features: [
      "Penyerap emisi polutan handal",
      "Tajuk rimbun melingkar seperti payung",
      "Variegasi kuning emas segar",
      "Perawatan serba praktis"
    ],
    specs: [
      { label: "Tinggi Tanaman", value: "135 cm" },
      { label: "Diameter Pot", value: "35 cm" },
      { label: "Tingkat Perawatan", value: "Mudah" },
      { label: "Rekomendasi Ruang", value: "Koridor, Executive Lounge, Restoran" }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1583324113626-70df0f4deaab?q=80&w=1000&auto=format&fit=crop",
        alt: "Schefflera rimbun dalam pot",
        caption: "Schefflera Arboricola dengan tajuk payung rimbun"
      }
    ],
    createdAt: "2026-06-12"
  },
  {
    id: "plant-14",
    slug: "dracaena-reflexa-song-of-india",
    name: "Dracaena Reflexa (Song of India)",
    botanicalName: "Dracaena reflexa",
    category: "Indoor",
    rentalPrice: 230000,
    pricePeriod: "bulan",
    availabilityStatus: "Reservasi Terbatas",
    isAvailable: true,
    shortDescription:
      "Tanaman berdaun tombak melengkung dengan garis tepi kuning limau bercahaya. Memperindah sudut ruangan beratap tinggi.",
    fullDescription: [
      "Dracaena Reflexa 'Song of India' dikenal dengan batangnya yang meliuk artistik serta susunan daun melingkar rapat berwarna kuning lime segar.",
      "Memberikan energi dinamis dan sangat disukai dalam gaya dekorasi Jepang (Japandi) serta modern tropis."
    ],
    careLevel: "Mudah",
    lightRequirement: "Cahaya Tidak Langsung (Medium)",
    height: "130 - 170 cm",
    potType: "Pot Keramik Anyam Bambu",
    features: [
      "Batang meliuk melengkung estetis",
      "Aksen kuning limau terang",
      "Penyaring toksin udara indoor",
      "Pemangkasan bentuk rimbun"
    ],
    specs: [
      { label: "Tinggi Tanaman", value: "150 cm" },
      { label: "Diameter Pot", value: "38 cm" },
      { label: "Tingkat Perawatan", value: "Mudah" },
      { label: "Rekomendasi Ruang", value: "Japandi Lounge, Co-Working Space, Lobby" }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=1000&auto=format&fit=crop",
        alt: "Dracaena Reflexa",
        caption: "Daun melengkung bertepi kuning limau"
      }
    ],
    createdAt: "2026-05-10"
  },
  {
    id: "plant-15",
    slug: "bambusa-ventricosa-bambu-buddha",
    name: "Bambusa Ventricosa (Bambu Buddha Outdoor)",
    botanicalName: "Bambusa ventricosa",
    category: "Outdoor",
    rentalPrice: 340000,
    pricePeriod: "bulan",
    availabilityStatus: "Tersedia",
    isAvailable: true,
    shortDescription:
      "Bambu dengan ruas menggelembung unik ala perut Buddha. Sangat indah untuk pembatas pagar alami taman dan teras outdoor.",
    fullDescription: [
      "Bambusa Ventricosa memberikan kesan zen dan ketenangan spiritual alami. Ruas batangnya yang menggelembung unik menjadi daya tarik tersendiri saat tertiup angin.",
      "Sangat cocok untuk area meditasi, pembatas kolam renang hotel, atau dinding pembatas cafe outdoor."
    ],
    careLevel: "Mudah",
    lightRequirement: "Cahaya Terang (High)",
    height: "180 - 250 cm",
    potType: "Pot Beton Panjang Rectangular",
    features: [
      "Ruas menggelembung unik artistik",
      "Suara bisikan daun bambu menenangkan",
      "Pembatas area outdoor alami",
      "Tahan cuaca hujan & terik"
    ],
    specs: [
      { label: "Tinggi Tanaman", value: "220 cm" },
      { label: "Panjang Pot", value: "90 cm" },
      { label: "Tingkat Perawatan", value: "Mudah" },
      { label: "Rekomendasi Ruang", value: "Poolside, Zen Garden, Teras Restoran" }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1000&auto=format&fit=crop",
        alt: "Rumpun bambu outdoor",
        caption: "Rumpun Bambu Buddha penyejuk alam"
      }
    ],
    createdAt: "2026-04-18"
  },
  {
    id: "plant-16",
    slug: "succulent-echeveria-arrangements-set",
    name: "Echeveria Rosette Arrangement Set",
    botanicalName: "Echeveria spp.",
    category: "Succulent & Cactus",
    rentalPrice: 110000,
    pricePeriod: "bulan",
    availabilityStatus: "Tersedia",
    isAvailable: true,
    shortDescription:
      "Rangkaian succulent mawar mini dalam pot terrarium kaca/keramik. Hiasan meja cantik berestetika tinggi.",
    fullDescription: [
      "Set Rangkaian Echeveria memadukan 5 jenis succulent berdaun mawar tebal dengan variasi warna hijau pastel, pink, dan ungu kecokelatan.",
      "Ideal diletakkan di atas coffee table, meja makan VIP, atau meja resepsionis boutique clinic."
    ],
    careLevel: "Mudah",
    lightRequirement: "Cahaya Terang (High)",
    height: "15 - 25 cm",
    potType: "Mangkuk Keramik Terrazzo Flat",
    features: [
      "Bentuk mawar batu (rosette) menggemaskan",
      "Tahan tanpa air hingga 2 minggu",
      "Sentuhan estetika pastel lembut",
      "Bebas hama & tanah bersih steril"
    ],
    specs: [
      { label: "Tinggi Tanaman", value: "20 cm" },
      { label: "Diameter Mangkuk", value: "30 cm" },
      { label: "Tingkat Perawatan", value: "Sangat Mudah" },
      { label: "Rekomendasi Ruang", value: "Meja VIP, Resepsionis Spa, Gift Desk" }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?q=80&w=1000&auto=format&fit=crop",
        alt: "Succulent Echeveria rosette",
        caption: "Rangkaian mawar succulent nan elok"
      }
    ],
    createdAt: "2026-06-25"
  }
];
