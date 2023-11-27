import React, { useState, useMemo } from 'react';
import styles from "./mygroups.module.css"
import {Background} from '../../components/background'
import { Textbox } from '../../components/textbox'
import { Card } from '../../components/card';
import { BoldText } from '../../components/boldText';
import { Button } from '../../components/button';
import CreateChallenge from "./createChallenge.jsx";
import ManageCommunity from './manageCommunity';
import RewardsLadder from './rewardsLadder';
import { Searchbar } from '../../components/searchbar';
import { Table } from '../../components/table';

function MyGroups() {
    const [showCard, setShowCard] = useState(false);
    const [activeComponent, setActiveComponent] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [selectedName, setSelectedName] = useState('');

    const [selectedImageSrc, setSelectedImageSrc] = useState(null);
    const [selectedReviewText, setSelectedReviewText] = useState(null);

    const handleImageClick = (imageSrc) => {
        setSelectedImageSrc(imageSrc);
        // Open a modal or overlay to display the image
        // You might need to implement this part based on your design
    };
    const approveDenyClick = (action, rowIndex) => {
        if (action === 'approve') {
          console.log(`Approved submission at row ${rowIndex}`);
          // Handle approval logic here
        } else if (action === 'reject') {
          console.log(`Rejected submission at row ${rowIndex}`);
          // Handle rejection logic here
        }
      };


    const originalData = [
        { Date: "2023-08-15", Name: "Challenge 1" },
        { Date: "2023-08-14", Name: "Challenge 2" },
        // ... more data ...
    ];

    const table1Data = originalData.map(entry => ({
        ...entry,
        Submissions: <Button children="Review" onClick={() => handleReviewClick(entry.Name)} />
      }));

      const handleReviewClick = (name) => {
        setSelectedName(name);
        setIsPopupVisible(true);
      };

      const closePopup = () => {
        setIsPopupVisible(false);
      };
     
    const submissionData = [
        { Participant: "@xyz", Submission: "John Doe", Review:"g"},
        { Participant: "@abc", Submission: "Img", Review:"g"},
    ];




    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
      };
    
      const filteredData = useMemo(() => {
        return table1Data.filter(
          (item) =>
            item.Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.Date.toLowerCase().includes(searchTerm.toLowerCase()) 
        );
      }, [searchTerm]);

      
    

    const handleButtonClick = (componentName) => {
        setActiveComponent(componentName);
        setShowCard(true);
      };

    return (
        <div className = {styles.dashboardContainer}>
            <Background/>
            
            <div className={styles.myGroupsTextContainer}>
                <BoldText
                text={"My Groups"}
                containerWidth={"250px"}
                size={"25px"}
                weight={"bold"}
                textColor="#000"
                />
            </div>
            {isPopupVisible && (
            <div className={styles.overlayWrapper}>
            <div className={styles.overlayBackground} onClick={closePopup}></div>
                <Card
                containerWidth="70%"
                containerHeight = '70%'
                
                >

                
                <div className={styles.generalSpacing}>
                <BoldText text={`Viewing submissions for "${selectedName}"`} weight={'bold'} />
                </div>

                <div className={styles.generalSpacing}>
                    <BoldText text={`Add Challenge Description here + points total (from backend) + associated NFT`} weight={'bold'} />
                </div>


                <div className={styles.generalSpacing}>
                <Table
                columns={[" ", "Participant", "Submission", "Review"]}
                data={submissionData}
                width="97%"
                height="auto"
                onImageClick={handleImageClick}
                onReviewClick={approveDenyClick}

                />

              


                </div>
                <div className={styles.generalSpacing}>
                    <Button
                    containerWidth="20%"
                    children={"Close"}
                    
                    />
                </div>



                

                </Card>
            </div>
            )}
            

            <div className={styles.myGroupsHotButtonsContainer}>
            <div className={styles.createChallengeButton}>
                    <Button
                    children={"Create Challenge"}
                    variant="colorful-button"
                    containerWidth={"250px"}
                    onClick={() => handleButtonClick("CreateChallenge")}
                    />
            </div>
            <div className={styles.manageCommunityButton}>
                    <Button
                    children={"Manage Community"}
                    variant="colorful-button"
                    containerWidth={"250px"}
                    onClick={() => handleButtonClick("ManageCommunity")}
                    />
            </div>
            <div className={styles.rewardsLadderButton}>
                    <Button
                    children={"Rewards Ladder"}
                    variant="colorful-button"
                    containerWidth={"250px"}
                    onClick={() => handleButtonClick("RewardsLadder")}
                    />
            </div>
            </div>
            
            <div className={styles.myGroupsGrid}>
                
                <div className={styles.currentChallengesCard}>
                    
                    <Card>
                        <div className={styles.generalSpacing}>
                            <BoldText
                            text={"Current Challenges "}
                            containerWidth={"250px"}
                            size={"24px"}
                            weight={"bold"}
                            textColor="#000"
                            />
                        </div>
                        <div className={styles.generalSpacing}>
                            <Searchbar
                            text="Search Challenges"
                            containerWidth="93.5%"
                            onSearchChange={handleSearchChange}
                            />
                        </div>

                        <div className={styles.generalSpacing}>
                            {filteredData.length > 0 ? (
                            <Table
                            columns={[" ", "Date", "Name", "Submissions"]}
                            data={filteredData}
                            width="97%"
                            height="auto"
                            />
                            ) : (
                            <p>No results found</p> 
                            )}
                          
                        </div>                        
                


                    </Card>
                </div>
                <div className={styles.completedChallengesCard}>
                    <Card>
                        <div className={styles.generalSpacing}>
                            <BoldText
                            text={"Completed Challenges "}
                            containerWidth={"250px"}
                            size={"24px"}
                            weight={"bold"}
                            textColor="#000"
                            />
                        </div>


                    </Card>
                </div>
                <div className={styles.scheduleChallengesCard}>
                    <Card>
                        <div className={styles.generalSpacing}>
                            <BoldText
                            text={"Scheduled Challenges "}
                            containerWidth={"250px"}
                            size={"24px"}
                            weight={"bold"}
                            textColor="#000"
                            />
                        </div>



                    </Card>
                </div>
                <div className={styles.draftsCard}>
                <Card>
                        <div className={styles.generalSpacing}>
                            <BoldText
                            text={"Manage Community "}
                            containerWidth={"250px"}
                            size={"24px"}
                            weight={"bold"}
                            textColor="#000"
                            />
                        </div>



                    </Card>
                </div> 
                {showCard && (
                    <div className={styles.overlayWrapper}>
                    <div
                    className={styles.overlayBackground}
                    onClick={() => setShowCard(false)}
                    ></div>
                    {activeComponent === "CreateChallenge" && <CreateChallenge />}
                    {activeComponent === "ManageCommunity" && <ManageCommunity />}
                    {activeComponent === "RewardsLadder" && <RewardsLadder />}
                    </div>
                )}        
            </div>
        </div>
    );
}

export default MyGroups;

