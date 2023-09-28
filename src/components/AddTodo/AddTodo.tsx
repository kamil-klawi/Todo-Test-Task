import { useState } from 'react';
import { TStore } from '../../types/Store';
import './AddTodo.scss';

export default function AddTodo(props: TStore) {
  const [value, setValue] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.addTodo(value);
    setValue('');
  };

  return (
    <div className="flex justify-center items-center">
      <form onSubmit={onSubmit}>
        <input
          className="form-input"
          type="text"
          name="name"
          onChange={onChange}
          value={value}
          placeholder="Dodaj zadanie"
        />
        <button className="form-btn" type="submit">
          Dodaj zadanie
        </button>
      </form>
    </div>
  );
}
