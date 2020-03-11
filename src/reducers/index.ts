import { combineReducers } from "redux";
//import { todoReducer } from "./todoReducers";
import { noteReducer } from "./noteReducer";

const rootReducer = combineReducers({
  todo: noteReducer
});

export default rootReducer;
