"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bell, Eye, MoveRight } from "lucide-react";
import LiveCameraStatus from "@/components/ui/LiveCameraStatus";

export default function AdminDashboard() {

  return (
    <Tabs defaultValue="overview" className="space-y-4">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
      </TabsList>
      <TabsContent value="overview" className="space-y-4">
        {/* Live Camera Status */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="h-5 w-5 text-primary" />
              Live Camera Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <LiveCameraStatus />
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Manage incidents and monitor key areas</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
              View Alerts <MoveRight className="h-4 w-4" />
            </div>
            <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
              Assign Responder <MoveRight className="h-4 w-4" />
            </div>
            <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
              Open Live Feed <MoveRight className="h-4 w-4" />
            </div>
          </CardContent>
        </Card>

        {/* Notifications */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-primary" />
              Recent Alerts
            </CardTitle>
            <CardDescription>Summary of recent events</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-2">
              <div className="p-2 bg-red-100 rounded">Unauthorized entry detected in Zone 2</div>
              <div className="p-2 bg-yellow-100 rounded">Suspicious activity in Parking Lot</div>
              <div className="p-2 bg-blue-100 rounded">Camera 4 back online</div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
