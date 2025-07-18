import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Users, Clock, Radio, Shield, Truck, Heart, Flame } from "lucide-react";

export default function ResponderDispatch() {
  const activeIncidents = [
    {
      id: "INC-089",
      type: "Fire Emergency",
      severity: "critical",
      location: "Central Plaza - Building A",
      coordinates: { lat: 40.7589, lng: -73.9851 },
      time: "3 minutes ago",
      requiredTeams: ["Fire Department", "Paramedics", "Police"],
      assignedResponders: 4,
      eta: "2 minutes",
      distance: "0.8 km"
    },
    {
      id: "INC-088",
      type: "Medical Emergency", 
      severity: "high",
      location: "Train Station Platform 2",
      coordinates: { lat: 40.7505, lng: -73.9934 },
      time: "8 minutes ago",
      requiredTeams: ["Paramedics", "Police"],
      assignedResponders: 2,
      eta: "Arrived",
      distance: "1.2 km"
    },
    {
      id: "INC-087",
      type: "Crowd Control",
      severity: "medium",
      location: "Downtown Plaza",
      coordinates: { lat: 40.7614, lng: -73.9776 },
      time: "15 minutes ago",
      requiredTeams: ["Police", "Crowd Control"],
      assignedResponders: 6,
      eta: "On Scene",
      distance: "0.5 km"
    }
  ];

  const responders = [
    {
      id: "FIRE-01",
      name: "Engine Company 12",
      type: "Fire Department",
      status: "en-route",
      location: "Broadway & 5th",
      assignedTo: "INC-089",
      eta: "2 minutes",
      personnel: 4,
      equipment: ["Fire Engine", "Ladder Truck"]
    },
    {
      id: "MED-03",
      name: "Paramedic Unit 7",
      type: "Paramedics",
      status: "on-scene",
      location: "Train Station Platform 2",
      assignedTo: "INC-088",
      eta: "On Scene",
      personnel: 2,
      equipment: ["Ambulance", "Defibrillator"]
    },
    {
      id: "POL-15",
      name: "Patrol Unit 23",
      type: "Police",
      status: "available",
      location: "City Hall",
      assignedTo: null,
      eta: "N/A",
      personnel: 2,
      equipment: ["Police Vehicle", "Riot Gear"]
    },
    {
      id: "POL-16",
      name: "SWAT Team Alpha",
      type: "Special Units",
      status: "standby",
      location: "Headquarters",
      assignedTo: null,
      eta: "N/A", 
      personnel: 8,
      equipment: ["Armored Vehicle", "Tactical Gear"]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'en-route': return 'default';
      case 'on-scene': return 'secondary';
      case 'available': return 'outline';
      case 'standby': return 'secondary';
      default: return 'outline';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'destructive';
      case 'high': return 'default';
      case 'medium': return 'secondary';
      default: return 'outline';
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-6">
        <h1 className="text-2xl font-bold text-foreground mb-2 flex items-center gap-2">
          <Radio className="h-6 w-6 text-primary" />
          Responder Dispatch Map
        </h1>
        <p className="text-muted-foreground">
          Real-time coordination of emergency responders with live incident tracking and resource allocation.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Interactive Map */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Live Dispatch Map
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-96 bg-muted/30 rounded-lg flex items-center justify-center border-2 border-dashed border-border">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <p className="text-lg text-muted-foreground mb-2">Interactive Emergency Response Map</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    Real-time positions of incidents, responders, and optimal routes
                  </p>
                  <div className="flex justify-center gap-4 text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-alert rounded-full"></div>
                      <span>Critical Incidents</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                      <span>Active Responders</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-secondary rounded-full"></div>
                      <span>Available Units</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Active Incidents */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-alert" />
                Active Incidents Requiring Response
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {activeIncidents.map((incident) => (
                  <div key={incident.id} className="p-4 border border-border rounded-lg">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Badge variant={getSeverityColor(incident.severity)} className="text-xs">
                            {incident.type}
                          </Badge>
                          <span className="text-xs text-muted-foreground">{incident.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm font-medium">{incident.location}</span>
                          <span className="text-xs text-muted-foreground">({incident.id})</span>
                        </div>
                      </div>
                      <div className="text-right text-xs text-muted-foreground">
                        <div>ETA: {incident.eta}</div>
                        <div>{incident.distance}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          {incident.assignedResponders} responders
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {incident.requiredTeams.map((team, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {team}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          Reassign
                        </Button>
                        <Button size="sm" variant="default">
                          Add Resources
                        </Button>
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
          {/* Available Responders */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Active Responders
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {responders.map((responder) => (
                  <div key={responder.id} className="p-3 bg-muted/30 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <div className="font-medium text-sm">{responder.name}</div>
                        <div className="text-xs text-muted-foreground">{responder.type}</div>
                      </div>
                      <Badge variant={getStatusColor(responder.status)} className="text-xs">
                        {responder.status}
                      </Badge>
                    </div>
                    
                    <div className="text-xs text-muted-foreground space-y-1">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {responder.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        {responder.personnel} personnel
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        ETA: {responder.eta}
                      </div>
                      {responder.assignedTo && (
                        <div className="text-primary text-xs font-medium">
                          Assigned to: {responder.assignedTo}
                        </div>
                      )}
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mt-2">
                      {responder.equipment.map((item, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Deploy */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Deploy</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Button variant="alert" className="w-full" size="sm">
                  <Flame className="h-4 w-4 mr-2" />
                  Fire Response Team
                </Button>
                <Button variant="default" className="w-full" size="sm">
                  <Heart className="h-4 w-4 mr-2" />
                  Medical Response
                </Button>
                <Button variant="default" className="w-full" size="sm">
                  <Shield className="h-4 w-4 mr-2" />
                  Police Backup
                </Button>
                <Button variant="outline" className="w-full" size="sm">
                  <Truck className="h-4 w-4 mr-2" />
                  Hazmat Team
                </Button>
                <Button variant="outline" className="w-full" size="sm">
                  <Users className="h-4 w-4 mr-2" />
                  SWAT Deployment
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Communication */}
          <Card>
            <CardHeader>
              <CardTitle>Emergency Communication</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Button variant="default" className="w-full" size="sm">
                  <Radio className="h-4 w-4 mr-2" />
                  All Units Broadcast
                </Button>
                <Button variant="outline" className="w-full" size="sm">
                  <Radio className="h-4 w-4 mr-2" />
                  Fire Frequency
                </Button>
                <Button variant="outline" className="w-full" size="sm">
                  <Radio className="h-4 w-4 mr-2" />
                  Police Frequency
                </Button>
                <Button variant="outline" className="w-full" size="sm">
                  <Radio className="h-4 w-4 mr-2" />
                  Medical Frequency
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Statistics */}
          <Card>
            <CardHeader>
              <CardTitle>Response Statistics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>Avg Response Time</span>
                  <span className="font-medium">2.3 min</span>
                </div>
                <div className="flex justify-between">
                  <span>Units Deployed Today</span>
                  <span className="font-medium">23</span>
                </div>
                <div className="flex justify-between">
                  <span>Active Incidents</span>
                  <span className="font-medium">3</span>
                </div>
                <div className="flex justify-between">
                  <span>Available Units</span>
                  <span className="font-medium">18</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}