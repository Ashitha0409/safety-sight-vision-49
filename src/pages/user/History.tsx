import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { FileText, Search, Eye, Calendar, MapPin, AlertTriangle } from "lucide-react";

export default function History() {
  const reports = [
    {
      id: "RPT-001",
      type: "Suspicious Activity",
      location: "Central Plaza",
      date: "2024-01-15",
      time: "14:30",
      status: "resolved",
      priority: "medium",
      description: "Person taking unauthorized photos of security systems"
    },
    {
      id: "RPT-002", 
      type: "Infrastructure Issue",
      location: "Main Street Bridge",
      date: "2024-01-12",
      time: "09:15",
      status: "in-progress",
      priority: "high",
      description: "Damaged streetlight creating safety hazard"
    },
    {
      id: "RPT-003",
      type: "Medical Emergency",
      location: "City Park",
      date: "2024-01-08",
      time: "16:45",
      status: "resolved",
      priority: "high",
      description: "Elderly person requiring immediate medical assistance"
    },
    {
      id: "RPT-004",
      type: "Traffic Incident",
      location: "5th Avenue",
      date: "2024-01-05",
      time: "12:20",
      status: "resolved",
      priority: "low",
      description: "Minor vehicle collision blocking bike lane"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'resolved': return 'bg-secondary text-secondary-foreground';
      case 'in-progress': return 'bg-warning text-warning-foreground';
      case 'pending': return 'bg-muted text-muted-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'destructive';
      case 'medium': return 'default';
      case 'low': return 'secondary';
      default: return 'outline';
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-6">
        <h1 className="text-2xl font-bold text-foreground mb-2 flex items-center gap-2">
          <FileText className="h-6 w-6 text-primary" />
          My Reports & History
        </h1>
        <p className="text-muted-foreground">
          Track your incident reports and view their current status and resolutions.
        </p>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input 
                  placeholder="Search reports by type, location, or description..."
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <select className="px-3 py-2 border border-border rounded-md text-sm">
                <option>All Types</option>
                <option>Suspicious Activity</option>
                <option>Medical Emergency</option>
                <option>Infrastructure Issue</option>
                <option>Traffic Incident</option>
              </select>
              <select className="px-3 py-2 border border-border rounded-md text-sm">
                <option>All Status</option>
                <option>Resolved</option>
                <option>In Progress</option>
                <option>Pending</option>
              </select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Statistics */}
      <div className="grid md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">12</div>
              <div className="text-sm text-muted-foreground">Total Reports</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary">9</div>
              <div className="text-sm text-muted-foreground">Resolved</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-warning">2</div>
              <div className="text-sm text-muted-foreground">In Progress</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-muted-foreground">1</div>
              <div className="text-sm text-muted-foreground">Pending</div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Reports List */}
      <div className="space-y-4">
        {reports.map((report) => (
          <Card key={report.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold text-lg">{report.type}</h3>
                    <Badge 
                      variant={getPriorityColor(report.priority)}
                      className="text-xs"
                    >
                      {report.priority.toUpperCase()}
                    </Badge>
                    <Badge 
                      className={`text-xs ${getStatusColor(report.status)}`}
                    >
                      {report.status.replace('-', ' ').toUpperCase()}
                    </Badge>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-3">{report.description}</p>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <FileText className="h-4 w-4" />
                      {report.id}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {report.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {report.date} at {report.time}
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4 mr-2" />
                    View Details
                  </Button>
                  <Button variant="ghost" size="sm">
                    Follow Up
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center">
        <Button variant="outline">
          Load More Reports
        </Button>
      </div>
    </div>
  );
}