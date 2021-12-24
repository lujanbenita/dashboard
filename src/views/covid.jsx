import LayoutDashboard from '../layout/layoutDashboard';
import CovidInfoCard from '../components/covid/covidInfo';
import UseFecthCovid from '../hooks/useFecthCovid';
import Loading from '../components/common/loading';
import CovidInfoSelect from '../components/covid/covidInfoSelect';
import CovidChartYear from '../components/covid/covidChartYear';

const Covid = () => {
  
  const {
    isLoading,
    dataCovid,
    dataWorld,
    dataRegion,
    handleOnChange,
  } = UseFecthCovid()
  
  return (
    <LayoutDashboard className="flex"  title={"COVID"}>

      {isLoading || dataCovid === undefined || dataWorld === undefined ? <Loading/> 
        :
      <>
        <CovidInfoCard
          titleCard="Spain Total"
          numberRow={6}
          titles={["infected", "UCI", "Deceased"]}
          responses={[dataCovid.infected,dataCovid.ICU,dataCovid.deceased]}
        />

        <CovidInfoCard
          titleCard="Spain daily"
          numberRow={6}
          titles={["daily Infected", "newly Deceased"]}
          responses={[dataCovid.dailyInfected,dataCovid.newlyDeceased]}
          />
        
        <CovidInfoCard
          titleCard="Spain Vaccine"
          numberRow={6}
          titles={["daily Infected", "managed Dose","number Of people Full Guide Line"]}
          responses={[
            dataCovid.deliveredDose,
            dataCovid.managedDose,
            dataCovid.numberOfpeopleFullGuideLine
          ]}
        />

        <CovidInfoSelect
          titleCard="Spain Regions"
          numberRow={6}
          titles={["Infected", "deceased","daily Infected","hospitalised","ICU"]}
          responses={[
            dataRegion.infected,
            dataRegion.deceased,
            dataRegion.dailyInfected,
            dataRegion.hospitalised,
            dataRegion.ICU,
          ]}  
          dataCovid={dataCovid}
          dataRegion={dataRegion}
          handleOnChange={handleOnChange}
        />

          
        <CovidChartYear />
        
        <CovidInfoCard
          titleCard="World Info"
          numberRow={6}
          titles={["cases", "critical","deaths","recovered","tests"]}
          responses={[
            dataWorld.cases,
            dataWorld.critical,
            dataWorld.deaths,
            dataWorld.recovered,
            dataWorld.tests,
          ]}
        />

        <CovidInfoCard
          titleCard="World Today"
          numberRow={6}
          titles={["today Cases", "today Recovered","today Deaths"]}
          responses={[
            dataWorld.todayCases,
            dataWorld.todayRecovered,
            dataWorld.todayDeaths
          ]}
        />
      </>
      }
    </LayoutDashboard>
  );
};

export default Covid;