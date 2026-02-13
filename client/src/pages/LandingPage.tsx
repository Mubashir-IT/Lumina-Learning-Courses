import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { GraduationCap, PlayCircle, BookOpen, Trophy, Users, ShieldCheck, ArrowRight, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
              <GraduationCap className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="font-heading font-bold text-2xl tracking-tight">Lumina</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">Features</a>
            <a href="#courses" className="text-sm font-medium hover:text-primary transition-colors">Courses</a>
            <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">Pricing</a>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" className="font-semibold">Sign In</Button>
            </Link>
            <Link href="/">
              <Button className="rounded-full px-6 shadow-lg shadow-primary/20">Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-[50%] h-full opacity-50 overflow-hidden">
           <img src="/assets/hero-bg.png" className="w-full h-full object-cover blur-sm" alt="" />
           <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-in slide-in-from-left-8 duration-700">
            <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-1 rounded-full text-sm font-semibold">
              ✨ The Future of Learning is Here
            </Badge>
            <h1 className="text-5xl md:text-7xl font-heading font-bold leading-[1.1] tracking-tight">
              Master New Skills with <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">Precision</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
              Unlock your potential with our immersive online courses. Expert-led, community-driven, and designed for the modern career.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/">
                <Button size="lg" className="h-14 px-10 rounded-full text-lg shadow-xl shadow-primary/25 hover:shadow-primary/40 transition-all">
                  Browse Courses
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="h-14 px-10 rounded-full text-lg border-2">
                <PlayCircle className="mr-2 h-5 w-5" /> Watch Demo
              </Button>
            </div>
            <div className="flex items-center gap-4 pt-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="h-10 w-10 rounded-full border-2 border-background bg-muted overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?u=${i}`} alt="" />
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground font-medium">
                <span className="text-foreground font-bold">10k+</span> students already joined
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold">Why Choose Lumina?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide the tools and community you need to succeed in the digital economy.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: BookOpen, title: "Expert-Led Content", desc: "Courses designed by industry veterans with real-world experience." },
              { icon: Trophy, title: "Gamified Learning", desc: "Earn points, badges and climb the leaderboard as you master skills." },
              { icon: Users, title: "Community Driven", desc: "Collaborate with peers and get direct feedback from mentors." }
            ].map((feature, i) => (
              <Card key={i} className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-8 space-y-4">
                  <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                    <feature.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold font-heading">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-primary/40">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
            <div className="relative z-10 space-y-8">
              <h2 className="text-4xl md:text-6xl font-heading font-bold text-primary-foreground">
                Ready to Start Your Journey?
              </h2>
              <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto">
                Join thousands of students and start learning today. No credit card required to start.
              </p>
              <Link href="/">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 h-16 px-12 rounded-full text-xl font-bold border-none">
                  Join for Free <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <GraduationCap className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-heading font-bold text-xl">Lumina</span>
          </div>
          <p className="text-sm text-muted-foreground">© 2026 Lumina Learning Platform. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">Terms</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">Privacy</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
