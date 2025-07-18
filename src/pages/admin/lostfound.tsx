import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, Eye, Brain, Users, Camera, Clock, CheckCircle, AlertTriangle, Upload } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function LostFoundAdmin() {
  const aiMatches = [
    {
      id: "MATCH-034",
      confidence: 94,
      status: "high-confidence",
      missingPerson: {
        name: "Emma Rodriguez",
        age: 8,
        reportId: "MISSING-089",
        reportedTime: "2 hours ago",
        lastSeen: "Downtown Plaza",
        description: "Red jacket, blue jeans, brown hair in pigtails"
      },
      detection: {
        cameraId: "CAM-12",
        location: "Central Mall Food Court",
        timestamp: "15 minutes ago",
        imageQuality: "High"
      },
      similarityScore: 94.2,
      facialFeatures: ["Hair color match", "Age range match", "Clothing match"],
      verified: false
    },
    {
      id: "MATCH-033",
      confidence: 87,
      status: "medium-confidence", 
      missingPerson: {
        name: "James Park",
        age: 45,
        reportId: "MISSING-088",
        reportedTime: "4 hours ago",
        lastSeen: "Train Station",
        description: "Grey suit, black briefcase, glasses"
      },
      detection: {
        cameraId: "CAM-23",
        location: "Office District",
        timestamp: "1 hour ago",
        imageQuality: "Medium"
      },
      similarityScore: 87.6,
      facialFeatures: ["Glasses match", "Age range match", "Partial clothing match"],
      verified: false
    },
    {
      id: "MATCH-032",
      confidence: 76,
      status: "low-confidence",
      missingPerson: {
        name: "Maria Santos",
        age: 23,
        reportId: "MISSING-087",
        reportedTime: "6 hours ago",
        lastSeen: "University Campus",
        description: "White t-shirt, denim jacket, long black hair"
      },
      detection: {
        cameraId: "CAM-18",
        location: "Library District",
        timestamp: "45 minutes ago",
        imageQuality: "Low"
      },
      similarityScore: 76.3,
      facialFeatures: ["Hair color match", "Partial age match"],
      verified: false
    }
  ];

  const missingPersons = [
    {
      id: "MISSING-089",
      name: "Emma Rodriguez",
      age: 8,
      status: "active",
      reportedBy: "Parent - Anna Rodriguez",
      reportTime: "2 hours ago",
      lastSeen: "Downtown Plaza",
      description: "Red jacket, blue jeans, brown hair in pigtails",
      urgency: "high",
      searchRadius: "2km",
      aiScans: 147,
      potentialMatches: 3
    },
    {
      id: "MISSING-088", 
      name: "James Park",
      age: 45,
      status: "active",
      reportedBy: "Colleague - Susan Kim",
      reportTime: "4 hours ago",
      lastSeen: "Train Station Platform 2",
      description: "Grey business suit, black briefcase, glasses",
      urgency: "medium",
      searchRadius: "5km",
      aiScans: 89,
      potentialMatches: 2
    },
    {
      id: "MISSING-087",
      name: "Maria Santos", 
      age: 23,
      status: "found",
      reportedBy: "Friend - Lisa Chen",
      reportTime: "6 hours ago",
      lastSeen: "University Campus",
      description: "White t-shirt, denim jacket, long black hair",
      urgency: "low",
      searchRadius: "3km",
      aiScans: 234,
      potentialMatches: 1
    }
  ];

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 90) return 'default';
    if (confidence >= 75) return 'secondary';
    return 'outline';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'high-confidence': return 'default';
      case 'medium-confidence': return 'secondary';
      case 'low-confidence': return 'outline';
      case 'active': return 'destructive';
      case 'found': return 'secondary';
      default: return 'outline';
    }
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'high': return 'destructive';
      case 'medium': return 'default';
      case 'low': return 'secondary';
      default: return 'outline';
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-6">
        <h1 className="text-2xl font-bold text-foreground mb-2 flex items-center gap-2">
          <Brain className="h-6 w-6 text-primary" />
          Lost & Found AI
        </h1>
        <p className="text-muted-foreground">
          AI-powered facial recognition system for matching missing persons with CCTV footage across the city.
        </p>
      </div>

      {/* Search and Upload */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            AI-Powered Search
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-64">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search by name, description, or case ID..." 
                  className="pl-10"
                />
              </div>
            </div>
            <Button variant="default">
              <Upload className="h-4 w-4 mr-2" />
              Upload Photo for Search
            </Button>
            <Button variant="outline">
              <Camera className="h-4 w-4 mr-2" />
              Live Camera Search
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* AI Matches */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-primary" />
                AI Detection Matches
              </CardTitle>
              <Button variant="outline" size="sm">Refresh Scan</Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {aiMatches.map((match) => (
                  <div key={match.id} className="p-4 border border-border rounded-lg">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge 
                            variant={getConfidenceColor(match.confidence)} 
                            className="text-xs"
                          >
                            {match.confidence}% Confidence
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {match.id}
                          </Badge>
                          <span className="text-xs text-muted-foreground">{match.detection.timestamp}</span>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                          {/* Missing Person Info */}
                          <div>
                            <h4 className="font-medium text-sm mb-1">Missing Person</h4>
                            <div className="text-xs text-muted-foreground space-y-1">
                              <div><strong>{match.missingPerson.name}</strong>, Age {match.missingPerson.age}</div>
                              <div>Report ID: {match.missingPerson.reportId}</div>
                              <div>Last seen: {match.missingPerson.lastSeen}</div>
                              <div>Reported: {match.missingPerson.reportedTime}</div>
                              <div>{match.missingPerson.description}</div>
                            </div>
                          </div>
                          
                          {/* Detection Info */}
                          <div>
                            <h4 className="font-medium text-sm mb-1">AI Detection</h4>
                            <div className="text-xs text-muted-foreground space-y-1">
                              <div className="flex items-center gap-1">
                                <Camera className="h-3 w-3" />
                                {match.detection.cameraId} - {match.detection.location}
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {match.detection.timestamp}
                              </div>
                              <div>Image Quality: {match.detection.imageQuality}</div>
                              <div>Similarity Score: {match.similarityScore}%</div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Feature Matches */}
                        <div className="mt-3">
                          <div className="text-xs font-medium mb-1">Matching Features:</div>
                          <div className="flex flex-wrap gap-1">
                            {match.facialFeatures.map((feature, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs">
                                {feature}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      {/* Actions */}
                      <div className="flex flex-col gap-2 ml-4">
                        <Button size="sm" variant="default">
                          <Eye className="h-4 w-4 mr-1" />
                          Compare Images
                        </Button>
                        <Button size="sm" variant={match.confidence >= 90 ? 'default' : 'outline'}>
                          <CheckCircle className="h-4 w-4 mr-1" />
                          Verify Match
                        </Button>
                        <Button size="sm" variant="outline">
                          <AlertTriangle className="h-4 w-4 mr-1" />
                          False Positive
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* AI Performance */}
          <Card>
            <CardHeader>
              <CardTitle>AI Performance Metrics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <div className="text-2xl font-bold text-primary">234</div>
                  <div className="text-xs text-muted-foreground">Faces Scanned Today</div>
                </div>
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <div className="text-2xl font-bold text-secondary">6</div>
                  <div className="text-xs text-muted-foreground">Potential Matches</div>
                </div>
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <div className="text-2xl font-bold text-warning">92%</div>
                  <div className="text-xs text-muted-foreground">Accuracy Rate</div>
                </div>
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <div className="text-2xl font-bold text-alert">2</div>
                  <div className="text-xs text-muted-foreground">Confirmed Finds</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Active Missing Persons */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Active Cases
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {missingPersons.map((person) => (
                  <div key={person.id} className="p-3 bg-muted/30 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <div className="font-medium text-sm">{person.name}</div>
                        <div className="text-xs text-muted-foreground">Age {person.age} • {person.reportTime}</div>
                      </div>
                      <div className="flex flex-col gap-1">
                        <Badge variant={getStatusColor(person.status)} className="text-xs">
                          {person.status}
                        </Badge>
                        <Badge variant={getUrgencyColor(person.urgency)} className="text-xs">
                          {person.urgency} priority
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="text-xs text-muted-foreground space-y-1">
                      <div>Last seen: {person.lastSeen}</div>
                      <div>Search radius: {person.searchRadius}</div>
                      <div>AI scans: {person.aiScans}</div>
                      <div>Potential matches: {person.potentialMatches}</div>
                    </div>
                    
                    <div className="mt-2">
                      <Button size="sm" variant="outline" className="w-full text-xs">
                        View Case Details
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Camera Network Status */}
          <Card>
            <CardHeader>
              <CardTitle>Camera Network</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Active Cameras</span>
                  <span className="font-bold">47/50</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">AI-Enabled</span>
                  <span className="font-bold text-primary">43</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Live Monitoring</span>
                  <span className="font-bold text-secondary">40</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Processing Queue</span>
                  <span className="font-bold">12</span>
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
                <Button variant="default" className="w-full" size="sm">
                  <Upload className="h-4 w-4 mr-2" />
                  New Missing Person
                </Button>
                <Button variant="outline" className="w-full" size="sm">
                  <Search className="h-4 w-4 mr-2" />
                  Batch Photo Search
                </Button>
                <Button variant="outline" className="w-full" size="sm">
                  <Camera className="h-4 w-4 mr-2" />
                  Camera Controls
                </Button>
                <Button variant="outline" className="w-full" size="sm">
                  <Brain className="h-4 w-4 mr-2" />
                  AI Model Settings
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Recent Success */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Successes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-secondary/10 rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span className="font-medium">Case Resolved</span>
                  </div>
                  <p className="text-xs">Maria Santos found safe via AI match at Library District.</p>
                </div>
                <div className="p-3 bg-secondary/10 rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span className="font-medium">Family Reunited</span>
                  </div>
                  <p className="text-xs">Child reunited with family within 45 minutes of report.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}