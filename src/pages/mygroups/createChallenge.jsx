import React, { useState, useMemo } from 'react';
import { useNavigate } from "react-router-dom";
import styles from "./createChallenge.module.css"
import { Card } from '../../components/card';
import { BoldText } from '../../components/boldText';
import { Button } from '../../components/button';
import { Textbox } from '../../components/textbox';
import { Checkbox } from '../../components/checkbox';
import { Table } from '../../components/table';
import { Calendar } from '../../icons/Calendar';
import { Searchbar } from '../../components/searchbar';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useAuth } from "../../hooks";
import { axiosCreateChallenge } from '../../utils/axios';


const CreateChallenge = ({selectedCompanyId}) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [isHovered, setIsHovered] = useState(false);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    // const [challengeDescription, setChallengeDescription] = useState('');
    // const [challengeName, setChallengeName] = useState('');
    const [tokenAmount, setTokenAmount] = useState("");
    const [pointsTotal, setPointsTotal] = useState("");
    const [questions, setQuestions] = useState([]);
    const [resumeRequired, setResumeRequired] = useState(false);
    const [paidCommunity, setPaidCommunity] = useState(false);
    const [openCommunity, setOpenCommunity] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [challenges, setChallenges] = useState([]);
    const [rewards, setRewards] = useState([]);
    const { auth } = useAuth();
    const navigate = useNavigate();
    const [table1Data, setTable1Data] = useState([
        { Name: "Community A", Eligible: "YE", isChecked: false },
        { Name: "Community B", Eligible: "Inactive", isChecked: false },
        // ... more data
    ]);

    console.log('CJHA;;', challenges)

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const [table2Data, setTable2Data] = useState([
        { Name: "Credential A", Send: "YE", isChecked: false },
        { Name: "Credential B", Send: "Inactive", isChecked: false },
        // ... more data
    ]);


    
    const filteredData = useMemo(() => {
        return table2Data.filter(
          (item) =>
            item.Name.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }, [searchTerm]);


    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    // const [startTime, setStartTime] = useState(new Date());
    // const [endTime, setEndTime] = useState(new Date());

    const handleStartChange = (date) => {
        setStartDate(date);
    };
    const handleEndChange = (date) => {
        setEndDate(date);
    };

    function formatDateToYYYYMMDD(date) {
        const year = date.getFullYear();
        const month = date.getMonth() + 1; // getMonth() returns 0-11
        const day = date.getDate();
      
        // Pad the month and day with leading zeros if necessary
        const formattedMonth = month.toString().padStart(2, '0');
        const formattedDay = day.toString().padStart(2, '0');
      
        return `${year}-${formattedMonth}-${formattedDay}`;
      }

    // const handleStartTimeChange = (date) => {
    //     setStartTime(date);
    // };
    
    // const handleEndTimeChange = (date) => {
    //     setEndTime(date);
    // };

    const handleSubmitClick = async () => {
        // Example logic: Check if both name and description are filled
        const formattedStartDate = formatDateToYYYYMMDD(startDate);
        const formattedEndDate = formatDateToYYYYMMDD(endDate);
        if (challenges && challenges[0].challengeName && challenges[0].challengeDescription) {
          const accessToken = auth.accessToken;
          const challengeObject = {
            name: challenges[0].challengeName, // Currently since no image upload is implemented, this is empty
            company: selectedCompanyId,
            points: challenges[0].points,
            effectiveDate: formattedStartDate, 
            dateExpires: formattedEndDate, 
            credentialArray: [],
            tokenReward: tokenAmount,
            
          };
          try {
            let data = await axiosCreateChallenge(accessToken, challengeObject);
            if (data.status === 200) {
              console.log("success");
    
              setSelectedImage(null);
              setName("");
              setDescription("");
              setQuestions([]);
              setOpenCommunity(false);
              navigate("/managechallenges");
            }
          } catch (e) {
            console.log({ error: e });
          }
    
          // ... other logic
        } else {
          console.log("Please fill out all required fields.");
        }
      };
    



    const CalendarCustomInput = ({ value, onClick }) => (
        <button onClick={onClick} className={styles.calendarIcon}>
          <Calendar />
        </button>
    );

    const CalendarCustomInputEnd = ({ value, onClick }) => (
        <button onClick={onClick} className={styles.calendarIcon}>
          <Calendar />
        </button>
    );



    const handleCheckboxChange = (index, isChecked) => {
        const updatedTable1Data = [...table1Data];
        

        updatedTable1Data[index].isChecked = isChecked;
        
        setTable1Data(updatedTable1Data);
        

    };

    const handleTokenAmountChange = (e) => {
        const value = e.target.value;
        if (value === "") {
            setTokenAmount(0);
        } else {
            setTokenAmount(value);
        }
    };


    const handleCheckboxChangeForCredentials = (index, isChecked) => {
        const updatedTable2Data = [...table2Data];
        updatedTable2Data[index].isChecked = isChecked;
        setTable2Data(updatedTable2Data);

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


    




        
    return (
        <div className={styles.createCredentialContainer}>
            

            <Card positionType='relative' containerWidth='800px' containerHeight='1250px'>
                <div className = {styles.createCommunityText}>
                    <BoldText text={"Create Challenge"} containerWidth={"250px"} size={"25px"} weight={"bold"} textColor="#000"/>
                </div>

                
                
                
              

    

                <div className = {styles.addedMargin}>

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
                    {challenges.length < 1 && (
                        <Button 
                            children="Add Challenge" 
                            onClick={handleAddChallenge}
                            containerWidth="200px"
                            variant="colorful"
                        />
                    )}
                </div>

                    

                </div>

               

                {/* <div className={styles.generalSpacing}>
                    <BoldText text={"Eligibility"} containerWidth={"250px"} size={"15px"} weight={"bold"} textColor="#000"/>
                </div>

                <div className={styles.generalSpacing}>
                    <BoldText text={"Select individuals/communities that are eligible to participate in the challenge"} 
                    containerWidth={"250px"} 
                    size={"15px"} 
                    textColor="#8F8F8F"/>
                </div> */}

                {/* <div className={styles.generalSpacing}>
                    <Table 
                        columns={["", "Name", "Eligible"]} 
                        data={table1Data.map((item, index) => (
                        {
                        ...item,
                        Eligible: (
                        <Checkbox 
                            isChecked={item.isChecked} 
                            onCheckChange={(isChecked) => handleCheckboxChange(index, isChecked)} 
                        />
                        )
                        }
                        ))} 
                        width="80%"
                    />
                    
                   
                </div> */}

                <div className={styles.generalSpacing}>
                    <BoldText text={"Rewards"} containerWidth={"250px"} size={"15px"} weight={"bold"} textColor="#000"/>
                </div>

                <div className={styles.generalSpacing}>
                    <BoldText text={"Choose NFTs or Tokens to send that will be automatically sent at the completion/accepted review of the challenge (in addition to the points above)"} 
                    containerWidth={"250px"} 
                    size={"15px"} 
                    textColor="#8F8F8F"/>
                </div>

                <div className={styles.generalSpacing}>
                            <Searchbar
                            text="Search Credentials"
                            containerWidth="77%"
                            onSearchChange={handleSearchChange}
                            />
                </div>


                <div className={styles.generalSpacing}>
                    {filteredData.length > 0 ? (
                        <Table 
                        columns={["", "Name", "Send"]} 
                        data={filteredData.map((item, index) => (
                        {
                        ...item,
                        Send: (
                        <Checkbox 
                            isChecked={item.isChecked} 
                            onCheckChange={(isChecked) => handleCheckboxChangeForCredentials(index, isChecked)} 
                        />
                        )
                        }
                        ))} 
                        width="80%"
                    />

                    ) : (
                        <p>No results found</p> 
                    )}

                </div>

                <div className={styles.generalSpacing}>
                    <BoldText text={"Tokens"} containerWidth={"250px"} size={"15px"} weight={"bold"} textColor="#000"/>
                </div>

                <div className={styles.tokenReward}>
                
                    <div className={styles.generalSpacing}>
                        <Textbox 
                            text="Amount" 
                            containerWidth="250px"
                            type="number"
                            value={tokenAmount === Infinity ? "" : tokenAmount} 
                            onChange={handleTokenAmountChange}  
                        
                            
                        />
                    </div>
                    
                    <div className={styles.generalSpacing}>
                        <BoldText 
                            text="USDC" 
                            containerWidth="250px"
                            weight = "bold"

                            // type="number"
                            
                        
                            
                        />
                    </div>

                    
                </div>


                    

        
                   
                



                <div className={styles.generalSpacing}>
                    <BoldText text={"Schedule"} containerWidth={"250px"} size={"15px"} weight={"bold"} textColor="#000"/>
                </div>

                <div className={styles.generalSpacing}>
                    <BoldText text={"Schedule the challenge for now or in the future (leave end empty for no end time)"} 
                    containerWidth={"250px"} 
                    size={"15px"} 
                    textColor="#8F8F8F"/>
                </div>
                
                <div className={styles.generalSpacing}>
                    <div className={styles.gradientBorderBox}>
                            <div className={styles.gradientBorderBoxInner}>
                                <div className={styles.generalSpacingPad}>
                                    <BoldText text={"Starts"} 
                                    containerWidth={"250px"} 
                                    size={"15px"} 
                                    textColor="#8F8F8F"/>

                                    <div className = {styles.dateTimeContainer}>
                                    <div className={styles.grayBorderBox}>
                                        
                                        <div className={styles.generalSpacing}>
                                            
                                            <BoldText
                                                text={startDate ? startDate.toLocaleDateString("en-US", {
                                                year: 'numeric',
                                                month: '2-digit',
                                                day: '2-digit'
                                                }) : "Starts"}
                                                
                                                size={"15px"}
                                                textColor="#000"
                                            />
                                        </div>
                                        <div  className = {styles.datePickerContainer}>
                                            <DatePicker
                                                selected={startDate}
                                                onChange={handleStartChange}
                                                dateFormat="MM/dd/yyyy"
                                                customInput={<CalendarCustomInput />}
                                            />
                                        </div>


                                    </div>

                                    {/* <div className={styles.grayTimeBorderBox}>
                                        <DatePicker
                                            className={styles.timeContainer}
                                            // selected={startTime}
                                            // onChange={handleStartTimeChange}
                                            showTimeSelect
                                            showTimeSelectOnly
                                            timeIntervals={15} // The interval of time options. In this case, every 15 minutes.
                                            timeCaption="Time"
                                            dateFormat="h:mm aa" // Format for 12-hour clock notation with AM/PM.
                                        />
                                    </div> */}

                                    </div>

                                    <div>
                                        <BoldText text={"Ends"} 
                                        containerWidth={"250px"} 
                                        size={"15px"} 
                                        textColor="#8F8F8F"/>



                                    </div>

                                    
                                    <div className={styles.dateTimeContainer}>

                                        <div className={styles.grayBorderBox}>
                                            <div className={styles.generalSpacing}>
                                                <BoldText
                                                    text={endDate ? endDate.toLocaleDateString("en-US", {
                                                    year: 'numeric',
                                                    month: '2-digit',
                                                    day: '2-digit'
                                                    }) : "Ends"}
                                                    
                                                    size={"15px"}
                                                    textColor="#000"
                                                />
                                            </div>
                                            <div  className = {styles.datePickerContainer}>
                                                <DatePicker
                                                    selected={endDate}
                                                    onChange={handleEndChange}
                                                    dateFormat="MM/dd/yyyy"
                                                    customInput={<CalendarCustomInput />}
                                                />
                                            </div>
                                        
                                        </div>

                                        {/* <div className={styles.grayTimeBorderBox}>
                                            <DatePicker
                                                className={styles.timeContainer}
                                                // selected={endTime}
                                                // onChange={handleEndTimeChange}
                                                showTimeSelect
                                                showTimeSelectOnly
                                                timeIntervals={15} // The interval of time options. In this case, every 15 minutes.
                                                timeCaption="Time"
                                                dateFormat="h:mm aa" // Format for 12-hour clock notation with AM/PM.
                                            />
                                        </div> */}

                                    </div>

                                    



                                </div>
    
                            </div>

                    </div>
                </div>


                


                <div className={styles.continueButtonContainer}>
                    
                    {/* <Button 
                        children="Draft" 
                        // disabled={!name || !description} 
                        // onClick={handleContinueClick}
                        containerWidth="150px"
                        variant="colorful"
                    /> */}
                    <Button 
                        children="Publish" 
                        disabled={challenges?.length == 0 
                            || challenges[0].challengeName == "" 
                            || challenges[0].challengeDescription == ""
                    } 
                        onClick={handleSubmitClick}
                        containerWidth="150px"
                        variant="colorful"
                    />
                </div>



                



                


            </Card>
            
            
            

        </div>

    )
    
    };


    export default CreateChallenge;
