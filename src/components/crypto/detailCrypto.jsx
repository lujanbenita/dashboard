import TitleCard from "../common/titleCard";
import InfoCoin from "./infoCoin";
import InfoLinks from "./infoLinks";
import MainChart from "./mainChart";
import MaxMin from "./maxMin";
import PriceChangePercentage from "./priceChangePercentage";
import Sentiment from "./sentiment";

const DetailCrypto = ({bitcoin, seriesData, setSelectedCoin}) => {

	return (
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
	);
};

export default DetailCrypto;