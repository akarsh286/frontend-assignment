// Author: Suraj Singh
// Project: Frontend Assignment

export default function MemberCard({ member }) {
  const getStatusColor = (status) => {
    switch (status) {
      case "Working": return "bg-green-500 text-white";
      case "Break": return "bg-yellow-400 text-black";
      case "Meeting": return "bg-blue-500 text-white";
      case "Offline": return "bg-gray-400 text-white";
      default: return "bg-gray-300";
    }
  };

  const activeTasks = member.tasks.filter(task => task.progress < 100).length;

  return (
    <div className="bg-white shadow-md rounded-md p-4 flex justify-between items-center border">
      <div>
        <h3 className="font-semibold text-lg">{member.name}</h3>
        <span
          className={`inline-block mt-2 px-3 py-1 text-sm rounded ${getStatusColor(member.status)}`}
        >
          {member.status}
        </span>
      </div>

      <div className="text-right">
        <h4 className="text-sm text-gray-500">Active Tasks</h4>
        <p className="text-xl font-bold">{activeTasks}</p>
      </div>
    </div>
  );
}
