import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { HeaderBar } from '../common/HeaderBar';
import { MobileLayout } from '../common/MobileLayout';
import { Check, Plus } from 'lucide-react';

export const SubtasksScreen = () => {
  const { navigateTo } = useApp();
  const [subtasks, setSubtasks] = useState([
    { id: 1, title: 'Elegir Tema', done: true },
    { id: 2, title: 'Enfocarse en la tarea', done: true },
    { id: 3, title: 'Hacer esquema', done: false },
    { id: 4, title: 'Redactar', done: false },
    { id: 5, title: 'Revisar', done: false },
  ]);
  const [newTitle, setNewTitle] = useState('');
  const [isAdding, setIsAdding] = useState(false);

  const completedCount = subtasks.filter(s => s.done).length;

  const toggleSubtask = (id) => {
    setSubtasks(prev => prev.map(s => s.id === id ? { ...s, done: !s.done } : s));
  };

  const handleAdd = () => {
    if (!newTitle.trim()) return;
    setSubtasks(prev => [...prev, { id: Date.now(), title: newTitle.trim(), done: false }]);
    setNewTitle('');
    setIsAdding(false);
  };

  return (
    <MobileLayout header={<HeaderBar type="sub" title="Subtareas" onBack={() => navigateTo('task-detail')} />} contentClassName="px-6 pt-5 pb-6 max-w-sm mx-auto w-full">
        {/* Title & Progress Header matching Figma Page 43 */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-[#232323] font-heading">
            Trabajo final
          </h2>
          <p className="text-sm font-semibold text-[#666666] mt-0.5">
            Progreso {completedCount}/{subtasks.length}
          </p>
        </div>

        {/* Timeline / Stepper Checklist */}
        <div className="relative pl-3 space-y-6">
          {/* Vertical continuous timeline bar */}
          <div className="absolute left-[26px] top-4 bottom-8 w-[2px] bg-[#FED4B9]" />

          {subtasks.map((task) => (
            <div
              key={task.id}
              onClick={() => toggleSubtask(task.id)}
              className="flex items-center space-x-5 relative z-10 cursor-pointer group select-none"
            >
              {/* Checkbox Box matching Figma Page 19 / Page 43 */}
              <div
                className={`w-7 h-7 rounded-xl flex items-center justify-center transition-all ${
                  task.done
                    ? 'bg-[#F26B1D] text-white shadow-sm'
                    : 'bg-[#FEF0E6] border border-[#FED4B9] group-hover:border-[#F26B1D]'
                }`}
              >
                {task.done && <Check className="w-4 h-4 stroke-[3]" />}
              </div>

              {/* Task Title */}
              <span
                className={`text-sm font-medium transition-colors ${
                  task.done ? 'text-[#8C4A32] line-through font-normal' : 'text-[#232323]'
                }`}
              >
                {task.title}
              </span>
            </div>
          ))}

          {/* Add Subtask entry */}
          <div className="relative z-10 pt-1">
            {isAdding ? (
              <div className="flex items-center space-x-3 bg-white p-2 rounded-2xl border border-[#FED4B9]">
                <input
                  type="text"
                  autoFocus
                  placeholder="Nueva subtarea..."
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
                  className="flex-1 bg-transparent text-xs text-[#232323] px-2 py-1"
                />
                <button
                  onClick={handleAdd}
                  className="px-3 py-1 bg-[#F26B1D] text-white text-xs font-bold rounded-lg shadow-sm"
                >
                  Agregar
                </button>
              </div>
            ) : (
              <button
                onClick={() => setIsAdding(true)}
                className="flex items-center space-x-5 text-sm font-semibold text-[#8C4A32] hover:text-[#F26B1D] transition"
              >
                <div className="w-7 h-7 rounded-xl bg-[#FEF0E6] border border-dashed border-[#FED4B9] flex items-center justify-center text-[#F26B1D]">
                  <Plus className="w-4 h-4" />
                </div>
                <span>+ Añadir Subtarea</span>
              </button>
            )}
          </div>
        </div>

        {/* Guardar Button matching Figma Page 43 */}
        <div className="pt-10">
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
