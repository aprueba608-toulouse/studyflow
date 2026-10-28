import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { HeaderBar } from '../common/HeaderBar';
import { MobileLayout } from '../common/MobileLayout';

export const ForgotPasswordScreen = () => {
  const { navigateTo } = useApp();
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    navigateTo('otp');
  };

  return (
    <MobileLayout
      header={<HeaderBar type="sub" title="Recuperar acceso" onBack={() => navigateTo('login')} />}
      showBottomNav={false}
      contentClassName="px-6 pt-12 pb-8 max-w-sm mx-auto w-full flex flex-col justify-between"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="text-left">
          <h2 className="text-base font-bold text-[#232323] font-heading mb-3">
            Introduce tu e-mail
          </h2>
          <div className="bg-[#FEF0E6] border border-[#FED4B9] focus-within:border-[#F26B1D] rounded-full px-5 py-3 transition shadow-sm">
            <input
              type="email"
              required
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent text-sm text-[#232323] placeholder-[#8C4A32]/40"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-3.5 px-6 rounded-full bg-[#F26B1D] hover:bg-[#DF5C12] text-white font-semibold text-sm shadow-btn transition-all active:scale-[0.98] cursor-pointer"
        >
          Enviar enlace
        </button>

        <p className="text-xs text-[#232323] font-medium text-center">
          Te enviaremos instrucciones
        </p>
      </form>

      <div className="text-center pt-8">
        <button
          onClick={() => navigateTo('login')}
          className="text-xs font-semibold text-[#F26B1D] hover:underline"
        >
          Volver a iniciar sesión
        </button>
      </div>
    </MobileLayout>
  );
};
