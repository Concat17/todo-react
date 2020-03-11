// import * as MyTypes from "MyTypes";
// import { actionTypes } from "../actions";

// interface ITodoModel {
//   count: number;
//   list: string[];
// }

// const Notes: NoteModel[] = [
//   {
//     id: 1,
//     title: "first",
//     todos: [
//       {
//         id: 1,
//         name: "Learn React",
//         content: "Learn React",
//         priority: "High"
//       },
//       {
//         id: 2,
//         name: "Buy food",
//         content: "Buy food",
//         priority: "Normal"
//       }
//     ]
//   }
// ];

// export const initialState: MyTypes.NoteModel[] =
//   {
//     id: 1,
//     title: "first",
//     todos: [
//       {
//         id: 1,
//         name: "Learn React",
//         content: "Learn React",
//         priority: "High"
//       },
//       {
//         id: 2,
//         name: "Buy food",
//         content: "Buy food",
//         priority: "Normal"
//       }
//     ]
//   }
// };

// export const todoReducer = (
//   state: ITodoModel = initialState,
//   action: MyTypes.RootAction
// ) => {
//   switch (action.type) {
//     case actionTypes.ADD: {
//       return {
//         ...state,
//         count: state.count + 1,
//         list: [...state.list, action.payload]
//       };
//     }
//     default:
//       return state;
//   }
// };
