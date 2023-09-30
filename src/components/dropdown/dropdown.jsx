import React from 'react';
import { Button } from '../button'
import styles from './dropdown.module.css'

const Dropdown = ({ options, onOptionClick }) => (
    <div className={styles.dropdown}>
      {options.map(option => (
        <Button
          key={option}
          variant="transparent" // Adjust the variant as needed 
          onClick={() => onOptionClick(option.toLowerCase())}
        >
          {option}
        </Button>
      ))}
    </div>
  );
  
  export default Dropdown;