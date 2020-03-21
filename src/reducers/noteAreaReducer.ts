import * as MyTypes from "MyTypes";
import { actionTypes } from "../actions";

export const initialState: MyTypes.NoteModel[] = [
  {
    id: 1,
    title: "first",
    todos: [
      {
        id: 1,
        name: "Learn React",
        content: "All wdddssdeek learn React",
        priority: "High"
      },
      {
        id: 2,
        name: "Buy food",
        content: "Buy many sweents and drinks",
        priority: "Normal"
      }
    ]
  },
  {
    id: 2,
    title: "first",
    todos: [
      {
        id: 1,
        name: "Learn React",
        content: "Asssll wdddssdeek learn React",
        priority: "High"
      },
      {
        id: 2,
        name: "Buy food",
        content: "Buy many sweents and drinks",
        priority: "Normal"
      }
    ]
  }
];

export const noteAreaReducer = (
  state: MyTypes.NoteModel[] = initialState,
  action: MyTypes.RootAction
) => {
  switch (action.type) {
    case actionTypes.ADD: {
      return [...state].map(note => {
        if (note.id === action.payload.id) {
          return {
            id: note.id,
            title: note.title,
            todos: [
              ...note.todos,
              {
                id: note.todos[note.todos.length - 1].id + 1,
                name: action.payload.name,
                content: action.payload.content,
                priority: action.payload.priority
              }
            ]
          };
        }
        return note;
      });
    }
    case actionTypes.TRANSFER: {
      console.log("tranfer");
      const noteFrom = state.filter(note => note.id === action.payload.from)[0];
      const todo = noteFrom.todos.filter(
        todo => todo.id == action.payload.todo
      )[0];

      const newState = [...state].map(note => {
        if (note.id === action.payload.from) {
          return {
            id: note.id,
            title: note.title,
            todos: note.todos.filter(todo => todo.id !== action.payload.todo)
          };
        }
        if (note.id === action.payload.to) {
          return {
            id: note.id,
            title: note.title,
            todos: [
              ...note.todos,
              {
                id: note.todos[note.todos.length - 1].id + 1,
                name: todo.name,
                content: todo.content,
                priority: todo.priority
              }
            ]
          };
        }
        return note;
      });

      return newState;
    }
    default: {
      return state;
    }
  }
};
