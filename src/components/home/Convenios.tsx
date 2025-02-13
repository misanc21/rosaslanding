'use client'
import Image from "next/image"
import logoSalle from "../../../public/lasalle.png"
import logoCnep from "../../../public/cneplogo.png"
import { motion } from "motion/react"

export const Convenios = () => {

  return (
    <>
      <h2 className='text-center lg:text-left text-3xl md:text-5xl lg:text-4xl font-raleway font-bold text-blue-950 my-5'>
        Nuestros convenios
      </h2>
      <span className="text-balance lg:text-base max-w-[1200px] flex-wrap items-center justify-center lg:justify-start leading-relaxed text-blue-950">
        En nuestra búsqueda constante por brindar mayores oportunidades a nuestros estudiantes, hemos establecido convenios estratégicos ofreciéndoles acceso a beneficios exclusivos, programas académicos de alto nivel y un camino sólido para su futuro educativo.
      </span>
      <motion.div
        className="flex flex-col lg:flex-row gap-10 justify-center items-center mt-5"
        initial={{ opacity: 0, scale: 0.5 }}
        transition={{
          duration: 0.8,
          delay: 0.8,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        viewport={{ once: false, amount: .4 }}
        whileInView={{ opacity: 1, scale: 1 }}
      >
        <div
          className="w-full flex justify-center items-center">
          <Image
            src={logoSalle}
            width={600}
            height={600}
            alt='logo'
            placeholder='blur'
            className="w-auto h-auto max-w-[180px] sm:max-w-[80px] md:max-w-[100px] lg:max-w-[300px]"
          />
        </div>
        <div className="w-full flex justify-center items-center">
          <Image
            src={logoCnep}
            width={600}
            height={600}
            alt='logo'
            placeholder='blur'
            className="w-auto h-auto max-w-[160px] sm:max-w-[80px] md:max-w-[100px] lg:max-w-[180px]"
          />
        </div>
      </motion.div>
    </>
  )
}