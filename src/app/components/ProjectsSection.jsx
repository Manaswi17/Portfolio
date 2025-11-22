"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import basePath from "../utils/basePath";

const projectsData = [
  {
    id: 1,
    title: "SyncQues (Startup Prototype)",
    description:
      "Scalable Q&A platform backend architected for 10k+ users. Features an AI answer engine (Celery/Redis), GraphQL API, and role-based access control.",
    image: `${basePath}/images/projects/logo.jpg`,
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "BigDocBot",
    description:
      "Advanced code analysis tool using CodeBERT and AST parsing. Generates function-level summaries and complexity metrics for Python/JS codebases.",
    image: `${basePath}/images/projects/bigdocbot.png`,
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "VizBotz",
    description:
      "AI-driven visualization assistant. Converts datasets into Altair/Vega-Lite charts using LLM insights (OpenAI/Gemini) with RAG fallback.",
    image: `${basePath}/images/projects/vizbotz.png`,
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },

  // --- TIER 2: ARCHIVED / ADDITIONAL PROJECTS (HIDDEN BEHIND "VIEW MORE") ---
  {
    id: 4,
    title: "Performance Dashboard",
    description:
      "A dynamic dashboard providing real-time data analysis with key performance metrics, built using Power BI for visual insights.",
    image: `${basePath}/images/projects/dashboard.png`,
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Stadium Seat Booking",
    description:
      "Concurrency-focused booking system handling race conditions and simultaneous seat locking, ensuring data integrity during high-traffic events.",
    image: `${basePath}/images/projects/abey.jpg`, // Placeholder
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Grocery Store App",
    description:
      "A mobile application for grocery shopping with user authentication, product catalog, and order management features.",
    image: `${basePath}/images/projects/grocery.png`,
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "AI Chess Engine",
    description:
      "A chess engine using the Minimax algorithm with alpha-beta pruning for optimized move decisions, integrated with a web-based interface.",
    image: `${basePath}/images/projects/chess.jpg`,
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
    setShowAll(false); // Reset view when switching tabs
  };

  // 1. Filter projects based on the selected Tag
  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  // 2. Determine display logic:
  // Show only first 3 if we are in "All" tag AND showAll is false.
  // Otherwise, show everything.
  const displayProjects =
    tag === "All" && !showAll ? filteredProjects.slice(0, 3) : filteredProjects;

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>

      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {displayProjects.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>

      {/* VIEW MORE BUTTON */}
      {/* Shows only if tag is 'All', not expanded yet, and there are actually projects hidden */}
      {tag === "All" && !showAll && filteredProjects.length > 3 && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowAll(true)}
            className="px-8 py-3 rounded-full border-2 border-primary-500 text-white hover:bg-primary-500 hover:text-white transition-all duration-300"
          >
            View More
          </button>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
