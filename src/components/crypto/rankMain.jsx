import ItemCardInfo from './itemCardInfo';

const RankMain = ({mainData, setSelectedCoin}) =>(
  <div className='crypto-main'>
    <div className='crypto-main__card-head'>
      <div className='crypto-main__card-head-rank'>rank</div>
      <div className='crypto-main__card-head-coin'>coin</div>
      <div className='crypto-main__card-head-24h'>last 24h</div>
      <div className='crypto-main__card-head-price'>price</div>
    </div>
    { mainData !== undefined && 
      mainData.map(coin =>
        <ItemCardInfo
          coin={coin}
          setSelectedCoin={setSelectedCoin}
          key={coin.market_cap_rank}
        />
    )}
  </div>
);

export default RankMain;