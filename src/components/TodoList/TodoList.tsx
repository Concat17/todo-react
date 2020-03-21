import * as React from "react";

import TodoItem from "../TodoItem/TodoItem";

import * as MyTypes from "MyTypes";

import "./TodoList.css";

interface TodoListProps {
  todos: MyTypes.TodoModel[];
}

const TodoList: React.FunctionComponent<TodoListProps> = (
  props: TodoListProps
) => {
  return (
    <ul className="todo-list">
      {props.todos.map(({ id, name, content, priority }) => {
        return (
          <TodoItem
            key={`todo-${id}`}
            id={id.toString()}
            name={name}
            content={content}
            priority={priority}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
