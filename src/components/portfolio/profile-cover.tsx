import { BrandMark } from "@/components/portfolio/brand-mark";

export function ProfileCover() {
  return (
    <div
      aria-hidden
      className="cover-band screen-line-bottom relative flex aspect-[2.5/1] items-center justify-center border-x border-line select-none sm:aspect-[3.5/1]"
    >
      <BrandMark className="text-4xl text-foreground/80 sm:text-5xl" />
    </div>
  );
}
