import React, { useState } from 'react'
import Input from './Components/Input'
import Card from './Components/Card'

function App() {
  const [todo, setTodo] = useState([])   //[{},{},{}]
  const [editingTask, setEditingTask] = useState(null);
  const [status, setStatus] = useState("All");

  const addTodo = (newTitle, newDes) => {
    let data = {
      id: todo.length + 1,
      title: newTitle,
      description: newDes,
      completed: false
    }
    setTodo([...todo, data])
  }
  const taskUpdate = (index, value) => {
    let newArray = [...todo];
    newArray[index] = {
      ...newArray[index],
      completed: value === "true" ? true : false,
    }
    setTodo(newArray);
  }

  const editTask = (index, tit, dis) => {
    let newArray = [...todo];
    newArray[index] = {
      ...newArray[index],
      title: tit,
      description: dis
    }
    setTodo(newArray);
    setEditingTask(null);
  }

  const deleteTodo = (id) => {
    setTodo(todo.filter((ele) => ele.id !== id))
  }
  //Dropdown_filter function
  const filteredTodos = todo.filter(item => {
    if (status === "All") return true;
    if (status === "Completed") return item.completed;
    if (status === "NotCompleted") return !item.completed
  })
  return (
    <div className="container">
      
      <Input addTodo={addTodo} setStatus={setStatus} />

      <div className="row">
        {filteredTodos.map((element, index) => {
          return (
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <Card
                element={element}
                index={index}
                deleteTodo={deleteTodo}
                taskUpdate={taskUpdate}
                editTask={editTask}
                editingTask={editingTask}
                setEditingTask={setEditingTask}
              />
            </div>
          )
        })}
      </div>

    </div>
  )
}

export default App

