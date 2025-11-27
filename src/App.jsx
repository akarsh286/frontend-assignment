import StatusChart from "./components/StatusChart";
import './App.css'
import Header from "./components/Header";
import StatusSelector from "./components/StatusSelector";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import MemberList from "./components/MemberList";
import { useSelector } from "react-redux";

function App() {
  const { currentRole, currentUser } = useSelector((state) => state.role);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <Header />

      <div className="p-6">
        {/* Animated Header */}
        <div className="text-center mb-8">
          <div className="inline-block bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text">
            <h1 className="text-4xl font-bold text-transparent animate-pulse">
              {currentRole === "member" 
                ? `✨ ${currentUser}'s Dashboard ✨`
                : "🚀 Team Lead Dashboard"}
            </h1>
          </div>
          <div className="mt-2 h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        {/* ---- Member View ---- */}
        {currentRole === "member" && (
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Status Selector Card */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl shadow-lg border border-purple-100 p-6 hover:shadow-xl transition-all duration-300 h-fit">
                  <h2 className="text-xl font-semibold text-purple-800 mb-4 flex items-center">
                    <span className="w-3 h-3 bg-purple-500 rounded-full mr-2 animate-pulse"></span>
                    Update Status
                  </h2>
                  <StatusSelector />
                </div>
              </div>
              
              {/* Task List Card */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl shadow-lg border border-blue-100 p-6 hover:shadow-xl transition-all duration-300">
                  <h2 className="text-xl font-semibold text-blue-800 mb-4 flex items-center">
                    <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                    My Tasks
                  </h2>
                  <TaskList />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ---- Lead View ---- */}
        {currentRole === "lead" && (
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
              {/* Task Form Card - Full height and prominent */}
              <div className="xl:col-span-1">
                <div className="bg-white rounded-2xl shadow-xl border-2 border-green-200 p-6 hover:shadow-2xl transition-all duration-300 min-h-[250px] sticky top-6">
                  <h2 className="text-xl font-bold text-green-800 mb-4 flex items-center">
                    <span className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                    🎯 Assign New Task
                  </h2>
                  <div className="mb-3 p-3 bg-green-50 rounded-lg border border-green-200">
                    <p className="text-sm text-green-700 font-medium">
                      Create and assign tasks to team members
                    </p>
                  </div>
                  <TaskForm />
                </div>
              </div>
              
              {/* Right side - Two cards stacked */}
              <div className="xl:col-span-2">
                <div className="grid grid-cols-1 gap-6">
                  {/* Member List Card */}
                  <div className="bg-white rounded-2xl shadow-lg border border-orange-100 p-6 hover:shadow-xl transition-all duration-300">
                    <h2 className="text-xl font-semibold text-orange-800 mb-4 flex items-center">
                      <span className="w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                      👥 Team Members
                    </h2>
                    <MemberList />
                  </div>
                  
                  {/* Status Chart Card */}
                  <div className="bg-white rounded-2xl shadow-lg border border-pink-100 p-6 hover:shadow-xl transition-all duration-300">
                    <h2 className="text-xl font-semibold text-pink-800 mb-4 flex items-center">
                      <span className="w-3 h-3 bg-pink-500 rounded-full mr-2"></span>
                      📊 Progress Overview
                    </h2>
                    <StatusChart />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Floating decorative elements */}
        <div className="fixed top-0 left-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="fixed bottom-0 right-0 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div>
    </div>
  );
}

export default App;