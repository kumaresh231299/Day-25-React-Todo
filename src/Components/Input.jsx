import React, { useState } from 'react'

function Input({ addTodo, setStatus }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const handleSubmit = () => {
    addTodo(title, description)
    setTitle("")
    setDescription("")
  }
  return (
    <div className="text-center mb-4 mt-5">
      <h4 className='text text-center'>My Todo</h4>
      <input type='text'
        value={title}
        placeholder='Enter todo title'
        onChange={e => setTitle(e.target.value)}
        required />
      <input type='text'
        value={description}
        placeholder='Enter todo description'
        onChange={e => setDescription(e.target.value)}
        required />
      <button className='btn btn-primary mx-1' onClick={handleSubmit}>Add Todo</button>
      <div className='mt-4'>
        <div className='d-flex justify-content-between align-items-center mb-2'>
          <span><strong>My Todos</strong></span>
          {/* Dropdown or select filter Section */}
          <div className="d-flex align-items-center">
            <span><strong>Status Filter: </strong></span>
              <select className="form-select " style={{ width: "10rem", justifyContent: "end" }}
                onChange={e => setStatus(e.target.value)}>
                <option value="All">All</option>
                <option value="Completed">Completed</option>
                <option value="NotCompleted">NotCompleted</option>
              </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Input
