---
name: studyflow-design-system
description: Design System y reglas visuales de la aplicación StudyFlow (UI/UX). Guía para componentes React, Tailwind CSS y Framer Motion.
---

# StudyFlow - Design System & UI Guidelines

Este Skill contiene la especificación de diseño visual, paleta de colores, tipografía, bordes, componentes y reglas de interfaz para la aplicación de organización académica **StudyFlow**[cite: 4, 47].

---

## 1. Concepto y Esencia Visual

* **Eslogan / Taglines:** "Conecta, Organiza, Avanza", "Tu vida universitaria más organizada"[cite: 47].
* **Atributos de Marca:** Tranquilidad, Enfoque, Motivación, Organización, Comodidad y Cercanía[cite: 47].
* **Estilo de Interfaz:** Limpio, amigable, con tarjetas redondeadas (Soft Edges), sombras suaves y un alto contraste funcional para tareas y calendarios[cite: 4, 13, 22, 42].

---

## 2. Paleta de Colores (Color Tokens)

### Colores Primarios y Secundarios
* **Primary / Accent (Naranja):** `#F26B1D` (Energía, motivación e identidad visual principal)[cite: 4, 22, 47].
* **Secondary / Warm Earth (Marrón Cálido):** `#B36B4D` / `#8C4A32` (Botones secundarios y acentos cálidos)[cite: 4, 47].
* **Background Light (Beige Claro):** `#FDF7F2` / `#F7EFE9` (Fondo de pantalla y tarjetas en modo claro)[cite: 22, 47].
* **Dark Mode / Neutral Dark (Negro / Gris Oscuro):** `#1E1E1E` / `#2B2B2B` (Modo oscuro y encabezados de alta jerarquía)[cite: 41, 47].

### Estado y Prioridad (Badges & Status)
* **Prioridad Alta / Alerta:** `#F26B1D` (Naranja intenso)[cite: 2, 40].
* **Prioridad Media:** `#666666` (Gris medio / Neutro)[cite: 2, 44].
* **Prioridad Baja / Inactivo:** `#E5E5E5` (Gris claro)[cite: 2, 44].
* **Completado / Success:** `#34C759` (Verde suave) o Naranja de marca en checkmarks[cite: 5, 33].

---

## 3. Tipografía

| Uso | Tipografía | Peso / Style | Aplicación |
| :--- | :--- | :--- | :--- |
| **Títulos y Destacados** | **Poppins**[cite: 47] | Bold / SemiBold | Encabezados de pantalla, títulos de tarjeta, modales[cite: 12, 37, 47]. |
| **Texto de Cuerpo y UI** | **Inter**[cite: 47] | Regular / Medium | Descripciones, subtextos, inputs, botones, fechas[cite: 40, 47]. |

---

## 4. Estilos Visuales y Componentes (UI Components)

### A. Botones (`Buttons`)
* **Píldora / Full Rounded:** `border-radius: 9999px` (Redondeado completo)[cite: 4].
* **Primary Button:** Fondo Naranja (`#F26B1D`), texto blanco, sombra inferior suave (`box-shadow: 0 4px 12px rgba(242,107,29,0.2)`)[cite: 4].
* **Secondary Button:** Fondo Marrón Cálido o Beige, texto blanco/oscuro[cite: 4].
* **Elevación:** Transición de `scale(0.98)` en `:active`[cite: 4].

### B. Tarjetas (`Cards`)
* **Border Radius:** `20px` o `24px` (`rounded-3xl` en Tailwind CSS)[cite: 13, 20].
* **Card Neutral:** Fondo Beige Claro / Blanco con borde sutil `#F0EAE1` o sombra ligera `0 2px 8px rgba(0,0,0,0.04)`[cite: 13, 22].
* **Card de Curso / Tarea:** Contiene ícono de la materia, nombre del profesor/curso, porcentaje de avance (`Progress Ring` de 60%) y etiqueta de examen/entregable[cite: 20, 38].

### C. Navegación Inferior (`Bottom Navigation Bar`)
* **Fondo:** Beige cálido claro / Flotante[cite: 22].
* **Estructura (5 Items):**
  1. `Inicio` (Home)[cite: 9, 22]
  2. `Tareas` (Checklist)[cite: 9, 22]
  3. `Calendario` (Calendar)[cite: 9, 22]
  4. `Cursos` (Hat / Book icon)[cite: 9, 22]
  5. `Perfil` (User circle)[cite: 9, 22]
* **Estado Activo:** Ícono y texto teñidos en Naranja Principal (`#F26B1D`)[cite: 22].

### D. Formularios e Inputs
* **Estilo:** Campos con bordes muy suavemente redondeados (`rounded-xl` o `rounded-2xl`), borde fino `#E2D8CE` e indicador de foco en naranja[cite: 9, 30].
* **Interruptores (`Switches`):** Interruptor de Recordatorio en estilo píldora con acento naranja cuando está activado[cite: 6, 40].

---

## 5. Reglas de Animación (Framer Motion)

```typescript
// Transición estándar para modales y navegación entre pestañas
export const pageTransition = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 0.25, ease: "easeInOut" }
};

// Microinteracción para Checkbox de Tarea Completada
export const checkmarkAnimation = {
  scale: [1, 1.2, 1],
  transition: { duration: 0.2 }
};