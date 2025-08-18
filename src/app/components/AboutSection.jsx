"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
        <strong>M.S. in Computer Science</strong>, Worcester Polytechnic Institute (WPI), USA
        <br />
        Aug 2024 - Aug 2026
      </li>
      <li>
        <strong>B.Tech in Computer Science</strong>, JNEC, Aurangabad, India
        <br />
        Jun 2020 - Jul 2024
      </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Microsoft Azure DP-900</li>
        <li>Microsoft Azure AI-900</li>
        <li>Google Cloud Arcade Badge</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("education");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} alt="About Image" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I&apos;m a versatile engineer who thrives at the intersection of data, systems, and intelligence. My passion lies in designing robust data pipelines that feed into full-stack applications, then supercharging them with AI - whether it&apos;s optimizing ETL workflows, architecting scalable backend services, or embedding machine learning models into production systems. With hands-on experience across the entire development lifecycle, I bridge the gap between raw data and intelligent user experiences. Currently pursuing my Master&apos;s at WPI, I&apos;m constantly exploring how to make systems more efficient, adaptive, and impactful through thoughtful engineering.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
