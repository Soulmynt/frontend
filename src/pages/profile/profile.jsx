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

function Profile() {

    const [showCard, setShowCard] = useState(false);
    const [activeComponent, setActiveComponent] = useState(null);
    const {auth} = useAuth();


    const[userInfo, setUserInfo] = useState(null);

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
