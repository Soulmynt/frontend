import React from "react";
import { Button } from "../button";
import styles from "./dropdown.module.css";

const Dropdown = ({ optionsArray }) => (
  <div className={styles.dropdown}>
    {optionsArray.map((option) => (
      <Button
        key={option.title}
        variant={option.variant ? option.variant : "transparent"} // Adjust the variant as needed
        onClick={() => option.function()}
      >
        {option.title}
      </Button>
    ))}
  </div>
);

export default Dropdown;
