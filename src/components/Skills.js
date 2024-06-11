import React from "react";
import "../App.css";
import jsLogo from "../assests/Alternative-1/Skills-icons/js-logo 1.png";
import nodeLogo from "../assests/Alternative-1/Skills-icons/node-js-svgrepo-com.svg";
import reactLogo from "../assests/Alternative-1/Skills-icons/react-svgrepo-com.svg";
import vscodeLogo from "../assests/Alternative-1/Skills-icons/vs-code-svgrepo-com.svg";
import figmaLogo from "../assests/Alternative-1/Skills-icons/figma-logo 1.png";
import reduxLogo from "../assests/Alternative-1/Skills-icons/Group 101.png";
import javalogo from "../assests/Alternative-1/Skill-icons-2/java-svgrepo-com.svg";
import postgreLogo from "../assests/Alternative-1/Skill-icons-2/postgresql-svgrepo-com.svg";
import springboot from "../assests/Alternative-1/Skill-icons-2/spring-svgrepo-com.svg";
import intellij from "../assests/Alternative-1/Skill-icons-2/intellij-idea-svgrepo-com.svg";

export default function Skills({ data }) {
  const skillsData = [
    { logo: jsLogo, name: "JavaScript" },
    { logo: javalogo, name: "Java" },
    { logo: reactLogo, name: "React" },
    { logo: springboot, name: "Spring" },
    { logo: nodeLogo, name: "Node" },
    { logo: postgreLogo, name: "PostgreSQL" },
    { logo: vscodeLogo, name: "VS Code" },
    { logo: intellij, name: "IntelliJ IDEA" },
    { logo: reduxLogo, name: "Redux" },
    { logo: figmaLogo, name: "Figma" },
  ];

  return (
    <section className="CommonThings bg-white text-[#777777] dark:bg-[#1B1525]">
      <div className="w-2/3 gap-20 flex pt-12 pb-12 flex-wrap sm:w-full">
        <div className="text-[#591C47] text-[48px] font-bold dark:text-[#CBF281]">
          {data.heading}
        </div>
        <div className="flex flex-wrap gap-20 dark:text-white w-[660px] justify-end sm:w-full sm:justify-start">
          {skillsData.map((skill, index) => (
            <div key={index} className="flex items-center w-72 gap-5">
              <img className="w-[120px]" src={skill.logo} alt={skill.name} />
              <p className="text-[24px]">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
