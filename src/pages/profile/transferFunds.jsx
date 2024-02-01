import React, { useState } from 'react';
import styles from "./transferFunds.module.css"
import {Background} from '../../components/background'
import { Textbox } from '../../components/textbox'
import { Card } from '../../components/card'
import { BoldText } from '../../components/boldText';
import { Button } from '../../components/button';
import { ActiveChallengeBox } from '../../components/activeChallengeBox';

const TransferFunds = () => {
    // State to hold the input for each box
    const [tokenAmount, setTokenAmount] = useState("");
    const [walletAddressRecipient, setWalletAddressRecipient] = useState("");

    const handleTokenAmountChange = (e) => {
        const value = e.target.value;
        if (value === "") {
            setTokenAmount(0);
        } else {
            setTokenAmount(value);
        }
    };

    const handleWalletAddressChange = (e) => {
        const value = e.target.value;
        if (value === "") {
            setTokenAmount("");
            // TODO:
            // throw error
        } else {
            setTokenAmount(value);
        }
    };


    
  
    return (
        <div className={styles.transferFundsContainer}>
            

            <Card positionType='relative' containerWidth='600px' containerHeight='300px'>
                <div className={styles.generalSpacing}>
                    <BoldText text={"Transfer Funds"} size={"25px"} weight={"bold"} textColor="#000"/>
                </div>

                <div className={styles.tokenTransfer}>

                    <div className={styles.generalSpacing}>

                        <Textbox 
                                text="Amount" 
                                containerWidth="250px"
                                type="number"
                                value={tokenAmount === Infinity ? "" : tokenAmount} 
                                onChange={handleTokenAmountChange}  
                            
                                
                        />
                    </div>

                    <div className={styles.generalSpacing}>
                        <BoldText 
                                text="USDC" 
                                containerWidth="250px"
                                weight="bold"
                                // type="number"
                        />
                    </div>


                    
                </div>
                <div className={styles.toContainer}>
                    <BoldText text={"to"} size={"25px"} weight={"bold"} textColor="#000"/>
                </div>

                <div className={styles.recipientContainer}>
                        <Textbox 
                                text="Recipient" 
                                containerWidth="502px"
                                value={walletAddressRecipient === "" ? "" : walletAddressRecipient} 
                                onChange={handleWalletAddressChange}  
                                // type="number"
                        />
                        
                    </div>
                

                
                    
                

                
            </Card>
            
            
            

        </div>


        
    //   <div className="community-join">
    //     <h1>Join A Community</h1>
    //     <form onSubmit={handleSubmit}>
    //       {code.map((c, index) => (
    //         <input
    //           key={index}
    //           maxLength="1"
    //           value={c}
    //           onChange={(e) => updateCode(index, e.target.value.toUpperCase())}
    //           style={{ width: '50px', margin: '5px', textAlign: 'center' }}
    //         />
    //       ))}
    //       <button type="submit">Join</button>
    //     </form>
    //   </div>
    );
  };
  
  export default TransferFunds;