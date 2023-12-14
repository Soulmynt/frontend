import React, {useState} from "react";
import styles from "./topBar.module.css";
import { Arrow } from "../../icons/Arrow";
import { BoldText } from "../boldText";
import { useAuth } from "../../hooks";
import { Dropdown } from "../dropdown";


const TopBar = () => {
    const { auth } = useAuth();
    // const handle = auth.userprofile.handle;
    const [showDropdown, setShowDropdown] = useState(false);

    const options = ["Profile", "Logout"]; // Define your dropdown options here

    const handleOptionClick = (option) => {
        console.log(`Option selected: ${option}`);
        // Implement functionality based on the option clicked
        // For example, if option is 'logout', then handle logout logic
    };

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <div className={styles.topBarContainer}>
            <div className={styles.bringForwardContainer}>
                <BoldText
                    // text={`@${handle}`}
                    text = {"@ani"}
                    size={"19px"}
                    textColor="#8F8F8F"
                />
                <div className={styles.dropdownWrapper} onClick={toggleDropdown}>
                    <div className={showDropdown ? styles.arrowUp : styles.arrowDown}>
                        <Arrow/>
                    </div>
                    {showDropdown && (
                        <Dropdown options={options} onOptionClick={handleOptionClick} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default TopBar;