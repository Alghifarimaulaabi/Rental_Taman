"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Calendar, Phone, User, Mail, Clock, MessageSquare, CheckCircle, Sparkles } from "lucide-react";
import { BookingFormData, Project } from "@/lib/types/project";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project;
}

export default function BookingModal({ isOpen, onClose, project }: BookingModalProps) {
  const [formData, setFormData] = useState<BookingFormData>({
    name: "",
    phone: "",
    email: "",
    startDate: "",
    duration: "1 Bulan",
    notes: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    // Format WhatsApp message with prefilled information
    const text = `Halo Aliza Decoration, saya berminat untuk reservasi sewa proyek berikut:
📌 *Proyek*: ${project.title} (${project.id})
🏷️ *Kategori*: ${project.category}
💰 *Harga Sewa*: ${project.rentalPrice}${project.pricePeriod ? ` / ${project.pricePeriod}` : ""}

*Data Reservasi*:
- *Nama*: ${formData.name}
- *No. WhatsApp*: ${formData.phone}
- *Email*: ${formData.email || "-"}
- *Rencana Tanggal*: ${formData.startDate || "As Soon As Possible"}
- *Durasi Sewa*: ${formData.duration}
- *Catatan*: ${formData.notes || "Tidak ada"}

Mohon informasi ketersediaan jadwal dan prosedur selanjutnya. Terima kasih!`;

    const encodedText = encodeURIComponent(text);
    const waUrl = `https://wa.me/6281234567890?text=${encodedText}`;

    // Open WhatsApp in new tab after a brief feedback delay
    setTimeout(() => {
      window.open(waUrl, "_blank");
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-emerald-950/70 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative z-10 w-full max-w-xl overflow-hidden rounded-3xl bg-white p-6 sm:p-8 shadow-2xl ring-1 ring-emerald-900/10 border border-emerald-900/10 my-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-emerald-900/10 pb-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-900/10 text-emerald-900">
                  <Sparkles className="h-5 w-5 text-emerald-800" />
                </div>
                <div>
                  <h3 className="font-serif-display text-xl font-bold text-emerald-950">
                    Formulir Reservasi Sewa
                  </h3>
                  <p className="text-xs text-emerald-900/70">
                    {project.title} • {project.category}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-900/5 text-emerald-800 hover:bg-emerald-900/15 transition-colors"
                aria-label="Tutup modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Content: Form vs Success */}
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center text-center py-8 px-4 gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 animate-bounce">
                  <CheckCircle className="h-10 w-10" />
                </div>
                <h4 className="text-xl font-bold text-emerald-950">Pemesanan Terkirim!</h4>
                <p className="text-sm text-emerald-900/80 max-w-md">
                  Formulir reservasi Anda sedang diteruskan ke Customer Success Aliza via WhatsApp. Tim kami akan merespons dalam hitungan menit.
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="mt-4 rounded-xl bg-emerald-900 px-6 py-3 text-xs font-semibold text-white shadow-md hover:bg-emerald-850 transition"
                >
                  Selesai
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* Form Field: Nama Lengkap */}
                <div>
                  <label className=" text-xs font-semibold text-emerald-950 mb-1.5 flex items-center gap-1.5">
                    <User className="h-3.5 w-3.5 text-emerald-700" />
                    Nama Lengkap <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Masukkan nama lengkap Anda"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-xl border border-emerald-900/15 bg-emerald-900/5 px-4 py-2.5 text-sm text-emerald-950 focus:bg-white focus:border-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-700/20 transition-all"
                  />
                </div>

                {/* Form Field: WhatsApp & Email Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className=" text-xs font-semibold text-emerald-950 mb-1.5 flex items-center gap-1.5">
                      <Phone className="h-3.5 w-3.5 text-emerald-700" />
                      Nomor WhatsApp <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="0812xxxxxxx"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-xl border border-emerald-900/15 bg-emerald-900/5 px-4 py-2.5 text-sm text-emerald-950 focus:bg-white focus:border-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-700/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className=" text-xs font-semibold text-emerald-950 mb-1.5 flex items-center gap-1.5">
                      <Mail className="h-3.5 w-3.5 text-emerald-700" />
                      Email (Opsional)
                    </label>
                    <input
                      type="email"
                      placeholder="email@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-xl border border-emerald-900/15 bg-emerald-900/5 px-4 py-2.5 text-sm text-emerald-950 focus:bg-white focus:border-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-700/20 transition-all"
                    />
                  </div>
                </div>

                {/* Form Field: Date & Duration Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className=" text-xs font-semibold text-emerald-950 mb-1.5 flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5 text-emerald-700" />
                      Rencana Tanggal Sewa
                    </label>
                    <input
                      type="date"
                      value={formData.startDate}
                      onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                      className="w-full rounded-xl border border-emerald-900/15 bg-emerald-900/5 px-4 py-2.5 text-sm text-emerald-950 focus:bg-white focus:border-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-700/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className=" text-xs font-semibold text-emerald-950 mb-1.5 flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 text-emerald-700" />
                      Estimasi Durasi Sewa
                    </label>
                    <select
                      value={formData.duration}
                      onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                      className="w-full rounded-xl border border-emerald-900/15 bg-emerald-900/5 px-4 py-2.5 text-sm text-emerald-950 focus:bg-white focus:border-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-700/20 transition-all"
                    >
                      <option value="1 Event / 1-3 Hari">1 Event (1-3 Hari)</option>
                      <option value="1 Bulan">1 Bulan</option>
                      <option value="3 Bulan">3 Bulan</option>
                      <option value="6 Bulan">6 Bulan (Recommended)</option>
                      <option value="12 Bulan+">12 Bulan (Kontrak Tahunan)</option>
                    </select>
                  </div>
                </div>

                {/* Form Field: Notes */}
                <div>
                  <label className="text-xs font-semibold text-emerald-950 mb-1.5 flex items-center gap-1.5">
                    <MessageSquare className="h-3.5 w-3.5 text-emerald-700" />
                    Catatan Khusus / Kebutuhan Tambahan
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Sebutkan lokasi spesifik atau preferensi jenis tanaman..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full rounded-xl border border-emerald-900/15 bg-emerald-900/5 px-4 py-2.5 text-sm text-emerald-950 focus:bg-white focus:border-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-700/20 transition-all resize-none"
                  />
                </div>

                {/* Pricing Summary Note */}
                <div className="rounded-xl bg-emerald-900/5 p-3 flex items-center justify-between text-xs text-emerald-950 border border-emerald-900/10">
                  <span className="font-medium">Estimasi Biaya Sewa:</span>
                  <span className="font-bold text-emerald-900 text-sm">
                    {project.rentalPrice} {project.pricePeriod ? `/ ${project.pricePeriod}` : ""}
                  </span>
                </div>

                {/* Submit Action Buttons */}
                <div className="mt-2 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={onClose}
                    className="w-1/3 rounded-xl border border-emerald-900/20 py-3 text-xs font-semibold text-emerald-950 hover:bg-emerald-900/5 transition"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    className="w-2/3 rounded-xl bg-gradient-to-r from-emerald-900 to-emerald-950 py-3 text-xs font-semibold text-white shadow-lg shadow-emerald-950/20 hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-2"
                  >
                    <Sparkles className="h-4 w-4 text-emerald-300 animate-pulse" />
                    <span>Kirim Reservasi Sewa</span>
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
