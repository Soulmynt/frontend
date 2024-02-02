import React, { useState, useEffect } from "react";
import SignIn from "./signIn";
import SignInStep2 from "./signInStep2";
import SignInStep3 from "./signInStep3";
import { CreateWallet, getMnemonic, encryptWallet } from "../../utils/Wallet";
import VerifyPhrase from "../signIn/VerifyPhrase";
import { useAuth } from "../../hooks";
import { axiosSignIn } from "../../utils/axios";
import { useNavigate } from "react-router-dom";

const getRandomPhraseword = (ignore = 0) => {
  let number = Math.round(Math.random() * 11);
  if (number === ignore) {
    number = Math.round(Math.random() * 11);
  }
  return number;
};

function Register() {
  // Function Variables
  // Auth Context
  const { setAuth } = useAuth();
  // Navigation
  const navigate = useNavigate();
  // Page Selector State
  const [currentStep, setCurrentStep] = useState(1);
  // User Credential State
  const [email, setEmail] = useState("embloop");
  const [password, setPassword] = useState("pasbloop");
  const [userName, setUserName] = useState("ubloop");
  const [displayHandle, setDisplayHandle] = useState("disbloop");

  // User Wallet States
  const [walletthing, setWallet] = useState("");
  const [keyGen, setKeyGen] = useState({});
  const [Phrase, setPhrase] = useState([]);

  // Activate Modal State
  const [demoModal, setDemoModal] = useState(false);

  // Confirm Seed Variables
  const [randomWord1, setRandomWord1] = useState(getRandomPhraseword());
  const [randomWord2, setRandomWord2] = useState(
    getRandomPhraseword(randomWord1)
  );

  useEffect(() => {
    if (currentStep === 3) {
      setTimeout(async () => {
        await makeWallet();
        setDemoModal(!demoModal);
        console.log(keyGen)
      }, 1000);
    }
  }, [currentStep]);

  // Special Functions

  // Creates a random HD wallet for user, generates a seed phrase for user and finally encrypts wallet.
  const makeWallet = async () => {
    const wallet = await CreateWallet();
    setWallet(wallet);
    const phraseGen = await getMnemonic(wallet);
    setPhrase(phraseGen);
    const keygen = await encryptWallet(wallet, password);
    setKeyGen(keygen);
  };

  // ! Here is the function we create to call our axios function
  //* It will
  const closeModalAndSubmitUserInfo = async () => {
    let data = await axiosSignIn(email, displayHandle, password, keyGen);
    if (data.status == 200) {
      setAuth(data.data);
      setDemoModal(!demoModal);
      navigate("/dashboard");
      console.log("this hit!");
    } else {
      setCurrentStep(1);
      console.log("An error occurred and signup failed ", data?.data.error);
      // * A modal for the error here would be a good idea
    }
  };

  // Render
  console.log(email, password, userName, displayHandle);
  return (
    <div>
      <VerifyPhrase
        Phrase={Phrase}
        isOpened={demoModal}
        onClose={() => {
          setCurrentStep(2);
          setDemoModal(!demoModal);
        }}
        width={460}
        height={460}
        random1={randomWord1}
        random2={randomWord2}
        // ! Here is where we submit the info to the backend
        createAccountFunc={closeModalAndSubmitUserInfo}
      />
      {currentStep === 1 && (
        <SignIn
          goToNextStep={setCurrentStep}
          setEmailFunc={setEmail}
          setPasswordFunc={setPassword}
        />
      )}
      {currentStep === 2 && (
        <SignInStep2
          goToNextStep={setCurrentStep}
          setUserNameFunc={setUserName}
          setDisplayNameFunc={setDisplayHandle}
        />
      )}
      {currentStep === 3 && <SignInStep3 />}
    </div>
  );
}

export default Register;
