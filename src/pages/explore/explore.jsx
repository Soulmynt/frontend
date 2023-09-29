import React, { useState } from 'react';
import styles from "./explore.module.css"
import {Background} from '../../components/background'
import { Textbox } from '../../components/textbox'
import { ExploreCommunitySmall } from '../../components/exploreCommunitySmall';

function Explore() {

    return (
        <div className = {styles.exploreContainer}>
            <Background/>
            <ExploreCommunitySmall/>

        </div>
    );
}

export default Explore;
