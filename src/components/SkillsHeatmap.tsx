
import { Card } from '@/components/ui/card';

export const SkillsHeatmap = () => {
  const departments = ['Engineering', 'Product', 'Marketing', 'Sales', 'HR', 'Finance'];
  const skills = ['Technical', 'Leadership', 'Communication', 'Analytics', 'Creativity'];
  
  // Mock data - values from 0-10 representing skill levels
  const heatmapData = [
    [8.5, 6.2, 7.1, 9.2, 5.8, 6.5], // Technical
    [5.2, 8.7, 6.8, 7.2, 8.5, 7.1], // Leadership
    [7.8, 7.5, 8.9, 8.2, 8.7, 6.8], // Communication
    [9.1, 7.8, 6.2, 5.8, 6.5, 8.9], // Analytics
    [6.5, 8.2, 9.1, 7.5, 7.8, 5.2], // Creativity
  ];

  const getColorIntensity = (value: number) => {
    if (value >= 8.5) return 'bg-green-500';
    if (value >= 7.5) return 'bg-green-400';
    if (value >= 6.5) return 'bg-yellow-400';
    if (value >= 5.5) return 'bg-orange-400';
    return 'bg-red-400';
  };

  return (
    <div className="space-y-4">
      <div className="grid gap-1" style={{ gridTemplateColumns: `120px repeat(${departments.length}, 1fr)` }}>
        {/* Header */}
        <div></div>
        {departments.map((dept) => (
          <div key={dept} className="text-center text-sm font-medium text-slate-600 p-2">
            {dept}
          </div>
        ))}
        
        {/* Heatmap rows */}
        {skills.map((skill, skillIndex) => (
          <>
            <div key={skill} className="text-sm font-medium text-slate-700 p-2 text-right">
              {skill}
            </div>
            {departments.map((dept, deptIndex) => {
              const value = heatmapData[skillIndex][deptIndex];
              return (
                <Card
                  key={`${skill}-${dept}`}
                  className={`h-12 flex items-center justify-center text-white font-semibold text-sm hover:scale-105 transition-transform cursor-pointer ${getColorIntensity(value)}`}
                >
                  {value}
                </Card>
              );
            })}
          </>
        ))}
      </div>
      
      {/* Legend */}
      <div className="flex items-center justify-center space-x-6 mt-4">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-red-400 rounded"></div>
          <span className="text-sm text-slate-600">Needs Improvement (0-5.5)</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-yellow-400 rounded"></div>
          <span className="text-sm text-slate-600">Developing (5.5-7.5)</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-green-400 rounded"></div>
          <span className="text-sm text-slate-600">Proficient (7.5+)</span>
        </div>
      </div>
    </div>
  );
};
