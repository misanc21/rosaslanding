'use client'
import TransitionElement from "@/components/motion/TransitionElement";
import { motion, useScroll, useTransform } from "motion/react";
import Image from 'next/image';
import { useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";

export const WelcomePage = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const opacity = useTransform(scrollYProgress, [0, 0.5, 0.8], [0, 1, 0])
  return (
    <motion.div
      ref={ref}
      className="w-full h-screen flex justify-center items-center"
      style={{
        opacity,
      }}
    >
      <TransitionElement>
        <div className="w-[90%] flex flex-col justify-center items-center">
          <div className="flex flex-col-reverse lg:flex-row justify-center items-center w-full">
            <div className="flex flex-col justify-start text-center lg:w-full">
              <span className="font-raleway font-bold text-5xl lg:text-8xl text-red-700 text-center">
                COLEGIO
              </span>
              <span className="font-raleway font-bold text-6xl lg:text-9xl text-red-700 text-center">
                LAS ROSAS
              </span>
              <span className="font-charm text-2xl lg:text-5xl text-yellow-700 font-bold">
                {`"Todo por Dios y en todo Caridad."`}
              </span>
              <span className="mt-3 lg:mt-10 font-bold text-blue-950 font-raleway text-sm lg:text-xl">
                Preescolar - Primaria - Secundaria
              </span>
            </div>
            <div className='w-56 lg:w-4/6'>
              <Image
                className=" content-start"
                src={"/las-rosas-logo.png"}
                alt="Logo"
                width={80}
                height={80}
                sizes="(max-width: 768px) 200vw, (max-width: 1200px) 50vw, 33vw"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </div>
          <motion.div
            className="mt-20 relative top-16 z-0"
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <IoIosArrowDown className="w-10 h-10 text-blue-900" />
          </motion.div>
        </div>
      </TransitionElement>
    </motion.div>
  )
}