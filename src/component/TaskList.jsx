import Task from "./Task";
import { useTasks } from "../context/TasksContext";

export default function TaskList() {
  const { tasks } = useTasks();

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
}
