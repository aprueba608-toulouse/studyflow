import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { HeaderBar } from '../common/HeaderBar';
import { MobileLayout } from '../common/MobileLayout';

export const QuickTaskScreen = () => {
  const { addTask, navigateTo, courses } = useApp();
  const [name, setName] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [course, setCourse] = useState(courses[0]?.name || '');

  const handleSave = (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    addTask({
      name,
      course,
      dueDate: dueDate || 'Hoy 11:59pm',
      fullDueDate: dueDate || 'Por definir',
      priority: 'Medio',
      reminder: true
    });

    navigateTo('tasks', 'tasks');
  };

  return (
    <MobileLayout header={<HeaderBar type="sub" title="Tarea" />} contentClassName="px-6 pt-4 pb-6 max-w-sm mx-auto w-full">
        <h2 className="text-base font-bold text-[#232323] font-heading mb-4 ml-1">
          Nueva tarea
        </h2>

        <form onSubmit={handleSave} className="space-y-4">
          {/* Nombre */}
          <div>
            <label className="block text-xs font-semibold text-[#232323] mb-1 ml-1">
              Nombre
            </label>
            <div className="bg-white border border-[#D5CEC7] focus-within:border-[#F26B1D] rounded-full px-5 py-2.5 transition shadow-sm">
              <input
                type="text"
                required
                placeholder="Nombre de la tarea"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-transparent text-xs text-[#232323] placeholder-gray-400"
              />
            </div>
          </div>

          {/* Fecha (opcional) */}
          <div>
            <label className="block text-xs font-semibold text-[#232323] mb-1 ml-1">
              Fecha (opcional)
            </label>
            <div className="bg-white border border-[#D5CEC7] focus-within:border-[#F26B1D] rounded-full px-5 py-2.5 transition shadow-sm">
              <input
                type="text"
                placeholder="Fecha de entrega"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="w-full bg-transparent text-xs text-[#232323] placeholder-gray-400"
              />
            </div>
          </div>

          {/* Curso (opcional) */}
          <div>
            <label className="block text-xs font-semibold text-[#232323] mb-1 ml-1">
              Curso (opcional)
            </label>
            <div className="bg-white border border-[#D5CEC7] focus-within:border-[#F26B1D] rounded-full px-5 py-2.5 transition shadow-sm">
              <select
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                className="w-full bg-transparent text-xs text-[#232323] cursor-pointer"
              >
                {courses.map((c) => (
                  <option key={c.id} value={c.name}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Más opciones link matching Figma Page 10 */}
          <div className="pt-2 text-left">
            <button
              type="button"
              onClick={() => navigateTo('new-task')}
              className="text-xs font-bold text-[#232323] hover:text-[#F26B1D] transition"
            >
              Más opciones
            </button>
          </div>

          {/* Guardar Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-full bg-[#F26B1D] hover:bg-[#DF5C12] text-white font-semibold text-sm shadow-btn transition-all active:scale-[0.98] cursor-pointer"
            >
              Guardar
            </button>
          </div>
        </form>
    </MobileLayout>
  );
};
