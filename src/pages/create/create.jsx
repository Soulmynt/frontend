import React, { useState, useMemo } from "react";
import styles from "./create.module.css";
import { Background } from "../../components/background";
// import { Textbox } from '../../components/textbox'
import { Button } from "../../components/button";
import { Card } from "../../components/card";
import CreateCredential from "./createCredential.jsx";
import CreateCommunity from "./createCommunity.jsx";
import { BoldText } from "../../components/boldText";
import { Table } from "../../components/table";
import { Searchbar } from "../../components/searchbar";
import { TopBar } from '../../components/topBar'
import ManageCommunity from "../../pages/mygroups/manageCommunity.jsx";
import { successMessage } from "../../components/successMessage";
import SuccessMessage from "../../components/successMessage/successMessage";

function Create() {
  const [showCard, setShowCard] = useState(false);
  const [activeComponent, setActiveComponent] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const originalData = [
    { Temp: "", Date: "2023-08-15", Name: "John Doe" },
    { Temp: "", Date: "2023-08-14", Name: "Jane Smith" },
    { Temp: "", Date: "2023-08-15", Name: "John Doe" },
    { Temp: "", Date: "2023-08-14", Name: "Jane Smith" },
    // ... more data
  ];

  const table1Data = originalData.map(entry => ({
    ...entry,
    Send: <Button children="Send" onClick={() => handleSendClick()} />

  }));

  const handleSendClick = () => {
    setIsPopupVisible(true);
  };

  const closePopup = () => {
    setIsPopupVisible(false);
  };

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
    <div className={styles.createContainer}>
      <Background />
      < TopBar />

      
      
      <div className={styles.createTextContainer}>
        <BoldText
          text={"Create"}
          containerWidth={"250px"}
          size={"25px"}
          weight={"bold"}
          textColor="#000"
        />
      </div>
      <div className={styles.createGrid}>
        <div className={styles.createCredentialButton}>
          <Button
            children={"Create Credential"}
            variant="colorful-button"
            containerWidth={"250px"}
            onClick={() => handleButtonClick("CreateCredential")}
          />
        </div>
 
        <div className={styles.createCommunitiesButton}>
          <Button
            children={"Create Community"}
            variant="colorful-button"
            containerWidth={"250px"}
            onClick={() => handleButtonClick("CreateCommunity")}
          />
        </div>

        <div className={styles.recentCredentialsCard}>
          <Card>
            <div className={styles.generalSpacing}>
              <BoldText
                text={"Recent Credentials "}
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
                  columns={[" ", "Date", "Name", "Send"]}
                  data={filteredData}
                  width="97%"
                  height="auto"
                />
              ) : (
                <p>No results found</p> // You can style this message as needed
              )}

              {/* <Table columns={[" ","Date", "Status", "Name"]} data={filteredData} width="97%" height="auto"/> */}
            </div>
          </Card>
        </div>

        {/* <div className={styles.recentCommunitiesCard}>
          <Card />
        </div>

        <div className={styles.sendCredentialsCard}>
          <Card />
        </div> */}


        {isPopupVisible && (
            <div className={styles.overlayWrapper}>
            <div className={styles.overlayBackground} onClick={closePopup}></div>
                <Card
                containerWidth="70%"
                containerHeight = '70%'
                
                >

                <ManageCommunity/>

                
                

                

                </Card>
            </div>
            )}

        {showCard && (
          <div className={styles.overlayWrapper}>
            <div
              className={styles.overlayBackground}
              onClick={() => setShowCard(false)}
            ></div>
            {activeComponent === "CreateCredential" && <CreateCredential />}
            {activeComponent === "CreateCommunity" && <CreateCommunity />}
          </div>
        )}
      </div>
    </div>
  );
}

export default Create;
