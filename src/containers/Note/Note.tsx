import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import * as MyTypes from "MyTypes";
import { actionTypes } from "../../actions";

import NoteFooter from "../../components/NoteFooter/NoteFooter";
import NoteTitle from "../../components/NoteTitle/NoteTitle";
import TodoList from "../../components/TodoList/TodoList";
import AddTodoButton from "../../components/AddTodoButton/AddTodoButton";
import EditableTodo from "../../components/EditableTodo/EditableTodo";

import "./Note.css";

interface NoteContainerState {
  isEditable: boolean;
  editableName?: string;
  editableContent?: string;
}

interface NoteConnectedProps {
  addTodo: (
    id: number,
    name: string,
    content: string,
    priority: string
  ) => object;
}

interface NoteOwnProps {
  noteData: MyTypes.NoteModel;
}

class NoteContainer extends React.Component<
  NoteOwnProps & NoteConnectedProps,
  NoteContainerState
> {
  constructor(props) {
    super(props);

    this.state = {
      isEditable: false
    };
  }

  handleTitleOnClick = () => {};

  handleAddTodoButtonOnClick = () => {
    this.setState({
      isEditable: !this.state.isEditable
    });
  };

  handleEditable = (name, content) => {
    this.props.addTodo(this.props.noteData.id, name, content, "e");
    this.setState({
      isEditable: false
    });
  };

  render() {
    return (
      <div className="note-wrapper">
        <NoteTitle
          onClick={this.handleTitleOnClick}
          title={this.props.noteData.title}
        />
        <TodoList todos={this.props.noteData.todos} />
        {this.state.isEditable ? (
          <EditableTodo handleSave={this.handleEditable} />
        ) : (
          <AddTodoButton onClick={this.handleAddTodoButtonOnClick} />
        )}
        <NoteFooter />
      </div>
    );
  }
}

const MapStateToProps = (store: MyTypes.ReducerState, props: NoteOwnProps) => {
  return {
    id: props.noteData.id,
    title: store.todo.title,
    todos: store.todo.todos
  };
};

const MapDispatchToProps = (dispatch: Dispatch<MyTypes.RootAction>) => ({
  addTodo: (id: number, name: string, content: string, priority: string) =>
    dispatch({
      type: actionTypes.ADD,
      payload: { id, name, content, priority }
    })
});

export default connect(MapStateToProps, MapDispatchToProps)(NoteContainer);

//export default NoteContainer;
