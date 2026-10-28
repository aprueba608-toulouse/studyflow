import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { HeaderBar } from '../common/HeaderBar';
import { MobileLayout } from '../common/MobileLayout';
import { ChevronRight, Plus, Eye, CheckCircle2, FileText } from 'lucide-react';

export const TasksScreen = () => {
  const { tasks, setSelectedTask, navigateTo, toggleTaskCompletion } = useApp();
  const [search, setSearch] = useState('');

  const filteredTasks = tasks.filter(t =>
    t.name.toLowerCase().includes(search.toLowerCase()) ||
    t.course.toLowerCase().includes(search.toLowerCase())
  );

  // Group by Course
  const groupedTasks = filteredTasks.reduce((acc, task) => {
    if (!acc[task.course]) acc[task.course] = [];
    acc[task.course].push(task);
    return acc;
  }, {});

  const handleTaskClick = (task) => {
    setSelectedTask(task);
    navigateTo('task-detail');
  };

  return (
    <MobileLayout
      header={
        <HeaderBar
          type="tab"
          title="Tareas"
          searchPlaceholder="Buscar"
          searchValue={search}
          onSearchChange={(e) => setSearch(e.target.value)}
        />
      }
      floatingAction={
        <button
          onClick={() => navigateTo('quick-task')}
          className="w-13 h-13 rounded-full bg-[#F26B1D] hover:bg-[#DF5C12] text-white flex items-center justify-center shadow-btn transition active:scale-90"
          title="Crear nueva tarea"
        >
          <Plus className="w-7 h-7 stroke-[2.5]" />
        </button>
      }
      contentClassName="px-5 pt-4 space-y-6 pb-20"
    >
      {Object.entries(groupedTasks).map(([courseName, courseTasks]) => (
          <div key={courseName} className="space-y-3">
            <h2 className="text-base font-bold text-[#232323] font-heading ml-1">
              {courseName}
            </h2>

            <div className="space-y-2.5">
              {courseTasks.map((task) => (
                <div
                  key={task.id}
                  className={`bg-white rounded-2xl p-4 border transition shadow-card flex items-center justify-between group cursor-pointer ${
                    task.completed
                      ? 'border-gray-200 opacity-60 bg-gray-50/50'
                      : 'border-[#FED4B9] hover:border-[#F26B1D]'
                  }`}
                >
                  {/* Left task info */}
                  <div
                    onClick={() => handleTaskClick(task)}
                    className="flex items-center space-x-3.5 flex-1"
                  >
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                        task.completed ? 'bg-green-100 text-green-600' : 'bg-[#FEF0E6] text-[#F26B1D]'
                      }`}
                    >
                      <FileText className="w-5 h-5" />
                    </div>

                    <div className="min-w-0">
                      <h3
                        className={`text-sm font-bold font-heading truncate ${
                          task.completed ? 'text-gray-500 line-through' : 'text-[#F26B1D]'
                        }`}
                      >
                        {task.name}
                      </h3>
                      <p className="text-xs text-[#8C4A32] font-medium truncate mt-0.5">
                        {task.tool || task.course}
                      </p>
                      <p className="text-[11px] text-[#232323] font-medium mt-0.5">
                        {task.dueDate}
                      </p>
                    </div>
                  </div>

                  {/* Right actions matching Figma Page 41 & Page 14 */}
                  <div className="flex items-center space-x-2 pl-2">
                    {/* Toggle eye / completion icon */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleTaskCompletion(task.id);
                      }}
                      className={`w-8 h-8 rounded-full border flex items-center justify-center transition ${
                        task.completed
                          ? 'border-green-500 text-green-600 bg-green-50'
                          : 'border-[#F26B1D] text-[#F26B1D] hover:bg-[#FEF0E6]'
                      }`}
                      title={task.completed ? 'Completada' : 'Marcar como completada'}
                    >
                      {task.completed ? (
                        <CheckCircle2 className="w-4 h-4" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                    </button>

                    <button
                      onClick={() => handleTaskClick(task)}
                      className="text-[#F26B1D] p-1 group-hover:translate-x-0.5 transition-transform"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {Object.keys(groupedTasks).length === 0 && (
          <div className="text-center py-12 text-gray-500 text-sm">
            No se encontraron tareas con ese criterio.
          </div>
        )}
    </MobileLayout>
  );
};
