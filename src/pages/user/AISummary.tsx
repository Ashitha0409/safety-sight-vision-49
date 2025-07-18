import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bot, RefreshCw, MapPin, Clock, AlertTriangle, TrendingUp } from "lucide-react";

export default function AISummary() {
  const aiInsights = [
    {
      type: "Safety Alert",
      priority: "medium",
      time: "5 minutes ago",
      content: "Increased crowd density detected at Central Plaza. Consider alternative routes if heading to downtown area.",
      confidence: 92
    },
    {
      type: "Traffic Update", 
      priority: "low",
      time: "12 minutes ago",
      content: "Main Street traffic flow has improved by 15% compared to usual Monday patterns. Optimal time for travel.",
      confidence: 87
    },
    {
      type: "Weather Impact",
      priority: "medium", 
      time: "18 minutes ago",
      content: "Light rain may affect visibility at outdoor events. Emergency services are on standby at major venues.",
      confidence: 94
    },
    {
      type: "Security Notice",
      priority: "high",
      time: "1 hour ago",
      content: "Suspicious activity reported near East District. Local patrols have been increased. Avoid isolated areas.",
      confidence: 89
    }
  ];

  const areaAnalysis = {
    currentLocation: "Downtown Plaza",
    safetyScore: 8.2,
    riskFactors: ["High pedestrian traffic", "Limited parking"],
    recommendations: ["Use well-lit pathways", "Stay in populated areas", "Keep emergency contacts ready"]
  };

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-6">
        <h1 className="text-2xl font-bold text-foreground mb-2 flex items-center gap-2">
          <Bot className="h-6 w-6 text-primary" />
          AI Safety Summary
        </h1>
        <p className="text-muted-foreground">
          Gemini-powered analysis of your surroundings with real-time safety insights and recommendations.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main AI Feed */}
        <div className="lg:col-span-2 space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Bot className="h-5 w-5" />
                Live AI Analysis
              </CardTitle>
              <Button variant="outline" size="sm">
                <RefreshCw className="h-4 w-4 mr-2" />
                Refresh
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {aiInsights.map((insight, index) => (
                  <div key={index} className="border border-border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-2">
                        <Badge 
                          variant={
                            insight.priority === 'high' ? 'destructive' : 
                            insight.priority === 'medium' ? 'default' : 'secondary'
                          }
                        >
                          {insight.type}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {insight.confidence}% confidence
                        </Badge>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        {insight.time}
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed">{insight.content}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Area Analysis */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Current Area Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Safety Assessment</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Location</span>
                      <span className="text-sm font-medium">{areaAnalysis.currentLocation}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Safety Score</span>
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-secondary">{areaAnalysis.safetyScore}/10</span>
                        <TrendingUp className="h-4 w-4 text-secondary" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Risk Factors</h4>
                  <div className="space-y-1">
                    {areaAnalysis.riskFactors.map((factor, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <AlertTriangle className="h-3 w-3 text-warning" />
                        {factor}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <h4 className="font-semibold mb-3">AI Recommendations</h4>
                <div className="space-y-2">
                  {areaAnalysis.recommendations.map((rec, index) => (
                    <div key={index} className="flex items-start gap-2 text-sm">
                      <span className="text-secondary font-bold">•</span>
                      {rec}
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* AI Status */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">AI System Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">CCTV Analysis</span>
                  <Badge variant="default" className="bg-secondary text-secondary-foreground">Active</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Crowd Monitoring</span>
                  <Badge variant="default" className="bg-secondary text-secondary-foreground">Active</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Incident Detection</span>
                  <Badge variant="default" className="bg-secondary text-secondary-foreground">Active</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Predictive Analysis</span>
                  <Badge variant="outline">Learning</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <MapPin className="h-4 w-4 mr-2" />
                  Get Route Recommendations
                </Button>
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <AlertTriangle className="h-4 w-4 mr-2" />
                  Report Incident
                </Button>
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <Bot className="h-4 w-4 mr-2" />
                  Ask AI Assistant
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Data Sources */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Data Sources</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>• 245 Active CCTV cameras</div>
                <div>• Traffic monitoring systems</div>
                <div>• Weather service data</div>
                <div>• Emergency service feeds</div>
                <div>• User-reported incidents</div>
                <div>• Historical safety patterns</div>
              </div>
            </CardContent>
          </Card>

          {/* Gemini AI Badge */}
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="mb-2">
                  <Bot className="h-8 w-8 text-primary mx-auto" />
                </div>
                <p className="text-sm font-semibold">Powered by Gemini AI</p>
                <p className="text-xs text-muted-foreground">
                  Advanced machine learning for real-time safety analysis
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}