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
import moment from 'moment-timezone';


function Dashboard() {
    const [isPopupVisible, setIsPopupVisible] = useState(false);
  

    // const [selectedImage, setSelectedImage] = useState(null);
    const [selectedImages, setSelectedImages] = useState([]);

    const [isHovered, setIsHovered] = useState(false);

    const [showCard, setShowCard] = useState(false);
    const [activeComponent, setActiveComponent] = useState(null);
    // const {auth, userInfo, setUserInfo} = useAuth();




    const userInfo = {
       
        id: "ObjectId",
        email: "String",
        handle: "String",
        companies: [
                {
                    _id: 1,
                    "user": "String",
                   "handle": "String",
                   "CompanyId": "1",
                   "companyName": "XYZ",
                   "Credentials": [],
                   "challenges": [
                    {
                        "name": "ah", 
                        "company": "ObjectId",
                        "description": "hh",
                        "points": "Number",
                        "dateCreated": "2024-01-03",
                        "dateExpires": "2024-01-09",
                        "credentialArray": ["ObjectId"],
                        "tokenReward": { "tokenType": "String", "amount": "Number" },
                        "active": "Boolean",
                        "participants": [{
                          "user": "ObjectId",
                          "proof": ["String"],
                          "completedDate": "Date",
                          "confirmed": "Boolean",
                        }],
                    },
                    {
                        "name": "nn", 
                        "company": "ObjectId",
                        "description": "hello",
                        "points": 100,
                        "dateCreated": "2024-01-03",
                        "dateExpires": "2024-01-09",
                        "credentialArray": ["ObjectId"],
                        "tokenReward": { "tokenType": "String", "amount": "Number" },
                        "active": "Boolean",
                        "participants": [{
                          "user": "ObjectId",
                          "proof": ["String"],
                          "completedDate": "Date",
                          "confirmed": "Boolean",
                        }],
                    }
                   ],
                   "RewardPoints": "Number",
                   "admin": false,
                },
                {
                    _id: 2,
                    "user": "String",
                   "handle": "String",
                   "CompanyId": "2",
                   "companyName": "ABC",
                   "Credentials": [],
                   "Challenges": [],
                   "RewardPoints": "Number",
                   "admin": false,
                },
        
        ],
        credentials: ["String"],
          
    }

    //TODO: UNCOMMENT

    const nonAdminCompanies = userInfo.companies.filter(company => !company.admin);
    const isPartOfAnyNonAdminCompany = nonAdminCompanies.length > 0;

    const [selectedCommunity, setSelectedCommunity] = useState(
        isPartOfAnyNonAdminCompany ? nonAdminCompanies[0] : "No Communities"
    );


    // const isPartOfAnyCompany = userInfo.companies && userInfo.companies.length > 0;
    // const [selectedCommunity, setSelectedCommunity] = useState(
    //     isPartOfAnyCompany ? userInfo.companies[0] : "No Communities"
    // );

    // const selectedCommunity = null;

    // const[userInfo, setUserInfo] = useState(null);


    //Handing the mapping for a user's specific challenges for company
    const [currentCompanyIndex, setCurrentCompanyIndex] = useState(0);

    //TODO: UNCOMMENT
    // const handleNextCompany = () => {
    //     setCurrentCompanyIndex(prevIndex => (prevIndex + 1) % userInfo.companies.length);
    // };



    //TODO: Uncomment

    // useEffect(() => {
    //     const accessToken = auth.accessToken;
    //     const url = `http://www.soulMynt.com/api/v1/getuserinfo?token=${accessToken}`;
    
    //     const fetchUserInfo = async () => {
    //         try {
    //             const response = await axios.get(url);
    //             setUserInfo(response.data.userProfile);
    //         } catch (error) {
    //             console.error("Fetching user info failed:", error);
    //         }
    //     };
    
    //     fetchUserInfo();
    // }, []);


    //TODO: TEMP STUFF

    



    //TODO:

    // const getActiveChallenges = () => {
    //     const now = new Date();

        
    //     const specificCompanyData = userInfo.companies.find(company => company.name === selectedCommunity);
    //     if (!specificCompanyData) return [];

    //     if(!specificCompanyData.challenges) return [];

    //     return specificCompanyData.challenges.filter(challenge => {
    //         const startDate = new Date(challenge.dateCreated); 
    //         startDate.setHours(0, 0, 0, 0);
    //         const endDate = new Date(challenge.dateExpires);
    //         endDate.setHours(23, 59, 59, 999);

    //         console.log(now);
    //         console.log(endDate);
    //         return now >= startDate && now <= endDate;
    //       });
    // };
    const getActiveChallenges = () => {
        // 'now' represents the current time in Eastern Time, accounting for EST or EDT as appropriate
        const now = moment().tz('America/New_York');

        // Make endpoint call here - use selectedCommunity._id
        const response = 
        {
            "success": true,
            "userCompanyProfile": {    
                    "_id": 1,          
                    "image": "String",  
                    "name": "XYZ",
                    "Status": "String",
                    "Description": "String",
                    "QualifyingQuestions": ["String"],
                    "Resume": "Boolean",
                    "OpenCommunity": "Boolean",
                    "challenges": [

                        {
                            "name": "ah", 
                            "company": "ObjectId",
                            "description": "hh",
                            "points": "Number",
                            "dateCreated": "2024-01-03",
                            "dateExpires": "2024-01-20",
                            "credentialArray": ["ObjectId"],
                            "tokenReward": { "tokenType": "String", "amount": "Number" },
                            "active": "Boolean",
                            "participants": [{
                              "user": "ObjectId",
                              "proof": ["String"],
                              "completedDate": "Date",
                              "confirmed": "Boolean",
                            }],
                        },
                        {
                            "name": "nn", 
                            "company": "ObjectId",
                            "description": "hello",
                            "points": 100,
                            "dateCreated": "2024-01-03",
                            "dateExpires": "2024-01-20",
                            "credentialArray": ["ObjectId"],
                            "tokenReward": { "tokenType": "String", "amount": "Number" },
                            "active": "Boolean",
                            "participants": [{
                              "user": "ObjectId",
                              "proof": ["String"],
                              "completedDate": "Date",
                              "confirmed": "Boolean",
                            }],
                        }




                    ],
                    "Rewards": [{ "reward": "String", "PointsReq": "Number" }],
                    "address": "String",
                    "users": [{ "user": "ObjectId", "Points": "Number" }],
                    "admins": ["ObjectId"],
                    "joinCode": "String",
            }
        }

        const specificCompanyData = response.userCompanyProfile;


        if (!specificCompanyData || !specificCompanyData.challenges) return [];
    
        return specificCompanyData.challenges.filter(challenge => {
            // Convert start and end dates to the beginning and end of the day in Eastern Time
            const startDate = moment.tz(challenge.dateCreated, 'America/New_York').startOf('day');
            const endDate = moment.tz(challenge.dateExpires, 'America/New_York').endOf('day');
    
            // Check if 'now' is within the challenge active range
            return now.isSameOrAfter(startDate) && now.isSameOrBefore(endDate);
        });
    };

    const activeChallenges = getActiveChallenges();
   

   
     



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
    const [currentChallengePoints, setCurrentChallengPoints] = useState(0);
    const [currentChallengeName, setCurrentChallengeName] = useState("");
    const [currentChallengeDesc, setCurrentChallengeDesc] = useState("");
    const [currentChallengeDateCreated, setCurrentChallengeDateCreated] = useState("");
    const [currentChallengeDateExpires, setCurrentChallengeDateExpires] = useState("");
    


    const handleSubmitClick = (challenge) => {
        setCurrentChallengeName(challenge.name);
        setCurrentChallengeDesc(challenge.description);
        setCurrentChallengPoints(challenge.points);
        setIsPopupVisible(true);
        // setCurrentChallengeId(challenge._id);
        

    };

    const handleChallengeSubmissionClick = async () =>  {
        // const accessToken = auth.accessToken;
        const challengeID = currentChallengeId;
        const challengeProof = selectedImages; 
        // let data = await axiosSubmitChallenge(accessToken, challengeID, challengeProof);
        setSelectedImages([]);
    };


    //TODO: UNCOMMENT

    const handleCommunityChange = (event) => {
        console.log(typeof(event.target.value))
        
        const companyId = parseInt(event.target.value, 10)
        const selected = nonAdminCompanies.find((company => company._id === companyId))
        console.log(selected)
        setSelectedCommunity(selected);
        // Additional logic to fetch and display data for the selected community
    };


    


      
    return (
        <div className={styles.dashboardContainer}>

           

            
            <div className = {styles.dashboardTextContainer}>
                <BoldText text={"Dashboard"} containerWidth={"250px"} size={"25px"} weight={"bold"} textColor="#000"/>


                <BoldText 
                    text={
                    typeof selectedCommunity === 'string' && selectedCommunity === "No Communities" 
                        ? "No Communities" 
                        : `Community Name: ${selectedCommunity.companyName}`
                    } 
                    containerWidth={"250px"} 
                    size={"18px"} 
                    textColor="#000"
                />



            </div>
            
            <TopBar/>


            
            

            <div className={styles.dashboardsHotButtonsContainer}>

                <Button
                    children={"Join New Community"}
                    variant="colorful-button" 
                    containerWidth={"250px"}
                    onClick={() => handleButtonClick("CommunityCode")}

                    
                />

                
                

                <div className={styles.boxWrapper}>

                    

                        <Card gradientBorder={true} borderRadius="5px" containerHeight="auto" containerWidth="200px">
                        <div className={styles.communityDropdown} onChange={handleCommunityChange}>
                            <select value={selectedCommunity._id}>
                                {nonAdminCompanies.map(company => (
                                    <option key={company} value={company._id}>{company.companyName}</option>
                                ))}
                            </select>
                        </div>

                        </Card>
                    
                </div>
                



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

                    

                    {/* TODO: */}

                    {/* <BoldText
                        text = {"SHOULD BE CHALLENGE DESCRIPTION HERE + AMOUNT OF POINTS WON + Challenge NFT"}
                    /> */}

                    <BoldText
                        text = {currentChallengeName}
                    />

                    <BoldText
                        text = {currentChallengeDesc}
                    />

                    <BoldText
                        text = {currentChallengePoints}
                    />

                    <BoldText
                        text = {currentChallengeDateCreated}
                    />

                    <BoldText
                        text = {currentChallengeDateExpires}
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
                            
                
                {true ? (
                <>
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

                            
                            {/* <ActiveChallengeBox
                            text = "This is a temporary challenge "   
                            onSubmitClick={handleSubmitClick}
                            /> */}



                            {activeChallenges.length > 0 ? (
                            activeChallenges.map((challenge) => (
                                <div className={styles.generalSpacing}>
                                    <ActiveChallengeBox
                                    key={challenge._id}
                                    text={challenge.name}
                                    id={challenge._id}
                                    onSubmitClick={() => handleSubmitClick(challenge)} // Correctly passing the function
                                    />

                                </div>
                            ))
                            ) : (
                            <p>No active challenges for this company.</p>
                            )}
                            
                            

                        
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

                </>

                ) : (

                    <div className={styles.noCompaniesCard}>
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

                        <div className={styles.generalSpacing}>

                        
                        <BoldText

                                text={"You have no active challenges 😔"}
                                containerWidth={"250px"}
                                size={"18px"}
                                textColor="#000"



                        />
                        </div>



                    </Card>
                </div>


                )}


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

