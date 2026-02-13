import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, 
  BookOpen, 
  BrainCircuit, 
  Trophy, 
  User, 
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
  GraduationCap
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/" },
  { icon: BookOpen, label: "My Courses", href: "/courses" },
  { icon: BrainCircuit, label: "Quizzes", href: "/quizzes" },
  { icon: Trophy, label: "Leaderboard", href: "/leaderboard" },
];

export function Sidebar() {
  const [location] = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside 
      className={cn(
        "bg-sidebar h-screen border-r border-sidebar-border transition-all duration-300 flex flex-col sticky top-0 left-0 z-40",
        collapsed ? "w-[80px]" : "w-[280px]"
      )}
    >
      <div className="p-6 flex items-center gap-3">
        <div className="h-10 w-10 rounded-xl bg-primary flex items-center justify-center shrink-0 shadow-lg shadow-primary/20">
          <GraduationCap className="h-6 w-6 text-primary-foreground" />
        </div>
        {!collapsed && (
          <h1 className="font-heading font-bold text-xl text-sidebar-foreground tracking-tight">
            Lumina
          </h1>
        )}
      </div>

      <div className="flex-1 py-6 px-4 space-y-2">
        {navItems.map((item) => {
          const isActive = location === item.href || (item.href !== "/" && location.startsWith(item.href));
          return (
            <Link key={item.href} href={item.href}>
              <div 
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all duration-200 group relative overflow-hidden",
                  isActive 
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/20" 
                    : "text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                )}
              >
                <item.icon className={cn("h-5 w-5 shrink-0", isActive && "animate-pulse")} />
                {!collapsed && (
                  <span className="font-medium text-sm">{item.label}</span>
                )}
                
                {/* Active Indicator Strip */}
                {isActive && !collapsed && (
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 h-8 w-1 bg-white/20 rounded-l-full" />
                )}
              </div>
            </Link>
          );
        })}

        <Separator className="my-4 bg-sidebar-border" />

        <Link href="/profile">
          <div className="flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors">
            <User className="h-5 w-5 shrink-0" />
            {!collapsed && <span className="font-medium text-sm">Profile</span>}
          </div>
        </Link>
        <Link href="/settings">
          <div className="flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors">
            <Settings className="h-5 w-5 shrink-0" />
            {!collapsed && <span className="font-medium text-sm">Settings</span>}
          </div>
        </Link>
      </div>

      <div className="p-4 mt-auto">
        <Button 
          variant="ghost" 
          size="icon" 
          className="w-full flex items-center justify-center hover:bg-sidebar-accent text-muted-foreground"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
        </Button>
      </div>
    </aside>
  );
}
