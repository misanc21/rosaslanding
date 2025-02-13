import Image from "next/image";
import { NOTICIAS_IMAGES } from "@/constants/noticiasImages";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

export const Slider = () => {
  const [width, setWidth] = useState(0);
  const slider_wrapper = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (slider_wrapper.current) {
      setWidth(slider_wrapper.current.scrollWidth - slider_wrapper.current.offsetWidth);
    }
  }, []);

  return (
    <div className="container flex justify-center items-center w-[90vw] lg:w-[50vw]">
      <motion.div
        className="slider flex overflow-hidden rounded-md w-auto"
        ref={slider_wrapper}
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          className="flex gap-4"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
        >
          {NOTICIAS_IMAGES.map((item, index) => (
            <motion.div
              key={index}
              className="card relative w-52 h-44 lg:w-96 lg:h-72 overflow-hidden rounded-lg shadow-lg"
            >
              <Image
                src={`/noticias/${item.src}.png`}
                fill
                style={{ objectFit: "cover" }}
                alt={`noticia ${index + 1}`}
                draggable={false}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={true}
              />
              <div className="absolute top-0 left-0 w-full bg-black bg-opacity-50 text-white text-lg font-semibold p-3">
                {item.title}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div >
  );
};
