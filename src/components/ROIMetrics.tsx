
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

export const ROIMetrics = () => {
  const roiData = [
    { month: 'Jan', investment: 45000, improvement: 12000, roi: 26.7 },
    { month: 'Feb', investment: 52000, improvement: 18000, roi: 34.6 },
    { month: 'Mar', investment: 48000, improvement: 22000, roi: 45.8 },
    { month: 'Apr', investment: 55000, improvement: 28000, roi: 50.9 },
    { month: 'May', investment: 60000, improvement: 35000, roi: 58.3 },
    { month: 'Jun', investment: 58000, improvement: 40000, roi: 69.0 },
  ];

  const metrics = [
    { label: 'Total Investment', value: '$318K', change: '+15%' },
    { label: 'Performance Lift', value: '42%', change: '+8%' },
    { label: 'Retention Rate', value: '94%', change: '+5%' },
    { label: 'Avg ROI', value: '47.5%', change: '+12%' },
  ];

  return (
    <div className="space-y-6">
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={roiData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip formatter={(value) => [`${value}%`, 'ROI']} />
          <Line 
            type="monotone" 
            dataKey="roi" 
            stroke="#3b82f6" 
            strokeWidth={3}
            dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
      
      <div className="grid grid-cols-2 gap-4">
        {metrics.map((metric, index) => (
          <div key={index} className="text-center">
            <p className="text-2xl font-bold text-slate-900">{metric.value}</p>
            <p className="text-sm text-slate-600">{metric.label}</p>
            <p className="text-sm text-green-600 font-medium">{metric.change}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
