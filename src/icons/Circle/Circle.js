import React from 'react';

const Circle = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200" fill="none" {...props}>
    <circle cx="100" cy="100" r="99" fill="#D9D9D9" stroke="url(#paint0_linear_623_1469)" stroke-width="2"/>
    <defs>
      <linearGradient id="paint0_linear_623_1469" x1="100" y1="0" x2="100" y2="200" gradientUnits="userSpaceOnUse">
        <stop stop-color="#C63EC7" stop-opacity="0.68"/>
        <stop offset="1" stop-color="#FFBF53" stop-opacity="0.69"/>
      </linearGradient>
    </defs>
  </svg>
);

export default Circle;