import { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { newNote, updateNote } from '../redux/user/userAction';

const UseNotes = () => {

  const notesRedux = useSelector(state => state.user.notes)
  const dispatch = useDispatch()

  const [notes, setNotes] = useState(notesRedux)
  const [note, setNote] = useState()

  const handleSelect = item => e => {
    setNote({
      ...note,
      [e.target.name] : e.target.value
    })

    const res = notes.map(el => {
      if (el.id === item.id) {
        el.noteType = e.target.value
        return el
      }
      return el
    })
    dispatch(updateNote(res))
    return setNotes(res)
  }

  const handleOnChangeNote = item => e => {
    const newNote = e.target.value
    const res = notes.map(el => {
      if (el.id === item.id) {
        el.note = newNote
        return el
      }
      return el
    })
    dispatch(updateNote(res))
    setNotes(res)
  }

  const handleNewNote = () => {
    let newId = 1
    notes.map(el => {
      if (el.id >= newId) {
        newId = el.id + 1
      }
    })

    let date = new Date()
    date = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`

    dispatch(newNote([
      ...notes,
      {
        id: newId,
        note: "New note",
        date: date,
        noteType: 'violet'
      }
    ]))

    setNotes([
      ...notes,
      {
        id: newId,
        note: "New note",
        date: date,
        noteType: 'violet'
      }
    ])
  }

  return {
    notes,
    note,
    setNote,
    setNotes,
    handleSelect,
    handleNewNote,
    handleOnChangeNote,
  }
};

export default UseNotes;