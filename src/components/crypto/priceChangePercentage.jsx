import TitleCard from "../common/titleCard";

const PriceChangePercentage = ({dataCoin}) => {
console.log('dataCoin', dataCoin);

  const signalNumber = (number) => {
    if(Math.sign(number) === 1 || Math.sign(number) === 0 ) return true 
    if(Math.sign(number) === -1) return false
  }

  return (
    <div className="crypto__price-change">
      <TitleCard title={"h4"}>price change percentage</TitleCard>

      <table border="1">
        <thead>
          <tr>
            <td>1 Year</td>
            <td>1 Mounth</td>
            <td>1 Week</td>
            <td>24 Houres</td>
            <td>1 Hour</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            {dataCoin.market_data.price_change_percentage_24h !== null &&
            <>
              <td className={signalNumber(dataCoin.market_data.price_change_percentage_1y) ? "green" : "red"}>
                {(dataCoin.market_data.price_change_percentage_1y).toFixed(2)}%
              </td>
              <td className={signalNumber(dataCoin.market_data.price_change_percentage_30d) ? "green" : "red"}>
                {(dataCoin.market_data.price_change_percentage_30d).toFixed(2)}%
              </td>
              <td className={signalNumber(dataCoin.market_data.price_change_percentage_7d) ? "green" : "red"}>
                {(dataCoin.market_data.price_change_percentage_7d).toFixed(2)}%
              </td>
              <td className={signalNumber(dataCoin.market_data.price_change_percentage_24h) ? "green" : "red"}>
                {(dataCoin.market_data.price_change_percentage_24h).toFixed(2)}%
              </td>
              <td className={signalNumber(dataCoin.market_data.price_change_percentage_1h_in_currency.eur) ? "green" : "red"}>
                {(dataCoin.market_data.price_change_percentage_1h_in_currency.eur).toFixed(2)}%
              </td>
            </>
          }
          </tr>
        </tbody>
      </table>

    </div>
  );
};

export default PriceChangePercentage;