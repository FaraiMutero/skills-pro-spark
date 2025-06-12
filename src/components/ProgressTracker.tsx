
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';

export const ProgressTracker = () => {
  const trainingData = [
    {
      employee: 'Sarah Johnson',
      course: 'Advanced React',
      progress: 85,
      status: 'On Track',
      deadline: '2024-01-25'
    },
    {
      employee: 'Mike Chen',
      course: 'Data Analytics',
      progress: 45,
      status: 'Behind',
      deadline: '2024-01-30'
    },
    {
      employee: 'Emily Davis',
      course: 'Leadership Skills',
      progress: 92,
      status: 'Ahead',
      deadline: '2024-02-05'
    },
    {
      employee: 'Alex Rodriguez',
      course: 'UX Design Fundamentals',
      progress: 67,
      status: 'On Track',
      deadline: '2024-02-10'
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
    <div className="space-y-4">
      {trainingData.map((item, index) => (
        <div key={index} className="p-4 border rounded-lg hover:shadow-sm transition-shadow">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h4 className="font-semibold text-slate-900">{item.employee}</h4>
              <p className="text-sm text-slate-600">{item.course}</p>
            </div>
            <div className="text-right">
              <Badge className={getStatusColor(item.status)}>{item.status}</Badge>
              <p className="text-sm text-slate-500 mt-1">Due: {item.deadline}</p>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Progress</span>
              <span>{item.progress}%</span>
            </div>
            <Progress value={item.progress} className="h-2" />
          </div>
        </div>
      ))}
    </div>
  );
};
