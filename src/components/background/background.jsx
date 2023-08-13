import React, { useEffect } from "react";
import styles from "./background.module.css";
import {Sidebar} from "../../components/sidebar"

const Background = () => {
  return (
    <div>
        <div className={styles.backgroundDesign}>
            <div className = {styles.gradientBorder}>
                
                <div className = {styles.cover}>
                    <Sidebar />
                </div>
            </div>
            
            
        </div>
        
    </div>
  );
};

export default Background;