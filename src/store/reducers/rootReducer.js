import { combineReducers } from "redux";
import { lists } from "./listReducer/reducer";

export const rootReducer = combineReducers({
  lists,
});
