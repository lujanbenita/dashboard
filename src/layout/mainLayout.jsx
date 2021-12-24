import { useEffect } from 'react';
import Routes from '../routes/routes';

const MainLayout = ({ children, theme }) => {
  useEffect(() => {},[theme])
  return (
    <main className={`theme ${theme}`}>
      <Routes />
      {children}
    </main>
  );
};

export default MainLayout;