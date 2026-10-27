# StudyFlow - Implementación de Diseños Figma (Delta)

> *"Conecta, Organiza, Avanza" — Tu vida universitaria más organizada.*

Aplicación interactiva y responsive para la organización académica universitaria **StudyFlow**, implementada con **React 18**, **Tailwind CSS**, **Lucide Icons** y **Vite**, fiel al 100% al Design System y a los 20 diseños y especificaciones de Figma.

---

## 📱 Lista de los 20 Diseños Implementados

| # | Pantalla / Componente | Descripción e Interacciones | Figma Node / Ref |
|---|------------------------|-----------------------------|------------------|
| **1** | **Splash / Bienvenida** | Pantalla de inicio con isotipo StudyFlow, botón naranja primario, botón marrón secundario y enlace a soporte. | `1-897` (Pág. 4) |
| **2** | **Iniciar Sesión (Login)** | Cabecera institucional *"Instituto Educativo"*, inputs con borde píldora, selector de contraseña, botones OAuth Google y Facebook. | `1-936` (Pág. 30) |
| **3** | **Crea una cuenta (Registro)** | Registro con N° de documento, email, contraseñas, consejos de seguridad y aceptación de términos. | `1-1486` (Pág. 29) |
| **4** | **Recuperar Acceso** | Solicitud de enlace de recuperación vía correo electrónico con instrucciones. | `1-1071` (Pág. 34) |
| **5** | **Código de Recuperación (OTP)** | Ingreso numérico de 4 casillas con autoenfoque e indicador visual activo. | `1-978` (Pág. 31 / Pág. 8) |
| **6** | **Nueva Contraseña** | Formulario para ingresar y confirmar nueva contraseña segura. | `1-1140` (Pág. 32) |
| **7** | **Éxito Contraseña Cambiada** | Confirmación visual con checkmark circular (`Frame.svg`) y redirección a login. | `1-1489` (Pág. 33) |
| **8** | **Acceder con Google (OAuth Modal)** | Selector de cuentas de Google con perfiles de Andrea Siapo y Therrius, opción de cuenta externa y enlaces de políticas. | `1-1487` (Pág. 23) |
| **9** | **Chat de Ayuda / Soporte** | Ventana modal flotante interactiva de mensajería *"¿Cómo podemos ayudarte?"* con respuesta en tiempo real. | `1-711` (Pág. 28) |
| **10** | **Menú Lateral (Drawer)** | Drawer deslizante desde la izquierda con navegación a Perfil, Cambiar Contraseña y Cerrar Sesión. | `1-597` (Pág. 25) |
| **11** | **Inicio (Dashboard)** | Cabecera marrón con saludo dinámico, 3 tarjetas métricas (Cursos activos, Tareas pendientes, Avance del ciclo), accesos rápidos y próximas entregas. | `1-122` (Pág. 37) |
| **12** | **Tareas (Lista Agrupada)** | Vista de tareas agrupadas por curso (UX/UI, Matemáticas, 3D), botón de ojo para alternar estado completado y botón flotante (+). | `3-399` (Pág. 41) |
| **13** | **Detalle de la Actividad** | Detalle de la tarea con Tema, Fecha, Badge de Prioridad, Descripción, Switch de Recordatorio y botón de completar. | `126-1158` (Pág. 40) |
| **14** | **Nueva Tarea (Formulario Completo)** | Creación completa de tareas con nombre, curso, fecha, detalle extenso, lista de subtareas y botón de adjuntar archivo. | `1-307` (Pág. 9) |
| **15** | **Tarea (Captura Rápida en Modal)** | Formulario simplificado con opción de *"Más opciones"* para derivar al formulario extendido. | `1-508` (Pág. 10) |
| **16** | **Captura Rápida (Inicio)** | Entrada rápida de notas y tareas espontáneas desde el inicio con botón de *"Guardar rápido"*. | `1-392` (Pág. 18) |
| **17** | **Editar Tarea** | Edición de tareas existentes con carga previa de campos y botón *"Actualizar"*. | `1-38` (Pág. 21) |
| **18** | **Subtareas (Stepper / Timeline)** | Lista vertical con línea conectora continua, checkboxes interactivos y contador dinámico de progreso (Progreso X/5). | `3-512` (Pág. 43) |
| **19** | **Impacto en Nota (Priorización)** | Análisis de ponderación académica con selector de impacto (Baja/Media/Alta), gráfico circular SVG de peso (30%) y prioridad sugerida. | `1-1328` (Pág. 44) |
| **20** | **Calendario & Agenda** | Calendario mensual interactivo (Setiembre 2026) con indicadores de eventos por color y acciones de swipe en eventos ("Marcar terminado" / "Cancelar"). | `1-1488` (Pág. 42 / Pág. 17) |
| **+** | **Mis Cursos** | Lista de asignaturas con avance porcentual circular (60%), docentes y fechas de examen. | (Pág. 38 & Pág. 20) |
| **+** | **Detalle de Curso** | Vista interna del curso con avance, período lectivo, calificaciones, tareas, materiales y comunidad. | (Pág. 39) |
| **+** | **Mi Perfil & Alertas Push** | Perfil de usuario con alternancia de avatares (Andrea / Therrius / Dummy), datos de carrera y simulación de notificación push. | (Pág. 36 & Pág. 35) |
| **+** | **Design System Tokens** | Muestra de todos los componentes atómicos: botones, inputs activos/inactivos, badges de prioridad, toggles, iconografía oficial. | (Pág. 1-3, 5-8, 11, 45-46) |

---

## 🎨 Design Tokens & Estilos

* **Color Primario (Accent):** `#F26B1D`
* **Color Secundario (Warm Brown):** `#8C4A32` / `#B36B4D`
* **Fondo Claro (Beige):** `#FDF7F2` / `#FEF0E6`
* **Bordes y Tarjetas:** `#FED4B9` / `#F0EAE1`
* **Tipografías:** `Poppins` para títulos y destacados, `Inter` para textos de cuerpo y UI.
* **Badges:** Prioridad Alta (`#FED4B9`/`#B83E00`), Media (`#FFF2B2`/`#8C6D00`), Baja (`#D2EBD9`/`#1D773E`).

---

## 🚀 Cómo Ejecutar la Aplicación

### Opción 1: Con el lanzador directo (Windows)
Haz doble clic en:
```bat
run.bat
```

### Opción 2: Desde la terminal
```bash
# Agregar node v22 si es necesario
$env:PATH = "C:\laragon\bin\nodejs\node-v22;" + $env:PATH

# Iniciar servidor de desarrollo
npm run dev

# O compilar para producción
npm run build
```

La aplicación se abrirá en `http://localhost:3000` con:
1. **Barra de Cambio Rápido de Pantalla (Screen Switcher):** Puedes saltar instantáneamente a cualquiera de las 20+ pantallas o navegar de manera fluida y orgánica dentro del flujo de la app.
2. **Selector de Vista Móvil / Pantalla Completa:** Alterna entre el marco realista de iPhone 15 o una vista responsive fluida.
