import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlayCircle, CheckCircle, Lock, FileText, Download, Share2, Star } from "lucide-react";
import { Link, useRoute } from "wouter";

export default function CourseDetails() {
  const [, params] = useRoute("/courses/:id");
  const id = params?.id;

  // Mock data - in a real app, fetch based on ID
  const course = {
    title: "Advanced 3D Abstract Design Principles",
    description: "Master the art of creating stunning 3D abstract compositions using modern tools and techniques. This course covers everything from lighting and texturing to final rendering and post-processing.",
    image: "/assets/course-1.png",
    progress: 75,
    author: "Sarah Jenkins",
    authorAvatar: "https://github.com/shadcn.png",
    rating: 4.8,
    students: 1234
  };

  const modules = [
    {
      id: "m1",
      title: "Module 1: Introduction to 3D Space",
      lessons: [
        { title: "Understanding the Viewport", duration: "10:00", completed: true, type: "video", locked: false },
        { title: "Basic Primitives and Shapes", duration: "15:30", completed: true, type: "video", locked: false },
        { title: "Navigation Shortcuts", duration: "05:00", completed: true, type: "article", locked: false },
      ]
    },
    {
      id: "m2",
      title: "Module 2: Lighting & Composition",
      lessons: [
        { title: "Three-Point Lighting Setup", duration: "20:00", completed: true, type: "video", locked: false },
        { title: "Color Theory in 3D", duration: "12:45", completed: false, type: "video", locked: false },
        { title: "Camera Angles and Focal Length", duration: "18:20", completed: false, type: "video", locked: false },
      ]
    },
    {
      id: "m3",
      title: "Module 3: Advanced Texturing",
      lessons: [
        { title: "Procedural Materials", duration: "25:00", completed: false, type: "video", locked: true },
        { title: "UV Mapping Techniques", duration: "30:00", completed: false, type: "video", locked: true },
      ]
    }
  ];

  return (
    <MainLayout>
      <div className="space-y-8">
        {/* Hero Section */}
        <div className="relative rounded-3xl overflow-hidden h-[300px] w-full group">
          <img 
            src={course.image} 
            alt={course.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8 flex flex-col justify-end">
            <div className="max-w-3xl space-y-4 animate-in slide-in-from-bottom-6 duration-700">
              <Badge className="bg-primary hover:bg-primary/90 text-white border-0">Design</Badge>
              <h1 className="text-3xl md:text-5xl font-heading font-bold text-white leading-tight">
                {course.title}
              </h1>
              <p className="text-gray-200 text-lg line-clamp-2 max-w-2xl">
                {course.description}
              </p>
              
              <div className="flex items-center gap-6 text-white/80 pt-2">
                <div className="flex items-center gap-2">
                  <img src={course.authorAvatar} className="h-8 w-8 rounded-full border border-white/20" alt={course.author} />
                  <span className="font-medium text-white">{course.author}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span>{course.rating} ({course.students} students)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content: Tabs & Modules */}
          <div className="lg:col-span-2 space-y-6">
            <Tabs defaultValue="modules" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-muted/50 p-1 rounded-xl">
                <TabsTrigger value="modules" className="rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-sm">Modules</TabsTrigger>
                <TabsTrigger value="resources" className="rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-sm">Resources</TabsTrigger>
                <TabsTrigger value="discussion" className="rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-sm">Discussion</TabsTrigger>
              </TabsList>
              
              <TabsContent value="modules" className="mt-6 space-y-6 animate-in fade-in zoom-in-95 duration-300">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-heading font-semibold text-lg">Course Content</h3>
                  <span className="text-sm text-muted-foreground">12 Lessons • 3h 45m Total</span>
                </div>
                
                <Accordion type="single" collapsible defaultValue="m2" className="space-y-4">
                  {modules.map((module) => (
                    <AccordionItem key={module.id} value={module.id} className="border border-border/50 rounded-xl bg-card overflow-hidden shadow-sm">
                      <AccordionTrigger className="px-6 py-4 hover:bg-muted/50 hover:no-underline transition-colors">
                        <span className="font-semibold text-left">{module.title}</span>
                      </AccordionTrigger>
                      <AccordionContent className="px-0 pb-0">
                        <div className="divide-y divide-border/50">
                          {module.lessons.map((lesson, idx) => (
                            <div 
                              key={idx} 
                              className={`flex items-center justify-between p-4 px-6 hover:bg-muted/30 transition-colors ${lesson.locked ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer group'}`}
                            >
                              <div className="flex items-center gap-4">
                                <div className={`h-8 w-8 rounded-full flex items-center justify-center shrink-0 ${
                                  lesson.completed ? 'bg-green-100 text-green-600' : 
                                  lesson.locked ? 'bg-muted text-muted-foreground' : 
                                  'bg-primary/10 text-primary'
                                }`}>
                                  {lesson.completed ? <CheckCircle className="h-4 w-4" /> : 
                                   lesson.locked ? <Lock className="h-4 w-4" /> :
                                   <PlayCircle className="h-4 w-4" />}
                                </div>
                                <div>
                                  <p className="font-medium text-sm group-hover:text-primary transition-colors">{lesson.title}</p>
                                  <div className="flex items-center gap-2 mt-0.5">
                                    <Badge variant="outline" className="text-[10px] h-5 px-1.5 font-normal border-border/50 text-muted-foreground capitalize">
                                      {lesson.type}
                                    </Badge>
                                    <span className="text-xs text-muted-foreground">{lesson.duration}</span>
                                  </div>
                                </div>
                              </div>
                              
                              {!lesson.locked && (
                                <Button size="sm" variant="ghost" className="opacity-0 group-hover:opacity-100 transition-opacity">
                                  Start
                                </Button>
                              )}
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabsContent>
              
              <TabsContent value="resources">
                <div className="p-8 text-center text-muted-foreground bg-card rounded-xl border border-border/50 border-dashed">
                  <FileText className="h-10 w-10 mx-auto mb-3 opacity-20" />
                  <p>Course resources and downloads will appear here.</p>
                </div>
              </TabsContent>
              
              <TabsContent value="discussion">
                 <div className="p-8 text-center text-muted-foreground bg-card rounded-xl border border-border/50 border-dashed">
                  <p>Join the discussion with other students.</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar: Progress & Actions */}
          <div className="space-y-6">
            <div className="bg-card rounded-2xl p-6 border border-border/50 shadow-sm sticky top-24">
              <h3 className="font-heading font-semibold text-lg mb-4">Your Progress</h3>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-primary">75% Completed</span>
                  <span className="text-muted-foreground">9/12 Lessons</span>
                </div>
                <Progress value={75} className="h-3" />
              </div>
              
              <Button className="w-full size-lg text-lg h-12 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all">
                Continue Learning
              </Button>
              
              <div className="grid grid-cols-2 gap-3 mt-4">
                 <Button variant="outline" className="w-full">
                  <Download className="mr-2 h-4 w-4" /> Certificate
                 </Button>
                 <Button variant="outline" className="w-full">
                  <Share2 className="mr-2 h-4 w-4" /> Share
                 </Button>
              </div>

              <div className="mt-8 pt-6 border-t border-border/50">
                 <h4 className="font-medium mb-3 text-sm">Skills you'll gain</h4>
                 <div className="flex flex-wrap gap-2">
                    {["3D Modeling", "Lighting", "Texturing", "Blender", "Composition"].map(skill => (
                      <Badge key={skill} variant="secondary" className="bg-secondary/30 text-secondary-foreground hover:bg-secondary/50">
                        {skill}
                      </Badge>
                    ))}
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
