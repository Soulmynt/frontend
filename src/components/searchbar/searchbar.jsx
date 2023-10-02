import React from "react";
import styles from "./searchbar.module.css";
import { Card } from "../card";
import { SearchIcon } from "../../icons/SearchIcon";
import { Textbox } from "../textbox";

const Searchbar = ({text, containerWidth, containerHeight, onSearchChange}) => {
  return( 
    <div className={styles.searchbarContainer}>
        <Card className={styles.card}>
            {/* <div className={styles.iconAndText}>
                <SearchIcon/>
                
            </div> */}
            <Textbox
                text={text}
                containerWidth={containerWidth}
                containerHeight={containerHeight}
                onChange={onSearchChange}
            />
        </Card>
    </div>
  );
};

export default Searchbar;