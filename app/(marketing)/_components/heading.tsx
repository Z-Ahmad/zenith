"use client"

import { useConvexAuth } from "convex/react"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/spinner"
import Link from "next/link"
import { SignInButton } from "@clerk/clerk-react"

export const Heading = () => {
  const {isAuthenticated, isLoading} = useConvexAuth();

  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
        Your Ideas, Documents, & Plans. Unified. Welcome to <span className="underline">Zenith</span>
      </h1>
      <h3 className="text-base sm:text-xl nd:text-2xl font-medium">
        Zenith is your essential tool to maximize productivity <br />
        and effortlessly achieve your goals.
      </h3>

      {isLoading && (
        <div className="w-full flex items-center justify-center">
          <Spinner size="lg" />
        </div>
      )}

      {isAuthenticated && !isLoading && (
        <Button asChild>
          <Link href="/documents">
            Enter Zenith
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      )}
      {!isAuthenticated && !isLoading && (
        <SignInButton mode="modal">
          <Button>
            Get Zenith free
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </SignInButton>
      )}
    </div>
  );
}