
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

export const GapAnalysisChart = () => {
  const data = [
    { skill: 'JavaScript', current: 6.2, required: 8.5, gap: 2.3 },
    { skill: 'Data Science', current: 5.8, required: 8.0, gap: 2.2 },
    { skill: 'Leadership', current: 7.1, required: 8.8, gap: 1.7 },
    { skill: 'Cloud Skills', current: 6.8, required: 8.2, gap: 1.4 },
    { skill: 'Communication', current: 7.8, required: 8.5, gap: 0.7 },
  ];

  return (
    <div className="space-y-4">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="skill" 
            angle={-45}
            textAnchor="end"
            height={80}
            fontSize={12}
          />
          <YAxis domain={[0, 10]} />
          <Tooltip 
            formatter={(value, name) => [value, name === 'current' ? 'Current Level' : 'Required Level']}
          />
          <Bar dataKey="current" fill="#3b82f6" name="current" />
          <Bar dataKey="required" fill="#10b981" name="required" />
        </BarChart>
      </ResponsiveContainer>
      
      <div className="grid grid-cols-1 gap-2">
        {data.map((item) => (
          <div key={item.skill} className="flex items-center justify-between p-2 bg-slate-50 rounded">
            <span className="font-medium text-slate-700">{item.skill}</span>
            <span className={`px-2 py-1 rounded text-sm font-medium ${
              item.gap > 2 ? 'bg-red-100 text-red-800' :
              item.gap > 1 ? 'bg-yellow-100 text-yellow-800' :
              'bg-green-100 text-green-800'
            }`}>
              Gap: {item.gap}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
