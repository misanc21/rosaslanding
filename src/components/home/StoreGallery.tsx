'use client'
import Image from 'next/image'
import img1 from '../../../public/img1.jpg'
import img2 from '../../../public/img2.jpg'
import img3 from '../../../public/img3.jpg'
import img4 from '../../../public/img4.jpg'
import img5 from '../../../public/img5.jpg'
import { useScroll, useTransform, motion } from 'motion/react'
import { useRef } from 'react'

export const StoreGallery = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  })
  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale7 = useTransform(scrollYProgress, [0, 1], [1, 7]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);
  const opacityImg = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  const imgArray = [
    {
      src: img1,
      scale: scale6,
      position: 'w-1/4 h-1/4 -top-[25vh] left-[0vw]'
    },
    {
      src: img2,
      scale: scale6,
      position: 'w-2/4 sm:w-1/4 h-2/4 -top-[12vh] left-[40vw] sm:left-[26vw]'
    },
    {
      src: img3,
      scale: scale7,
      position: 'w-2/4 sm:w-1/4 h-2/4 -top-[12vh] -left-[40vw] sm:-left-[26vw]'
    },
    {
      src: img4,
      scale: scale8,
      position: 'w-3/4 sm:w-2/4 h-1/4 top-[28vh] -left-[29vw] sm:-left-[13vw]'
    },
    {
      src: img5,
      scale: scale9,
      position: 'w-2/4 sm:w-1/4 h-1/4 top-[28vh] left-[37vw] sm:left-[26vw]'
    },
  ]

  return (
    <motion.div ref={container} className='h-[300vh] relative'
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <div className='sticky h-screen top-0 overflow-hidden'>
        <motion.div
          className='w-full h-full absolute top-0 flex justify-center items-center'
          style={{ scale: scale4 }}
        >
          <motion.div
            className='w-1/4 h-1/4 top-[0vh] left-[0vw] text-raleway font-bold text-center mt-8 bg-cover bg-center bg-no-repeat rounded-md'
            style={{
              backgroundImage: "url('/principal.jpg')",
              opacity: opacityImg
            }}
          >
          </motion.div>
          <motion.div className="w-1/4 absolute flex justify-center items-center text-blue-950 h-full text-base sm:text-4xl text-center font-bold font-raleway" style={{ opacity }}>
            70 Años formando a los Líderes del mañana
          </motion.div>
        </motion.div>
        {
          imgArray.map(({ src, scale, position }, index) => {
            return (
              <motion.div
                key={index}
                className='w-full h-full absolute top-0 flex justify-center items-center'
                style={{ scale }}
              >
                <motion.div className={`w-1/4 h-1/4 relative rounded ${position}`} >
                  <Image
                    src={src}
                    fill
                    alt='img1'
                    placeholder='blur'
                    className='object-cover rounded-md'
                  />
                </motion.div>
              </motion.div>
            )
          })
        }
      </div>
    </motion.div>
  )
}