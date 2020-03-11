import * as React from "react";
import TodoItemName from "./TodoItemName/TodoItemName";
import TodoItemContent from "./TodoItemContent/TodoItemContent";

import "./TodoItem.css";

type TodoItemProps = {
  name: string;
  content: string;
  priority: string;
};

const TodoItem: React.FunctionComponent<TodoItemProps> = (
  props: TodoItemProps
) => {
  return (
    <div className="todo-item">
      <TodoItemName name={props.name}></TodoItemName>
      <TodoItemContent content={props.content}></TodoItemContent>
    </div>
  );
};

export default TodoItem;
