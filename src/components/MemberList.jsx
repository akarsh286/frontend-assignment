// Author: Suraj Singh
// Project: Frontend Assignment

import { useState } from "react";
import { useSelector } from "react-redux";
import MemberCard from "./MemberCard";

export default function MemberList() {
  const members = useSelector((state) => state.members);

  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("None");

  const filteredMembers = members
    .filter((m) => (filter === "All" ? true : m.status === filter))
    .sort((a, b) => {
      if (sort === "Tasks") {
        const aTasks = a.tasks.filter(t => t.progress < 100).length;
        const bTasks = b.tasks.filter(t => t.progress < 100).length;
        return bTasks - aTasks;
      }
      return 0;
    });

  return (
    <div className="w-full max-w-2xl mx-auto mt-6">
      <h3 className="text-lg font-semibold mb-4 text-gray-700">Team Members</h3>

      {/* Filters */}
      <div className="flex justify-between mb-4 items-center">

        {/* Filter by Status */}
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border px-3 py-2 rounded-md"
        >
          <option value="All">All</option>
          <option value="Working">Working</option>
          <option value="Break">Break</option>
          <option value="Meeting">Meeting</option>
          <option value="Offline">Offline</option>
        </select>

        {/* Sort */}
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="border px-3 py-2 rounded-md"
        >
          <option value="None">Sort</option>
          <option value="Tasks">Most Tasks</option>
        </select>
      </div>

      {/* Members UI */}
      <div className="space-y-4">
        {filteredMembers.map((m) => (
          <MemberCard key={m.id} member={m} />
        ))}
      </div>
    </div>
  );
}
