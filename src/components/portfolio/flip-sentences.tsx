"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";

export function FlipSentences({
  sentences,
  interval = 3000,
  className,
}: {
  sentences: readonly string[];
  interval?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const id = setInterval(() => {
      setIndex((i) => (i + 1) % sentences.length);
    }, interval);

    return () => clearInterval(id);
  }, [isInView, interval, sentences.length]);

  return (
    <div ref={ref} className={className}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={index}
          initial={{ y: 12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -12, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="block min-w-0 max-w-full truncate text-sm text-muted-foreground"
        >
          {sentences[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
