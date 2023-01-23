import React, { useState } from 'react'

function TaskForm() {
  const [task, setTask] = useState({
    title: '',
    description:''
  })
  const handleChange = e => {
    setTask({...task, [e.target.name]:e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(task)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' name='title' placeholder='title' onChange={handleChange}/>
      <textarea name='description' placeholder='description' onChange={handleChange}/>
      <button>Save</button>
    </form>
  )
}

export default TaskForm
