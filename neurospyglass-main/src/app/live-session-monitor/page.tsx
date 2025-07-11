import SessionTimeline from "@/components/session-monitor/SessionTimeline";
import EventFilters from "@/components/session-monitor/EventFilters";
import ReplayControls from "@/components/session-monitor/ReplayControls";
import EventHoverDetails from "@/components/session-monitor/EventHoverDetails";
import GraphSnapshot from "@/components/session-monitor/GraphSnapshot";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function LiveSessionMonitorPage() {
  return (
    <div className="min-h-screen bg-slate-900 p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Live Session Monitor</h1>
        <p className="text-slate-400">Real-time monitoring and analysis of active sessions</p>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Controls */}
        <div className="lg:col-span-1 space-y-6">
          {/* Event Filters */}
          <Card className="bg-slate-800 border-slate-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="pb-4">
              <CardTitle className="text-white text-lg">Event Filters</CardTitle>
            </CardHeader>
            <CardContent>
              <EventFilters />
            </CardContent>
          </Card>

          {/* Replay Controls */}
          <Card className="bg-slate-800 border-slate-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="pb-4">
              <CardTitle className="text-white text-lg">Replay Controls</CardTitle>
            </CardHeader>
            <CardContent>
              <ReplayControls />
            </CardContent>
          </Card>
        </div>

        {/* Center Column - Timeline */}
        <div className="lg:col-span-2">
          <Card className="bg-slate-800 border-slate-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="pb-4">
              <CardTitle className="text-white text-lg">Session Timeline</CardTitle>
            </CardHeader>
            <CardContent>
              <SessionTimeline />
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Bottom Row - Details and Graph */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        {/* Event Hover Details */}
        <Card className="bg-slate-800 border-slate-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="pb-4">
            <CardTitle className="text-white text-lg">Event Details</CardTitle>
          </CardHeader>
          <CardContent>
            <EventHoverDetails />
          </CardContent>
        </Card>

        {/* Graph Snapshot */}
        <Card className="bg-slate-800 border-slate-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="pb-4">
            <CardTitle className="text-white text-lg">Network Graph</CardTitle>
          </CardHeader>
          <CardContent>
            <GraphSnapshot />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
