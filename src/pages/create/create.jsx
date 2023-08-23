import React, { useState } from 'react';
import styles from "./create.module.css"
import {Background} from '../../components/background'
import { Textbox } from '../../components/textbox'
import { Button } from '../../components/button'

function Create() {

    return (
        <div className = {styles.createContainer}>
            <Background/>
            <div className={styles.createCredentialButton}>
                    <Button 
                    children={"Create Credential"} 
                    variant="colorful-button"
                    containerWidth={"250px"}
                     />
            </div>
            
        </div>
        
    );
}

export default Create;
