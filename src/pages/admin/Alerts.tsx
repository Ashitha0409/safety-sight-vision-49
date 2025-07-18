import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Zap, MapPin, Clock, Eye, Users, Shield, CheckCircle } from "lucide-react";

export default function Alerts() {
  const alerts = [
    {
      id: "ALT-089",
      type: "Fire Detection",
      severity: "critical",
      location: "Central Plaza - Building A",
      time: "3 minutes ago",
      status: "active",
      description: "Automated fire detection system triggered. Smoke detected in multiple areas.",
      responders: 4,
      estimatedImpact: "High",
      autoDetected: true
    },
    {
      id: "ALT-088", 
      type: "Medical Emergency",
      severity: "high",
      location: "Train Station Platform 2",
      time: "8 minutes ago",
      status: "responding",
      description: "Person collapsed detected by AI video analysis. Ambulance dispatched.",
      responders: 2,
      estimatedImpact: "Medium",
      autoDetected: true
    },
    {
      id: "ALT-087",
      type: "Crowd Stampede Risk",
      severity: "high", 
      location: "Downtown Plaza",
      time: "12 minutes ago",
      status: "monitoring",
      description: "Rapid crowd density increase detected. Potential stampede conditions developing.",
      responders: 3,
      estimatedImpact: "High",
      autoDetected: true
    },
    {
      id: "ALT-086",
      type: "Suspicious Package",
      severity: "medium",
      location: "Metro Station Exit B", 
      time: "25 minutes ago",
      status: "investigating",
      description: "Unattended package detected by security cameras. Location cordoned off.",
      responders: 1,
      estimatedImpact: "Low",
      autoDetected: true
    },
    {
      id: "ALT-085",
      type: "Infrastructure Failure",
      severity: "low",
      location: "5th Avenue Bridge",
      time: "45 minutes ago",
      status: "resolved",
      description: "Automated sensors detected minor structural vibrations. Inspection completed.",
      responders: 1,
      estimatedImpact: "Low",
      autoDetected: true
    }
  ];

  const anomalyTypes = [
    { type: "Fire Detection", count: 3, trend: "+1", color: "text-alert" },
    { type: "Medical Emergency", count: 7, trend: "+2", color: "text-warning" },
    { type: "Crowd Behavior", count: 12, trend: "+5", color: "text-primary" },
    { type: "Security Threats", count: 4, trend: "0", color: "text-secondary" },
    { type: "Infrastructure", count: 8, trend: "-1", color: "text-muted-foreground" }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-alert/10 to-warning/10 rounded-lg p-6">
        <h1 className="text-2xl font-bold text-foreground mb-2 flex items-center gap-2">
          <AlertTriangle className="h-6 w-6 text-alert" />
          Alerts & Anomalies
        </h1>
        <p className="text-muted-foreground">
          Real-time automated detection and monitoring of critical events requiring immediate attention.
        </p>
      </div>

      <div className="grid lg:grid-cols-4 gap-6">
        {/* Summary Cards */}
        <div className="lg:col-span-4 grid md:grid-cols-5 gap-4">
          {anomalyTypes.map((anomaly, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <Zap className={`h-5 w-5 ${anomaly.color}`} />
                  <Badge variant="outline" className="text-xs">
                    {anomaly.trend !== "0" ? anomaly.trend : "No change"}
                  </Badge>
                </div>
                <div className="text-2xl font-bold">{anomaly.count}</div>
                <div className="text-xs text-muted-foreground">{anomaly.type}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Active Alerts */}
        <div className="lg:col-span-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-alert" />
                Active Alerts
              </CardTitle>
              <Button variant="outline" size="sm">
                Filter Alerts
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {alerts.map((alert) => (
                  <div key={alert.id} className={`p-4 rounded-lg border-l-4 ${
                    alert.severity === 'critical' ? 'border-l-alert bg-alert/5' :
                    alert.severity === 'high' ? 'border-l-warning bg-warning/5' :
                    alert.severity === 'medium' ? 'border-l-primary bg-primary/5' :
                    'border-l-secondary bg-secondary/5'
                  }`}>
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Badge 
                            variant={
                              alert.severity === 'critical' ? 'destructive' :
                              alert.severity === 'high' ? 'default' :
                              alert.severity === 'medium' ? 'secondary' : 'outline'
                            }
                            className="text-xs"
                          >
                            {alert.type}
                          </Badge>
                          {alert.autoDetected && (
                            <Badge variant="outline" className="text-xs">
                              <Zap className="h-3 w-3 mr-1" />
                              Auto-detected
                            </Badge>
                          )}
                          <span className="text-xs text-muted-foreground">{alert.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm font-medium">{alert.location}</span>
                          <span className="text-xs text-muted-foreground">({alert.id})</span>
                        </div>
                      </div>
                      <Badge 
                        variant={
                          alert.status === 'active' ? 'destructive' :
                          alert.status === 'responding' ? 'default' :
                          alert.status === 'resolved' ? 'secondary' : 'outline'
                        }
                        className="text-xs"
                      >
                        {alert.status}
                      </Badge>
                    </div>
                    
                    <p className="text-sm text-foreground mb-3">{alert.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          {alert.responders} responder{alert.responders !== 1 ? 's' : ''}
                        </div>
                        <div className="flex items-center gap-1">
                          <Shield className="h-3 w-3" />
                          {alert.estimatedImpact} impact
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4 mr-1" />
                          View Details
                        </Button>
                        {alert.status !== 'resolved' && (
                          <Button 
                            size="sm" 
                            variant={alert.severity === 'critical' ? 'alert' : 'default'}
                          >
                            Take Action
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Alert Statistics */}
          <Card>
            <CardHeader>
              <CardTitle>Today's Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Total Alerts</span>
                  <span className="font-bold text-lg">34</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Auto-Detected</span>
                  <span className="font-bold text-lg text-primary">28</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Resolved</span>
                  <span className="font-bold text-lg text-secondary">25</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Active</span>
                  <span className="font-bold text-lg text-alert">9</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Response Time Avg</span>
                  <span className="font-bold text-lg">2.1m</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Detection Systems */}
          <Card>
            <CardHeader>
              <CardTitle>Detection Systems</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Fire Detection</span>
                  <Badge variant="default" className="text-xs">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Online
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">AI Video Analysis</span>
                  <Badge variant="default" className="text-xs">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Online
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Crowd Monitoring</span>
                  <Badge variant="default" className="text-xs">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Online
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Infrastructure Sensors</span>
                  <Badge variant="secondary" className="text-xs">
                    <Clock className="h-3 w-3 mr-1" />
                    Maintenance
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Emergency Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Button variant="alert" className="w-full" size="sm">
                  <AlertTriangle className="h-4 w-4 mr-2" />
                  Mass Evacuation
                </Button>
                <Button variant="default" className="w-full" size="sm">
                  <Users className="h-4 w-4 mr-2" />
                  Emergency Broadcast
                </Button>
                <Button variant="outline" className="w-full" size="sm">
                  <Shield className="h-4 w-4 mr-2" />
                  Lock Down Area
                </Button>
                <Button variant="outline" className="w-full" size="sm">
                  <Eye className="h-4 w-4 mr-2" />
                  CCTV Override
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}