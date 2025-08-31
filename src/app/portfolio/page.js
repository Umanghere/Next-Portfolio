"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Team Services Project",
    desc: "A full-stack MERN application designed to streamline internal team management. Features include role-specific dashboards for Admins, Managers, and Employees with functionality for task assignment, performance tracking, team coordination, training logs, and WFO/WFH management.",
    img: "/images/team-services.jpg",
    link: "https://github.com/Umanghere/Team-Service",
  },
  {
    id: 2,
    color: "from-blue-300 to-blue-400",
    title: "Chatty- Chat App",
    desc: "Built a full-stack real-time chat application using React, Node.js, and Socket.IO with features like user authentication, profile management, image uploads (Cloudinary), and instant messaging. Implemented secure JWT-based auth, RESTful APIs, and MongoDB for persistent data storage.",
    img: "/images/chatty.png",
    link: "https://github.com/Umanghere/Chat-Application-using-MERN",
  },
  {
    id: 3,
    color: "from-blue-400 to-violet-300",
    title: "DeepSeek AI Clone",
    desc: "Built a DeepSeek Clone which mimics the functionality of DeepSeek Chatbot using LLaMA API from Meta AI for response featuring real-time message rendering and persistent chat history.",
    img: "/images/deepseesk.png",
    link: "https://github.com/Umanghere/DeepSeek",
  },
  {
    id: 4,
    color: "from-violet-300 to-purple-300",
    title: "Skymate- Weather App",
    desc: "Developed a global weather forecasting web application that displays real-time temperature, wind speed, humidity, pressure, sunrise/sunset times, wind direction, and multi-day forecast for any city worldwide using dynamic API integration.",
    img: "/images/skymate.png",
    link: "https://github.com/Umanghere/Skymate-Weather",
  },
  {
    id: 5,
    color: "from-purple-300 to-red-300",
    title: "Blog App",
    desc: "Built a responsive blog application where users can read, create, and manage blog posts, as well as subscribe to newsletters for updates. Included user-friendly interfaces for blog editing and ensured a smooth reading experience across devices.",
    img: "/images/blogger.png",
    link: "https://github.com/Umanghere/Blog-App-using-Next-JS",
  },
];

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-83.33%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="min-h-[600vh] w-screen relative" ref={ref}>
        <div className="min-h-[calc(100vh-6rem)] flex items-center justify-center text-6xl sm:text-6xl md:text-8xl text-center px-4">
          My Works
        </div>

        <div className="sticky top-0 flex h-screen gap-2 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-pink-50 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-6 sm:gap-8 text-white px-6 sm:px-0">
                  <h1 className="text-5xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-7xl text-center sm:text-left">
                    {item.title}
                  </h1>
                  
                  {/* CONSISTENT IMAGE CONTAINER */}
                  <div className="w-full sm:w-80 md:w-96 lg:w-[500px] xl:w-[700px] mx-auto sm:mx-0">
                    <div className="aspect-[16/10] bg-white/10 backdrop-blur-sm rounded-lg p-6 flex items-center justify-center shadow-lg">
                      <div className="relative w-full h-full max-w-full max-h-full">
                        <Image 
                          src={item.img} 
                          alt={`${item.title} preview`} 
                          fill 
                          className="object-contain object-center rounded" 
                        />
                      </div>
                    </div>
                  </div>
                  
                  <p className="w-full px-3 sm:w-80 md:w-96 lg:w-[500px] lg:text-lg xl:w-[700px] text-justify sm:text-left">
                    {item.desc}
                  </p>
                  <Link href={item.link} target="_blank" className="flex justify-center sm:justify-end">
                    <button className="p-2 text-md md:p-3 md:text-md lg:p-6 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded hover:bg-gray-100 transition-colors">
                      See Project
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      
      <div className="w-screen min-h-screen flex flex-col gap-12 sm:gap-16 items-center justify-center text-center px-4 py-16">
        <h1 className="text-6xl sm:text-5xl md:text-6xl lg:text-8xl">
          Do you have a project?
        </h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-80 h-w-80 sm:w-64 sm:h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60, 60 0 0, 1 120, 0 a 60, 60 0 0, 1 -120, 0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Fullstack Developer and UI Designer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-24 h-24 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Portfolio;