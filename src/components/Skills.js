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

export default function Skills({data}) {

  return (
    <section className="CommonThings bg-white text-[#777777] dark:bg-[#252128]">
      <div className="w-2/3 gap-20 flex pt-12 pb-12 flex-wrap">
        <div className="text-[#4832D3] text-[48px] font-bold dark:text-[#CBF281]">{data.heading}</div>
        <div className="flex flex-wrap gap-20 dark:text-white w-[660px] justify-end">
          {skillsData.map((skill, index) => (
            <div key={index} className="flex items-center w-72 gap-5">
              <img className="w-[120px]" src={skill.logo} alt={skill.name} />
              <p className='text-[24px]'>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
