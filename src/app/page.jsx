"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col h-[89vh] lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 py-8">
        {/* IMAGE CONTAINER - Fixed height for mobile to ensure visibility */}
        <div className="relative w-full h-[500px] sm:h-[350px] lg:h-[500px] xl:h-[700px] lg:w-1/2 mb-8 lg:mb-0">
          <Image 
            src="/hero.png" 
            alt="Developer profile" 
            fill 
            className="object-contain object-center"
            priority
          />
        </div>
        
        {/* TEXT CONTAINER - Boxed structure */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:gap-8 justify-center bg-opacity-70 backdrop-blur-sm px-6 sm:p-8 rounded-lg shadow-sm">
          {/* TITLE */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center">
            Crafting Digital Experiences, Designing Tomorrow.
          </h1>
          
          {/* DESC */}
          <p className="px-3 text-sm sm:text-lg md:text-xl text-center">
            Hey there! I&apos;m the developer behind this digital space where I blend creative design with technical expertise. Each project in my portfolio represents my approach to solving real problems through code and design. I&apos;m passionate about creating work that balances functionality with thoughtful aesthetics. Through this collection, you&apos;ll get a glimpse of how I transform ideas into polished digital experiences. Feel free to explore and see my skills in action.
          </p>
          
          {/* BUTTONS */}
          <div className="w-full flex sm:flex-row gap-4 mt-4 justify-center">
            <Link href="/portfolio" className="w-full sm:w-auto">
              <button className="w-full sm:w-44 p-3 sm:p-4 rounded-lg ring-1 ring-black bg-black text-white transition-all hover:bg-black/90">
                View My Work
              </button>
            </Link>
            <Link href="/contact" className="w-full sm:w-auto">
              <button className="w-full sm:w-44 p-3 sm:p-4 rounded-lg ring-2 ring-black transition-all hover:bg-black/10">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;