import React, { useState } from "react";
interface Props {
  addTodo: AddTodo;
}

const TodoInputForm: React.FC<Props> = ({ addTodo }) => {
  const [text, setText] = useState("");
  return (
    <div>
      <input
        type="text"
        value={text}
        placeholder="Todo..."
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          addTodo(text);
          setText("");
        }}
      >
        +
      </button>
    </div>
  );
};

export default TodoInputForm;
