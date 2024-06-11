import React from "react";
import "../App.css";
import headerImg from "../assests/Alternative-1/foto.png";
import classNames from "classnames";

export default function Profile({ data, theme }) {
  return (
    <main
      className={classNames("CommonThings", "flex-col", "gap-8", {
        "light-gradient": theme === "light",
        "dark-gradient": theme === "dark",
      })}
    >
      <h2 className="text-[48px] text-[#3C2E69] font-bold justify-start w-2/3 sm:w-full">
        {data.heading}
      </h2>
      <div className="flex w-full justify-center gap-8 text-[18px] sm:w-full">
        <div className="flex flex-wrap gap-5 items-start sm:justify-start">
          <div className="flex flex-col w-[200px] h-[400px] pl-4 justify-between">
            <h3>{data.basic_info}</h3>
            <p className="py-2">{data.name}</p>
            <p className="py-2">{data.residence}</p>
            <p className="">{data.education}</p>
            <p className="py-2">{data.role}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-5">
            <img
              src={headerImg}
              alt="Profile"
              className="w-[400px] h-[400px]"
            />
          </div>
          <div className="flex flex-col gap-8 w-[300px] grow-0 ">
            <p className="text-[30px] font-normal">{data.about_me}</p>
            <p>{data.about_me_more}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
