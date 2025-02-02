'use client'
import Image from "next/image";
import AnimatedLink from "./motion/AnimatedLink";
import ContactButton from "./motion/ContactButton";
import { useState } from "react";
import { MenuHeaderMobile } from "./MenuHeaderMobile";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  return (
    <header className='bg-blue-950 p-2 flex justify-between items-center fixed top-0 left-0 w-full z-50 px-3'>
      <div className='hidden md:flex gap-8 justify-center items-center'>
        <AnimatedLink url={"/"} >
          <Image src={"/las-rosas-logo.png"} alt="Logo" width={60} height={60} />
        </AnimatedLink>
        <AnimatedLink url={"/niveles"} text="Niveles educativos" />
        <AnimatedLink url={"/about"} text="Sobre nosotros" />
        <AnimatedLink url={"/admisiones"} text="Admisiones" />
        <AnimatedLink url={"/historia"} text="HPSSC" />
      </div>
      <div onClick={() => setMenuOpen(!menuOpen)} className='block z-50 md:hidden cursor-pointer'>
        <div className={`w-6 h-0.5 mb-1 transition-all ${menuOpen ? ' bg-white rotate-45 translate-y-1.5' : 'bg-white'}`}></div>
        <div className={`w-6 h-0.5 bg-white mb-1 transition-all ${menuOpen ? 'opacity-0' : ''}`}></div>
        <div className={`w-6 h-0.5 transition-all ${menuOpen ? 'bg-white -rotate-45 -translate-y-1.5' : 'bg-white'}`}></div>
      </div>
      <ContactButton />
      <MenuHeaderMobile menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </header>
  )
}