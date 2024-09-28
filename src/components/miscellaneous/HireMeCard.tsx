import Image, { StaticImageData } from "next/image";

interface HireMeCardProps {
  src: StaticImageData;
  heading: string;
  description: string;
}

const HireMeCard = (props: HireMeCardProps) => {
  return (
    <div className="flex flex-col w-[90%] md:w-[35%] lg:w-[25%] h-auto bg-[#262626] rounded-2xl p-3 items-center justify-center border border-[#FBFBFB] text-center">
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
      <p className="text-[13px] lg:text-[15px] pt-2 text-white">
        {props.description}
      </p>
    </div>
  );
};

export default HireMeCard;
