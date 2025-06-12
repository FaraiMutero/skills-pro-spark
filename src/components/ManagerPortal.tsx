
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { TeamSkillsGrid } from '@/components/TeamSkillsGrid';
import { ProgressTracker } from '@/components/ProgressTracker';
import { Users, Clock, Grid2x2, FileText } from 'lucide-react';

export const ManagerPortal = () => {
  const [selectedEmployee, setSelectedEmployee] = useState<string | null>(null);

  const teamMetrics = [
    {
      title: 'Team Members',
      value: '12',
      icon: Users,
      color: 'text-blue-600'
    },
    {
      title: 'Avg. Skill Level',
      value: '7.2/10',
      icon: Grid2x2,
      color: 'text-green-600'
    },
    {
      title: 'Active Training',
      value: '8',
      icon: Clock,
      color: 'text-purple-600'
    },
    {
      title: 'Completed Certs',
      value: '15',
      icon: FileText,
      color: 'text-orange-600'
    }
  ];

  const teamMembers = [
    { 
      id: '1', 
      name: 'Sarah Johnson', 
      role: 'Senior Developer', 
      skillLevel: 8.5,
      trainingProgress: 75,
      status: 'On Track'
    },
    { 
      id: '2', 
      name: 'Mike Chen', 
      role: 'Data Analyst', 
      skillLevel: 7.2,
      trainingProgress: 45,
      status: 'Behind'
    },
    { 
      id: '3', 
      name: 'Emily Davis', 
      role: 'Product Manager', 
      skillLevel: 9.1,
      trainingProgress: 90,
      status: 'Ahead'
    },
    { 
      id: '4', 
      name: 'Alex Rodriguez', 
      role: 'UX Designer', 
      skillLevel: 6.8,
      trainingProgress: 60,
      status: 'On Track'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Ahead': return 'bg-green-100 text-green-800';
      case 'On Track': return 'bg-blue-100 text-blue-800';
      case 'Behind': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">Manager Portal</h2>
          <p className="text-muted-foreground">Team skills overview and development planning</p>
        </div>
      </div>

      {/* Team Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMetrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{metric.title}</p>
                    <p className="text-2xl font-bold text-slate-900">{metric.value}</p>
                  </div>
                  <div className={`p-3 rounded-full bg-slate-100 ${metric.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Team Members List */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Team Members</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {teamMembers.map((member) => (
              <div 
                key={member.id}
                className={`p-4 rounded-lg border cursor-pointer transition-all duration-200 hover:shadow-md ${
                  selectedEmployee === member.id ? 'border-blue-500 bg-blue-50' : 'border-slate-200'
                }`}
                onClick={() => setSelectedEmployee(member.id)}
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-slate-900">{member.name}</h4>
                  <Badge className={getStatusColor(member.status)}>{member.status}</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{member.role}</p>
                <div className="flex items-center justify-between text-sm">
                  <span>Skill Level: {member.skillLevel}/10</span>
                  <span>Training: {member.trainingProgress}%</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Skills Grid */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Team Skills Grid</CardTitle>
          </CardHeader>
          <CardContent>
            <TeamSkillsGrid selectedEmployee={selectedEmployee} />
          </CardContent>
        </Card>
      </div>

      {/* Progress Tracker */}
      <Card>
        <CardHeader>
          <CardTitle>Training Progress Tracker</CardTitle>
        </CardHeader>
        <CardContent>
          <ProgressTracker />
        </CardContent>
      </Card>
    </div>
  );
};
