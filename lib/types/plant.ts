export type PlantCategory =
  | "Indoor"
  | "Outdoor"
  | "Tanaman Meja"
  | "Palem & Pohon"
  | "Tanaman Gantung"
  | "Succulent & Cactus";

export type CareLevel = "Mudah" | "Sedang" | "Spesifik";

export type LightRequirement =
  | "Cahaya Redup (Low)"
  | "Cahaya Tidak Langsung (Medium)"
  | "Cahaya Terang (High)";

export type AvailabilityStatus = "Tersedia" | "Tidak Tersedia" | "Reservasi Terbatas";

export type SortOption =
  | "a-z"
  | "z-a"
  | "price-low"
  | "price-high"
  | "newest";

export interface PlantImage {
  url: string;
  alt: string;
  caption?: string;
}

export interface PlantSpec {
  label: string;
  value: string;
}

export interface Plant {
  id: string;
  slug: string;
  name: string;
  botanicalName: string;
  category: PlantCategory;
  rentalPrice: number; // in IDR per month, e.g. 150000
  pricePeriod?: string; // default "bulan"
  availabilityStatus: AvailabilityStatus;
  isAvailable: boolean;
  shortDescription: string;
  fullDescription: string[];
  careLevel: CareLevel;
  lightRequirement: LightRequirement;
  height: string; // e.g. "120 - 150 cm"
  potType: string; // e.g. "Terrakota Minimalis / Pot Keramik Putih"
  features: string[];
  specs: PlantSpec[];
  images: PlantImage[];
  isFeatured?: boolean;
  isPopular?: boolean;
  createdAt: string; // YYYY-MM-DD
}

export interface PlantFilterState {
  searchQuery: string;
  category: PlantCategory | "Semua";
  availability: "Semua" | "Tersedia" | "Tidak Tersedia";
  sortBy: SortOption;
  page: number;
}
