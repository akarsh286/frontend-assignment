import { Pie } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function StatusChart() {
  const members = useSelector((state) => state.members);

  const statusCounts = {
    Working: 0,
    Break: 0,
    Meeting: 0,
    Offline: 0,
  };

  members.forEach((m) => {
    statusCounts[m.status] += 1;
  });

  const data = {
    labels: Object.keys(statusCounts),
    datasets: [
      {
        data: Object.values(statusCounts),
        backgroundColor: ["#22c55e", "#facc15", "#3b82f6", "#9ca3af"],
      },
    ],
  };

  return (
    <div className="max-w-xs mx-auto mt-6 bg-white p-4 rounded shadow">
      <h3 className="text-center font-semibold mb-2">Team Status Chart</h3>
      <Pie data={data} />
    </div>
  );
}
