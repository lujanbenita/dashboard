import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { newContact } from '../../redux/user/userAction';

const NewContactModal = ({setContacts, contacts, showModal, setShowModal}) => {
  const dispatch = useDispatch()
  const contactsRedux = useSelector(state => state.user.contacts)
  const [dataForm, setDataForm] = useState ({
    name: "",
    lastName: "",
    url:"",
    company: "",
    position: "",
    email: "",
    phone: "",
    city: "",
    note: "",
    favorite: false
  })

  const handleOnChange = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value
    })
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    let newId = 1
    contactsRedux.map(el => {
      if (el.id >= newId) {
        newId = el.id + 1
      }
    })

    dataForm.id = newId

    dispatch(newContact([...contacts, dataForm]))
    setContacts([...contacts, dataForm])
    setShowModal(!showModal)
  }

  return (
    <form onSubmit={handleSubmit} >
      <div className="contacts__info">
        <div className="contacts__row">
          <div className="contacts__info-title">First Name </div>
          <input type="text" name="name" className="contacts__info-response" onChange={handleOnChange}></input>
        </div>
        <div className="contacts__row">
          <div className="contacts__info-title">Last Name </div>
          <input type="text" name="lastName" className="contacts__info-response" onChange={handleOnChange}></input>
        </div>
        <div className="contacts__row">
          <div className="contacts__info-title">url</div>
          <input type="text" name="url" className="contacts__info-response" onChange={handleOnChange}></input>
        </div>
        <div className="contacts__row">
          <div className="contacts__info-title">Company </div>
          <input type="text" name="company" className="contacts__info-response" onChange={handleOnChange}></input>
        </div>
        <div className="contacts__row">
          <div className="contacts__info-title">Position </div>
          <input type="text" name="position" className="contacts__info-response" onChange={handleOnChange}></input>
        </div>
        <div className="contacts__row">
          <div className="contacts__info-title">Email </div>
          <input type="text" name="email"className="contacts__info-response" onChange={handleOnChange}></input>
        </div>
        <div className="contacts__row">
          <div className="contacts__info-title">Phone </div>
          <input type="text" name="phone" className="contacts__info-response" onChange={handleOnChange}></input>
        </div>
        <div className="contacts__row">
          <div className="contacts__info-title">City </div>
          <input type="text" name="city" className="contacts__info-response" onChange={handleOnChange}></input>
        </div>
        <div className="contacts__row">
          <div className="contacts__info-title">Note </div>
          <input type="text" name="note" className="contacts__info-response" onChange={handleOnChange}></input>
        </div>

        <button type="submit" className="">Create</button>
      </div>
    </form>
  );
};

export default NewContactModal;