
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, FileText } from 'lucide-react';

export const LearningRecommendations = () => {
  const recommendations = [
    {
      title: 'Advanced Python for Data Science',
      description: 'Build on your existing Python skills to master data analysis and machine learning',
      duration: '6 weeks',
      difficulty: 'Intermediate',
      enrollees: 847,
      relevance: 95,
      skills: ['Python', 'Data Science', 'Analytics']
    },
    {
      title: 'Leadership Fundamentals',
      description: 'Develop essential leadership skills for career advancement',
      duration: '4 weeks',
      difficulty: 'Beginner',
      enrollees: 1203,
      relevance: 88,
      skills: ['Leadership', 'Communication', 'Management']
    },
    {
      title: 'React Advanced Patterns',
      description: 'Master advanced React patterns and best practices',
      duration: '3 weeks',
      difficulty: 'Advanced',
      enrollees: 542,
      relevance: 92,
      skills: ['React', 'JavaScript', 'Frontend']
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {recommendations.map((course, index) => (
        <div key={index} className="p-6 border rounded-lg hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start mb-4">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{course.title}</h3>
              <p className="text-slate-600 mb-3">{course.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-3">
                {course.skills.map((skill) => (
                  <Badge key={skill} variant="outline" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div className="ml-4 text-right">
              <div className="text-2xl font-bold text-blue-600 mb-1">{course.relevance}%</div>
              <div className="text-sm text-slate-500">Match</div>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 text-sm text-slate-600">
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="w-4 h-4" />
                <span>{course.enrollees.toLocaleString()} enrolled</span>
              </div>
              <Badge className={getDifficultyColor(course.difficulty)}>
                {course.difficulty}
              </Badge>
            </div>
            
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                <FileText className="w-4 h-4 mr-1" />
                Details
              </Button>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                Enroll Now
              </Button>
            </div>
          </div>
        </div>
      ))}
      
      <div className="text-center">
        <Button variant="outline" size="lg">
          View All Recommendations
        </Button>
      </div>
    </div>
  );
};
