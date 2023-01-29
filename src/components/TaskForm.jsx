import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {addTask, editTask} from '../features/tasks/taskSlice'
import {v4 as uuidv4} from 'uuid'
import {useNavigate, useParams} from 'react-router-dom'

function TaskForm() {
  const [task, setTask] = useState({
    title: '',
    description: '',
    completed: false,
  })
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const params = useParams()
  const tasks = useSelector(state => state.tasks)

  useEffect(() => {
    if (params.id) {
      const editingTask = tasks.find(task => task.id === params.id)
      if (editingTask) {
        setTask(editingTask)
      }
    }
  }, [])

  const handleChange = e => {
    setTask({...task, [e.target.name]: e.target.value})
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (params.id) {
      dispatch(editTask(task))
    } else {
      dispatch(addTask({...task, id: uuidv4()}))
    }
    navigate('/')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' name='title' placeholder='title' onChange={handleChange} value={task.title} />
      <textarea name='description' placeholder='description' onChange={handleChange} value={task.description} />
      <button>Save</button>
    </form>
  )
}

export default TaskForm
