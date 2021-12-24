import { formatNumberThousands } from '../../utils/formatNumbers';
import TitleCard from '../common/titleCard';

const CovidInfoSelect = ({ titleCard, numberRow, dataCovid, dataRegion, titles, responses, handleOnChange }) => {

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
      
      <div className="card-covid__container-select">
        <select name="select" onChange={handleOnChange}>
          {dataCovid.regions.map(item => <option value={item.name} key={item.name} > {item.name} </option> )}
        </select>
      </div>
      
      {data.map(item => (
        <>
          <div className="card-covid__title blue">{item.title} </div>
          <div className="card-covid__response green"> {formatNumberThousands(item.responses)}</div>    
        </>
        )
      )}

    </div>
  );
};

export default CovidInfoSelect;