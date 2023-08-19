import React, { useState } from "react";
import { Button } from "../../components/button";
import { CreateWallet, getMnemonic, encryptWallet } from "../../utils/Wallet";
import { Modal } from "../../components/modal";
import styled from "styled-components";
import VerifyPhrase from "../signIn/VerifyPhrase";

const PhraseWordContainer = styled.div`
  color: white;
  font-size: 20px;
  text-align: center;
`;

function Staging() {
  const [walletthing, setWallet] = useState("");
  const [keyGen, setKeyGen] = useState({});
  const [Phrase, setPhrase] = useState([]);
  const [demoModal, setDemoModal] = useState(false);

  const getRandomPhraseword = (ignore = 0) => {
    let number = Math.round(Math.random() * 11);
    if (number === ignore) {
      number = Math.round(Math.random() * 11);
    }
    return number;
  };

  const randomWord1 = getRandomPhraseword();
  const randomWord2 = getRandomPhraseword(randomWord1);

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
  return (
    <div>
      <>
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
      </>
      <Button onClick={makeWallet} />
      <div>{walletthing.address}</div>

      <Button
        onClick={async () => {
          console.log(demoModal);
          await setDemoModal(!demoModal);
        }}
      />
    </div>
  );
}

export default Staging;
