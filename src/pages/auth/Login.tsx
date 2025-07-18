import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Shield, Eye, ArrowLeft } from "lucide-react";

export default function Login() {
  const { type } = useParams<{ type: "user" | "admin" }>();
  const isAdmin = type === "admin";
  
  const redirectPath = isAdmin ? "/admin/dashboard" : "/user/dashboard";

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>

        <Card className="border-border shadow-lg">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
              {isAdmin ? (
                <Shield className="h-8 w-8 text-primary" />
              ) : (
                <Eye className="h-8 w-8 text-primary" />
              )}
            </div>
            <CardTitle className="text-2xl">
              {isAdmin ? "Admin Login" : "User Login"}
            </CardTitle>
            <CardDescription>
              Sign in to access your {isAdmin ? "admin" : "user"} dashboard
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="Enter your email"
                  required 
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input 
                  id="password" 
                  type="password" 
                  placeholder="Enter your password"
                  required 
                />
              </div>

              <Button 
                type="submit" 
                className="w-full" 
                variant={isAdmin ? "default" : "hero"}
                asChild
              >
                <Link to={redirectPath}>
                  Sign In
                </Link>
              </Button>
            </form>

            <div className="text-center text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Link 
                to="/auth/register" 
                className="text-primary hover:text-primary-dark font-medium"
              >
                Register here
              </Link>
            </div>

            <div className="text-center">
              <Link 
                to={isAdmin ? "/auth/user/login" : "/auth/admin/login"}
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Switch to {isAdmin ? "User" : "Admin"} Login
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}