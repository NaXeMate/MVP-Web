import React from "react";

interface BackButtonProps {
  onClick?: () => void;
  size?: number;
  className?: string;
  fillCircle?: string;
  fillArrow?: string;
}

const BackButton: React.FC<BackButtonProps> = ({
  onClick,
  size = 64,
  className,
  fillCircle = "#E8D5A8",
  fillArrow = "#1D1B20",
}) => {
  return (
    <button onClick={onClick} className={className} aria-label="Volver">
      <svg
        width={size}
        height={size}
        viewBox="0 0 73 73"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Círculo de fondo con sombra */}
        <defs>
          <filter
            id="shadow"
            x="0"
            y="0"
            width="72.1667"
            height="72.1667"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
        </defs>

        <g filter="url(#shadow)">
          <circle
            cx="36.0833"
            cy="32.0833"
            r="32.0833"
            fill={fillCircle}
            stroke="black"
            strokeWidth="0.5"
          />
        </g>

        {/* Flecha centrada sobre el círculo */}
        <g transform="translate(25.5, 14.5)">
          <path
            d="M17.5 35L0 17.5L17.5 0L21.5833 4.08333L8.16667 17.5L21.5833 30.9167L17.5 35Z"
            fill={fillArrow}
          />
        </g>
      </svg>
    </button>
  );
};

export default BackButton;