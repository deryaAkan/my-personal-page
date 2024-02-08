import React from "react";
import ToggleThemeButton from "./ToggleThemeButton";
import {LanguageSelector} from "./ LanguageSelector";
import "../App.css";
import headerImg from "../assests/Alternative-1/foto.png";
import githubSvg from "../assests/Alternative-1/svg-img/brand/github.svg";
import linkedInSvg from "../assests/Alternative-1/svg-img/brand/LinkedIn.svg";
import darkGithubSvg from "../assests/Alternative-1/svg-img/brand/githubdgithub.svg";
import darkLinkedInSvg from "../assests/Alternative-1/svg-img/brand/LinkedIndarklinkedn.svg";


  const Header = ({ theme, onToggleTheme, toggleLanguage, language, data }) => {

  return (
    <header className={`Header CommonThings ${theme === 'dark' ? 'darkHeader' : ''}`}>
      <div className="w-2/3 flex flex-col gap-5">
        <div className="flex gap-5 justify-end text-[15px] font-bold flex-wrap">
          <LanguageSelector  language={language} toggleLanguage={toggleLanguage} />
          <ToggleThemeButton theme={theme} onToggle={onToggleTheme}/>
        </div>
        <div className="flex flex-wrap gap-5">
          <div className="flex flex-col gap-5 w-1/2 grow">
            <h1 className="text-[#CBF281] text-[54px] font-bold">
           {data.heading}
            </h1>
            <p className="text-[24px] font-normal">
            {data.description}
            </p>
            <div className="flex gap-5">
              <a href="https://github.com/deryaAkan" target="_blank">
              <button className="flex rounded-md bg-white items-center font-small text-[#4731D3] dark:bg-[#252128] dark:text-white dark:border-white border p-2">
                <img src={theme === "light" ? githubSvg : darkGithubSvg} alt="GitHub" className="w-5 h-5 m-2"  />{" "}
                <p>GitHub</p>
              </button>
              </a>
              <a href="https://www.linkedin.com/in/derya-akan-b03075292/" target="_blank">
              <button className="flex rounded-md bg-white items-center font-small text-[#4731D3] dark:bg-[#252128] dark:text-white dark:border-white border p-2">
                <img src={theme === "light" ? linkedInSvg : darkLinkedInSvg} alt="linkedin" className="w-5 h-5 m-2" />LinkedIn
              </button>
              </a>
            </div>
          </div>
          <img src={headerImg} alt="HeaderIMG" className="grow-0" />
        </div>
      </div>
    </header>
  );
};

export default Header;
