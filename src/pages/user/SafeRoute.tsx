import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Navigation, MapPin, Clock, Users, AlertTriangle, Route } from "lucide-react";

export default function SafeRoute() {
  const routeOptions = [
    {
      id: 1,
      name: "Recommended Safe Route",
      distance: "2.3 km",
      duration: "28 min",
      safety: "High",
      crowdLevel: "Low",
      highlights: ["Well-lit streets", "CCTV coverage", "Emergency stations"]
    },
    {
      id: 2, 
      name: "Fastest Route",
      distance: "1.8 km",
      duration: "22 min",
      safety: "Medium",
      crowdLevel: "High",
      highlights: ["Shortest distance", "Heavy traffic", "Crowded areas"]
    },
    {
      id: 3,
      name: "Scenic Safe Route", 
      distance: "2.7 km",
      duration: "32 min",
      safety: "High",
      crowdLevel: "Low",
      highlights: ["Park pathways", "Good lighting", "Low crime rate"]
    }
  ];

  const safetyFeatures = [
    { icon: Users, label: "Crowd Avoidance", description: "Routes avoid high-density areas" },
    { icon: AlertTriangle, label: "Real-time Alerts", description: "Live updates on incidents" },
    { icon: MapPin, label: "Safe Points", description: "Emergency stations along route" },
    { icon: Clock, label: "Time Optimization", description: "Optimal timing based on safety data" }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-secondary/10 to-primary/10 rounded-lg p-6">
        <h1 className="text-2xl font-bold text-foreground mb-2 flex items-center gap-2">
          <Navigation className="h-6 w-6 text-secondary" />
          Safe Route Finder
        </h1>
        <p className="text-muted-foreground">
          Find the safest route to your destination with real-time crowd and safety analysis.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Route Planning */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Plan Your Route</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="from">From</Label>
                <div className="flex gap-2">
                  <Input 
                    id="from" 
                    placeholder="Current location" 
                    value="Downtown Plaza, Main Street"
                    className="flex-1"
                  />
                  <Button variant="outline" size="icon">
                    <MapPin className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="to">To</Label>
                <div className="flex gap-2">
                  <Input 
                    id="to" 
                    placeholder="Enter destination"
                    className="flex-1"
                  />
                  <Button variant="outline" size="icon">
                    <MapPin className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="time">Departure Time</Label>
                  <Input id="time" type="time" defaultValue="14:30" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="priority">Priority</Label>
                  <select className="w-full p-2 border border-border rounded-md">
                    <option>Safety First</option>
                    <option>Balanced</option>
                    <option>Speed First</option>
                  </select>
                </div>
              </div>

              <Button variant="hero" className="w-full">
                <Route className="h-4 w-4 mr-2" />
                Find Safe Routes
              </Button>
            </CardContent>
          </Card>

          {/* Route Options */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Route Options</h3>
            {routeOptions.map((route) => (
              <Card key={route.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-semibold">{route.name}</h4>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                        <span>{route.distance}</span>
                        <span>{route.duration}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Badge 
                        variant={route.safety === 'High' ? 'default' : 'secondary'}
                        className={route.safety === 'High' ? 'bg-secondary text-secondary-foreground' : ''}
                      >
                        {route.safety} Safety
                      </Badge>
                      <Badge variant="outline">
                        {route.crowdLevel} Crowd
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-3">
                    {route.highlights.map((highlight, index) => (
                      <span key={index} className="text-xs bg-muted px-2 py-1 rounded">
                        {highlight}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button 
                      variant={route.id === 1 ? "default" : "outline"} 
                      className="flex-1"
                    >
                      Select Route
                    </Button>
                    <Button variant="ghost" size="sm">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Live Map Placeholder */}
          <Card>
            <CardHeader>
              <CardTitle>Live Route Map</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-muted/30 rounded-lg flex items-center justify-center border-2 border-dashed border-border">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                  <p className="text-muted-foreground">Interactive route map</p>
                  <p className="text-sm text-muted-foreground">Real-time crowd and safety overlay</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Safety Features */}
          <Card>
            <CardHeader>
              <CardTitle>Safety Features</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {safetyFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="flex gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Icon className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">{feature.label}</p>
                        <p className="text-xs text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Current Conditions */}
          <Card>
            <CardHeader>
              <CardTitle>Current Conditions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm">Traffic Level</span>
                  <Badge variant="secondary">Moderate</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Weather</span>
                  <Badge variant="outline">Clear</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Safety Index</span>
                  <Badge variant="default" className="bg-secondary text-secondary-foreground">High</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Active Incidents</span>
                  <Badge variant="outline">2 minor</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Emergency Contacts */}
          <Card>
            <CardHeader>
              <CardTitle>Emergency Contacts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Button variant="alert" className="w-full" size="sm">
                  Emergency: 911
                </Button>
                <Button variant="outline" className="w-full" size="sm">
                  Police: 311
                </Button>
                <Button variant="outline" className="w-full" size="sm">
                  Drishti Support
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}