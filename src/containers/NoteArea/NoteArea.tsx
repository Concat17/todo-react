import * as React from "react";
import NoteContainer from "../Note/Note";

import { NoteModel } from "MyTypes";

import "./NoteArea.css";

const Notes: NoteModel[] = [
  {
    id: 1,
    title: "first",
    todos: [
      {
        id: 1,
        name: "Learn React",
        content: "Learn React",
        priority: "High"
      },
      {
        id: 2,
        name: "Buy food",
        content: "Buy food",
        priority: "Normal"
      }
    ]
  }
];

class NoteAreaContainer extends React.Component {
  render() {
    return (
      <div className="notes-wrapper">
        <NoteContainer />
      </div>
    );
  }
}
export default NoteAreaContainer;
