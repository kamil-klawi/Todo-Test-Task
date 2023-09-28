import { useState } from 'react';
import { TStore } from '../../types/Store';
import './EditTodo.scss';

export default function EditTodo(props: TStore) {
  const [value, setValue] = useState(props.name);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.editTodo(props.id, value);
  };

  return (
    <div className="flex justify-center items-center">
      <form className="form-edit" onSubmit={onSubmit}>
        <input
          className="form-edit-input"
          type="text"
          name="name"
          onChange={onChange}
          value={value}
          placeholder="Edytuj zadanie"
        />
        <button className="form-edit-btn" type="submit">
          Edytuj zadanie
        </button>
      </form>
    </div>
  );
}
