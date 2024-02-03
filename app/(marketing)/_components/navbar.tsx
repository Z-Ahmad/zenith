"use client"
import { useConvexAuth } from "convex/react"
import { SignInButton, UserButton } from "@clerk/clerk-react"

import { useScrollTop } from "@/hooks/use-scroll-top"
import { ModeToggle } from "@/components/mode-toggle"
import { Spinner } from "@/components/spinner"
import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import { Logo } from "./logo"
import Link from "next/link"


export const Navbar = () => {
  const {isAuthenticated, isLoading} = useConvexAuth();
  const scrolled = useScrollTop()
  return (
    <div className={cn("z-50 bg-background dark:bg-[#111111] fixed top-0 flex items-center w-full p-6", scrolled && "border-b shadow-sm")}>
      <Logo />
      <div className="md:m-auto md:justify-end justify-between w-full flex items-center gap-x-2">

        {isLoading && (
          <Spinner />
        )}

        {/* Show login buttons when not logged in */}
        {!isAuthenticated && !isLoading && (
          <>
          <SignInButton mode="modal">
            <Button variant="ghost" size="sm">
              Log in
            </Button>
          </SignInButton>
          <SignInButton mode="modal">
            <Button size="sm">
              Get Zenith free
            </Button>
          </SignInButton>
          </>
        )}

        
        {isAuthenticated && !isLoading && (
            <>
              <Button variant="ghost" size={"sm"} asChild>
                <Link href="/documents">
                  Enter Zenith
                </Link>
              </Button>
              <UserButton
                afterSignOutUrl="/"
              />
            </>
          )
        }

        <ModeToggle />
      </div>
    </div>
  );
}