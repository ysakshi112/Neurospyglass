'use client'

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function OfflineSessionUploadPage() {
  const [fileName, setFileName] = useState("")

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) setFileName(file.name)
  }

  const handleUpload = () => {
    // Later connect with backend logic
    alert("File uploaded: " + fileName)
  }

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Offline Session Upload</h2>

      <Card>
        <CardContent className="p-6 space-y-4">
          <Input
            type="file"
            accept=".csv, .json"
            onChange={handleFileChange}
          />
          {fileName && <p className="text-sm text-gray-600">Selected: {fileName}</p>}
          <Button onClick={handleUpload} disabled={!fileName}>Upload</Button>
        </CardContent>
      </Card>
    </div>
  )
}
