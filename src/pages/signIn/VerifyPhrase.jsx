import React, { useState } from "react";
import styled from "styled-components";
import { Modal } from "../../components/modal";
import { Button } from "../../components/button";
import { Textbox } from "../../components/textbox";

const numeralWordBank = {
  0: "first",
  1: "second",
  2: "third",
  3: "fourth",
  4: "fifth",
  5: "sixth",
  6: "seventh",
  7: "eighth",
  8: "ninth",
  9: "tenth",
  10: "eleventh",
  11: "twelvth",
};

const IntroContainer = styled.div`
  color: black;
  font-size: 20px;
  text-align: center;
  grid-row-start: 1;
`;

const VerifyContainer = styled.div`
  display: grid;
  grid-template-columns: auto;
  gap: 30px;
`;

const GridContainer = styled.div`
  height: 10%;
  width: 65%;
  margin: 1% auto;

  display: grid;
  gap: 10px;
  grid-template-columns: auto auto;
  grid-row-start: 2;
`;

const PhraseWordContainer = styled.div`
  color: black;
  font-size: 20px;
  text-align: center;
  grid-row-start: 3;
`;

const ButtonContainer = styled.div`
  margin: 0% auto;
`;

const InputContainer = styled.div`
  margin: 0% auto;
`;

const ConfirmContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto;
  gap: 30px;
`;

const ConfirmText = styled.div`
  color: black;
  font-size: 20px;
  text-align: center;
`;

const getRandomPhraseword = (ignore = 0) => {
  let number = Math.round(Math.random() * 11);
  if (number === ignore) {
    number = Math.round(Math.random() * 11);
  }
  return number;
};

const VerifyPhrase = ({
  Phrase,
  isOpened,
  onClose,
  width,
  height,
  random1,
  random2,
  createAccountFunc,
}) => {
  const [confirm, setConfirm] = useState(false);
  const [firstCheck, setFirstCheck] = useState("");
  const [secondCheck, setSecondCheck] = useState("");

  const closeModal = () => {
    setFirstCheck("");
    setSecondCheck("");
    console.log("this hit");
    createAccountFunc();
    setConfirm(false);
    onClose();
  };

  return (
    <Modal
      isOpened={isOpened}
      onClose={() => {
        onClose();
        setConfirm(false);
        setFirstCheck("");
        setSecondCheck("");
      }}
      width={width}
      height={height}
    >
      {!confirm ? (
        <VerifyContainer>
          <IntroContainer>
            Please write down the following 12 word seed phrase and store in a
            secure location. This will help you recover your account should you
            lose your password.
          </IntroContainer>
          <GridContainer>
            <div>
              <PhraseWordContainer>1. {Phrase[0]}</PhraseWordContainer>
              <PhraseWordContainer>2. {Phrase[1]}</PhraseWordContainer>
              <PhraseWordContainer>3. {Phrase[2]}</PhraseWordContainer>
              <PhraseWordContainer>4. {Phrase[3]}</PhraseWordContainer>
              <PhraseWordContainer>5. {Phrase[4]}</PhraseWordContainer>
              <PhraseWordContainer>6. {Phrase[5]}</PhraseWordContainer>
              <PhraseWordContainer>7. {Phrase[6]}</PhraseWordContainer>
            </div>
            <div>
              <PhraseWordContainer>8. {Phrase[7]}</PhraseWordContainer>
              <PhraseWordContainer>9. {Phrase[8]}</PhraseWordContainer>
              <PhraseWordContainer>10. {Phrase[9]}</PhraseWordContainer>
              <PhraseWordContainer>11. {Phrase[10]}</PhraseWordContainer>
              <PhraseWordContainer>12. {Phrase[11]}</PhraseWordContainer>
            </div>
          </GridContainer>
          <ButtonContainer>
            <Button
              containerHeight={45}
              containerWidth={190}
              onClick={() => setConfirm(!confirm)}
            >
              Continue
            </Button>
          </ButtonContainer>
        </VerifyContainer>
      ) : (
        <ConfirmContainer>
          <IntroContainer>Please Confirm your seed phrase.</IntroContainer>
          <ConfirmText>
            {`Please write the ${numeralWordBank[random1]} word`}
          </ConfirmText>
          <InputContainer>
            <Textbox
              containerWidth={180}
              value={firstCheck}
              onChange={(e) => setFirstCheck(e.target.value)}
            />
          </InputContainer>
          <ConfirmText>
            {` Please write the ${numeralWordBank[random2]} word.`}
          </ConfirmText>
          <InputContainer>
            <Textbox
              containerWidth={180}
              value={secondCheck}
              onChange={(e) => setSecondCheck(e.target.value)}
            />
          </InputContainer>
          <ButtonContainer>
            <Button
              containerHeight={45}
              containerWidth={190}
              disabled={
                !(
                  firstCheck === Phrase[random1] &&
                  secondCheck === Phrase[random2]
                )
              }
              onClick={closeModal}
            >
              Continue
            </Button>
          </ButtonContainer>
        </ConfirmContainer>
      )}
    </Modal>
  );
};

export default VerifyPhrase;
