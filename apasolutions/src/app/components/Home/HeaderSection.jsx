"use client";
import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import bgImage from "../../../assets/HeaderPicWeb.webp";

import Navbar from "./Navbar";

const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: (delay) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: "easeOut", delay },
  }),
};

const HeaderSection = () => {


  return (
    <>
      <Head>
        <title>Web Development Experts | Fast & Responsive Sites</title>
        <meta
          name="description"
          content="Build high-performance, SEO-friendly websites & mobile applications with our expert team."
        />
        <meta
          name="keywords"
          content="web development, SEO, mobile apps, design"
        />
        <meta name="author" content="swiftweb solutions" />
      </Head>

      <div className="relative h-screen overflow-hidden">
        <Navbar/>
     
     

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000 z-[-1]"
          style={{ backgroundImage: `url(${bgImage.src})` }}
          role="img"
          aria-label="Background Image"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-40 z-10" />

        <div className="relative z-20">
          

          <header className="flex flex-col md:flex-row items-center justify-center md:justify-start text-white px-6 md:px-20 h-screen">
            <motion.div
              className="bg-opacity-50 p-3 rounded-lg lg:w-1/2 w-full md:w-1/2 text-center md:text-left"
              initial="hidden"
              animate="visible"
            >
              <motion.h1
                className="text-4xl md:text-6xl font-semibold mb-4 leading-tight"
                variants={textVariants}
                custom={0}
              >
                Elevate Your Digital Presence
              </motion.h1>

              <motion.p
                className="text-md md:text-lg mb-6 text-gray-200"
                variants={textVariants}
                custom={0.3}
              >
                From dynamic websites to blazing-fast mobile apps, we deliver
                digital experiences that are beautifully designed, highly
                responsive, and built to scale.
              </motion.p>

              <motion.div
                className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6"
                variants={textVariants}
                custom={0.6}
              >
                <motion.a
                  href="#contact"
                  className="bg-blue-600 hover:bg-blue-700 transition-all duration-200 text-white font-semibold py-3 px-6 rounded-xl shadow-md"
                  whileHover={{ scale: 1.05 }}
                >
                  Get Started
                </motion.a>
                <motion.a
                  href="/about"
                  className="text-white font-medium underline underline-offset-4 hover:text-blue-400"
                  whileHover={{ scale: 1.05 }}
                >
                  Learn More About Us →
                </motion.a>
              </motion.div>
            </motion.div>
          </header>

          {/* Other Sections */}
   
        </div>
      </div>
    </>
  );
};

export default HeaderSection;