import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { CourseCard } from "@/components/ui/course-card";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { ArrowRight, Flame, Trophy, TrendingUp, Clock } from "lucide-react";

const recentCourses = [
  {
    id: "1",
    title: "Advanced 3D Abstract Design Principles",
    image: "/assets/course-1.png",
    progress: 75,
    totalModules: 12,
    duration: "6h 30m",
    rating: 4.8,
    category: "Design"
  },
  {
    id: "2",
    title: "Geometric Art & Color Theory Masterclass",
    image: "/assets/course-2.png",
    progress: 32,
    totalModules: 8,
    duration: "4h 15m",
    rating: 4.9,
    category: "Art"
  },
  {
    id: "3",
    title: "Glassmorphism UI/UX Trends 2026",
    image: "/assets/course-3.png",
    progress: 10,
    totalModules: 15,
    duration: "8h 45m",
    rating: 4.7,
    category: "UI/UX"
  }
];

export default function Dashboard() {
  return (
    <MainLayout>
      <div className="space-y-8">
        {/* Welcome Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-heading font-bold text-foreground">
              Welcome back, Jane! 👋
            </h1>
            <p className="text-muted-foreground mt-1">
              You've learned for <span className="text-primary font-semibold">32 hours</span> this week. Keep it up!
            </p>
          </div>
          <Button size="lg" className="shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all">
            Resume Learning <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="bg-gradient-to-br from-blue-50 to-white dark:from-slate-900 dark:to-slate-800 border-border/50">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                <Flame className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground font-medium">Day Streak</p>
                <h3 className="text-2xl font-bold font-heading">12 Days</h3>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-purple-50 to-white dark:from-slate-900 dark:to-slate-800 border-border/50">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
                <Trophy className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground font-medium">Points Earned</p>
                <h3 className="text-2xl font-bold font-heading">2,450</h3>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-green-50 to-white dark:from-slate-900 dark:to-slate-800 border-border/50">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                <TrendingUp className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground font-medium">Courses Completed</p>
                <h3 className="text-2xl font-bold font-heading">8</h3>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-orange-50 to-white dark:from-slate-900 dark:to-slate-800 border-border/50">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 dark:text-orange-400">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground font-medium">Hours Spent</p>
                <h3 className="text-2xl font-bold font-heading">124h</h3>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Recent Courses */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-heading font-semibold">Continue Learning</h2>
              <Button variant="link" className="text-primary p-0 h-auto font-medium">View All</Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recentCourses.map((course) => (
                <CourseCard key={course.id} {...course} />
              ))}
            </div>
          </div>

          {/* Sidebar Widgets */}
          <div className="space-y-6">
             <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-heading font-semibold">Study Plan</h2>
            </div>
            <Card className="border-border/50 shadow-sm">
              <CardContent className="p-4">
                 <div className="space-y-4">
                    <div className="flex gap-4 items-start pb-4 border-b border-border/50 last:border-0 last:pb-0">
                      <div className="bg-blue-100 text-blue-600 rounded-lg p-2 shrink-0 text-center min-w-[3.5rem]">
                        <span className="block text-xs font-bold uppercase">Feb</span>
                        <span className="block text-lg font-bold">14</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm">Design Principles Quiz</h4>
                        <p className="text-xs text-muted-foreground mt-1">10:00 AM • 30 mins</p>
                        <Button size="sm" variant="outline" className="mt-2 h-7 text-xs rounded-full">Set Reminder</Button>
                      </div>
                    </div>
                    <div className="flex gap-4 items-start pb-4 border-b border-border/50 last:border-0 last:pb-0">
                      <div className="bg-purple-100 text-purple-600 rounded-lg p-2 shrink-0 text-center min-w-[3.5rem]">
                        <span className="block text-xs font-bold uppercase">Feb</span>
                        <span className="block text-lg font-bold">16</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm">Submit 3D Project</h4>
                        <p className="text-xs text-muted-foreground mt-1">11:59 PM • Deadline</p>
                      </div>
                    </div>
                 </div>
              </CardContent>
            </Card>

            <Card className="bg-primary text-primary-foreground border-none shadow-lg shadow-primary/20 overflow-hidden relative">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
              <CardContent className="p-6 relative z-10">
                <h3 className="font-heading font-bold text-lg mb-2">Upgrade to Pro</h3>
                <p className="text-primary-foreground/80 text-sm mb-4">Get unlimited access to all courses and premium features.</p>
                <Button className="w-full bg-white text-primary hover:bg-white/90 font-semibold border-none">
                  Get Started
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
