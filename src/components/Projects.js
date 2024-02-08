import React from 'react';
import "../App.css";
import projectsIMG1 from "../assests/Alternative-1/Rectangle 41-1.svg";
import projectsIMG2 from "../assests/Alternative-1/Rectangle 41.svg";



export default function Projects({data}) {
  const projectsData = [
    {
      imgSrc: projectsIMG2,
      title: data.project1 ,
      description: data.project1_description,
      buttons: ["react", "redux", "vercel"],
      links: [data.viewSite, "Github"]
    },
    {
      imgSrc: projectsIMG1,
      title: data.project2 ,
      description: data.project2_description,
      buttons: ["react", "redux", "vercel"],
      links: [data.viewSite, "Github"]
    }
  ];

  return (
    <section className="CommonThings flex-col bg-[#CBF281] gap-8 dark:bg-[#1A210B]">
      <h2 className="text-[48px] text-[#4731D3] font-bold justify-start w-2/3 dark:text-[#CBF281]">
        {data.heading}
      </h2>

      {projectsData.map((project, index) => (
        <div key={index} className="w-2/3 bg-[#fff] rounded-xl flex flex-wrap gap-8 dark:bg-[#2B2727]">
          <img src={project.imgSrc} alt={`Project ${index + 1}`} />
         
          <div className="flex flex-col gap-5 w-80 justify-center">
            <h3 className="font-bold text-[32px] text-[#4731D3] dark:text-[#C1BAED]">{project.title}</h3>
            <p className="text-[16px] text-[#383838] dark:text-white">{project.description}</p>
            <div className="flex gap-2">
              {project.buttons.map((button, btnIndex) => (
                <button key={btnIndex} className="rounded-full bg-[#4731D3] w-16 h-7 text-[14px] dark:bg-[#8173DA]">{button}</button>
              ))}
            </div>
            <div className="flex gap-5 text-[16px] underline">
              {project.links.map((link, linkIndex) => (
                <a href='https://www.google.com/' key={linkIndex} className="text-[#383838] dark:text-[#CBF281]">{link}</a>
              ))}
            </div>
          </div>
    
        </div>
      ))}
    </section>
  );
}
