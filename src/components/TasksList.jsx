import React from 'react'
import {useSelector} from 'react-redux'

function TasksList() {
  const tasks = useSelector(state => state.tasks)

  return (
    <>
      {tasks.map(task => (
        <div key={task.id}>
          <p>{task.title}</p>
          <p>{task.description}</p>
        </div>
      ))}
    </>
  )
}

export default TasksList
