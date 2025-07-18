import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { UserCheck, Upload, Search, Clock, MapPin, Eye } from "lucide-react";
import { useState } from "react";

export default function LostFound() {
  const [activeTab, setActiveTab] = useState<'report' | 'search'>('search');

  const recentReports = [
    {
      id: "LF001",
      name: "Sarah Johnson",
      age: "25",
      lastSeen: "Central Plaza",
      time: "2 hours ago",
      status: "searching",
      matches: 3
    },
    {
      id: "LF002", 
      name: "Michael Chen",
      age: "65",
      lastSeen: "Main Street Mall",
      time: "5 hours ago", 
      status: "found",
      matches: 1
    },
    {
      id: "LF003",
      name: "Emma Davis",
      age: "8",
      lastSeen: "City Park",
      time: "1 day ago",
      status: "searching",
      matches: 0
    }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-secondary/10 to-primary/10 rounded-lg p-6">
        <h1 className="text-2xl font-bold text-foreground mb-2 flex items-center gap-2">
          <UserCheck className="h-6 w-6 text-secondary" />
          Lost & Found
        </h1>
        <p className="text-muted-foreground">
          AI-powered facial recognition to help locate missing persons quickly and safely.
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex gap-2">
        <Button 
          variant={activeTab === 'search' ? 'default' : 'outline'}
          onClick={() => setActiveTab('search')}
        >
          <Search className="h-4 w-4 mr-2" />
          Search for Someone
        </Button>
        <Button 
          variant={activeTab === 'report' ? 'default' : 'outline'}
          onClick={() => setActiveTab('report')}
        >
          <Upload className="h-4 w-4 mr-2" />
          Report Missing Person
        </Button>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {activeTab === 'search' ? (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Search className="h-5 w-5" />
                  Search Missing Persons
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="searchPhoto">Upload Photo to Search</Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                    <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Upload a clear photo</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      JPG, PNG files. Face should be clearly visible.
                    </p>
                    <Button variant="outline">Choose Photo</Button>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="searchName">Name (Optional)</Label>
                    <Input id="searchName" placeholder="Enter name if known" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="searchAge">Approximate Age</Label>
                    <Input id="searchAge" type="number" placeholder="Age range" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="searchLocation">Last Known Location</Label>
                  <Input id="searchLocation" placeholder="Where were they last seen?" />
                </div>

                <Button variant="hero" className="w-full">
                  <Eye className="h-4 w-4 mr-2" />
                  Search with AI Recognition
                </Button>

                <div className="bg-muted/50 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">How AI Search Works:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Facial recognition across CCTV network</li>
                    <li>• Real-time matching with reported cases</li>
                    <li>• Location tracking of matches</li>
                    <li>• Instant alerts to authorities and family</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload className="h-5 w-5" />
                  Report Missing Person
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="reportName">Full Name</Label>
                    <Input id="reportName" placeholder="Enter full name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="reportAge">Age</Label>
                    <Input id="reportAge" type="number" placeholder="Age" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="reportPhoto">Recent Photo</Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                    <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground mb-2">
                      Upload the most recent clear photo
                    </p>
                    <Button variant="outline" size="sm">Choose Photo</Button>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="lastSeen">Last Seen Location</Label>
                    <Input id="lastSeen" placeholder="Address or landmark" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastSeenTime">Time Last Seen</Label>
                    <Input id="lastSeenTime" type="datetime-local" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description & Circumstances</Label>
                  <Textarea 
                    id="description"
                    placeholder="Physical description, clothing, circumstances of disappearance..."
                    rows={4}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact">Emergency Contact</Label>
                  <Input id="contact" placeholder="Phone number for updates" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="relationship">Your Relationship</Label>
                  <Input id="relationship" placeholder="e.g., Parent, Spouse, Friend" required />
                </div>

                <Button variant="alert" className="w-full">
                  Submit Missing Person Report
                </Button>

                <div className="bg-alert/10 rounded-lg p-4">
                  <p className="text-sm font-semibold text-alert mb-1">Important:</p>
                  <p className="text-xs text-muted-foreground">
                    This will immediately alert local authorities and activate AI search across the CCTV network. 
                    Please ensure all information is accurate.
                  </p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Sidebar - Recent Reports */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Recent Reports
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentReports.map((report) => (
                  <div key={report.id} className="p-3 border border-border rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="font-semibold text-sm">{report.name}</p>
                        <p className="text-xs text-muted-foreground">Age {report.age}</p>
                      </div>
                      <Badge 
                        variant={report.status === 'found' ? 'default' : 'secondary'}
                        className={report.status === 'found' ? 'bg-secondary text-secondary-foreground' : ''}
                      >
                        {report.status}
                      </Badge>
                    </div>
                    <div className="text-xs text-muted-foreground space-y-1">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {report.lastSeen}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {report.time}
                      </div>
                      {report.matches > 0 && (
                        <div className="flex items-center gap-1">
                          <Eye className="h-3 w-3" />
                          {report.matches} AI matches
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}