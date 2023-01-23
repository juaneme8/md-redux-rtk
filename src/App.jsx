import { useSelector } from "react-redux"
import TaskForm from "./components/TaskForm";
import TasksList from "./components/TasksList";

function App() {
  const tasksState = useSelector(state => state.tasks);
  console.log(tasksState)
  return (
    <div>
      <h1>Redux Toolkit</h1>
      <TasksList />
      <TaskForm/>
    </div>
  )
}

export default App
