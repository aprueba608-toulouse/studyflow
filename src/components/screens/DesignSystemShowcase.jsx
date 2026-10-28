import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { HeaderBar } from '../common/HeaderBar';
import { MobileLayout } from '../common/MobileLayout';
import { StudyIcon, StatusBar } from '../common/FigmaIcons';
import { Check, Bell, ArrowRight, Eye, ChevronRight } from 'lucide-react';

export const DesignSystemShowcase = () => {
  const { navigateTo } = useApp();
  const [activeToggle, setActiveToggle] = useState(true);
  const [showAlert, setShowAlert] = useState(false);
  const [isCompletedBtn, setIsCompletedBtn] = useState(false);
  const [sampleText, setSampleText] = useState('Tu texto aquí');

  return (
    <MobileLayout header={<HeaderBar type="sub" title="Design System (StudyFlow)" onBack={() => navigateTo('home', 'home')} />} contentClassName="px-5 pt-4 space-y-8 pb-6 max-w-sm mx-auto w-full">
        <div className="bg-[#FEF0E6] p-4 rounded-2xl border border-[#FED4B9]">
          <h2 className="text-base font-bold text-[#8C4A32] font-heading">
            Design Tokens & Figma Components
          </h2>
          <p className="text-xs text-gray-600 mt-1">
            Catálogo interactivo con los 20+ componentes y especificaciones del sistema de diseño StudyFlow.
          </p>
        </div>

        {/* 1. Botones (Page 16 & Page 5) */}
        <section className="space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#F26B1D]">
            1. Botones Principales (Píldoras)
          </h3>
          <div className="space-y-2.5">
            <button className="w-full py-3.5 px-6 rounded-full bg-[#F26B1D] hover:bg-[#DF5C12] text-white font-semibold text-sm shadow-btn transition active:scale-[0.98]">
              Clic aquí (Primario)
            </button>

            <button className="w-full py-3.5 px-6 rounded-full bg-[#B36B4D] hover:bg-[#8C4A32] text-white font-semibold text-sm shadow-brown-btn transition active:scale-[0.98]">
              Clic aquí (Secundario)
            </button>

            {/* Checkmark Completion Button (Page 5) */}
            <button
              onClick={() => setIsCompletedBtn(!isCompletedBtn)}
              className={`w-full py-3 px-6 rounded-full border-2 font-semibold text-sm transition-all flex items-center justify-center space-x-2 ${
                isCompletedBtn
                  ? 'bg-[#F26B1D] text-white border-[#F26B1D] shadow-btn'
                  : 'bg-transparent text-[#F26B1D] border-[#FED4B9] hover:bg-[#FEF0E6]'
              }`}
            >
              <Check className="w-4 h-4 stroke-[3]" />
              <span>{isCompletedBtn ? '✓ Completo' : '✓ Marcar como completada'}</span>
            </button>
          </div>
        </section>

        {/* 2. Badges de Prioridad (Page 2) */}
        <section className="space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#F26B1D]">
            2. Badges de Prioridad
          </h3>
          <div className="bg-white p-4 rounded-2xl border border-[#FED4B9] space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-600">Prioridad Baja</span>
              <span className="px-4 py-1 rounded-full text-xs font-bold bg-[#D2EBD9] text-[#1D773E]">
                Bajo
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-600">Prioridad Media</span>
              <span className="px-4 py-1 rounded-full text-xs font-bold bg-[#FFF2B2] text-[#8C6D00]">
                Medio
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-600">Prioridad Alta</span>
              <span className="px-4 py-1 rounded-full text-xs font-bold bg-[#FED4B9] text-[#B83E00]">
                Alto
              </span>
            </div>
          </div>
        </section>

        {/* 3. Inputs & Estados (Page 1 & Page 46) */}
        <section className="space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#F26B1D]">
            3. Inputs (Form Fields)
          </h3>
          <div className="space-y-3">
            <div className="bg-[#FEF0E6] border border-[#FED4B9] focus-within:border-[#F26B1D] rounded-full px-5 py-3 shadow-sm">
              <span className="text-[10px] font-bold text-[#F26B1D] block">Label</span>
              <input
                type="text"
                value={sampleText}
                onChange={(e) => setSampleText(e.target.value)}
                className="w-full bg-transparent text-sm font-semibold text-[#232323]"
              />
            </div>

            <div className="bg-[#D5D5D5]/60 border border-transparent rounded-full px-5 py-3">
              <span className="text-[10px] font-bold text-gray-500 block">Label (Inactivo)</span>
              <span className="text-sm font-semibold text-gray-600">value</span>
            </div>
          </div>
        </section>

        {/* 4. Interruptor de Recordatorio (Page 6) */}
        <section className="space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#F26B1D]">
            4. Interruptor Recordatorio (Píldora Doble)
          </h3>
          <div className="bg-white p-4 rounded-2xl border border-[#FED4B9] space-y-2">
            <div className="flex items-center space-x-2">
              <Bell className="w-4 h-4 text-[#F26B1D]" />
              <span className="text-xs font-bold text-[#F26B1D]">RECORDATORIO</span>
            </div>
            <div className="bg-[#FEF0E6] p-1 rounded-full flex items-center border border-[#FED4B9]">
              <button
                onClick={() => setActiveToggle(true)}
                className={`flex-1 py-1.5 text-xs font-semibold rounded-full transition ${
                  activeToggle ? 'bg-[#F26B1D] text-white shadow-sm' : 'text-[#8C4A32]'
                }`}
              >
                Activado
              </button>
              <button
                onClick={() => setActiveToggle(false)}
                className={`flex-1 py-1.5 text-xs font-semibold rounded-full transition ${
                  !activeToggle ? 'bg-[#F26B1D] text-white shadow-sm' : 'text-[#8C4A32]'
                }`}
              >
                Desactivado
              </button>
            </div>
          </div>
        </section>

        {/* 5. Tarjetas de Tarea y Curso (Page 13, 14 & 20) */}
        <section className="space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#F26B1D]">
            5. Tarjetas de Componentes
          </h3>
          <div className="bg-white rounded-2xl p-4 border border-[#FED4B9] shadow-card flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-xl bg-[#FEF0E6] flex items-center justify-center text-[#F26B1D]">
                <StudyIcon name="docs" className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#F26B1D]">Trabajo de wireframes</h4>
                <p className="text-xs text-[#8C4A32]">UX/UI Design</p>
                <p className="text-[10px] text-gray-500">Hoy 11:59pm</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-[#F26B1D]" />
          </div>
        </section>

        {/* 6. Modal de Alerta / Dialog (Page 12) */}
        <section className="space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#F26B1D]">
            6. Modal de Alerta (Page 12)
          </h3>
          <button
            onClick={() => setShowAlert(true)}
            className="w-full py-2.5 px-4 bg-white border border-[#FED4B9] hover:bg-orange-50 text-[#8C4A32] text-xs font-bold rounded-2xl transition shadow-sm"
          >
            Abrir Diálogo de Alerta (Figma Page 12)
          </button>

          {showAlert && (
            <div className="p-5 bg-white rounded-3xl border border-orange-200 shadow-xl space-y-4">
              <h4 className="text-base font-bold text-[#F26B1D] font-heading">
                Título
              </h4>
              <p className="text-xs text-gray-600">
                Mensaje de la alerta con confirmación de cambios o notificación de entrega.
              </p>
              <div className="flex items-center space-x-3 pt-2">
                <button
                  onClick={() => setShowAlert(false)}
                  className="flex-1 py-2 px-4 rounded-full border border-[#F26B1D] text-[#F26B1D] text-xs font-semibold hover:bg-orange-50 transition"
                >
                  Cancelar
                </button>
                <button
                  onClick={() => setShowAlert(false)}
                  className="flex-1 py-2 px-4 rounded-full bg-[#F26B1D] text-white text-xs font-semibold shadow-btn transition hover:bg-[#DF5C12]"
                >
                  Submit
                </button>
              </div>
            </div>
          )}
        </section>

        {/* 7. Iconografía Oficial (Page 45) */}
        <section className="space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#F26B1D]">
            7. Set de Iconos Oficiales (Page 45)
          </h3>
          <div className="bg-white p-4 rounded-2xl border border-[#FED4B9] grid grid-cols-5 gap-3">
            {['academic', 'book', 'calendar', 'docs', 'community', 'fire', 'alert', 'mail', 'logout', 'delete'].map((ico) => (
              <div key={ico} className="flex flex-col items-center justify-center p-2 rounded-xl hover:bg-orange-50 transition">
                <StudyIcon name={ico} className="w-6 h-6" color="#FB8232" />
                <span className="text-[9px] text-gray-500 mt-1 capitalize">{ico}</span>
              </div>
            ))}
          </div>
        </section>
    </MobileLayout>
  );
};
