import React, { useState } from "react";
import HomeDataOne from "./HomeDataOne";
import Landing from "./Landing";
import PersonalDataOne from "./PersonalDataOne";

const Multiform = () => {
    const [step, nextStep] = useState(0);

    const StepIncrease = () => {
        nextStep(prevStep => prevStep + 1);
    };

    const StepDecrease = () => {
        nextStep(prevStep => prevStep - 1);
    };

    const handlePersonalData = data => {
        console.log(data);
    };

    let Screen = null;

    if (step === 0) {
        Screen = <Landing onStep={StepIncrease} />;
    } else if (step === 1) {
        Screen = (
            <PersonalDataOne
                onSubmit={handlePersonalData}
                StepDown={StepDecrease}
                StepUp={StepIncrease}
            />
        );
    } else if (step === 2) {
        Screen = <HomeDataOne StepDown={StepDecrease} StepUp={StepIncrease} />;
    }

    return <div>{Screen}</div>;
};

export default Multiform;
