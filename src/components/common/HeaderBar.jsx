import React from 'react';
import { useApp } from '../../context/AppContext';
import { StatusBar } from './FigmaIcons';
import { Menu, Search, ArrowLeft, Bell } from 'lucide-react';

export const HeaderBar = ({
  type = 'sub', // 'tab' | 'sub' | 'home'
  title = '',
  showSearch = true,
  searchPlaceholder = 'Buscar',
  searchValue = '',
  onSearchChange = () => {},
  onBack = null
}) => {
  const { currentUser, setShowDrawer, setShowNotification, navigateTo, goBack } = useApp();

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      goBack();
    }
  };

  if (type === 'home') {
    return (
      <header className="bg-[#8C4A32] text-white pt-2 pb-6 px-5 rounded-b-[30px] shadow-md transition-all relative">
        <StatusBar dark={true} />
        <div className="flex items-center justify-between mt-3 mb-4">
          <div>
            <span className="text-sm font-light text-orange-200">Hola</span>
            <h1 className="text-xl font-bold font-heading tracking-wide">
              {currentUser.name}
            </h1>
          </div>
          <div className="flex items-center space-x-3">
            {/* Academic hat icon */}
            <button
              onClick={() => navigateTo('courses', 'courses')}
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition active:scale-95"
              title="Mis cursos"
            >
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none">
                <path d="M12 3L2 8.5l10 5.5 10-5.5L12 3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6 10.7V16c0 2 3 3.5 6 3.5s6-1.5 6-3.5v-5.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
            {/* Notification bell */}
            <button
              onClick={() => setShowNotification(prev => !prev)}
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center relative transition active:scale-95"
              title="Notificaciones"
            >
              <Bell className="w-5 h-5 text-white" />
              <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-[#F26B1D] border-2 border-[#8C4A32] rounded-full" />
            </button>
            {/* User Avatar */}
            <button
              onClick={() => navigateTo('profile', 'profile')}
              className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/60 focus:outline-none transition active:scale-95 shadow-sm"
              title="Ver mi perfil"
            >
              {currentUser.avatar ? (
                <img src={currentUser.avatar} alt={currentUser.name} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full bg-[#B36B4D] flex items-center justify-center text-white font-bold text-sm">
                  {currentUser.name.charAt(0)}
                </div>
              )}
            </button>
          </div>
        </div>
      </header>
    );
  }

  if (type === 'tab') {
    return (
      <header className="bg-[#8C4A32] text-white pt-2 pb-5 px-5 rounded-b-[28px] shadow-md transition-all relative">
        <StatusBar dark={true} />
        <div className="flex items-center justify-between mt-3 mb-3">
          <button
            onClick={() => setShowDrawer(true)}
            className="w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition active:scale-95"
            title="Abrir menú"
          >
            <Menu className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-semibold font-heading tracking-wide text-center">
            {title}
          </h1>
          <button
            onClick={() => navigateTo('profile', 'profile')}
            className="w-9 h-9 rounded-full overflow-hidden border-2 border-white/60 focus:outline-none transition active:scale-95 shadow-sm"
          >
            {currentUser.avatar ? (
              <img src={currentUser.avatar} alt={currentUser.name} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-[#B36B4D] flex items-center justify-center text-white font-bold text-sm">
                {currentUser.name.charAt(0)}
              </div>
            )}
          </button>
        </div>

        {showSearch && (
          <div className="relative mt-2">
            <Search className="w-4 h-4 text-white/60 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={searchPlaceholder}
              value={searchValue}
              onChange={onSearchChange}
              className="w-full bg-white/15 hover:bg-white/20 focus:bg-white/25 text-white placeholder-white/60 text-sm rounded-full pl-11 pr-4 py-2.5 transition backdrop-blur-sm"
            />
          </div>
        )}
      </header>
    );
  }

  // Default Sub Header with back button
  return (
    <header className="bg-[#8C4A32] text-white pt-2 pb-4 px-4 rounded-b-[24px] shadow-md transition-all relative">
      <StatusBar dark={true} />
      <div className="flex items-center space-x-3 mt-3">
        <button
          onClick={handleBack}
          className="w-9 h-9 rounded-full bg-black/15 hover:bg-black/25 flex items-center justify-center text-white transition active:scale-95 focus:outline-none"
          title="Regresar"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="text-lg font-semibold font-heading tracking-wide">
          {title}
        </h1>
      </div>
    </header>
  );
};
