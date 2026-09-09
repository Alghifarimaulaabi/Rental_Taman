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
            Toko Sepatu Berkualitas
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-emerald-900/70 max-w-2xl font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem doloremque, ratione minima voluptas
            repellendus cumque numquam officiis modi assumenda nemo
            eligendi dicta voluptatum illum beatae aliquid dolores
            nostrum tempore vitae.
          </p>

          <p className="text-base sm:text-lg leading-relaxed text-emerald-900/70 max-w-2xl font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Laboriosam magni dolorum voluptate quos molestias
            consectetur, dolorem eveniet provident deleniti officiis.
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