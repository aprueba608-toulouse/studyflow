import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Smartphone, Monitor, ChevronDown, Layers, Sparkles } from 'lucide-react';

export const ScreenSwitcher = ({ isMobileFrame, setIsMobileFrame }) => {
  const {
    currentScreen,
    setCurrentScreen,
    setActiveTab,
    setShowGoogleModal,
    setShowHelpModal,
    setShowDrawer,
    setShowNotification
  } = useApp();

  const [isOpen, setIsOpen] = useState(false);

  const screens = [
    { id: 'splash', name: '1. Splash / Bienvenida', group: 'Autenticación' },
    { id: 'login', name: '2. Iniciar Sesión', group: 'Autenticación' },
    { id: 'register', name: '3. Registrarse (Crear Cuenta)', group: 'Autenticación' },
    { id: 'forgot-password', name: '4. Recuperar Acceso', group: 'Autenticación' },
    { id: 'otp', name: '5. Código OTP (Verificación)', group: 'Autenticación' },
    { id: 'new-password', name: '6. Nueva Contraseña', group: 'Autenticación' },
    { id: 'password-success', name: '7. Éxito Contraseña Cambiada', group: 'Autenticación' },
    { id: 'google-modal', name: '8. Modal Google OAuth', group: 'Modales' },
    { id: 'help-modal', name: '9. Modal Chat de Ayuda', group: 'Modales' },
    { id: 'drawer-menu', name: '10. Menú Lateral Drawer', group: 'Modales' },
    { id: 'home', name: '11. Inicio (Dashboard)', group: 'Principal', tab: 'home' },
    { id: 'tasks', name: '12. Tareas (Lista Agrupada)', group: 'Tareas', tab: 'tasks' },
    { id: 'task-detail', name: '13. Detalle de la Actividad', group: 'Tareas' },
    { id: 'new-task', name: '14. Nueva Tarea (Completo)', group: 'Tareas' },
    { id: 'quick-task', name: '15. Tarea (Modal Rápido)', group: 'Tareas' },
    { id: 'fast-capture', name: '16. Captura Rápida', group: 'Tareas' },
    { id: 'edit-task', name: '17. Editar Tarea', group: 'Tareas' },
    { id: 'subtasks', name: '18. Subtareas (Progreso 2/5)', group: 'Tareas' },
    { id: 'grade-impact', name: '19. Impacto en Nota (Priorización)', group: 'Tareas' },
    { id: 'calendar', name: '20. Calendario & Agenda', group: 'Principal', tab: 'calendar' },
    { id: 'courses', name: '21. Mis Cursos', group: 'Principal', tab: 'courses' },
    { id: 'course-detail', name: '22. Detalle de Curso', group: 'Cursos' },
    { id: 'profile', name: '23. Mi Perfil (con Alerta)', group: 'Principal', tab: 'profile' },
    { id: 'design-system', name: '24. Design System (Componentes)', group: 'Tokens' }
  ];

  const handleSelect = (screen) => {
    setIsOpen(false);

    if (screen.id === 'google-modal') {
      setCurrentScreen('login');
      setShowGoogleModal(true);
      return;
    }

    if (screen.id === 'help-modal') {
      setCurrentScreen('splash');
      setShowHelpModal(true);
      return;
    }

    if (screen.id === 'drawer-menu') {
      setCurrentScreen('home');
      setActiveTab('home');
      setShowDrawer(true);
      return;
    }

    if (screen.id === 'profile') {
      setShowNotification(true);
    }

    setCurrentScreen(screen.id);
    if (screen.tab) setActiveTab(screen.tab);
  };

  const activeItem = screens.find(s => s.id === currentScreen) || screens[0];

  return (
    <div className="w-full bg-[#733722] text-white px-4 py-2 flex flex-wrap items-center justify-between shadow-lg sticky top-0 z-50 text-xs font-medium">
      {/* Brand title */}
      <div className="flex items-center space-x-2">
        <span className="w-2.5 h-2.5 rounded-full bg-[#F26B1D] animate-ping" />
        <span className="font-bold tracking-wide font-heading">StudyFlow • 20 Diseños Figma</span>
      </div>

      {/* Screen Selector Dropdown */}
      <div className="relative my-1">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-2 bg-black/25 hover:bg-black/35 px-3 py-1.5 rounded-full border border-white/20 transition cursor-pointer"
        >
          <Layers className="w-3.5 h-3.5 text-orange-300" />
          <span className="font-semibold text-white max-w-[190px] truncate">
            {activeItem.name}
          </span>
          <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 mt-2 w-72 bg-white text-[#232323] rounded-2xl shadow-2xl border border-orange-100 py-2 max-h-[75vh] overflow-y-auto z-50 text-left animate-in fade-in zoom-in-95 duration-150">
            <div className="px-3 py-1.5 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
              Seleccionar Pantalla Figma (20+ Vistas)
            </div>
            {screens.map((item) => (
              <button
                key={item.id}
                onClick={() => handleSelect(item)}
                className={`w-full text-left px-3 py-2 text-xs hover:bg-[#FEF0E6] transition flex items-center justify-between ${
                  currentScreen === item.id ? 'bg-[#FED4B9]/40 font-bold text-[#F26B1D]' : 'text-gray-700'
                }`}
              >
                <span>{item.name}</span>
                <span className="text-[10px] text-gray-400 ml-2">{item.group}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Viewport Frame Toggle */}
      <div className="flex items-center space-x-2">
        <button
          onClick={() => setIsMobileFrame(true)}
          className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-full transition ${
            isMobileFrame
              ? 'bg-[#F26B1D] text-white font-bold shadow-sm'
              : 'bg-black/20 text-white/80 hover:text-white'
          }`}
          title="Vista Móvil (iPhone 15 Frame)"
        >
          <Smartphone className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Móvil</span>
        </button>

        <button
          onClick={() => setIsMobileFrame(false)}
          className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-full transition ${
            !isMobileFrame
              ? 'bg-[#F26B1D] text-white font-bold shadow-sm'
              : 'bg-black/20 text-white/80 hover:text-white'
          }`}
          title="Vista Fluida / Pantalla Completa"
        >
          <Monitor className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Completa</span>
        </button>

        <button
          onClick={() => setCurrentScreen('design-system')}
          className="bg-white/10 hover:bg-white/20 text-orange-200 px-3 py-1.5 rounded-full flex items-center space-x-1 transition"
          title="Ver Catálogo de Componentes"
        >
          <Sparkles className="w-3 h-3 text-orange-300" />
          <span className="hidden sm:inline">Tokens</span>
        </button>
      </div>
    </div>
  );
};
