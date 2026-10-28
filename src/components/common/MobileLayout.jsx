import React from 'react';
import { BottomNavBar } from './BottomNavBar';

/**
 * MobileLayout: Layout compartido para todas las vistas dentro del dispositivo móvil.
 * - Header fijo anclado arriba (flex-shrink-0)
 * - Contenido central desplazable con scroll vertical independiente (flex-1 min-h-0 overflow-y-auto)
 * - BottomNavBar fijo anclado abajo respetando el arco/borde inferior redondeado (flex-shrink-0)
 */
export const MobileLayout = ({
  header = null,
  children,
  showBottomNav = true,
  contentClassName = '',
  bgClassName = 'bg-[#FDF7F2]',
  floatingAction = null
}) => {
  return (
    <div className={`h-full w-full flex flex-col overflow-hidden text-left relative ${bgClassName}`}>
      {/* 1. Header fijo anclado a la parte superior */}
      {header && (
        <div className="flex-shrink-0 z-20 w-full">
          {header}
        </div>
      )}

      {/* 2. Contenido principal: scroll vertical único e independiente */}
      <main className={`flex-1 overflow-y-auto overflow-x-hidden min-h-0 relative ${contentClassName}`}>
        {children}
      </main>

      {/* 3. Botón de acción flotante (si aplica a la pantalla, ej. Tasks o Calendar) */}
      {floatingAction && (
        <div className="absolute bottom-20 right-5 z-30">
          {floatingAction}
        </div>
      )}

      {/* 4. BottomNavBar fijo dentro del marco del móvil */}
      {showBottomNav && (
        <div className="flex-shrink-0 z-20 w-full">
          <BottomNavBar />
        </div>
      )}
    </div>
  );
};
