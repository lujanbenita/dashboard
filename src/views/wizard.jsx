import { Suspense, useState, lazy } from 'react';
import LayoutDashboard from '../layout/layoutDashboard';

import OpenbankLogo from "/images/key_openbank.png";

const WizardCreatePassword = lazy(() =>
  import("../components/wizard/wizardCreatePassword")
);

const Wizard = () => {
  const [isWizardVisible, setIsWizardVisible] = useState(false);
  const handleCreatePassword = () => {
    setIsWizardVisible(true);
  };

  return (
    <LayoutDashboard title={"Wizard"}>
      <section className="wizard-container">
        <h1>
          Bienvenid@ al wizard de la contraseña
          <img
            src={OpenbankLogo}
            className="App-header-logo"
            alt={"openbank-logo"}
          />
        </h1>
        <button className="btn" onClick={handleCreatePassword}>
          Crear contraseña
        </button>

        {isWizardVisible && (
          <Suspense fallback={""}>
            <WizardCreatePassword cancelWizard={setIsWizardVisible} />
          </Suspense>
        )}

      </section>
    </LayoutDashboard >
  );
};

export default Wizard;