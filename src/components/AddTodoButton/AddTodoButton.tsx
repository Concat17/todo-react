import * as React from "react";

import "./AddTodoButton.css";

interface AddTodoButton {
  onClick: (event: React.MouseEvent) => void;
}

const AddTodoButton: React.FC<AddTodoButton> = (props: AddTodoButton) => {
  return (
    <div className="add-todo-button" onClick={props.onClick}>
      +
    </div>
  );
};

export default AddTodoButton;
