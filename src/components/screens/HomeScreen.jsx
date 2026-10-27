import React from 'react';
import { useApp } from '../../context/AppContext';
import { HeaderBar } from '../common/HeaderBar';
import { BottomNavBar } from '../common/BottomNavBar';
import { ChevronRight, FileText, Calendar, GraduationCap, X } from 'lucide-react';

export const HomeScreen = () => {
  const {
    courses,
    tasks,
    navigateTo,
    setSelectedTask,
    showNotification,
    setShowNotification
  } = useApp();

  const activeCoursesCount = courses.length;
  const pendingTasksCount = tasks.filter(t => !t.completed).length;

  const handleTaskClick = (task) => {
    setSelectedTask(task);
    navigateTo('task-detail');
  };

  return (
    <div className="min-h-screen bg-[#FDF7F2] pb-24 text-left">
      {/* Top Header */}
      <HeaderBar type="home" />

      {/* In-app Push Notification Toast Banner (matching Figma Page 35) */}
      {showNotification && (
        <div className="mx-4 -mt-3 mb-4 p-4 bg-white/95 backdrop-blur-md rounded-2xl shadow-modal border border-orange-200 relative animate-in slide-in-from-top-4 duration-300 z-20">
          <button
            onClick={() => setShowNotification(false)}
            className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
          >
            <X className="w-4 h-4" />
          </button>
          <div className="flex items-start space-x-3 pr-4">
            <span className="text-xl">👋</span>
            <div className="text-xs">
              <p className="font-bold text-[#8C4A32] uppercase tracking-wider text-[10px]">
                Tarea pendientes:
              </p>
              <p className="text-gray-800 font-medium mt-0.5">
                ¡Hola! Tienes un trabajo pendiente en <strong>Diseño 3D</strong>.
              </p>
              <p className="text-gray-500 mt-1 flex items-center space-x-1">
                <span>📅</span>
                <span>Recuerda revisar la fecha de entrega.</span>
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="px-5 pt-4 space-y-6">
        {/* Stat Summary Cards matching Figma Page 37 */}
        <div className="grid grid-cols-3 gap-2.5">
          {/* Cursos activos */}
          <div
            onClick={() => navigateTo('courses', 'courses')}
            className="bg-white rounded-2xl p-3 border border-[#F0EAE1] shadow-card hover:border-[#FED4B9] transition cursor-pointer flex flex-col justify-between"
          >
            <span className="text-xl font-bold font-heading text-[#232323]">
              {activeCoursesCount}
            </span>
            <span className="text-[11px] text-[#8C4A32] font-medium leading-tight mt-1">
              Cursos activos
            </span>
          </div>

          {/* Tareas Pendientes */}
          <div
            onClick={() => navigateTo('tasks', 'tasks')}
            className="bg-white rounded-2xl p-3 border border-[#F0EAE1] shadow-card hover:border-[#FED4B9] transition cursor-pointer flex flex-col justify-between"
          >
            <span className="text-xl font-bold font-heading text-[#232323]">
              {pendingTasksCount}
            </span>
            <span className="text-[11px] text-[#8C4A32] font-medium leading-tight mt-1">
              Tareas Pendientes
            </span>
          </div>

          {/* Avance ciclo */}
          <div className="bg-white rounded-2xl p-3 border border-[#F0EAE1] shadow-card flex flex-col justify-between">
            <span className="text-xl font-bold font-heading text-[#232323]">
              67%
            </span>
            <span className="text-[11px] text-[#8C4A32] font-medium leading-tight mt-1">
              Avance ciclo
            </span>
          </div>
        </div>

        {/* Accesos rápidos matching Figma Page 37 */}
        <div>
          <h2 className="text-base font-bold text-[#232323] font-heading mb-3">
            Accesos rápidos
          </h2>
          <div className="grid grid-cols-3 gap-2.5">
            {/* Cursos */}
            <button
              onClick={() => navigateTo('courses', 'courses')}
              className="bg-[#F26B1D] hover:bg-[#DF5C12] text-white rounded-2xl py-3 px-2 flex flex-col items-center justify-center shadow-btn transition active:scale-95 cursor-pointer"
            >
              <GraduationCap className="w-5 h-5 mb-1.5" />
              <span className="text-xs font-semibold">Cursos</span>
            </button>

            {/* Tareas */}
            <button
              onClick={() => navigateTo('tasks', 'tasks')}
              className="bg-[#F26B1D] hover:bg-[#DF5C12] text-white rounded-2xl py-3 px-2 flex flex-col items-center justify-center shadow-btn transition active:scale-95 cursor-pointer"
            >
              <FileText className="w-5 h-5 mb-1.5" />
              <span className="text-xs font-semibold">Tareas</span>
            </button>

            {/* Exámenes */}
            <button
              onClick={() => navigateTo('calendar', 'calendar')}
              className="bg-[#F26B1D] hover:bg-[#DF5C12] text-white rounded-2xl py-3 px-2 flex flex-col items-center justify-center shadow-btn transition active:scale-95 cursor-pointer"
            >
              <Calendar className="w-5 h-5 mb-1.5" />
              <span className="text-xs font-semibold">Exámenes</span>
            </button>
          </div>
        </div>

        {/* Próximas entregas matching Figma Page 37 & Page 13 */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-base font-bold text-[#232323] font-heading">
              Próximas entregas
            </h2>
            <button
              onClick={() => navigateTo('tasks', 'tasks')}
              className="text-xs text-[#F26B1D] font-semibold hover:underline"
            >
              Ver todas
            </button>
          </div>

          <div className="space-y-3">
            {tasks.slice(0, 3).map((task) => (
              <div
                key={task.id}
                onClick={() => handleTaskClick(task)}
                className="bg-white rounded-2xl p-4 border border-[#FED4B9] hover:border-[#F26B1D] transition shadow-card flex items-center justify-between cursor-pointer group active:scale-[0.99]"
              >
                <div className="flex items-center space-x-3.5">
                  {/* Task Icon pill */}
                  <div className="w-9 h-9 rounded-xl bg-[#FEF0E6] flex items-center justify-center text-[#F26B1D] group-hover:scale-105 transition-transform">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#F26B1D] font-heading leading-snug">
                      {task.name}
                    </h3>
                    <p className="text-xs text-[#8C4A32] font-medium mt-0.5">
                      {task.course}
                    </p>
                    <p className="text-[11px] text-[#232323] font-medium mt-0.5">
                      {task.dueDate}
                    </p>
                  </div>
                </div>

                <div className="text-[#F26B1D] group-hover:translate-x-1 transition-transform">
                  <ChevronRight className="w-5 h-5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <BottomNavBar />
    </div>
  );
};
