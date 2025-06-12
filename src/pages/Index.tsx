
import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { ExecutiveDashboard } from '@/components/ExecutiveDashboard';
import { ManagerPortal } from '@/components/ManagerPortal';
import { EmployeePortal } from '@/components/EmployeePortal';
import { AIAssistant } from '@/components/AIAssistant';

type UserRole = 'executive' | 'manager' | 'employee';
type ViewType = 'dashboard' | 'chat';

const Index = () => {
  const [currentRole, setCurrentRole] = useState<UserRole>('executive');
  const [currentView, setCurrentView] = useState<ViewType>('dashboard');

  const renderMainContent = () => {
    if (currentView === 'chat') {
      return <AIAssistant userRole={currentRole} />;
    }

    switch (currentRole) {
      case 'executive':
        return <ExecutiveDashboard />;
      case 'manager':
        return <ManagerPortal />;
      case 'employee':
        return <EmployeePortal />;
      default:
        return <ExecutiveDashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Navigation 
        currentRole={currentRole}
        currentView={currentView}
        onRoleChange={setCurrentRole}
        onViewChange={setCurrentView}
      />
      
      <main className="container mx-auto px-4 py-6">
        <div className="animate-fade-in">
          {renderMainContent()}
        </div>
      </main>
    </div>
  );
};

export default Index;
