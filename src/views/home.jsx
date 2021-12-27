
import LayoutDashboard from '../layout/layoutDashboard';

const Home = () => {

  return (
    <LayoutDashboard className="home-page"  title={""}>
      <h1>HOME</h1>
      <h2><b><i>work in progress</i></b></h2>
      <h2>This Dashboard is made with...</h2>
      <img referrerPolicy="no-referrer-when-downgrade" src="https://matomo.valencia-web.com/matomo.php?idsite=4&amp;rec=1"  alt="" /> 

      <h3><a href="https://jestjs.io/">Jest</a></h3>
      <h3><a href="https://vitejs.dev/">Vite</a></h3>
      <h3><a href="https://es.reactjs.org/">React</a></h3>
      <h3><a href="https://es.redux.js.org/">Redux</a></h3>
      <h3><a href="https://postcss.org/">Postcss</a></h3>
      <h3><a href="https://docs.cypress.io">Cypress</a></h3>
      <h3><a href="https://apexcharts.com/">Apexcharts</a></h3>
      <h3><a href="https://react-query.tanstack.com/">React Query</a></h3>
      <h3><a href="https://github.com/reduxjs/redux-thunk">Redux thunk</a></h3>
      <h3><a href="https://github.com/rt2zz/redux-persist">Redux persist</a></h3>
      <h3><a href="https://react-hook-form.com/"> React Hook Form</a></h3>

    </LayoutDashboard>
  );
};

export default Home;
