// "use client";
// import React, { useTransition, useState } from "react";
// import Image from "next/image";
// import TabButton from "./TabButton";

// const TAB_DATA = [
//   {
//     title: "Experience",
//     id: "experience",
//     content: (
//       <ul className="list-disc pl-2">
//         {
//     title: "Full Stack Developer – Atlas Copco Group, Pune, India",
//     duration: "Jan 2024 – Jun 2024",
//     description: "Developed a responsive data-driven UI with React and Flask, optimizing performance by 25%."
//   },
//   {
//     title: "Research Intern – ApTSi, MA, USA",
//     duration: "Jan 2023 – Dec 2023",
//     description: "Engineered Angular-based UIs and integrated advanced data handling techniques for optimized performance."
//   },
//       </ul>
//     ),
//   },
//   {
//     title: "Education",
//     id: "education",
//     content: (
//       <ul className="list-disc pl-2">
//         <li>Microsoft Azure DP-900</li>
//         <li>Microsoft Azure AI-900</li>
//         <li>Google Cloud Arcade Badge</li>

//       </ul>
//     ),
//   },
//   {
//     title: "Certifications",
//     id: "certifications",
//     content: (
//       <ul className="list-disc pl-2">
//         <li>AWS Cloud Practitioner</li>
//         <li>Google Professional Cloud Developer</li>
//       </ul>
//     ),
//   },
// ];

// const AboutSection = () => {
//   const [tab, setTab] = useState("experience");
//   const [isPending, startTransition] = useTransition();

//   const handleTabChange = (id) => {
//     startTransition(() => {
//       setTab(id);
//     });
//   };

//   return (
//     <section className="text-white" id="about">
//       <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
//         <Image src="/images/about-image.png" width={500} height={500} />
//         <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
//           <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
//           <p className="text-base lg:text-lg">
//             As a Computer Science graduate student, I specialize in full-stack
//             development and machine learning. I’ve designed and built dynamic
//             web applications and APIs that seamlessly integrate cutting-edge
//             technologies to enhance user experiences. Whether it’s crafting a
//             responsive UI or implementing robust backend systems, my work is
//             grounded in detail-oriented execution and a drive to solve
//             real-world problems. I’m eager to apply my expertise to projects
//             that push boundaries and make a difference.
//           </p>
//           <div className="flex flex-row justify-start mt-8">
//             <TabButton
//               selectTab={() => handleTabChange("experience")}
//               active={tab === "experience"}
//             >
//               {" "}
//               Experience{" "}
//             </TabButton>
//             <TabButton
//               selectTab={() => handleTabChange("education")}
//               active={tab === "education"}
//             >
//               {" "}
//               Education{" "}
//             </TabButton>
//             <TabButton
//               selectTab={() => handleTabChange("certifications")}
//               active={tab === "certifications"}
//             >
//               {" "}
//               Certifications{" "}
//             </TabButton>
//           </div>
//           <div className="mt-8">
//             {TAB_DATA.find((t) => t.id === tab).content}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;
"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

// Experience data moved into a list
const experienceList = [
  {
    title: "Full Stack Developer – Atlas Copco Group, Pune, India",
    duration: "Jan 2024 – Jun 2024",
    description: "Developed a responsive React UI with Plotly.js, integrated Flask APIs, optimized storage using Parquet, implemented CORS, embedded Jupyter Notebooks, and managed state with Redux.",
  },
  {
    title: "Research Intern – ApTSi, MA, USA",
    duration: "Jan 2023 – Dec 2023",
    description: "Engineered Angular UIs, optimized API handling with NodeJS and Axios, designed dashboards in Figma, and conducted research on transaction strategies and performance testing.",
  },
];

const TAB_DATA = [
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        {experienceList.map((experience, index) => (
          <li key={index} className="mb-4">
            <strong>{experience.title}</strong> ({experience.duration})<br />
            {/* {experience.description} */}
          </li>
        ))}
      </ul>
    ),
  },
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
        Jun 2020 - Jul 2024 | GPA: 3.57/4.00
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
  const [tab, setTab] = useState("experience");
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
            As a Computer Science graduate student, I specialize in full-stack development and machine learning.
            I’ve designed and built dynamic web applications and APIs that seamlessly integrate cutting-edge
            technologies to enhance user experiences. Whether it’s crafting a responsive UI or implementing robust 
            backend systems, my work is grounded in detail-oriented execution and a drive to solve real-world problems. 
            I’m eager to apply my expertise to projects that push boundaries and make a difference.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              Experience
            </TabButton>
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
