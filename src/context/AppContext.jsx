import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const USERS = [
  {
    id: 'andrea',
    name: 'Andrea Siapo',
    fullName: 'Andrea Siapo B.',
    email: 'andreasiapob@gmail.com',
    role: 'Estudiante: Ing. de Sistemas',
    since: 'Julio 2026',
    completedCourses: 'Julio 2026',
    avatar: '/assets/1661797935739_2.png' // Preferred PNG asset from Figma
  },
  {
    id: 'therrius',
    name: 'Therrius',
    fullName: 'Therrius León',
    email: 'therriuslf@gmail.com',
    role: 'Estudiante: Ing. de Sistemas',
    since: 'Julio 2026',
    completedCourses: 'Julio 2026',
    avatar: '/images/user_therrius.png' // Preferred PNG
  },
  {
    id: 'dummy',
    name: 'Dummy Avatar',
    fullName: 'Dummy Avatar',
    email: 'estudiante@ia.edu',
    role: 'Estudiante de la IA',
    since: 'Julio 2026',
    completedCourses: 'Julio 2026',
    avatar: null
  }
];

export const INITIAL_COURSES = [
  {
    id: 'uxui',
    name: 'UX/UI Design',
    professor: 'Prof. Pepe',
    pendingTasks: 2,
    nextExam: '28 Oct',
    progress: 60,
    period: '01/06/2026 al 30/11/2026',
    image: '/assets/image_2.png' // Preferred PNG asset from Figma
  },
  {
    id: 'matematica',
    name: 'Matemática',
    professor: 'Prof. Pepe',
    pendingTasks: 2,
    nextExam: '28 Oct',
    progress: 60,
    period: '01/06/2026 al 30/11/2026',
    image: '/images/prof_matematica.png' // Preferred PNG
  },
  {
    id: 'animacion',
    name: 'Animación 3D',
    professor: 'Prof. Pepe',
    pendingTasks: 2,
    nextExam: '28 Oct',
    progress: 60,
    period: '01/06/2026 al 30/11/2026',
    image: '/images/prof_animacion.png' // Preferred PNG
  },
  {
    id: 'programacion',
    name: 'Programación',
    professor: 'Prof. Pepe',
    pendingTasks: 2,
    nextExam: '28 Oct',
    progress: 60,
    period: '01/06/2026 al 30/11/2026',
    image: '/images/prof_programacion.png' // Preferred PNG
  }
];

export const INITIAL_TASKS = [
  {
    id: 't1',
    name: 'Trabajo de wireframes',
    course: 'UX/UI Design',
    courseId: 'uxui',
    tool: 'Figma',
    dueDate: 'Hoy 11:59pm',
    fullDueDate: '28 de Octubre, 11:59 pm',
    topic: 'Diseño de Interfaces',
    priority: 'Alto',
    description: 'Realizar el prototipo de la app',
    reminder: true,
    completed: false,
    weight: 30,
    subtasks: [
      { id: 'st1', title: 'Elegir Tema', done: true },
      { id: 'st2', title: 'Enfocarse en la tarea', done: true },
      { id: 'st3', title: 'Hacer esquema', done: false },
      { id: 'st4', title: 'Redactar', done: false },
      { id: 'st5', title: 'Revisar', done: false }
    ]
  },
  {
    id: 't2',
    name: 'Entrevistas por IA',
    course: 'UX/UI Design',
    courseId: 'uxui',
    tool: 'Word',
    dueDate: 'Hoy 11:59pm',
    fullDueDate: '29 de Octubre, 11:59 pm',
    topic: 'Research y Empatía',
    priority: 'Medio',
    description: 'Entrevistar a 5 usuarios con el asistente de IA',
    reminder: false,
    completed: false,
    weight: 20,
    subtasks: [
      { id: 'st21', title: 'Preparar preguntas', done: true },
      { id: 'st22', title: 'Grabar sesiones', done: false }
    ]
  },
  {
    id: 't3',
    name: 'Práctica calificada 2',
    course: 'Matemáticas',
    courseId: 'matematica',
    tool: 'Plataforma',
    dueDate: 'Mañana 11:59pm',
    fullDueDate: '25 de Octubre, 11:59 pm',
    topic: 'Cálculo Multivariable',
    priority: 'Alto',
    description: 'Resolver evaluación en línea de derivadas parciales',
    reminder: true,
    completed: false,
    weight: 25,
    subtasks: []
  },
  {
    id: 't4',
    name: 'Ejercicios',
    course: 'Matemáticas',
    courseId: 'matematica',
    tool: 'Escrito presencial',
    dueDate: 'Hoy 11:59pm',
    fullDueDate: '26 de Octubre, 11:59 pm',
    topic: 'Álgebra Lineal',
    priority: 'Bajo',
    description: 'Entrega de guía práctica #4 resuelta a mano',
    reminder: false,
    completed: false,
    weight: 15,
    subtasks: []
  },
  {
    id: 't5',
    name: 'Modelado de escena',
    course: 'Animación 3D',
    courseId: 'animacion',
    tool: 'SketchUp',
    dueDate: 'Vie 11:59pm',
    fullDueDate: '30 de Octubre, 11:59 pm',
    topic: 'Iluminación y Render',
    priority: 'Medio',
    description: 'Modelar un entorno de habitación minimalista en 3D',
    reminder: true,
    completed: false,
    weight: 35,
    subtasks: []
  }
];

