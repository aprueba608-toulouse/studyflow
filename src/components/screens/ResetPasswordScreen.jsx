import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { StatusBar } from '../common/FigmaIcons';
import { ArrowLeft } from 'lucide-react';

export const ResetPasswordScreen = () => {
  const { navigateTo } = useApp();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    navigateTo('password-success');
  };

  return (
    <div className="h-full w-full bg-[#FDF7F2] flex flex-col justify-between px-6 pb-8 pt-2 overflow-hidden text-left">
      <div className="flex-shrink-0">
        <StatusBar dark={false} />

        <div className="flex items-center space-x-2 mt-2">
          <button
            onClick={() => navigateTo('login')}
            className="p-1 rounded-full text-[#8C4A32] hover:bg-[#FEF0E6]"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
        </div>
      </div>

      <main className="flex-1 overflow-y-auto min-h-0 flex flex-col justify-center max-w-sm mx-auto w-full">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="text-left space-y-1.5">
            <label className="block text-sm font-bold text-[#232323] font-heading ml-1">
              Nueva contraseña
            </label>
            <div className="bg-[#FEF0E6] border border-[#FED4B9] focus-within:border-[#F26B1D] rounded-full px-5 py-3 transition shadow-sm">
              <input
                type="password"
                required
                placeholder="*************"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent text-sm text-[#232323] placeholder-[#8C4A32]/40"
              />
            </div>
          </div>

          <div className="text-left space-y-1.5">
            <label className="block text-sm font-bold text-[#232323] font-heading ml-1">
              Confirmar contraseña
            </label>
            <div className="bg-[#FEF0E6] border border-[#FED4B9] focus-within:border-[#F26B1D] rounded-full px-5 py-3 transition shadow-sm">
              <input
                type="password"
                required
                placeholder="*************"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full bg-transparent text-sm text-[#232323] placeholder-[#8C4A32]/40"
              />
            </div>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-full bg-[#F26B1D] hover:bg-[#DF5C12] text-white font-semibold text-sm shadow-btn transition-all active:scale-[0.98] cursor-pointer"
            >
              Cambiar contraseña
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};
