import { useDispatch } from "react-redux";
import { removeNote } from "../../redux/user/userAction";

const Notes = ({ item, notes, setNotes, setNote }) => {
  const { note, date, noteType } = item

  const dispatch = useDispatch()
  
  const handleClick = (item) => {
    setNote(item)
  }

  const handleRemove = () => {
    const res = notes.filter(el => el.id !== item.id)
    dispatch(removeNote(res))
    setNotes(res)
  }

  return (
    <li className="notes__item" style={{borderLeft: `2px solid var(--${noteType})`}} onClick={() => handleClick(item)}>
      <div className="notes__item-title green" >{note}</div>
      <div className="notes__item-date blue">{date}</div>
      <div className="notes__item-remove">
        <img src="/images/icons/trash16.png" alt="trash" onClick={() => handleRemove() }/>
      </div>
    </li>
  );
};

export default Notes;