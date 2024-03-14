import React, { useState } from "react";
import styles from "./topBar.module.css";
import { Arrow } from "../../icons/Arrow";
import { BoldText } from "../boldText";
import { useAuth } from "../../hooks";
import { Dropdown } from "../dropdown";
import { axiosLogout } from "../../utils/axios";
import { useNavigate } from "react-router-dom";

const TopBar = () => {
  const {
    setAuth,
    setUserInfo,
    setCurrentCompanyInfo,
    setShowMyGroupsDropdown,
  } = useAuth();
  const navigate = useNavigate();
  // const handle = auth.userprofile.handle;
  const [showDropdown, setShowDropdown] = useState(false);

  const handleOptionClick = (option) => {
    console.log(`Option selected: ${option}`);
    // Implement functionality based on the option clicked
    // For example, if option is 'logout', then handle logout logic
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const logout = async () => {
    await axiosLogout();
    setAuth({});
    setUserInfo({});
    setCurrentCompanyInfo({});
    setShowMyGroupsDropdown(false);
    navigate("/login");
  };

  const dropdownOptionArray = [
    { title: "Profile", function: () => {} },
    { title: "Logout", function: () => logout() },
  ]; // Define your dropdown options here

  return (
    <div className={styles.topBarContainer}>
      <div className={styles.bringForwardContainer}>
        <BoldText
          // text={`@${handle}`}
          text={"@ani"}
          size={"19px"}
          textColor="#8F8F8F"
        />
        <div className={styles.dropdownWrapper} onClick={toggleDropdown}>
          <div className={showDropdown ? styles.arrowUp : styles.arrowDown}>
            <Arrow />
          </div>
          {showDropdown && <Dropdown optionsArray={dropdownOptionArray} />}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
