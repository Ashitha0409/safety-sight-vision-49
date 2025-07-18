import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Settings as SettingsIcon, Shield, Bell, Users, Camera, Brain, Server, AlertTriangle } from "lucide-react";

export default function AdminSettings() {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-6">
        <h1 className="text-2xl font-bold text-foreground mb-2 flex items-center gap-2">
          <SettingsIcon className="h-6 w-6 text-primary" />
          Admin Settings
        </h1>
        <p className="text-muted-foreground">
          Configure system preferences, response protocols, and administrative controls.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* System Configuration */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Server className="h-5 w-5" />
                System Configuration
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-sm font-medium">Real-time Monitoring</Label>
                  <p className="text-xs text-muted-foreground">Enable continuous system monitoring</p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-sm font-medium">Auto-Detection Systems</Label>
                  <p className="text-xs text-muted-foreground">Automated threat and anomaly detection</p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-sm font-medium">Emergency Override</Label>
                  <p className="text-xs text-muted-foreground">Allow emergency system overrides</p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="space-y-2">
                <Label className="text-sm font-medium">Data Retention Period</Label>
                <Input type="number" defaultValue="90" className="w-32" />
                <p className="text-xs text-muted-foreground">Days to retain incident data</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Alert Configuration
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-sm font-medium">Critical Alert Notifications</Label>
                  <p className="text-xs text-muted-foreground">Instant notifications for critical events</p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-sm font-medium">SMS Alerts</Label>
                  <p className="text-xs text-muted-foreground">Send SMS for emergency alerts</p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-sm font-medium">Email Notifications</Label>
                  <p className="text-xs text-muted-foreground">Send email summaries</p>
                </div>
                <Switch />
              </div>
              
              <div className="space-y-2">
                <Label className="text-sm font-medium">Alert Threshold</Label>
                <Input type="number" defaultValue="3" className="w-32" />
                <p className="text-xs text-muted-foreground">Minimum severity level for alerts</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Camera className="h-5 w-5" />
                Camera Network
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-sm font-medium">Auto Camera Discovery</Label>
                  <p className="text-xs text-muted-foreground">Automatically detect new cameras</p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-sm font-medium">Motion Detection</Label>
                  <p className="text-xs text-muted-foreground">Enable motion-based recording</p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="space-y-2">
                <Label className="text-sm font-medium">Recording Quality</Label>
                <select className="w-32 h-10 px-3 rounded-md border border-input bg-background">
                  <option>1080p</option>
                  <option>720p</option>
                  <option>480p</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <Label className="text-sm font-medium">Storage Limit (GB)</Label>
                <Input type="number" defaultValue="1000" className="w-32" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* AI & Security Settings */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5" />
                AI Model Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-sm font-medium">Facial Recognition</Label>
                  <p className="text-xs text-muted-foreground">Enable AI facial recognition</p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-sm font-medium">Crowd Behavior Analysis</Label>
                  <p className="text-xs text-muted-foreground">Analyze crowd movement patterns</p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-sm font-medium">Object Detection</Label>
                  <p className="text-xs text-muted-foreground">Detect suspicious objects</p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="space-y-2">
                <Label className="text-sm font-medium">Confidence Threshold (%)</Label>
                <Input type="number" defaultValue="75" className="w-32" />
                <p className="text-xs text-muted-foreground">Minimum confidence for AI alerts</p>
              </div>
              
              <div className="space-y-2">
                <Label className="text-sm font-medium">Processing Priority</Label>
                <select className="w-40 h-10 px-3 rounded-md border border-input bg-background">
                  <option>Real-time</option>
                  <option>High</option>
                  <option>Normal</option>
                  <option>Low</option>
                </select>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Security & Access
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-sm font-medium">Two-Factor Authentication</Label>
                  <p className="text-xs text-muted-foreground">Require 2FA for admin access</p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-sm font-medium">Session Timeout</Label>
                  <p className="text-xs text-muted-foreground">Auto-logout inactive sessions</p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="space-y-2">
                <Label className="text-sm font-medium">Session Duration (minutes)</Label>
                <Input type="number" defaultValue="60" className="w-32" />
              </div>
              
              <div className="space-y-2">
                <Label className="text-sm font-medium">Password Policy</Label>
                <select className="w-40 h-10 px-3 rounded-md border border-input bg-background">
                  <option>Strong</option>
                  <option>Medium</option>
                  <option>Basic</option>
                </select>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Response Protocols
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label className="text-sm font-medium">Emergency Response Time (minutes)</Label>
                <Input type="number" defaultValue="5" className="w-32" />
              </div>
              
              <div className="space-y-2">
                <Label className="text-sm font-medium">Escalation Threshold</Label>
                <Input type="number" defaultValue="3" className="w-32" />
                <p className="text-xs text-muted-foreground">Incidents before escalation</p>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-sm font-medium">Auto-Dispatch</Label>
                  <p className="text-xs text-muted-foreground">Automatically dispatch responders</p>
                </div>
                <Switch />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-sm font-medium">Mass Notification</Label>
                  <p className="text-xs text-muted-foreground">Enable mass notification system</p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                Emergency Controls
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button variant="alert" className="w-full">
                <AlertTriangle className="h-4 w-4 mr-2" />
                Emergency System Reset
              </Button>
              
              <Button variant="destructive" className="w-full">
                <Shield className="h-4 w-4 mr-2" />
                Lock Down All Systems
              </Button>
              
              <Button variant="outline" className="w-full">
                <Server className="h-4 w-4 mr-2" />
                System Maintenance Mode
              </Button>
              
              <Button variant="outline" className="w-full">
                <Camera className="h-4 w-4 mr-2" />
                Reset Camera Network
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Save Settings */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Configuration Status</h3>
              <p className="text-sm text-muted-foreground">
                Last saved: Today at 2:30 PM
                <Badge variant="secondary" className="ml-2">
                  All systems operational
                </Badge>
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">Reset to Defaults</Button>
              <Button variant="default">Save Configuration</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}