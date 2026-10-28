import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { HeaderBar } from '../common/HeaderBar';
import { MobileLayout } from '../common/MobileLayout';
import { ChevronLeft, ChevronRight, Search, CheckCircle2, MoreHorizontal, X } from 'lucide-react';

export const CalendarScreen = () => {
  const { navigateTo } = useApp();
  const [selectedDay, setSelectedDay] = useState(2);
  const [search, setSearch] = useState('');
  const [activeMenuId, setActiveMenuId] = useState(null);

  const daysOfWeek = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];

  // Calendar matrix for Setiembre 2026 (matching Figma Page 42)
  const calendarDays = [
    { day: 30, currentMonth: false },
    { day: 31, currentMonth: false },
    { day: 1, currentMonth: true, dots: ['#00C48C'] },
    { day: 2, currentMonth: true, dots: ['#F26B1D', '#00C48C', '#007AFF'] },
    { day: 3, currentMonth: true, dots: ['#F26B1D'] },
    { day: 4, currentMonth: true },
    { day: 5, currentMonth: true },
    { day: 6, currentMonth: true },
    { day: 7, currentMonth: true, dots: ['#F26B1D'] },
    { day: 8, currentMonth: true, dots: ['#00C48C'] },
    { day: 9, currentMonth: true },
    { day: 10, currentMonth: true, dots: ['#F26B1D', '#007AFF', '#00C48C'] },
    { day: 11, currentMonth: true },
    { day: 12, currentMonth: true },
    { day: 13, currentMonth: true },
    { day: 14, currentMonth: true, dots: ['#F26B1D', '#00C48C'] },
    { day: 15, currentMonth: true, dots: ['#007AFF', '#00C48C'] },
    { day: 16, currentMonth: true },
    { day: 17, currentMonth: true, dots: ['#F26B1D'] },
    { day: 18, currentMonth: true },
    { day: 19, currentMonth: true },
    { day: 20, currentMonth: true },
    { day: 21, currentMonth: true, dots: ['#F26B1D', '#00C48C'] },
    { day: 22, currentMonth: true, dots: ['#F26B1D', '#F26B1D', '#00C48C'] },
    { day: 23, currentMonth: true, dots: ['#00C48C'] },
    { day: 24, currentMonth: true },
    { day: 25, currentMonth: true },
    { day: 26, currentMonth: true },
    { day: 27, currentMonth: true },
    { day: 28, currentMonth: true },
    { day: 29, currentMonth: true, dots: ['#00C48C', '#F26B1D', '#007AFF'] },
    { day: 30, currentMonth: true },
    { day: 31, currentMonth: true, dots: ['#007AFF', '#F26B1D'] },
    { day: 1, currentMonth: false },
    { day: 2, currentMonth: false },
  ];

  const scheduleEvents = [
    {
      id: 1,
      time: '14:00-15:00',
      title: 'Trabajo de Wireframe',
      course: 'UI / UX',
      completed: false
    },
    {
      id: 2,
      time: '14:00-15:00',
      title: 'Practica Calificada',
      course: 'Matemática',
      completed: false
    },
    {
      id: 3,
      time: '16:00-18:00',
      title: 'Modelado de Escena',
      course: 'Animación 3D',
      completed: false
    },
    {
      id: 4,
      time: '18:30-20:00',
      title: 'Diseño de BD',
      course: 'Programación',
      completed: false
    }
  ];

  return (
    <MobileLayout
      header={
        <HeaderBar
          type="tab"
          title="Calendario"
          searchPlaceholder="Buscar en calendario"
          searchValue={search}
          onSearchChange={(e) => setSearch(e.target.value)}
        />
      }
      floatingAction={
        <button
          onClick={() => {
            const query = prompt('Buscar en calendario:');
            if (query) setSearch(query);
          }}
          className="w-13 h-13 rounded-full bg-[#F26B1D] hover:bg-[#DF5C12] text-white flex items-center justify-center shadow-btn transition active:scale-90"
          title="Buscar fecha o evento"
        >
          <Search className="w-6 h-6 stroke-[2.5]" />
        </button>
      }
      contentClassName="px-5 pt-3 space-y-4 pb-20"
    >
        {/* Month Navigation matching Figma Page 42 */}
        <div className="flex items-center justify-between px-2">
          <button className="p-1 rounded-full text-[#F26B1D] hover:bg-orange-100 transition">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="text-center">
            <h2 className="text-lg font-bold text-[#F26B1D] font-heading leading-tight">
              Setiembre
            </h2>
            <span className="text-xs font-semibold text-gray-500">2026</span>
          </div>
          <button className="p-1 rounded-full text-[#F26B1D] hover:bg-orange-100 transition">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Days of week header */}
        <div className="grid grid-cols-7 text-center text-xs font-semibold text-gray-700 pb-1 border-b border-orange-100">
          {daysOfWeek.map((d) => (
            <div key={d} className="py-1">
              {d}
            </div>
          ))}
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-y-2 text-center text-xs">
          {calendarDays.map((item, index) => {
            const isSelected = item.currentMonth && item.day === selectedDay;
            return (
              <div
                key={index}
                onClick={() => item.currentMonth && setSelectedDay(item.day)}
                className="flex flex-col items-center justify-center cursor-pointer py-1"
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                    isSelected
                      ? 'bg-[#F26B1D] text-white font-bold shadow-sm scale-110'
                      : item.currentMonth
                      ? 'text-gray-900 hover:bg-orange-50 font-medium'
                      : 'text-gray-300 font-light'
                  }`}
                >
                  {item.day}
                </div>

                {/* Event indicator dots */}
                <div className="flex items-center space-x-0.5 h-1.5 mt-0.5">
                  {item.dots?.map((color, i) => (
                    <div
                      key={i}
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Scheduled Agenda Items matching Figma Page 42 & Page 17 */}
        <div className="pt-2 space-y-3">
          <div className="flex items-center justify-between ml-1">
            <h3 className="text-sm font-bold text-[#232323] font-heading">
              Horario del {selectedDay} de Setiembre
            </h3>
            <span className="text-xs text-[#8C4A32] font-medium">4 actividades</span>
          </div>

          <div className="space-y-2.5">
            {scheduleEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-2xl p-4 border border-[#FED4B9] shadow-card relative overflow-hidden transition hover:border-[#F26B1D]"
              >
                {/* Time Indicator */}
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#00C48C]" />
                    <span className="text-xs font-semibold text-gray-600">
                      {event.time}
                    </span>
                  </div>

                  {/* Actions toggle (...) matching Figma Page 17 */}
                  <button
                    onClick={() => setActiveMenuId(activeMenuId === event.id ? null : event.id)}
                    className="p-1 rounded-full text-gray-400 hover:text-gray-700 transition"
                  >
                    <MoreHorizontal className="w-4 h-4" />
                  </button>
                </div>

                {/* Content */}
                <div>
                  <h4 className="text-sm font-bold text-[#8C4A32] font-heading">
                    {event.title}
                  </h4>
                  <p className="text-xs text-gray-500 mt-0.5 font-medium">
                    {event.course}
                  </p>
                </div>

                {/* Swipe / Action Menu matching Figma Page 17 */}
                {activeMenuId === event.id && (
                  <div className="absolute inset-y-0 right-0 bg-[#FED4B9] rounded-r-2xl p-3 flex flex-col justify-center space-y-2 animate-in slide-in-from-right duration-150 shadow-md">
                    <button
                      onClick={() => {
                        alert(`"${event.title}" marcada como terminada.`);
                        setActiveMenuId(null);
                      }}
                      className="text-xs font-bold text-[#8C4A32] hover:text-[#232323] transition text-left"
                    >
                      Marcar como terminado
                    </button>
                    <button
                      onClick={() => setActiveMenuId(null)}
                      className="text-xs font-medium text-gray-700 hover:text-red-600 transition text-left"
                    >
                      Cancelar
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
    </MobileLayout>
  );
};
