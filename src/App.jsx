import React, { useState } from 'react';
import { useApp } from './context/AppContext';
import { ScreenSwitcher } from './components/navigation/ScreenSwitcher';
import { SplashScreen } from './components/screens/SplashScreen';
import { LoginScreen } from './components/screens/LoginScreen';
import { RegisterScreen } from './components/screens/RegisterScreen';
import { ForgotPasswordScreen } from './components/screens/ForgotPasswordScreen';
import { OtpScreen } from './components/screens/OtpScreen';
import { ResetPasswordScreen } from './components/screens/ResetPasswordScreen';
import { PasswordSuccessScreen } from './components/screens/PasswordSuccessScreen';
import { HomeScreen } from './components/screens/HomeScreen';
import { TasksScreen } from './components/screens/TasksScreen';
import { TaskDetailScreen } from './components/screens/TaskDetailScreen';
import { NewTaskScreen } from './components/screens/NewTaskScreen';
import { QuickTaskScreen } from './components/screens/QuickTaskScreen';
import { FastCaptureScreen } from './components/screens/FastCaptureScreen';
import { EditTaskScreen } from './components/screens/EditTaskScreen';
import { SubtasksScreen } from './components/screens/SubtasksScreen';
import { GradeImpactScreen } from './components/screens/GradeImpactScreen';
import { CalendarScreen } from './components/screens/CalendarScreen';
import { CoursesScreen } from './components/screens/CoursesScreen';
import { CourseDetailScreen } from './components/screens/CourseDetailScreen';
import { ProfileScreen } from './components/screens/ProfileScreen';
import { DesignSystemShowcase } from './components/screens/DesignSystemShowcase';
import { GoogleAuthModal } from './components/modals/GoogleAuthModal';
import { HelpChatModal } from './components/modals/HelpChatModal';
import { DrawerMenu } from './components/common/DrawerMenu';

export const App = () => {
  const { currentScreen } = useApp();
  const [isMobileFrame, setIsMobileFrame] = useState(true);

  const renderScreen = () => {
    switch (currentScreen) {
      case 'splash':
        return <SplashScreen />;
      case 'login':
        return <LoginScreen />;
      case 'register':
        return <RegisterScreen />;
      case 'forgot-password':
        return <ForgotPasswordScreen />;
      case 'otp':
        return <OtpScreen />;
      case 'new-password':
        return <ResetPasswordScreen />;
      case 'password-success':
        return <PasswordSuccessScreen />;
      case 'home':
        return <HomeScreen />;
      case 'tasks':
        return <TasksScreen />;
      case 'task-detail':
        return <TaskDetailScreen />;
      case 'new-task':
        return <NewTaskScreen />;
      case 'quick-task':
        return <QuickTaskScreen />;
      case 'fast-capture':
        return <FastCaptureScreen />;
      case 'edit-task':
        return <EditTaskScreen />;
      case 'subtasks':
        return <SubtasksScreen />;
      case 'grade-impact':
        return <GradeImpactScreen />;
      case 'calendar':
        return <CalendarScreen />;
      case 'courses':
        return <CoursesScreen />;
      case 'course-detail':
        return <CourseDetailScreen />;
      case 'profile':
        return <ProfileScreen />;
      case 'design-system':
        return <DesignSystemShowcase />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <div className="min-h-screen bg-[#E5DFD8] flex flex-col items-center">
      {/* Top Interactive Screen Switcher Bar */}
      <ScreenSwitcher isMobileFrame={isMobileFrame} setIsMobileFrame={setIsMobileFrame} />

      {/* Main Container */}
      <div className={`w-full flex-1 flex items-center justify-center ${isMobileFrame ? 'py-6 px-4' : ''}`}>
        {isMobileFrame ? (
          /* Realistic iPhone 15 Mobile Frame (393 x 852 px) */
          <div className="relative w-[393px] h-[852px] max-w-full max-h-[100dvh] bg-[#FDF7F2] rounded-[48px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35)] border-[10px] border-[#2A2B2D] overflow-hidden flex flex-col isolate">
            {/* Screen Content */}
            <div className="w-full h-full flex flex-col overflow-hidden relative">
              {renderScreen()}
            </div>

            {/* Overlays & Modals scoped inside device frame */}
            <GoogleAuthModal />
            <HelpChatModal />
            <DrawerMenu />
          </div>
        ) : (
          /* Responsive View (393 x 852 px reference) */
          <div className="relative w-full max-w-[393px] h-[852px] max-h-[100dvh] bg-[#FDF7F2] shadow-xl overflow-hidden flex flex-col isolate">
            {/* Screen Content */}
            <div className="w-full h-full flex flex-col overflow-hidden relative">
              {renderScreen()}
            </div>

            {/* Overlays & Modals scoped inside device frame */}
            <GoogleAuthModal />
            <HelpChatModal />
            <DrawerMenu />
          </div>
        )}
      </div>
    </div>
  );
};
