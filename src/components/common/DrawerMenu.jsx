import React from 'react';
import { useApp } from '../../context/AppContext';
import { User, KeyRound, LogOut, X } from 'lucide-react';

export const DrawerMenu = () => {
  const { showDrawer, setShowDrawer, currentUser, navigateTo } = useApp();

  if (!showDrawer) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <div
        onClick={() => setShowDrawer(false)}
        className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
      />

      {/* Drawer content matching Figma Page 25 */}
      <div className="relative w-3/4 max-w-[280px] bg-[#8C4A32] text-white h-full shadow-2xl flex flex-col p-6 z-10 animate-in slide-in-from-left duration-200">
        <div className="flex items-center justify-between pb-6 border-b border-white/15">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/60 bg-[#A05338] flex items-center justify-center">
              {currentUser.avatar ? (
                <img src={currentUser.avatar} alt={currentUser.name} className="w-full h-full object-cover" />
              ) : (
                <span className="font-bold text-lg">{currentUser.name.charAt(0)}</span>
              )}
            </div>
            <div>
              <h2 className="font-semibold text-base leading-tight font-heading">{currentUser.name}</h2>
              <span className="text-xs text-orange-200">{currentUser.role}</span>
            </div>
          </div>
          <button
            onClick={() => setShowDrawer(false)}
            className="p-1 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Menu Navigation */}
        <div className="mt-8 flex flex-col space-y-4">
          <button
            onClick={() => {
              setShowDrawer(false);
              navigateTo('profile', 'profile');
            }}
            className="flex items-center space-x-3 text-left py-2.5 px-3 rounded-xl hover:bg-white/10 text-white font-medium text-base transition group"
          >
            <User className="w-5 h-5 text-orange-300 group-hover:scale-110 transition-transform" />
            <span>Perfil</span>
          </button>

          <button
            onClick={() => {
              setShowDrawer(false);
              navigateTo('new-password');
            }}
            className="flex items-center space-x-3 text-left py-2.5 px-3 rounded-xl hover:bg-white/10 text-white font-medium text-base transition group"
          >
            <KeyRound className="w-5 h-5 text-orange-300 group-hover:scale-110 transition-transform" />
            <span>Cambiar Contraseña</span>
          </button>

          <button
            onClick={() => {
              setShowDrawer(false);
              navigateTo('splash');
            }}
            className="flex items-center space-x-3 text-left py-2.5 px-3 rounded-xl hover:bg-white/10 text-white font-medium text-base transition group"
          >
            <LogOut className="w-5 h-5 text-orange-300 group-hover:scale-110 transition-transform" />
            <span>Cerrar Sesión</span>
          </button>
        </div>

        <div className="mt-auto pt-6 border-t border-white/15 text-xs text-orange-200/60 text-center">
          StudyFlow v1.0 • Delta
        </div>
      </div>
    </div>
  );
};
