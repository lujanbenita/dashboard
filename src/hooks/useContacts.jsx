import { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { removeContact } from '../redux/user/userAction';

const UseContacts = () => {
  const dispatch = useDispatch()
  const contactsRedux = useSelector(state => state.user.contacts)
  
  const [contact, setContact] = useState()
  const [contacts, setContacts] = useState(contactsRedux)
  const [showModal, setShowModal] = useState(false)

  const handleClick = (e) => {
    setContact(e)
    if(showModal) setShowModal(false)
  }

  const handleFavoriteContacts = () => {
    const res = contacts.filter(item => item.favorite === true)
    setContacts(res)
  }

  const handleAllContacts = () =>  setContacts(contactsRedux)

  const handleFavorite = (item) => {
    const res = contacts.map(el => {
      if (el.email === item.email) {
        el.favorite = !el.favorite
        return el
      }
      return el
    })
    setContacts(res)  
  }

  const handleRemove = (item) => {
    const res = contacts.filter(el => el.email !== item.email)
    dispatch(removeContact(res))
    setContacts(res)
  }

  const handleNewContact = () => {
    setShowModal(!showModal)
  }

  return {
    contact,
    contacts,
    showModal,
    setContacts,
    setShowModal,
    handleClick,
    handleFavoriteContacts,
    handleAllContacts,
    handleFavorite,
    handleRemove,
    handleNewContact
  }
};

export default UseContacts;