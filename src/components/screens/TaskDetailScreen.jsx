import React from 'react';
import { useApp } from '../../context/AppContext';
import { HeaderBar } from '../common/HeaderBar';
import { MobileLayout } from '../common/MobileLayout';
import { Check, CheckCircle2, BookOpen, Calendar, AlertTriangle, AlignLeft, Bell, ListChecks, Target } from 'lucide-react';

export const TaskDetailScreen = () => {
  const { selectedTask, updateTask, navigateTo, toggleTaskCompletion } = useApp();

  if (!selectedTask) {
    return (
      <MobileLayout header={<HeaderBar type="sub" title="Detalle de la actividad" />} contentClassName="p-8 text-center flex flex-col items-center justify-center">
        <p className="text-gray-600">No hay tarea seleccionada.</p>
        <button onClick={() => navigateTo('tasks')} className="mt-4 text-[#F26B1D] font-bold">
          Volver a Tareas
        </button>
      </MobileLayout>
    );
  }

  const handleReminderToggle = (value) => {
    updateTask(selectedTask.id, { reminder: value });
  };

  return (
    <MobileLayout header={<HeaderBar type="sub" title="Detalle de la actividad" />} contentClassName="px-5 pt-4 space-y-4 pb-6">
        {/* Title and Subject Pill */}
        <div className="space-y-2">
          <h2 className="text-xl font-bold text-[#232323] font-heading">
            {selectedTask.name}
          </h2>
          <div>
            <span className="inline-block px-3.5 py-1 bg-[#8C4A32] text-white text-xs font-semibold rounded-lg shadow-sm">
              {selectedTask.course}
            </span>
          </div>
        </div>

        {/* Card: TEMA */}
        <div className="bg-white rounded-2xl p-4 border border-[#FED4B9] shadow-card flex items-start space-x-3.5">
          <div className="w-8 h-8 rounded-lg bg-[#FEF0E6] flex items-center justify-center text-[#F26B1D] shrink-0 mt-0.5">
            <BookOpen className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#F26B1D]">
              TEMA
            </span>
            <p className="text-sm font-semibold text-[#232323] mt-0.5">
              {selectedTask.topic || 'Sin tema especificado'}
            </p>
          </div>
        </div>

        {/* Card: FECHA DE ENTREGA */}
        <div className="bg-white rounded-2xl p-4 border border-[#FED4B9] shadow-card flex items-start space-x-3.5">
          <div className="w-8 h-8 rounded-lg bg-[#FEF0E6] flex items-center justify-center text-[#F26B1D] shrink-0 mt-0.5">
            <Calendar className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#F26B1D]">
              FECHA DE ENTREGA
            </span>
            <p className="text-sm font-semibold text-[#232323] mt-0.5">
              {selectedTask.fullDueDate || selectedTask.dueDate}
            </p>
          </div>
        </div>

        {/* Card: PRIORIDAD (matching Figma Page 2 badges) */}
        <div className="bg-white rounded-2xl p-4 border border-[#FED4B9] shadow-card flex items-center justify-between">
          <div className="flex items-center space-x-3.5">
            <div className="w-8 h-8 rounded-lg bg-[#FEF0E6] flex items-center justify-center text-[#F26B1D] shrink-0">
              <AlertTriangle className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#8C4A32]">
                Prioridad
              </span>
            </div>
          </div>
          <span
            className={`px-4 py-1 rounded-full text-xs font-bold ${
              selectedTask.priority === 'Alto'
                ? 'bg-[#FED4B9] text-[#B83E00]'
                : selectedTask.priority === 'Medio'
                ? 'bg-[#FFF2B2] text-[#8C6D00]'
                : 'bg-[#D2EBD9] text-[#1D773E]'
            }`}
          >
            {selectedTask.priority}
          </span>
        </div>

        {/* Card: DESCRIPCIÓN */}
        <div className="bg-white rounded-2xl p-4 border border-[#FED4B9] shadow-card flex items-start space-x-3.5">
          <div className="w-8 h-8 rounded-lg bg-[#FEF0E6] flex items-center justify-center text-[#F26B1D] shrink-0 mt-0.5">
            <AlignLeft className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#F26B1D]">
              DESCRIPCIÓN
            </span>
            <p className="text-sm font-medium text-[#232323] mt-0.5 leading-relaxed">
              {selectedTask.description || 'Sin descripción.'}
            </p>
          </div>
        </div>

        {/* Card: RECORDATORIO Toggle pills (matching Figma Page 6 & Page 40) */}
        <div className="bg-white rounded-2xl p-4 border border-[#FED4B9] shadow-card space-y-2">
          <div className="flex items-center space-x-2">
            <Bell className="w-4 h-4 text-[#F26B1D]" />
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#F26B1D]">
              RECORDATORIO
            </span>
          </div>

          <div className="bg-[#FEF0E6] p-1 rounded-full flex items-center border border-[#FED4B9]">
            <button
              onClick={() => handleReminderToggle(true)}
              className={`flex-1 py-2 text-xs font-semibold rounded-full transition-all ${
                selectedTask.reminder
                  ? 'bg-[#F26B1D] text-white shadow-sm'
                  : 'text-[#8C4A32] hover:text-[#232323]'
              }`}
            >
              Activado
            </button>
            <button
              onClick={() => handleReminderToggle(false)}
              className={`flex-1 py-2 text-xs font-semibold rounded-full transition-all ${
                !selectedTask.reminder
                  ? 'bg-[#F26B1D] text-white shadow-sm'
                  : 'text-[#8C4A32] hover:text-[#232323]'
              }`}
            >
              Desactivado
            </button>
          </div>
        </div>

        {/* Subtask & Impact quick jump chips */}
        <div className="grid grid-cols-2 gap-3 pt-1">
          <button
            onClick={() => navigateTo('subtasks')}
            className="flex items-center justify-center space-x-2 p-3 bg-[#FEF0E6] hover:bg-[#FED4B9] border border-[#FED4B9] rounded-2xl text-xs font-bold text-[#8C4A32] transition"
          >
            <ListChecks className="w-4 h-4 text-[#F26B1D]" />
            <span>Subtareas (2/5)</span>
          </button>

          <button
            onClick={() => navigateTo('grade-impact')}
            className="flex items-center justify-center space-x-2 p-3 bg-[#FEF0E6] hover:bg-[#FED4B9] border border-[#FED4B9] rounded-2xl text-xs font-bold text-[#8C4A32] transition"
          >
            <Target className="w-4 h-4 text-[#F26B1D]" />
            <span>Impacto en Nota</span>
          </button>
        </div>

        {/* Action Button: Marcar como completada (matching Figma Page 5) */}
        <div className="pt-2">
          <button
            onClick={() => toggleTaskCompletion(selectedTask.id)}
            className={`w-full py-3.5 px-6 rounded-full border-2 font-semibold text-sm transition-all flex items-center justify-center space-x-2 ${
              selectedTask.completed
                ? 'bg-[#F26B1D] text-white border-[#F26B1D] shadow-btn'
                : 'bg-transparent text-[#F26B1D] border-[#FED4B9] hover:bg-[#FEF0E6]'
            }`}
          >
            <Check className="w-4 h-4 stroke-[3]" />
            <span>{selectedTask.completed ? 'Completo' : 'Marcar como completada'}</span>
          </button>
        </div>

        {/* Primary Button: Editar Tarea */}
        <div>
          <button
            onClick={() => navigateTo('edit-task')}
            className="w-full py-3.5 px-6 rounded-full bg-[#F26B1D] hover:bg-[#DF5C12] text-white font-semibold text-sm shadow-btn transition-all active:scale-[0.98] cursor-pointer"
          >
            Editar Tarea
          </button>
        </div>
    </MobileLayout>
  );
};
