import React from "react";
import styles from './exploreCommunitySmall.module.css';
import { Card } from "../card";
import { BoldText } from "../boldText";

const ExploreCommunitySmall = () => {
  return( 
    <div className= {styles.mainContainer}> 
        <Card containerWidth="350px" containerHeight="300px">
            <div className={styles.contentInsideCard}>

            
                <div className={styles.topSpacing}>
                    <BoldText text={"Pending Credentials "} containerWidth={"250px"} size={"24px"} weight={"bold"} textColor="#000"/>

                </div>
            </div>




        </Card>
    </div>
  );
};


export default ExploreCommunitySmall;
