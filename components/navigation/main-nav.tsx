"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Logo } from "@/components/ui/logo";

/**
 * Main Navigation Component
 *
 * Provides the primary navigation for the application using shadcn/ui NavigationMenu.
 * Includes dropdown menus for different sections of the application.
 */
export function MainNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              href="/"
              className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent/50 hover:text-accent-foreground focus:bg-accent/50 focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/30 data-[state=open]:bg-accent/30"
            >
              Home
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Explore</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-gradient-to-b p-6 no-underline outline-none select-none focus:shadow-md"
                    href="/"
                  >
                    <div className="flex items-center space-x-2 mt-4 mb-2">
                      <Logo size="sm" showText={false} />
                      <div className="flex flex-col items-start">
                        <span className="text-lg font-brand leading-none">
                          Neptune
                        </span>
                        <span className="text-xs text-muted-foreground leading-none">
                          community
                        </span>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm leading-tight">
                      Production-ready Next.js application with modern tools.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="/about" title="About">
                Learn more about our application and team.
              </ListItem>
              <ListItem href="/roadmap" title="Roadmap">
                View our development roadmap and upcoming features.
              </ListItem>
              <ListItem href="https://docs.neptune.cash/" title="Documentation">
                Access comprehensive documentation and guides.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <ListItem href="/exchanges" title="Where to Get Neptune">
                Find exchanges and platforms where you can buy Neptune tokens.
              </ListItem>
              <ListItem href="https://explorer.neptune.cash/" title="Explorer">
                Browse the Neptune blockchain and view transactions, blocks, and
                addresses.
              </ListItem>
              <ListItem
                href="https://docs.neptune.cash/developers"
                title="Build on Neptune"
              >
                Learn how to build decentralized applications on the Neptune
                blockchain.
              </ListItem>
              <ListItem
                href="https://github.com/neptune-community"
                title="GitHub"
              >
                View source code, contribute to development, and track project
                progress.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
