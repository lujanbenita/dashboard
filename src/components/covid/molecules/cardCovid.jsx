import { memo } from 'react';

import Info from '../atoms/info';
import Select from '../atoms/select';
import Title from '../atoms/title';

const CardCovid = ({ titleCard, numberRow, titles, responses, dataCovid, handleOnChange, dataRegion  }) => {

  let data = []
  for (let index = 0; index < titles.length; index++) {
    data.push({
      title: titles[index],
      responses: responses[index]
    })
  }

  return (
    <div className={`card-covid card size-row-${numberRow}`}>
      <Title>{titleCard}</Title>

      {dataCovid !== undefined &&
        <Select dataCovid={dataCovid} handleOnChange={handleOnChange} />
      }

      <div className='card-covid__list'>
        {data.map((item,index) => <Info item={item} key={index} /> )}
      </div>
    </div>
  );
};

export default memo(CardCovid);