import { Search, Bell, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useTheme } from "next-themes";
import { Link } from "wouter";

export function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="h-20 border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-30 px-8 flex items-center justify-between gap-4">
      <div className="flex items-center w-full max-w-md bg-muted/50 rounded-2xl px-4 py-2 focus-within:ring-2 ring-primary/20 transition-all border border-transparent focus-within:border-primary/50 focus-within:bg-background">
        <Search className="h-5 w-5 text-muted-foreground" />
        <input 
          type="text" 
          placeholder="Search for courses, skills, or mentors..." 
          className="bg-transparent border-none outline-none w-full ml-3 text-sm placeholder:text-muted-foreground"
        />
      </div>

      <div className="flex items-center gap-4">
        <Button 
          variant="ghost" 
          size="icon" 
          className="rounded-full h-10 w-10 hover:bg-muted text-muted-foreground hover:text-primary transition-colors"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>

        <div className="relative">
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full h-10 w-10 hover:bg-muted text-muted-foreground hover:text-primary transition-colors relative"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute top-2 right-2 h-2.5 w-2.5 bg-red-500 rounded-full border-2 border-background animate-pulse" />
          </Button>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="rounded-full h-12 pl-2 pr-4 gap-3 hover:bg-muted border border-border/50">
              <Avatar className="h-8 w-8 ring-2 ring-white dark:ring-slate-800">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="flex flex-col items-start text-xs">
                <span className="font-semibold text-foreground text-left">Jane Doe</span>
                <span className="text-muted-foreground text-left">Student</span>
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56 rounded-xl shadow-xl border-border/50 p-2">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <Link href="/profile">
              <DropdownMenuItem className="rounded-lg cursor-pointer">Profile</DropdownMenuItem>
            </Link>
            <DropdownMenuItem className="rounded-lg cursor-pointer">Billing</DropdownMenuItem>
            <Link href="/settings">
              <DropdownMenuItem className="rounded-lg cursor-pointer">Settings</DropdownMenuItem>
            </Link>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="rounded-lg cursor-pointer text-destructive focus:text-destructive">Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
