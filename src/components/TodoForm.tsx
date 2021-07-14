import React, { useState } from 'react'
import { TodoInterface } from './TodoInterface'

interface Props {
    saveTodo: (e: React.FormEvent, formData: TodoInterface | any) => void 
}

const TodoForm: React.FC<Props> = ({ saveTodo }) => {

  const [formData, setFormData] = useState<TodoInterface | {}>()

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }

  return (
    <div>
      <div>
        <form className='Form' onSubmit={(e) => saveTodo(e, formData)}>
        <label htmlFor='title'>Name</label>
          <input 
            name="title" 
            type="text" 
            id="todo-title"
            onChange={handleForm} />
          <label htmlFor='description'>Description</label>
          <input 
            name="description" 
            type="text" 
            id="todo-description"
            onChange={handleForm} />
        </form>
      </div>
      <div>
        <button></button>
      </div>
    </div>
  );
}

export default TodoForm;