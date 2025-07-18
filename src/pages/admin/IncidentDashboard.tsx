import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Zap, MapPin, Clock, Eye, Users, Shield, CheckCircle, FileText, Edit } from "lucide-react";

// Dummy data (merge from alerts, incidents, responders)
const initialAlerts = [
  {
    id: "ALT-089",
    type: "Fire Detection",
    severity: "critical",
    location: "Central Plaza - Building A",
    time: "3 minutes ago",
    status: "active",
    description: "Automated fire detection system triggered. Smoke detected in multiple areas.",
    responders: [],
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
    responders: [],
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
    responders: [],
    estimatedImpact: "High",
    autoDetected: true
  }
];

const initialIncidents = [
  {
    id: "INC-089",
    title: "Fire Emergency at Central Plaza",
    type: "Fire",
    severity: "critical",
    status: "active",
    reportedBy: "Auto-Detection System",
    reporterType: "system",
    location: "Central Plaza - Building A",
    timestamp: "2024-01-15 14:23:45",
    description: "Automated fire detection system triggered. Smoke detected in multiple areas of Building A.",
    responders: [],
    tags: ["fire", "emergency", "evacuation"]
  },
  {
    id: "INC-088",
    title: "Medical Emergency - Person Collapsed",
    type: "Medical",
    severity: "high",
    status: "investigating",
    reportedBy: "Sarah Chen",
    reporterType: "citizen",
    location: "Train Station Platform 2",
    timestamp: "2024-01-15 14:15:22",
    description: "Person collapsed on platform. Appears unconscious. Crowd gathering around the incident.",
    responders: [],
    tags: ["medical", "unconscious", "platform"]
  }
];

const initialResponders = [
  {
    id: "FIRE-01",
    name: "Engine Company 12",
    type: "Fire Department",
    status: "en-route",
    location: "Broadway & 5th",
    assignedTo: null
  },
  {
    id: "MED-03",
    name: "Paramedic Unit 7",
    type: "Paramedics",
    status: "on-scene",
    location: "Train Station Platform 2",
    assignedTo: null
  },
  {
    id: "POL-15",
    name: "Patrol Unit 23",
    type: "Police",
    status: "available",
    location: "City Hall",
    assignedTo: null
  }
];

export default function IncidentDashboard() {
  const [alerts, setAlerts] = useState(initialAlerts);
  const [incidents, setIncidents] = useState(initialIncidents);
  const [responders, setResponders] = useState(initialResponders);

  // Assign a responder to an alert or incident
  const assignResponder = (responderId, targetId, type) => {
    setResponders(responders.map(r => r.id === responderId ? { ...r, assignedTo: targetId } : r));
    if (type === 'alert') {
      setAlerts(alerts.map(a => a.id === targetId ? { ...a, responders: [...a.responders, responderId] } : a));
    } else {
      setIncidents(incidents.map(i => i.id === targetId ? { ...i, responders: [...i.responders, responderId] } : i));
    }
  };

  return (
    <div className="space-y-8">
      {/* Alerts & Anomalies Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-alert" />
            Alerts & Anomalies
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {alerts.map(alert => (
              <div key={alert.id} className="p-4 border border-border rounded-lg mb-2">
                <div className="flex items-center gap-2 mb-1">
                  <Badge variant={alert.severity === 'critical' ? 'destructive' : alert.severity === 'high' ? 'default' : 'secondary'} className="text-xs">
                    {alert.type}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{alert.time}</span>
                  {alert.autoDetected && <Badge variant="outline" className="text-xs"><Zap className="h-3 w-3 mr-1" />Auto-detected</Badge>}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium">{alert.location}</span>
                  <span className="text-xs text-muted-foreground">({alert.id})</span>
                </div>
                <p className="text-sm text-foreground mb-2">{alert.description}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1"><Users className="h-3 w-3" />{alert.responders.length} responders</div>
                  <div className="flex items-center gap-1"><Shield className="h-3 w-3" />{alert.estimatedImpact} impact</div>
                </div>
                <div className="flex gap-2 mt-2">
                  {responders.filter(r => !r.assignedTo).map(r => (
                    <Button key={r.id} size="sm" variant="outline" onClick={() => assignResponder(r.id, alert.id, 'alert')}>
                      Assign {r.name}
                    </Button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Incidents Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-primary" />
            Incidents
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {incidents.map(incident => (
              <div key={incident.id} className="p-4 border border-border rounded-lg mb-2">
                <div className="flex items-center gap-2 mb-1">
                  <Badge variant={incident.severity === 'critical' ? 'destructive' : incident.severity === 'high' ? 'default' : 'secondary'} className="text-xs">
                    {incident.type}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{incident.timestamp}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium">{incident.location}</span>
                  <span className="text-xs text-muted-foreground">({incident.id})</span>
                </div>
                <p className="text-sm text-foreground mb-2">{incident.description}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1"><Users className="h-3 w-3" />{incident.responders.length} responders</div>
                  <div className="flex items-center gap-1"><Shield className="h-3 w-3" />{incident.tags.join(', ')}</div>
                </div>
                <div className="flex gap-2 mt-2">
                  {responders.filter(r => !r.assignedTo).map(r => (
                    <Button key={r.id} size="sm" variant="outline" onClick={() => assignResponder(r.id, incident.id, 'incident')}>
                      Assign {r.name}
                    </Button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Responders Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" />
            Responders
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {responders.map(responder => (
              <div key={responder.id} className="p-3 bg-muted/30 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <div className="font-medium text-sm">{responder.name}</div>
                    <div className="text-xs text-muted-foreground">{responder.type}</div>
                  </div>
                  <Badge variant={responder.assignedTo ? 'default' : 'outline'} className="text-xs">
                    {responder.assignedTo ? `Assigned to ${responder.assignedTo}` : 'Available'}
                  </Badge>
                </div>
                <div className="text-xs text-muted-foreground space-y-1">
                  <div className="flex items-center gap-1"><MapPin className="h-3 w-3" />{responder.location}</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 