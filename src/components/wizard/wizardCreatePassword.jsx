import React, { useState } from "react";
import Steps from "./steps";
import StepOneInformationCreatePassword from "./steps/stepOneInformationCreatePassword";
import StepThreeFeedbackCreatePassword from "./steps/stepThreeFeedbackCreatePassword";
import StepTwoFormCreatePassword from "./steps/stepTwoFormCreatePassword";

const WizardCreatePassword = ({ cancelWizard }) => {
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handleResetStep = () => {
    setStep(1);
  };

  return (
    <div className="wizard">
      <Steps step={step} />

      {step === 1 ? (
        <StepOneInformationCreatePassword
          cancelWizard={cancelWizard}
          handleNextStep={handleNextStep}
        />
      ) : step === 2 ? (
        <StepTwoFormCreatePassword
          cancelWizard={cancelWizard}
          handleNextStep={handleNextStep}
        />
      ) : (
        <StepThreeFeedbackCreatePassword
          cancelWizard={cancelWizard}
          handleResetStep={handleResetStep}
        />
      )}
    </div>
  );
};

export default WizardCreatePassword;
