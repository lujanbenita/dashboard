
import MaxMin from '../components/crypto/maxMin';
import InfoCoin from '../components/crypto/infoCoin';
import Sentiment from '../components/crypto/sentiment';
import MainChart from '../components/crypto/mainChart';
import TitleCard from '../components/common/titleCard';
import InfoLinks from '../components/crypto/infoLinks';
import LayoutDashboard from '../layout/layoutDashboard';
import PriceChangePercentage from '../components/crypto/priceChangePercentage';
import Loading from '../components/common/loading';
import UseFetchCryptos from '../hooks/useFetchCryptos';
import RankMain from '../components/crypto/rankMain';


const Bitcoin = () => {

  const {
    isLoading,
    mainData,
   // metalsData,
    bitcoin,
    seriesData,
    selectedCoin,
    setSelectedCoin,
  } = UseFetchCryptos()
  
  return (
    <LayoutDashboard title={"CRYPTOS"}>

      {isLoading ? <Loading />
        :
        selectedCoin === undefined || selectedCoin === null ?
        <RankMain
          mainData={mainData}
          setSelectedCoin={setSelectedCoin}
        />
          :
          bitcoin !== undefined && 
          <div className="crypto">
            <div className='crypto__breadcrumb'>
              <span className='crypto__breadcrumb-base' onClick={() => setSelectedCoin(null)}>CRYPTOS</span>
              <span>{'>'}</span>
              {bitcoin.name}    
            </div>
            <InfoCoin dataCoin={bitcoin} />
          
            <div className="crypto__container">
              <div className="card-crypto card size-row-8">
                <div className="crypto__container">
                  <PriceChangePercentage dataCoin={bitcoin} />
                </div>
              </div>
              <div className="card size-row-8-auto">
                <div className="crypto__container">
                  <MaxMin dataCoin={bitcoin} />
                </div>
              </div>
            
              <div className="card size-row-8-auto">
                <div className="crypto__container">
                  <InfoLinks dataCoin={bitcoin} />
                </div>
              </div>
            
              <div className="card-crypto card size-row-8">
                <div className="crypto__container">
                  <Sentiment dataCoin={bitcoin} />
                </div>
              </div>
            </div>

            <MainChart dataCoin={seriesData} />
            
            <div className="card">
              <TitleCard>Description crypto</TitleCard>
              <div className="crypto__description" dangerouslySetInnerHTML={{__html: bitcoin.description?.es}}></div>
            </div>
          </div>
      }

    </LayoutDashboard>
  );
};

export default Bitcoin;