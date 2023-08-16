import React, { useState } from 'react';
import styles from "./settings.module.css"
import {Background} from '../../components/background'
import { Textbox } from '../../components/textbox'

function Settings() {

    return (
        <div className = {styles.exploreContainer}>
            <Background/>
        </div>
    );
}

export default Settings;
