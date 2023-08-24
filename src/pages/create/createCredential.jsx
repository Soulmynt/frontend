import React, { useState } from 'react';
import styles from "./createCredential.module.css"
import { Card } from '../../components/card';

const CreateCredentials = ({containerWidth, containerHeight}) => {
  return (
        <div className= {styles.createCredentialContainer}>
            
            <Card containerWidth={"800px"} containerHeight={"900px"} />


        </div>
    
    
    )
};


export default CreateCredentials;
