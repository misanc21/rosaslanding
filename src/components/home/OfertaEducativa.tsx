'use client'
import { OFERTAS } from '../../constants/ofertasEducativas';
import { OfertaCard } from '../OfertaCard';
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export const OfertaEducativa = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const { scrollYProgress: scrollY2 } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  })
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.7, 0.71], [0, 1, 1, 0])
  const TranslateY = useTransform(scrollYProgress, [0.7, 0.8], ["0%", "-100%"]);
  return (
    <div className="w-full h-auto mt-[15vh] mb-[100vh] flex justify-center flex-col items-center">
      <motion.h2
        style={{
          opacity,
          y: TranslateY
        }}
        className='text-center text-3xl md:text-5xl lg:text-7xl font-raleway font-bold text-blue-950 sticky top-24 h-[25vh]'>
        Nuestros niveles educativos
      </motion.h2>
      <div ref={ref}>
        {OFERTAS.map((nivel, index) => {
          const targetScale = 1 - ((OFERTAS.length - index) * 0.05)
          return (
            <OfertaCard
              key={nivel.id}
              i={index}
              targetScale={targetScale}
              range={[index * 0.25, 1]}
              progress={scrollY2}
              {...nivel} />
          )
        })}
      </div>
    </div>
  )
}