import React from "react";

function Button({ children, variant, disabled, onClick }) {
  return (
    <button 
    className={`button button--${variant}`}
    onClick={onClick} 
    disabled={disabled}
    >
      {children}
    </button>
  );
}
export default Button;
