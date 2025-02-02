'use client'
import Link from "next/link"
import Image from 'next/image';

interface MenuHeaderMobileProps {
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
  menuOpen: boolean
}

export const MenuHeaderMobile = ({ setMenuOpen, menuOpen }: MenuHeaderMobileProps) => {
  return (
    <div
      className={`fixed inset-0 bg-blue-950 text-white flex flex-col items-center justify-center transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-40`}
    >
      <Image src={"/las-rosas-logo.png"} alt="Logo" width={80} height={80} className="absolute top-16" />
      <Link
        href={'/'}
        className='text-2xl font-bold mb-6 hover:text-gray-500'
        onClick={() => setMenuOpen(false)}
      >
        Inicio
      </Link>
      <Link
        href={'/niveles'}
        className='text-2xl font-bold mb-6 hover:text-gray-500'
        onClick={() => setMenuOpen(false)}
      >
        Niveles educativos
      </Link>
      <Link
        href={'/about'}
        className='text-2xl font-bold mb-6 hover:text-gray-500'
        onClick={() => setMenuOpen(false)}
      >
        Sobre nosotros
      </Link>
      <Link
        href={'/admisiones'}
        className='text-2xl font-bold mb-6 hover:text-gray-500'
        onClick={() => setMenuOpen(false)}
      >
        Admisiones
      </Link>
      <Link
        href={'/historia'}
        className='text-2xl font-bold mb-6 hover:text-gray-500'
        onClick={() => setMenuOpen(false)}
      >
        HPSSC
      </Link>
    </div>
  )
}