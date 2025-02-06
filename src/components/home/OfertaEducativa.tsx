'use client'
import { OFERTAS, OfertaCardProps } from '../../constants/ofertasEducativas';
import { OfertaCard } from '../OfertaCard';
import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";

export const OfertaEducativa = () => {
  const tabs = [
    { id: 0, label: "preescolar", color: "bg-sky-500" },
    { id: 1, label: "Primaria", color: "bg-orange-400" },
    { id: 2, label: "Secundaria", color: "bg-rose-700" },
  ];
  const [selectedTab, setSelectedTab] = useState<number | null>(null);
  const [ofertas, setOfertas] = useState<OfertaCardProps[] | null | undefined>(null);
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

  useEffect(() => {
    setOfertas(OFERTAS);
  }, [])

  const handleSelect = (selected: number) => {
    setSelectedTab(selected);
    setOfertas((prevOfertas) => {
      if (prevOfertas == null)
        return []
      const index = prevOfertas.findIndex((o) => o.id === selected.toString());
      if (index === -1) return prevOfertas;
      return [...prevOfertas.slice(0, index), ...prevOfertas.slice(index + 1), prevOfertas[index]];
    });
  }
  return (
    <div className="w-full h-auto mt-[15vh] flex justify-center flex-col items-center">
      <motion.h2
        style={{
          opacity,
          y: TranslateY
        }}
        className='text-left text-4xl md:text-5xl lg:text-7xl font-raleway font-bold text-blue-950 sticky top-14 lg:top-20 h-[25vh]'>
        Niveles educativos
      </motion.h2>
      <div ref={ref}>
        {ofertas &&
          ofertas.map((nivel, index) => {
            const targetScale = 1 - ((OFERTAS.length - index) * 0.01)
            return (
              <OfertaCard
                key={nivel.id}
                i={index}
                targetScale={targetScale}
                range={[index * 0.25, 1]}
                progress={scrollY2}
                {...nivel} />
            )
          })
        }
      </div>
      {/*TAB */}
      <div className="flex bg-gray-200 rounded-lg relative -top-36 lg:-top-40 overflow-hidden">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`relative ${tab.color}`}
            onClick={() => handleSelect(tab.id)}
          >
            <button
              className={`px-6 py-2 font-semibold text-gray-100 transition-all`}
            >
              {tab.label}
            </button>
            {selectedTab === tab.id && (
              <motion.div
                className="absolute left-0 right-0 bottom-0 h-2 bg-white bg-opacity-30"
                layoutId="underline"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}