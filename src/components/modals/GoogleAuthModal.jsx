import React from 'react';
import { useApp } from '../../context/AppContext';
import { X, UserPlus } from 'lucide-react';

export const GoogleAuthModal = () => {
  const { showGoogleModal, setShowGoogleModal, USERS, setCurrentUser, navigateTo } = useApp();

  if (!showGoogleModal) return null;

  const handleSelectAccount = (user) => {
    setCurrentUser(user);
    setShowGoogleModal(false);
    navigateTo('home', 'home');
  };

  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="w-full max-w-[370px] bg-white rounded-3xl p-6 shadow-2xl relative text-left">
        {/* Top Header */}
        <div className="flex items-center justify-between pb-3 border-b border-gray-100">
          <div className="flex items-center space-x-2">
            {/* Google G logo */}
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/>
              <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.34 24 12 24z"/>
              <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
              <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
            </svg>
            <span className="text-xs font-semibold text-gray-700">Acceder con Google</span>
          </div>
          <button
            onClick={() => setShowGoogleModal(false)}
            className="text-gray-400 hover:text-gray-600 p-1 rounded-full transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Heading */}
        <div className="mt-4 mb-4">
          <h3 className="text-xl font-bold text-gray-900 font-heading">Elige una cuenta</h3>
          <p className="text-xs text-gray-500 mt-0.5">Ir a <span className="text-[#F26B1D] font-medium">StudyFlow</span></p>
        </div>

        {/* Accounts List matching Figma Page 23 */}
        <div className="space-y-1 divide-y divide-gray-100">
          {USERS.slice(0, 2).map((user) => (
            <button
              key={user.id}
              onClick={() => handleSelectAccount(user)}
              className="w-full flex items-center space-x-3 py-3 px-2 rounded-xl hover:bg-orange-50/50 transition text-left cursor-pointer group"
            >
              <img
                src={user.avatar}
                alt={user.name}
                className="w-10 h-10 rounded-full object-cover border border-orange-200 group-hover:scale-105 transition-transform"
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-900 leading-tight">{user.fullName}</p>
                <p className="text-xs text-gray-500 truncate">{user.email}</p>
              </div>
            </button>
          ))}

          {/* Usar otra cuenta */}
          <button
            onClick={() => {
              setShowGoogleModal(false);
              navigateTo('login');
            }}
            className="w-full flex items-center space-x-3 py-3 px-2 rounded-xl hover:bg-orange-50/50 transition text-left cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 group-hover:bg-orange-100 group-hover:text-orange-600 transition">
              <UserPlus className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-800">Usar otra cuenta</p>
            </div>
          </button>
        </div>

        {/* Footer Policy */}
        <div className="mt-6 pt-4 border-t border-gray-100 text-[11px] text-gray-500 text-center leading-relaxed">
          Antes de usar StudyFlow, revisa su{' '}
          <span className="font-semibold text-gray-700">Política de Privacidad</span> y{' '}
          <span className="font-semibold text-gray-700">Condiciones del Servicio</span>.
          <div className="flex justify-center space-x-4 mt-3 text-gray-600 font-medium">
            <button className="hover:underline">Ayuda</button>
            <button className="hover:underline">Privacidad</button>
            <button className="hover:underline">Condiciones</button>
          </div>
        </div>
      </div>
    </div>
  );
};
