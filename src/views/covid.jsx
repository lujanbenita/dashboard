import LayoutDashboard from '../layout/layoutDashboard';
import UseFecthCovid from '../hooks/useFecthCovid';
import Loading from '../components/common/loading';
import CovidChartYear from '../components/covid/covidChartYear';
import CardCovid from '../components/covid/molecules/cardCovid';

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
        <CardCovid
          titleCard="Spain Total"
          numberRow={4}
          titles={["infected", "UCI", "Deceased"]}
          responses={[dataCovid.infected,dataCovid.ICU,dataCovid.deceased]}
        />

        <CardCovid
          titleCard="Spain daily"
          numberRow={4}
          titles={["daily Infected", "newly Deceased"]}
          responses={[dataCovid.dailyInfected,dataCovid.newlyDeceased]}
        />
        
        <CardCovid
          titleCard="Spain Vaccine"
          numberRow={4}
          titles={["daily Infected", "managed Dose","number Of people Full Guide Line"]}
          responses={[
            dataCovid.deliveredDose,
            dataCovid.managedDose,
            dataCovid.numberOfpeopleFullGuideLine
          ]}
        />
          
        {dataRegion !== undefined &&
          <CardCovid
          titleCard="Spain Regions"
          numberRow={4}
          titles={["Infected", "deceased","daily Infected","hospitalised","ICU"]}
          responses={[
            dataRegion.infected,
            dataRegion.deceased,
            dataRegion.dailyInfected,
            dataRegion.hospitalised,
            dataRegion.ICU,
          ]}  
          dataRegion={dataRegion}
          dataCovid={dataCovid}
          handleOnChange={handleOnChange}
          />
        }

        <CardCovid
          titleCard="World Info"
          numberRow={4}
          titles={["cases", "critical","deaths","recovered","tests"]}
          responses={[
            dataWorld.cases,
            dataWorld.critical,
            dataWorld.deaths,
            dataWorld.recovered,
            dataWorld.tests,
          ]}
        />

        <CardCovid
          titleCard="World Today"
          numberRow={4}
          titles={["today Cases", "today Recovered","today Deaths"]}
          responses={[
            dataWorld.todayCases,
            dataWorld.todayRecovered,
            dataWorld.todayDeaths
          ]}
        />
        
        <CovidChartYear />

      </>
      }
    </LayoutDashboard>
  );
};

export default Covid;