import React, { useState } from 'react';
import styles from "./createCommunity.module.css"
import { Card } from '../../components/card';
import { BoldText } from '../../components/boldText';
import { Button } from '../../components/button';



const CreateCommunity = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    
    const handleMouseLeave = () => {
        setIsHovered(false);
    };


    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    
    const handleEditClick = () => {
        const fileInput = document.querySelector(`.${styles.communityPicFileInput}`);
        fileInput.click();
    };
    
    return (
        <div className={styles.createCredentialContainer}>

            <Card positionType='relative' containerWidth='800px' containerHeight='1500px'>
                <div className = {styles.createCommunityText}>
                    <BoldText text={"Create Community (Basic Information) "} containerWidth={"250px"} size={"25px"} weight={"bold"} textColor="#000"/>
                </div>

                {/* <div className={styles.communityPicContainer} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            {selectedImage ? (
                                <img src={selectedImage} alt="Profile" className={styles.communityImage} />
                            ) : (
                                <Card containerWidth={"350px"} containerHeight={"350px"} backgroundColor='#D9D9D9' />
                            )}
                        {isHovered && 
                        <Button children="Edit" onClick={handleEditClick} containerWidth="100px" variant="colorful" className={styles.buttonInside} />
                        }
                        <input type="file" className={styles.communityPicFileInput} onChange={handleFileChange} />
                </div> */}
                <div className={styles.communityPicContainer} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            {selectedImage ? (
                                <img src={selectedImage} alt="Community" className={styles.communityImage} />
                            ) : (
                                <Card containerWidth={"350px"} containerHeight={"350px"} backgroundColor='#D9D9D9' />
                            )}
                        {isHovered && 
                        <Button children="Edit" onClick={handleEditClick} containerWidth="100px" variant="colorful" className={styles.buttonInside} />
                        }
                            <input type="file" className={styles.communityPicFileInput} onChange={handleFileChange} />
                        </div>

            </Card>
            
            
            

        </div>

    )
    
    };


    export default CreateCommunity;
