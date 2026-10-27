import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { StatusBar } from '../common/FigmaIcons';
import { Eye, EyeOff, GraduationCap } from 'lucide-react';

export const LoginScreen = () => {
  const { navigateTo, setShowGoogleModal, currentUser } = useApp();
  const [email, setEmail] = useState(currentUser?.email || '');
  const [password, setPassword] = useState('••••••••');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigateTo('home', 'home');
  };

  return (
    <div className="min-h-screen bg-[#FDF7F2] flex flex-col justify-between pb-8">
      {/* Top Brown Header matching Page 30 */}
      <div className="bg-[#8C4A32] text-white pt-2 pb-8 px-6 rounded-b-[32px] shadow-md relative">
        <StatusBar dark={true} />
        <div className="mt-4 flex flex-col items-start space-y-2">
          <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-xl font-bold font-heading tracking-wide">
            Instituto Educativo
          </h1>
          <p className="text-xs text-orange-100/90 font-light max-w-xs">
            Tu ciclo académico organizado en un solo lugar.
          </p>
        </div>
      </div>

      {/* Main Login Form */}
      <div className="flex-1 px-6 pt-6 max-w-sm mx-auto w-full">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email input */}
          <div className="text-left">
            <label className="block text-xs font-semibold text-[#8C4A32] mb-1.5 ml-1">
              Correo
            </label>
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

          {/* Password input */}
          <div className="text-left">
            <label className="block text-xs font-semibold text-[#8C4A32] mb-1.5 ml-1">
              Contraseña
            </label>
            <div className="bg-[#FEF0E6] border border-[#FED4B9] focus-within:border-[#F26B1D] rounded-full px-5 py-3 flex items-center justify-between transition shadow-sm">
              <input
                type={showPassword ? 'text' : 'password'}
                required
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent text-sm text-[#232323] placeholder-[#8C4A32]/40"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-[#8C4A32]/60 hover:text-[#8C4A32] ml-2 focus:outline-none"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Remember me & Forgot Password */}
          <div className="flex items-center justify-between text-xs pt-1 px-1">
            <label className="flex items-center space-x-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 accent-[#F26B1D] rounded cursor-pointer"
              />
              <span className="text-[#8C4A32] font-medium">Recordarme</span>
            </label>

            <button
              type="button"
              onClick={() => navigateTo('forgot-password')}
              className="text-[#F26B1D] hover:underline font-semibold"
            >
              ¿Olvidaste tu contraseña?
            </button>
          </div>

          {/* Iniciar Sesión Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-full bg-[#F26B1D] hover:bg-[#DF5C12] text-white font-semibold text-base shadow-btn transition-all active:scale-[0.98] cursor-pointer"
            >
              Iniciar Sesión
            </button>
          </div>
        </form>

        {/* Divider */}
        <div className="flex items-center my-5">
          <div className="flex-1 border-t border-[#FED4B9]" />
          <span className="px-3 text-xs text-[#8C4A32]/70 font-semibold lowercase">o</span>
          <div className="flex-1 border-t border-[#FED4B9]" />
        </div>

        {/* Social Logins */}
        <div className="space-y-3">
          <p className="text-xs font-semibold text-[#232323] text-left ml-1">
            También acceda con :
          </p>

          {/* Google Button */}
          <button
            type="button"
            onClick={() => setShowGoogleModal(true)}
            className="w-full py-2.5 px-4 rounded-full bg-[#B36B4D] hover:bg-[#8C4A32] text-white font-medium text-xs flex items-center justify-center space-x-3 shadow-sm transition active:scale-[0.98]"
          >
            <span className="font-bold text-sm bg-white/20 px-2 py-0.5 rounded-full">G+</span>
            <span>Ingresar con Google</span>
          </button>

          {/* Facebook Button */}
          <button
            type="button"
            onClick={() => navigateTo('home', 'home')}
            className="w-full py-2.5 px-4 rounded-full bg-[#B36B4D] hover:bg-[#8C4A32] text-white font-medium text-xs flex items-center justify-center space-x-3 shadow-sm transition active:scale-[0.98]"
          >
            <span className="font-bold text-sm bg-white/20 px-2.5 py-0.5 rounded-full">f</span>
            <span>Ingresar con Facebook</span>
          </button>
        </div>

        {/* Link to Register */}
        <div className="mt-6 text-center text-xs text-[#8C4A32]">
          ¿Aún no tienes cuenta?{' '}
          <button
            onClick={() => navigateTo('register')}
            className="text-[#F26B1D] font-bold hover:underline"
          >
            Regístrate aquí
          </button>
        </div>
      </div>
    </div>
  );
};
