import React, { useState } from "react";
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
  const [currentStep, setCurrentStep] = useState(3);
  // User Credential State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

  const closeModal = () => {
    console.log(keyGen);
    setDemoModal(!demoModal);
  };

  // Render
  return (
    <div>
      <VerifyPhrase
        Phrase={Phrase}
        isOpened={demoModal}
        onClose={() => setDemoModal(!demoModal)}
        width={460}
        height={460}
        random1={randomWord1}
        random2={randomWord2}
        createAccountFunc={closeModal}
      />
      {currentStep === 1 && <SignIn goToNextStep={() => setCurrentStep(2)} />}
      {currentStep === 2 && (
        <SignInStep2 goToNextStep={() => setCurrentStep(3)} />
      )}
      {currentStep === 3 && <SignInStep3 />}
    </div>
  );
}

export default Register;
