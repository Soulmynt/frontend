import React, { useState } from 'react';
import styles from "./mygroups.module.css"
import {Background} from '../../components/background'
import { Textbox } from '../../components/textbox'

function MyGroups() {

    return (
        <div className = {styles.dashboardContainer}>
            <Background/>
        </div>
    );
}

export default MyGroups;