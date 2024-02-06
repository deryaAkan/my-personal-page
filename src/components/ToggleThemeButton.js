import React from 'react';
import '../App.css';

const ToggleThemeButton = ({ onToggle, checked }) => {
  return (
    <div className="flex items-center gap-2" onClick={onToggle}>
      <label className="switch">
        <input type="checkbox" checked={checked} onChange={() => {}} />
        <span className={`slider round ${checked ? 'moon' : ''}`}></span>
      </label>
      <p className="text-[15px] font-bold text-[#4731D3]">
        {checked ? 'DARK MODE' : 'LIGHT MODE'}
      </p>
    </div>
  );
};

export default ToggleThemeButton;
