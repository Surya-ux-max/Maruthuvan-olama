"use client";

import { useState } from "react";
import Galaxy from "../../components/Galaxy";

export default function ChatPage() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const sendMessage = async () => {
    if (!message.trim()) return;

    setChat((prev) => [...prev, `You: ${message}`]);
    setLoading(true);

    try {
      const res = await fetch("http://localhost:3000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      const data = await res.json();
      setChat((prev) => [...prev, `Maruthuvan AI: ${data.reply}`]);
    } catch (error) {
      setChat((prev) => [...prev, `Maruthuvan AI: Sorry, I'm having trouble connecting. Please try again.`]);
    }
    
    setMessage("");
    setLoading(false);
  };

  return (
    <main className="min-h-screen relative">
      <div className="fixed inset-0 z-0">
        <Galaxy 
          mouseRepulsion={true}
          mouseInteraction={true}
          density={1.5}
          glowIntensity={0.5}
          saturation={0.8}
          hueShift={240}
        />
      </div>
      
      <div className="relative z-10 min-h-screen flex">
        {/* Sidebar */}
        <div className={`${sidebarOpen ? 'w-80' : 'w-0'} transition-all duration-300 overflow-hidden bg-black border-r border-gray-600`}>
          <div className="w-80 p-6">
            <div className="mb-8">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2 flex items-center gap-2">
                <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.82,11.69,4.82,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.43-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"/>
                </svg>
                Maruthuvan AI
              </h1>
              <p className="text-white text-sm">Your AI Health Assistant</p>
            </div>
            
            <div className="space-y-4">
              <div className="bg-gray-900 rounded-lg p-4 border border-gray-600">
                <h3 className="text-white font-medium mb-2">Quick Actions</h3>
                <div className="space-y-2">
                  <button className="w-full text-left text-white hover:text-blue-400 hover:bg-gray-800 rounded px-2 py-2 text-sm transition-colors flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    Symptom Checker
                  </button>
                  <button className="w-full text-left text-white hover:text-blue-400 hover:bg-gray-800 rounded px-2 py-2 text-sm transition-colors flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    Find Doctors
                  </button>
                  <button className="w-full text-left text-white hover:text-blue-400 hover:bg-gray-800 rounded px-2 py-2 text-sm transition-colors flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    Health Tips
                  </button>
                </div>
              </div>
              
              <div className="bg-gray-900 rounded-lg p-4 border border-gray-600">
                <h3 className="text-white font-medium mb-2">Recent Chats</h3>
                <p className="text-gray-400 text-sm">No recent conversations</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Toggle Button */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="absolute left-2 top-6 z-20 bg-black border border-gray-600 rounded-lg p-2 text-white hover:bg-gray-900 transition-all duration-200 shadow-lg"
          style={{ left: sidebarOpen ? '18rem' : '0.5rem' }}
        >
          <svg className={`w-5 h-5 transition-transform duration-300 ${sidebarOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        
        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Chat Messages */}
          <div className="flex-1 p-6 overflow-y-auto">
            <div className="max-w-4xl mx-auto space-y-4">
              {chat.length === 0 ? (
                <div className="text-center py-20">
                  <h2 className="text-4xl font-bold text-white">Maruthuvan AI</h2>
                </div>
              ) : (
                chat.map((msg, idx) => {
                  const isUser = msg.startsWith('You:');
                  return (
                    <div key={idx} className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-2xl rounded-2xl p-4 shadow-lg ${
                        isUser 
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' 
                          : 'bg-black border border-gray-600 text-white'
                      }`}>
                        {isUser ? (
                          <p className="leading-relaxed">{msg.replace(/^(You:|Maruthuvan AI:)\s*/, '')}</p>
                        ) : (
                          <div className="leading-relaxed space-y-3">
                            {msg.replace(/^(You:|Maruthuvan AI:)\s*/, '').split('\n').map((line, lineIdx) => {
                              if (line.startsWith('### ')) {
                                return <h3 key={lineIdx} className="text-blue-400 font-semibold text-lg mt-4 mb-2">{line.replace('### ', '')}</h3>;
                              }
                              if (line.startsWith('- ')) {
                                return <div key={lineIdx} className="flex items-start gap-2 mb-1"><span className="text-blue-400 mt-1">•</span><span>{line.replace('- ', '')}</span></div>;
                              }
                              if (line.trim() === '') {
                                return <div key={lineIdx} className="h-2"></div>;
                              }
                              return <p key={lineIdx} className="mb-2">{line}</p>;
                            })}
                          </div>
                        )}
                        {!isUser && <div className="text-xs text-gray-400 mt-3 pt-2 border-t border-gray-700">Maruthuvan AI</div>}
                      </div>
                    </div>
                  );
                })
              )}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-black border border-gray-600 rounded-2xl p-4 shadow-lg">
                    <div className="flex items-center space-x-2">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                      </div>
                      <span className="text-white text-sm">Maruthuvan AI is thinking...</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Input Area */}
          <div className="border-t border-gray-600 bg-black p-6">
            <div className="max-w-4xl mx-auto">
              <div className="flex gap-4">
                <input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                  placeholder="Describe your symptoms or ask a health question..."
                  className="flex-1 bg-gray-900 border border-gray-600 rounded-2xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 shadow-lg"
                />
                <button
                  onClick={sendMessage}
                  disabled={!message.trim() || loading}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-8 py-4 rounded-2xl font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Send
                </button>
              </div>
              
              <p className="text-xs text-gray-400 mt-4 text-center">
                ⚠️ Maruthuvan AI provides informational guidance only. Always consult qualified medical professionals for diagnosis and treatment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}