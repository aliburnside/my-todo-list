import React from "react";
import ToDoItem from "./TodoItem";
interface Props {
  todo: Todo[];
}

const TodoList: React.FC<Props> = ({ todo }) => {
  return (
    <div>
      <ul>
        {todo.map((todo) => (
          <ToDoItem key={todo.text} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
