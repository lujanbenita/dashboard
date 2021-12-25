import { IS_CURRENT_DAY, NEW_CONTACT, NEW_NOTE, REMOVE_CONTACT, REMOVE_NOTE, THEME, UPDATE_NOTE, UPDATE_POST } from "./userActionTypes"

const initialState = {
  post: "Today is gonna be the day...",
  notes: [
    {
      id: 1,
      note: "This is my first note",
      date: "17/10/21",
      noteType: "green",
    },
  ],
  contacts: [
    {
      id: 1,
      name: "Tony",
      lastName: "Stark",
      url: "https://www.giantfreakinrobot.com/wp-content/uploads/2020/12/robertdowney-edited-1-900x599.jpg",
      company: "Industrias Stark",
      position: "CEO",
      email: "hi@stark.com",
      phone: "666777888",
      city: "Malibu",
      note: "filthy rich",
      favorite: true,
    },
  ],
  isCurrentDay: false,
  theme: "theme__blue",
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_POST:
      return {
        ...state,
        post: action.payload,
      }

    case NEW_NOTE:
      return {
        ...state,
        notes: action.payload,
      }

    case REMOVE_NOTE:
      return {
        ...state,
        notes: action.payload,
      }

    case UPDATE_NOTE:
      return {
        ...state,
        notes: action.payload,
      }

    case NEW_CONTACT:
      return {
        ...state,
        contacts: action.payload,
      }

    case REMOVE_CONTACT:
      return {
        ...state,
        contacts: action.payload,
      }

    case IS_CURRENT_DAY:
      return {
        ...state,
        isCurrentDay: action.payload,
      }

    case THEME:
      return {
        ...state,
        theme: action.payload,
      }

    default:
      return state
  }
}
