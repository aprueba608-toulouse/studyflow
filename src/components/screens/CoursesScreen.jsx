import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { HeaderBar } from '../common/HeaderBar';
import { BottomNavBar } from '../common/BottomNavBar';
import { ChevronRight, ListChecks, Calendar, ChevronDown } from 'lucide-react';

export const CoursesScreen = () => {
  const { courses, setSelectedCourse, navigateTo } = useApp();
  const [search, setSearch] = useState('');
  const [cycle, setCycle] = useState('Este ciclo');

  const filteredCourses = courses.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.professor.toLowerCase().includes(search.toLowerCase())
  );

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
    navigateTo('course-detail');
  };

  return (
    <div className="min-h-screen bg-[#FDF7F2] pb-28 text-left">
      <HeaderBar
        type="tab"
        title="Cursos"
        searchPlaceholder="Buscar curso o profesor"
        searchValue={search}
        onSearchChange={(e) => setSearch(e.target.value)}
      />

      <div className="px-5 pt-4 space-y-4">
        {/* Header section with filter */}
        <div className="flex items-center justify-between ml-1">
          <h2 className="text-base font-bold text-[#232323] font-heading">
            Mis cursos
          </h2>

          <div className="flex items-center space-x-1 text-xs font-semibold text-[#8C4A32] bg-white px-3 py-1.5 rounded-full border border-[#FED4B9] cursor-pointer shadow-sm">
            <span>{cycle}</span>
            <ChevronDown className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Courses List matching Figma Page 38 & Page 20 */}
        <div className="space-y-3.5">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              onClick={() => handleCourseClick(course)}
              className="bg-white rounded-3xl p-4 border border-[#FED4B9] hover:border-[#F26B1D] transition shadow-card flex items-center justify-between cursor-pointer group active:scale-[0.99]"
            >
              {/* Left Column: Teacher Photo & Course details */}
              <div className="flex items-center space-x-3.5 flex-1 min-w-0">
                <div className="w-14 h-16 rounded-2xl overflow-hidden bg-gray-100 shrink-0 border border-orange-100">
                  <img
                    src={course.image}
                    alt={course.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="min-w-0">
                  <h3 className="text-base font-bold text-[#F26B1D] font-heading leading-tight truncate">
                    {course.name}
                  </h3>
                  <p className="text-xs text-gray-700 font-semibold mt-0.5">
                    {course.professor}
                  </p>

                  <div className="mt-1 space-y-0.5">
                    <p className="text-[11px] text-gray-500 flex items-center space-x-1">
                      <ListChecks className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                      <span>{course.pendingTasks} Tareas pendientes</span>
                    </p>
                    <p className="text-[11px] text-gray-500 flex items-center space-x-1">
                      <Calendar className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                      <span>Examen {course.nextExam}</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Progress Ring & Arrow matching Figma Page 20 */}
              <div className="flex items-center space-x-2 pl-2 shrink-0">
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

                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#F26B1D] group-hover:translate-x-0.5 transition" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <BottomNavBar />
    </div>
  );
};
