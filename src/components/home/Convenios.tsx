'use client'
import Image from "next/image"
import logoSalle from "../../../public/lasalle.png"
import logoCnep from "../../../public/cneplogo.png"
import { OpacityWrapper } from "../motion/OpacityWrapper"
import Paragraph from "../motion/Paragraph"
import { motion } from "motion/react"

export const Convenios = () => {

  return (
    <div className="mx-auto w-full max-w-[90%] lg:max-w-full h-screen flex flex-col justify-center items-center font-raleway -mt-16" id="convenios-section">
      <OpacityWrapper
        progress={[0, 0.1, 0.8, 0.95]}
        range={[0, 1, 1, 0]}
      >
        <div className="text-4xl lg:text-7xl text-blue-950 font-bold mb-8 lg:mb-16 text-center">Nuestros convenios</div>
        <Paragraph value={"En nuestra búsqueda constante por brindar mayores oportunidades a nuestros estudiantes, hemos establecido convenios estratégicos ofreciéndoles acceso a beneficios exclusivos, programas académicos de alto nivel y un camino sólido para su futuro educativo."} />
        <motion.div
          className="flex flex-col lg:flex-row gap-10 justify-center items-center my-10 lg:my-32"
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
              className="w-auto h-auto max-w-[200px] sm:max-w-[80px] md:max-w-[100px] lg:max-w-[400px]"
            />
          </div>
          <div className="w-full flex justify-center items-center">
            <Image
              src={logoCnep}
              width={600}
              height={600}
              alt='logo'
              placeholder='blur'
              className="w-auto h-auto max-w-[180px] sm:max-w-[80px] md:max-w-[100px] lg:max-w-[280px]"
            />
          </div>
        </motion.div>

      </OpacityWrapper >
    </div >
  )
}