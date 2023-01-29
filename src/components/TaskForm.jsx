import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addTask} from '../features/tasks/taskSlice'
import {v4 as uuidv4} from 'uuid'
import {useNavigate} from 'react-router-dom'

function TaskForm() {
  const [task, setTask] = useState({
    title: '',
    description: '',
    completed: false,
  })
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChange = e => {
    setTask({...task, [e.target.name]: e.target.value})
  }

  const handleSubmit = e => {
    e.preventDefault()
    // console.log(task)
    dispatch(addTask({ id: uuidv4(), ...task }))
    navigate('/')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' name='title' placeholder='title' onChange={handleChange} />
      <textarea name='description' placeholder='description' onChange={handleChange} />
      <button>Save</button>
    </form>
  )
}

export default TaskForm
