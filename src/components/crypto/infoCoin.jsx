
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const InfoCoin = ({dataCoin}) => {
  return (
    <div className="crypto__head">
      <img src={dataCoin.image.small} alt="symbol"/>
      <div className="crypto__titles">
        <span className="crypto__title">{dataCoin.name}</span>
        <span className="crypto__id">{dataCoin.symbol}</span>
      </div>
      <div className="crypto__price">{numberWithCommas(dataCoin.market_data.current_price.eur)} €</div>
      <div className="crypto__rank">Rank: {dataCoin.coingecko_rank}</div>
    </div>
  );
};

export default InfoCoin;