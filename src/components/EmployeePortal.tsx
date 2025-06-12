
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { PersonalSkillsProfile } from '@/components/PersonalSkillsProfile';
import { LearningRecommendations } from '@/components/LearningRecommendations';
import { Book, Clock, FileText, Grid2x2 } from 'lucide-react';

export const EmployeePortal = () => {
  const personalMetrics = [
    {
      title: 'Skills Assessed',
      value: '24',
      icon: Grid2x2,
      color: 'text-blue-600'
    },
    {
      title: 'Training Hours',
      value: '127',
      icon: Clock,
      color: 'text-green-600'
    },
    {
      title: 'Certifications',
      value: '3',
      icon: FileText,
      color: 'text-purple-600'
    },
    {
      title: 'Learning Paths',
      value: '2',
      icon: Book,
      color: 'text-orange-600'
    }
  ];

  const currentTraining = [
    {
      course: 'Advanced React Development',
      progress: 75,
      deadline: '2 days',
      status: 'In Progress'
    },
    {
      course: 'Data Analytics Fundamentals',
      progress: 30,
      deadline: '2 weeks',
      status: 'Started'
    },
    {
      course: 'Leadership Skills',
      progress: 0,
      deadline: '1 month',
      status: 'Not Started'
    }
  ];

  const recentAchievements = [
    { name: 'JavaScript Expert', date: '2024-01-15', type: 'certification' },
    { name: 'Team Collaboration', date: '2024-01-10', type: 'skill' },
    { name: 'Project Management', date: '2024-01-05', type: 'course' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Progress': return 'bg-blue-100 text-blue-800';
      case 'Started': return 'bg-yellow-100 text-yellow-800';
      case 'Not Started': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">My Learning Dashboard</h2>
          <p className="text-muted-foreground">Track your skills development and training progress</p>
        </div>
      </div>

      {/* Personal Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {personalMetrics.map((metric, index) => {
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Personal Skills Profile */}
        <Card>
          <CardHeader>
            <CardTitle>My Skills Profile</CardTitle>
          </CardHeader>
          <CardContent>
            <PersonalSkillsProfile />
          </CardContent>
        </Card>

        {/* Current Training */}
        <Card>
          <CardHeader>
            <CardTitle>Current Training</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {currentTraining.map((training, index) => (
              <div key={index} className="p-4 border rounded-lg hover:shadow-sm transition-shadow">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-slate-900">{training.course}</h4>
                  <Badge className={getStatusColor(training.status)}>{training.status}</Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>Progress: {training.progress}%</span>
                    <span>Deadline: {training.deadline}</span>
                  </div>
                  <Progress value={training.progress} className="h-2" />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Learning Recommendations */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Recommended Learning Paths</CardTitle>
          </CardHeader>
          <CardContent>
            <LearningRecommendations />
          </CardContent>
        </Card>

        {/* Recent Achievements */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Achievements</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentAchievements.map((achievement, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <FileText className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-slate-900">{achievement.name}</p>
                  <p className="text-sm text-muted-foreground">{achievement.date}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
