import React, { useState } from 'react';
import styles from "./dashboard.module.css"
import {Background} from '../../components/background'
import { Textbox } from '../../components/textbox'
import { Card } from '../../components/card'
import { BoldText } from '../../components/boldText';
import { Button } from '../../components/button';
import { ActiveChallengeBox } from '../../components/activeChallengeBox';
import CommunityCode from './communityCode.jsx'


function Dashboard() {
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [challengeName, setChallengeName] = useState("");

    const [selectedImage, setSelectedImage] = useState(null);
    const [isHovered, setIsHovered] = useState(false);

    const [showCard, setShowCard] = useState(false);
    const [activeComponent, setActiveComponent] = useState(null);


    const handleButtonClick = (componentName) => {
        setActiveComponent(componentName);
        setShowCard(true);
      };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    
    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleEditClick = () => {
        const fileInput = document.querySelector(`.${styles.communityPicFileInput}`);
        fileInput.click();
    };

    



    const handleSubmitClick = (text) => {
        setChallengeName(text);
        setIsPopupVisible(true);
      };

      
    return (
        <div className={styles.dashboardContainer}>

           

            
            <div className = {styles.dashboardTextContainer}>
                <BoldText text={"Dashboard"} containerWidth={"250px"} size={"25px"} weight={"bold"} textColor="#000"/>


            </div>

            <div className={styles.dashboardsHotButtonsContainer}>

                <Button
                    children={"Join New Community"}
                    variant="colorful-button"
                    containerWidth={"250px"}
                    onClick={() => handleButtonClick("CommunityCode")}

                    
                />
                



                </div>

            

            

        
            
            
            <Background />
            
                
            <div className={styles.dashboardGrid}>

                
                {isPopupVisible && (
                <div className={styles.overlayWrapper}>
                <div className={styles.overlayBackground} onClick={() => setIsPopupVisible(false)}></div>
                <Card
                containerWidth="70%"
                containerHeight = '70%'
                
                >

                <div className={styles.generalSpacing}>

                    <BoldText
                        text = {challengeName}
                    />

                    {/* TODO: */}

                    <BoldText
                        text = {"SHOULD BE CHALLENGE DESCRIPTION HERE + AMOUNT OF POINTS WON"}
                    />
                </div>
                <div className={styles.communityPicContainer} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            {selectedImage ? (
                                <img src={selectedImage} alt="Community" className={styles.communityImage} />
                            ) : (
                                <Card containerWidth={"900px"} containerHeight={"400px"} backgroundColor='#D9D9D9' />
                            )}
                        {isHovered && 
                        <Button children="Edit" onClick={handleEditClick} containerWidth="100px" variant="colorful" className={styles.buttonInside} />
                        }
                            <input type="file" className={styles.communityPicFileInput} onChange={handleFileChange} />
                </div>


                <div className={styles.generalSpacing}>
                    <Button 
                        children="Submit" 
                        containerWidth="150px"
                        variant="colorful"
                    />
                </div>

                </Card>
                
                
                </div>
)}
                
                
        
                <div className={styles.activeChallengesCard}>
                    <Card>
                        <div className={styles.generalSpacing}>
                            <BoldText
                                    text={"Active Challenges "}
                                    containerWidth={"250px"}
                                    size={"24px"}
                                    weight={"bold"}
                                    textColor="#000"
                            />
                        </div>

                        
                        

                        <div className = {styles.activeChallengesContainer}>

                            
                            <ActiveChallengeBox
                            text = "This is a temporary challenge "   
                            onSubmitClick={handleSubmitClick}
                            />
                        </div>


                    



                    </Card>
                </div>
                <div className={styles.credentialsCard}>
                    <Card/>
                </div>
                <div className={styles.leaderboardsCard}>
                    <Card  />
                </div>
                <div className={styles.rewardsLadderCard}>
                    <Card />
                </div>
                <div className={styles.pollsCard}>
                    <Card />
                </div>
                <div className={styles.announcementsCard}>
                    <Card />
                </div>


                {showCard && (
                    <div className={styles.overlayWrapper}>
                    <div
                    className={styles.overlayBackground}
                    onClick={() => setShowCard(false)}
                    ></div>
                    {activeComponent === "CommunityCode" && <CommunityCode />}
                    
                    </div>
                )}
                
                
            </div>
        
        </div>
    );
}

export default Dashboard;

