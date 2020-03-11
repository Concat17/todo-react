import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import * as MyTypes from "MyTypes";
import { actionTypes } from "../../actions";

import NoteFooter from "../../components/NoteFooter/NoteFooter";
import NoteTitle from "../../components/NoteTitle/NoteTitle";
import TodoList from "../../components/TodoList/TodoList";
import AddTodoButton from "../../components/AddTodoButton/AddTodoButton";

import "./Note.css";

interface NoteContainerState {
  id: number;
  title: string;
  todos: MyTypes.TodoModel[];
}

interface NoteContainerProps {
  // notedate?: MyTypes.NoteModel;
  id: number;
  title: string;
  todos: MyTypes.TodoModel[];
  addTodo: (
    id: number,
    name: string,
    content: string,
    priority: string
  ) => object;
  deleteTodo: (idx: number) => object;
}

class NoteContainer extends React.Component<
  NoteContainerProps,
  NoteContainerState
> {
  constructor(props) {
    super(props);
  }
  // handleButtonClick = () => {
  //   this.props.addTodo(this.state.todoInput);
  //   this.setState({
  //     todoInput: ""
  //   });
  // };

  handleDeleteButtonClick = (idx: number) => {
    this.props.deleteTodo(idx);
  };

  handleTitleOnClick = () => {
    this.props.addTodo(3, "f", "3", "e");
    let a = 77;
  };

  handleAddTodoButtonOnClick = () => {
    this.props.addTodo(3, "f", "3", "e");
  };

  render() {
    let as = this.props;
    return (
      <div className="note-wrapper">
        <NoteTitle onClick={this.handleTitleOnClick} title={this.props.title} />
        <TodoList todos={this.props.todos} />
        <AddTodoButton onClick={this.handleAddTodoButtonOnClick} />
        <NoteFooter />
      </div>
    );
  }
}

const MapStateToProps = (store: MyTypes.ReducerState) => {
  return {
    id: store.todo.id,
    title: store.todo.title,
    todos: store.todo.todos
  };
};

const MapDispatchToProps = (dispatch: Dispatch<MyTypes.RootAction>) => ({
  addTodo: (id: number, name: string, content: string, priority: string) =>
    dispatch({
      type: actionTypes.ADD,
      payload: { id, name, content, priority }
    }),
  deleteTodo: (idx: number) =>
    dispatch({ type: actionTypes.DELETE, payload: idx })
});

export default connect(MapStateToProps, MapDispatchToProps)(NoteContainer);
