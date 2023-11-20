import React, { useState } from 'react';
import styles from "./communityCode.module.css"
import {Background} from '../../components/background'
import { Textbox } from '../../components/textbox'
import { Card } from '../../components/card'
import { BoldText } from '../../components/boldText';
import { Button } from '../../components/button';
import { ActiveChallengeBox } from '../../components/activeChallengeBox';

const CommunityCode = () => {
    // State to hold the input for each box
    const [code, setCode] = useState(["", "", "", "", "", ""]);
  
    // Function to update the individual box state
    const updateCode = (index, value) => {
      let newCode = [...code];
      newCode[index] = value;
      setCode(newCode);
    };
  
    // Function to handle form submission
    const handleSubmit = (event) => {
      event.preventDefault();
      // Combine code array into a string and compare with the community code
      const communityCode = code.join('');
      console.log(communityCode); // Here you would normally compare with the actual community code
    };
  
    return (
        <div className={styles.communityCodeContainer}>
            

            <Card positionType='relative' containerWidth='1200px' containerHeight='800px'>
                <div className = {styles.communityCode}>
                    <BoldText text={"Join a Community with Code"} size={"25px"} weight={"bold"} textColor="#000"/>
                

                
                    <form onSubmit={handleSubmit}>
                        {code.map((c, index) => (
                        <input
                            key={index}
                            maxLength="1"
                            value={c}
                            onChange={(e) => updateCode(index, e.target.value.toUpperCase())}
                            
                            className={styles.gradientBorderBox}
                        />
                        ))}

                    </form>
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
  
  export default CommunityCode;