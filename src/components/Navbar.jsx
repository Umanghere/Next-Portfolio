"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import NavLink from "./NavLink";
import { motion } from "framer-motion";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const topVariants={ // 1st Line Bar in Hamburger
    closed:{
      rotate: 0
    },
    opened: {
      rotate: 45,
      y: 14,
      backgroundColor: "rgb(255,255,255)"
    }
  }

  const centerVariants={  // 2nd Line Bar in Hamburger
    closed:{
      opacity: 1
    },
    opened: {
      opacity: 0
    }
  }
  
  const bottomVariants={  // 3rd Line Bar in Hamburger
    closed:{
      rotate: 0
    },
    opened: {
      rotate: -45,
      y:-14,
      backgroundColor: "rgb(255,255,255)"
    }
  }

  const listVariants ={
    closed: {
      x: 100
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  }

  const listItemVariants={
    closed: {
      x: -10,
      opacity: 0
    },
    opened:{
      x: 0,
      opacity: 1
    }
  }

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-lg">
      {/* LINKS */}
      <div className="hidden md:flex gap-4 w-1/3">
        {links.map((links) => (
          <NavLink links={links} key={links.title} />
        ))}
      </div>
      {/* LOGO */}
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <Link
          href="/"
          className="text-sm bg-black rounded-md p-1 font-semibold flex justify-center items-center">
          <span className="text-white mx-2">
            Umang
          </span>
          <span className="w-12 h-8 rounded bg-white text-black flex justify-center items-center"> 
            .dev 
          </span>
        </Link>
      </div>
      {/* SOCIALS */}
      <div className="justify-center hidden md:flex gap-4 w-1/3">
        <Link href="/">
          <Image src="/github.png" alt="" width={24} height={24} />
        </Link>
        <Link href="/">
          <Image src="/dribbble.png" alt="" width={24} height={24} />
        </Link>
        <Link href="/">
          <Image src="/instagram.png" alt="" width={24} height={24} />
        </Link>
        <Link href="/">
          <Image src="/facebook.png" alt="" width={24} height={24} />
        </Link>
        <Link href="/">
          <Image src="/pinterest.png" alt="" width={24} height={24} />
        </Link>
        <Link href="/">
          <Image src="/linkedin.png" alt="" width={24} height={24} />
        </Link>
      </div>

      {/* Hamburger Responsive Menu */}
      <div className="md:hidden" onClick={() => setOpen(!open)}>
        <button className="w-10 h-8 flex flex-col justify-between z-50 relative">
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded"
          ></motion.div>
        </button>
        {/* MENU LIST  */}
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 z-40 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl"
          >
            {links.map((links) => (
              <motion.div key={links.title} variants={listItemVariants}>
                <Link href={links.url}>{links.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
