import * as MyTypes from "MyTypes";
import { actionTypes } from "../actions";

export const initialState: MyTypes.NoteModel = {
  id: 1,
  title: "first",
  todos: [
    {
      id: 1,
      name: "Learn React",
      content: "Learfdfdfn React",
      priority: "High"
    },
    {
      id: 2,
      name: "Buy food",
      content: "Bufffy food",
      priority: "Normal"
    }
  ]
};

export const noteReducer = (
  state: MyTypes.NoteModel = initialState,
  action: MyTypes.RootAction
) => {
  switch (action.type) {
    case actionTypes.ADD: {
      let newState = {
        id: state.id,
        title: state.title,
        todos: [
          ...state.todos,
          {
            id: state.todos[state.todos.length - 1].id + 1,
            name: action.payload.name,
            content: action.payload.id,
            priority: action.payload.priority
          }
        ]
      };
      return newState;
    }
    default: {
      console.log("default");
      return state;
    }
  }
};
