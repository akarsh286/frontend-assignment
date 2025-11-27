import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { assignTask } from "../redux/slices/membersSlice";

export default function TaskForm() {
  const dispatch = useDispatch();
  const members = useSelector((state) => state.members);

  const [taskTitle, setTaskTitle] = useState("");
  const [assignedMember, setAssignedMember] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskTitle || !assignedMember || !dueDate) return;

    const task = {
      id: Date.now(),
      title: taskTitle,
      dueDate,
      progress: 0
    };

    dispatch(assignTask({ member: assignedMember, task }));

    // reset form
    setTaskTitle("");
    setAssignedMember("");
    setDueDate("");
  };

  return (
    <div className="bg-white shadow-md p-6 rounded-md w-full max-w-xl mx-auto mt-6">
      <h3 className="text-lg font-semibold text-gray-700 mb-4">
        Assign Task
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Select Member */}
        <select
          value={assignedMember}
          onChange={(e) => setAssignedMember(e.target.value)}
          className="w-full border px-3 py-2 rounded-md"
        >
          <option value="">Select Member</option>
          {members.map((member) => (
            <option key={member.id} value={member.name}>
              {member.name}
            </option>
          ))}
        </select>

        {/* Task Title */}
        <input
          type="text"
          placeholder="Task Title"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          className="w-full border px-3 py-2 rounded-md"
        />

        {/* Due Date */}
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="w-full border px-3 py-2 rounded-md"
        />

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition"
        >
          Assign Task
        </button>
      </form>
    </div>
  );
}
