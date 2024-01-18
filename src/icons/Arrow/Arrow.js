import React from 'react';

// const Arrow = ({color="#8F8F8F"}) => (
//     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 4 4" fill="none">
//     <path fill-rule="evenodd" clip-rule="evenodd" d="M1.09839 0.687247L3.09332 2.10339C3.21574 2.19029 3.21574 2.33119 3.09332 2.41809L1.09839 3.83424C0.975976 3.92114 0.777496 3.92114 0.655077 3.83424C0.532658 3.74734 0.532658 3.60644 0.655077 3.51954L2.42835 2.26074L0.655077 1.00195C0.532658 0.915044 0.532658 0.774148 0.655077 0.687247C0.777496 0.600345 0.975976 0.600345 1.09839 0.687247Z" fill={color}/>
//     </svg>
// );

// export default Arrow;

const Arrow = ({ color = "#8F8F8F", className = "" }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 4 4" fill="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M1.09839 0.687247L3.09332 2.10339C3.21574 2.19029 3.21574 2.33119 3.09332 2.41809L1.09839 3.83424C0.975976 3.92114 0.777496 3.92114 0.655077 3.83424C0.532658 3.74734 0.532658 3.60644 0.655077 3.51954L2.42835 2.26074L0.655077 1.00195C0.532658 0.915044 0.532658 0.774148 0.655077 0.687247C0.777496 0.600345 0.975976 0.600345 1.09839 0.687247Z" fill={color}/>
    </svg>
);

export default Arrow;