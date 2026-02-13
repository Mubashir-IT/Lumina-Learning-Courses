import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Clock, HelpCircle, CheckCircle2, AlertCircle, ArrowRight } from "lucide-react";

const quizzes = [
  {
    id: 1,
    title: "Design Principles Fundamentals",
    questions: 15,
    duration: "20 min",
    status: "completed",
    score: 92,
    image: "/assets/course-1.png",
    category: "Design"
  },
  {
    id: 2,
    title: "Color Theory & Accessibility",
    questions: 10,
    duration: "15 min",
    status: "in-progress",
    progress: 40,
    image: "/assets/course-2.png",
    category: "Theory"
  },
  {
    id: 3,
    title: "React Component Lifecycle",
    questions: 25,
    duration: "35 min",
    status: "pending",
    image: "/assets/course-3.png",
    category: "Development"
  },
  {
    id: 4,
    title: "UX Research Methods",
    questions: 12,
    duration: "18 min",
    status: "pending",
    image: "/assets/course-4.png",
    category: "UX/UI"
  }
];

export default function Quizzes() {
  return (
    <MainLayout>
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-heading font-bold text-foreground">Quizzes</h1>
            <p className="text-muted-foreground mt-1">
              Test your knowledge and earn points.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quizzes.map((quiz) => (
            <Card key={quiz.id} className="group hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 border-border/50 overflow-hidden">
              <div className="h-32 w-full overflow-hidden relative">
                 <img src={quiz.image} alt={quiz.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                 <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                 <Badge className="absolute top-3 right-3 bg-background/80 backdrop-blur-md text-foreground border-0 shadow-sm">
                    {quiz.category}
                 </Badge>
              </div>
              
              <CardHeader className="pb-2">
                <h3 className="font-heading font-semibold text-lg line-clamp-2 group-hover:text-primary transition-colors">
                  {quiz.title}
                </h3>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <HelpCircle className="h-3.5 w-3.5" />
                    <span>{quiz.questions} Questions</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{quiz.duration}</span>
                  </div>
                </div>

                {quiz.status === "completed" ? (
                  <div className="bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 p-3 rounded-xl flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5" />
                      <span className="font-semibold text-sm">Completed</span>
                    </div>
                    <span className="font-bold text-lg">{quiz.score}%</span>
                  </div>
                ) : quiz.status === "in-progress" ? (
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-medium">
                      <span className="text-primary">In Progress</span>
                      <span>{quiz.progress}%</span>
                    </div>
                    <Progress value={quiz.progress} className="h-2" />
                  </div>
                ) : (
                   <div className="bg-muted/30 p-3 rounded-xl flex items-center gap-2 text-muted-foreground text-sm">
                      <AlertCircle className="h-4 w-4" />
                      <span>Not started yet</span>
                   </div>
                )}
              </CardContent>

              <CardFooter className="pt-2">
                <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors" variant={quiz.status === 'pending' ? 'default' : 'outline'}>
                  {quiz.status === 'completed' ? 'Retake Quiz' : quiz.status === 'in-progress' ? 'Continue Quiz' : 'Start Quiz'}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
