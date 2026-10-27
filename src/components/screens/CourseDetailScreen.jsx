import React from 'react';
import { useApp } from '../../context/AppContext';
import { HeaderBar } from '../common/HeaderBar';
import { BottomNavBar } from '../common/BottomNavBar';
import { ChevronRight, Calendar, SlidersHorizontal, FileText, BookOpen, Users } from 'lucide-react';

export const CourseDetailScreen = () => {
  const { selectedCourse, navigateTo } = useApp();

  const course = selectedCourse || {
    id: 'uxui',
    name: 'UX/UI Design',
    professor: 'Prof. Pepe',
    period: '01/06/2026 al 30/11/2026',
    progress: 60,
    image: '/images/prof_pepe.jpg'
  };

  const sections = [
    {
      id: 'grades',
      title: 'Calificaciones',
      icon: <SlidersHorizontal className="w-5 h-5 text-[#F26B1D]" />,
      action: () => alert(`Calificaciones de ${course.name}: Promedio actual 17.5/20`)
    },
    {
      id: 'tasks',
      title: 'Tareas',
      icon: <FileText className="w-5 h-5 text-[#F26B1D]" />,
      action: () => navigateTo('tasks', 'tasks')
    },
    {
      id: 'materials',
      title: 'Material de Estudio',
      icon: <BookOpen className="w-5 h-5 text-[#F26B1D]" />,
      action: () => alert(`Materiales de ${course.name}: Guía 1, Diapositivas Figma, Wireframes Template`)
    },
    {
      id: 'community',
      title: 'Comunidad',
      icon: <Users className="w-5 h-5 text-[#F26B1D]" />,
      action: () => alert(`Comunidad de ${course.name}: Grupo de estudio y foro de debate activo con 32 alumnos`)
    }
  ];

  return (
    <div className="min-h-screen bg-[#FDF7F2] pb-28 text-left">
      <HeaderBar type="tab" title="Cursos" />

      <div className="px-5 pt-4 space-y-4">
        {/* Course Hero Banner matching Figma Page 39 */}
        <div className="flex items-center justify-between pt-1 pb-2">
          <div>
            <h2 className="text-xl font-bold text-[#8C4A32] font-heading leading-tight">
              {course.name}
            </h2>
            <p className="text-sm font-semibold text-gray-700 mt-1">
              {course.professor}
            </p>
          </div>

          <div className="w-16 h-18 rounded-2xl overflow-hidden bg-gray-100 border-2 border-orange-200 shadow-sm">
            <img
              src={course.image}
              alt={course.professor}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Card: Avance del Curso matching Figma Page 39 */}
        <div
          onClick={() => navigateTo('grade-impact')}
          className="bg-white rounded-3xl p-5 border border-[#FED4B9] shadow-card flex items-center justify-between cursor-pointer hover:border-[#F26B1D] transition"
        >
          <div>
            <h3 className="text-sm font-bold text-[#232323] font-heading">
              Avance del Curso
            </h3>
            <p className="text-xs text-gray-500 mt-1 flex items-center space-x-1.5">
              <Calendar className="w-3.5 h-3.5 text-gray-400" />
              <span>{course.period}</span>
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <div className="flex flex-col items-center">
              <div className="relative w-12 h-12 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 40 40">
                  <circle
                    cx="20"
                    cy="20"
                    r="16"
                    stroke="#EFEFEF"
                    strokeWidth="4"
                    fill="none"
                  />
                  <circle
                    cx="20"
                    cy="20"
                    r="16"
                    stroke="#007AFF"
                    strokeWidth="4"
                    strokeDasharray="100.5"
                    strokeDashoffset={100.5 - (100.5 * course.progress) / 100}
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
                <span className="absolute text-[10px] font-bold text-gray-800">
                  {course.progress}%
                </span>
              </div>
              <span className="text-[9px] text-gray-500 font-medium mt-0.5">
                Completado
              </span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
        </div>

        {/* Section Navigation Items matching Figma Page 39 */}
        <div className="space-y-3 pt-2">
          {sections.map((item) => (
            <div
              key={item.id}
              onClick={item.action}
              className="bg-white rounded-2xl p-4 border border-[#FED4B9] hover:border-[#F26B1D] transition shadow-card flex items-center justify-between cursor-pointer group active:scale-[0.99]"
            >
              <div className="flex items-center space-x-3.5">
                <div className="w-9 h-9 rounded-xl bg-[#FEF0E6] flex items-center justify-center group-hover:scale-105 transition-transform">
                  {item.icon}
                </div>
                <span className="text-sm font-bold text-[#232323] font-heading">
                  {item.title}
                </span>
              </div>

              <ChevronRight className="w-5 h-5 text-[#F26B1D] group-hover:translate-x-1 transition-transform" />
            </div>
          ))}
        </div>
      </div>

      <BottomNavBar />
    </div>
  );
};
