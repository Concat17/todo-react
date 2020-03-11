import * as React from "react";

import "./TodoItem.css";

type TodoItemProps = {
  name: string;
  content: string;
  priority: string;
};

const TodoItem: React.FunctionComponent<TodoItemProps> = (
  props: TodoItemProps
) => {
  return <div className="todo-item">{props.content}</div>;
};

export default TodoItem;
