import React, { useState, useMemo } from 'react';
import styles from "./mygroups.module.css"
import {Background} from '../../components/background'
import { Textbox } from '../../components/textbox'
import { Card } from '../../components/card';
import { BoldText } from '../../components/boldText';
import { Button } from '../../components/button';
import CreateChallenge from "./createChallenge.jsx";
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
    const handleReviewClick = (action, rowIndex) => {
        if (action === 'approve') {
          console.log(`Approved submission at row ${rowIndex}`);
          // Handle approval logic here
        } else if (action === 'reject') {
          console.log(`Rejected submission at row ${rowIndex}`);
          // Handle rejection logic here
        }
      };


    const createRewardButton = (name) => (
    <Button children="Reward" onClick={() => console.log(`Reward ${name}`)} />
    );
    const originalData = [
        { Date: "2023-08-15", Name: "John Doe" },
        { Date: "2023-08-14", Name: "Jane Smith" },
        // ... more data ...
    ];

    const table1Data = originalData.map(entry => ({
        ...entry,
        Reward: <Button children="Reward" onClick={() => handleRewardClick(entry.Name)} />
      }));

      const handleRewardClick = (name) => {
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




    // const table1Data = [
    //     { Date: "2023-08-15", Name: "John Doe", Reward: <Button children="Reward" onClick={() => console.log('Reward Jane Smith')} />},
    //     { Date: "2023-08-14", Name: "Jane Smith", Reward: <Button children="Reward" onClick={() => console.log('Reward Jane Smith')} /> },
    //     // ... more data
    // ];

    // const table1DataWithButtons = table1Data.map(row => ({
    //     ...row,
    //     Action: createRewardButton(row.Name)
    //   }));

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

    //   const tableDataWithButton = useMemo(() => {
    //     return filteredData.map(item => ({
    //       ...item,
    //       Reward: (
    //         <Button
    //           children="Reward"
    //           variant="colorful-button"
    //           onClick={() => console.log("Reward button clicked for", item)}
    //           // Add other props and styling as needed
    //         />
    //       )
    //     }));
    //   }, [filteredData]);
      
    

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
                <BoldText text={selectedName} />
                <Table
                columns={[" ", "Participant", "Submission", "Review"]}
                data={submissionData}
                width="97%"
                height="auto"
                onImageClick={handleImageClick}
                onReviewClick={handleReviewClick}

                />



                
                <button onClick={closePopup}>Close</button>
                </Card>
            </div>
            )}
            

            <div className={styles.createChallengeButton}>
                    <Button
                    children={"Create Challenge"}
                    variant="colorful-button"
                    containerWidth={"250px"}
                    onClick={() => handleButtonClick("CreateChallenge")}
                    />
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
                            text="Search Credentials"
                            containerWidth="93.5%"
                            onSearchChange={handleSearchChange}
                            />
                        </div>

                        <div className={styles.generalSpacing}>
                            {filteredData.length > 0 ? (
                            <Table
                            columns={[" ", "Date", "Name", "Reward"]}
                            data={filteredData}
                            width="97%"
                            height="auto"
                            />
                            ) : (
                            <p>No results found</p> // You can style this message as needed
                            )}
                            {/* <Table
                            columns={["", "Name", "Reward"]} 
                            width = "97%"
                            height = "auto"
                            data={filteredData.map((item, index) => (
                            {
                            ...item,
                            Reward: (
                            <Button children="Reward" onClick={() => console.log(item)} /> 
                            )
                            }
                            ))} 
                            /> */}

                        {/* <Table columns={[" ","Date", "Status", "Name"]} data={filteredData} width="97%" height="auto"/> */}
                        </div>                        
                


                    </Card>
                </div>
                <div className={styles.completedChallengesCard}>
                    <Card/>
                </div>
                <div className={styles.scheduleChallengesCard}>
                    <Card  />
                </div>
                <div className={styles.draftsCard}>
                    <Card />
                </div> 
                {showCard && (
                    <div className={styles.overlayWrapper}>
                    <div
                    className={styles.overlayBackground}
                    onClick={() => setShowCard(false)}
                    ></div>
                    {activeComponent === "CreateChallenge" && <CreateChallenge />}
                    </div>
                )}        
            </div>
        </div>
    );
}

export default MyGroups;

