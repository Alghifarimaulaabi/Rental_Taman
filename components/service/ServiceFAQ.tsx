"use client";

import { useState } from "react";
import { ServiceFAQ as FAQType } from "@/lib/types/service";
import { ChevronDown, HelpCircle } from "lucide-react";

interface ServiceFAQProps {
  faqs: FAQType[];
  title: string;
}

export default function ServiceFAQ({ faqs, title }: ServiceFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full py-20 px-4 sm:px-8 lg:px-12 xl:px-16 bg-[#F4F7F4]">
      <div className="mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="text-center flex flex-col items-center gap-4 mb-14 animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-900/5 px-4 py-1.5 text-xs font-semibold text-emerald-900 border border-emerald-900/10">
            <HelpCircle className="h-3.5 w-3.5 text-emerald-700" />
            <span className="tracking-wide">PERTANYAAN SERING DIAJUKAN (FAQ)</span>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-emerald-950 sm:text-4xl lg:text-5xl">
            Seputar Layanan{" "}
            <span className="font-serif-display italic font-normal text-emerald-800">
              {title}
            </span>
          </h2>
          <p className="text-base sm:text-lg text-emerald-900/70 max-w-xl font-normal">
            Jawaban lengkap mengenai pertanyaan umum seputar pemesanan, kontrak, dan teknis pelaksanaan.
          </p>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="overflow-hidden rounded-2xl bg-white shadow-md shadow-emerald-950/5 ring-1 ring-emerald-900/10 transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${idx * 80}ms` }}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="flex w-full items-center justify-between gap-4 p-5 sm:p-6 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif-display text-base sm:text-lg font-bold text-emerald-950 pr-2">
                    {faq.question}
                  </span>
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-900/5 text-emerald-800 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-emerald-900 text-white" : ""
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                <div
                  className={`transition-all duration-300 ease-out overflow-hidden ${
                    isOpen ? "max-h-96 opacity-100 p-5 sm:p-6 pt-0 border-t border-emerald-900/5" : "max-h-0 opacity-0 p-0"
                  }`}
                >
                  <p className="text-xs sm:text-sm leading-relaxed text-emerald-900/80 font-normal">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
