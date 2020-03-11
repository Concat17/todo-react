import * as React from "react";

import "./TodoItemContent.css";

interface TodoItemContentProps {
  content: string;
}

const TodoItemContent: React.FC<TodoItemContentProps> = (
  props: TodoItemContentProps
) => {
  return <div className="todo-item-content">{props.content}</div>;
};

export default TodoItemContent;
