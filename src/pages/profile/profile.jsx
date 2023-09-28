import React, { useState } from 'react';
import styles from "./profile.module.css"
import {Background} from '../../components/background'
import { Textbox } from '../../components/textbox'
import { Card } from '../../components/card';
import { BoldText } from '../../components/boldText';

function Profile() {

    return (
        <div className = {styles.profileContainer}>
            <Background/>
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
                    <Card  />
                </div>
                <div className={styles.draftsCard}>
                    <Card />
                </div>         
            </div>
        </div>


    );
}

export default Profile;
