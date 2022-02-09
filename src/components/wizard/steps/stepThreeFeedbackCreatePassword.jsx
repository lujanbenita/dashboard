import React from "react";
import UseWizardCreatePassword from "../../../hooks/useWizardCreatePassword";
import Loading from "../../common/loading";

const StepThreeFeedbackCreatePassword = ({ handleResetStep, cancelWizard }) => {
  const { isPasswordOk } = UseWizardCreatePassword();

  if (isPasswordOk === undefined) return <Loading />;

  return (
    <>
      <div className="wizard__content">
        {isPasswordOk ? (
          <>
            <h2>¡Tu Password Manager ya está creada!</h2>
            <p>
              Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet. Amet sit
              dolor ipsum Lorem Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet. Amet sit
              dolor ipsum Lorem Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet. Amet sit
              dolor ipsum Lorem
            </p>
          </>
        ) : (
          <>
            <h2>Ha habido un error</h2>
            <p>
              No hemos podido modificar tu Contraseña Maestra. Inténtalo más
              tarde
            </p>
          </>
        )}
      </div>
      <div className="wizard__next-buttons">
        <button></button>
        {isPasswordOk ? (
          <button className="btn primary" onClick={() => cancelWizard(false)}>
            Acceder &gt;{" "}
          </button>
        ) : (
          <button className="btn primary" onClick={() => handleResetStep()}>
            Volver a Password Manager &gt;{" "}
          </button>
        )}
      </div>
    </>
  );
};

export default StepThreeFeedbackCreatePassword;
