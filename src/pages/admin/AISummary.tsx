import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Brain, Eye, AlertTriangle, Users, MapPin, Clock, Zap, Camera } from "lucide-react";

export default function AISummary() {
  const aiInsights = [
    {
      id: "AI-001",
      timestamp: "2 minutes ago",
      severity: "high",
      type: "Crowd Behavior",
      location: "Downtown Plaza",
      summary: "AI detected unusual crowd movement patterns suggesting potential stampede risk. Crowd density increasing rapidly in central area.",
      confidence: 92,
      cameras: ["CAM-12", "CAM-15", "CAM-18"],
      action: "Deploy crowd control immediately"
    },
    {
      id: "AI-002", 
      timestamp: "8 minutes ago",
      severity: "medium",
      type: "Suspicious Activity",
      location: "Train Station",
      summary: "Individual loitering near restricted area for 15+ minutes. Behavior pattern matches security concerns database.",
      confidence: 78,
      cameras: ["CAM-23", "CAM-24"],
      action: "Send security personnel for investigation"
    },
    {
      id: "AI-003",
      timestamp: "12 minutes ago", 
      severity: "low",
      type: "Infrastructure",
      location: "Main Street Bridge",
      summary: "Automated detection of minor structural vibration anomaly. May indicate maintenance requirement.",
      confidence: 65,
      cameras: ["CAM-31"],
      action: "Schedule routine inspection"
    }
  ];

  const liveFeeds = [
    { id: "CAM-12", location: "Downtown Plaza", status: "active", alerts: 2 },
    { id: "CAM-15", location: "Downtown Plaza", status: "active", alerts: 1 },
    { id: "CAM-23", location: "Train Station", status: "active", alerts: 1 },
    { id: "CAM-31", location: "Main Street Bridge", status: "active", alerts: 0 },
    { id: "CAM-05", location: "City Park", status: "active", alerts: 0 },
    { id: "CAM-18", location: "Central Mall", status: "maintenance", alerts: 0 }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-6">
        <h1 className="text-2xl font-bold text-foreground mb-2 flex items-center gap-2">
          <Brain className="h-6 w-6 text-primary" />
          AI Situational Summary
        </h1>
        <p className="text-muted-foreground">
          Real-time AI analysis of CCTV feeds with automated threat detection and behavioral analysis.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* AI Insights */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-warning" />
                Live AI Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {aiInsights.map((insight) => (
                  <div key={insight.id} className={`p-4 rounded-lg border-l-4 ${
                    insight.severity === 'high' ? 'border-l-alert bg-alert/5' :
                    insight.severity === 'medium' ? 'border-l-warning bg-warning/5' :
                    'border-l-secondary bg-secondary/5'
                  }`}>
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Badge 
                            variant={
                              insight.severity === 'high' ? 'destructive' :
                              insight.severity === 'medium' ? 'default' : 'secondary'
                            }
                            className="text-xs"
                          >
                            {insight.type}
                          </Badge>
                          <span className="text-xs text-muted-foreground">{insight.timestamp}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm font-medium">{insight.location}</span>
                          <span className="text-xs text-muted-foreground">({insight.id})</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-muted-foreground">Confidence</div>
                        <div className="text-sm font-medium">{insight.confidence}%</div>
                      </div>
                    </div>
                    
                    <p className="text-sm text-foreground mb-3">{insight.summary}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Camera className="h-4 w-4 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">
                          Cameras: {insight.cameras.join(", ")}
                        </span>
                      </div>
                      <Button 
                        size="sm" 
                        variant={insight.severity === 'high' ? 'alert' : 'default'}
                      >
                        {insight.action}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* AI Statistics */}
          <Card>
            <CardHeader>
              <CardTitle>AI Performance Metrics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <div className="text-2xl font-bold text-primary">127</div>
                  <div className="text-xs text-muted-foreground">Alerts Today</div>
                </div>
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <div className="text-2xl font-bold text-secondary">94%</div>
                  <div className="text-xs text-muted-foreground">Accuracy Rate</div>
                </div>
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <div className="text-2xl font-bold text-warning">2.1s</div>
                  <div className="text-xs text-muted-foreground">Avg Detection</div>
                </div>
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <div className="text-2xl font-bold text-alert">8</div>
                  <div className="text-xs text-muted-foreground">Critical Alerts</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Live Camera Feeds */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="h-5 w-5" />
                Live Camera Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {liveFeeds.map((feed) => (
                  <div key={feed.id} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <div>
                      <div className="font-medium text-sm">{feed.id}</div>
                      <div className="text-xs text-muted-foreground">{feed.location}</div>
                    </div>
                    <div className="text-right">
                      <Badge 
                        variant={feed.status === 'active' ? 'default' : 'secondary'}
                        className="text-xs mb-1"
                      >
                        {feed.status}
                      </Badge>
                      {feed.alerts > 0 && (
                        <div className="text-xs text-alert">
                          {feed.alerts} alert{feed.alerts !== 1 ? 's' : ''}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* AI Model Status */}
          <Card>
            <CardHeader>
              <CardTitle>AI Model Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Crowd Detection</span>
                  <Badge variant="default" className="text-xs">Active</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Behavior Analysis</span>
                  <Badge variant="default" className="text-xs">Active</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Object Recognition</span>
                  <Badge variant="default" className="text-xs">Active</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Anomaly Detection</span>
                  <Badge variant="secondary" className="text-xs">Training</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Button variant="alert" className="w-full" size="sm">
                  <AlertTriangle className="h-4 w-4 mr-2" />
                  Emergency Override
                </Button>
                <Button variant="default" className="w-full" size="sm">
                  <Camera className="h-4 w-4 mr-2" />
                  Camera Controls
                </Button>
                <Button variant="outline" className="w-full" size="sm">
                  <Brain className="h-4 w-4 mr-2" />
                  AI Settings
                </Button>
                <Button variant="outline" className="w-full" size="sm">
                  <Clock className="h-4 w-4 mr-2" />
                  Historical Analysis
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}