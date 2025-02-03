'use client'
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

interface OpacityProps {
  children: React.ReactNode;
  clasess?: string;
  progress?: number[];
  range?: number[];
}

export const OpacityWrapper = ({
  children,
  clasess = "",
  progress = [0, 0.5, 0.95],
  range = [0, 1, 0],
}: OpacityProps) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const opacity = useTransform(scrollYProgress, progress, range)
  return (
    <motion.div
      className={`${clasess}`}
      ref={ref}
      style={{
        opacity,
      }}
    >
      {children}
    </motion.div>
  )
}