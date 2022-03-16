interface Todo {
  text: string;
}

type AddTodo = (text: string) => void;

type HandleDeleteTodo = (id: number) => void;
