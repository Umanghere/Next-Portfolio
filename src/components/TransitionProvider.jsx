"use client";

import { AnimatePresence } from 'framer-motion'
import Navbar from './Navbar';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const TransitionProvider = ({children}) => {

    const pathName = usePathname()

  return (
    <AnimatePresence mode='wait'>
        <div key={pathName} className="w-fit h-screen xl:h-screen bg-gradient-to-b from-blue-100 to-red-100">
            {/* upar se niche aate hue animation */}
          <motion.div className='h-screen w-screen fixed bg-black rounded-b-[100px] z-40' 
          animate={{height: "0vh"}}
          exit={{height: "120vh"}}
          transition={{duration: 0.3, ease: "easeInOut"}}
          /> 
          <motion.div className='fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-8xl cursor-default z-50 w-fit h-fit'
          initial={{opacity: 1}} 
          animate={{opacity: 0}}
          exit={{opacity: 0}}
          transition={{duration: 0.5, ease: "linear"}}
          >
            {pathName.substring(1)}
          </motion.div>
          {/* niche se upar aate hue animation */}
          <motion.div className='h-screen w-screen fixed bg-black rounded-t-[100px] bottom-0 z-30' 
          initial={{height: "120vh"}}
          animate={{height: "0vh", transition:{delay: 0.3, ease:"easeInOut"}}}
          /> 

          <div className="h-24">
            <Navbar />
          </div>
          <div className="">{children}</div>
        </div>
    </AnimatePresence>
  )
}

export default TransitionProvider
