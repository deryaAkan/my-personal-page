import React from "react";
import "../App.css";
import headerImg from "../assests/Alternative-1/foto.png";
import githubSvg from "../assests/Alternative-1/svg-img/brand/github.svg";
import ToggleThemeButton from "./ToggleThemeButton";
import LanguageOption from "./LanguageOption";

const Header = ({ theme, onToggle }) => {
  return (
    <header className={`Header CommonThings ${theme === 'dark' ? 'darkHeader' : ''}`}>
      <div className="w-2/3 flex flex-col gap-5">
        <div className="flex gap-5 justify-end text-[15px] font-bold flex-wrap">
          <LanguageOption />
          <ToggleThemeButton theme={theme} onToggle={onToggle}/>
        </div>
        <div className="flex flex-wrap">
          <div className="flex flex-col gap-5 w-1/2 grow">
            <h1 className="text-[#CBF281] text-[54px] font-bold">
              I am a Frontend Developer..
            </h1>
            <p className="text-[24px] font-normal">
              ...who likes to craft solid and scalable frontend products with
              great user experiences.
            </p>
            <div className="flex gap-5">
              <button className="flex rounded-md bg-white items-center font-small text-[#4731D3] dark:bg-[#252128] dark:text-white">
                <img src={githubSvg} alt="GitHub" className="w-5 h-5 m-2" />{" "}
                <p>GitHub</p>
              </button>
              <button className="rounded-md bg-white font-small text-[#4731D3] dark:bg-[#252128] dark:text-white">
                LinkedIn
              </button>
            </div>
          </div>
          <img src={headerImg} alt="Header" className="grow-0" />
        </div>
      </div>
    </header>
  );
};

export default Header;
