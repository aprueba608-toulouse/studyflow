import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { X, Send } from 'lucide-react';

export const HelpChatModal = () => {
  const { showHelpModal, setShowHelpModal } = useApp();
  const [messages, setMessages] = useState([
    { id: 1, sender: 'bot', text: 'Coméntanos, ¿cómo podemos ayudarte?' }
  ]);
  const [inputText, setInputText] = useState('');

  if (!showHelpModal) return null;

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userMsg = { id: Date.now(), sender: 'user', text: inputText };
    setMessages(prev => [...prev, userMsg]);
    setInputText('');

    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: 'bot',
          text: '¡Gracias por contactarnos! El equipo de soporte de StudyFlow revisará tu consulta de inmediato.'
        }
      ]);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="w-full max-w-[360px] bg-white rounded-3xl p-6 shadow-2xl relative border border-orange-100 flex flex-col min-h-[380px]">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-orange-100">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-full bg-[#FEF0E6] flex items-center justify-center text-[#F26B1D]">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="font-semibold text-sm text-[#8C4A32]">Soporte StudyFlow</span>
          </div>
          <button
            onClick={() => setShowHelpModal(false)}
            className="p-1 rounded-full text-gray-400 hover:text-gray-600 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Chat History matching Figma Page 28 styling */}
        <div className="flex-1 py-4 space-y-3 overflow-y-auto max-h-[260px]">
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex items-start space-x-2.5 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {m.sender === 'bot' && (
                <div className="w-7 h-7 rounded-full bg-[#FED4B9] shrink-0 mt-1" />
              )}
              <div
                className={`p-3.5 rounded-2xl text-xs leading-relaxed max-w-[80%] ${
                  m.sender === 'bot'
                    ? 'bg-[#FEF0E6] text-[#733722] rounded-tl-none font-medium'
                    : 'bg-[#F26B1D] text-white rounded-tr-none'
                }`}
              >
                {m.text}
              </div>
              {m.sender === 'user' && (
                <div className="w-7 h-7 rounded-full bg-[#8C4A32] shrink-0 mt-1 flex items-center justify-center text-white text-[10px] font-bold">
                  Tú
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Input box */}
        <form onSubmit={handleSend} className="mt-auto pt-3 border-t border-orange-100 flex items-center space-x-2">
          <input
            type="text"
            placeholder="Escribe tu mensaje..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="flex-1 bg-[#FEF0E6] border border-[#FED4B9] rounded-full px-4 py-2 text-xs text-[#232323] placeholder-[#8C4A32]/50 focus:border-[#F26B1D] transition"
          />
          <button
            type="submit"
            disabled={!inputText.trim()}
            className="w-8 h-8 rounded-full bg-[#F26B1D] hover:bg-[#DF5C12] disabled:opacity-40 text-white flex items-center justify-center transition active:scale-95 shadow-sm"
          >
            <Send className="w-4 h-4 ml-0.5" />
          </button>
        </form>
      </div>
    </div>
  );
};
