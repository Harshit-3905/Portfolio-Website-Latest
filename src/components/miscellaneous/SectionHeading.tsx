"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";

interface SectionHeadingProps {
  text: string;
}

export default function SectionHeading(props: SectionHeadingProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div
      className="py-10 text-[#F56E0F] text-xl text-center font-semibold underline underline-offset-5 font-display tracking-[-0.1em] dark:text-white md:text-5xl md:leading-[5rem]"
      style={{
        transform: isInView ? "scale(1)" : "scale(0)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
      }}
      ref={ref}
    >
      {props.text}
    </div>
  );
}
