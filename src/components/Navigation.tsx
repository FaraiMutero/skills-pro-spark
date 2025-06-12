
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Users, Grid2x2, Book, Search } from 'lucide-react';

type UserRole = 'executive' | 'manager' | 'employee';
type ViewType = 'dashboard' | 'chat';

interface NavigationProps {
  currentRole: UserRole;
  currentView: ViewType;
  onRoleChange: (role: UserRole) => void;
  onViewChange: (view: ViewType) => void;
}

export const Navigation = ({ currentRole, currentView, onRoleChange, onViewChange }: NavigationProps) => {
  const roleConfig = {
    executive: { label: 'Executive', icon: Users, color: 'bg-purple-500' },
    manager: { label: 'Manager', icon: Grid2x2, color: 'bg-blue-500' },
    employee: { label: 'Employee', icon: Book, color: 'bg-green-500' }
  };

  return (
    <nav className="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  SkillsPro
                </h1>
                <p className="text-sm text-muted-foreground">Skills Management Platform</p>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Card className="p-1 flex bg-slate-100">
              {Object.entries(roleConfig).map(([role, config]) => {
                const Icon = config.icon;
                const isActive = currentRole === role;
                return (
                  <Button
                    key={role}
                    variant={isActive ? "default" : "ghost"}
                    size="sm"
                    onClick={() => onRoleChange(role as UserRole)}
                    className={`flex items-center space-x-2 ${isActive ? config.color : ''}`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="hidden md:inline">{config.label}</span>
                  </Button>
                );
              })}
            </Card>

            <Card className="p-1 flex bg-slate-100">
              <Button
                variant={currentView === 'dashboard' ? "default" : "ghost"}
                size="sm"
                onClick={() => onViewChange('dashboard')}
                className="flex items-center space-x-2"
              >
                <Grid2x2 className="w-4 h-4" />
                <span className="hidden md:inline">Dashboard</span>
              </Button>
              <Button
                variant={currentView === 'chat' ? "default" : "ghost"}
                size="sm"
                onClick={() => onViewChange('chat')}
                className="flex items-center space-x-2"
              >
                <Search className="w-4 h-4" />
                <span className="hidden md:inline">AI Assistant</span>
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </nav>
  );
};
