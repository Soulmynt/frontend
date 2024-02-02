import { Textbox } from "../../components/textbox";
import { Button } from "../../components/button";
import { ColorfulText } from "../../components/colorfulText";
import { BoldText } from "../../components/boldText";
import { PasswordRules } from "../../components/passwordRules";
import logo from "../../img/plain_logo_black.png";
import top from "../../img/top.png";
import bottom from "../../img/bottom.png";
import styles from "./login.module.css";
import "../../components/textbox/textbox.css";
import { useState } from "react";
import { axiosLogIn } from "../../utils/axios";
import { useAuth } from "../../hooks";
import { useNavigate } from "react-router-dom";

function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
  };

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
  };

  const handleSubmit = async () => {
    let data = await axiosLogIn(email, password);
    setPassword("");
    setEmail("");
    console.log(data.data.userprofile)
    if (data.status == 200) {
      setAuth(data.data.userprofile);
      navigate("/dashboard");
    } else {
      console.log("an error occurred, no workie");
    }
  };

  const [isPassFocused, setisPassFocused] = useState(false);

  function handleInputFocus() {
    setisPassFocused(true);
  }

  function handleInputBlur() {
    setisPassFocused(false);
  }

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
                <ColorfulText text={"Login"} containerWidth={"340px"} />
              </div>
            </div>
          </div>

          <div className={styles.emailPass}>
            <div>
              <Textbox
                text={"Email"}
                type="email"
                value = {email}
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
                isFocused={isPassFocused}
                handleInputFocus={handleInputFocus}
                handleInputBlur={handleInputBlur}
              />
            </div>
          </div>

          <div className={styles.continueButton}>
            <Button
              children={"Continue >"}
              variant="colorful-button"
              containerWidth={"378px"}
              onClick={handleSubmit}
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

export default Login;
