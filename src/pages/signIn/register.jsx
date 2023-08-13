import React, { useState } from 'react';
import SignIn from './signIn';
import SignInStep2 from './signInStep2'
import SignInStep3 from './signInStep3'

function Register() {
    const [currentStep, setCurrentStep] = useState(3);

    return (
        <div>
            {currentStep === 1 && <SignIn goToNextStep={() => setCurrentStep(2)} />}
            {currentStep === 2 && <SignInStep2 goToNextStep={() => setCurrentStep(3)} />}
            {currentStep === 3 && <SignInStep3/>}
        </div>
    );
}

export default Register;