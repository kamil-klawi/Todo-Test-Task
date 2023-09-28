import { useState } from 'react';
import { TStore } from '../../types/Store';
import './Todo.scss';

export default function Todo(props: TStore) {
  const [isComplete, setIsComplete] = useState(props.isComplete);

  const onChange = () => {
    setIsComplete(!isComplete);
  };

  return (
    <div className="wrapper">
      <div className={isComplete ? 'line-through' : ''}>
        <input
          type="checkbox"
          checked={isComplete}
          onChange={onChange}
          onClick={props.changeTodoStatus}
          className="w-4 h-4"
        />
        <span className="ml-2 text-black text-lg">
          Zadanie: {props.id}, Nazwa: {''}
          <span className={isComplete ? 'text-gray-500' : 'text-orange-500'}>
            {props.name}
          </span>
          ,
        </span>
        <span className="ml-2 text-black text-lg">
          Status: Zadanie zostało {isComplete ? 'zakończone' : 'niewykonane'}
        </span>
      </div>
      <div className="flex justify-end items-center mt-4">
        {!isComplete && (
          <button
            className="font-bold py-2 px-4 rounded bg-blue-500 text-white hover:bg-blue-700"
            onClick={props.editMode}
          >
            Edytuj
          </button>
        )}
        <button
          className="font-bold py-2 px-4 rounded bg-rose-500 text-white hover:bg-rose-700 ml-3"
          onClick={props.deleteTodo}
        >
          Usuń
        </button>
      </div>
    </div>
  );
}
