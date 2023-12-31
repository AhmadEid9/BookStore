import React from "react";
import "./style.css";

const Input = ({ onChange, label, placeholder=label, type = "text" }) => {
  return (
    <div className="container">
      <label>{label}: </label>
      <input
        className="roundedMedium"
        type={type}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;