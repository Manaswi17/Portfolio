"use client";
import React from "react";
import { motion } from "framer-motion";
import basePath from "../utils/basePath";

const VideoSection = () => {
  return (
    <section className="py-8 px-4 sm:py-16 xl:px-16" id="video">
      <div className="max-w-5xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center text-4xl font-bold text-white mb-8"
        >
          Get to Know Me
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative w-full aspect-video bg-[#181818] rounded-lg overflow-hidden border-2 border-[#33353F] hover:border-primary-500 transition-colors duration-300 shadow-2xl"
        >
          <video
            className="w-full h-full object-cover"
            controls
            preload="metadata"
          >
            <source src={`${basePath}/videos/Manaswi Kulkarni - Professional Intro.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;