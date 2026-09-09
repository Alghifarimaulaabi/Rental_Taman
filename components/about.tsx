import Image from "next/image";
import Title from "@/components/shared/section-title";

const About = () => {
  return (
    <section
      id="tentang"
      className="w-full px-6 py-20 lg:px-20"
    >
      <Title text="Tentang Kami" />

      <div className="mt-12 flex flex-col items-center gap-12 lg:flex-row lg:items-center">


        {/* Left */}
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl font-bold">
            Aliza Garden & Decoration
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-emerald-900/70 max-w-2xl font-normal">
            Kami adalah penyedia layanan dekorasi tanaman hias indoor dan outdoor untuk berbagai kebutuhan, termasuk kantor, hotel, restoran, wedding, dan event-event lainnya. Dengan pengalaman bertahun-tahun, kami menghadirkan solusi dekorasi yang estetis dan fungsional, menciptakan suasana yang menyegarkan dan menenangkan bagi setiap ruang.
          </p>

          <p className="text-base sm:text-lg leading-relaxed text-emerald-900/70 max-w-2xl font-normal">
            Visi kami adalah menjadi mitra terpercaya dalam menghadirkan keindahan alam ke dalam setiap ruang, sementara misi kami adalah menyediakan layanan dekorasi tanaman yang inovatif, berkualitas tinggi, dan ramah lingkungan. Kami berkomitmen untuk memberikan pengalaman terbaik bagi klien kami melalui desain yang kreatif dan pelayanan yang profesional.
          </p>
        </div>

        {/* Right */}
        <div className="flex flex-1 justify-center">
          <Image
            src="/assets/images/taman.jpg"
            alt="taman"
            width={550}
            height={200}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 550px"
            loading="lazy"
            className="rounded-2xl object-cover shadow-xl w-auto h-auto"
          />
        </div>

      </div>
    </section>
  );
};

export default About;