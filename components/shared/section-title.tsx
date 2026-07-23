import Image from "next/image"

type ButtonProops = {
    text: string;
};

const Title = ( {text} : ButtonProops ) => {
    return (
        <>
        {/* Logo */}
      <div className="relative flex items-center justify-center w-[260px] h-[75px]">
        <Image
          src="/assets/decorations/brush-underline-green.png"
          alt="Brush"
          width={230}
          height={55}
          priority
          className="absolute object-contain"
        />

        <h1 className="relative z-10 text-[28px] font-black tracking-wide text-white">
          {text}
        </h1>
      </div>
      </>
    )
}
   
   
export default Title;