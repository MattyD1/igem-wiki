"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <Icons.logo className="h-6 w-6" />
        <span className="inline-block font-bold">{siteConfig.name}</span>
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        <Link
          href="/docs"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/docs" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Documentation
        </Link>
        <Link
          href="/docs/wet-lab"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/docs/components")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Wet Lab
        </Link>
        <Link
          href="/human-practices"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/human-practices")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Human Practices
        </Link>
        <Link
          href="/team"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/team")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Team
        </Link>
      </nav>
    </div>
  )
}
