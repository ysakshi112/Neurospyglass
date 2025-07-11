'use client'

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function VoiceFileProcessorPage() {
  const [fileName, setFileName] = useState("")

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) setFileName(file.name)
  }

  const handleProcess = () => {
    // Dummy placeholder for processing logic
    alert("Processing voice file: " + fileName)
  }

  return (
    <div className="p-6 bg-slate-900 min-h-screen">
      <h2 className="text-xl font-bold mb-4 text-white">Voice File Processor</h2>

      <Card className="bg-slate-800 border-slate-700 shadow-lg">
        <CardContent className="p-6 space-y-4">
          <Input
            type="file"
            accept=".wav,.mp3,.m4a"
            onChange={handleFileChange}
            className="bg-slate-900 text-white border-slate-700"
          />
          {fileName && <p className="text-sm text-slate-300">Selected: {fileName}</p>}
          <Button onClick={handleProcess} disabled={!fileName} className="bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700">
            Process Voice
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
