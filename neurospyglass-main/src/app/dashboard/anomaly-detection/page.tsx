'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"


const anomalies = [
  { id: 1, user: "alice", session: "s-101", score: "0.92" },
  { id: 2, user: "bob", session: "s-105", score: "0.88" },
  { id: 3, user: "charlie", session: "s-110", score: "0.95" },
]

export default function AnomalyDetectionPage() {
  const [explanation, setExplanation] = useState("")

  const handleExplain = (user: string) => {
    // Dummy LLM response
    setExplanation(`LLM Explanation: Suspicious activity by ${user} due to multiple irregular access points.`)
  }

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-xl font-bold">Anomaly Detection</h2>

      <Card>
        <CardContent className="p-4 space-y-4">
          {/* Dummy Graph Placeholder */}
          <div className="h-48 bg-gray-100 border border-dashed rounded-lg flex items-center justify-center">
            Graph Visualization Placeholder
          </div>

          {/* Table */}
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead>Session</TableHead>
                <TableHead>Anomaly Score</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {anomalies.map((a) => (
                <TableRow key={a.id}>
                  <TableCell>{a.user}</TableCell>
                  <TableCell>{a.session}</TableCell>
                  <TableCell>{a.score}</TableCell>
                  <TableCell>
                    <Button variant="outline" onClick={() => handleExplain(a.user)}>Explain</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {/* Explanation Display */}
          {explanation && (
            <div className="text-sm text-muted-foreground border p-3 rounded-md bg-muted">
              {explanation}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
