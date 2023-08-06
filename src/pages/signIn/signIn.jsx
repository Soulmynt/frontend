import { Textbox } from '../../components/textbox'
import { Button } from '../../components/button'
import { ColorfulText } from '../../components/colorfulText'
import { BoldText } from '../../components/boldText'
import logo from '../../img/plain_logo_black.png'
// import curvy from '../../img/curvy.png'
import './signIn.css'



function SignIn() {
    // const [password, setPassword] = useState('');
    // const [rules, setRules] = useState([
    //     { id: 1, rule: 'At least 8 characters', isValid: false },
    //     { id: 2, rule: 'Contains a number', isValid: false },
    //     // ... add more rules as needed
    // ]);

    // const handlePasswordChange = (e) => {
    //     const newPassword = e.target.value;
    //     setPassword(newPassword);

    //     // Validate against rules
    //     const newRules = rules.map(rule => {
    //     if (rule.id === 1) {
    //         rule.isValid = newPassword.length >= 8;
    //     } else if (rule.id === 2) {
    //         rule.isValid = /\d/.test(newPassword);
    //     }
    //     // ... add more rule validations as needed
    //     return rule;
    //     });

    //     setRules(newRules);
    // };
    return (
    <div>
        <div className = "overall-signin">
            
            <div className="left-frame">
                
                <img src={logo} alt="Description" className="soulmynt-logo"/> {/* Add this line */}
                
                <div className='bold-text-container'>
                    <div>
                        <BoldText text={"Soulmynt"} containerWidth={"130px"}/>
                    </div>
                </div>
                <div className = "create-account-container">
                    <div>
                        <ColorfulText text={"Create an Account"} containerWidth={"340px"}/>
                    </div>
                </div>

                <div className="email-pass">

                
                    <div>
                        <Textbox text={"Email"} containerWidth={"378px"}/>
                    </div>

                    <div>
                        <Textbox text={"Password"} containerWidth={"378px"}/>
                    </div>
                </div>

                <div className='continue-button'>
                    <Button text={"Continue >"} containerWidth={"378px"} />
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
