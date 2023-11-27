import React from "react";
import styles from "./successMessage.module.css";
import { BoldText } from "../boldText";
import logo from "../../img/plain_logo_black.png";
import { DashboardIcon } from "../../icons/DashboardIcon";
import { CreateIcon } from "../../icons/CreateIcon";
import { MyGroupsIcon } from "../../icons/MyGroupsIcon";
import { ExploreIcon } from "../../icons/ExploreIcon";
import { ProfileIcon } from "../../icons/ProfileIcon";
import { SettingsIcon } from "../../icons/SettingsIcon";
import { Button } from "../button";
import { Link, useLocation } from "react-router-dom";
import { DoubleCheck } from "../../icons/DoubleCheck";
import { Card } from "../card";
import { Circle } from "../../icons/Circle";


const SuccessMessage = () => {
    return (
    <div >
        <div className={styles.successMessageContainer}>
        <Card
            containerWidth={'500px'}
            containerHeight={'500px'}
            backgroundColor= {`linear-gradient(101deg, rgba(198, 62, 199, 0.85) -2.83%, rgba(255, 191, 83, 0.69) 73.19%)`}
        
        >
            <div className={styles.insideWhiteBox}>
                <Card
                
                containerWidth={'450px'}
                containerHeight={'450px'}
                >

                <div className={styles.gradientCircle}>
                    <Card  
                    containerWidth={'150px'}
                    containerHeight={'150px'}
                    borderRadius="500px"
                    backgroundColor= {`linear-gradient(101deg, rgba(198, 62, 199, 0.85) -2.83%, rgba(255, 191, 83, 0.69) 73.19%)`}
                    >
                        <div className={styles.doubleCheck}>
                        <DoubleCheck/>
                        </div>
                    </Card>
                    
                    
                </div>

                <div className = {styles.successText}>

            
                    <BoldText
                        text={"SUCCESS 🥳"}
                        // containerWidth={"1px"}
                        size={"30px"}
                        weight={"bold"}
                        textColor="#000"
                    />
                

                    <BoldText
                        text={"Congrats! Your credential is on its way!"}
                        // containerWidth={"250px"}
                        size={"15px"}
                        textColor="#000"
                    />
                </div>
                


                </Card>

            </div>

            
            




        </Card>
        </div>
        
    </div>
    );
  };
  
  export default SuccessMessage;
  