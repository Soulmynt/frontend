import React from "react";

function PasswordRules({ isMet }) {
  if (isMet) {
    return (
      // SVG for the checkmark
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12ZM5.57446 8.87812L9.88087 4.45795L9.88155 4.45864C9.95739 4.38079 10 4.2752 10 4.16511C10 4.05502 9.95739 3.94943 9.88155 3.87158C9.8057 3.79373 9.70283 3.75 9.59557 3.75C9.48831 3.75 9.38544 3.79373 9.3096 3.87158L5.28882 7.99788L3.6904 6.35724C3.65285 6.31869 3.60826 6.28812 3.55919 6.26725C3.51013 6.24639 3.45754 6.23566 3.40443 6.23566C3.35132 6.23566 3.29873 6.24639 3.24966 6.26725C3.20059 6.28812 3.15601 6.31869 3.11845 6.35724C3.0809 6.39579 3.05111 6.44155 3.03079 6.49191C3.01046 6.54227 3 6.59625 3 6.65077C3 6.70528 3.01046 6.75926 3.03079 6.80962C3.05111 6.85998 3.0809 6.90575 3.11845 6.94429L5.00251 8.87812C5.04002 8.91675 5.08459 8.9474 5.13366 8.96832C5.18273 8.98923 5.23535 9 5.28848 9C5.34162 9 5.39423 8.98923 5.44331 8.96832C5.49238 8.9474 5.53695 8.91675 5.57446 8.87812Z"
          fill="url(#paint0_linear_628_1798)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_628_1798"
            x1="-2.18437"
            y1="2.22115"
            x2="6.48873"
            y2="-1.51337"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C63EC7" stopOpacity="0.68" />
            <stop offset="1" stopColor="#FFBF53" stopOpacity="0.69" />
          </linearGradient>
        </defs>
      </svg>
    );
  } else {
    return (
      // SVG for the circle
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
      >
        <circle cx="6" cy="6" r="6" fill="#D9D9D9" />
      </svg>
    );
  }
}

export default PasswordRules;
