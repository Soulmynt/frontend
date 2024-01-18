import React, { useState, useEffect } from 'react';
import styles from "./profile.module.css"
import {Background} from '../../components/background'
import { Textbox } from '../../components/textbox'
import { Card } from '../../components/card';
import { BoldText } from '../../components/boldText';
import { Button } from '../../components/button';
import TransferFunds from './transferFunds.jsx';
import { TopBar } from '../../components/topBar'
import { useAuth } from "../../hooks";
import { axiosSubmitChallenge } from "../../utils/axios";
import bottom from "../../img/bottom.png";

function Profile() {

    const [showCard, setShowCard] = useState(false);
    const [activeComponent, setActiveComponent] = useState(null);
    // const {auth, userInfo} = useAuth();


    const userInfo = {
       
        id: "ObjectId",
        email: "String",
        handle: "String",
        companies: [
            {
                "image": "String",  
                name: "XYZ",
                "Status": "String",
                "Description": "String",
                "QualifyingQuestions": ["String"],
                "Resume": "Boolean",
                "OpenCommunity": "Boolean",
                challenges: [
                    {
                        name: "Hackathon", 
                        "company": "ObjectId",
                        description: "Host a hackathon",
                        points: 100,
                        dateCreated: "2023-12-25",
                        dateExpires: "2023-12-28",
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
                        name: "Hello", 
                        "company": "ObjectId",
                        description: "Host a hello",
                        points: 200,
                        "dateCreated": "2023-12-28",
                        "dateExpires": "2023-12-29",
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
            },

            {
                "image": "String",  
                "name": "ABC",
                "Status": "String",
                "Description": "String",
                "QualifyingQuestions": ["String"],
                "Resume": "Boolean",
                "OpenCommunity": "Boolean",
                "Challenges": ["ObjectId"],
                "Rewards": [{ "reward": "String", "PointsReq": "Number" }],
                "address": "String",
                "users": [{ "user": "ObjectId", "Points": "Number" }],
                "admins": ["ObjectId"],
                "joinCode": "String",
            }
            
            







        ],
        credentials: [
            bottom,
            




        ],
          
    }


    const getCredentials = () => {

        const specificUserCredentials = userInfo.credentials;
        if(!specificUserCredentials) return [];

        return specificUserCredentials;

    }

    const userCredentials = getCredentials();

    
    




    const handleButtonClick = (componentName) => {
        setActiveComponent(componentName);
        setShowCard(true);
    };

    return (
        <div className = {styles.profileContainer}>
            
            
            <Background/>
            <TopBar />

            <div className={styles.transferFundsButton}>
                    <Button
                    children={"Transfer Funds"}
                    variant="colorful-button"
                    containerWidth={"250px"}
                    onClick={() => handleButtonClick("TransferFunds")}
                    />
            </div>
            
            <div className={styles.profileGrid}>
            


            
            
                <div className={styles.myCredentialsCard}>
                    <Card>
                        <div className={styles.generalSpacing}>
                        <BoldText text={"My Credentials "} containerWidth={"250px"} size={"24px"} weight={"bold"} textColor="#000"/>
                        </div>

                        <div className={styles.generalSpacing}>
                            {userCredentials.length > 0 ? (
                            userCredentials.map((imageSrc, index) => (
                            <img key={index} src={imageSrc} alt={`Credentials ${index + 1}`} style={{ margin: '10px', borderRadius: '8px' }} />
                            ))
                            ) : (
                            <p>No credentials obtained 😔</p>
                            )}
                        </div>


                    </Card>
                </div>
                <div className={styles.pendingCredentialsCard}>
                    <Card>
                        <div className={styles.generalSpacing}>
                            <BoldText text={"Pending Credentials "} containerWidth={"250px"} size={"24px"} weight={"bold"} textColor="#000"/>
                        </div>
                    </Card>
                </div>
                <div className={styles.scheduleChallengesCard}>
                    <Card>
                        <div className={styles.generalSpacing}>
                            <BoldText text={"Monetary Wallet "} containerWidth={"250px"} size={"24px"} weight={"bold"} textColor="#000"/>
                        </div>
                    </Card>
                </div>
                <div className={styles.walletCard}>
                    <Card />
                </div>         
            </div>

            {showCard && (
                    <div className={styles.overlayWrapper}>
                    <div
                    className={styles.overlayBackground}
                    onClick={() => setShowCard(false)}
                    ></div>
                    {activeComponent === "TransferFunds" && <TransferFunds />}
                    
                    
                    </div>
                )}
            
        </div>


    );
}

export default Profile;
