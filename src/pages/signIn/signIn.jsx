import { Textbox } from "../../components/textbox";
import { Button } from "../../components/button";
import { ColorfulText } from "../../components/colorfulText";
import { BoldText } from "../../components/boldText";
import { PasswordRules } from "../../components/passwordRules";
import logo from "../../img/plain_logo_black.png";
import top from "../../img/top.png";
import bottom from "../../img/bottom.png";
import styles from "./signIn.module.css";
import "../../components/textbox/textbox.css";
import { useState } from "react";




function SignIn({ goToNextStep, setEmailFunc, setPasswordFunc }) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);

  const [rules, setRules] = useState([
    { id: 1, rule: " At least 8 characters", isValid: false },
    { id: 2, rule: " Contains an uppercase letter", isValid: false },
    { id: 3, rule: " Contains a number", isValid: false },
    { id: 4, rule: " Contains a special character", isValid: false },

    // ... add more rules as needed
  ]);
  const allRulesMet = rules.every((rule) => rule.isValid);
  const [isPassFocused, setisPassFocused] = useState(false);

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    // Validate against rules
    const newRules = rules.map((rule) => {
      if (rule.id === 1) {
        rule.isValid = newPassword.length >= 8;
      } else if (rule.id === 2) {
        rule.isValid = /[A-Z]/.test(newPassword); // Checks for an uppercase letter
      } else if (rule.id === 3) {
        rule.isValid = /\d/.test(newPassword); // Checks for a number
      } else if (rule.id === 4) {
        rule.isValid = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(
          newPassword
        ); // Checks for a special character
      }
      return rule;
    });

    setRules(newRules);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    setIsEmailValid(validateEmail(emailValue));
  };

  function handleInputFocus() {
    setisPassFocused(true);
  }

  function handleInputBlur() {
    setisPassFocused(false);
  }

  const goToNextStepFunc = () => {
    setEmailFunc(email);
    setPasswordFunc(password);
    goToNextStep(2);
  };

  return (
    <div>
      <div className={styles.overallSignIn}>
        <div className={styles.leftFrame}>
          <div className={styles.headerContainer}>
            <img src={logo} alt="Description" className={styles.soulmyntLogo} />{" "}
            {/* Add this line */}
            <div className={styles.boldTextContainer}>
              <div>
                <BoldText
                  text={"Soulmynt"}
                  containerWidth={"130px"}
                  size={"26px"}
                />
              </div>
            </div>
            <div className={styles.createAccountContainer}>
              <div>
                <ColorfulText
                  text={"Create an Account"}
                  containerWidth={"340px"}
                />
              </div>
            </div>
          </div>

          <div className={styles.emailPass}>
            <div>
              <Textbox
                text={"Email"}
                type="email"
                onChange={handleEmailChange}
                containerWidth={"378px"}
              />
            </div>

            <div>
              <Textbox
                text="Password"
                containerWidth="378px"
                type="password"
                value={password}
                onChange={handlePasswordChange}
                additionalClass={!allRulesMet ? "invalid-password" : ""}
                isFocused={isPassFocused}
                handleInputFocus={handleInputFocus}
                handleInputBlur={handleInputBlur}
              />
            </div>

            <div className={styles.rulesContainer}>
              <ul className={styles.passwordRules}>
                {rules.map((rule) => (
                  <li key={rule.id}>
                    <PasswordRules isMet={rule.isValid} />
                    <span className={styles.ruleText}>{rule.rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.continueButton}>
            <Button
              children={"Continue >"}
              variant="colorful-button"
              containerWidth={"378px"}
              disabled={!allRulesMet || !isEmailValid}
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
              Grow your community. Keep people engaged. Receive Rewards. Expand
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

export default SignIn;
