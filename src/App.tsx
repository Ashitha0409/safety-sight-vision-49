import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Page imports
import Home from "./pages/Home";
import Layout from "./components/Layout";
import NotFound from "./pages/NotFound";

// Auth pages
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

// User pages
import UserDashboard from "./pages/user/Dashboard";
import ReportIncident from "./pages/user/ReportIncident";
import LostFound from "./pages/user/LostFound";
import SafeRoute from "./pages/user/SafeRoute";
import AISummary from "./pages/user/AISummary";
import History from "./pages/user/History";
import UserSettings from "./pages/user/Settings";

// Admin pages
import AdminDashboard from "./pages/admin/Dashboard";
import CrowdMonitoring from "./pages/admin/CrowdMonitoring";
import AdminAISummary from "./pages/admin/AISummary";
import Alerts from "./pages/admin/Alerts";
import ResponderDispatch from "./pages/admin/ResponderDispatch";
import IncidentManagement from "./pages/admin/IncidentManagement";
import LostFoundAI from "./pages/admin/LostFoundAI";
import AdminSettings from "./pages/admin/Settings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* Auth Routes */}
          <Route path="/auth/:type/login" element={<Login />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
          
          {/* User Panel */}
          <Route path="/user" element={<Layout />}>
            <Route path="dashboard" element={<UserDashboard />} />
            <Route path="report" element={<ReportIncident />} />
            <Route path="lost-found" element={<LostFound />} />
            <Route path="safe-route" element={<SafeRoute />} />
            <Route path="ai-summary" element={<AISummary />} />
            <Route path="history" element={<History />} />
            <Route path="settings" element={<UserSettings />} />
          </Route>
          
          {/* Admin Panel */}
          <Route path="/admin" element={<Layout />}>
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="crowd-monitoring" element={<CrowdMonitoring />} />
            <Route path="ai-summary" element={<AdminAISummary />} />
            <Route path="alerts" element={<Alerts />} />
            <Route path="responder-dispatch" element={<ResponderDispatch />} />
            <Route path="incident-management" element={<IncidentManagement />} />
            <Route path="lost-found-ai" element={<LostFoundAI />} />
            <Route path="settings" element={<AdminSettings />} />
          </Route>
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
