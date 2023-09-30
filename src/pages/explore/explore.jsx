import React, { useState } from 'react';
import styles from "./explore.module.css"
import {Background} from '../../components/background'
import { Textbox } from '../../components/textbox'
import { ExploreCommunitySmall } from '../../components/exploreCommunitySmall';
import { ExploreCommunityLarge } from '../../components/exploreCommunityLarge';

function Explore() {

    return (
        <div className = {styles.exploreContainer}>
            <Background/>
            {/* <ExploreCommunitySmall/> */}
            {/* <ExploreCommunityLarge /> */}

        </div>
    );
}

export default Explore;
