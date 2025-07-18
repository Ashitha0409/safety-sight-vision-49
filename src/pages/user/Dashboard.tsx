import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, MapPin, Users, AlertTriangle, Shield, TrendingUp } from "lucide-react";

export default function UserDashboard() {
  const currentArea = {
    name: "Downtown Plaza",
    status: "Low Risk",
    crowdLevel: "Moderate",
    lastUpdated: "2 minutes ago"
  };

  const nearbyAlerts = [
    { type: "Traffic", location: "Main St & 5th Ave", time: "5 min ago", severity: "low" },
    { type: "Event", location: "Central Park", time: "15 min ago", severity: "medium" },
    { type: "Weather", location: "City Center", time: "30 min ago", severity: "low" }
  ];

  const safetyMetrics = [
    { label: "Safety Score", value: "8.2/10", trend: "up", icon: Shield },
    { label: "Crowd Density", value: "42%", trend: "stable", icon: Users },
    { label: "Response Time", value: "3.2 min", trend: "down", icon: AlertTriangle }
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-6">
        <h1 className="text-2xl font-bold text-foreground mb-2">Welcome to your Safety Dashboard</h1>
        <p className="text-muted-foreground">
          Stay informed about your surroundings and access real-time safety information.
        </p>
      </div>

      {/* Current Area Status */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-primary" />
            Current Area Status
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-4 gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Location</p>
              <p className="font-semibold">{currentArea.name}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Safety Status</p>
              <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                {currentArea.status}
              </Badge>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Crowd Level</p>
              <Badge variant="outline">{currentArea.crowdLevel}</Badge>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Last Updated</p>
              <p className="text-sm">{currentArea.lastUpdated}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Safety Metrics */}
      <div className="grid md:grid-cols-3 gap-6">
        {safetyMetrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{metric.label}</p>
                    <p className="text-2xl font-bold">{metric.value}</p>
                  </div>
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="flex items-center gap-1 mt-2">
                  <TrendingUp className={`h-4 w-4 ${
                    metric.trend === 'up' ? 'text-secondary' : 
                    metric.trend === 'down' ? 'text-alert' : 'text-muted-foreground'
                  }`} />
                  <span className="text-xs text-muted-foreground capitalize">{metric.trend}</span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-4 gap-4">
            <Button variant="hero" className="h-16">
              <div className="text-center">
                <AlertTriangle className="h-6 w-6 mx-auto mb-1" />
                <div className="text-sm">Report Incident</div>
              </div>
            </Button>
            <Button variant="safe" className="h-16">
              <div className="text-center">
                <MapPin className="h-6 w-6 mx-auto mb-1" />
                <div className="text-sm">Find Safe Route</div>
              </div>
            </Button>
            <Button variant="outline" className="h-16">
              <div className="text-center">
                <Users className="h-6 w-6 mx-auto mb-1" />
                <div className="text-sm">Lost & Found</div>
              </div>
            </Button>
            <Button variant="outline" className="h-16">
              <div className="text-center">
                <Eye className="h-6 w-6 mx-auto mb-1" />
                <div className="text-sm">AI Summary</div>
              </div>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Nearby Alerts */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-warning" />
            Nearby Alerts
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {nearbyAlerts.map((alert, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Badge 
                    variant={alert.severity === 'high' ? 'destructive' : alert.severity === 'medium' ? 'default' : 'secondary'}
                    className="text-xs"
                  >
                    {alert.type}
                  </Badge>
                  <div>
                    <p className="font-medium text-sm">{alert.location}</p>
                    <p className="text-xs text-muted-foreground">{alert.time}</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm">View</Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Crowd Density Map Placeholder */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" />
            Live Crowd Density Map
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 bg-muted/30 rounded-lg flex items-center justify-center border-2 border-dashed border-border">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
              <p className="text-muted-foreground">Interactive crowd density heatmap</p>
              <p className="text-sm text-muted-foreground">Real-time visualization of crowd levels</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}