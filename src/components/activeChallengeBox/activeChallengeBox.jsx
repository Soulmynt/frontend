import React, { useState, useMemo } from 'react';
import { Checkbox } from "../checkbox"
import { BoldText } from "../boldText";
import { Card } from "../card";
import { Button } from "../button";
import { Table } from '../table';
import styles from "./activeChallengeBox.module.css"

const ActiveChallengeBox = ({text, onSubmitClick}) => {
  // const [isPopupVisible, setIsPopupVisible] = useState(false);

  // const handleReviewClick = () => {
  //   setIsPopupVisible(true);
  // };

  // const closePopup = () => {
  //   setIsPopupVisible(false);
  // };

  return (
    <div>
        <Card gradientBorder={true} borderRadius="5px" containerHeight="auto" containerWidth="60%">
            {/* <Checkbox/> */}
            <div className={styles.activeBoxContainer}>
              <Button
              children = {'Submit'}
              variant = "colorful-button"
              containerHeight="5px"
              containerWidth="25%"
              onClick={() => onSubmitClick(text)}
              />
              <BoldText 
              text={text}


              />

              {/* {isPopupVisible && (
              <div className={styles.overlayWrapper}>
              <div className={styles.overlayBackground} onClick={closePopup}></div>

              </div>
              )} */}
            </div>
            



        </Card>
    </div>


  );
};


export default ActiveChallengeBox;
