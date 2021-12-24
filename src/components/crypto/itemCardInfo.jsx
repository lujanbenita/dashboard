import { formatNumberThousands } from '../../utils/formatNumbers';

const ItemCardInfo = ({ coin, setSelectedCoin }) => (
  <div className='crypto-main__card' onClick={() => setSelectedCoin(coin.id)}>
    <div className='crypto-main__card-info'>
      <div className='crypto-main__card-rank'>{coin.market_cap_rank}</div>
        <div className='crypto-main__card-img'>
          <img src={coin.image} alt="" />
        </div>
      <div className='crypto-main__card-title'>{coin.name}</div>
    </div>
    <div className='crypto-main__card-current'>
      <div className={Math.sign(coin.price_change_percentage_24h) === 1 ? "green" : "red"}>
        {(coin.price_change_percentage_24h).toFixed(2)}%
      </div>
      <div className='crypto-main__card-price'>{formatNumberThousands(coin.current_price)}€</div>
    </div>
  </div>
);

export default ItemCardInfo;