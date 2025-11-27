import { useSelector, useDispatch } from "react-redux";
import { switchRole, setUser } from "../redux/slices/roleSlice";
import { useEffect } from "react";

export default function Header() {
  const dispatch = useDispatch();
  const { currentRole, currentUser } = useSelector((state) => state.role);
  const members = useSelector((state) => state.members);

  // ---------- Theme Toggle Function ----------
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    localStorage.setItem(
      "theme",
      document.documentElement.classList.contains("dark") ? "dark" : "light"
    );
  };

  // ---------- Load Theme on Refresh ----------
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <header className="w-full bg-white dark:bg-[#1C1C1C] border-b shadow-md py-4 px-6 flex justify-between items-center">

      
      {/* Logo / Title */}
      <h1 className="text-xl font-bold text-gray-800 dark:text-white">
        Team Pulse Dashboard
      </h1>

      <div className="flex items-center gap-4">

        {/* User Dropdown */}
        <select
          className="border px-3 py-2 rounded-md bg-gray-50 dark:bg-[#2B2B2B] dark:text-white cursor-pointer"
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
          className={`px-3 py-1 rounded-full text-sm font-semibold transition 
            ${
              currentRole === "lead"
                ? "bg-purple-600 text-white"
                : "bg-blue-600 text-white"
            }`}
        >
          {currentRole === "lead" ? "Team Lead" : "Member"}
        </span>

        {/* Switch Role Button */}
        <button
          onClick={() => dispatch(switchRole())}
          className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition"
        >
          Switch Role
        </button>

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="px-3 py-2 rounded bg-gray-800 text-white dark:bg-gray-600 hover:opacity-80 transition"
        >
          🌙
        </button>
      </div>
    </header>
  );
}
