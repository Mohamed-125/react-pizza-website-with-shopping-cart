import React from "react";

const Button = ({ text, styles, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${styles} bg-black button text-white py-2.5   rounded-md xs:w-full w-[220px] `}
    >
      {text}
    </button>
  );
};

export default Button;
