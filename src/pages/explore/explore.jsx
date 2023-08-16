import React, { useState } from 'react';
import styles from "./explore.module.css"
import {Background} from '../../components/background'
import { Textbox } from '../../components/textbox'

function Explore() {

    return (
        <div className = {styles.exploreContainer}>
            <Background/>
        </div>
    );
}

export default Explore;
