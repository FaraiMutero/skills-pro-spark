
import { Progress } from '@/components/ui/progress';

export const PersonalSkillsProfile = () => {
  const skills = [
    { name: 'JavaScript', level: 85, target: 90 },
    { name: 'React', level: 78, target: 85 },
    { name: 'Python', level: 65, target: 80 },
    { name: 'Leadership', level: 72, target: 85 },
    { name: 'Communication', level: 88, target: 90 },
    { name: 'Analytics', level: 58, target: 75 },
  ];

  const getProgressColor = (current: number, target: number) => {
    const percentage = (current / target) * 100;
    if (percentage >= 90) return 'bg-green-500';
    if (percentage >= 70) return 'bg-blue-500';
    if (percentage >= 50) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="space-y-4">
      {skills.map((skill, index) => (
        <div key={index} className="space-y-2">
          <div className="flex justify-between items-center">
            <h4 className="font-medium text-slate-900">{skill.name}</h4>
            <div className="text-sm text-slate-600">
              {skill.level}% / {skill.target}%
            </div>
          </div>
          <div className="space-y-1">
            <Progress 
              value={skill.level} 
              className="h-3"
            />
            <div className="flex justify-between text-xs text-slate-500">
              <span>Current: {skill.level}%</span>
              <span>Target: {skill.target}%</span>
            </div>
          </div>
        </div>
      ))}
      
      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <h4 className="font-semibold text-blue-900 mb-2">Skills Summary</h4>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-blue-700">Strong Areas:</span>
            <p className="text-blue-800">Communication, JavaScript</p>
          </div>
          <div>
            <span className="text-blue-700">Growth Areas:</span>
            <p className="text-blue-800">Analytics, Python</p>
          </div>
        </div>
      </div>
    </div>
  );
};
