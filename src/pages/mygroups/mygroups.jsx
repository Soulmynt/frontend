import React, { useState, useMemo, useEffect } from "react";
import styles from "./mygroups.module.css";
import { Background } from "../../components/background";
import { Textbox } from "../../components/textbox";
import { Card } from "../../components/card";
import { BoldText } from "../../components/boldText";
import { Button } from "../../components/button";
import CreateChallenge from "./createChallenge.jsx";
import ManageCommunity from "./manageCommunity";
import RewardsLadder from "./rewardsLadder";
import { Searchbar } from "../../components/searchbar";
import { Table } from "../../components/table";
import { TopBar } from "../../components/topBar";
import { useAuth } from "../../hooks";
import moment from "moment-timezone";
import { axiosGetUserInfo, axiosGetOneCompanyInfo } from "../../utils/axios";

function MyGroups() {


    const [showCard, setShowCard] = useState(false);
    const [activeComponent, setActiveComponent] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [selectedName, setSelectedName] = useState('');

    const [selectedImageSrc, setSelectedImageSrc] = useState(null);
    const [selectedReviewText, setSelectedReviewText] = useState(null);
    const { auth, userInfo, setUserInfo, currentCompanyInfo, setCurrentCompanyInfo} = useAuth();
    const [companyId, setCompanyId] = useState(null);
    const [selectedCommunity, setSelectedCommunity] = useState("No Communities")
    const [adminCompanies, setAdminCompanies] = useState([]);
    const [originalData, setOriginalData] = useState([])

    // useEffect(() => {
    //     const fetchData = async () => {
    //       const accessToken = auth.accessToken;
    //       const userInfo = await axiosGetUserInfo(accessToken);
    //       setUserInfo(userInfo);
    //     };
    
    //     fetchData();
    //   }, []);

    //   useEffect(() => {
    //     if (userInfo && userInfo.companies) {
    //         const newAdminCompanies = userInfo.companies.filter(company => company.admin);
            
    //         setAdminCompanies(newAdminCompanies)
    //         if (newAdminCompanies.length > 0) {
    //             setSelectedCommunity(newAdminCompanies[0]); // Assuming you want to select the first admin company
    //         } else {
    //             setSelectedCommunity("No Communities");
    //         }
    //     } else {
    //         setSelectedCommunity("No Communities");
    //     }
    // }, [userInfo]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            // Assuming auth.accessToken is stable when this effect runs
            const accessToken = auth.accessToken;
            // console.log('Sxx')
      
            // Fetch user info first
            const userInfo = await axiosGetUserInfo(accessToken);
            setUserInfo(userInfo);
      
            // Determine admin companies and set selected community
            if (userInfo && userInfo.companies) {
              const newAdminCompanies = userInfo.companies.filter(company => company.admin);
              setAdminCompanies(newAdminCompanies);
      
              if (newAdminCompanies.length > 0) {
                //const selectedCompany = newAdminCompanies[0]; // or apply logic to find a specific one
                // const currentCompanyInfo = await axiosGetOneCompanyInfo(newAdminCompanies[0].companyId);

                if(selectedCommunity == "No Communities"){
                    // setSelectedCommunity(newAdminCompanies[0]);
                    
                    setCompanyId(newAdminCompanies[0].companyId)
                    // setCurrentCompanyInfo(currentCompanyInfo);
                    
                    // console.log("AS")
                    fetchAndSetCompanyInfo(newAdminCompanies[0].companyId)
                    // setOriginalData(getActiveChallenges(currentCompanyInfo))

                }
                else{
                    
                    fetchAndSetCompanyInfo(companyId);
                }
                
                // console.log("I am here", newAdminCompanies[0])
                
      
                // Fetch and set company info for the selected company
                
              } else {
                setSelectedCommunity("No Communities");
                // setCurrentCompanyInfo(null);
              }
            } else {
              fetchAndSetCompanyInfo(companyId);
            }

            // console.log("I am here", newAdminCompanies[0])

            // Fetch and set company info for the selected company
          } else {
            setSelectedCommunity("No Communities");
            // setCurrentCompanyInfo(null);
          }
        } else {
          setSelectedCommunity("No Communities");
          //   setCurrentCompanyInfo(null);
        }
      } catch (error) {
        console.log("Combined useEffect Error: ", error);
      }
    };

    fetchData();
  }, [showCard]); // Empty array means this runs once on component mount

  const handleImageClick = (imageSrc) => {
    setSelectedImageSrc(imageSrc);
    // Open a modal or overlay to display the image
    // You might need to implement this part based on your design
  };
  // const approveDenyClick = (action, rowIndex) => {
  //     if (action === 'approve') {
  //       console.log(`Approved submission at row ${rowIndex}`);
  //       // Handle approval logic here
  //     } else if (action === 'reject') {
  //       console.log(`Rejected submission at row ${rowIndex}`);
  //       // Handle rejection logic here
  //     }
  // };
  const approveDenyClick = async (action, rowIndex) => {
    const participantUserId = participantData[rowIndex].Participant; // Adjust as necessary
    const challengeId = selectedChallenge.id;
    if (action === "approve") {
      console.log(
        `Approved submission for user ${participantUserId} in challenge ${challengeId} at row ${rowIndex}`
      );
      // Call the API to approve the participant's submission
      await confirmParticipant(challengeId, participantUserId);
    } else if (action === "reject") {
      console.log(
        `Rejected submission for user ${participantUserId} in challenge ${challengeId} at row ${rowIndex}`
      );
      // Handle rejection logic here, potentially calling a similar API
    }
  };

  const confirmParticipant = async (challengeId, userId) => {
    const token = "YOUR_ACCESS_TOKEN"; // Get the token from your auth context or state management
    const payload = {
      token,
      challengeId,
      userId,
    };

    console.log(payload);

    // try {
    //     const response = await axios.post('/AcceptChallenge', payload);
    //     if (response.data.success) {
    //         console.log("Participant confirmation succeeded");
    //         // Update local state or UI as necessary
    //     }
    // } catch (error) {
    //     console.error('Error confirming participant:', error);
    //     // Handle errors and inform the user if something goes wrong
    // }
  };

  console.log(adminCompanies);

  // const [selectedCommunity, setSelectedCommunity] = useState("No communities");
  // const [adminCompanies, setAdminCompanies] = useState([]);
  const [isInitialized, setIsInitialized] = useState(false);

  // useEffect to update selectedCommunity when userInfo changes
  // useEffect(() => {
  //     const hasCompanies = userInfo.companies && userInfo.companies.length > 0;
  //     const newAdminCompanies = hasCompanies
  //         ? userInfo.companies.filter(company => company.admins?.includes(userInfo.handle))
  //         : [];

  //     setAdminCompanies(newAdminCompanies);

  //     if (!isInitialized || (adminCompanies.length > 0 && selectedCommunity === "You have not created any companies")) {
  //         setSelectedCommunity(
  //             newAdminCompanies.length > 0 ? newAdminCompanies[0].name : "You have not created any companies"
  //         );
  //         setIsInitialized(true); // Ensure this block doesn't run again unnecessarily
  //     }
  // }, [userInfo]); // Re-run when userInfo changes

  // const handleCommunityChange = (event) => {
  //     // console.log("Changing selected community to:", event.target.value);
  //     // setSelectedCommunity(event.target.value);
  //     // Additional logic to fetch and display data for the selected community
  //     const companyId = event.target.value
  //     const selected = adminCompanies.find((company => company._id === companyId))
  //     console.log("HEIG", selected)
  //     setSelectedCommunity(selected);
  // };
  const [originalData, setOriginalData] = useState([]);

  const fetchAndSetCompanyInfo = async (cId) => {
    try {
      // Wait for the axios call to complete
      const currentCompanyInfo = await axiosGetOneCompanyInfo(cId);
      console.log("enw cid ", cId);
      console.log("Fetched Company Info", currentCompanyInfo);

      setCurrentCompanyInfo(currentCompanyInfo);
      // setSelectedCommunity(currentCompanyInfo);
      console.log("Fetched selected Info", selectedCommunity);

      console.log("OG", originalData);

      // Find the selected company object from adminCompanies
      // const selected = adminCompanies.find(company => company.companyId === newCompanyId);

      // Update state with the fetched company info and selected company
      // setCurrentCompanyInfo(currentCompanyInfo);
      // setSelectedCommunity(selected || "No Communities"); // Fallback to null if not found
    } catch (error) {
      console.error("Error fetching company info:", error);
      // Handle error (e.g., set error state, show notification)
    }
  };

  const handleCommunityChange = (event) => {
    const newCompanyId = event.target.value;
    // setCompanyId(newCompanyId); // This sets the companyId state
    const selected = adminCompanies.find(
      (company) => company.companyId === newCompanyId
    );
    // const currentCompanyInfo = axiosGetOneCompanyInfo(companyId);
    // setCurrentCompanyInfo(selected);
    // setCurrentCompanyInfo(selected);
    setSelectedCommunity(selected || "No Communities");
    setCompanyId(newCompanyId);

    fetchAndSetCompanyInfo(newCompanyId);
  };

  //TODO: This is what I am using to fetch company DATA
  // const fetchData = async () => {
  //     try {
  //         // Replace with your actual API call
  //         const response = await axios.get('/your-endpoint');
  //         const specificCompanyData = response.data.userCompanyProfile;

  //         if (specificCompanyData) {
  //             const activeChallenges = getActiveChallenges(specificCompanyData);
  //             const scheduledChallenges = getScheduledChallenges(specificCompanyData);

  //             // Update your state or process the data as needed
  //             // setOriginalData(activeChallenges);
  //             // setScheduledData(scheduledChallenges);
  //         }
  //     } catch (error) {
  //         console.error('Error fetching data:', error);
  //         // Handle errors appropriately
  //     }
  // };

  // useEffect(() => {
  //     fetchData();
  // }, []); // Dependencies array can be adjusted based on when you need to refetch the data

  const getActiveChallenges = (selectedCommunity) => {
    // Process companyData to get active challenges
    // ...
    const now = moment().tz("America/New_York");
    // const specificCompanyData = response.userCompanyProfile;

    console.log("BEFoRE");

    if (!selectedCommunity || !selectedCommunity.challenges) return [];

    console.log("afetr");

    // console.log("SDNV", selectedCommunity)

    return selectedCommunity.challenges
      .filter((challenge) => {
        // Ensure the challenge dates are interpreted as Date objects
        const startDate = moment
          .tz(challenge.dateCreated, "America/New_York")
          .startOf("day");
        const endDate = moment
          .tz(challenge.dateExpires, "America/New_York")
          .endOf("day");

        // Check if the current date is within the active challenge period
        return now.isSameOrAfter(startDate) && now.isSameOrBefore(endDate);
      })
      .map((challenge) => {
        // Calculate time remaining as the difference between endDate and now
        const endDate = moment
          .tz(challenge.dateExpires, "America/New_York")
          .endOf("day");
        const timeRemaining = endDate - now;

        // Convert time remaining from milliseconds into a more readable format (e.g., hours)
        const hoursRemaining = Math.floor(timeRemaining / (1000 * 60 * 60));
        const minutesRemaining = Math.floor(
          (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
        );

        return {
          Name: challenge.name,
          Remaining: `${hoursRemaining} hrs ${minutesRemaining} mins`, // or more sophisticated formatting
          challengeData: challenge, // Keep the original challenge data for later use
        };
      })
      .sort((a, b) => a.Remaining - b.Remaining); // Sort based on time remaining
  };

  // const originalData = getActiveChallenges();

  const getScheduledChallenges = (companyData) => {
    // Process companyData to get scheduled challenges
    // ...
    const now = moment().tz("America/New_York");
    // const specificCompanyData = response.userCompanyProfile;

    if (!selectedCommunity || !selectedCommunity.challenges) return [];

    return selectedCommunity.challenges
      .filter((challenge) => {
        // Interpret the challenge start date as a Date object
        const startDate = moment
          .tz(challenge.dateCreated, "America/New_York")
          .startOf("day");

        // Check if the challenge start date is in the future
        return now.isBefore(startDate);
      })
      .map((challenge) => {
        // Calculate time until the challenge starts
        const startDate = moment
          .tz(challenge.dateCreated, "America/New_York")
          .startOf("day");
        const timeUntilStart = startDate - now;

        // Convert time until start from milliseconds to a more readable format
        const daysUntilStart = Math.floor(
          timeUntilStart / (1000 * 60 * 60 * 24)
        );
        const hoursUntilStart = Math.floor(
          (timeUntilStart % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );


    // useEffect to update selectedCommunity when userInfo changes
    // useEffect(() => {
    //     const hasCompanies = userInfo.companies && userInfo.companies.length > 0;
    //     const newAdminCompanies = hasCompanies
    //         ? userInfo.companies.filter(company => company.admins?.includes(userInfo.handle))
    //         : [];
        
    //     setAdminCompanies(newAdminCompanies);
    
    //     if (!isInitialized || (adminCompanies.length > 0 && selectedCommunity === "You have not created any companies")) {
    //         setSelectedCommunity(
    //             newAdminCompanies.length > 0 ? newAdminCompanies[0].name : "You have not created any companies"
    //         );
    //         setIsInitialized(true); // Ensure this block doesn't run again unnecessarily
    //     }
    // }, [userInfo]); // Re-run when userInfo changes

    // const handleCommunityChange = (event) => {
    //     // console.log("Changing selected community to:", event.target.value);
    //     // setSelectedCommunity(event.target.value);
    //     // Additional logic to fetch and display data for the selected community
    //     const companyId = event.target.value
    //     const selected = adminCompanies.find((company => company._id === companyId))
    //     console.log("HEIG", selected)
    //     setSelectedCommunity(selected);
    // };
    

    // let originalData = [];

    

    const fetchAndSetCompanyInfo = async (cId) => {
        try {
            // Wait for the axios call to complete
            const currentCompanyInfo = await axiosGetOneCompanyInfo(cId);
            console.log("enw cid ", cId);
            console.log("Fetched Company Info", currentCompanyInfo);
            
            setCurrentCompanyInfo(currentCompanyInfo);
            // setSelectedCommunity(currentCompanyInfo);
            console.log("Fetched selected Info", selectedCommunity);

            // setOriginalData(selectedCommunity.challenges)

            const active =  getActiveChallenges(currentCompanyInfo)
            console.log("ACTIVE", active)
            setOriginalData(active)
        
            

            
            console.log("OG", originalData)

            // Find the selected company object from adminCompanies
            // const selected = adminCompanies.find(company => company.companyId === newCompanyId);

            // Update state with the fetched company info and selected company
            // setCurrentCompanyInfo(currentCompanyInfo);
            // setSelectedCommunity(selected || "No Communities"); // Fallback to null if not found

          
        } catch (error) {
            console.error("Error fetching company info:", error);
            // Handle error (e.g., set error state, show notification)
        }

    };

    const specificCompanyData = response.userCompanyProfile;

    if (!specificCompanyData || !specificCompanyData.challenges) return [];

    return specificCompanyData.challenges
      .filter((challenge) => {
        // Convert the challenge's end date to a moment object and check if it's before the current time
        const endDate = moment
          .tz(challenge.dateExpires, "America/New_York")
          .endOf("day");
        return endDate.isBefore(now);
      })
      .map((challenge) => {
        // Format the end date for display
        const endDate = moment
          .tz(challenge.dateExpires, "America/New_York")
          .format("YYYY-MM-DD");

        return {
          Name: challenge.name,
          Ended: endDate, // Display the end date
          challengeData: challenge, // Keep the original challenge data for later use
        };
      })
      .sort((a, b) => moment(a.Ended).diff(moment(b.Ended))); // Sort the challenges based on their end date
  };


   
    //TODO: This is what I am using to fetch company DATA
    // const fetchData = async () => {
    //     try {
    //         // Replace with your actual API call
    //         const response = await axios.get('/your-endpoint');
    //         const specificCompanyData = response.data.userCompanyProfile;
    
    //         if (specificCompanyData) {
    //             const activeChallenges = getActiveChallenges(specificCompanyData);
    //             const scheduledChallenges = getScheduledChallenges(specificCompanyData);
    
    //             // Update your state or process the data as needed
    //             // setOriginalData(activeChallenges);
    //             // setScheduledData(scheduledChallenges);
    //         }
    //     } catch (error) {
    //         console.error('Error fetching data:', error);
    //         // Handle errors appropriately
    //     }
    // };
    
    // useEffect(() => {
    //     fetchData();
    // }, []); // Dependencies array can be adjusted based on when you need to refetch the data

    

    const getActiveChallenges = (selectedCommunity) => {
        // Process companyData to get active challenges
        // ...
        const now = moment().tz('America/New_York');
        // const specificCompanyData = response.userCompanyProfile;

        console.log("BEFoRE")

        

        if (!selectedCommunity || !selectedCommunity.challenges) return [];

        console.log("afetr")

        console.log("SDNV", selectedCommunity.challenges[0])

        const allChallenges = selectedCommunity.challenges[0]

        
    
        return allChallenges
            .filter(challenge => {
                // Ensure the challenge dates are interpreted as Date objects
                const startDate = moment.tz(challenge.effectiveDate, 'America/New_York').startOf('day');
                const endDate = moment.tz(challenge.dateExpires, 'America/New_York').endOf('day');
                console.log("CNAME", challenge)
                console.log("SD", challenge.effectiveDate, startDate.format())
                console.log("ED", challenge.dateExpires, endDate.format())
                console.log("Now", now.format())

                console.log("istrue", now.isSameOrAfter(startDate) && now.isSameOrBefore(endDate))

                

                

                
    
                // Check if the current date is within the active challenge period
                const isBetween = now.isBetween(startDate, endDate, null, '[]');
                return isBetween
            })
            .map(challenge => {
                // Calculate time remaining as the difference between endDate and now
                const endDate = moment.tz(challenge.dateExpires, 'America/New_York').endOf('day');
                const timeRemaining = endDate - now;
    
                // Convert time remaining from milliseconds into a more readable format (e.g., hours)
                const hoursRemaining = Math.floor(timeRemaining / (1000 * 60 * 60));
                const minutesRemaining = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));

                console.log("passed thru", challenge.name)
                
                return {
                    Name: challenge.name,
                    Remaining: `${hoursRemaining} hrs ${minutesRemaining} mins`, // or more sophisticated formatting
                    challengeData: challenge, // Keep the original challenge data for later use
                };
            })
            .sort((a, b) => a.Remaining - b.Remaining); // Sort based on time remaining
    };


  const [selectedChallenge, setSelectedChallenge] = useState(null);

  const handleReviewClick = (challenge) => {
    //TODO:
    //FIND THE CHALLENGE BY ID INSTEAD OF NAME

    console.log(challenge);
    setSelectedChallenge(challenge);
    setIsPopupVisible(true);
  };

  // When you want to display participant data for the selected challenge
  const participantData = selectedChallenge
    ? selectedChallenge.participants.map((participant) => ({
        Participant: participant.user,
        Submission: participant.proof.join(", "), // Assuming 'proof' might be an array
        Review: "g", // Or any other data you need here

    })) : [];

    // const originalData = [
    //     { Remaining: "5 hrs", Name: "Challenge 1" },
    //     { Remaining: "8 hrs", Name: "Challenge 2" },
    //     // ... more data ...
    // ];

    console.log("OGDATE", originalData)
    const table1Data = originalData.map(entry => ({
        ...entry,
        Submissions: <Button children="Review" onClick={() => handleReviewClick(entry.challengeData)} />
      }));

      console.log("T1data", table1Data)

    //   const handleReviewClick = (name) => {
    //     setSelectedName(name);
    //     setIsPopupVisible(true);
    //   };

      const closePopup = () => {
        setIsPopupVisible(false);
      };
     
    // const submissionData = [
    //     { Participant: "@xyz", Submission: "John Doe", Review:"g"},
    //     { Participant: "@abc", Submission: "Img", Review:"g"},
    // ];


    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
      };
      
    
    const filteredData = useMemo(() => {
        // Check if tableData exists and has length
        if (!table1Data || table1Data.length === 0) {
          return []; // Return an empty array if tableData doesn't exist or is empty
        }
      
        // Proceed with filtering if tableData exists
        return table1Data.filter(item =>
          item.Name.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }, [table1Data, searchTerm]); // Include tableData in the dependency array

    // const handleSearchChange = (e) => {
    //     setSearchTerm(e.target.value);
    //   };
    
    //   const filteredData = useMemo(() => {
    //     return table1Data.filter(
    //       (item) =>
    //         item.Name.toLowerCase().includes(searchTerm.toLowerCase())
       
    //     );
    //   }, [searchTerm]);

      
    

    const handleButtonClick = (componentName) => {
        setActiveComponent(componentName);
        setShowCard(true);
      };

    return (
        <div className = {styles.dashboardContainer}>
            <Background/>
            <TopBar/>
            
            <div className={styles.myGroupsTextContainer}>
                <BoldText
                text={"My Groups"}
                containerWidth={"250px"}
                size={"25px"}

                weight={"bold"}
              />
            </div>

            <div className={styles.generalSpacing}>
              <BoldText text={`${selectedChallenge.description}`} />
            </div>

            <div className={styles.generalSpacing}>
              <BoldText text={`${selectedChallenge.points} points`} />
            </div>

            {/* <div className={styles.generalSpacing}>
                    <Table
                    columns={[" ", "Participant", "Submission", "Review"]}
                    data={submissionData}
                    width="97%"
                    height="auto"
                    onImageClick={handleImageClick}
                    onReviewClick={approveDenyClick}

                    />

                </div> */}
            <div className={styles.generalSpacing}>
              <Table
                columns={[" ", "Participant", "Submission", "Review"]}
                data={participantData}
                width="97%"
                height="auto"
                onImageClick={handleImageClick} // Define this function as needed
                onReviewClick={approveDenyClick} // Define this function as needed
              />
            </div>

            <div className={styles.generalSpacing}>
              <Button containerWidth="20%" children={"Close"} />
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
        {/* <div className={styles.rewardsLadderButton}>
                    <Button
                    children={"Rewards Ladder"}
                    variant="colorful-button"
                    containerWidth={"250px"}
                    onClick={() => handleButtonClick("RewardsLadder")}
                    />
            </div> */}

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
                  columns={[" ", "Remaining", "Name", "Submissions"]}
                  data={filteredData}
                  width="97%"
                  height="auto"
                />
              ) : (
                <p>No results found</p>
              )}
            </div>
            {/* <div className={styles.generalSpacing}>
                            {originalData.length > 0 ? (
                            <Table
                            columns={[" ", "Remaining", "Name", "Submissions"]}
                            data={originalData.map(entry => ({
                            ...entry,
                            Submissions: <Button children="Review" onClick={() => handleReviewClick(entry.Name)} />
                            }))}
                            width="97%"
                            height="auto"
                            />
                            ) : (
                            <p>No active challenges found</p>
                            )}
                        </div> */}
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

            <div className={styles.generalSpacing}>
              {completedChallenges.length > 0 ? (
                <Table
                  columns={[" ", "Ended", "Name"]}
                  data={completedChallenges}
                  width="97%"
                  height="auto"
                />
              ) : (
                <p>No results found</p>
              )}
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

            <div className={styles.generalSpacing}>
              {scheduledData.length > 0 ? (
                <Table
                  columns={[" ", "Starts", "Name"]}
                  data={scheduledData}
                  width="97%"
                  height="auto"
                />
              ) : (
                <p>No results found</p>
              )}
            </div>
          </Card>
        </div>
        {/* <div className={styles.draftsCard}>
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
                </div>  */}
        {showCard && (
          <div className={styles.overlayWrapper}>
            <div
              className={styles.overlayBackground}
              onClick={() => setShowCard(false)}
            ></div>
            {activeComponent === "CreateChallenge" && (
              <CreateChallenge
                selectedCompanyId={selectedCommunity.companyId}
              />
            )}
            {activeComponent === "ManageCommunity" && (
              <ManageCommunity
                selectedCompanyId={selectedCommunity.companyId}
                CompanyInfo={selectedCommunity}
              />
            )}
            {activeComponent === "RewardsLadder" && <RewardsLadder />}
          </div>
        )}
      </div>
    </div>
  );
}

export default MyGroups;
