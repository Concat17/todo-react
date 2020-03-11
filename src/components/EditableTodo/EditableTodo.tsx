import * as React from "react";

import "./EditableTodo.css";

interface EditableTodoProps {
  handleSave: (name, content) => void;
}

interface EditableTodoState {
  name: string;
  content: string;
}

class EditableTodo extends React.Component<
  EditableTodoProps,
  EditableTodoState
> {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      content: ""
    };
  }

  handleSaveClick = () => {
    console.log(this.state);
    this.props.handleSave(this.state.name, this.state.content);
  };

  handleEditableNameChange = e => {
    this.setState({
      name: e.target.value,
      content: this.state.content
    });
  };

  handleEditableContentChange = e => {
    this.setState({
      name: this.state.name,
      content: e.target.value
    });
    let a = 3;
  };

  render() {
    return (
      <div className="add-todo-button">
        <input
          className="editable-name"
          placeholder={"Enter name"}
          onChange={this.handleEditableNameChange}
        />
        <input
          className="editable-content"
          placeholder={"Enter content"}
          onChange={this.handleEditableContentChange}
        />
        <button className="editable-save" onClick={this.handleSaveClick}>
          Save
        </button>
      </div>
    );
  }
}

export default EditableTodo;
