import { combineReducers } from "redux";
//import { todoReducer } from "./todoReducers";
import { noteReducer } from "./noteReducer";
import { noteAreaReducer } from "./noteAreaReducer";

const rootReducer = combineReducers({
  todo: noteReducer,
  noteArea: noteAreaReducer
});

export default rootReducer;
