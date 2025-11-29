// Author: Suraj Singh
// Project: Frontend Assignment

import { useSelector, useDispatch } from "react-redux";
import { switchRole, setUser } from "../redux/slices/roleSlice";

export default function Header() {
  const dispatch = useDispatch();
  const { currentRole, currentUser } = useSelector((state) => state.role);
  const members = useSelector((state) => state.members);

  return (
    <header className="w-full bg-white border-b shadow-md py-4 px-6 flex justify-between items-center">
      <h1 className="text-xl font-bold text-gray-800">
        🎨 Team Pulse Dashboard
      </h1>

      <div className="flex items-center gap-4">

        {/* User Switch */}
        <select
          className="border px-3 py-2 rounded-md bg-gray-50 cursor-pointer"
          value={currentUser}
          onChange={(e) => dispatch(setUser(e.target.value))}
        >
          {members.map((m) => (
            <option key={m.id} value={m.name}>
              {m.name}
            </option>
          ))}
        </select>

        {/* Role Badge */}
        <span
          className={`px-3 py-1 rounded-full text-sm font-semibold 
            ${
              currentRole === "lead"
                ? "bg-purple-600 text-white"
                : "bg-blue-600 text-white"
            }`}
        >
          {currentRole === "lead" ? "Team Lead" : "Member"}
        </span>

        {/* Switch role */}
        <button
          onClick={() => dispatch(switchRole())}
          className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition"
        >
          Switch Role
        </button>
      </div>
    </header>
  );
}
