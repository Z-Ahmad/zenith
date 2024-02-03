"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export const Heading = () =>{
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
        Your Ideas, Documents, & Plans. Unified. Welcome to 
       {" "}<span className="underline">Zenith</span>
      </h1>
      <h3 className="text-base sm:text-xl nd:text-2xl font-medium">
        Zenith is your essential tool to maximize productivity <br/>
        and effortlessly achieve your goals.
      </h3>
      <Button>
        Enter Zentith
        <ArrowRight className="h-4 w-4 ml-2"/>
      </Button>
    </div>
  )
}