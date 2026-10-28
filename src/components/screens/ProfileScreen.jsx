import React from 'react';
import { useApp } from '../../context/AppContext';
import { HeaderBar } from '../common/HeaderBar';
import { MobileLayout } from '../common/MobileLayout';
import { Camera, ChevronRight, Mail, Calendar, Flame, GraduationCap, LogOut, Trash2, Bell } from 'lucide-react';

export const ProfileScreen = () => {
  const { currentUser, setCurrentUser, USERS, navigateTo, setShowNotification, showNotification } = useApp();

  const handleNextUser = () => {
    const currentIndex = USERS.findIndex(u => u.id === currentUser.id);
    const nextIndex = (currentIndex + 1) % USERS.length;
    setCurrentUser(USERS[nextIndex]);
  };

  return (
    <MobileLayout header={<HeaderBar type="sub" title="Mi Perfil" onBack={() => navigateTo('home', 'home')} />} contentClassName="px-5 pt-4 space-y-4 pb-6 max-w-sm mx-auto w-full">
      {/* User Avatar & Name Section matching Figma Page 36 & Page 11 */}
      <div className="flex flex-col items-center justify-center pt-2">
        <div className="relative group cursor-pointer" onClick={handleNextUser} title="Click para cambiar de perfil (Andrea / Therrius / Dummy)">
          <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-300 border-4 border-white shadow-md flex items-center justify-center">
            {currentUser.avatar ? (
              <img
                src={currentUser.avatar}
                alt={currentUser.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-[#8E8E93] flex items-center justify-center text-white text-2xl font-bold">
                {currentUser.name.charAt(0)}
              </div>
            )}
          </div>

          {/* Camera badge */}
          <div className="absolute bottom-0 right-0 w-7 h-7 rounded-full bg-white text-gray-500 shadow-md border border-gray-200 flex items-center justify-center group-hover:bg-[#F26B1D] group-hover:text-white transition">
            <Camera className="w-4 h-4" />
          </div>
        </div>

        <h2 className="text-xl font-bold text-[#232323] font-heading mt-3">
          {currentUser.name}
        </h2>
        <p className="text-xs text-gray-500 font-medium mt-0.5">
          {currentUser.role}
        </p>
        <span className="text-[10px] text-[#F26B1D] font-semibold mt-1 bg-orange-100/60 px-2.5 py-0.5 rounded-full cursor-pointer hover:bg-orange-100" onClick={handleNextUser}>
          Toca el avatar para alternar usuario
        </span>
      </div>

      {/* Info Rows matching Figma Page 36 */}
      <div className="space-y-3 pt-2">
        {/* Label / value (Email) */}
        <div className="bg-white rounded-2xl p-3.5 border border-[#FED4B9] shadow-card flex items-center space-x-3.5">
          <div className="w-8 h-8 rounded-lg bg-[#FEF0E6] flex items-center justify-center text-[#F26B1D] shrink-0">
            <Mail className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[10px] font-bold text-[#F26B1D] uppercase tracking-wider block">
              Correo institucional
            </span>
            <p className="text-xs font-semibold text-[#232323] mt-0.5">
              {currentUser.email}
            </p>
          </div>
        </div>

        {/* Cursando Ing de Sistemas desde */}
        <div className="bg-white rounded-2xl p-3.5 border border-[#FED4B9] shadow-card flex items-center space-x-3.5">
          <div className="w-8 h-8 rounded-lg bg-[#FEF0E6] flex items-center justify-center text-[#F26B1D] shrink-0">
            <Calendar className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[10px] font-bold text-[#F26B1D] uppercase tracking-wider block">
              Cursando Ing de Sistemas desde
            </span>
            <p className="text-xs font-semibold text-[#232323] mt-0.5">
              {currentUser.since}
            </p>
          </div>
        </div>

        {/* Cursos completos */}
        <div className="bg-white rounded-2xl p-3.5 border border-[#FED4B9] shadow-card flex items-center space-x-3.5">
          <div className="w-8 h-8 rounded-lg bg-[#FEF0E6] flex items-center justify-center text-[#F26B1D] shrink-0">
            <Flame className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[10px] font-bold text-[#F26B1D] uppercase tracking-wider block">
              Cursos completos
            </span>
            <p className="text-xs font-semibold text-[#232323] mt-0.5">
              {currentUser.completedCourses}
            </p>
          </div>
        </div>

        {/* Action item: Mi universidad */}
        <div
          onClick={() => alert('Portal Universitario StudyFlow conectado con campus virtual.')}
          className="bg-white rounded-2xl p-4 border border-[#FED4B9] hover:border-[#F26B1D] transition shadow-card flex items-center justify-between cursor-pointer group"
        >
          <div className="flex items-center space-x-3.5">
            <div className="w-8 h-8 rounded-lg bg-[#FEF0E6] flex items-center justify-center text-[#F26B1D]">
              <GraduationCap className="w-4 h-4" />
            </div>
            <span className="text-sm font-bold text-[#232323] font-heading">
              Mi universidad
            </span>
          </div>
          <ChevronRight className="w-5 h-5 text-[#F26B1D] group-hover:translate-x-1 transition-transform" />
        </div>

        {/* Action item: Cerrar sesión */}
        <div
          onClick={() => navigateTo('splash')}
          className="bg-white rounded-2xl p-4 border border-[#FED4B9] hover:border-[#F26B1D] transition shadow-card flex items-center justify-between cursor-pointer group"
        >
          <div className="flex items-center space-x-3.5">
            <div className="w-8 h-8 rounded-lg bg-[#FEF0E6] flex items-center justify-center text-[#F26B1D]">
              <LogOut className="w-4 h-4" />
            </div>
            <span className="text-sm font-bold text-[#232323] font-heading">
              Cerrar sesión
            </span>
          </div>
          <ChevronRight className="w-5 h-5 text-[#F26B1D] group-hover:translate-x-1 transition-transform" />
        </div>

        {/* Action item: Desuscribirme */}
        <div
          onClick={() => {
            if (confirm('¿Estás seguro de que deseas desuscribirte de StudyFlow?')) {
              navigateTo('splash');
            }
          }}
          className="bg-white rounded-2xl p-4 border border-[#FED4B9] hover:border-red-300 transition shadow-card flex items-center justify-between cursor-pointer group"
        >
          <div className="flex items-center space-x-3.5">
            <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center text-red-500">
              <Trash2 className="w-4 h-4" />
            </div>
            <span className="text-sm font-bold text-red-600 font-heading">
              Desuscribirme
            </span>
          </div>
          <ChevronRight className="w-5 h-5 text-red-400 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>

      {/* Demo trigger for Page 35 Push Notification Banner */}
      <div className="pt-2 text-center">
        <button
          onClick={() => setShowNotification(!showNotification)}
          className="inline-flex items-center space-x-2 text-xs font-semibold text-[#8C4A32] bg-[#FED4B9]/50 hover:bg-[#FED4B9] px-4 py-2 rounded-full transition"
        >
          <Bell className="w-3.5 h-3.5 text-[#F26B1D]" />
          <span>{showNotification ? 'Ocultar Notificación Push (Diseño 15)' : 'Simular Notificación Push (Diseño 15)'}</span>
        </button>
      </div>
    </MobileLayout>
  );
};
