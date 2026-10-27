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
    <nav className="fixed bottom-0 left-0 right-0 max-w-[430px] mx-auto bg-[#FED4B9]/85 backdrop-blur-md border-t border-[#FED4B9] px-3 py-2 z-30 transition-all shadow-bar">
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
              className="flex flex-col items-center justify-center py-1 px-3 group cursor-pointer focus:outline-none transition-transform active:scale-95"
            >
              <div className="w-5 h-5 flex items-center justify-center transition-transform group-hover:-translate-y-0.5">
                <img
                  src={isActive ? item.iconActive : item.iconInactive}
                  alt={item.label}
                  className="w-full h-full object-contain"
                />
              </div>
              <span
                className={`text-[11px] font-medium mt-1 tracking-tight transition-colors ${
                  isActive ? 'text-[#FA6F13] font-semibold' : 'text-[#7F7F7D]'
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
