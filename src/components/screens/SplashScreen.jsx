import React from 'react';
import { useApp } from '../../context/AppContext';
import { StatusBar } from '../common/FigmaIcons';
import { Logo } from '../common/Logo';

export const SplashScreen = () => {
  const { navigateTo, setShowHelpModal } = useApp();

  return (
    <div className="h-full w-full bg-[#FDF7F2] flex flex-col justify-between px-6 pb-6 pt-2 text-center relative overflow-hidden">
      {/* Top Status Bar */}
      <div className="flex-shrink-0">
        <StatusBar dark={false} />
      </div>

      {/* Main Logo & Branding */}
      <main className="flex-1 flex flex-col items-center justify-center my-auto overflow-y-auto min-h-0">
        {/* Full Logo Banner */}
        <Logo className='mb-8 max-w-[240px]' type='logotipo' />

        {/* Central Illustration Circle matching Page 4 */}
        <div className="relative w-56 h-56 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border border-[#F26B1D]/30 animate-pulse" />
          <Logo className='m-12 w-30 h-30 object-contain drop-shadow-md hover:scale-105 transition-transform duration-300' type='isologo' />
        </div>
      </main>

      {/* Action Buttons matching Figma styles */}
      <div className="flex-shrink-0 w-full max-w-sm mx-auto space-y-3 pb-2">
        {/* Primary Orange Button */}
        <button
          onClick={() => navigateTo('login')}
          className="w-full py-3.5 px-6 rounded-full bg-[#F26B1D] hover:bg-[#DF5C12] text-white font-medium text-base shadow-btn transition-all active:scale-[0.98] cursor-pointer"
        >
          Inicia sesión
        </button>

        {/* Secondary Earth Brown Button */}
        <button
          onClick={() => navigateTo('register')}
          className="w-full py-3.5 px-6 rounded-full bg-[#B36B4D] hover:bg-[#8C4A32] text-white font-medium text-base shadow-brown-btn transition-all active:scale-[0.98] cursor-pointer"
        >
          Registrarse
        </button>

        {/* Help Link */}
        <div className="pt-2">
          <button
            onClick={() => setShowHelpModal(true)}
            className="text-xs font-semibold text-[#8C4A32] hover:text-[#F26B1D] hover:underline transition"
          >
            ¿Necesitas ayuda? Escribenos
          </button>
        </div>
      </div>
    </div>
  );
};
