import React, { useState, useRef } from 'react';
import { useApp } from '../../context/AppContext';
import { StatusBar } from '../common/FigmaIcons';
import { ArrowLeft } from 'lucide-react';

export const OtpScreen = () => {
  const { navigateTo } = useApp();
  const [digits, setDigits] = useState(['', '', '', '']);
  const inputsRef = useRef([]);

  const handleChange = (index, value) => {
    if (!/^\d*$/.test(value)) return;
    const newDigits = [...digits];
    newDigits[index] = value.slice(-1);
    setDigits(newDigits);

    // Auto advance
    if (value && index < 3) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !digits[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigateTo('new-password');
  };

  return (
    <div className="h-full w-full bg-[#FDF7F2] flex flex-col justify-between px-6 pb-8 pt-2 overflow-hidden text-center">
      <div className="flex-shrink-0">
        <StatusBar dark={false} />

        <div className="flex items-center space-x-2 mt-2">
          <button
            onClick={() => navigateTo('forgot-password')}
            className="p-1 rounded-full text-[#8C4A32] hover:bg-[#FEF0E6]"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
        </div>
      </div>

      <main className="flex-1 overflow-y-auto min-h-0 flex flex-col items-center justify-center max-w-sm mx-auto w-full">
        <h1 className="text-xl font-bold text-[#666666] font-heading mb-10 tracking-tight">
          Codigo de recuperacion
        </h1>

        {/* 4 OTP Digit Boxes matching Figma Page 8 & Page 31 */}
        <form onSubmit={handleSubmit} className="w-full flex flex-col items-center">
          <div className="flex items-center justify-center space-x-4 mb-10">
            {digits.map((digit, i) => (
              <input
                key={i}
                ref={(el) => (inputsRef.current[i] = el)}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                placeholder="0"
                onChange={(e) => handleChange(i, e.target.value)}
                onKeyDown={(e) => handleKeyDown(i, e)}
                className={`w-14 h-14 rounded-2xl text-center text-xl font-semibold bg-[#FEF0E6] text-[#F26B1D] placeholder-[#F26B1D]/40 border-2 transition-all shadow-sm ${
                  digit ? 'border-[#F26B1D] bg-white' : 'border-transparent focus:border-[#F26B1D]'
                }`}
              />
            ))}
          </div>

          <button
            type="submit"
            className="w-full py-3.5 px-6 rounded-full bg-[#F26B1D] hover:bg-[#DF5C12] text-white font-semibold text-sm shadow-btn transition-all active:scale-[0.98] cursor-pointer"
          >
            Verificar Código
          </button>
        </form>

        <p className="mt-6 text-xs text-[#8C4A32]/70">
          ¿No recibiste el código?{' '}
          <button
            type="button"
            onClick={() => setDigits(['', '', '', ''])}
            className="text-[#F26B1D] font-bold hover:underline"
          >
            Reenviar
          </button>
        </p>
      </main>
    </div>
  );
};
