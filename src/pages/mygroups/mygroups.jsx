import React, { useState } from 'react';
import styles from "./mygroups.module.css"
import {Background} from '../../components/background'
import { Textbox } from '../../components/textbox'
import { Card } from '../../components/card';

function MyGroups() {

    return (
        <div className = {styles.dashboardContainer}>
            <Background/>
            <div className={styles.myGroupsGrid}>
                <div className={styles.currentChallengesCard}>
                    <Card  />
                </div>
                <div className={styles.completedChallengesCard}>
                    <Card/>
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

export default MyGroups;

