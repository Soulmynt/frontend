import React, { useState } from 'react';
import styles from "./profile.module.css"
import {Background} from '../../components/background'
import { Textbox } from '../../components/textbox'

function Profile() {

    return (
        <div className = {styles.exploreContainer}>
            <Background/>
        </div>
    );
}

export default Profile;
