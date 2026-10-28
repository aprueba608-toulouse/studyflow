import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { HeaderBar } from '../common/HeaderBar';
import { MobileLayout } from '../common/MobileLayout';
import { Edit3, Upload } from 'lucide-react';

export const GradeImpactScreen = () => {
  const { navigateTo } = useApp();
  const [gradeImpact, setGradeImpact] = useState('Media'); // Baja, Media, Alta
  const [weight, setWeight] = useState(30);
  const [suggestedPriority, setSuggestedPriority] = useState('Media');

  return (
    <MobileLayout header={<HeaderBar type="sub" title="Impacto en Nota" onBack={() => navigateTo('task-detail')} />} contentClassName="px-6 pt-5 pb-6 max-w-sm mx-auto w-full space-y-5">
        <h2 className="text-xl font-bold text-[#232323] font-heading ml-1">
          Priorización
        </h2>

        {/* Action pills matching Figma Page 44 */}
        <div className="space-y-3">
          <button
            onClick={() => navigateTo('edit-task')}
            className="w-full flex items-center space-x-3 px-5 py-3 rounded-full border border-gray-400 bg-white hover:bg-orange-50 text-xs font-semibold text-[#232323] shadow-sm transition"
          >
            <Edit3 className="w-4 h-4 text-[#232323]" />
            <span>Editar Tarea</span>
          </button>

          <div className="w-full flex items-center space-x-3 px-5 py-3 rounded-full border border-gray-400 bg-white text-xs font-semibold text-[#232323] shadow-sm">
            <Upload className="w-4 h-4 text-[#232323]" />
            <span>Informe final</span>
          </div>
        </div>

        {/* Impacto en la nota */}
        <div className="space-y-2 text-center pt-2">
          <span className="text-sm font-semibold text-[#232323]">
            Impacto en la nota
          </span>

          <div className="flex items-center justify-center space-x-3">
            {['Baja', 'Media', 'Alta'].map((level) => {
              const isSelected = gradeImpact === level;
              return (
                <button
                  key={level}
                  onClick={() => {
                    setGradeImpact(level);
                    if (level === 'Baja') setWeight(15);
                    if (level === 'Media') setWeight(30);
                    if (level === 'Alta') setWeight(50);
                  }}
                  className={`px-5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    isSelected
                      ? 'bg-[#3D4043] text-white shadow-sm scale-105'
                      : 'bg-[#E5E5E5] text-[#232323] hover:bg-[#D5D5D5]'
                  }`}
                >
                  {level}
                </button>
              );
            })}
          </div>
        </div>

        {/* Circular Progress Ring matching Figma Page 44 */}
        <div className="flex flex-col items-center justify-center py-2">
          <div className="relative w-28 h-28 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              {/* Background circle track */}
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="#EAEAEA"
                strokeWidth="10"
                fill="none"
              />
              {/* Blue accent progress arc matching Figma Page 44 & Page 20 */}
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="#007AFF"
                strokeWidth="10"
                strokeDasharray="251.2"
                strokeDashoffset={251.2 - (251.2 * weight) / 100}
                strokeLinecap="round"
                fill="none"
                className="transition-all duration-500 ease-out"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="text-base font-bold font-heading text-[#232323]">{weight}%</span>
            </div>
          </div>
          <span className="text-xs font-medium text-gray-500 mt-1">Peso</span>
        </div>

        {/* Prioridad Sugerida */}
        <div className="space-y-2 text-center">
          <span className="text-sm font-semibold text-[#232323]">
            Prioridad Sugerida
          </span>

          <div className="flex items-center justify-center space-x-3">
            {['Baja', 'Media', 'Alta'].map((level) => {
              const isSelected = suggestedPriority === level;
              return (
                <button
                  key={level}
                  onClick={() => setSuggestedPriority(level)}
                  className={`px-5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    isSelected
                      ? 'bg-[#3D4043] text-white shadow-sm scale-105'
                      : 'bg-[#E5E5E5] text-[#232323] hover:bg-[#D5D5D5]'
                  }`}
                >
                  {level}
                </button>
              );
            })}
          </div>
        </div>

        {/* Guardar Button */}
        <div className="pt-4">
          <button
            onClick={() => navigateTo('task-detail')}
            className="w-full py-3.5 px-6 rounded-full bg-[#F26B1D] hover:bg-[#DF5C12] text-white font-semibold text-sm shadow-btn transition-all active:scale-[0.98] cursor-pointer"
          >
            Guardar
          </button>
        </div>
    </MobileLayout>
  );
};
