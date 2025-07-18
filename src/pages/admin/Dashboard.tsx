import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Users, AlertTriangle, Shield, TrendingUp, TrendingDown, MapPin, Clock } from "lucide-react";

export default function AdminDashboard() {
  const overviewStats = [
    { 
      label: "Total Incidents Today", 
      value: "23", 
      change: "+12%", 
      trend: "up", 
      icon: AlertTriangle,
      color: "text-alert"
    },
    { 
      label: "Active Alerts", 
      value: "8", 
      change: "-15%", 
      trend: "down", 
      icon: Shield,
      color: "text-warning"
    },
    { 
      label: "Crowd Density Peak", 
      value: "74%", 
      change: "+5%", 
      trend: "up", 
      icon: Users,
      color: "text-primary"
    },
    { 
      label: "Response Time Avg", 
      value: "2.3m", 
      change: "-8%", 
      trend: "down", 
      icon: Clock,
      color: "text-secondary"
    }
  ];

  const recentIncidents = [
    {
      id: "INC-089",
      type: "Medical Emergency",
      location: "Central Plaza",
      time: "3 min ago",
      severity: "high",
      status: "responding",
      responders: 2
    },
    {
      id: "INC-088",
      type: "Suspicious Activity", 
      location: "Main Street Bridge",
      time: "12 min ago",
      severity: "medium",
      status: "investigating",
      responders: 1
    },
    {
      id: "INC-087",
      type: "Infrastructure Issue",
      location: "5th Avenue",
      time: "25 min ago", 
      severity: "low",
      status: "resolved",
      responders: 1
    }
  ];

  const crowdHotspots = [
    { location: "Downtown Plaza", density: 89, status: "critical" },
    { location: "Central Mall", density: 67, status: "moderate" },
    { location: "City Park", density: 45, status: "normal" },
    { location: "Train Station", density: 78, status: "high" }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-6">
        <h1 className="text-2xl font-bold text-foreground mb-2 flex items-center gap-2">
          <Shield className="h-6 w-6 text-primary" />
          Admin Dashboard
        </h1>
        <p className="text-muted-foreground">
          Real-time overview of city safety status, incidents, and emergency response coordination.
        </p>
      </div>

      {/* Overview Stats */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {overviewStats.map((stat, index) => {
          const Icon = stat.icon;
          const TrendIcon = stat.trend === 'up' ? TrendingUp : TrendingDown;
          return (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className={`p-2 rounded-lg bg-muted/50`}>
                    <Icon className={`h-5 w-5 ${stat.color}`} />
                  </div>
                  <div className={`flex items-center gap-1 text-sm ${
                    stat.trend === 'up' ? 'text-alert' : 'text-secondary'
                  }`}>
                    <TrendIcon className="h-4 w-4" />
                    {stat.change}
                  </div>
                </div>
                <div>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Recent Incidents */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-alert" />
                Recent Incidents
              </CardTitle>
              <Button variant="outline" size="sm">View All</Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentIncidents.map((incident) => (
                  <div key={incident.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div className="flex items-center gap-4">
                      <Badge 
                        variant={
                          incident.severity === 'high' ? 'destructive' : 
                          incident.severity === 'medium' ? 'default' : 'secondary'
                        }
                        className="text-xs"
                      >
                        {incident.type}
                      </Badge>
                      <div>
                        <p className="font-medium text-sm">{incident.location}</p>
                        <p className="text-xs text-muted-foreground">{incident.id} • {incident.time}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant="outline" className="mb-1">
                        {incident.status}
                      </Badge>
                      <p className="text-xs text-muted-foreground">
                        {incident.responders} responder{incident.responders !== 1 ? 's' : ''}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Crowd Hotspots */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Crowd Hotspots
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {crowdHotspots.map((spot, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-sm">{spot.location}</p>
                      <p className="text-xs text-muted-foreground">{spot.density}% capacity</p>
                    </div>
                    <Badge 
                      variant={
                        spot.status === 'critical' ? 'destructive' : 
                        spot.status === 'high' ? 'default' : 
                        spot.status === 'moderate' ? 'secondary' : 'outline'
                      }
                      className="text-xs"
                    >
                      {spot.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-4 gap-4">
            <Button variant="alert" className="h-16">
              <div className="text-center">
                <AlertTriangle className="h-6 w-6 mx-auto mb-1" />
                <div className="text-sm">Emergency Alert</div>
              </div>
            </Button>
            <Button variant="default" className="h-16">
              <div className="text-center">
                <MapPin className="h-6 w-6 mx-auto mb-1" />
                <div className="text-sm">Dispatch Response</div>
              </div>
            </Button>
            <Button variant="outline" className="h-16">
              <div className="text-center">
                <Users className="h-6 w-6 mx-auto mb-1" />
                <div className="text-sm">Crowd Control</div>
              </div>
            </Button>
            <Button variant="outline" className="h-16">
              <div className="text-center">
                <Eye className="h-6 w-6 mx-auto mb-1" />
                <div className="text-sm">Monitor CCTV</div>
              </div>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Live Map Placeholder */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-primary" />
            Live City Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 bg-muted/30 rounded-lg flex items-center justify-center border-2 border-dashed border-border">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
              <p className="text-muted-foreground">Real-time city safety map</p>
              <p className="text-sm text-muted-foreground">Incidents, crowd density, and responder locations</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}