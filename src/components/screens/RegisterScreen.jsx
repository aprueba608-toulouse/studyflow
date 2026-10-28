import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { StatusBar } from '../common/FigmaIcons';
import { ArrowLeft } from 'lucide-react';

export const RegisterScreen = () => {
  const { navigateTo } = useApp();
  const [docNumber, setDocNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    navigateTo('home', 'home');
  };

  return (
    <div className="h-full w-full bg-[#FDF7F2] flex flex-col overflow-hidden text-left">
      {/* Top Bar with back option */}
      <div className="flex-shrink-0 bg-[#8C4A32] text-white pt-2 pb-3 px-4 z-10">
        <StatusBar dark={true} />
        <div className="flex items-center space-x-2 mt-1">
          <button
            onClick={() => navigateTo('login')}
            className="p-1 rounded-full text-white/80 hover:text-white"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <span className="text-sm font-semibold">Registro</span>
        </div>
      </div>

      <main className="flex-1 overflow-y-auto overflow-x-hidden min-h-0 px-6 pt-4 pb-8 max-w-sm mx-auto w-full flex flex-col items-center">
        {/* Emblem */}
        <div className="w-24 h-24 my-2">
          <img
            src="/assets/Ellipse_17.png"
            alt="StudyFlow Emblem"
            className="w-full h-full object-contain drop-shadow"
          />
        </div>

        {/* Title */}
        <h2 className="text-base font-bold text-[#232323] font-heading self-start mb-3 ml-1">
          Crea una cuenta :
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="w-full space-y-3">
          <div className="bg-[#FEF0E6] border border-[#FED4B9] focus-within:border-[#F26B1D] rounded-full px-5 py-2.5 transition shadow-sm">
            <input
              type="text"
              required
              placeholder="Número de documento"
              value={docNumber}
              onChange={(e) => setDocNumber(e.target.value)}
              className="w-full bg-transparent text-xs text-[#232323] placeholder-[#8C4A32]/50"
            />
          </div>

          <div className="bg-[#FEF0E6] border border-[#FED4B9] focus-within:border-[#F26B1D] rounded-full px-5 py-2.5 transition shadow-sm">
            <input
              type="email"
              required
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent text-xs text-[#232323] placeholder-[#8C4A32]/50"
            />
          </div>

          <div className="bg-[#FEF0E6] border border-[#FED4B9] focus-within:border-[#F26B1D] rounded-full px-5 py-2.5 transition shadow-sm">
            <input
              type="password"
              required
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-transparent text-xs text-[#232323] placeholder-[#8C4A32]/50"
            />
          </div>

          <div className="bg-[#FEF0E6] border border-[#FED4B9] focus-within:border-[#F26B1D] rounded-full px-5 py-2.5 transition shadow-sm">
            <input
              type="password"
              required
              placeholder="Confirmar contraseña"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full bg-transparent text-xs text-[#232323] placeholder-[#8C4A32]/50"
            />
          </div>

          {/* Advice text */}
          <p className="text-[11px] text-[#232323] text-left pt-1 ml-1 leading-snug">
            <span className="font-bold">Consejo:</span> Trata de usar Mayusculas y numeros para tu contraseña.
          </p>

          {/* Button */}
          <div className="pt-3">
            <button
              type="submit"
              className="w-full py-3 px-6 rounded-full bg-[#F26B1D] hover:bg-[#DF5C12] text-white font-semibold text-sm shadow-btn transition-all active:scale-[0.98] cursor-pointer"
            >
              Registrate
            </button>
          </div>
        </form>

        {/* Footer info text */}
        <p className="mt-8 text-[10px] text-[#232323]/80 text-center leading-relaxed">
          <span className="font-semibold">Recuerda:</span> si te registras, aceptas nuestra política de privacidad y nuestros términos de servicio.
        </p>

        <div className="mt-4 text-xs text-[#8C4A32]">
          ¿Ya tienes una cuenta?{' '}
          <button
            onClick={() => navigateTo('login')}
            className="text-[#F26B1D] font-bold hover:underline"
          >
            Inicia sesión
          </button>
        </div>
      </main>
    </div>
  );
};
