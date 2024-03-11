import React, { useState, useMemo, useEffect } from "react";
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
import { TopBar } from "../../components/topBar";
import ManageCommunity from "../../pages/mygroups/manageCommunity.jsx";
import { successMessage } from "../../components/successMessage";
import SuccessMessage from "../../components/successMessage/successMessage";
import { axiosGetUserInfo, axiosGetOneCompanyInfo } from "../../utils/axios";
import { useAuth } from "../../hooks";

function Create() {
  const [showCard, setShowCard] = useState(false);
  const [activeComponent, setActiveComponent] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const {
    auth,
    userInfo,
    setUserInfo,
    currentCompanyInfo,
    setCurrentCompanyInfo,
  } = useAuth();
  const [companyId, setCompanyId] = useState(null);
  const [selectedCommunity, setSelectedCommunity] = useState("No Communities");

  // useEffect(() => {
  // const fetchData = async () => {
  // const accessToken = auth.accessToken;

  // try {
  //   const userInfo = await axiosGetUserInfo(accessToken);

  //   setUserInfo(userInfo);

  //   if (companyId) {
  //     const currentCompanyInfo = await axiosGetOneCompanyInfo(companyId);
  //     console.log("HJER")
  //     setCurrentCompanyInfo(currentCompanyInfo);
  //     // setSelectedCommunity(currentCompanyInfo);
  //   }
  // } catch (error) {
  //   console.log("useEffect on Create Error: ", error);
  // }
  // };

  // fetchData();
  // }, []);

  // useEffect(() => {
  //   if (userInfo && userInfo.companies) {
  //       const newAdminCompanies = userInfo.companies.filter(company => company.admin);

  //       setAdminCompanies(newAdminCompanies)
  //       console.log("newd", newAdminCompanies)
  //       if (newAdminCompanies.length > 0 && (!selectedCommunity || selectedCommunity == newAdminCompanies[0])) { //theoreticalyl can split this lol
  //           setSelectedCommunity(newAdminCompanies[0]); // Assuming you want to select the first admin company
  //           setCurrentCompanyInfo(newAdminCompanies[0])
  //           console.log(newAdminCompanies[0])
  //           setCompanyId(newAdminCompanies[0].CompanyId)
  //       } else if (newAdminCompanies.length > 0 && selectedCommunity != newAdminCompanies[0]) {
  //         //Do nothing because the handleCommunityChange takes care of it
  //         console.log("CUD",selectedCommunity)
  //       }
  //       else {
  //           setSelectedCommunity("No Communities");
  //       }
  //   } else {
  //       setSelectedCommunity("No Communities");
  //   }
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Assuming auth.accessToken is stable when this effect runs
        const accessToken = auth.accessToken;

        // Fetch user info first
        const userInfo = await axiosGetUserInfo(accessToken);
        setUserInfo(userInfo);

        // Determine admin companies and set selected community
        if (userInfo && userInfo.companies) {
          const newAdminCompanies = userInfo.companies.filter(
            (company) => company.admin
          );
          setAdminCompanies(newAdminCompanies);

          if (newAdminCompanies.length > 0) {
            //const selectedCompany = newAdminCompanies[0]; // or apply logic to find a specific one
            const currentCompanyInfo = await axiosGetOneCompanyInfo(
              newAdminCompanies[0].companyId
            );
            if (selectedCommunity == "No Communities") {
              setSelectedCommunity(newAdminCompanies[0]);
              console.log("I am here", newAdminCompanies[0]);

              // Fetch and set company info for the selected company
              // const currentCompanyInfo = await axiosGetOneCompanyInfo(newAdminCompanies[0].companyId);
              setCompanyId(newAdminCompanies[0].companyId);
              setCurrentCompanyInfo(currentCompanyInfo);
              await fetchAndSetCompanyInfo(newAdminCompanies[0].companyId);
            } else {
              await fetchAndSetCompanyInfo(companyId);
            }
          } else {
            setSelectedCommunity("No Communities");
            setCurrentCompanyInfo(null);
          }
        } else {
          setSelectedCommunity("No Communities");
          setCurrentCompanyInfo(null);
        }
      } catch (error) {
        console.log("Combined useEffect Error: ", error);
      }
    };

    fetchData();
  }, [showCard]); // Empty array means this runs once on component mount

  // useEffect(() => {
  //   const fetchData2 = async () => {

  //     const currentCompanyInfo = await axiosGetOneCompanyInfo(companyId);
  //     setCurrentCompanyInfo(currentCompanyInfo);
  //   };

  //   fetchData2();
  // }, []);
  // useEffect(() => {
  //   const fetchData2 = async () => {
  //     if (companyId) {
  //       try {
  //         const currentCompanyInfo = await axiosGetOneCompanyInfo(companyId);
  //         setCurrentCompanyInfo(currentCompanyInfo);
  //         console.log("HE")
  //       } catch (error) {
  //         console.error("Failed to fetch company info:", error);
  //       }
  //     }
  //   };

  //   fetchData2();
  // }, []);

  // const originalData = [

  // ];

  const [tableData, setTableData] = useState([]);

  // const table1Data = originalData.map(entry => ({
  //   ...entry,
  //   Send: <Button children="Send" onClick={() => handleSendClick()} />

  // }));

  const handleSendClick = () => {
    setIsPopupVisible(true);
  };

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCredentialCreated = () => {
    setShowCard(false); // Close the modal
    // Optionally, trigger re-render or fetch updated data here
    fetchAndSetCompanyInfo(companyId);
  };

  const handleButtonClick = (componentName) => {
    setActiveComponent(componentName);
    setShowCard(true);
  };

  const [adminCompanies, setAdminCompanies] = useState([]);

  const fetchAndSetCompanyInfo = async (cId) => {
    try {
      // Wait for the axios call to complete
      const currentCompanyInfo = await axiosGetOneCompanyInfo(cId);
      console.log("enw cid ", cId);
      console.log("Fetched Company Info", currentCompanyInfo);

      // Find the selected company object from adminCompanies

      // Update state with the fetched company info and selected company

      if (currentCompanyInfo && currentCompanyInfo.credentials) {
        console.log(
          "Current Company Credentials for Processed Credentials ",
          currentCompanyInfo.credentials[0]
        );
        const processedCredentials = currentCompanyInfo.credentials[0].map(
          (credential) => ({
            // Assuming the structure of your credential, adjust as necessary
            Name: credential.title,

            // Add more fields as needed
            Send: (
              <Button
                children="Send"
                onClick={() => handleSendClick(credential)}
              />
            ),
          })
        );

        setTableData(processedCredentials);
      } else {
        // Handle case where there are no credentials
        setTableData([]);
      }
    } catch (error) {
      console.error("Error fetching company info:", error);
      // Handle error (e.g., set error state, show notification)
    }
  };

  // const handleCommunityChange = (event) => {
  //   // console.log("Changing selected community to:", event.target.value);
  //   // setSelectedCommunity(event.target.value);
  //   // Additional logic to fetch and display data for the selected community

  //   setCompanyId(event.target.value);
  //   console.log("CID", companyId)

  //   const selected = adminCompanies.find((company => company.CompanyId === companyId))
  //   const currentCompanyInfo = await axiosGetOneCompanyInfo(companyId);

  //   setSelectedCommunity(selected);
  //   setCurrentCompanyInfo(selected);
  // };
  const handleCommunityChange = (event) => {
    const newCompanyId = event.target.value;
    // This sets the companyId state
    console.log("CID", event.target.value);
    console.log("CIDDDD", companyId);
    const selected = adminCompanies.find(
      (company) => company.companyId === newCompanyId
    );
    // const currentCompanyInfo = axiosGetOneCompanyInfo(companyId);
    setCurrentCompanyInfo(selected);
    setSelectedCommunity(selected || "No Communities"); // Fallback to null if not found
    setCompanyId(newCompanyId);

    fetchAndSetCompanyInfo(newCompanyId);
  };

  const filteredData = useMemo(() => {
    // Check if tableData exists and has length
    if (!tableData || tableData.length === 0) {
      return []; // Return an empty array if tableData doesn't exist or is empty
    }

    // Proceed with filtering if tableData exists
    return tableData.filter((item) =>
      item.Name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [tableData, searchTerm]); // Include tableData in the dependency array

  return (
    <div className={styles.createContainer}>
      <Background />
      <TopBar />

      <div className={styles.createTextContainer}>
        <BoldText
          text={"Create"}
          containerWidth={"250px"}
          size={"25px"}
          weight={"bold"}
          textColor="#000"
        />

        <BoldText
          text={
            typeof selectedCommunity === "string" &&
            selectedCommunity === "No Communities"
              ? "No Communities"
              : `Community Name: ${selectedCommunity.companyName}`
          }
          containerWidth={"250px"}
          size={"18px"}
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

        <div className={styles.boxWrapper}>
          <Card
            gradientBorder={true}
            borderRadius="5px"
            containerHeight="auto"
            containerWidth="200px"
          >
            <div className={styles.communityDropdown}>
              <select
                value={selectedCommunity.companyId}
                onChange={handleCommunityChange}
              >
                {
                  // The adminCompanies array is derived from userInfo and is kept up-to-date
                  adminCompanies.map((company) => (
                    <option key={company} value={company.companyId}>
                      {company.companyName}
                    </option>
                  ))
                }
              </select>
            </div>
          </Card>
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
                  columns={[" ", "Name", "Send"]}
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
            <div
              className={styles.overlayBackground}
              onClick={closePopup}
            ></div>
            <Card containerWidth="70%" containerHeight="70%">
              <ManageCommunity CompanyInfo={currentCompanyInfo} />
            </Card>
          </div>
        )}

        {showCard && (
          <div className={styles.overlayWrapper}>
            <div
              className={styles.overlayBackground}
              onClick={() => setShowCard(false)}
            ></div>
            {activeComponent === "CreateCredential" && (
              <CreateCredential
                currentCompanyId={companyId}
                onCredentialCreated={handleCredentialCreated}
              />
            )}
            {activeComponent === "CreateCommunity" && <CreateCommunity />}
          </div>
        )}
      </div>
    </div>
  );
}

export default Create;
