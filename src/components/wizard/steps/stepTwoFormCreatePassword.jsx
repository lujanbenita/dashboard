import UseWizardCreatePassword from "../../../hooks/useWizardCreatePassword";

const StepTwoFormCreatePassword = ({ cancelWizard, handleNextStep }) => {

  const { password,
     isValidPassword,
      handleInputChange, 
      infoTextPassword 
    } = UseWizardCreatePassword();

  return (
    <>
      <div className="wizard__content">
        <h2>Crea tu Password Manager</h2>
        <p>
          En primer lugar, debes crear una contraseña diferente para sus
          pertenencias electónicas. No podrás recuperar tu contraseña, así que
          recuérdala bien.
        </p>

        <form className="form">
          <div className="form-row">
            <div className="form-group">
              <label>Password</label>
              <input
                name="password"
                type="password"
                onChange={handleInputChange}
                placeholder="Contraseña"
              />
              <p>{infoTextPassword}</p>
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <input
                name="repeatPassword"
                type="password"
                onChange={handleInputChange}
                placeholder="Repite tu contraseña"
              />
            </div>
          </div>
          <p>
            También puedes crear una pista que te ayude a recordar tu contraseña
            maestra.
          </p>
          <div className="form-row">
            <div className="form-group">
              <label>Crea tu pista para recordar tu contraseña(opcional)</label>
              <input
                name="optionalClue"
                type="text"
                onChange={handleInputChange}
                placeholder="Introduce tu pista"
              />
              <p>Máximo 255 carácteres {password.optionalClue.length}/255</p>
            </div>
          </div>
        </form>
      </div>

      <div className="wizard__next-buttons">
        <button onClick={() => cancelWizard(false)}>Cancelar</button>
        {isValidPassword ? (
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

export default StepTwoFormCreatePassword;
