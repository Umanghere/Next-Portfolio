"use client";
import { motion } from "framer-motion";
import React from "react";

const Page = () => {
    const variants ={
        variant1:{
            x: 300, y: 300
        },
        variant2:{
            x: 100, y: 200, rotation: 90
        }
    }

  return (
    <div className="flex justify-center items-center h-full w-full">
      <motion.div
        className="h-96 w-96 bg-red-400 rounded-lg"
        initial={{ x: -100 }}
        variants={{variants}}
        animate={{ x: 300, y: 300 }}
        transition={{duration: 3}}
      ></motion.div>
    </div>
  );
};

export default Page;
