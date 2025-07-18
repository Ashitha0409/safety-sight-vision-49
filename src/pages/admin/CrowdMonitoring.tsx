import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, TrendingUp, MapPin, Clock, AlertTriangle, BarChart3 } from "lucide-react";

export default function CrowdMonitoring() {
  const predictions = [
    { time: "Now", density: 74, prediction: 82, trend: "increasing" },
    { time: "15 min", density: 82, prediction: 89, trend: "increasing" },
    { time: "30 min", density: 89, prediction: 95, trend: "critical" },
    { time: "45 min", density: 95, prediction: 87, trend: "decreasing" },
    { time: "60 min", density: 87, prediction: 76, trend: "decreasing" }
  ];

  const zones = [
    { name: "Downtown Plaza", current: 89, max: 150, status: "critical", cameras: 12 },
    { name: "Central Mall", current: 67, max: 200, status: "moderate", cameras: 8 },
    { name: "Train Station", current: 134, max: 180, status: "high", cameras: 15 },
    { name: "City Park", current: 45, max: 300, status: "normal", cameras: 6 },
    { name: "Sports Complex", current: 78, max: 500, status: "normal", cameras: 10 }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-primary/10 to-warning/10 rounded-lg p-6">
        <h1 className="text-2xl font-bold text-foreground mb-2 flex items-center gap-2">
          <Users className="h-6 w-6 text-primary" />
          Crowd Monitoring & 15-Minute Prediction
        </h1>
        <p className="text-muted-foreground">
          Real-time crowd density analysis with AI-powered predictive modeling for proactive crowd management.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Live Map */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Live Crowd Density Map
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-96 bg-muted/30 rounded-lg flex items-center justify-center border-2 border-dashed border-border">
                <div className="text-center">
                  <Users className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <p className="text-lg text-muted-foreground mb-2">Interactive Crowd Density Heatmap</p>
                  <p className="text-sm text-muted-foreground">Real-time visualization with AI-powered overlays</p>
                  <div className="flex justify-center gap-4 mt-4">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-secondary rounded"></div>
                      <span className="text-xs">Normal</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-warning rounded"></div>
                      <span className="text-xs">Moderate</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-alert rounded"></div>
                      <span className="text-xs">Critical</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Prediction Graph */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                15-Minute Crowd Prediction
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {predictions.map((pred, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="text-sm font-medium w-16">{pred.time}</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm">Current: {pred.density}%</span>
                          <span className="text-sm text-muted-foreground">→</span>
                          <span className="text-sm font-medium">Predicted: {pred.prediction}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${
                              pred.prediction > 90 ? 'bg-alert' : 
                              pred.prediction > 70 ? 'bg-warning' : 'bg-secondary'
                            }`}
                            style={{ width: `${pred.prediction}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <Badge 
                      variant={
                        pred.trend === 'critical' ? 'destructive' :
                        pred.trend === 'increasing' ? 'default' : 'secondary'
                      }
                      className="text-xs"
                    >
                      {pred.trend}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Zone Status */}
          <Card>
            <CardHeader>
              <CardTitle>Zone Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {zones.map((zone, index) => (
                  <div key={index} className="p-3 border border-border rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-sm">{zone.name}</h4>
                      <Badge 
                        variant={
                          zone.status === 'critical' ? 'destructive' :
                          zone.status === 'high' ? 'default' :
                          zone.status === 'moderate' ? 'secondary' : 'outline'
                        }
                        className="text-xs"
                      >
                        {zone.status}
                      </Badge>
                    </div>
                    <div className="text-xs text-muted-foreground space-y-1">
                      <div>{zone.current}/{zone.max} people</div>
                      <div>{Math.round((zone.current/zone.max)*100)}% capacity</div>
                      <div>{zone.cameras} cameras active</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* AI Insights */}
          <Card>
            <CardHeader>
              <CardTitle>AI Predictions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-alert/10 rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <AlertTriangle className="h-4 w-4 text-alert" />
                    <span className="font-medium">Critical Alert</span>
                  </div>
                  <p className="text-xs">Downtown Plaza expected to reach 95% capacity in 30 minutes.</p>
                </div>
                <div className="p-3 bg-warning/10 rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <TrendingUp className="h-4 w-4 text-warning" />
                    <span className="font-medium">Trend Alert</span>
                  </div>
                  <p className="text-xs">Train Station crowd increasing faster than normal for this time.</p>
                </div>
                <div className="p-3 bg-secondary/10 rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <Clock className="h-4 w-4 text-secondary" />
                    <span className="font-medium">Recommendation</span>
                  </div>
                  <p className="text-xs">Deploy crowd control measures to Plaza within 15 minutes.</p>
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
                  Issue Crowd Alert
                </Button>
                <Button variant="default" className="w-full" size="sm">
                  <Users className="h-4 w-4 mr-2" />
                  Deploy Crowd Control
                </Button>
                <Button variant="outline" className="w-full" size="sm">
                  <MapPin className="h-4 w-4 mr-2" />
                  Update Zone Limits
                </Button>
                <Button variant="outline" className="w-full" size="sm">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  Generate Report
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}