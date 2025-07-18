import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Filter, Search, Eye, Edit, CheckCircle, XCircle, Clock, MapPin, User } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function IncidentManagement() {
  const incidents = [
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
      images: 3,
      videos: 1,
      witnesses: 0,
      responders: 4,
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
      images: 2,
      videos: 0,
      witnesses: 3,
      responders: 2,
      tags: ["medical", "unconscious", "platform"]
    },
    {
      id: "INC-087",
      title: "Suspicious Activity Near Metro Exit",
      type: "Security",
      severity: "medium",
      status: "open",
      reportedBy: "Security Guard Martinez",
      reporterType: "staff",
      location: "Metro Station Exit B",
      timestamp: "2024-01-15 13:45:12",
      description: "Individual loitering near restricted area for extended period. Behavior appears suspicious.",
      images: 1,
      videos: 1,
      witnesses: 1,
      responders: 1,
      tags: ["suspicious", "loitering", "security"]
    },
    {
      id: "INC-086",
      title: "Crowd Disturbance at Downtown Plaza",
      type: "Crowd Control",
      severity: "medium",
      status: "resolved",
      reportedBy: "Officer Thompson",
      reporterType: "police",
      location: "Downtown Plaza",
      timestamp: "2024-01-15 12:30:18",
      description: "Large crowd gathering causing pedestrian flow issues. Peaceful but disruptive.",
      images: 4,
      videos: 2,
      witnesses: 8,
      responders: 3,
      tags: ["crowd", "peaceful", "resolved"]
    },
    {
      id: "INC-085",
      title: "Infrastructure - Bridge Vibration Detected",
      type: "Infrastructure",
      severity: "low",
      status: "closed",
      reportedBy: "Automated Sensor",
      reporterType: "system",
      location: "5th Avenue Bridge",
      timestamp: "2024-01-15 11:15:33",
      description: "Structural monitoring sensors detected unusual vibration patterns. Inspection completed.",
      images: 0,
      videos: 0,
      witnesses: 0,
      responders: 1,
      tags: ["infrastructure", "inspection", "resolved"]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'destructive';
      case 'investigating': return 'default';
      case 'open': return 'secondary';
      case 'resolved': return 'outline';
      case 'closed': return 'outline';
      default: return 'outline';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'destructive';
      case 'high': return 'default';
      case 'medium': return 'secondary';
      case 'low': return 'outline';
      default: return 'outline';
    }
  };

  const getReporterIcon = (type: string) => {
    switch (type) {
      case 'system': return '🤖';
      case 'citizen': return '👤';
      case 'staff': return '👮';
      case 'police': return '🚔';
      default: return '📱';
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-6">
        <h1 className="text-2xl font-bold text-foreground mb-2 flex items-center gap-2">
          <FileText className="h-6 w-6 text-primary" />
          Incident Management
        </h1>
        <p className="text-muted-foreground">
          Comprehensive review, categorization, and lifecycle management of all reported incidents.
        </p>
      </div>

      {/* Filters and Search */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Filter & Search Incidents
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-64">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search incidents by ID, location, or description..." 
                  className="pl-10"
                />
              </div>
            </div>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Status Filter
            </Button>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Type Filter
            </Button>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Severity Filter
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Incidents List */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>All Incidents</CardTitle>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">Export Report</Button>
            <Button variant="default" size="sm">Manual Report</Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {incidents.map((incident) => (
              <div key={incident.id} className="p-4 border border-border rounded-lg">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-medium text-sm">{incident.title}</h3>
                      <Badge variant="outline" className="text-xs">
                        {incident.id}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 mb-2">
                      <Badge variant={getSeverityColor(incident.severity)} className="text-xs">
                        {incident.type} - {incident.severity}
                      </Badge>
                      <Badge variant={getStatusColor(incident.status)} className="text-xs">
                        {incident.status}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-2">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {incident.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {incident.timestamp}
                      </div>
                      <div className="flex items-center gap-1">
                        <span>{getReporterIcon(incident.reporterType)}</span>
                        {incident.reportedBy}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{incident.description}</p>
                    
                    {/* Evidence & Resources */}
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <div>📷 {incident.images} images</div>
                      <div>🎥 {incident.videos} videos</div>
                      <div>👥 {incident.witnesses} witnesses</div>
                      <div>🚨 {incident.responders} responders</div>
                    </div>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mt-3">
                      {incident.tags.map((tag, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  {/* Actions */}
                  <div className="flex flex-col gap-2 ml-4">
                    <Button size="sm" variant="outline">
                      <Eye className="h-4 w-4 mr-1" />
                      View Details
                    </Button>
                    <Button size="sm" variant="outline">
                      <Edit className="h-4 w-4 mr-1" />
                      Edit
                    </Button>
                    {incident.status === 'open' && (
                      <Button size="sm" variant="default">
                        <CheckCircle className="h-4 w-4 mr-1" />
                        Resolve
                      </Button>
                    )}
                    {incident.status === 'resolved' && (
                      <Button size="sm" variant="secondary">
                        <XCircle className="h-4 w-4 mr-1" />
                        Close
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Summary Statistics */}
      <div className="grid md:grid-cols-5 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-alert">12</div>
              <div className="text-xs text-muted-foreground">Active</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-warning">8</div>
              <div className="text-xs text-muted-foreground">Investigating</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">15</div>
              <div className="text-xs text-muted-foreground">Open</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary">34</div>
              <div className="text-xs text-muted-foreground">Resolved</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-muted-foreground">89</div>
              <div className="text-xs text-muted-foreground">Total Today</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}