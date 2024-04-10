import React from "react";

const Button = (props) => {
  return (
    <div>
      <button className="px-6 py-1 border-2 border-white text-backgroundcolor bg-[#1A1A1A] hover:text-[#A0A0A0] transistion-all rounded-full">
        {props.title}
      </button>
    </div>
  );
};

export default Button;