import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    
    <div className='w-full py-20 h-[50vh] bg-green-900 rounded-3xl'>
        <div className="text flex gap-20 overflow-hidden  whitespace-nowrap uppercase border-t-2 border-b-2 border-zinc-100 py-10">
            <motion.h1  initial={{x:0}} animate={{x:"-100%"}}  transition={{ease:"linear",repeat:Infinity,duration:5}} className="text-[10vw] leading-none font-serif font-semibold -mb-10">We are ochi</motion.h1>
            <motion.h1   initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:5}} className="text-[10vw] leading-none font-serif font-semibold">We are ochi</motion.h1>
            
        </div>
    </div>
  )
}

export default Marquee