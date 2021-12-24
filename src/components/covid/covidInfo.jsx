import { formatNumberThousands } from '../../utils/formatNumbers';
import TitleCard from '../common/titleCard';

const CovidInfoCard = ({ titleCard, numberRow, titles, responses }) => {

  let data = []
  for (let index = 0; index < titles.length; index++) {
    data.push({
      title: titles[index],
      responses: responses[index]
    })
  }

  return (
    <div className={`card-covid card size-row-${numberRow}`}>
      <TitleCard>{titleCard}</TitleCard>
      {data.map(item => {
        return (
          <>
            <div className="card-covid__title blue">{item.title} </div>
            <div className="card-covid__response green"> {formatNumberThousands(item.responses)}</div>    
          </>
        )
      })}
    </div>
  );
};

export default CovidInfoCard;