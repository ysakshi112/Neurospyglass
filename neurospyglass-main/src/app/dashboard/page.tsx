import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function DashboardPage() {
  const dashboardCards = [
    {
      title: "Live Session Monitor",
      description: "Real-time monitoring and analysis of active sessions",
      icon: "🔴",
      href: "/live-session-monitor",
      color: "from-red-500 to-pink-500"
    },
    {
      title: "Investigation Console",
      description: "AI-powered investigation and analysis tools",
      icon: "🔍",
      href: "/investigation-console",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "User Management",
      description: "Manage users, roles, and permissions",
      icon: "👥",
      href: "/dashboard/user-management",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Offline Session Upload",
      description: "Upload and process offline session data",
      icon: "📤",
      href: "/dashboard/offline-session-upload",
      color: "from-purple-500 to-violet-500"
    },
    {
      title: "Voice File Processor",
      description: "Process and analyze voice recordings",
      icon: "🎤",
      href: "/dashboard/voice-file-processor",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Forensic Timeline",
      description: "View and analyze forensic timelines",
      icon: "⏱️",
      href: "/dashboard/forensic-timeline-viewer",
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Anomaly Detection",
      description: "Monitor and detect anomalies in data",
      icon: "⚠️",
      href: "/dashboard/anomaly-detection",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
        <p className="text-slate-400">Welcome to NeuroSpyGlass AI - Advanced Session Intelligence Platform</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="bg-slate-800 border-slate-700 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Active Sessions</p>
                <p className="text-2xl font-bold text-white">24</p>
              </div>
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                <span className="text-green-400 text-xl">🔴</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Total Users</p>
                <p className="text-2xl font-bold text-white">156</p>
              </div>
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <span className="text-blue-400 text-xl">👥</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Alerts Today</p>
                <p className="text-2xl font-bold text-white">7</p>
              </div>
              <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                <span className="text-yellow-400 text-xl">⚠️</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Data Processed</p>
                <p className="text-2xl font-bold text-white">2.4TB</p>
              </div>
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                <span className="text-purple-400 text-xl">💾</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Dashboard Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dashboardCards.map((card, index) => (
          <Link key={index} href={card.href}>
            <Card className="bg-slate-800 border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] cursor-pointer group">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 bg-gradient-to-r ${card.color} rounded-lg flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {card.icon}
                  </div>
                  <div>
                    <CardTitle className="text-white text-lg group-hover:text-purple-300 transition-colors">
                      {card.title}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-300">
                  {card.description}
                </CardDescription>
                <div className="mt-4 flex items-center text-purple-400 text-sm font-medium group-hover:text-purple-300 transition-colors">
                  <span>Open</span>
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-white mb-4">Quick Actions</h2>
        <div className="flex flex-wrap gap-3">
          <Button className="bg-purple-600 hover:bg-purple-700 text-white">
            📊 Generate Report
          </Button>
          <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700">
            🔔 View Alerts
          </Button>
          <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700">
            ⚙️ Settings
          </Button>
          <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700">
            📈 Analytics
          </Button>
        </div>
      </div>
    </div>
  );
} 