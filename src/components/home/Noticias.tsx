'use client'
import { Slider } from "../motion/Slider"


export const Noticias = () => {

  return (
    <div className="container mx-auto px-4 mb-10">
      <h2 className='lg:text-left text-center text-3xl md:text-5xl lg:text-4xl font-raleway font-bold text-blue-950 mb-7'>
        Noticias
      </h2>
      <Slider />
    </div>
  )
}