import React from 'react';
import { FaBookMedical, FaClock, FaChartLine, FaAward, FaHistory } from 'react-icons/fa';
import { Bar } from 'react-chartjs-2';

const stats = [
  { id: 1, title: "Modules Completed", value: "8", icon: FaBookMedical, color: "bg-blue-100 text-blue-800" },
  { id: 2, title: "Hours Learned", value: "24", icon: FaClock, color: "bg-green-100 text-green-800" },
  { id: 3, title: "Current Streak", value: "5 days", icon: FaAward, color: "bg-purple-100 text-purple-800" },
  { id: 4, title: "Mastery Level", value: "Intermediate", icon: FaChartLine, color: "bg-yellow-100 text-yellow-800" }
];

const recentActivity = [
  { id: 1, module: "Cardiology Basics", action: "completed", time: "2 hours ago" },
  { id: 2, module: "Neurology Advanced", action: "started", time: "1 day ago" },
  { id: 3, module: "Pharmacology Review", action: "bookmarked", time: "3 days ago" }
];

const progressData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Modules Completed',
      data: [2, 3, 1, 4, 2, 5],
      backgroundColor: '#3B82F6',
      borderRadius: 4
    }
  ]
};

const quickModules = [
  { id: 1, title: "Continue Pharmacology", progress: 65 },
  { id: 2, title: "Review Cardiology", progress: 100 },
  { id: 3, title: "Start Pediatrics", progress: 0 }
];

const Dashboard = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-600">Welcome back! Here's your learning progress.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div key={stat.id} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className={`p-3 rounded-full ${stat.color}`}>
                <stat.icon className="text-xl" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                <p className="text-2xl font-semibold">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Progress Chart */}
        <div className="bg-white p-6 rounded-lg shadow lg:col-span-2">
          <h2 className="text-xl font-bold mb-4">Your Progress</h2>
          <div className="h-64">
            <Bar 
              data={progressData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                  y: {
                    beginAtZero: true,
                    ticks: {
                      stepSize: 1
                    }
                  }
                }
              }}
            />
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4 flex items-center">
            <FaHistory className="mr-2" /> Recent Activity
          </h2>
          <ul className="space-y-4">
            {recentActivity.map((activity) => (
              <li key={activity.id} className="border-b pb-3 last:border-0 last:pb-0">
                <p className="font-medium">{activity.module}</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span className="capitalize">{activity.action}</span>
                  <span>{activity.time}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Quick Access Modules */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Quick Access</h2>
        <div className="space-y-4">
          {quickModules.map((module) => (
            <div key={module.id}>
              <div className="flex justify-between mb-1">
                <span className="font-medium">{module.title}</span>
                <span className="text-sm text-gray-500">{module.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-blue-600 h-2.5 rounded-full" 
                  style={{ width: `${module.progress}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
