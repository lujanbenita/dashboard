import React from "react";
import UseWizardCreatePassword from "../../../hooks/useWizardCreatePassword";

const StepOneInformationCreatePassword = ({ cancelWizard, handleNextStep }) => {
  const { checked, handleChange } = UseWizardCreatePassword();

  return (
    <>
      <div className="wizard__content">
        <h2>Crea tu Password Manager</h2>
        <img src="/images/passwordinfo.jpg" alt="info password" />
        <h3>Cómo funciona</h3>
        <p>
          En primer lugar, debes crear una contraseña diferente para sus
          pertenencias electrónicas. No podrás recuperar tu contraseña, así que
          recuérdala bien.
        </p>
        <h3>Qué datos puedes guardar</h3>
        <p>
          Por ejemplo, el número de tu tarjeta, el PIN y el PUK de tu teléfono
          móvil, el número de serie de alguno de tus dispositivos o cualquier
          información que necesites tener en lugar seguro.
        </p>
        <label>
          <input type="checkbox" checked={checked} onChange={handleChange} />
          Acepto la política de protección de datos y tengo mayoria de edad.
        </label>
      </div>

      <div className="wizard__next-buttons">
        <button onClick={() => cancelWizard(false)}>Cancelar</button>
        {checked ? (
          <button className="btn" onClick={handleNextStep}>
            Siguiente &gt;{" "}
          </button>
        ) : (
          <button className="btn disabled">Siguiente &gt; </button>
        )}
      </div>
    </>
  );
};

export default StepOneInformationCreatePassword;
