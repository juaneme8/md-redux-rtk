import {useSelector} from 'react-redux'
import TaskForm from './components/TaskForm'
import TasksList from './components/TasksList'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  const tasksState = useSelector(state => state.tasks)
  console.log(tasksState)
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TasksList/>} />
          <Route path="/create" element={<TaskForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
