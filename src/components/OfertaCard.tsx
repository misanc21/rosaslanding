'use client'
import AnimatedLink from './motion/AnimatedLink';
import { useTransform, useScroll, motion, MotionValue } from 'motion/react';
import { useRef } from "react";

interface OfertaCardProps {
  i: number;
  id: string;
  title: string;
  description: string;
  puntos: string[];
  src: string;
  color: string;
  bgcolor: string;
  link: string;
  targetScale: number;
  range: number[];
  progress: MotionValue<number>
}

const colorClasses: { [key: string]: string } = {
  "bg-sky-500": "bg-sky-500",
  "bg-sky-600": "bg-sky-600",
  "bg-orange-400": "bg-orange-400",
  "bg-orange-500": "bg-orange-500",
  "bg-rose-700": "bg-rose-700",
  "bg-rose-800": "bg-rose-800",
};

export const OfertaCard = ({
  i,
  title,
  description,
  puntos,
  src,
  color,
  bgcolor,
  link,
  targetScale,
  range,
  progress
}: OfertaCardProps) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  })
  const scale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const cardScale = useTransform(progress, range, [1, targetScale]);
  return (
    <div ref={container} className={`card-container h-[100vh] flex justify-center items-center sticky top-40 font-raleway`}>
      <motion.div
        className={`card w-[380px] lg:w-[1000px] h-[550px] lg:h-[500px] relative top-0 rounded-2xl ${colorClasses[color]}`}
        style={{ top: `calc(-15% + ${i * 26}px)`, scale: cardScale }}
      >
        <motion.div className="flex flex-col justify-around items-center text-slate-100 font-bold h-full">
          <div className={`text-3xl lg:text-5xl mx-3 mt-3 flex justify-center flex-shrink-0 ${bgcolor} max-w-[88%] lg:max-w-[97%] w-full rounded-md shadow-md`}>
            <p className="py-2">
              {title}
            </p>
          </div>
          {/*CONTENEDOR DE LAS DIVISIONES*/}
          <div className="flex flex-col-reverse lg:flex-row justify-center items-center row w-full h-full overflow-hidden">
            {/*CONTENEDOR DE TEXTO*/}
            <div className="w-full lg:w-1/2 h-5/6 lg:h-full p-5 flex">
              <div className={`text-xs lg:text-base p-5 flex flex-col justify-start items-center ${bgcolor} w-full h-full rounded-md gap-1 lg:gap-5 shadow-md`}>
                <p className="text-justify leading-relaxed">
                  {description}
                </p>
                <span className="text-base lg:text-lg self-start">
                  Ofrecemos:
                </span>
                <div>
                  <ol className="list-decimal space-y-1 pl-5">
                    {
                      puntos.map((item, index) => {
                        return <li key={index}>{item}</li>
                      })
                    }
                  </ol>
                </div>
                <div className="self-start">

                  <AnimatedLink url={link}>
                    <span className="text-white text-base lg:text-lg">ver más</span>
                  </AnimatedLink>
                </div>
              </div>
            </div>
            {/*CONTENEDOR DE IMAGEN*/}
            <div className="w-full lg:w-1/2 h-full flex px-5 pt-5 lg:p-5 justify-center items-center relative overflow-hidden">
              <motion.div className="w-full h-full overflow-hidden rounded-md">
                <motion.img
                  className="content-start shadow-md"
                  src={`/niveles-educativos/${src}`}
                  alt="nivel"
                  width={500}
                  height={500}
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    scale
                  }}
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}