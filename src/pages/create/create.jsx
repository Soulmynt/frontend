import React, { useState } from 'react';
import styles from "./create.module.css"
import {Background} from '../../components/background'
import { Textbox } from '../../components/textbox'
import { Button } from '../../components/button'
import { Card } from '../../components/card';
import CreateCredential from './createCredential.jsx';
import CreateCommunity from './createCommunity.jsx';
import { BoldText } from '../../components/boldText';


// function Create() {
//     const [showCard, setShowCard] = useState(false);

//     return (
//         <div className = {styles.createContainer}>
//             <Background/>
//             <div className = {styles.createTextContainer}>
//                 <BoldText text={"Create"} containerWidth={"250px"} size={"25px"} weight={"bold"} textColor="#000"/>
//             </div>
//             <div className={styles.createGrid}>
//                 <div className={styles.createCredentialButton}>
//                     <Button 
//                         children={"Create Credential"} 
//                         variant="colorful-button"
//                         containerWidth={"250px"}
//                         onClick={() => setShowCard(true)}
//                     />
//                 </div>
//                 {showCard && (
//                     <div className={styles.overlayWrapper}>
//                         <div className= {styles.overlayBackground} onClick={() => setShowCard(false)}></div>
//                         <CreateCredential />
//                     </div>
//                 )}

//                 <div className={styles.createCommunitiesButton}>
//                     <Button 
//                         children={"Create Community"} 
//                         variant="colorful-button"
//                         containerWidth={"250px"}
//                         onClick={() => setShowCard(true)}
//                     />
//                 </div>
//                 {showCard && (
//                     <div className={styles.overlayWrapper}>
//                         <div className= {styles.overlayBackground} onClick={() => setShowCard(false)}></div>
//                         <CreateCredential />
//                     </div>
//                 )}



//                 <div className={styles.recentCredentialsCard}>
//                     <Card  />
//                 </div>

//                 <div className={styles.recentCommunitiesCard}>
//                     <Card  />
//                 </div>

//                 <div className={styles.sendCredentialsCard}>
//                     <Card  />
//                 </div>


//             </div>
//         </div>
//     );
// }

function Create() {
    const [showCard, setShowCard] = useState(false);
    const [activeComponent, setActiveComponent] = useState(null);

    const handleButtonClick = (componentName) => {
        setActiveComponent(componentName);
        setShowCard(true);
    }

    return (
        <div className = {styles.createContainer}>
            <Background/>
            <div className = {styles.createTextContainer}>
                <BoldText text={"Create"} containerWidth={"250px"} size={"25px"} weight={"bold"} textColor="#000"/>
            </div>
            <div className={styles.createGrid}>
                <div className={styles.createCredentialButton}>
                    <Button 
                        children={"Create Credential"} 
                        variant="colorful-button"
                        containerWidth={"250px"}
                        onClick={() => handleButtonClick('CreateCredential')}
                    />
                </div>

                <div className={styles.createCommunitiesButton}>
                    <Button 
                        children={"Create Community"} 
                        variant="colorful-button"
                        containerWidth={"250px"}
                        onClick={() => handleButtonClick('CreateCommunity')}
                    />
                </div>

                <div className={styles.recentCredentialsCard}>
                    <Card  />
                </div>

                <div className={styles.recentCommunitiesCard}>
                    <Card  />
                </div>

                <div className={styles.sendCredentialsCard}>
                    <Card  />
                </div>

                {showCard && (
                    <div className={styles.overlayWrapper}>
                        <div className= {styles.overlayBackground} onClick={() => setShowCard(false)}></div>
                        {activeComponent === 'CreateCredential' && <CreateCredential />}
                        {activeComponent === 'CreateCommunity' && <CreateCommunity />}
                    </div>
                )}
            </div>
        </div>
    );
}


export default Create;
