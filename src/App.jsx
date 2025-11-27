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
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-cyan-50 to-emerald-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-bounce"></div>
      <div className="absolute top-1/3 right-16 w-16 h-16 bg-pink-500 rounded-full opacity-25 animate-pulse"></div>
      <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-green-400 rounded-full opacity-30 animate-ping"></div>
      <div className="absolute top-40 right-1/3 w-12 h-12 bg-purple-600 rounded-full opacity-20 animate-bounce delay-700"></div>

      <Header />

      <div className="p-6 relative z-10">
        {/* Enhanced Animated Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text mb-4">
            <h1 className="text-5xl font-extrabold text-transparent animate-pulse">
              {currentRole === "member" 
                ? `🌟 ${currentUser}'s Dashboard 🌟`
                : "🚀 Team Lead Dashboard"}
            </h1>
          </div>
          <div className="flex justify-center items-center space-x-2">
            <div className="h-1 w-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
            <div className="h-1 w-16 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full animate-pulse delay-300"></div>
            <div className="h-1 w-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse delay-700"></div>
          </div>
          <p className="text-gray-600 mt-4 text-lg font-medium">
            {currentRole === "member" 
              ? "Manage your tasks and track progress"
              : "Lead your team to success"}
          </p>
        </div>

        {/* ---- Member View ---- */}
        {currentRole === "member" && (
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Status Selector Card */}
              <div className="lg:col-span-1">
                <div className="bg-gradient-to-br from-white to-purple-50 rounded-3xl shadow-2xl border-l-4 border-purple-500 p-6 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-fit">
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-3 shadow-lg">
                      <span className="text-white text-lg">⚡</span>
                    </div>
                    <h2 className="text-2xl font-bold text-purple-800">
                      Quick Status
                    </h2>
                  </div>
                  <StatusSelector />
                </div>
              </div>
              
              {/* Task List Card */}
              <div className="lg:col-span-3">
                <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-2xl border-l-4 border-blue-500 p-6 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mr-3 shadow-lg">
                      <span className="text-white text-lg">📋</span>
                    </div>
                    <h2 className="text-2xl font-bold text-blue-800">
                      My Tasks
                    </h2>
                    <div className="ml-auto bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold animate-pulse">
                      🎯 Active Tasks
                    </div>
                  </div>
                  <TaskList />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ---- Lead View ---- */}
        {currentRole === "lead" && (
          <div className="max-w-8xl mx-auto">
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
              {/* Task Form Card - Enhanced */}
              <div className="xl:col-span-1">
                <div className="bg-gradient-to-br from-white to-green-50 rounded-3xl shadow-2xl border-l-4 border-green-500 p-6 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-fit sticky top-6">
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mr-3 shadow-lg">
                      <span className="text-white text-lg">🎯</span>
                    </div>
                    <h2 className="text-2xl font-bold text-green-800">
                      Assign Task
                    </h2>
                  </div>
                  <div className="mb-6 p-4 bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl border border-green-200">
                    <div className="flex items-center">
                      <span className="text-green-600 text-2xl mr-3">💡</span>
                      <p className="text-green-800 font-semibold">
                        Create and assign tasks to team members
                      </p>
                    </div>
                  </div>
                  <TaskForm />
                </div>
              </div>
              
              {/* Right side - Enhanced cards */}
              <div className="xl:col-span-2">
                <div className="grid grid-cols-1 gap-8">
                  {/* Member List Card */}
                  <div className="bg-gradient-to-br from-white to-orange-50 rounded-3xl shadow-2xl border-l-4 border-orange-500 p-6 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                    <div className="flex items-center mb-6">
                      <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mr-3 shadow-lg">
                        <span className="text-white text-lg">👥</span>
                      </div>
                      <h2 className="text-2xl font-bold text-orange-800">
                        Team Members
                      </h2>
                      <div className="ml-auto bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold">
                        🌟 Your Squad
                      </div>
                    </div>
                    <MemberList />
                  </div>
                  
                  {/* Status Chart Card */}
                  <div className="bg-gradient-to-br from-white to-pink-50 rounded-3xl shadow-2xl border-l-4 border-pink-500 p-6 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                    <div className="flex items-center mb-6">
                      <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center mr-3 shadow-lg">
                        <span className="text-white text-lg">📊</span>
                      </div>
                      <h2 className="text-2xl font-bold text-pink-800">
                        Progress Dashboard
                      </h2>
                      <div className="ml-auto bg-pink-100 text-pink-800 px-4 py-2 rounded-full text-sm font-semibold animate-pulse">
                        📈 Live Stats
                      </div>
                    </div>
                    <StatusChart />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Enhanced floating decorative elements */}
        <div className="fixed -top-20 -left-20 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
        <div className="fixed -bottom-20 -right-20 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float delay-2000"></div>
        <div className="fixed top-1/2 left-1/4 w-60 h-60 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-float delay-1000"></div>
      </div>

      {/* Add custom animations to CSS */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default App;