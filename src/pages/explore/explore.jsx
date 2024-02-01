import React, { useEffect, useState } from 'react';
import styles from "./explore.module.css"
import {Background} from '../../components/background'
import { Textbox } from '../../components/textbox'
import { TopBar } from '../../components/topBar'
import { ExploreCommunitySmall } from '../../components/exploreCommunitySmall';
import { ExploreCommunityLarge } from '../../components/exploreCommunityLarge';
import { Card } from '../../components/card';
import { BoldText } from '../../components/boldText';
import { Arrow } from "../../icons/Arrow";
import {Collapsible} from '../../components/collapsible/';

import { useLocation } from 'react-router-dom';
import axios from 'axios';

const CredentialGroup = ({ groupName, credentials }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.groupContainer}>
            <div className={styles.groupHeader} onClick={() => setIsOpen(!isOpen)}>
                <div className = {styles.generalSpacing}>
                    <BoldText
                    text = {groupName}
                    size={"25px"}
                    containerWidth={"150px"}
                    weight={"400"}
                    />

                </div> 
                <div className = {styles.generalSpacingAlt}>

                <Arrow className={isOpen ? styles.arrowUp : styles.arrowDown} />



                </div>

                

                
                
                
                
            </div>
            {isOpen && (
                <div className={styles.generalSpacing}>
                    <div className={styles.credentialsContainer}>
                        {credentials.map((credential, index) => (
                            <div key={index} className={styles.credentialCard}>
                                {/* Display credential information here */}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};


function Explore() {

    const [userData, setUserData] = useState(null);
    const location = useLocation();
    const [showCard, setShowCard] = useState(false);
    const [activeComponent, setActiveComponent] = useState(null);

    

    useEffect(() => {
        // Function to parse query parameters
        const getQueryParam = (param) => {
            const searchParams = new URLSearchParams(location.search);
            return searchParams.get(param);
        };

        const username = getQueryParam('username');
        console.log(username);
        
        if (username) {
            // Fetch user data using the userId
            fetchUserData(username);
        }
    }, [location]);

    const fetchUserData = async (username) => {
        try {
            // const response = await axios.post('/your-endpoint', { userId });
            // if (response.data.success) {
            //     setUserData(response.data.message.userCompany);
            // }

            

            const response = {
                "success": true,
                "message": {
                  "userCompany": [
                    {
                      "user": username,
                      "handle":"String",
                      "companyId":"Schema Object Id",
                      "companyName":"A",
                      "Credentials":["Credentials Schema"],
                      "Challenges":["Challenges Array"],
                      "RewardPoints": "Number",
                      "admin":"Boolean"
                    },
                    {
                        "user":"Me",
                        "handle":"String",
                        "companyId":"Schema Object Id",
                        "companyName":"B",
                        "Credentials":["Credentials Schema"],
                        "Challenges":["Challenges Array"],
                        "RewardPoints": "Number",
                        "admin":"Boolean"
                      },
                      {
                        "user":"Me",
                        "handle":"String",
                        "companyId":"Schema Object Id",
                        "companyName":"C",
                        "Credentials":["Credentials Schema"],
                        "Challenges":["Challenges Array"],
                        "RewardPoints": "Number",
                        "admin":"Boolean"
                      }
                    // ... (additional userCompany objects)
                  ]
                }
              }


            setUserData(response.message.userCompany)
            console.log(userData)
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    return (
        <div className = {styles.exploreContainer}>
            <Background/>
            <TopBar />
            {/* <ExploreCommunitySmall/> */}
            {/* <ExploreCommunityLarge /> */}
            <div className={styles.exploreGrid}>        
                <div className={styles.userProfileView}>
                    <Card>
                    <div className={styles.generalSpacing}>
                            <BoldText 
                                text={`Viewing Profile for: ${userData && userData.length > 0 ? userData[0].user : "N/A"}`} 
                                containerWidth={"250px"} 
                                size={"24px"} 
                                weight={"bold"} 
                                textColor="#000"
                            />
                    </div>

                    <div className={styles.generalSpacing}>
                            <BoldText text={"Companies:"} containerWidth={"250px"} size={"20px"} weight={"bold"} textColor="#000"/>
                        </div>

                        {/* {userData && userData.map((company, index) => (
                            <Collapsible key={index} title={`Company ${company.companyName}`}>
                                <div>Credentials obtained:</div>
                                <ul>
                                    {company.Credentials.map((credential, credIndex) => (
                                        <li key={credIndex}>{credential}</li>
                                    ))}
                                </ul>
                            </Collapsible>
                        ))} */}

                        
                        {userData && userData.map((company, index) => (
                            <CredentialGroup
                                key={index}
                                groupName={company.companyName}
                                credentials={company.Credentials}
                            />
                        ))}

                    



                    </Card>
                </div>
               
            </div>

            
            
        </div>
            
            

    );
}

export default Explore;
