"use client";
import React from "react";
import { motion } from "framer-motion";

const experienceData = [
  {
    title: "Backend Developer",
    company: "SyncQues (Pre-Launch Startup)",
    location: "Remote",
    duration: "June 2025 – Present",
    description: [
      "Scalable Real-Time Architecture: Engineered a high-performance backend supporting 10K+ concurrent users with sub-100ms latency, leveraging GraphQL and Redis for seamless real-time interactions.",
      "AI-Powered Automation: Developed an intelligent answer engine using LLMs and asynchronous task processing, handling 500+ requests/minute while maintaining accuracy and speed."
    ],
    technologies: ["GraphQL", "Redis", "LLMs", "MongoDB", "AWS", "Celery"]
  },
  {
    title: "Machine Learning Engineer",
    company: "NuVant Systems (A3 Global)",
    location: "Boston, MA",
    duration: "May 2025 – Present",
    description: [
      "Full-Stack Battery Diagnostics: Built an Electron-based platform integrating real-time hardware control (NI-VISA) with ML-driven battery analysis, reducing test cycles from hours to minutes.",
      "Adaptive Testing Framework: Designed a modular system that auto-configures for 15+ battery types, eliminating manual setup and accelerating R&D validation."
    ],
    technologies: ["Electron", "NI-VISA", "Machine Learning", "Battery Management", "LabView", "Data Acquisition"]
  },
  {
    title: "Full Stack Developer",
    company: "Atlas Copco",
    location: "Pune, India",
    duration: "Jan 2024 – June 2024",
    description: [
      "Real-Time Manufacturing Insights: Created interactive dashboards (React + Plotly.js) to visualize sensor data, improving equipment monitoring and reducing downtime by 20%.",
      "Optimized Data Processing: Streamlined ETL pipelines using Spark and Parquet, cutting storage costs by 30% while enhancing processing efficiency."
    ],
    technologies: ["React", "Plotly.js", "Spark", "Parquet", "ETL", "Redux"]
  },
  {
    title: "Research Intern",
    company: "Applied Technology Solutions",
    location: "Massachusetts",
    duration: "Jan 2023 – Dec 2023",
    description: [
      "Data Flow Optimization: Redesigned transaction workflows to reduce latency by 5 seconds per task, enhancing system responsiveness for end-users.",
      "UI-Driven Efficiency: Implemented Angular/Node.js improvements that boosted user engagement by 15% through intuitive data navigation."
    ],
    technologies: ["Angular", "Node.js", "Workflow Optimization", "UI/UX", "API Design"]
  }
]

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