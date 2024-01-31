import React from 'react';
import "../App.css";
import jsLogo from "../assests/Alternative-1/Skills-icons/js-logo 1.png";
import nodeLogo from "../assests/Alternative-1/Skills-icons/node-logo 1.png";
import reactLogo from "../assests/Alternative-1/Skills-icons/Rectangle 35.png";
import vscodeLogo from "../assests/Alternative-1/Skills-icons/Group 101-1.png";
import figmaLogo from "../assests/Alternative-1/Skills-icons/figma-logo 1.png";
import reduxLogo from "../assests/Alternative-1/Skills-icons/Group 101.png";

const skillsData = [
  { logo: jsLogo, name: "JAVASCRIPT" },
  { logo: nodeLogo, name: "NODE" },
  { logo: reactLogo, name: "REACT" },
  { logo: vscodeLogo, name: "VS CODE" },
  { logo: reduxLogo, name: "REDUX" },
  { logo: figmaLogo, name: "FIGMA" },
];

export default function Skills() {
  return (
    <section className="Skills">
      <div className="w-3/5 flex gap-40 pt-12 pb-12">
        <div className="text-[#4832D3] text-[48px] font-bold">Skills</div>
        <div className="flex flex-wrap gap-10 justify-between">
          {skillsData.map((skill, index) => (
            <div key={index} className="flex gap-5">
              <img src={skill.logo} alt={skill.name} />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
