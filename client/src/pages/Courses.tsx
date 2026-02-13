import { MainLayout } from "@/components/layout/MainLayout";
import { CourseCard } from "@/components/ui/course-card";
import { Button } from "@/components/ui/button";
import { Filter, SlidersHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const allCourses = [
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
  },
  {
    id: "4",
    title: "Productivity Systems for Creative Minds",
    image: "/assets/course-4.png",
    progress: 0,
    totalModules: 6,
    duration: "2h 10m",
    rating: 4.6,
    category: "Productivity"
  },
  // Duplicates for grid demo
  {
    id: "5",
    title: "Motion Design Fundamentals with After Effects",
    image: "/assets/course-1.png",
    progress: 0,
    totalModules: 20,
    duration: "12h 00m",
    rating: 4.9,
    category: "Animation"
  },
  {
    id: "6",
    title: "Web Accessibility: Building for Everyone",
    image: "/assets/course-3.png",
    progress: 0,
    totalModules: 5,
    duration: "3h 45m",
    rating: 4.8,
    category: "Development"
  }
];

export default function Courses() {
  return (
    <MainLayout>
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-heading font-bold text-foreground">My Courses</h1>
            <p className="text-muted-foreground mt-1">
              Explore your learning journey and pick up where you left off.
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="gap-2">
                  <Filter className="h-4 w-4" /> Category
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>All Categories</DropdownMenuItem>
                <DropdownMenuItem>Design</DropdownMenuItem>
                <DropdownMenuItem>Development</DropdownMenuItem>
                <DropdownMenuItem>Marketing</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="outline" className="gap-2">
              <SlidersHorizontal className="h-4 w-4" /> Filter
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {allCourses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
