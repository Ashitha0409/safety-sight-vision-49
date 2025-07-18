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
import Crowd from "./pages/admin/crowd";
import LostFoundAdmin from "./pages/admin/lostfound";
import AdminSettings from "./pages/admin/Settings";
import AdminAISummary from "./pages/admin/ai-summary";
import IncidentDashboard from "./pages/admin/IncidentDashboard";

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
            <Route path="crowd" element={<Crowd />} />
            <Route path="lostfound" element={<LostFoundAdmin />} />
            <Route path="ai-summary" element={<AdminAISummary />} />
            <Route path="incident-dashboard" element={<IncidentDashboard />} />
            <Route path="settings" element={<AdminSettings />} />
          </Route>
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
