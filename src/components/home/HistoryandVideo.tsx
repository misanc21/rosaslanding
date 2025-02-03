import Image from "next/image"
import logoHermanas from "../../../public/logohermanas.png"
import { OpacityWrapper } from "../motion/OpacityWrapper"
export const HistoryAndVideo = () => {
  return (
    <>
      <OpacityWrapper>
        <h2 className='text-center text-3xl md:text-5xl lg:text-7xl font-raleway font-bold text-blue-950 h-[5vh] lg:h-[12vh]'>
          ¿Quienes somos?
        </h2>
        <div className="flex-col-reverse lg:flex-row w-full mb-10 flex justify-center items-center font-raleway text-gray-900 p-5 gap-5 pt-2 lg:pt-5">
          {/*DIV DE TEXTO*/}
          <div className="w-full lg:w-1/2 flex-1 flex flex-col justify-center items-center">
            <div className="p-5 h-[48vh] lg:h-[50vh] bg-slate-300 flex flex-col justify-center items-center rounded-xl">
              <h2 className="text-xl lg:text-3xl font-bold text-center text-gray-900">
                Formando corazones y mentes con fé, conocimiento y valores
              </h2>
              <p className="w-full lg:w-3/4 font-bold text-center text-base sm:text-lg mt-5 text-pretty">
                Nuestra educación integral combina el aprendizaje con la fe, brindando un ambiente seguro e inspirador donde cada estudiante descubre su propósito y desarrolla sus talentos con la guía de Dios.
              </p>
              <div className="w-full flex justify-center items-center" >
                <Image
                  src={logoHermanas}
                  width={60}
                  height={60}
                  alt='logo'
                  placeholder='blur'
                  className="w-auto h-auto max-w-[60px] sm:max-w-[80px] md:max-w-[100px] lg:max-w-[120px]"
                />
              </div>
              <p className="w-full lg:w-3/4italic text-center text-base lg:text-lg mt-5 text-pretty">
                En el Colegio Las Rosas, nuestra misión es educar con amor, fe y excelencia académica.
              </p>
            </div>
          </div>
          {/*DIV DE VIDEO*/}
          <div className="w-full lg:w-1/2 h-[25vh] lg:h-[50vh] flex flex-col justify-center items-center">
            <iframe
              className="w-full h-[50vh] rounded-xl shadow-lg"
              src="https://www.youtube.com/embed/TU_CODIGO_DE_VIDEO"
              title="Video Institucional Colegio Las Rosas"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </OpacityWrapper>
    </>
  )
}