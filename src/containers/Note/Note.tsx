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
  position: {
    left: string;
    top: string;
  };
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
  transferTodo: (from: number, to: number, todo: number) => object;
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
      position: {
        left: "",
        top: ""
      },
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

  dragStart = (e: React.DragEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    // if (target.className == "todo-item") {
    //   const parent = target.parentElement.parentElement;
    //   const data = { id: target.id, parentId: parent.id };
    //   e.dataTransfer.setData("element_id", JSON.stringify(data));
    // } else {
    //   e.dataTransfer.setData("element_id", target.id);
    // }

    const parent = target.parentElement.parentElement;
    const data = { id: target.id, parentId: parent.id };
    e.dataTransfer.setData("element_id", JSON.stringify(data));

    setTimeout(() => {
      target.style.display = "none";
    }, 0);
  };

  dragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  drop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const moveData = JSON.parse(e.dataTransfer.getData("element_id"));

    const element = document.getElementById(moveData.id);
    const parent = document.getElementById(moveData.parentId);

    const from = parseInt(parent.getAttribute("data-storeid"));
    const to = this.props.noteData.id;
    const todo = parseInt(element.getAttribute("data-storeid"));

    if (element.className == "todo-item") {
      element.setAttribute("data-candrop", "false");
      this.props.transferTodo(from, to, todo);
    }
  };

  render() {
    return (
      <div
        id={`note-${this.props.noteData.id.toString()}`}
        data-storeid={this.props.noteData.id}
        className="note-wrapper"
        onDragStart={this.dragStart}
        onDragOver={this.dragOver}
        onDrop={this.drop}
        draggable="true"
      >
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
      type: actionTypes.ADDTODO,
      payload: { id, name, content, priority }
    }),
  transferTodo: (from: number, to: number, todo: number) =>
    dispatch({
      type: actionTypes.TRANSFER,
      payload: { from, to, todo }
    })
});

export default connect(MapStateToProps, MapDispatchToProps)(NoteContainer);

//export default NoteContainer;
