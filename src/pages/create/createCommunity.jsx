import React, { useState } from 'react';
import styles from "./createCommunity.module.css"
import { Card } from '../../components/card';
import { BoldText } from '../../components/boldText';
import { Button } from '../../components/button';
import { Textbox } from '../../components/textbox';
import { Checkbox } from '../../components/checkbox';
import { Table } from '../../components/table';



const CreateCommunity = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [isHovered, setIsHovered] = useState(false);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    // const [challengeDescription, setChallengeDescription] = useState('');
    // const [challengeName, setChallengeName] = useState('');
    const [slots, setSlots] = useState("");
    const [questions, setQuestions] = useState([]);
    const [resumeRequired, setResumeRequired] = useState(false);
    const [paidCommunity, setPaidCommunity] = useState(false);
    const [openCommunity, setOpenCommunity] = useState(false);
    const [challenges, setChallenges] = useState([]);
    const [rewards, setRewards] = useState([]);
    const table1Data = [
        { This: "2023-08-15", is: "Active", placeholder: "John Doe" },
        { This: "2023-08-14", is: "Inactive", placeholder: "Jane Smith" },
        // ... more data
      ];
    
      

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

    const handleAddChallenge = () => {
        setChallenges([...challenges, { challengeDescription: '', points: 0, challengeName: ''}]);
    };

    const handleChallengeDescriptionChange = (index, value) => {
        const updatedChallenges = [...challenges];
        updatedChallenges[index].challengeDescription = value;
        setChallenges(updatedChallenges);
    };

    const handleChallengeNameChange = (index, value) => {
        const updatedChallenges = [...challenges];
        updatedChallenges[index].challengeName = value;
        setChallenges(updatedChallenges);
    };

    const handleChallengePointsChange = (index, value) => {
        const updatedChallenges = [...challenges];
        updatedChallenges[index].points = value;
        setChallenges(updatedChallenges);
    };

    const handleRemoveChallenge = (index) => {
        const updatedChallenges = [...challenges];
        updatedChallenges.splice(index, 1);
        setChallenges(updatedChallenges);
    };

    const handleAddReward = () => {
        setRewards([...rewards, { points: 0, description: '' }]);
    };

    const handleRewardPointsChange = (index, value) => {
        const updatedRewards = [...rewards];
        updatedRewards[index].points = value;
        setRewards(updatedRewards);
    };

    const handleRewardDescriptionChange = (index, value) => {
        const updatedRewards = [...rewards];
        updatedRewards[index].description = value;
        setRewards(updatedRewards);
    };

    const handleRemoveReward = (index) => {
        const updatedRewards = [...rewards];
        updatedRewards.splice(index, 1);
        setRewards(updatedRewards);
    };


        
    return (
        <div className={styles.createCredentialContainer}>

            <Card positionType='relative' containerWidth='800px' containerHeight='2000px'>
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

                    <div className={styles.generalSpacing}>
                        <BoldText text={"Active Challenges"} containerWidth={"250px"} size={"15px"} weight={"bold"} textColor="#000"/>
                    </div>

                    <div className={styles.generalSpacing}>
                        <BoldText text={"Add challenges/Bounties + Associated Points (Note: Points are not necessary)"} containerWidth={"250px"} size={"15px"} textColor="#8F8F8F"/>
                    </div>

                    
                    {challenges.map((challenge, index) => (
                    <div key={index} className={styles.generalSpacing}>
                        <div className={styles.activeChallengesContainer}>
                            <Textbox 
                                text="Points" 
                                containerWidth="100px"
                                type="number"
                                value={challenge.points.toString()} 
                                onChange={(e) => handleChallengePointsChange(index, e.target.value)}  
                            />
                            <div className = {styles.nameAndDesc}>

                                <Textbox 
                                    text="Name" 
                                    containerWidth="500px"
                                    containerHeight="40px" 
                                    value={challenge.challengeName} 
                                    onChange={(e) => handleChallengeNameChange(index, e.target.value)} 
                                    multiline={false}
                                />
                                <Textbox 
                                    text="Challenge" 
                                    containerWidth="500px"
                                    containerHeight="40px" 
                                    value={challenge.description} 
                                    onChange={(e) => handleChallengeDescriptionChange(index, e.target.value)} 
                                    multiline={true}
                                />
                                
                            </div>
                        </div>
                        <div className = {styles.addedMargin}>
                            <Button 
                                children="Remove" 
                                onClick={() => handleRemoveChallenge(index)}
                                containerWidth="100px"
                                variant="gray"
                            />
                        </div>
                       
                    </div>
                ))}

                <div className={styles.generalSpacing}>
                    <Button 
                        children="Add Challenge" 
                        onClick={handleAddChallenge}
                        containerWidth="200px"
                        variant="colorful"
                    />
                </div>

                    

                </div>

                <div className={styles.generalSpacing}>
                    <BoldText text={"Rewards Ladder"} containerWidth={"250px"} size={"15px"} weight={"bold"} textColor="#000"/>
                </div>

                <div className={styles.generalSpacing}>
                    <BoldText text={"Add a points total + Associated reward (Note: points are not necessary)"} containerWidth={"250px"} size={"15px"} textColor="#8F8F8F"/>
                </div>

                {rewards.map((reward, index) => (
                    <div key={index} className={styles.generalSpacing}>
                        <div className={styles.activeChallengesContainer}>
                            <Textbox 
                                text="Points" 
                                containerWidth="100px"
                                type="number"
                                value={reward.points.toString()} 
                                onChange={(e) => handleRewardPointsChange(index, e.target.value)}  
                            />
                            <Textbox 
                                text="Reward Description" 
                                containerWidth="500px"
                                containerHeight="40px" 
                                value={reward.description} 
                                onChange={(e) => handleRewardDescriptionChange(index, e.target.value)} 
                                multiline={true}
                            />
                        </div>
                        <div className = {styles.addedMargin}>
                            <Button 
                                children="Remove" 
                                onClick={() => handleRemoveReward(index)}
                                containerWidth="100px"
                                variant="gray"
                            />
                        </div>
                    </div>
                ))}

                <div className={styles.generalSpacing}>
                    <Button 
                        children="Add Reward" 
                        onClick={handleAddReward}
                        containerWidth="150px"
                        variant="colorful"
                    />
                </div>

                <div className={styles.generalSpacing}>
                    <Table columns={["This", "is", "placeholder"]} data={table1Data} width="80%" height="200px"/>
                    {/* <Table columns={["Status", "Name"]} data={table2Data} /> */}
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
