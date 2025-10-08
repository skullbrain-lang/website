"use client"

import * as React from "react"
import { useParams } from "next/navigation";
import Link from "next/link";
import {
    Sidebar,
    SidebarProvider,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarInset,
    SidebarHeader,
    SidebarTrigger,
    SidebarContent,
    SidebarGroup,
} from "@/components/ui/sidebar"
import { Book, ChevronRight, PlayCircle, ArrowRight } from "lucide-react"
import Footer from "@/components/layout/Footer"
import FloatingVideo from "@/components/ui/floating-video"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator";
import { SpecificationData, SpecificationInfo } from "./data";



export default function SpecLayoutClient({ children, specEntries }: { children: React.ReactNode, specEntries :SpecificationData }) {
    const [showVideo, setShowVideo] = React.useState(true);
    const { slug }= useParams()

    
    const entries = Array.from(specEntries.entries())
    const currentEntryIndex = entries.findIndex(([k]) => k === slug);
    let nextEntry: [string,SpecificationInfo] | null = null;

    // 2. Check if the current entry was found and if it's not the last element
    if (currentEntryIndex !== -1 && currentEntryIndex < entries.length - 1) {
        // If the index is valid and not the last item, get the next item
        nextEntry = entries[currentEntryIndex + 1];
    }

    return (
        <SidebarProvider>
            {showVideo && (
                <FloatingVideo
                    videoUrl="https://www.youtube.com/embed/QPW3XwBoQlw?autoplay=1&mute=1&loop=1&playlist=QPW3XwBoQlw&controls=0"
                    onClose={() => setShowVideo(false)}
                />
            )}
            <Sidebar className="pt-16">
                <SidebarHeader>
                    <div className="flex items-center gap-2">
                        <Book className="size-5 text-primary" />
                        <span className="font-headline text-lg font-semibold">Specification</span>
                    </div>
                </SidebarHeader>
                <SidebarContent>
                    <SidebarMenu>
                        {entries.map(([k, { label }]) => (
                            <SidebarGroup key={k}>
                                <SidebarMenuItem>
                                    <SidebarMenuButton
                                        asChild
                                        size="sm"
                                        isActive={slug === k}
                                    >
                                        <Link href={k}>
                                            <ChevronRight className="size-3" />
                                            <span>{label}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            </SidebarGroup>
                        ))}
                    </SidebarMenu>
                </SidebarContent>
            </Sidebar>
            <SidebarInset className="pl-48">
                <div className="p-4 md:p-8 flex flex-col flex-1 min-h-0">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                        <div className="flex items-center gap-2">
                            <SidebarTrigger />
                            <h1 className="font-headline text-3xl font-bold">Language Spec</h1>
                        </div>
                        <Button variant="outline" size="sm" onClick={() => setShowVideo(true)} className="self-end md:self-center">
                            <PlayCircle className="mr-2 h-4 w-4" />
                            Open Distraction
                        </Button>
                    </div>
                    <div className="overflow-auto flex-1 min-h-0">
                        <div className="max-w-none">
                            {children}
                        </div>
                        {nextEntry && (
                            <div className="mt-12">
                                <Separator />
                                <div className="flex justify-end mt-4">
                                    <Button asChild>
                                        <Link href={nextEntry[0]}>
                                            Next: {nextEntry[1].label}
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <Footer />
            </SidebarInset>
        </SidebarProvider>
    )
}