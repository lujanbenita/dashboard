import { combineReducers } from "redux";
// import { shopReducer } from "./shop/shopReducer";
import { userReducer } from "./user/userReducer";

// COMBINED REDUCERS
const appReducer = combineReducers({
  user: userReducer,
//  cart: shopReducer
})


const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
