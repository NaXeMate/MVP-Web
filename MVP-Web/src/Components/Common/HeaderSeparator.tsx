// src/Components/Common/HeaderSeparator.tsx
import React from "react";

interface HeaderSeparatorProps {
  width?: number;
  height?: number;
  className?: string;
  fill?: string;
}

const HeaderSeparator: React.FC<HeaderSeparatorProps> = ({
  width = 24,
  height = 24,
  className,
  fill = "#D4AF37",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M200 50 C200 50, 250 150, 350 200 C250 250, 200 350, 200 350 C200 350, 150 250, 50 200 C150 150, 200 50, 200 50 Z"
        fill={fill}
        stroke="none"
      />
    </svg>
  );
};

export default HeaderSeparator;