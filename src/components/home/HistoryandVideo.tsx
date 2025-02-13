'use client'
import Image from "next/image"
import logoHermanas from "../../../public/logohermanas.png"
import { OpacityWrapper } from "../motion/OpacityWrapper"
import { Convenios } from './Convenios';
import { Noticias } from './Noticias';

export const HistoryAndVideo = () => {
  return (
    <OpacityWrapper
      progress={[0, 0.3, 0.75, 0.95]}
      range={[0, 1, 1, 0]}
    >
      <div className="w-full h-auto lg:h-screen flex justify-center items-center flex-col lg:flex-row p-4" id="first-section">
        {/*Seccion de quienes somos */}
        <div className="w-full h-full flex flex-col justify-start items-center lg:items-start">
          <h2 className='lg:text-left text-3xl md:text-5xl lg:text-4xl font-raleway font-bold text-blue-950 mb-5 lg:mb-7'>
            ¿Quienes somos?
          </h2>
          <div className="p-5 h-auto w-[90%] bg-slate-300 flex flex-col justify-start items-start rounded-lg">
            <div className="w-full h-[20vh] lg:h-[35vh] flex flex-col justify-start items-start">
              <iframe
                className="w-full h-[20vh] lg:h-[40vh] rounded-md shadow-lg"
                src="https://www.youtube.com/embed/TU_CODIGO_DE_VIDEO"
                title="Video Institucional Colegio Las Rosas"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="flex flex-col justify-start items-center w-full h-full mt-3 pt-2">
              <h3 className="text-xl lg:text-2xl font-bold text-center text-gray-900">
                Formando corazones y mentes.
              </h3>
              <p className="w-full text-center text-base sm:text-base mt-2">
                Nuestra educación integral combina el aprendizaje con la fe, brindando un ambiente seguro e inspirador donde cada estudiante descubre su propósito y desarrolla sus talentos con la guía de Dios.
              </p>
              <div className="w-full flex justify-center items-center" >
                <Image
                  src={logoHermanas}
                  width={60}
                  height={60}
                  alt='logo'
                  placeholder='blur'
                  className="w-auto h-auto max-w-[50px] sm:max-w-[80px] md:max-w-[100px] lg:max-w-[120px]"
                />
              </div>
              <p className="w-full lg:w-3/4 text-center text-base lg:text-base mt-5">
                En el Colegio Las Rosas, nuestra misión es educar con amor, fe y excelencia académica.
              </p>
            </div>
          </div>
        </div>
        {/*Seccion de convenios  y noticias*/}
        <div className="w-full h-full flex flex-col justify-start items-center lg:items-start mt-12 lg:mt-0">
          <div>
            <Noticias />
          </div>
          <div>
            <Convenios />
          </div>
        </div>
      </div>
    </OpacityWrapper>
  )
}