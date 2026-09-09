import { sendGAEvent } from "@next/third-parties/google";

/**
 * Helper untuk mengirim custom event ke Google Analytics 4 (GA4).
 * Menggunakan `@next/third-parties/google` yang dimuat secara asinkron (non-blocking)
 * demi menjaga Core Web Vitals dan performa SEO tetap optimal.
 */
export const trackEvent = (
  eventName: string,
  eventParams: Record<string, string | number | boolean> = {}
) => {
  if (typeof window !== "undefined") {
    try {
      sendGAEvent({ event: eventName, ...eventParams });
    } catch (err) {
      console.error("Gagal mengirim event GA4:", err);
    }
  }
};

/**
 * Event helper khusus pelacakan konversi klik tombol WhatsApp (Lead generation).
 */
export const trackWhatsAppConversion = (
  sourceLocation: string,
  itemName?: string
) => {
  trackEvent("contact_whatsapp", {
    source: sourceLocation,
    ...(itemName ? { item_name: itemName } : {}),
  });
};
