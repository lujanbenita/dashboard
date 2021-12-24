import FavoriteIcon from '../icons/favoriteIcon';
import TrashIcon from '../icons/trashIcon';

const Contact = ({
  item,
  name,
  lastName,
  position,
  url,
  onClick,
  favorite,
  icons = true,
  handleFavorite,
  handleRemove,
  index
}) => {

  return (
    <div className="contacts__contact" >
      <div className="contacts__row" onClick={() => onClick(item)}>
        <div className="contacts__container-img">
          {url !== "" ? <img src={url}  alt="" />
          :
            <span>{`${name[0]} ${lastName[0]}`}</span>
          }
        </div>
        <div className="contacts__contact-content">
          <div className="contacts__contact-name" >{`${name} ${lastName}`} </div>
          <div className="contacts__contact-position">{position}</div>
        </div>
      </div>
      {icons &&
        <div className="contacts__contact-icons">
        <div className="contacts__contact-icon" onClick={() => handleFavorite(item)}>
          {favorite
            ?  <FavoriteIcon className="favorite"/>
            :  <FavoriteIcon />
          }
          </div>
          <div className="contacts__contact-icon">
            <TrashIcon onClick={() => handleRemove(item)} />
          </div>
        </div>
      }
    </div>
  );
};

export default Contact;