import React, { useMemo } from "react";
import classNames from "classnames";
import ToggleThemeButton from "./ToggleThemeButton";
import LanguageSelector from "./ LanguageSelector";
import "../App.css";
import githubSvg from "../assests/Alternative-1/svg-img/brand/github.svg";
import headerImg from "../assests/Alternative-1/foto.png";
import linkedInSvg from "../assests/Alternative-1/svg-img/brand/LinkedIn.svg";
import darkGithubSvg from "../assests/Alternative-1/svg-img/brand/githubdgithub.svg";
import darkLinkedInSvg from "../assests/Alternative-1/svg-img/brand/LinkedIndarklinkedn.svg";

const Header = ({ theme, onToggleTheme, toggleLanguage, language, data }) => {
  const githubIcon = useMemo(
    () => (theme === "light" ? githubSvg : darkGithubSvg),
    [theme]
  );
  const linkedInIcon = useMemo(
    () => (theme === "light" ? linkedInSvg : darkLinkedInSvg),
    [theme]
  );

  return (
    <header
      className={classNames("CommonThings", {
        "light-gradient": theme === "light",
        "dark-gradient": theme === "dark",
      })}
    >
      <div className="w-2/3 flex flex-col gap-5">
        <div className="flex gap-5 justify-end text-[15px] font-bold flex-wrap">
          <LanguageSelector
            language={language}
            toggleLanguage={toggleLanguage}
          />
          <ToggleThemeButton theme={theme} onToggle={onToggleTheme} />
        </div>
        <div className="flex flex-wrap gap-5">
          <div className="flex flex-col gap-5 w-1/2 grow">
            <h1 className="text-[#591C47] text-[54px] font-bold">
              {data.heading}
            </h1>
            <p className="text-[24px] font-normal">{data.description}</p>
            <div className="flex gap-5">
              <a href="https://github.com/deryaAkan" target="_blank">
                <button
                  className="flex rounded-md bg-white items-center font-small text-[#4731D3] dark:bg-[#252128] dark:text-white dark:border-white border p-2"
                  aria-label="GitHub"
                >
                  <img src={githubIcon} alt="GitHub" className="w-5 h-5 m-2" />{" "}
                  <p>GitHub</p>
                </button>
              </a>
              <a href="https://www.linkedin.com/in/deryaAkan" target="_blank">
                <button
                  className="flex rounded-md bg-white items-center font-small text-[#4731D3] dark:bg-[#252128] dark:text-white dark:border-white border p-2"
                  aria-label="LinkedIn"
                >
                  <img
                    src={linkedInIcon}
                    alt="LinkedIn"
                    className="w-5 h-5 m-2"
                  />
                  LinkedIn
                </button>
              </a>
            </div>
          </div>
          <img src={headerImg} alt="Header" className="grow-0" />
        </div>
      </div>
    </header>
  );
};

export default Header;
