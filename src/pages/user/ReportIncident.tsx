import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AlertTriangle, Upload, MapPin, Camera, FileText } from "lucide-react";
import { useState } from "react";

export default function ReportIncident() {
  const [selectedFiles, setSelectedFiles] = useState<string[]>([]);

  const incidentTypes = [
    "Fire Emergency",
    "Medical Emergency", 
    "Theft/Crime",
    "Suspicious Activity",
    "Accident",
    "Crowd Disturbance",
    "Infrastructure Issue",
    "Other"
  ];

  const handleFileUpload = (type: string) => {
    setSelectedFiles([...selectedFiles, `${type}_${Date.now()}`]);
  };

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-alert/10 to-warning/10 rounded-lg p-6">
        <h1 className="text-2xl font-bold text-foreground mb-2 flex items-center gap-2">
          <AlertTriangle className="h-6 w-6 text-alert" />
          Report an Incident
        </h1>
        <p className="text-muted-foreground">
          Help keep the community safe by reporting incidents or suspicious activities.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Report Form */}
        <Card>
          <CardHeader>
            <CardTitle>Incident Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="incidentType">Incident Type</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select incident type" />
                </SelectTrigger>
                <SelectContent>
                  {incidentTypes.map((type) => (
                    <SelectItem key={type} value={type.toLowerCase().replace(/\s+/g, '-')}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <div className="flex gap-2">
                <Input 
                  id="location" 
                  placeholder="Enter address or landmark"
                  className="flex-1"
                />
                <Button variant="outline" size="icon">
                  <MapPin className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Current location: Downtown Plaza, Main Street
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="urgency">Urgency Level</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select urgency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low - Non-urgent</SelectItem>
                  <SelectItem value="medium">Medium - Moderate concern</SelectItem>
                  <SelectItem value="high">High - Immediate attention needed</SelectItem>
                  <SelectItem value="critical">Critical - Emergency response required</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea 
                id="description"
                placeholder="Provide detailed description of the incident..."
                rows={4}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="witnesses">Number of People Involved/Affected</Label>
              <Input 
                id="witnesses"
                type="number"
                placeholder="0"
                min="0"
              />
            </div>
          </CardContent>
        </Card>

        {/* Media Upload */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="h-5 w-5" />
              Upload Evidence
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Photo Upload */}
            <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
              <Camera className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Upload Photos</h3>
              <p className="text-sm text-muted-foreground mb-4">
                JPG, PNG, or HEIC files up to 10MB each
              </p>
              <Button 
                variant="outline" 
                onClick={() => handleFileUpload('photo')}
              >
                Choose Photos
              </Button>
            </div>

            {/* Video Upload */}
            <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
              <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Upload Videos</h3>
              <p className="text-sm text-muted-foreground mb-4">
                MP4, MOV files up to 100MB each
              </p>
              <Button 
                variant="outline"
                onClick={() => handleFileUpload('video')}
              >
                Choose Videos
              </Button>
            </div>

            {/* Uploaded Files */}
            {selectedFiles.length > 0 && (
              <div className="space-y-2">
                <Label>Uploaded Files</Label>
                <div className="space-y-2">
                  {selectedFiles.map((file, index) => (
                    <div key={index} className="flex items-center justify-between p-2 bg-muted rounded">
                      <span className="text-sm">{file}</span>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => setSelectedFiles(selectedFiles.filter((_, i) => i !== index))}
                      >
                        Remove
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Anonymous Reporting */}
            <div className="bg-muted/50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <input type="checkbox" id="anonymous" className="rounded" />
                <Label htmlFor="anonymous" className="text-sm">
                  Submit anonymously
                </Label>
              </div>
              <p className="text-xs text-muted-foreground">
                Your identity will be protected. Contact details will only be available to authorized personnel if needed.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Action Buttons */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex gap-4 justify-end">
            <Button variant="outline">Save Draft</Button>
            <Button variant="alert">Submit Report</Button>
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            By submitting this report, you confirm that the information provided is accurate to the best of your knowledge.
            False reports may result in account suspension.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}