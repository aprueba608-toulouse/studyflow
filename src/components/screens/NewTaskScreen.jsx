import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { HeaderBar } from '../common/HeaderBar';
import { MobileLayout } from '../common/MobileLayout';
import { Upload, Plus, Trash2 } from 'lucide-react';

export const NewTaskScreen = () => {
  const { addTask, navigateTo, courses } = useApp();
  const [name, setName] = useState('');
  const [course, setCourse] = useState(courses[0]?.name || '');
  const [dueDate, setDueDate] = useState('');
  const [detail, setDetail] = useState('');
  const [subtasks, setSubtasks] = useState(['Tarea 1', 'Tarea 2', 'Tarea 3']);
  const [newSubtask, setNewSubtask] = useState('');

  const handleAddSubtask = () => {
    if (!newSubtask.trim()) return;
    setSubtasks([...subtasks, newSubtask.trim()]);
    setNewSubtask('');
  };

  const handleRemoveSubtask = (idx) => {
    setSubtasks(subtasks.filter((_, i) => i !== idx));
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    addTask({
      name,
      course,
      dueDate: dueDate || 'Próximamente',
      fullDueDate: dueDate || 'Fecha por definir',
      description: detail,
      subtasks: subtasks.map((st, i) => ({ id: `st-${Date.now()}-${i}`, title: st, done: false })),
      priority: 'Medio',
      reminder: true
    });

    navigateTo('tasks', 'tasks');
  };

  return (
    <MobileLayout header={<HeaderBar type="sub" title="Nueva Tarea" />} contentClassName="px-6 pt-4 pb-6 max-w-sm mx-auto w-full">
        <h2 className="text-base font-bold text-[#F26B1D] font-heading mb-4 ml-1">
          Nueva tarea
        </h2>

        <form onSubmit={handleSave} className="space-y-4">
          {/* Nombre */}
          <div>
            <label className="block text-xs font-semibold text-[#232323] mb-1 ml-1">
              Nombre
            </label>
            <div className="bg-[#FEF0E6] border border-[#FED4B9] focus-within:border-[#F26B1D] rounded-full px-5 py-2.5 transition shadow-sm">
              <input
                type="text"
                required
                placeholder="Nombre de la tarea"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-transparent text-xs text-[#232323] placeholder-[#8C4A32]/40"
              />
            </div>
          </div>

          {/* Curso (opcional) */}
          <div>
            <label className="block text-xs font-semibold text-[#232323] mb-1 ml-1">
              Curso (opcional)
            </label>
            <div className="bg-[#FEF0E6] border border-[#FED4B9] focus-within:border-[#F26B1D] rounded-full px-5 py-2.5 transition shadow-sm">
              <select
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                className="w-full bg-transparent text-xs text-[#232323] cursor-pointer"
              >
                {courses.map((c) => (
                  <option key={c.id} value={c.name} className="bg-white text-black">
                    {c.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Fecha (opcional) */}
          <div>
            <label className="block text-xs font-semibold text-[#232323] mb-1 ml-1">
              Fecha (opcional)
            </label>
            <div className="bg-[#FEF0E6] border border-[#FED4B9] focus-within:border-[#F26B1D] rounded-full px-5 py-2.5 transition shadow-sm">
              <input
                type="text"
                placeholder="Ej. Hoy 11:59pm o 28 de Octubre"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="w-full bg-transparent text-xs text-[#232323] placeholder-[#8C4A32]/40"
              />
            </div>
          </div>

          {/* Detalle */}
          <div>
            <label className="block text-xs font-semibold text-[#232323] mb-1 ml-1">
              Detalle
            </label>
            <div className="bg-[#FEF0E6] border border-[#FED4B9] focus-within:border-[#F26B1D] rounded-2xl px-5 py-3 transition shadow-sm">
              <textarea
                rows={3}
                placeholder="Detalle o descripción de la actividad..."
                value={detail}
                onChange={(e) => setDetail(e.target.value)}
                className="w-full bg-transparent text-xs text-[#232323] placeholder-[#8C4A32]/40 resize-none"
              />
            </div>
          </div>

          {/* Subtareas Section matching Figma Page 9 */}
          <div className="flex items-start justify-between pt-1">
            <div className="space-y-1.5 flex-1">
              <span className="text-xs font-bold text-[#232323] block">
                Subtareas:
              </span>
              <div className="space-y-1 pl-2">
                {subtasks.map((st, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-xs text-[#232323]">
                    <span className="text-base leading-none">•</span>
                    <span className="flex-1">{st}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveSubtask(idx)}
                      className="text-gray-400 hover:text-red-500"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>

              {/* Add subtask input */}
              <div className="flex items-center space-x-2 pt-2">
                <input
                  type="text"
                  placeholder="+ Nueva subtarea"
                  value={newSubtask}
                  onChange={(e) => setNewSubtask(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      handleAddSubtask();
                    }
                  }}
                  className="bg-transparent border-b border-[#FED4B9] text-xs px-1 py-0.5 w-36 text-[#232323] placeholder-gray-400 focus:border-[#F26B1D]"
                />
                <button
                  type="button"
                  onClick={handleAddSubtask}
                  className="p-1 rounded-full bg-[#FEF0E6] text-[#F26B1D] hover:bg-[#FED4B9]"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Share / Upload button matching Figma Page 9 */}
            <div className="w-12 h-12 rounded-2xl bg-[#FED4B9] flex items-center justify-center text-[#F26B1D] shadow-sm ml-3 shrink-0">
              <Upload className="w-6 h-6" />
            </div>
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
