import React from "react";

/**
 
Bouton UI simple utilisant Tailwind classes.*/
export function Button({ children, onClick, className = "", ...props }) {
  return (
    <button
      onClick={onClick}
      className={
        "px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 " +
        className
      }
      {...props}
    >
      {children}
    </button>
  );
} 
