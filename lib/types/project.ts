export interface GalleryImage {
  url: string;
  alt: string;
  caption?: string;
}

export type ProjectCategory =
  | "Hotel"
  | "Office"
  | "Wedding"
  | "Event"
  | "Restaurant"
  | "Residence";

export type AvailabilityStatus = "Tersedia" | "Tersewa" | "Reservasi Terbatas";

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: ProjectCategory;
  location: string;
  rentalPrice: string;
  pricePeriod?: string;
  availabilityStatus: AvailabilityStatus;
  shortDescription: string;
  fullDescription: string[];
  features: string[];
  specs: {
    label: string;
    value: string;
  }[];
  images: GalleryImage[];
  isFeatured?: boolean;
}

export interface Testimonial {
  id: string;
  customerName: string;
  customerRole: string;
  customerAvatar: string;
  rating: number;
  content: string;
  date: string;
  projectId?: string;
}

export interface BookingFormData {
  name: string;
  phone: string;
  email: string;
  startDate: string;
  duration: string;
  notes: string;
}
