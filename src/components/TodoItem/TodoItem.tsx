import * as React from "react";
import TodoItemName from "./TodoItemName/TodoItemName";
import TodoItemContent from "./TodoItemContent/TodoItemContent";

import "./TodoItem.css";

type TodoItemProps = {
  id: string;
  name: string;
  content: string;
  priority: string;
};

const TodoItem: React.FunctionComponent<TodoItemProps> = (
  props: TodoItemProps
) => {
  const dragStart = e => {
    const target = e.target;

    e.dataTransfer.setData("element_id", target.id);

    setTimeout(() => {
      target.style.display = "none";
    }, 0);
  };

  const dragOver = () => {
    // console.log("drag over");
  };

  return (
    <div
      id={`todo-${props.id}`}
      data-storeid={props.id}
      className="todo-item"
      draggable="true"
      onDragStart={dragStart}
      onDragOver={dragOver}
    >
      <TodoItemName name={props.name}></TodoItemName>
      <TodoItemContent content={props.content}></TodoItemContent>
    </div>
  );
};

export default TodoItem;
