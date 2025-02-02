import TransitionElement from "@/components/motion/TransitionElement";
import Image from 'next/image';

export const WelcomePage = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <TransitionElement>
        <div className="flex flex-col-reverse lg:flex-row justify-center items-center">
          <div className="flex flex-col justify-start text-center lg:w-full">
            <span className="font-raleway font-bold text-4xl lg:text-7xl text-red-700 text-center">
              COLEGIO
            </span>
            <span className="font-raleway font-bold text-5xl lg:text-8xl text-red-700 text-center">
              LAS ROSAS
            </span>
            <span className="font-charm text-xl lg:text-4xl text-yellow-700 font-bold">
              "Todo por Dios y en todo Caridad."
            </span>
          </div>
          <div className='w-40 md:w-2/5'>
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
      </TransitionElement>
    </div>
  )
}