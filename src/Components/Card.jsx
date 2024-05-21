import React, { useState } from 'react';

function Card({ element, index, deleteTodo, taskUpdate, editTask, editingTask, setEditingTask }) {
  const [title, setTitle] = useState(element.title);
  const [description, setDescription] = useState(element.description);

  const handleEdit = () => {
    setEditingTask(index);
  };

  const handleSave = () => {
    editTask(index, title, description);
  };
  
  return (
    // Edit form
    <div>
      {editingTask === index ? (
        <div className='card bg-info m-3' style={{ width: '18rem' }}>
          <div className='header text-center'><h6><u><i>Edit Your Todo</i></u></h6></div>
          <div class="card-body">
          <span>Title:</span><br/>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Edit title"
            /><br/><span>Description:</span><br/>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Edit description"
            />
          </div>
          <div class="card-footer">
            <button className='btn btn-primary mx-1 ' onClick={handleSave}>Save</button>
            <button className='btn btn-primary mx-1 ' onClick={() => setEditingTask(null)}>Cancel</button>
          </div>
        </div>
      ) : (
        //Todo Card
        <div className='card bg-info m-3' style={{ width: '18rem' }}>
          <div class="card-body">
            <h4 className="card-title">{element.title}</h4>
            <p class="card-text">{element.description}</p>
            Status:&nbsp;
            <select style={{ width: "10rem" }} className="form-select"
              value={element.completed}
              onChange={(ele) => taskUpdate(index, ele.target.value)}>
              <option value={true}>Completed</option>
              <option value={false}>NotCompleted</option>
            </select>
          </div>
          <div class="card-footer">
            <button className='btn btn-primary mx-1 ' onClick={handleEdit}>Edit</button>
            <button className='btn btn-danger  mx-1 ' onClick={() => deleteTodo(element.id)}>Delete</button>
          </div>
        </div>
      )} 
    </div>
  );
}

export default Card;
