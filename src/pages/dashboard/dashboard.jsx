import React, { useState } from 'react';
import styles from "./dashboard.module.css"
import {Background} from '../../components/background'
import { Textbox } from '../../components/textbox'
import { Card } from '../../components/card'
import { BoldText } from '../../components/boldText';

function Dashboard() {
    return (
        <div className={styles.dashboardContainer}>
            <div className = {styles.dashboardTextContainer}>
                <BoldText text={"Dashboard"} containerWidth={"250px"} size={"25px"} weight={"bold"} textColor="#000"/>
            </div>
            <Background />
            <div className={styles.dashboardGrid}>
                
                
        
                <div className={styles.activeChallengesCard}>
                    <Card  />
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
                
                
            </div>
        
        </div>
    );
}

export default Dashboard;

