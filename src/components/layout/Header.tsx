
'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Menu, Skull } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import * as React from "react";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/editor", label: "Editor" },
    { href: "/spec", label: "Lang Specification" },
    { href: "/getting-started", label: "Getting Started" },
    { href: "/changelog", label: "Changelog" },
];

export default function Header() {
    const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Skull className="h-6 w-6 text-primary glitch" />
            <span className="font-bold font-headline sm:inline-block glitch-text">
              SkullBrain
            </span>
          </Link>
          <nav className="flex items-center gap-4 text-sm lg:gap-6">
             {navLinks.map(link => (
                <Link
                    key={link.href}
                    href={link.href}
                    className="transition-colors hover:text-primary text-foreground/80 glitch-text"
                >
                    {link.label}
                </Link>
             ))}
          </nav>
        </div>
        
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
           <div className="flex-1 justify-center md:hidden flex">
             <Link href="/" className="flex items-center space-x-2">
                <Skull className="h-6 w-6 text-primary glitch" />
                <span className="font-bold font-headline sm:inline-block glitch-text">
                    SkullBrain
                </span>
             </Link>
           </div>
          <SheetContent side="left" className="pr-0">
             <Link
                href="/"
                className="flex items-center space-x-2 mb-8"
                onClick={() => setOpen(false)}
            >
              <Skull className="h-6 w-6 text-primary glitch" />
              <span className="font-bold">SkullBrain</span>
            </Link>
            <div className="flex flex-col space-y-4">
              {navLinks.map(link => (
                <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg transition-colors hover:text-primary text-foreground/80"
                    onClick={() => setOpen(false)}
                >
                    {link.label}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>

        <div className="flex flex-1 items-center justify-end space-x-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary transition-colors">
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
            </a>
          <Button asChild size="sm" className="glitch">
            <Link href="/editor">Get Bussin'</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

    