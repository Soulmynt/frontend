import React, { useState } from "react";
import { Button } from "../../components/button";
import { CreateWallet, getMnemonic, encryptWallet } from "../../utils/Wallet";

function Staging() {
  const [walletthing, setWallet] = useState("");
  const makeWallet = async () => {
    const wallet = await CreateWallet();
    console.log(wallet);
    const phrase = await getMnemonic(wallet);
    console.log(phrase);
    const keygen = await encryptWallet(wallet, "password");
    console.log(keygen);
  };
  return (
    <div>
      <Button onClick={makeWallet} />
      <div></div>
    </div>
  );
}

export default Staging;
