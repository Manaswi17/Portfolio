"use client";
import React from "react";
import { motion } from "framer-motion";

const experienceData = [
  {
    title: "Research Assistant",
    company: "Worcester Polytechnic Institute",
    location: "Worcester, MA",
    duration: "Jan 2026 – Present",
    description: [
      "Developing an interactive GIS visualization dashboard using React and Python to render high-density transit data for urban mobility redesigns.",
      "Implementing geospatial data processing and graph-based optimization algorithms to simulate real-time route efficiency for city planning stakeholders.",
      "Collaborating with cross-functional research teams to translate theoretical transit models into scalable, web-based tools for city planning."
    ],
    technologies: ["GIS", "D3.js", "Graph-based Optimization", "Leaflet.js"]
  },
  {
    title: "Full Stack Developer",
    company: "Gridify",
    location: "Boston, MA",
    duration: "Sept 2025 – Dec 2025",
    description: [
      "Spearheaded the complete transition from DocuSign to BoldSign by conducting vendor analysis, prototyping solutions, and leading contract negotiations.",
      "Accelerated developer onboarding by engineering a one-command local stack (Bun + Docker + Supabase) with automated database seeding.",
      "Established robust QA processes by integrating Playwright for automated E2E testing, significantly reducing production bugs."
    ],
    technologies: ["React", "Supabase", "Docker", "Bun", "Playwright", "Stripe"]
  },
  {
    title: "Machine Learning Engineer",
    company: "NuVant Systems (A3 Global)",
    location: "Boston, MA",
    duration: "May 2025 – Aug 2025",
    description: [
      "Engineered an ML pipeline that reduced battery analysis time from 3 hours to 2 minutes (99% efficiency gain).",
      "Developed a real-time hardware monitoring suite using Electron, React, and FastAPI, integrating NI-VISA protocols."
    ],
    technologies: ["Electron", "FastAPI", "Python", "NI-VISA", "LabVIEW", "React"]
  },
  {
    title: "Full Stack Developer",
    company: "Atlas Copco Group",
    location: "Pune, India",
    duration: "Jan 2024 – June 2024",
    description: [
      "Developed real-time manufacturing dashboards using React and Plotly.js, enabling operators to identify bottlenecks immediately.",
      "Architected REST APIs backed by a Spark-based ETL pipeline, reducing data storage costs by 30% via Parquet optimization."
    ],
    technologies: ["React", "Flask", "Spark", "Parquet", "Docker", "Jenkins"]
  },
  {
    title: "Research Development Software Engineer",
    company: "Applied Technology Solutions (ApTSi)",
    location: "Massachusetts (Remote)",
    duration: "Jan 2022 – Dec 2023",
    description: [
      "Rapidly transitioned from frontend basics to full-stack implementation, developing complete web applications using Angular and Node.js.",
      "Modernized legacy data flow systems to reduce user interaction time by 5 seconds per task using optimized API calls.",
      "Engineered transaction processing logic and implemented database optimizations, driving a 20% increase in system efficiency."
    ],
    technologies: ["Angular", "Node.js", "Axios", "UI/UX", "API Design"]
  }
];

const ExperienceSection = () => {
  return (
    <section className="text-white py-8 px-4 sm:py-16 xl:px-16" id="experience">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center text-4xl font-bold text-white mb-12"
        >
          Professional Experience
        </motion.h2>
        
        <div className="space-y-8">
          {experienceData.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-[#181818] rounded-lg p-6 border border-[#33353F] hover:border-primary-500 transition-colors duration-300"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{experience.title}</h3>
                  <p className="text-primary-400 font-semibold">{experience.company}</p>
                  <p className="text-[#ADB7BE] text-sm">{experience.location}</p>
                </div>
                <span className="text-secondary-500 font-medium mt-2 md:mt-0">{experience.duration}</span>
              </div>
              
              <ul className="text-[#ADB7BE] mb-4 leading-relaxed space-y-2">
                {experience.description.map((point, pointIndex) => (
                  <li key={pointIndex} className="flex items-start">
                    <span className="text-primary-500 mr-2 mt-1">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;