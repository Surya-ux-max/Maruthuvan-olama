"use client";

import Cyberpunk from "../components/Cyberpunk";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 z-0">
        <Cyberpunk />
      </div>
      
      <div className="relative z-10 text-white">
        <nav className="p-6 backdrop-blur-sm bg-black bg-opacity-30 border-b border-cyan-500 border-opacity-30">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center gap-2">
              <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.82,11.69,4.82,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.43-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"/>
              </svg>
              <span className="text-2xl font-bold text-white">Maruthuvan AI</span>
            </div>
            <a href="/chat" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold px-6 py-2 rounded-lg transition-all duration-300">
              Get Started
            </a>
          </div>
        </nav>

        <section className="px-6 py-20">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-6xl font-bold mb-6">
              Your AI Health
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Companion</span>
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Get instant medical guidance, symptom analysis, and personalized health insights powered by advanced AI technology.
            </p>
            <div className="flex gap-6 justify-center">
              <a href="/chat" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold px-8 py-4 rounded-lg text-lg transition-all duration-300">
                Start Consultation
              </a>
              <button className="border-2 border-white border-opacity-20 text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:bg-opacity-10 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-white">
              Advanced AI Healthcare Features
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-black bg-opacity-50 border border-white border-opacity-20 rounded-xl p-8 hover:bg-opacity-70 transition-all duration-300">
                <svg className="w-12 h-12 mb-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <h3 className="text-2xl font-bold mb-4 text-white">Symptom Analysis</h3>
                <p className="text-gray-300 text-lg">
                  Advanced AI algorithms analyze your symptoms and provide preliminary assessments with high accuracy.
                </p>
              </div>
              <div className="bg-black bg-opacity-50 border border-white border-opacity-20 rounded-xl p-8 hover:bg-opacity-70 transition-all duration-300">
                <svg className="w-12 h-12 mb-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
                <h3 className="text-2xl font-bold mb-4 text-white">Treatment Guidance</h3>
                <p className="text-gray-300 text-lg">
                  Get personalized treatment recommendations and medication information based on your condition.
                </p>
              </div>
              <div className="bg-black bg-opacity-50 border border-white border-opacity-20 rounded-xl p-8 hover:bg-opacity-70 transition-all duration-300">
                <svg className="w-12 h-12 mb-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <h3 className="text-2xl font-bold mb-4 text-white">Health Monitoring</h3>
                <p className="text-gray-300 text-lg">
                  Track your health metrics and receive insights to maintain optimal wellness over time.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-black bg-opacity-50 border border-white border-opacity-20 rounded-2xl p-12">
              <h2 className="text-4xl font-bold mb-6 text-white">
                Ready to Transform Your Healthcare?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands who trust Maruthuvan AI for health consultations and medical guidance.
              </p>
              <a href="/chat" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold px-12 py-4 rounded-lg text-lg transition-all duration-300">
                Get Started Now
              </a>
            </div>
          </div>
        </section>

        <footer className="px-6 py-12 border-t border-white border-opacity-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.82,11.69,4.82,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.43-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"/>
              </svg>
              <span className="text-xl font-bold text-white">Maruthuvan AI</span>
            </div>
            <p className="text-gray-400 mb-4">
              Advanced AI-powered healthcare assistance for better health outcomes
            </p>
            <p className="text-xs text-gray-500">
              ⚠️ This AI assistant provides informational guidance only. Always consult qualified medical professionals.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
