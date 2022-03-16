import React from "react";

interface Props {
  todo: Todo;
}

const TodoItem: React.FC<Props> = ({ todo }) => {
  const HandleDeleteTodo = () => {};

  return (
    <div>
      <input type="checkbox"></input>
      {todo.text}
      <button
        className="DeleteTodo"
        onClick={(e) => {
          e.preventDefault();
          HandleDeleteTodo();
        }}
      >
        -
      </button>
    </div>
  );
};

export default TodoItem;
