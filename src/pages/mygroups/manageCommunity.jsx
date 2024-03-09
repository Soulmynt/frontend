import React, { useState, useMemo } from "react";
import styles from "./manageCommunity.module.css";
import { Card } from "../../components/card";
import { BoldText } from "../../components/boldText";
import { Button } from "../../components/button";
import { Textbox } from "../../components/textbox";
import { Checkbox } from "../../components/checkbox";
import { Table } from "../../components/table";
import { Searchbar } from "../../components/searchbar";
import { Link } from "react-router-dom";
import { axiosRemoveUser } from "../../utils/axios";
// Instead of calling CompanyInfo in the componenet, we will get it from the parent and use that to hydrate the data, so companyInfo will be passed in as a prop
const ManageCommunity = ({ selectedCompanyId, CompanyInfo = {} }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const [companyData, setCompanyData] = useState(null); // State to store fetched company data
  const [showConfirmPopup, setShowConfirmPopup] = useState(false);
  const [userToRemove, setUserToRemove] = useState(null);

  const handleRemoveClick = (handle) => {
    setShowConfirmPopup(true);
    setUserToRemove(handle);
  };

  const ConfirmationPopup = ({ onConfirm, onCancel }) => (
    <div className={styles.confirmPopup}>
      <p>Are you sure you want to remove this user?</p>
      <button onClick={onConfirm}>Yes</button>
      <button onClick={onCancel}>No</button>
    </div>
  );

  const handleConfirmRemove = async () => {
    let data = await axiosRemoveUser(CompanyInfo.id, userToRemove);
    console.log("User Removed", data);
    if (data.error) {
      alert("Error removing user");
      console.log("Error removing user:", data.error);
      return;
    }
    const updatedUsers = CompanyInfo.users.filter(
      (user) => user.handle !== userToRemove
    );
    setCompanyData({ ...companyData, users: updatedUsers }); // Assuming companyData contains the users array
    setShowConfirmPopup(false);
  };

  const removeUserFromCommunity = async (companyId, userHandle) => {
    // Make your API call here
    let data = await axiosRemoveUser(companyId, userHandle);
    console.log(`Removing ${userHandle} from company ${companyId}`);
    if (data.error) {
      alert("Error removing user");
    }
    // Simulate API call
    return new Promise((resolve) => setTimeout(resolve, 1000));
  };

  // Function to fetch company data by ID
  // const fetchCompanyData = async () => {
  //     try {
  //         // Assuming you have an API endpoint where you can pass companyId as a parameter
  //         const response = await axios.get(`/api/company/${selectedCompanyId}`);
  //         setCompanyData(response.data);
  //         // Now you have companyData that you can use to render your component
  //     } catch (error) {
  //         console.error('Error fetching company data:', error);
  //     }
  // };

  // // useEffect to fetch company data when selectedCompanyId changes
  // useEffect(() => {
  //     if (selectedCompanyId) {
  //         fetchCompanyData();
  //     }
  // }, [selectedCompanyId]);

  const response = {
    users: [
      {
        user: "A",
        handle: "@A",
        CompanyId: "String",
        CompanyName: "String",
        RewardPoints: 200,
        admin: "Boolean",
      },
      {
        user: "B",
        handle: "@B",
        CompanyId: "String",
        CompanyName: "String",
        RewardPoints: 100,
        admin: "Boolean",
      },
    ],
  };

  // const table1Data = [
  // { Temp: "", Username: "@ABC", Name: "Active", Points: 0,  Membership: "5 days", ID: "135135"},
  // { Temp: "", Username: "@XYZ", Name: "Active", Points: 0,  Membership: "5 days", ID: "135135"},
  // { Temp: "", Username: "@ABC", Name: "Active", Points: 0,  Membership: "5 days", ID: "135135"},
  // { Temp: "", Username: "@ABC", Name: "Active", Points: 0,  Membership: "5 days", ID: "135135"},
  // { Temp: "", Username: "@ABC", Name: "Active", Points: 0,  Membership: "5 days", ID: "135135"},
  // { Temp: "", Username: "@ABC", Name: "Active", Points: 0,  Membership: "5 days", ID: "135135"},
  // { Temp: "", Username: "@ABC", Name: "Active", Points: 0,  Membership: "5 days", ID: "135135"},
  // { Temp: "", Username: "@XYZ", Name: "Active", Points: 0,  Membership: "5 days", ID: "135135"},
  // { Temp: "", Username: "@ABC", Name: "Active", Points: 0,  Membership: "5 days", ID: "135135"},
  // { Temp: "", Username: "@ABC", Name: "Active", Points: 0,  Membership: "5 days", ID: "135135"},
  // ];

  // const modifiedData = table1Data.map(item => ({
  //     ...item,
  //     Username: <Link to={`/explore?username=${item.Username}`}>{item.Username}</Link>,
  // }));

  const table1Data = CompanyInfo.users.map((user, index) => ({
    Temp: "", // If Temp is not needed, consider removing it or replacing it with relevant data
    Username: (
      <Link
        to={`/explore?username=${user.handle}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        {user.handle}
      </Link>
    ),
    Name: user.user, // Assuming "user" field contains the name
    Points: user.RewardPoints,
    Remove: (
      <Button onClick={() => handleRemoveClick(user.handle)} children="X" />
    ),
  }));

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredData = useMemo(() => {
    return table1Data.filter(
      (item) =>
        item.Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.Username.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className={styles.manageCommunityContainer}>
      <Card
        positionType="relative"
        containerWidth="800px"
        containerHeight="2100px"
      >
        <div className={styles.manageCommunityText}>
          <BoldText
            text={"Manage Community"}
            containerWidth={"250px"}
            size={"25px"}
            weight={"bold"}
            textColor="#000"
          />
        </div>

        <div className={styles.generalSpacing}>
          <Searchbar
            text="Search Members"
            containerWidth="93.5%"
            onSearchChange={handleSearchChange}
          />
        </div>

        <div className={styles.generalSpacing}>
          {filteredData.length > 0 ? (
            <Table
              itemsPerPage={10}
              columns={[" ", "Username", "Name", "Points", "Remove"]}
              data={filteredData}
              width="97%"
              height="auto"
            />
          ) : (
            <p>No results found</p> // You can style this message as needed
          )}
        </div>

        {showConfirmPopup && (
          <ConfirmationPopup
            onConfirm={handleConfirmRemove}
            onCancel={() => setShowConfirmPopup(false)}
          />
        )}
      </Card>
    </div>
  );
};

export default ManageCommunity;
