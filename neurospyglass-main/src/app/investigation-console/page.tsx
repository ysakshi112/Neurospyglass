import ChatInputBox from "@/components/investigation-console/ChatInputBox";
import LLMResponse from "@/components/investigation-console/LLMResponse";
import SessionMetadata from "@/components/investigation-console/SessionMetadata";
import QuickQuestions from "@/components/investigation-console/QuickQuestions";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function InvestigationConsolePage() {
  return (
    <div className="min-h-screen bg-slate-900 p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Investigation Console – LLM Chat</h1>
        <p className="text-slate-400">Use AI to investigate sessions, ask questions, and get instant insights.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Session Metadata */}
        <Card className="bg-slate-800 border-slate-700 shadow-lg lg:col-span-1">
          <CardHeader>
            <CardTitle className="text-white text-lg">Session Metadata</CardTitle>
            <CardDescription className="text-slate-300">Details about the current session</CardDescription>
          </CardHeader>
          <CardContent>
            <SessionMetadata />
          </CardContent>
        </Card>

        {/* LLM Chat Section */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="bg-slate-800 border-slate-700 shadow-lg">
            <CardHeader>
              <CardTitle className="text-white text-lg">LLM Chat</CardTitle>
              <CardDescription className="text-slate-300">Ask questions about the session</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <QuickQuestions />
              <ChatInputBox />
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-slate-700 shadow-lg">
            <CardHeader>
              <CardTitle className="text-white text-lg">AI Response</CardTitle>
              <CardDescription className="text-slate-300">See the AI&apos;s answer and analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <LLMResponse />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
