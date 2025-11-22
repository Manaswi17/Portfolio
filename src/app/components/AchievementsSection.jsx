// "use client";
// import React from "react";
// import dynamic from "next/dynamic";

// const AnimatedNumbers = dynamic(
//   () => {
//     return import("react-animated-numbers");
//   },
//   { ssr: false }
// );

// const achievementsList = [
//   {
//     metric: "Languages",
//     value: "100",
//     postfix: "+",
//   },
//   {
//     prefix: "~",
//     metric: "Framework/Libraries",
//     value: "100,000",
//   },
//   {
//     metric: "Tools",
//     value: "7",
//   },
//   {
//     metric: "Databases",
//     value: "5",
//   },
// ];

// const AchievementsSection = () => {
//   return (
//     <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
//       <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
//         {achievementsList.map((achievement, index) => {
//           return (
//             <div
//               key={index}
//               className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
//             >
//               <h2 className="text-white text-4xl font-bold flex flex-row">
//                 {achievement.prefix}
//                 <AnimatedNumbers
//                   includeComma
//                   animateToNumber={parseInt(achievement.value)}
//                   locale="en-US"
//                   className="text-white text-4xl font-bold"
//                   configs={(_, index) => {
//                     return {
//                       mass: 1,
//                       friction: 100,
//                       tensions: 140 * (index + 1),
//                     };
//                   }}
//                 />
//                 {achievement.postfix}
//               </h2>
//               <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default AchievementsSection;
"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Transition } from '@headlessui/react';

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

// List of skills for each category
const skillData = {
  Languages: [
    "Python", 
    "Java", 
    "TypeScript", 
    "JavaScript", 
    "SQL"
  ],
  "Framework/Libraries": [
    "Next.js", 
    "React", 
    "Node.js", 
    "FastAPI", 
    "LangChain"
  ],
  Tools: [
    "AWS", 
    "Docker", 
    "Kubernetes", 
    "Playwright", 
    "Git"
  ],
  Databases: [
    "PostgreSQL", 
    "MongoDB", 
    "Supabase", 
    "Redis", 
    "GraphQL"
  ],
};
const achievementsList = [
  {
    metric: "Languages",
  },
  {
    metric: "Framework/Libraries",
  },
  {
    metric: "Tools",
  },
  {
    metric: "Databases",
  },
];

const AchievementsSection = () => {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

  // Cycles through the skills every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkillIndex((prevIndex) => (prevIndex + 1) % skillData.Languages.length);
    }, 2000); // Adjust the time as per requirement

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, []);

  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => {
          const skillList = skillData[achievement.metric];

          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            >
              <h2 className="text-white text-4xl font-bold flex flex-row animate-bounce">
                {skillList[currentSkillIndex]}
              </h2>
              <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;