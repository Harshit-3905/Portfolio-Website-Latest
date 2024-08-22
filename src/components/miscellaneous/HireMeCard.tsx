import Image, { StaticImageData } from "next/image";

interface HireMeCardProps {
  src: StaticImageData;
  heading: string;
  description: string;
}

const HireMeCard = (props: HireMeCardProps) => {
  return (
    <div className="flex flex-col w-full md:w-[50%] lg:w-[25%] h-[320px] md:h-[350px] lg:h-[380px] items-center justify-center text-center shadow-lg bg-[#1B1B1E] rounded-2xl border">
      <Image
        src={props.src}
        className="bg-white rounded-2xl"
        alt={props.heading}
        priority={false}
        height={225}
        width={225}
        loading="lazy"
        quality={100}
      />
      <p className="text-[18px] lg:text-[20px] text-[#F56E0F] pt-4">
        {props.heading}
      </p>
      <p className="px-2 text-[13px] lg:text-[15px] pt-2 text-white">
        {props.description}
      </p>
    </div>
  );
};

export default HireMeCard;
