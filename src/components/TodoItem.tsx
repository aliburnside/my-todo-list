import React from "react";

interface Props {
  todo: Todo;
}

const TodoItem: React.FC<Props> = ({ todo }) => {
  //const handleDeleteTodo = () = {};

  return (
    <div>
      <input type="checkbox"></input>
      {todo.text}
      <button className="DeleteTodo" onClick={() => {}}>
        -
      </button>
    </div>
  );
};

export default TodoItem;
