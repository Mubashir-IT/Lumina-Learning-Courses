import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Trophy, Medal, ArrowUp, ArrowDown, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const leaderboardData = [
  { rank: 1, name: "Alex Morgan", points: 12500, courses: 24, trend: "up", avatar: "https://github.com/shadcn.png" },
  { rank: 2, name: "Sarah Jenkins", points: 11200, courses: 21, trend: "up", avatar: "https://github.com/shadcn.png" },
  { rank: 3, name: "Michael Chen", points: 10800, courses: 19, trend: "down", avatar: "https://github.com/shadcn.png" },
  { rank: 4, name: "Emily Wilson", points: 9500, courses: 15, trend: "same", avatar: "https://github.com/shadcn.png" },
  { rank: 5, name: "David Miller", points: 8900, courses: 12, trend: "up", avatar: "https://github.com/shadcn.png" },
  { rank: 6, name: "Jessica Taylor", points: 8200, courses: 10, trend: "down", avatar: "https://github.com/shadcn.png" },
  { rank: 7, name: "Ryan Cooper", points: 7800, courses: 9, trend: "up", avatar: "https://github.com/shadcn.png" },
];

export default function Leaderboard() {
  return (
    <MainLayout>
      <div className="space-y-8">
        <div className="text-center space-y-4 py-8">
           <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-200 border-yellow-200 px-4 py-1.5 text-sm rounded-full">Weekly Challenge</Badge>
           <h1 className="text-4xl md:text-5xl font-heading font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
             Top Learners
           </h1>
           <p className="text-muted-foreground max-w-xl mx-auto text-lg">
             See who's leading the charts this week. Earn points by completing courses and acing quizzes!
           </p>
        </div>

        {/* Top 3 Podium */}
        <div className="flex flex-col md:flex-row justify-center items-end gap-6 mb-12 min-h-[300px]">
          {/* Rank 2 */}
          <div className="order-2 md:order-1 flex flex-col items-center w-full md:w-1/3 max-w-[280px]">
            <div className="relative mb-4">
              <Avatar className="h-20 w-20 border-4 border-slate-200 dark:border-slate-700 shadow-xl">
                <AvatarImage src={leaderboardData[1].avatar} />
                <AvatarFallback>SJ</AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold px-3 py-1 rounded-full text-sm shadow-md flex items-center gap-1">
                <span className="text-xs">#</span>2
              </div>
            </div>
            <Card className="w-full border-t-4 border-t-slate-300 dark:border-t-slate-600 shadow-lg relative top-4 z-10">
              <CardContent className="p-6 text-center pt-8">
                <h3 className="font-bold text-lg truncate">{leaderboardData[1].name}</h3>
                <p className="text-slate-500 font-medium">{leaderboardData[1].points.toLocaleString()} XP</p>
              </CardContent>
            </Card>
            <div className="h-16 w-full bg-gradient-to-b from-slate-100 to-transparent dark:from-slate-800/50 rounded-b-xl mx-4 opacity-50"></div>
          </div>

          {/* Rank 1 */}
          <div className="order-1 md:order-2 flex flex-col items-center w-full md:w-1/3 max-w-[300px] -mt-8 md:-mt-0">
             <div className="relative mb-4 z-20">
               <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-yellow-500 animate-bounce">
                 <Trophy className="h-8 w-8 fill-yellow-500" />
               </div>
              <Avatar className="h-28 w-28 border-4 border-yellow-400 shadow-2xl ring-4 ring-yellow-400/20">
                <AvatarImage src={leaderboardData[0].avatar} />
                <AvatarFallback>AM</AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-yellow-950 font-bold px-4 py-1.5 rounded-full text-sm shadow-lg flex items-center gap-1">
                <span className="text-xs">#</span>1
              </div>
            </div>
            <Card className="w-full border-t-4 border-t-yellow-400 shadow-xl z-10 scale-105">
              <CardContent className="p-6 text-center pt-10">
                <h3 className="font-bold text-xl truncate">{leaderboardData[0].name}</h3>
                <p className="text-yellow-600 dark:text-yellow-400 font-bold text-lg">{leaderboardData[0].points.toLocaleString()} XP</p>
              </CardContent>
            </Card>
            <div className="h-24 w-full bg-gradient-to-b from-yellow-100/50 to-transparent dark:from-yellow-900/20 rounded-b-xl mx-4"></div>
          </div>

          {/* Rank 3 */}
          <div className="order-3 md:order-3 flex flex-col items-center w-full md:w-1/3 max-w-[280px]">
            <div className="relative mb-4">
              <Avatar className="h-20 w-20 border-4 border-orange-300 dark:border-orange-700 shadow-xl">
                <AvatarImage src={leaderboardData[2].avatar} />
                <AvatarFallback>MC</AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-orange-300 dark:bg-orange-700 text-orange-900 dark:text-orange-100 font-bold px-3 py-1 rounded-full text-sm shadow-md flex items-center gap-1">
                <span className="text-xs">#</span>3
              </div>
            </div>
            <Card className="w-full border-t-4 border-t-orange-300 dark:border-t-orange-700 shadow-lg relative top-8 z-10">
              <CardContent className="p-6 text-center pt-8">
                <h3 className="font-bold text-lg truncate">{leaderboardData[2].name}</h3>
                <p className="text-orange-500 font-medium">{leaderboardData[2].points.toLocaleString()} XP</p>
              </CardContent>
            </Card>
             <div className="h-12 w-full bg-gradient-to-b from-orange-100/50 to-transparent dark:from-orange-900/20 rounded-b-xl mx-4 opacity-50"></div>
          </div>
        </div>

        {/* Full Table */}
        <Card className="border-border/50">
          <CardHeader>
            <CardTitle>All Rankings</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Rank</TableHead>
                  <TableHead>User</TableHead>
                  <TableHead>Courses</TableHead>
                  <TableHead className="text-right">Points</TableHead>
                  <TableHead className="w-[100px] text-right">Trend</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {leaderboardData.map((user) => (
                  <TableRow key={user.rank} className="hover:bg-muted/50">
                    <TableCell className="font-medium">
                      <div className={cn(
                        "h-8 w-8 rounded-full flex items-center justify-center font-bold",
                        user.rank <= 3 ? "bg-primary/10 text-primary" : "text-muted-foreground"
                      )}>
                        #{user.rank}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={user.avatar} />
                          <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <span className="font-medium">{user.name}</span>
                      </div>
                    </TableCell>
                    <TableCell>{user.courses}</TableCell>
                    <TableCell className="text-right font-bold text-primary">{user.points.toLocaleString()}</TableCell>
                    <TableCell className="text-right">
                      {user.trend === "up" && <ArrowUp className="h-4 w-4 text-green-500 ml-auto" />}
                      {user.trend === "down" && <ArrowDown className="h-4 w-4 text-red-500 ml-auto" />}
                      {user.trend === "same" && <Minus className="h-4 w-4 text-muted-foreground ml-auto" />}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
}
