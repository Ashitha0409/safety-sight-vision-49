import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Eye, MapPin, UserCheck, AlertTriangle, Users, Bot, Navigation } from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: Users,
      title: "Crowd Monitoring",
      description: "Real-time crowd density tracking with AI-powered analysis and 15-minute predictions"
    },
    {
      icon: AlertTriangle,
      title: "AI Alerts",
      description: "Automated detection of critical events like fires, accidents, and anomalies"
    },
    {
      icon: Navigation,
      title: "Safe Routes",
      description: "Dynamic route optimization avoiding crowded areas for safer navigation"
    },
    {
      icon: UserCheck,
      title: "Lost & Found",
      description: "AI-powered facial recognition to help locate missing persons quickly"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      {/* Header */}
      <header className="bg-card/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Shield className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-foreground">Drishti</span>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" asChild>
                <Link to="/auth/login">Login</Link>
              </Button>
              <Button variant="hero" asChild>
                <Link to="/auth/register">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              See Beyond the
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Crowd</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Drishti combines AI-powered surveillance, crowd analytics, and real-time safety monitoring 
              to create safer public spaces for everyone. Experience next-generation safety technology.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" variant="hero" asChild>
              <Link to="/auth/user/login">
                <Eye className="h-5 w-5" />
                Login as User
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/auth/admin/login">
                <Shield className="h-5 w-5" />
                Login as Admin
              </Link>
            </Button>
            <Button size="lg" variant="safe" asChild>
              <Link to="/auth/register">
                <UserCheck className="h-5 w-5" />
                Register Now
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Core Safety Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Advanced AI technology working 24/7 to keep communities safe and connected
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-sm">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Vision
              </h2>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                To create a world where public spaces are inherently safer through intelligent monitoring, 
                proactive alerts, and community-driven safety initiatives. Drishti empowers both authorities 
                and citizens with real-time insights to prevent incidents before they escalate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Shield className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-foreground">Drishti</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2024 Drishti Safety Solutions. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}