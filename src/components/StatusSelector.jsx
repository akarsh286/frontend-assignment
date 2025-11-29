// Author: Suraj Singh
// Project: Frontend Assignment

import { useDispatch, useSelector } from "react-redux";
import { updateStatus } from "../redux/slices/membersSlice";

export default function StatusSelector() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.role);
  const members = useSelector((state) => state.members);

  const user = members.find((m) => m.name === currentUser);

  const statuses = ["Working", "Break", "Meeting", "Offline"];

  const handleStatusChange = (status) => {
    dispatch(updateStatus({ name: currentUser, status }));
  };

  return (
    <div className="bg-white shadow-md p-6 rounded-md w-full max-w-lg mx-auto mt-6">
      <h3 className="text-lg font-semibold mb-3 text-gray-700">
        Update Status
      </h3>

      <div className="flex gap-3 flex-wrap">
        {statuses.map((status) => (
          <button
            key={status}
            onClick={() => handleStatusChange(status)}
            className={`px-4 py-2 rounded font-medium border transition 
              ${
                user?.status === status
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white border-gray-300 text-gray-600 hover:bg-gray-100"
              }`}
          >
            {status}
          </button>
        ))}
      </div>
    </div>
  );
}
