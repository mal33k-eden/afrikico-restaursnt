import React from "react";
import { Link } from "react-router-dom";

export default function Button({ text, 
  to, 
  onClick, 
  type = "button", 
  className = "", 
  icon: Icon 
}) {
    const baseClass = "bg-gradient-to-r from-orange-400 to-[#AD571E] hover:from-[#AD571E] hover:to-[#AD571E] text-white font-semibold px-8 py-3 rounded-md cursor-pointer transition-all duration-300 transform hover:scale-105";
    const buttonContent = (
    <button 
      type={type} 
      onClick={onClick} 
      className={`${baseClass} ${className}`}
    >
      <div className="flex items-center space-x-2">
        <span>{text}</span>
        {Icon && <Icon className="w-5 h-5" />}
      </div>
    </button>
  );

  if (to) {
    return <Link to={to}>{buttonContent}</Link>;
  }

  return buttonContent;
}
