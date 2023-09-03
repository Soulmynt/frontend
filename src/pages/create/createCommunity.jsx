import React, { useState } from 'react';
import styles from "./createCommunity.module.css"
import { Card } from '../../components/card';
import { BoldText } from '../../components/boldText';
import { Button } from '../../components/button';
import { Textbox } from '../../components/textbox';
import { Checkbox } from '../../components/checkbox';



const CreateCommunity = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [isHovered, setIsHovered] = useState(false);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [slots, setSlots] = useState("");
    const [questions, setQuestions] = useState([]);
    const [resumeRequired, setResumeRequired] = useState(false);
    const [paidCommunity, setPaidCommunity] = useState(false);
    const [openCommunity, setOpenCommunity] = useState(false);


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

    const handleSlotsChange = (e) => {
        const value = e.target.value;
        if (value === "") {
            setSlots(Infinity);
        } else {
            setSlots(value);
        }
    };
    
    const handleEditClick = () => {
        const fileInput = document.querySelector(`.${styles.communityPicFileInput}`);
        fileInput.click();
    };

    const handleContinueClick = () => {
        // Example logic: Check if both name and description are filled
        if (name && description) {
            // Navigate to another page or save the data
            console.log("Both name and description are filled. Continuing...");
            // ... other logic
        } else {
            console.log("Please fill out all required fields.");
        }
    };

    const handleAddQuestion = () => {
        setQuestions([...questions, ""]); // Add a new empty question
    };

    const handleQuestionChange = (index, value) => {
        const newQuestions = [...questions];
        newQuestions[index] = value;
        setQuestions(newQuestions);
    };

    const handleRemoveQuestion = (index) => {
        const newQuestions = [...questions];
        newQuestions.splice(index, 1);
        setQuestions(newQuestions);
    };
        
    return (
        <div className={styles.createCredentialContainer}>

            <Card positionType='relative' containerWidth='800px' containerHeight='1350px'>
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
                <div className={styles.generalSpacing}>
                    <BoldText text={"Name * "} containerWidth={"250px"} size={"15px"} weight={"bold"} textColor="#000"/>
                </div>
                
                <div className={styles.generalSpacing}>
                <Textbox 
                    text="Enter community name" 
                    containerWidth="300px" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    isRequired={true}  // <-- Make this textbox required
                />
                </div>
                
                <div className={styles.generalSpacing}>
                    <BoldText text={"Description * "} containerWidth={"250px"} size={"15px"} weight={"bold"} textColor="#000"/>
                </div>

                <div className={styles.generalSpacing}>
                    <Textbox 
                        text="Provide a description of your community" 
                        containerWidth="720px"
                        containerHeight= "100px" 
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)} 
                        isRequired={true}  // <-- Make this textbox required
                        multiline={true}
                    />
                </div>

                <div className={styles.generalSpacing}>
                    <BoldText text={"Open Slots"} containerWidth={"250px"} size={"15px"} weight={"bold"} textColor="#000"/>
                </div>

                <div className={styles.generalSpacing}>
                    <BoldText text={"how many slots do you want your community to have (can change later - leave blank for unlimited)"} containerWidth={"250px"} size={"15px"} textColor="#8F8F8F"/>
                </div>

                <div className={styles.generalSpacing}>
                    <Textbox 
                        text="Number" 
                        containerWidth="250px"
                        type="number"
                        value={slots === Infinity ? "" : slots} 
                        onChange={handleSlotsChange}  
                    
                        
                    />
                </div>


                

                <div className={styles.generalSpacing}>
                    <BoldText text={"Application Questions"} containerWidth={"250px"} size={"15px"} weight={"bold"} textColor="#000"/>
                </div>

                <div className={styles.generalSpacing}>
                    <BoldText text={"Leave this section empty if your community does not require application questions"} containerWidth={"250px"} size={"15px"} textColor="#8F8F8F"/>
                </div>

                {questions.map((question, index) => (
                    <div key={index} className={styles.generalSpacing}>
                        <Textbox 
                            text={`Add 1 question for your community application`} 
                            containerWidth="720px"
                            containerHeight= "100px" 
                            value={question} 
                            onChange={(e) => handleQuestionChange(index, e.target.value)} 
                            multiline={true}
                        />
                        <div className = {styles.addedMargin}> 
                            <Button 
                                children="Remove" 
                                onClick={() => handleRemoveQuestion(index)}
                                containerWidth="150px"
                                variant="gray"
                            />
                        </div>
                    </div>
                ))}

                <div className={styles.generalSpacing}>
                    <Button 
                        children="Add Question" 
                        onClick={handleAddQuestion}
                        containerWidth="150px"
                        variant="colorful"
                    />
                </div>

                <div className = {styles.addedMargin}>

                    <div className={styles.generalSpacing}>
                        <Checkbox 
                            isChecked={paidCommunity} 
                            onCheckChange={setPaidCommunity} 
                            labelComponent={<BoldText text="Paid Community" containerWidth={"250px"} size={"15px"} weight={"bold"} textColor="#000"/>}
                        />
                    </div>

                    <div className={styles.generalSpacing}>
                        <BoldText text={"click the checkbox if your community will require payment for entry"} containerWidth={"250px"} size={"15px"} textColor="#8F8F8F"/>
                    </div>

                    

                    <div className={styles.generalSpacing}>
                        <Checkbox 
                            isChecked={resumeRequired} 
                            onCheckChange={setResumeRequired} 
                            labelComponent={<BoldText text="Resume" containerWidth={"250px"} size={"15px"} weight={"bold"} textColor="#000"/>}
                        />
                    </div>

                    <div className={styles.generalSpacing}>
                        <BoldText text={"click the checkbox if your community requires a resume"} containerWidth={"250px"} size={"15px"} textColor="#8F8F8F"/>
                    </div>

                    <div className={styles.generalSpacing}>
                        <Checkbox 
                            isChecked={openCommunity} 
                            onCheckChange={setOpenCommunity} 
                            labelComponent={<BoldText text="Paid Community" containerWidth={"250px"} size={"15px"} weight={"bold"} textColor="#000"/>}
                        />
                    </div>

                    <div className={styles.generalSpacing}>
                        <BoldText text={"click the checkbox if your community is open for anyone to join"} containerWidth={"250px"} size={"15px"} textColor="#8F8F8F"/>
                    </div>

                </div>

                <div className={styles.continueButtonContainer}>
                    <Button 
                        children="Continue" 
                        disabled={!name || !description} 
                        onClick={handleContinueClick}
                        containerWidth="150px"
                        variant="colorful"
                    />
                </div>



                


            </Card>
            
            
            

        </div>

    )
    
    };


    export default CreateCommunity;
