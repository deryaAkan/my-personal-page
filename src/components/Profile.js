import React from "react";
import "../App.css";
import headerImg from "../assests/Alternative-1/foto.png";
import classNames from "classnames";

export default function Profile({ data, theme }) {
  const basicInformationData = [
    { label: data.birth_date, value: "Derya Akan" },
    { label: data.residence, value: "Batman" },
    { label: data.education, value: "Boğaziçi Üniversitesi, Fizik, 2022" },
    { label: data.role, value: "Fullstack Geliştirici" },
  ];

  const aboutMeData = [
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
    "Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam",
  ];

  return (
    <main
      className={classNames("CommonThings", "flex-col", "gap-8", {
        "light-gradient": theme === "light",
        "dark-gradient": theme === "dark",
      })}
    >
      <h2 className="text-[48px] text-[#CBF281] font-bold justify-start w-2/3">
        {data.heading}
      </h2>
      <div className="flex w-2/3 gap-8">
        <div className="flex gap-10 flex-wrap">
          <div className="flex flex-col gap-8 grow-0 w-[200px]">
            <p className="text-[30px] font-normal">{data.heading}</p>
            {basicInformationData.map((item, index) => (
              <p key={index} className="text-[16px]">
                <span className="text-[#CBF281] font-semibold">
                  {item.label} :
                </span>{" "}
                {item.value}
              </p>
            ))}
          </div>
          <img
            src={headerImg}
            alt="Profile"
            className="grow-0 w-[300px] h-[300px]"
          />
          <div className="flex flex-col gap-8 w-[300px] grow-0 ">
            <p className="text-[30px] font-normal">{data.about_me}</p>
            {aboutMeData.map((item, index) => (
              <p key={index} className="text-[16px]">
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
