
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SkillsHeatmap } from '@/components/SkillsHeatmap';
import { GapAnalysisChart } from '@/components/GapAnalysisChart';
import { ROIMetrics } from '@/components/ROIMetrics';
import { Users, Clock, FileText, Grid2x2 } from 'lucide-react';

export const ExecutiveDashboard = () => {
  const kpiData = [
    {
      title: 'Total Employees',
      value: '1,247',
      change: '+12%',
      icon: Users,
      color: 'text-blue-600'
    },
    {
      title: 'Skills Assessed',
      value: '342',
      change: '+8%',
      icon: Grid2x2,
      color: 'text-green-600'
    },
    {
      title: 'Training Hours',
      value: '15,680',
      change: '+23%',
      icon: Clock,
      color: 'text-purple-600'
    },
    {
      title: 'Certifications',
      value: '89',
      change: '+15%',
      icon: FileText,
      color: 'text-orange-600'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">Executive Dashboard</h2>
          <p className="text-muted-foreground">Strategic overview of organizational skills and training</p>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpiData.map((kpi, index) => {
          const Icon = kpi.icon;
          return (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{kpi.title}</p>
                    <p className="text-3xl font-bold text-slate-900">{kpi.value}</p>
                    <p className="text-sm text-green-600 font-medium">{kpi.change} from last month</p>
                  </div>
                  <div className={`p-3 rounded-full bg-slate-100 ${kpi.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Main Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="col-span-1 lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Grid2x2 className="w-5 h-5" />
              <span>Strategic Skills Heatmap</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <SkillsHeatmap />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Skills Gap Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <GapAnalysisChart />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>ROI Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <ROIMetrics />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
