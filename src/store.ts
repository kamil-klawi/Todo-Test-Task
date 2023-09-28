import { create } from 'zustand';
import { Todo } from './types/Todo';

export const useStore = create((set) => ({
  todos: [],
  addTodo: (name: string) =>
    set((state: any) => ({
      todos: [
        ...state.todos,
        {
          id: state.todos.length + 1,
          name: name,
          isComplete: false,
          isEditMode: false,
        },
      ],
    })),
  deleteTodo: (id: number) =>
    set((state: any) => ({
      todos: state.todos.filter((todo: Todo) => todo.id !== id),
    })),
  changeTodoStatus: (id: number) =>
    set((state: any) => ({
      todos: state.todos.map((todo: Todo) =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo,
      ),
    })),
  editTodo: (id: number, name: string) =>
    set((state: any) => ({
      todos: state.todos.map((todo: Todo) =>
        todo.id === id
          ? { ...todo, name: name, isEditMode: !todo.isEditMode }
          : todo,
      ),
    })),
  editMode: (id: number) =>
    set((state: any) => ({
      todos: state.todos.map((todo: Todo) =>
        todo.id === id ? { ...todo, isEditMode: !todo.isEditMode } : todo,
      ),
    })),
  filterByIsComplete: (isComplete = true) =>
    set((state: any) => ({
      todos: state.todos.filter((todo: Todo) => todo.isComplete === isComplete),
    })),
  filterByIsNotComplete: (isComplete = false) =>
    set((state: any) => ({
      todos: state.todos.filter((todo: Todo) => todo.isComplete === isComplete),
    })),
}));
