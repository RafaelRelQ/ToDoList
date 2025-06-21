import { useState } from "react";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="space-y-1 p-6 bg-zinc-200 flex flex-col rounded-md shadow">
      <input
        type="text"
        placeholder="Titulo da tarefa"
        className="bg-zinc-50 outline-zinc-700 px-4 py-2 rounded-md shadow"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        type="text"
        placeholder="Descrição da tarefa"
        className="bg-zinc-50 outline-zinc-700 px-4 py-2 rounded-md shadow"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            return alert("Preencha os campos para adicionar a tarefa");
          }
          onAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
        className="font-medium cursor-pointer hover:bg-zinc-500 bg-zinc-400 p-2 rounded-md text-white"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
