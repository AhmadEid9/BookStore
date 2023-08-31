import React from "react";
import "./style.css";

const Button = ({ text, onClick, enabled = true }) => {
  const clickHandler = () => {
    if (enabled) {
      onClick();
    }
  };

  return (
    <button
      className='button'
      onClick={() => clickHandler()}
    >
      {text}
    </button>
  );
};

export default Button;