import React from 'react';
import { useApp } from '../../context/AppContext';

export const BottomNavBar = () => {
  const { activeTab, setActiveTab, navigateTo } = useApp();

  const navItems = [
    {
      id: 'home',
      label: 'Inicio',
      screen: 'home',
      iconActive: '/assets/Vector_6.svg',
      iconInactive: '/assets/Vector_2.svg',
    },
    {
      id: 'tasks',
      label: 'Tareas',
      screen: 'tasks',
      iconActive: '/assets/Vector_5.svg',
      iconInactive: '/assets/Vector_7.svg',
    },
    {
      id: 'calendar',
      label: 'Calendario',
      screen: 'calendar',
      iconActive: '/assets/Vector_3.svg',
      iconInactive: '/assets/Vector_8.svg',
    },
    {
      id: 'courses',
      label: 'Cursos',
      screen: 'courses',
      iconActive: '/assets/Vector.svg',
      iconInactive: '/assets/Vector_9.svg',
    },
    {
      id: 'profile',
      label: 'Perfil',
      screen: 'profile',
      iconActive: '/assets/Vector_4.svg',
      iconInactive: '/assets/Vector_10.svg',
    }
  ];

  return (
    <nav className="w-full bg-[#FED4B9]/95 backdrop-blur-md border-t border-[#FED4B9]/70 px-2 pt-1.5 pb-2.5 z-30 transition-all shadow-bar select-none">
      <div className="flex items-center justify-around">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                navigateTo(item.screen, item.id);
              }}
              className="flex flex-col items-center justify-center py-0.5 px-2.5 group cursor-pointer focus:outline-none transition-transform active:scale-95"
            >
              <div className="w-5 h-5 flex items-center justify-center transition-transform group-hover:-translate-y-0.5">
                <img
                  src={isActive ? item.iconActive : item.iconInactive}
                  alt={item.label}
                  className="w-full h-full object-contain"
                />
              </div>
              <span
                className={`text-[10px] font-medium mt-1 tracking-tight transition-colors ${
                  isActive ? 'text-[#FA6F13] font-semibold' : 'text-[#7F7F7D]'
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
      {/* Barra de inicio / Home indicator de iOS para respetar la curva inferior */}
      <div className="w-32 h-1 bg-[#8C4A32]/25 rounded-full mx-auto mt-1.5" />
    </nav>
  );
};