export const AppProvider = ({ children }) => {
  const [currentScreen, setCurrentScreen] = useState('splash');
  const [activeTab, setActiveTab] = useState('home');
  const [previousScreen, setPreviousScreen] = useState(null);

  const [showGoogleModal, setShowGoogleModal] = useState(false);
  const [showHelpModal, setShowHelpModal] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const [currentUser, setCurrentUser] = useState(USERS[0]);
  const [courses, setCourses] = useState(INITIAL_COURSES);
  const [tasks, setTasks] = useState(INITIAL_TASKS);
  const [selectedTask, setSelectedTask] = useState(INITIAL_TASKS[0]);
  const [selectedCourse, setSelectedCourse] = useState(INITIAL_COURSES[0]);

  const navigateTo = (screen, tab = null) => {
    setPreviousScreen(currentScreen);
    setCurrentScreen(screen);
    if (tab) setActiveTab(tab);
    setShowDrawer(false);
  };

  const goBack = () => {
    if (previousScreen) {
      setCurrentScreen(previousScreen);
    } else {
      setCurrentScreen('home');
      setActiveTab('home');
    }
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(prev => prev.map(t => {
      if (t.id === taskId) {
        const nextState = !t.completed;
        const updated = { ...t, completed: nextState };
        if (selectedTask?.id === taskId) setSelectedTask(updated);
        return updated;
      }
      return t;
    }));
  };

  const addTask = (newTask) => {
    const created = {
      id: `task-${Date.now()}`,
      completed: false,
      weight: 20,
      subtasks: [],
      reminder: true,
      ...newTask
    };
    setTasks(prev => [created, ...prev]);
    return created;
  };

  const updateTask = (taskId, fields) => {
    setTasks(prev => prev.map(t => {
      if (t.id === taskId) {
        const updated = { ...t, ...fields };
        if (selectedTask?.id === taskId) setSelectedTask(updated);
        return updated;
      }
      return t;
    }));
  };

  return (
    <AppContext.Provider
      value={{
        currentScreen,
        setCurrentScreen,
        activeTab,
        setActiveTab,
        navigateTo,
        goBack,
        currentUser,
        setCurrentUser,
        USERS,
        courses,
        setCourses,
        tasks,
        setTasks,
        selectedTask,
        setSelectedTask,
        selectedCourse,
        setSelectedCourse,
        showGoogleModal,
        setShowGoogleModal,
        showHelpModal,
        setShowHelpModal,
        showDrawer,
        setShowDrawer,
        showNotification,
        setShowNotification,
        toggleTaskCompletion,
        addTask,
        updateTask
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
