import React, { useState } from 'react';
import styles from "./dashboard.module.css"
import {Background} from '../../components/background'
import { Textbox } from '../../components/textbox'

function Dashboard() {

    return (
        <div className = {styles.dashboardContainer}>
            <Background/>
        </div>
    );
}

export default Dashboard;
