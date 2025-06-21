import { ChevronLeft } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  return (
    <div className="w-screen h-screen bg-zinc-600 flex justify-center p-2">
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center relative mb-6">
          <button
            onClick={() => navigate(-1)}
            className="text-zinc-100 cursor-pointer absolute left-0 top-0 bottom-0"
          >
            <ChevronLeft />
          </button>
          <h1 className="text-3xl text-zinc-100 font-bold text-center">
            Detalhes da Tarefa
          </h1>
        </div>
        <div className="bg-zinc-200 rounded-md p-4 text-center">
          <h2 className="text-xl text-zinc-700 font-bold">{title}</h2>
          <p className="text-zinc-700">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
