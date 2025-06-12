
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Users, Grid2x2, Book } from 'lucide-react';

type UserRole = 'executive' | 'manager' | 'employee';

interface AIAssistantProps {
  userRole: UserRole;
}

interface ChatMessage {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  attachments?: Array<{ type: 'chart' | 'recommendation'; data: any }>;
}

export const AIAssistant = ({ userRole }: AIAssistantProps) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      type: 'assistant',
      content: `Hello! I'm your SkillsPro AI Assistant. I can help you with skills analysis, training recommendations, and insights based on your ${userRole} role. What would you like to know?`,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const roleQuestions = {
    executive: [
      "What are our biggest skill gaps company-wide?",
      "Show me ROI from Q1 training investments",
      "Which departments need the most attention?",
      "Compare our skills readiness to industry benchmarks"
    ],
    manager: [
      "What are my team's biggest skill gaps?",
      "Recommend training for a data analyst role",
      "Show training progress for my direct reports",
      "Create development plan for Sarah Johnson"
    ],
    employee: [
      "What skills should I develop for career growth?",
      "Recommend learning paths for my role",
      "Show my progress compared to peers",
      "Find relevant certifications for me"
    ]
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    // Simulate AI response
    const aiResponse: ChatMessage = {
      id: (Date.now() + 1).toString(),
      type: 'assistant',
      content: `Based on your query about "${inputValue}", I've analyzed the current data. Here are the key insights for your ${userRole} role:

• Gap Analysis: JavaScript and Data Science show the highest gaps
• Recommended Action: Focus on technical training programs
• Timeline: 3-6 months for significant improvement
• Budget Impact: Estimated $15K investment with 40% ROI expected

Would you like me to create a detailed action plan?`,
      timestamp: new Date(),
      attachments: [
        { type: 'chart', data: { chartType: 'bar', skills: ['JavaScript', 'Data Science', 'Leadership'] } }
      ]
    };

    setMessages([...messages, userMessage, aiResponse]);
    setInputValue('');
  };

  const handleQuestionClick = (question: string) => {
    setInputValue(question);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">AI Assistant</h2>
          <p className="text-muted-foreground">Get insights and recommendations powered by AI</p>
        </div>
        <Badge className="bg-green-100 text-green-800">
          {userRole.charAt(0).toUpperCase() + userRole.slice(1)} Mode
        </Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Quick Questions */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Quick Questions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {roleQuestions[userRole].map((question, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                className="w-full text-left h-auto p-3 justify-start whitespace-normal"
                onClick={() => handleQuestionClick(question)}
              >
                {question}
              </Button>
            ))}
          </CardContent>
        </Card>

        {/* Chat Interface */}
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Search className="w-5 h-5" />
              <span>Chat with AI</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {/* Messages */}
            <div className="h-96 overflow-y-auto space-y-4 mb-4 p-4 bg-slate-50 rounded-lg">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.type === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-white border border-slate-200'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                    {message.attachments && (
                      <div className="mt-2 p-2 bg-slate-100 rounded border">
                        <p className="text-xs text-slate-600">📊 Chart: Skills Gap Analysis</p>
                      </div>
                    )}
                    <p className="text-xs opacity-70 mt-1">
                      {message.timestamp.toLocaleTimeString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="flex space-x-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask me about skills, training, or analytics..."
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                className="flex-1"
              />
              <Button onClick={handleSendMessage} className="bg-blue-600 hover:bg-blue-700">
                <Search className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* AI Capabilities */}
      <Card>
        <CardHeader>
          <CardTitle>AI Capabilities</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg">
              <Users className="w-6 h-6 text-blue-600 mt-1" />
              <div>
                <h4 className="font-semibold text-slate-900">Skills Analysis</h4>
                <p className="text-sm text-muted-foreground">Identify gaps, trends, and opportunities across your organization</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-4 bg-green-50 rounded-lg">
              <Grid2x2 className="w-6 h-6 text-green-600 mt-1" />
              <div>
                <h4 className="font-semibold text-slate-900">Smart Recommendations</h4>
                <p className="text-sm text-muted-foreground">Get personalized training and development suggestions</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-4 bg-purple-50 rounded-lg">
              <Book className="w-6 h-6 text-purple-600 mt-1" />
              <div>
                <h4 className="font-semibold text-slate-900">Progress Tracking</h4>
                <p className="text-sm text-muted-foreground">Monitor learning outcomes and ROI in real-time</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
