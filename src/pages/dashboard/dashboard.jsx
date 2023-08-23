import React, { useState } from 'react';
import styles from "./dashboard.module.css"
import {Background} from '../../components/background'
import { Textbox } from '../../components/textbox'
import { Card } from '../../components/card'

function Dashboard() {

    return (
        <div className = {styles.dashboardContainer}>
            <Background/>
      
                <div className= {styles.activeChallengesCard}>
                    <Card containerWidth={"40vw"} containerHeight={"25vh"} />
                </div>
                <div className= {styles.progressCard}>
                    <Card containerWidth={"40vw"} containerHeight={"50vh"} />
                </div>
                <div className= {styles.leaderboardsCard}>
                    <Card containerWidth={"20vw"} containerHeight={"25vh"} />
                </div>
                <div className= {styles.credentialsCard}>
                    <Card containerWidth={"20vw"} containerHeight={"25vh"} />
                </div>
            
        </div>
    );
}

export default Dashboard;
