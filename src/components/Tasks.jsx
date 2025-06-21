import { ChevronRightIcon, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?title=${task.title}&description=${task.description}`);
  }

  return (
    <ul className="space-y-1 p-6 bg-zinc-200 rounded-md shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-1">
          <button
            onClick={() => onTaskClick(task.id)}
            className={` text-left cursor-pointer hover:bg-zinc-500 bg-zinc-400 text-white p-2 rounded-md w-full ${
              task.isCompleted && "line-through"
            }`}
          >
            {task.title}
          </button>
          <button
            onClick={() => onSeeDetailsClick(task)}
            className="cursor-pointer hover:bg-zinc-500 bg-zinc-400 p-2 rounded-md text-white"
          >
            <ChevronRightIcon />
          </button>
          <button
            onClick={() => {
              onDeleteTaskClick(task.id);
            }}
            className="cursor-pointer hover:bg-zinc-500 bg-zinc-400 p-2 rounded-md text-white"
          >
            <Trash2 />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
