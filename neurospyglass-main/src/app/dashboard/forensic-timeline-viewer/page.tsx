'use client'

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"

const mockEvents = [
  { id: 1, user: "alice", type: "login", time: "10:00 AM", details: "Logged in from IP 192.168.1.2" },
  { id: 2, user: "bob", type: "download", time: "10:15 AM", details: "Downloaded report.pdf" },
  { id: 3, user: "alice", type: "logout", time: "10:30 AM", details: "Logged out" },
]

export default function ForensicTimelineViewer() {
  const [filter, setFilter] = useState("")
  const filteredEvents = filter
    ? mockEvents.filter(e => e.type === filter)
    : mockEvents

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-xl font-bold">Forensic Timeline Viewer</h2>

      <Card>
        <CardContent className="p-4 space-y-4">
          <Select onValueChange={setFilter}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Filter by event type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="login">Login</SelectItem>
              <SelectItem value="logout">Logout</SelectItem>
              <SelectItem value="download">Download</SelectItem>
            </SelectContent>
          </Select>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead>Event Type</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Details</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredEvents.map(event => (
                <TableRow key={event.id}>
                  <TableCell>{event.user}</TableCell>
                  <TableCell>{event.type}</TableCell>
                  <TableCell>{event.time}</TableCell>
                  <TableCell title={event.details}>
                    {event.details.length > 20
                      ? event.details.slice(0, 20) + "..."
                      : event.details}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
