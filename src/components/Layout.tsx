import { Outlet, Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Eye, MapPin, UserCheck, Settings, LogOut, Menu } from "lucide-react";
import { useState } from "react";

export default function Layout() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const isHomePage = location.pathname === "/";
  const isAuthPage = location.pathname.includes("/auth/");
  const isUserPanel = location.pathname.startsWith("/user");
  const isAdminPanel = location.pathname.startsWith("/admin");

  if (isHomePage || isAuthPage) {
    return <Outlet />;
  }

  const userNavItems = [
    { to: "/user/dashboard", icon: Eye, label: "Dashboard" },
    { to: "/user/report", icon: Shield, label: "Report Incident" },
    { to: "/user/lost-found", icon: UserCheck, label: "Lost & Found" },
    { to: "/user/safe-route", icon: MapPin, label: "Safe Routes" },
    { to: "/user/ai-summary", icon: Eye, label: "AI Summary" },
    { to: "/user/history", icon: Shield, label: "My Reports" },
    { to: "/user/settings", icon: Settings, label: "Settings" },
  ];

  const adminNavItems = [
    { to: "/admin/dashboard", icon: Eye, label: "Dashboard" },
    { to: "/admin/crowd", icon: MapPin, label: "Crowd Monitoring" },
    { to: "/admin/ai-summary", icon: Eye, label: "AI Summary" },
    { to: "/admin/incident-dashboard", icon: Eye, label: "Incident Dashboard" },
    { to: "/admin/lostfound", icon: UserCheck, label: "Lost & Found AI" },
    { to: "/admin/settings", icon: Settings, label: "Settings" },
  ];

  const navItems = isUserPanel ? userNavItems : adminNavItems;
  const panelType = isUserPanel ? "User" : "Admin";

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-4">
              <Link to="/" className="flex items-center gap-2">
                <Shield className="h-8 w-8 text-primary" />
                <span className="text-xl font-bold text-foreground">Drishti</span>
              </Link>
              <span className="text-sm text-muted-foreground">{panelType} Panel</span>
            </div>
            
            <div className="hidden md:flex items-center gap-4">
              <span className="text-sm text-muted-foreground">Welcome back!</span>
              <Button variant="outline" size="sm" asChild>
                <Link to="/">
                  <LogOut className="h-4 w-4" />
                  Logout
                </Link>
              </Button>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <nav className={`w-64 bg-card border-r border-border min-h-screen p-4 ${isMobileMenuOpen ? 'block' : 'hidden'} md:block`}>
          <div className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                    isActive 
                      ? 'bg-primary text-primary-foreground' 
                      : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}