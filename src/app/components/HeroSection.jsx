"use client";
import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import basePath from "../utils/basePath";

const HeroSection = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        videoRef.current.muted = true;
        videoRef.current.play();
      });
    }
  }, []);

  return (
    <section className="lg:py-16">
      {/* Mobile Layout - Video on top, text below */}
      <div className="lg:hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <div className="rounded-3xl bg-[#181818] w-[300px] h-[500px] overflow-hidden border-2 border-[#33353F]">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              autoPlay
              muted
              playsInline
              controls
            >
              <source src={`${basePath}/videos/Manaswi Kulkarni - Professional Intro.mp4`} type="video/mp4" />
            </video>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center px-4"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello,
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              I&apos;m Manaswi
            </span>
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6">
            Innovative | Quick-Learner | AI-Driven
          </p>
          <div className="flex flex-col gap-4">
            <button
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="px-6 py-3 w-full rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Hire Me
            </button>

            <a
              href={`${basePath}/resume.pdf`}
              download="Manaswi_Kulkarni_Resume.pdf"
              className="px-1 py-1 w-full rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Desktop Layout - Side by side */}
      <div className="hidden lg:grid grid-cols-12 gap-4 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-7 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello,
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              I&apos;m Manaswi
            </span>
          </h1>
          <p className="text-[#ADB7BE] text-xl mb-6">
            Innovative | Quick-Learner | AI-Driven
          </p>
          <div>
            <button
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Hire Me
            </button>

            <a
              href={`${basePath}/resume.pdf`}
              download="Manaswi_Kulkarni_Resume.pdf"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-5 place-self-center"
        >
          <div className="rounded-3xl bg-[#181818] w-[420px] h-[650px] overflow-hidden border-2 border-[#33353F]">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              autoPlay
              muted
              playsInline
              controls
            >
              <source src={`${basePath}/videos/Manaswi Kulkarni - Professional Intro.mp4`} type="video/mp4" />
            </video>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;