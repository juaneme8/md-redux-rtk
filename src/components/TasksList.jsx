import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { deleteTask } from '../features/tasks/taskSlice'

function TasksList() {
  const tasks = useSelector(state => state.tasks)
  const dispatch = useDispatch()

  const handleDelete = (id) => {
    dispatch(deleteTask(id))
  }

  return (
    <>
      {tasks.map(task => (
        <div key={task.id}>
          <p>{task.title}</p>
          <p>{task.description}</p>
          <button onClick={() => handleDelete(task.id)}>Delete</button>
        </div>
      ))}
    </>
  )
}

export default TasksList
