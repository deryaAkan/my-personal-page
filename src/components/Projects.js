import React from "react";
import "../App.css";
import projectsIMG1 from "../assests/Alternative-1/Rectangle 41-1.svg";
import projectsIMG2 from "../assests/Alternative-1/Rectangle 41.svg";
import classNames from "classnames";

export default function Projects({ data, theme }) {
  const projectsData = [
    {
      imgSrc: projectsIMG2,
      title: data.project1,
      description: data.project1_description,
      buttons: ["react", "redux", "vercel"],
      links: [data.viewSite, "Github"],
    },
    {
      imgSrc: projectsIMG1,
      title: data.project2,
      description: data.project2_description,
      buttons: ["react", "redux", "vercel"],
      links: [data.viewSite, "Github"],
    },
  ];

  return (
    <section className="CommonThings flex-col bg-[#ffffff] gap-8 dark:bg-[#1B1525]">
      <h2 className="text-[48px] text-[#4731D3] font-bold justify-start w-2/3 dark:text-[#CBF281]">
        {data.heading}
      </h2>
      {projectsData.map((project, index) => (
        <div
          key={index}
          className={classNames(
            "w-2/3 rounded-xl flex flex-wrap gap-12 sm:w-full sm:rounded-lg",
            {
              "light-gradient": theme === "light",
              "dark-gradient": theme === "dark",
            }
          )}
        >
          <div className="flex flex-col gap-5 w-3/4 justify-center px-5">
            <h3 className="font-bold text-[32px] text-[#383838] dark:text-[#C1BAED]">
              {project.title}
            </h3>
            <p className="text-[16px] text-[#383838] dark:text-white">
              {project.description}
            </p>
            <div className="flex gap-2">
              {project.buttons.map((button, btnIndex) => (
                <button
                  key={btnIndex}
                  className="rounded-full bg-[#4731D3] w-16 h-7 text-[14px] dark:bg-[#8173DA]"
                >
                  {button}
                </button>
              ))}
            </div>
            <div className="flex gap-5 text-[16px] underline">
              {project.links.map((link, linkIndex) => (
                <a
                  href="https://www.google.com/"
                  key={linkIndex}
                  className="text-[#383838] dark:text-[#CBF281]"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
