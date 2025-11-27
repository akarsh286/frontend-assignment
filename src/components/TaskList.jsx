import { useDispatch, useSelector } from "react-redux";
import { updateTaskProgress } from "../redux/slices/membersSlice";

export default function TaskList() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.role);
  const members = useSelector((state) => state.members);

  const user = members.find((m) => m.name === currentUser);

  const handleProgress = (taskId, value) => {
    let newValue = value;

    if (newValue > 100) newValue = 100;
    if (newValue < 0) newValue = 0;

    dispatch(updateTaskProgress({ member: currentUser, taskId, progress: newValue }));
  };

  return (
    <div className="bg-white shadow-md rounded-md p-6 w-full max-w-2xl mx-auto mt-6">
      <h3 className="text-lg font-semibold text-gray-700 mb-4">Your Tasks</h3>

      {user?.tasks?.length === 0 ? (
        <p className="text-gray-500">No tasks assigned yet.</p>
      ) : (
        <div className="space-y-4">
          {user.tasks.map((task) => (
            <div
              key={task.id}
              className="border p-4 rounded-md shadow-sm bg-gray-50"
            >
              <div className="flex justify-between items-center">
                <h4 className="font-semibold">{task.title}</h4>
                <span className="text-sm text-gray-500">Due: {task.dueDate}</span>
              </div>

              {/* Progress bar */}
              <div className="relative w-full bg-gray-200 h-3 rounded mt-3">
                <div
                  className={`h-3 rounded transition-all duration-300 ${
                    task.progress === 100 ? "bg-green-600" : "bg-blue-600"
                  }`}
                  style={{ width: `${task.progress}%` }}
                />
              </div>

              {/* Controls */}
              <div className="flex items-center justify-between mt-3">
                <span className="text-gray-700 font-medium">
                  {task.progress}%
                </span>

                <div className="flex gap-2">
                  <button
                    onClick={() => handleProgress(task.id, task.progress - 10)}
                    className="px-3 py-1 bg-gray-300 hover:bg-gray-400 text-black rounded-md"
                  >
                    -10%
                  </button>
                  <button
                    onClick={() => handleProgress(task.id, task.progress + 10)}
                    className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
                  >
                    +10%
                  </button>
                </div>
              </div>

              {task.progress === 100 && (
                <p className="text-green-600 font-semibold mt-2">
                  ✅ Completed
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
