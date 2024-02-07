import React from 'react';
import '../App.css';

const ToggleThemeButton = ({ onToggle, checked, theme }) => {
  return (
    <div className="flex items-center gap-2">
      <label className="switch">
        <input type="checkbox" checked={checked} onChange={() => {}} />
        <span onClick={onToggle} className={`slider dark:bg-[#3A3A3A] round`}></span>
        {theme === 'dark' && <span onClick={onToggle} className="slider2 round"></span>}
      </label>
      <p className="text-[15px] font-bold text-[#4731D3] dark:text-[#D9D9D9]">
        {theme === "light" ? 'DARK MODE' : 'LIGHT MODE'}
      </p>
    </div>
  ); 
};

export default ToggleThemeButton;
