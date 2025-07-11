import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function LLMChatPage() {
  return (
    <div className="min-h-screen bg-slate-900 p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">LLM Chat</h1>
        <p className="text-slate-400">AI-powered chat interface for investigation assistance</p>
      </div>

      <Card className="bg-slate-800 border-slate-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-white">Chat Interface</CardTitle>
          <CardDescription className="text-slate-300">
            Interact with AI to analyze session data and get insights
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🤖</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">LLM Chat Coming Soon</h3>
            <p className="text-slate-400">This feature will allow you to chat with AI for investigation assistance.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
