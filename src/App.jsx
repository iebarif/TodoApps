import "./App.css";
import AddTask from "./component/AddTask";
import TaskList from "./component/TaskList";
import TaskProvider from "./context/TasksContext";

function App() {
  return (
    <div>
      <h1> Simple Todo App</h1>

      <TaskProvider>
        <AddTask />
        <TaskList />
      </TaskProvider>
    </div>
  );
}

export default App;
