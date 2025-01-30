"use client"
import React from 'react'
import { motion } from 'framer-motion'

const page = () => {
  return (
    <motion.div
      className="h-full w-screen"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.6 }}
    >
      -------------------- Contact Page --------------------
    </motion.div>
  )
}

export default page