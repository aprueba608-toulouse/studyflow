import React from 'react';
import { useApp } from '../../context/AppContext';
import { StatusBar } from '../common/FigmaIcons';

export const PasswordSuccessScreen = () => {
  const { navigateTo } = useApp();

  return (
    <div className="min-h-screen bg-[#FDF7F2] flex flex-col justify-between px-6 pb-12 pt-2 text-center">
      <StatusBar dark={false} />

      <div className="flex-1 flex flex-col items-center justify-center max-w-sm mx-auto w-full">
        {/* Success Icon matching Figma Page 33 / Frame.svg */}
        <div className="w-56 h-56 mb-8 hover:scale-105 transition-transform duration-300">
          <img
            src="/assets/Frame.svg"
            alt="Éxito"
            className="w-full h-full object-contain"
          />
        </div>

        <h2 className="text-sm font-medium text-[#232323] px-4 max-w-xs leading-relaxed">
          Contraseña cambiada satifactoriamente
        </h2>

        <div className="w-full mt-12">
          <button
            onClick={() => navigateTo('login')}
            className="w-full py-3.5 px-6 rounded-full bg-[#F26B1D] hover:bg-[#DF5C12] text-white font-semibold text-sm shadow-btn transition-all active:scale-[0.98] cursor-pointer"
          >
            Iniciar Sesión
          </button>
        </div>
      </div>
    </div>
  );
};
