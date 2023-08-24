import React, { useState, useEffect } from "react";
import SignIn from "./signIn";
import SignInStep2 from "./signInStep2";
import SignInStep3 from "./signInStep3";
import { CreateWallet, getMnemonic, encryptWallet } from "../../utils/Wallet";
import VerifyPhrase from "../signIn/VerifyPhrase";
import { axiosSignIn } from "../../utils/axios";

const getRandomPhraseword = (ignore = 0) => {
  let number = Math.round(Math.random() * 11);
  if (number === ignore) {
    number = Math.round(Math.random() * 11);
  }
  return number;
};

function Register() {
  // Function Variables
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
    const keygen = await encryptWallet(wallet, "password");
    setKeyGen(keygen);
  };

  const closeModalAndSubmitUserInfo = async () => {
    //     data = await axiosSignIn(email, "handle", password, keyGen);
    setDemoModal(!demoModal);
    console.log("this hit!");
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
