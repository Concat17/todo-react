import * as React from "react";
import { connect } from "react-redux";
import NoteContainer from "../Note/Note";

import * as MyTypes from "MyTypes";

import "./NoteArea.css";

interface NoteAreaConnectedProps {
  notes: MyTypes.NoteModel[];
}

class NoteAreaContainer extends React.Component<NoteAreaConnectedProps> {
  drop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const element_id = e.dataTransfer.getData("element_id");
    const element = document.getElementById(element_id);

    if (element && element.className == "note-wrapper") {
      element.style.display = "";
      element.style.position = "absolute";

      (e.target as HTMLDivElement).appendChild(element);

      element.style.left = e.pageX.toString();
      element.style.top = e.pageY.toString();
    }

    if (element && element.className == "todo-item") {
      console.log("todo was dropped");
    }
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

const MapDispatchToProps = () => ({});

// export default NoteAreaContainer;
export default connect(MapStateToProps, MapDispatchToProps)(NoteAreaContainer);
