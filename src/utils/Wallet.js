import { ethers } from "ethers";

const CreateWallet = async () => {
  const wallet = await ethers.HDNodeWallet.createRandom();
  return wallet;
};

const getMnemonic = async (Wallet) => {
  return Wallet.mnemonic.phrase;
};

const encryptWallet = async (wallet, password) => {
  return await wallet.encrypt(password);
};

export { CreateWallet, getMnemonic, encryptWallet };
