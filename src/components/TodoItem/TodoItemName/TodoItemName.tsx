import * as React from "react";

interface TodoItemNameProps {
  name: string;
}

const TodoItemName: React.FC<TodoItemNameProps> = (
  props: TodoItemNameProps
) => {
  return <div>{props.name}</div>;
};

export default TodoItemName;
