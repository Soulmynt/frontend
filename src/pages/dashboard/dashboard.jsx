import React, { useState, useEffect } from 'react';
import axios from 'axios'
import styles from "./dashboard.module.css"
import {Background} from '../../components/background'
import { Textbox } from '../../components/textbox'
import { Card } from '../../components/card'
import { BoldText } from '../../components/boldText';
import { Button } from '../../components/button';
import { ActiveChallengeBox } from '../../components/activeChallengeBox';
import CommunityCode from './communityCode.jsx'
import { TopBar } from '../../components/topBar'
import { useAuth } from "../../hooks";
import { axiosSubmitChallenge } from "../../utils/axios";


function Dashboard() {
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [challengeName, setChallengeName] = useState("");
    

    // const [selectedImage, setSelectedImage] = useState(null);
    const [selectedImages, setSelectedImages] = useState([]);

    const [isHovered, setIsHovered] = useState(false);

    const [showCard, setShowCard] = useState(false);
    const [activeComponent, setActiveComponent] = useState(null);
    const {auth, userInfo, setUserInfo} = useAuth();

    // const[userInfo, setUserInfo] = useState(null);


    //Handing the mapping for a user's specific challenges for company
    const [currentCompanyIndex, setCurrentCompanyIndex] = useState(0);
    const handleNextCompany = () => {
        setCurrentCompanyIndex(prevIndex => (prevIndex + 1) % userInfo.companies.length);
    };



    useEffect(() => {
        const accessToken = auth.accessToken;
        const url = `http://www.soulMynt.com/api/v1/getuserinfo?token=${accessToken}`;
    
        const fetchUserInfo = async () => {
            try {
                const response = await axios.get(url);
                setUserInfo(response.data.userProfile);
            } catch (error) {
                console.error("Fetching user info failed:", error);
            }
        };
    
        fetchUserInfo();
    }, []);


    // const currentCompanyChallenges = userInfo.companies[currentCompanyIndex];
    



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

    // const handleFileChange = (e) => {
    //     const file = e.target.files[0];
    //     if (file) {
    //         const reader = new FileReader();
    //         reader.onloadend = () => {
    //             setSelectedImage(reader.result);
    //         };
    //         reader.readAsDataURL(file);
    //     }
    // };
    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        const imageUrls = files.map(file => {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImages(prev => [...prev, reader.result]);
            };
            reader.readAsDataURL(file);
        });
    };

    const handleEditClick = () => {
        const fileInput = document.querySelector(`.${styles.communityPicFileInput}`);
        fileInput.click();
    };

    

    const [currentChallengeId, setCurrentChallengeId] = useState(0);

    const handleSubmitClick = (text, newChallengeId) => {
        setChallengeName(text);
        setIsPopupVisible(true);
        setCurrentChallengeId(newChallengeId)

    };

    const handleChallengeSubmissionClick = async () =>  {
        const accessToken = auth.accessToken;
        const challengeID = currentChallengeId;
        const challengeProof = selectedImages; 
        let data = await axiosSubmitChallenge(accessToken, challengeID, challengeProof);
        setSelectedImages([]);
    };


    


      
    return (
        <div className={styles.dashboardContainer}>

           

            
            <div className = {styles.dashboardTextContainer}>
                <BoldText text={"Dashboard"} containerWidth={"250px"} size={"25px"} weight={"bold"} textColor="#000"/>


            </div>
            
            <TopBar/>


            
            

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
                        text = {"SHOULD BE CHALLENGE DESCRIPTION HERE + AMOUNT OF POINTS WON + Challenge NFT"}
                    />
                </div>
                <div className={styles.communityPicContainer} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            {/* {selectedImage ? (
                                <img src={selectedImage} alt="Community" className={styles.communityImage} />
                            ) : (
                                <Card containerWidth={"200px"} containerHeight={"200px"} backgroundColor='#D9D9D9' />
                            )} */}
                        <Card containerWidth={"200px"} containerHeight={"200px"} backgroundColor='#D9D9D9' />
                        {isHovered && 
                        <Button children="Add" onClick={handleEditClick} containerWidth="100px" variant="colorful" className={styles.buttonInside} />
                        }
                            <input type="file" className={styles.communityPicFileInput} onChange={handleFileChange} />
                            <input type="file" multiple className={styles.communityPicFileInput} onChange={handleFileChange} />


                        
                        
                </div>


                <div className={styles.imageScrollContainer}>
                    {selectedImages.map((image, index) => (
                    <img key={index} src={image} alt={`Selected ${index + 1}`} className={styles.imagePreview} />
                    ))}
                </div>

                


                <div className={styles.generalSpacing}>
                    <Button 
                        children="Submit" 
                        containerWidth="150px"
                        variant="colorful"
                        onClick={handleChallengeSubmissionClick}
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
                            {/* {currentCompanyChallengeName.map((challenge, index) => (
                                <ActiveChallengeBox
                                    key={index}
                                    text={challenge.name}
                                    id = {challenge._id}
                                    onSubmitClick= handleSubmitClick(text, id)
                                    />
                                ))}
                            <button onClick={handleNextCompany}>Next Company</button> */}
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

