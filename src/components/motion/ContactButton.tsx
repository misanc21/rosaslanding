'use client'
import { motion } from "motion/react";

export default function ContactButton() {
  return (
    <>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.90 }}
        transition={{ type: "spring", stiffness: 300, damping: 10 }}
      >
        <button
          onClick={() => console.log('helloxs')}
          className="bg-red-700 text-white font-bold py-1 sm:py-2 px-4 rounded-lg shadow-md hover:bg-red-900 transition duration-300 hover:cursor-pointer"
          type="button"
        >
          Contacto
        </button>
      </motion.div>
    </>
  );
}