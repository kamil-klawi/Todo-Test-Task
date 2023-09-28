import { Todo } from './Todo';

interface Store {
  todos: Todo[];
  addTodo: (name: string) => void;
  deleteTodo: (id: number) => void;
  changeTodoStatus: (id: number) => void;
  editTodo: (id: number, name: string) => void;
  editMode: (id: number) => void;
  filterByIsComplete: (isComplete: boolean) => void;
  filterByIsNotComplete: (isComplete: boolean) => void;
}

export type TStore = Todo & Store;
