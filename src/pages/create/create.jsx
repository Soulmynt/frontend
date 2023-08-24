import React, { useState } from 'react';
import styles from "./create.module.css"
import {Background} from '../../components/background'
import { Textbox } from '../../components/textbox'
import { Button } from '../../components/button'
import { Card } from '../../components/card';
import CreateCredential from './createCredential.jsx';


function Create() {
    const [showCard, setShowCard] = useState(false);

    return (
        <div className = {styles.createContainer}>
            <Background/>
            <div className={styles.createCredentialButton}>
                <Button 
                    children={"Create Credential"} 
                    variant="colorful-button"
                    containerWidth={"250px"}
                    onClick={() => setShowCard(true)}
                />
            </div>
            {showCard && (
                <div className={styles.overlayWrapper}>
                    <div className= {styles.overlayBackground} onClick={() => setShowCard(false)}></div>
                    <CreateCredential />
                </div>
            )}
        </div>
    );
}

export default Create;
