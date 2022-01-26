import React from "react";

const Steps = ({ step }) => {
  return (
    <div className="wizard__steps">
      <span
        className={
          step === 1
            ? "wizard__step active"
            : step > 1
            ? "wizard__step passed"
            : ""
        }
      >
        1
      </span>
      <span
        className={
          step === 2
            ? "wizard__step active"
            : step < 3
            ? "wizard__step "
            : "wizard__step passed"
        }
      >
        2
      </span>
      <span className={step === 3 ? "wizard__step active" : "wizard__step"}>
        3
      </span>
    </div>
  );
};

export default Steps;
