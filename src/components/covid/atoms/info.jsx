import { formatNumberThousands } from '../../../utils/formatNumbers';

const Info = ({item}) =>(
  <div className='info-atom'>
    <div className="blue">{item.title} </div>
    <div className="green"> {formatNumberThousands(item.responses)}</div>    
  </div>
);

export default Info;