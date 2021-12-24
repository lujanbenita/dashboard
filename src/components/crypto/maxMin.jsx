import TitleCard from '../common/titleCard';
import ArrowIcon from '../icons/arrowIcon';

const MaxMin = ({dataCoin}) => {
  return (
    <div className="crypto__max-min">
      <TitleCard title={"h4"}>Max/Min last 24 hours</TitleCard>
  
      <div className="row">
        <ArrowIcon className="positive-icon" fill="#08C989"/>
        <div className="crypto__rank">{dataCoin.market_data.high_24h.eur}</div>
      </div>
      <div className="row">
        <ArrowIcon fill="#0882DF"/>
        <div className="crypto__rank">{dataCoin.market_data.high_24h.eur - dataCoin.market_data.low_24h.eur}</div>
      </div>
      <div className="row">
        <ArrowIcon className="negative-icon" fill="#E57388"/>
        <div className="crypto__rank"> {dataCoin.market_data.low_24h.eur}</div>
      </div>
    </div>
  );
};

export default MaxMin;