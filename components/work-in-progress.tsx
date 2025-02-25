import { ArrowRight, Construction, Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { SidebarInset } from "@/components/ui/sidebar"

export default function WorkInProgress() {
  return (
    <SidebarInset className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <main className="flex min-h-screen flex-col items-center justify-center p-8">
        <div className="max-w-4xl w-full space-y-12">
          {/* Main Content */}
          <div className="space-y-6 text-center">
            <div className="mx-auto bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center">
              <Construction className="w-10 h-10 text-primary animate-in zoom-in duration-500" />
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight animate-in slide-in-from-bottom-2 duration-500">
                Work in Progress
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-in slide-in-from-bottom-3 duration-500">
                This section of my portfolio is currently under development. I&apos;m working on something exciting to
                showcase here.
              </p>
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="space-y-4 max-w-xl mx-auto w-full animate-in slide-in-from-bottom-4 duration-500">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-muted-foreground">Development Progress</span>
              <span className="text-sm font-medium">75%</span>
            </div>
            <Progress value={75} className="h-2" />
          </div>

          {/* Status */}
          <div className="flex flex-col items-center gap-6 animate-in slide-in-from-bottom-5 duration-500">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Loader2 className="h-4 w-4 animate-spin" />
              Currently in development
            </div>

            <Button size="lg" className="animate-pulse">
              Check back soon
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Timeline */}
          <div className="pt-8 text-center text-sm text-muted-foreground animate-in slide-in-from-bottom-6 duration-500">
            <p>Expected completion: Soon™</p>
          </div>
        </div>
      </main>
    </SidebarInset>
  )
}

