import { OpacityWrapper } from "../motion/OpacityWrapper"
import Paragraph from "../motion/Paragraph"
export const Talleres = () => {
  return (
    <div className="mx-auto w-full max-w-[90%] lg:max-w-full h-screen flex flex-col justify-start items-center font-raleway" id="talleres-section">
      <OpacityWrapper
        progress={[0, 0.1, 0.8, 0.95]}
        range={[0, 1, 1, 0]}
      >
        <h2 className='text-left text-4xl md:text-5xl lg:text-7xl font-raleway font-bold text-blue-950 h-auto lg:h-[12vh] mb-4'>
          Talleres
        </h2>
        <Paragraph value={"Nuestros talleres están diseñados para despertar la creatividad, fortalecer el pensamiento crítico y fomentar el trabajo en equipo."} />
        <div className="flex-col-reverse lg:flex-row w-full mb-10 flex justify-center items-center font-raleway text-gray-900 p-5 gap-5 pt-2 lg:pt-5">

        </div>
      </OpacityWrapper>
    </div>
  )
}