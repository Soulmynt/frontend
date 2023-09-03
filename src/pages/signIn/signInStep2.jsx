import { Textbox } from "../../components/textbox";
import { Button } from "../../components/button";
import { ColorfulText } from "../../components/colorfulText";
import { BoldText } from "../../components/boldText";
import { PasswordRules } from "../../components/passwordRules";
import { Circle } from "../../icons/Circle";
import logo from "../../img/plain_logo_black.png";
import top from "../../img/top.png";
import bottom from "../../img/bottom.png";
import styles from "./signInStep2.module.css";
import "../../components/textbox/textbox.css";
import { useState } from "react";

function SignInStep2({ goToNextStep, setUserNameFunc, setDisplayNameFunc }) {
  // const [rules, setRules] = useState([
  //     { id: 1, rule: ' At least 8 characters', isValid: false },
  //     { id: 2, rule: ' Contains an uppercase letter', isValid: false },
  //     { id: 3, rule: ' Contains a number', isValid: false },
  //     { id: 4, rule: ' Contains a special character', isValid: false },

  //     // ... add more rules as needed
  // ]);
  // const [isPassFocused, setisPassFocused] = useState(false);

  // const handlePasswordChange = (e) => {
  //     const newPassword = e.target.value;
  //     setPassword(newPassword);

  //     // Validate against rules
  //     const newRules = rules.map(rule => {
  //         if (rule.id === 1) {
  //             rule.isValid = newPassword.length >= 8;
  //         } else if (rule.id === 2) {
  //             rule.isValid = /[A-Z]/.test(newPassword); // Checks for an uppercase letter
  //         } else if (rule.id === 3) {
  //             rule.isValid = /\d/.test(newPassword); // Checks for a number
  //         } else if (rule.id === 4) {
  //             rule.isValid = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(newPassword); // Checks for a special character
  //         }
  //         return rule;
  //     });

  //     setRules(newRules);
  // };

  // const validateEmail = (email) => {
  //     const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  //     return emailRegex.test(email);
  // };

  // const handleEmailChange = (e) => {
  //     const emailValue = e.target.value;
  //     setEmail(emailValue);
  //     setIsEmailValid(validateEmail(emailValue));
  // };

  // function handleInputFocus () {
  //     setisPassFocused(true);
  // }

  // function handleInputBlur () {
  //     setisPassFocused(false);
  // }
  const [selectedImage, setSelectedImage] = useState(null);
  const [userName, setUserName] = useState("");
  const [displayHandle, setDisplayHandle] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleUserNameChange = (e) => {
    let uName = e.target.value;
    setUserName(uName);
  };

  const handleDisplayHandleChange = (e) => {
    let dName = e.target.value;
    setDisplayHandle(dName);
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

  const handleEditClick = () => {
    const fileInput = document.querySelector(`.${styles.fileInput}`);
    fileInput.click();
  };

  const goToNextStepFunc = () => {
    setUserNameFunc(userName);
    setDisplayNameFunc(displayHandle);
    goToNextStep(3);
  };

  return (
    <div>
      <div className={styles.overallSignIn}>
        <div className={styles.leftFrame}>
          {/* <div className={styles.headerContainer}> */}
          <img src={logo} alt="Description" className={styles.soulmyntLogo} />
          {/* Add this line */}
          {/* <div className='bold-text-container'>
                        <div>
                            <BoldText text={"Soulmynt"} size={"15px"}/>
                        </div>
                    </div> */}
          {/* </div> */}
          <div className={styles.createAccountContainer}>
            <div>
              <ColorfulText
                text={"Tell us about yourself"}
                containerWidth={"400px"}
              />
            </div>
          </div>
          <div
            className={styles.profilePicContainer}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {selectedImage ? (
              <img
                src={selectedImage}
                alt="Profile"
                className={styles.profileImage}
              />
            ) : (
              <Circle />
            )}
            {isHovered && (
              <Button
                text="Edit"
                onClick={handleEditClick}
                containerWidth="100px"
                variant="gray"
                className={styles.buttonInsideCircle}
              />
            )}
            <input
              type="file"
              className={styles.fileInput}
              onChange={handleFileChange}
            />
          </div>
          <div className={styles.emailPass}>
            <div>
              <Textbox
                text={"Username"}
                containerWidth={"378px"}
                value={userName}
                onChange={handleUserNameChange}
              />
            </div>

            <div>
              <Textbox
                text="Display Name"
                containerWidth="378px"
                // handleInputFocus = {handleInputFocus}
                // handleInputBlur = {handleInputBlur}
                value={displayHandle}
                onChange={handleDisplayHandleChange}
              />
            </div>

            {/* <div className='rules-container'>
                        <ul className='password-rules'>
                            {rules.map(rule => (
                            <li key={rule.id} >
                                <PasswordRules isMet = {rule.isValid} />
                                <span className="rule-text">{rule.rule}</span>
                            </li>
                            ))}
                        </ul>
                    </div> */}
          </div>
          <div className={styles.continueButton}>
            <Button
              children={"Continue >"}
              containerWidth={"378px"}
              onClick={goToNextStepFunc}
            />
          </div>
        </div>

        <div className={styles.rightFrame}>
          <div className={styles.topCurve}>
            <img src={top} alt="Description" />
          </div>

          <div className={styles.signinTextContainer}>
            <div className={styles.mainSigninText}>
              Grow your community. keep people engaged. Receive Rewards. Expand
              your Network.
            </div>
          </div>

          <div className={styles.bottomCurve}>
            <img src={bottom} alt="Description" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignInStep2;
