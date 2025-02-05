'use client'
import * as motion from "motion/react-client"
interface TransitionElementProps {
  children: React.ReactNode | undefined;
}

export default function TransitionElement({ children }: TransitionElementProps) {

  return (
    <motion.div
      style={ball}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="flex justify-center items-center"
      viewport={{ once: true, amount: 1 }}
      whileInView={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
    >
      {children}
    </motion.div>
  )
}

/**
 * ==============   Styles   ================
 */

const ball = {
  width: '100%',
  height: 'auto',
}
