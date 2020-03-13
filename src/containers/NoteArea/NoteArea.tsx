import * as React from "react";
import { connect } from "react-redux";
import NoteContainer from "../Note/Note";

import * as MyTypes from "MyTypes";

import "./NoteArea.css";

interface NoteAreaConnectedProps {
  notes: MyTypes.NoteModel[];
}

class NoteAreaContainer extends React.Component<NoteAreaConnectedProps> {
  render() {
    return (
      <div className="notes-wrapper">
        {this.props.notes.map(note => {
          return <NoteContainer key={note.id} noteData={note} />;
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
