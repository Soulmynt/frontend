import React, { useState } from 'react';
import SignIn from './signIn';
import SignInStep2 from './signInStep2'

function Register() {
    const [currentStep, setCurrentStep] = useState(1);

    return (
        <div>
            {currentStep === 1 && <SignIn goToNextStep={() => setCurrentStep(2)} />}
            {currentStep === 2 && <SignInStep2 goToNextStep={() => setCurrentStep(3)} />}
            {/* ... other steps */}
        </div>
    );
}

export default Register;