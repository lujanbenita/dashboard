import * as types from "./userActionTypes"

export const updatePost = data => {
  return dispatch => {
    dispatch({
      type: types.UPDATE_POST,
      payload: data,
    })
  }
}

export const newNote = data => {
  return dispatch => {
    dispatch({
      type: types.NEW_NOTE,
      payload: data,
    })
  }
}

export const removeNote = data => {
  return dispatch => {
    dispatch({
      type: types.REMOVE_NOTE,
      payload: data,
    })
  }
}

export const updateNote = data => {
  return dispatch => {
    dispatch({
      type: types.UPDATE_NOTE,
      payload: data,
    })
  }
}

export const newContact = data => {
  return dispatch => {
    dispatch({
      type: types.NEW_CONTACT,
      payload: data,
    })
  }
}

export const removeContact = data => {
  return dispatch => {
    dispatch({
      type: types.REMOVE_CONTACT,
      payload: data,
    })
  }
}

export const isCurrentDay = data => {
  return dispatch => {
    dispatch({
      type: types.IS_CURRENT_DAY,
      payload: data,
    })
  }
}

export const theme = data => {
  return dispatch => {
    dispatch({
      type: types.THEME,
      payload: data,
    })
  }
}
