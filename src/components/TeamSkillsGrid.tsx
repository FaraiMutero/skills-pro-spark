
interface TeamSkillsGridProps {
  selectedEmployee: string | null;
}

export const TeamSkillsGrid = ({ selectedEmployee }: TeamSkillsGridProps) => {
  const skills = ['JavaScript', 'React', 'Node.js', 'Python', 'SQL', 'Leadership', 'Communication', 'Analytics'];
  
  const teamData = {
    '1': { name: 'Sarah Johnson', skills: [9, 8, 7, 6, 8, 8, 9, 7] },
    '2': { name: 'Mike Chen', skills: [6, 5, 4, 8, 9, 6, 7, 9] },
    '3': { name: 'Emily Davis', skills: [7, 8, 6, 7, 6, 9, 9, 8] },
    '4': { name: 'Alex Rodriguez', skills: [8, 9, 5, 5, 5, 7, 8, 6] },
  };

  const getSkillColor = (level: number) => {
    if (level >= 8) return 'bg-green-500';
    if (level >= 6) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const data = selectedEmployee ? [teamData[selectedEmployee as keyof typeof teamData]] : Object.values(teamData);

  return (
    <div className="space-y-4">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left p-2 font-semibold text-slate-700">Employee</th>
              {skills.map((skill) => (
                <th key={skill} className="text-center p-2 font-semibold text-slate-700 min-w-[80px]">
                  {skill}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((employee, index) => (
              <tr key={index} className="border-t">
                <td className="p-2 font-medium text-slate-900">{employee.name}</td>
                {employee.skills.map((level, skillIndex) => (
                  <td key={skillIndex} className="p-2 text-center">
                    <div className="flex items-center justify-center">
                      <div 
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm ${getSkillColor(level)}`}
                      >
                        {level}
                      </div>
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="flex items-center justify-center space-x-6 text-sm">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-red-500 rounded-full"></div>
          <span>Needs Development (1-5)</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
          <span>Competent (6-7)</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-green-500 rounded-full"></div>
          <span>Expert (8-10)</span>
        </div>
      </div>
    </div>
  );
};
