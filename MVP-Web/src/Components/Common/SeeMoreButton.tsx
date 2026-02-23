import React from "react";

interface SeeMoreButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export const SeeMoreButton: React.FC<SeeMoreButtonProps> = ({
  children = "VER MÁS",
  className = "",
  ...props
}) => {
  return (
    <button
      className={`text-sm font-bold transition-all duration-300 hover:shadow-md hover:-translate-y-1 active:translate-y-0 active:shadow-sm cursor-pointer ${className}`}
      style={{
        backgroundColor: "var(--accent-golden-pale)",
        color: "var(--body-text)",
        fontFamily: "var(--ui-elements-text)",
        border: "2px solid var(--accent-golden-decor)",
        borderRadius: "8px",
        letterSpacing: "0.05em",
        padding: "0.5rem 1.5rem",
      }}
      {...props}
    >
      {children}
    </button>
  );
};
