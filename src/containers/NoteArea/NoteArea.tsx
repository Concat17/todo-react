import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import * as MyTypes from "MyTypes";
import { actionTypes } from "../../actions";

import NoteContainer from "../Note/Note";

import "./NoteArea.css";

interface NoteAreaConnectedProps {
  notes: MyTypes.NoteModel[];
  addNote: (noteId: number, todoId: number) => object;
}

class NoteAreaContainer extends React.Component<NoteAreaConnectedProps> {
  drop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const moveData = JSON.parse(e.dataTransfer.getData("element_id"));
    const element = document.getElementById(moveData.id);

    if (element && element.className === "note-wrapper") {
      element.style.display = "";
      element.style.position = "absolute";

      (e.target as HTMLDivElement).appendChild(element);

      element.style.left = e.pageX.toString();
      element.style.top = e.pageY.toString();
    }

    if (
      element &&
      element.className == "todo-item" &&
      element.getAttribute("data-candrop") == "true"
    ) {
      const parent = document.getElementById(moveData.parentId);
      const from = parseInt(parent.getAttribute("data-storeid"));
      const todo = parseInt(element.getAttribute("data-storeid"));
      this.props.addNote(from, todo);
    }
    element.setAttribute("data-candrop", "true");
  };

  dragOver = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div
        className="notes-wrapper"
        onDrop={this.drop}
        onDragOver={this.dragOver}
      >
        {this.props.notes.map(note => {
          return <NoteContainer key={`note-${note.id}`} noteData={note} />;
        })}
      </div>
    );
  }
}

const MapStateToProps = (store: MyTypes.ReducerState) => {
  return {
    notes: store.noteArea
  };
};

const MapDispatchToProps = (dispatch: Dispatch<MyTypes.RootAction>) => ({
  addNote: (noteId: number, todoId: number) =>
    dispatch({
      type: actionTypes.ADDNOTE,
      payload: { noteId, todoId }
    })
});

// export default NoteAreaContainer;
export default connect(MapStateToProps, MapDispatchToProps)(NoteAreaContainer);
