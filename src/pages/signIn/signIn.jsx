import { Textbox } from '../../components/textbox'
import { Button } from '../../components/button'
import { ColorfulText } from '../../components/colorfulText'
import { BoldText } from '../../components/boldText'
import { PasswordRules } from '../../components/passwordRules'
import logo from '../../img/plain_logo_black.png'
// import curvy from '../../img/curvy.png'
import './signIn.css'
import '../../components/textbox/textbox.css'
import { useState } from 'react'



function SignIn({goToNextStep}) {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(false);
    
    const [rules, setRules] = useState([
        { id: 1, rule: ' At least 8 characters', isValid: false },
        { id: 2, rule: ' Contains an uppercase letter', isValid: false },
        { id: 3, rule: ' Contains a number', isValid: false },
        { id: 4, rule: ' Contains a special character', isValid: false },

        // ... add more rules as needed
    ]);
    const allRulesMet = rules.every(rule => rule.isValid);
    const [isPassFocused, setisPassFocused] = useState(false);

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
    
        // Validate against rules
        const newRules = rules.map(rule => {
            if (rule.id === 1) {
                rule.isValid = newPassword.length >= 8;
            } else if (rule.id === 2) {
                rule.isValid = /[A-Z]/.test(newPassword); // Checks for an uppercase letter
            } else if (rule.id === 3) {
                rule.isValid = /\d/.test(newPassword); // Checks for a number
            } else if (rule.id === 4) {
                rule.isValid = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(newPassword); // Checks for a special character
            }
            return rule;
        });
    
        setRules(newRules);
    };

    const validateEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return emailRegex.test(email);
    };
    
    const handleEmailChange = (e) => {
        const emailValue = e.target.value;
        setEmail(emailValue);
        setIsEmailValid(validateEmail(emailValue));
    };
    
    function handleInputFocus () {
        setisPassFocused(true);
    }
      
    function handleInputBlur () {
        setisPassFocused(false);
    }

    return (
    <div>
        <div className = "overall-signin">
            
            <div className="left-frame">
                <div className='header-container'>
                
                    <img src={logo} alt="Description" className="soulmynt-logo"/> {/* Add this line */}
                    
                    <div className='bold-text-container'>
                        <div>
                            <BoldText text={"Soulmynt"} containerWidth={"130px"} size={"26px"}/>
                        </div>
                    </div>
                    <div className = "create-account-container">
                        <div>
                            <ColorfulText text={"Create an Account"} containerWidth={"340px"}/>
                        </div>
                    </div>

                </div>

                <div className="email-pass">

                
                    <div>
                        <Textbox 
                        text={"Email"} 
                        type="email"
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
                        additionalClass={!allRulesMet ? 'invalid-password' : ''}
                        isFocused = {isPassFocused}
                        handleInputFocus = {handleInputFocus}
                        handleInputBlur = {handleInputBlur}
                        />
                    </div>


                    <div className='rules-container'>
                        <ul className='password-rules'>
                            {rules.map(rule => (
                            <li key={rule.id} >
                                <PasswordRules isMet = {rule.isValid} />
                                <span className="rule-text">{rule.rule}</span>
                            </li>
                            ))}
                        </ul>
                    </div>
                </div>
               

                <div className='continue-button'>
                    <Button 
                    text={"Continue >"} 
                    variant="colorful-button"
                    containerWidth={"378px"}
                    disabled={!allRulesMet || !isEmailValid}
                    onClick = {goToNextStep}
                     />
                </div>
                
                
            </div>
            
            <div className="right-frame">
                {/* <img src={curvy} alt="Description" className="curvy"/> */}
                <div className="signin-text-container">
                    <div className = "main-signin-text">
                        Grow your community. keep people engaged. Receive Rewards. Expand your Network.
                    </div>
                </div>
            </div>

            

            
        </div>
    </div>


    );

    }

    export default SignIn;
