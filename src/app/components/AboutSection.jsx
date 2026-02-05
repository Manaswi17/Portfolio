"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="space-y-4">
        <li className="bg-[#181818] p-4 rounded-lg border border-[#33353F]">
          <strong className="text-primary-400">M.S. in Computer Science</strong>
          <p className="text-[#ADB7BE] text-sm">Worcester Polytechnic Institute (WPI), USA</p>
          <p className="text-secondary-500 text-sm">Aug 2024 - Aug 2026</p>
        </li>
        <li className="bg-[#181818] p-4 rounded-lg border border-[#33353F]">
          <strong className="text-primary-400">B.Tech in Computer Science</strong>
          <p className="text-[#ADB7BE] text-sm">JNEC, Aurangabad, India</p>
          <p className="text-secondary-500 text-sm">Jun 2020 - Jul 2024</p>
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <div className="space-y-3">
        {["Microsoft Azure DP-900", "Microsoft Azure AI-900", "Google Cloud Arcade Badge"].map((cert, idx) => (
          <div key={idx} className="bg-[#181818] p-3 rounded-lg border border-[#33353F] flex items-center">
            <span className="text-primary-500 mr-3">✓</span>
            <span className="text-[#ADB7BE]">{cert}</span>
          </div>
        ))}
      </div>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("education");

  return (
    <section className="text-white py-8 px-4 sm:py-16 xl:px-16" id="about">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center text-4xl font-bold text-white mb-12"
        >
          Education & Certifications
        </motion.h2>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          {TAB_DATA.map((item) => (
            <TabButton
              key={item.id}
              selectTab={() => setTab(item.id)}
              active={tab === item.id}
            >
              {item.title}
            </TabButton>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-[#121212] rounded-lg p-8 border border-[#33353F]"
        >
          {TAB_DATA.find((t) => t.id === tab).content}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
