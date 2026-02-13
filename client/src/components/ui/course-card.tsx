import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PlayCircle, Clock, Star } from "lucide-react";
import { Link } from "wouter";

interface CourseProps {
  id: string;
  title: string;
  image: string;
  progress: number;
  totalModules: number;
  duration: string;
  rating: number;
  category: string;
}

export function CourseCard({ id, title, image, progress, totalModules, duration, rating, category }: CourseProps) {
  return (
    <Link href={`/courses/${id}`}>
      <Card className="group overflow-hidden border-border/50 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 cursor-pointer h-full flex flex-col bg-card/50 backdrop-blur-sm">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <Button size="sm" className="w-full bg-white/20 hover:bg-white/30 text-white backdrop-blur-md border-white/20">
              <PlayCircle className="mr-2 h-4 w-4" /> Continue Learning
            </Button>
          </div>
          <Badge className="absolute top-3 right-3 bg-background/80 backdrop-blur-md text-foreground hover:bg-background/90 shadow-sm border-0">
            {category}
          </Badge>
        </div>
        
        <CardContent className="p-5 flex-1 flex flex-col gap-3">
          <h3 className="font-heading font-semibold text-lg line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          
          <div className="flex items-center gap-4 text-xs text-muted-foreground mt-auto">
            <div className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="h-3.5 w-3.5 text-yellow-500 fill-yellow-500" />
              <span>{rating}</span>
            </div>
          </div>
        </CardContent>
        
        <CardFooter className="p-5 pt-0 flex flex-col gap-2">
          <div className="flex justify-between text-xs font-medium text-muted-foreground w-full">
            <span>{progress}% Complete</span>
            <span>{totalModules} Modules</span>
          </div>
          <Progress value={progress} className="h-2 w-full bg-muted" />
        </CardFooter>
      </Card>
    </Link>
  );
}
