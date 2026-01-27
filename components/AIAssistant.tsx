
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Bot, Sparkles } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: 'Hello! I am your Delhivery Logistics Assistant. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: `You are the official Delhivery Logistics Assistant. Help users with:
          1. Tracking shipments (explain that IDs usually start with DLV).
          2. Rate estimations (Standard vs Express).
          3. Pickup scheduling guidelines.
          4. Prohibited items (liquids, flammables, etc.).
          5. Pincode serviceability questions.
          Keep responses concise, professional, and helpful. Use Delhivery branding tone.`
        }
      });

      const botResponse = response.text || "I'm sorry, I couldn't process that. Please try again later.";
      setMessages(prev => [...prev, { role: 'bot', text: botResponse }]);
    } catch (error) {
      console.error('AI Error:', error);
      setMessages(prev => [...prev, { role: 'bot', text: "I'm having trouble connecting to my brain right now. Please try again soon!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button Styled as per Screenshot */}
      <div className="absolute bottom-48 right-6 z-50">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className={`w-14 h-14 rounded-2xl shadow-xl transition-all duration-300 flex items-center justify-center animate-bounce-slow active:scale-90 ${
            isOpen ? 'bg-white text-gray-500 rotate-90 opacity-0 pointer-events-none' : 'bg-[#FF6B00] text-white opacity-100'
          }`}
          style={{ 
            animation: 'float 3s ease-in-out infinite',
            boxShadow: '0 10px 25px -5px rgba(255, 107, 0, 0.4)'
          }}
        >
          <MessageSquare size={26} fill="white" />
        </button>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute inset-x-4 bottom-24 top-10 bg-white rounded-[32px] shadow-2xl border border-gray-100 flex flex-col overflow-hidden z-[60] animate-in slide-in-from-bottom-10">
          {/* Header */}
          <div className="bg-[#FF6B00] p-5 text-white flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                <Bot size={24} />
              </div>
              <div>
                <h3 className="font-bold leading-none text-white">Logistics AI</h3>
                <span className="text-[10px] text-white/80 flex items-center mt-1">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-1.5 animate-pulse"></span>
                  Online & Ready to Help
                </span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-lg transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                  msg.role === 'user' 
                    ? 'bg-[#FF6B00] text-white rounded-tr-none' 
                    : 'bg-white text-gray-800 border border-gray-100 shadow-sm rounded-tl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm rounded-tl-none">
                  <div className="flex space-x-1">
                    <div className="w-1.5 h-1.5 bg-[#FF6B00] rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-[#FF6B00] rounded-full animate-bounce delay-75"></div>
                    <div className="w-1.5 h-1.5 bg-[#FF6B00] rounded-full animate-bounce delay-150"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-gray-100">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Ask about your package..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                className="w-full pl-4 pr-12 py-3 bg-gray-100 border-none rounded-2xl focus:ring-2 focus:ring-[#FF6B00] focus:bg-white outline-none transition-all text-sm"
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-[#FF6B00] hover:bg-orange-50 rounded-lg transition-colors disabled:opacity-30"
              >
                <Send size={18} />
              </button>
            </div>
            <p className="text-[10px] text-gray-400 text-center mt-3 flex items-center justify-center">
              <Sparkles size={10} className="mr-1" /> Powered by Gemini AI
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default AIAssistant;
