import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { HeaderBar } from '../common/HeaderBar';
import { BottomNavBar } from '../common/BottomNavBar';
import { Plus } from 'lucide-react';

export const FastCaptureScreen = () => {
  const { addTask, navigateTo } = useApp();
  const [taskText, setTaskText] = useState('');

  const handleFastSave = (e) => {
    e.preventDefault();
    if (!taskText.trim()) return;

    addTask({
      name: taskText,
      course: 'General',
      dueDate: 'Hoy',
      fullDueDate: 'Captura rápida',
      priority: 'Bajo',
      reminder: true
    });

    setTaskText('');
    navigateTo('tasks', 'tasks');
  };

  return (
    <div className="min-h-screen bg-[#FDF7F2] pb-28 text-left">
      <HeaderBar type="sub" title="Captura rápida" />

      <div className="px-6 pt-6 max-w-sm mx-auto w-full space-y-6">
        <h2 className="text-base font-bold text-[#232323] font-heading uppercase tracking-wide">
          INICIO
        </h2>

        {/* Fast capture card matching Figma Page 18 */}
        <div className="bg-white rounded-3xl p-5 border border-[#FED4B9] shadow-card space-y-4">
          <div className="flex items-center space-x-2 text-sm font-semibold text-[#232323]">
            <Plus className="w-4 h-4 text-[#F26B1D]" />
            <span>Nueva tarea</span>
          </div>

          <div className="bg-[#F7EFE9] border border-[#FED4B9] rounded-2xl p-3 focus-within:border-[#F26B1D] transition">
            <textarea
              rows={3}
              placeholder="Escribe lo que necesitas hacer de forma instantánea..."
              value={taskText}
              onChange={(e) => setTaskText(e.target.value)}
              className="w-full bg-transparent text-xs text-[#232323] placeholder-[#8C4A32]/40 resize-none"
            />
          </div>
        </div>

        {/* Guardar rápido button */}
        <button
          onClick={handleFastSave}
          className="w-full py-3.5 px-6 rounded-full border border-[#D5CEC7] bg-white hover:bg-[#FEF0E6] text-[#232323] font-semibold text-sm shadow-sm transition active:scale-[0.98] cursor-pointer"
        >
          Guardar rápido
        </button>
      </div>

      <BottomNavBar />
    </div>
  );
};
