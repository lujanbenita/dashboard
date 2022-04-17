import LayoutDashboard from '../layout/layoutDashboard';
import Loading from '../components/common/loading';
import UseFetchCryptos from '../hooks/useFetchCryptos';
import RankMain from '../components/crypto/rankMain';
import DetailCrypto from '../components/crypto/detailCrypto';

const Bitcoin = () => {

  const {
    isLoading,
    mainData,
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
          <DetailCrypto 
            bitcoin={bitcoin} 
            seriesData={seriesData}
            setSelectedCoin={setSelectedCoin}
          />
      }

    </LayoutDashboard>
  );
};

export default Bitcoin;