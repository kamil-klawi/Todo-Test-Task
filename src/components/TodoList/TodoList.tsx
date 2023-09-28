import AddTodo from '../../components/AddTodo/AddTodo';
import EditTodo from '../../components/EditTodo/EditTodo';
import Footer from '../../components/Footer/Footer';
import Todo from '../../components/Todo/Todo';
import { useStore } from '../../store';
import { TStore } from '../../types/Store';
import { useState } from 'react';

export default function TodoList() {
  const [showComplete, setShowComplete] = useState(false);
  const { todos, deleteTodo, changeTodoStatus, editMode, editTodo, addTodo } =
    useStore<TStore>((state) => state);

  const filterByIsComplete = () => {
    return todos.filter((todo) => !todo.isComplete);
  };

  const filterByIsNotComplete = () => {
    return todos.filter((todo) => todo.isComplete);
  };

  return (
    <div className="container mx-auto px-4">
      <AddTodo addTodo={addTodo} />
      <div className="flex justify-center items-center m-3">
        <button
          className="font-bold py-2 px-4 rounded bg-green-400 text-white hover:bg-green-700 ml-3"
          onClick={() => setShowComplete(!showComplete)}
        >
          {showComplete ? 'Zakończone' : 'Niewykonane'}
        </button>
      </div>
      <main className="flex justify-center items-center flex-col">
        {!showComplete &&
          filterByIsComplete().map((todo: TStore) =>
            todo.isEditMode ? (
              <EditTodo
                key={todo.id}
                id={todo.id}
                name={todo.name}
                editTodo={editTodo}
              />
            ) : (
              <Todo
                key={todo.id}
                id={todo.id}
                name={todo.name}
                isComplete={todo.isComplete}
                deleteTodo={() => deleteTodo(todo.id)}
                changeTodoStatus={() => changeTodoStatus(todo.id)}
                editMode={() => editMode(todo.id)}
              />
            ),
          )}
        {showComplete &&
          filterByIsNotComplete().map((todo: TStore) =>
            todo.isEditMode ? (
              <EditTodo
                key={todo.id}
                id={todo.id}
                name={todo.name}
                editTodo={editTodo}
              />
            ) : (
              <Todo
                key={todo.id}
                id={todo.id}
                name={todo.name}
                isComplete={todo.isComplete}
                deleteTodo={() => deleteTodo(todo.id)}
                changeTodoStatus={() => changeTodoStatus(todo.id)}
                editMode={() => editMode(todo.id)}
              />
            ),
          )}
      </main>
      <Footer />
    </div>
  );
}
