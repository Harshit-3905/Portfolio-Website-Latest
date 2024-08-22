"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    name: string;
    icon: JSX.Element;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 pt-10 px-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <motion.div
          key={item.name}
          className="relative flex flex-col items-center justify-center border border-[#FBFBFB] rounded-[20px] h-[100px] bg-[#1B1B1E] w-[125px] cursor-pointer"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          {item.icon}
          <span className="mt-2 text-sm text-gray-300">{item.name}</span>

          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] rounded-[20px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              />
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
};
