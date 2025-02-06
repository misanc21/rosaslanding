'use client'

import { motion, useScroll, MotionValue, useTransform } from "motion/react";
import { useRef } from "react";

interface ParagraphProps {
  value: string;
}

export default function Paragraph({ value }: ParagraphProps) {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ['start 0.9', 'start 0.25']
  })

  const words = value.split(" ");
  return (
    <motion.p
      className="flex text-balance lg:text-2xl max-w-[1200px] flex-wrap items-center justify-start leading-relaxed drop-shadow-md"
      ref={element}
      style={{ opacity: scrollYProgress, lineHeight: 1 }}
    >
      {words &&
        words.map((item, index) => {
          const start = index / words.length;
          const end = start + (1 / words.length)
          return <Word key={index} range={[start, end]} progress={scrollYProgress}> {item}</Word>
        })
      }
    </motion.p>
  )
}

interface WordProps {
  children: React.ReactNode | undefined;
  range: number[];
  progress: MotionValue<number>;
}

const Word = ({ children, range, progress }: WordProps) => {

  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="mr-2 mt-2 text-blue-950 relative z-20">
      <span className="absolute opacity-40">
        {children}
      </span>
      <motion.span
        style={{
          opacity
        }}
      >
        {children}
      </motion.span>
    </span>
  )
}