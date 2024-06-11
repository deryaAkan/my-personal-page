import React from "react";

const LanguageSelector = ({ language, toggleLanguage }) => {
  return (
    <button onClick={toggleLanguage}>
      {language === "english" ? (
        <span>
          <span className="text-[#CBF281] dark:text-[#BAB2E7]">TÜRKÇE</span>'YE
          GEÇ
        </span>
      ) : (
        <span>
          TO <span className="text-[#CBF281] dark:text-[#BAB2E7]">ENGLISH</span>
        </span>
      )}
    </button>
  );
};

export default LanguageSelector;
