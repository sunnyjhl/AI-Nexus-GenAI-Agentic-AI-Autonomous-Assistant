import React from 'react';
import ChatInterface from './components/ChatInterface';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">
      <header className="bg-white/10 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
            🤖 AI Nexus - GenAI + Agentic AI
          </h1>
          <p className="text-gray-300 text-sm mt-1">Autonomous AI Assistant with Tools & Memory</p>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-4 py-8">
        <ChatInterface />
      </main>
    </div>
  );
}

export default App;

