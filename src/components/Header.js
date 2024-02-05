import React from "react";
import "../App.css";
import headerImg from "../assests/Alternative-1/foto.png";
import githubSvg from "../assests/Alternative-1/svg-img/brand/github.svg";

const Header = () => {
  return (
    <header className="Header CommonThings">
      <div className="w-3/5 flex flex-col gap-5">
        <div className="flex gap-5 justify-end text-[15px] font-bold">
          <button>
            <span className="text-[#CBF281]">TÜRKÇE'</span>YE GEÇ
          </button>
          <div className="flex items-center">
          <label className="switch">
            <input type="checkbox" defaultChecked />
            <span className="slider round bg-[]"></span>
          </label>
          <p className="text-[15px] font-bold text-[#4731D3]">DARK MODE</p>
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col gap-5">
            <h1 className="text-[#CBF281] text-[54px] font-bold">
              I am a Frontend Developer..
            </h1>
            <p className="text-[24px] font-normal">
              ...who likes to craft solid and scalable frontend products with
              great user experiences.
            </p>
            <div className="flex gap-5">
              <button className="flex rounded-md bg-white items-center font-small text-[#4731D3]">
                <img src={githubSvg} alt="GitHub" className="w-5 h-5 m-2" />{" "}
                <p>GitHub</p>
              </button>
              <button className="rounded-md bg-white font-small text-[#4731D3]">
                LinkedIn
              </button>
            </div>
          </div>
          <img src={headerImg} alt="Header" className="w-1/3" />
        </div>
      </div>
    </header>
  );
};

export default Header;
