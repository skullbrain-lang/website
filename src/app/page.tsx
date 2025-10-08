
'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowRight, CheckSquare } from 'lucide-react';
import Image from 'next/image';
import React from 'react';


const FloatingThing = ({ children, className, animationDuration, animationDelay }: { children: React.ReactNode, className?: string, animationDuration?: string, animationDelay?: string }) => (
  <div
    className={`absolute text-5xl opacity-0 ${className}`}
    style={{
      animation: `float-in-out ${animationDuration || '10s'} infinite ${animationDelay || '0s'}`,
    }}
  >
    {children}
  </div>
);


export default function Home() {
  return (
    <div className="flex flex-col items-center bg-black text-white">
      {/* Hero Section */}
      <Hero />
      <Features />
      <GehDeeper />
      <CallToAction />
    </div>
  );
}

function Hero() {
  const [isOverdrive, setIsOverdrive] = React.useState(false);

  return <section
    className="w-full min-h-screen flex flex-col items-center justify-center text-center p-4 relative overflow-hidden group"
    data-overdrive={isOverdrive}
    style={{
      '--noise-bg-color': 'hsl(var(--primary) / 0.1)',
    } as React.CSSProperties}
  >
    <div className="absolute inset-0 bg-noise opacity-30 group-data-[overdrive=true]:animate-color-pulse"></div>
    <div className="absolute inset-0 bg-radial-vignette"></div>

    <FloatingThing className="top-[10%] left-[10%]" animationDuration="12s">💀</FloatingThing>
    <FloatingThing className="top-[20%] right-[15%]" animationDuration="8s" animationDelay="2s">🔥</FloatingThing>
    <FloatingThing className="bottom-[15%] left-[20%]" animationDuration="10s" animationDelay="1s">💅</FloatingThing>
    <FloatingThing className="bottom-[25%] right-[25%]" animationDuration="15s" animationDelay="4s">🗿</FloatingThing>
    <FloatingThing className="top-[50%] left-[5%]" animationDuration="9s" animationDelay="3s">🧠</FloatingThing>
    <FloatingThing className="top-[5%] right-[30%]" animationDuration="11s" animationDelay="5s">💯</FloatingThing>

    <div className="glitch group-data-[overdrive=true]:animate-fast-glitch">
    
    <Image src={"/sb-logo.png"} width={128} height={128} alt="Logo" className="text-primary group-data-[overdrive=true]:animate-flash" />
   
    </div>
    <h1
      className="text-5xl md:text-7xl font-bold font-headline tracking-tighter my-6 glitch-text group-data-[overdrive=true]:animate-text-distort"
      onMouseEnter={() => setIsOverdrive(true)}
      onMouseLeave={() => setIsOverdrive(false)}
    >
      <span className="chromatic-aberration" data-text="SkullBrain">SkullBrain</span>
    </h1>
    <p className="max-w-2xl mx-auto text-2xl text-foreground/80 mb-8 font-headline tracking-widest group-data-[overdrive=true]:animate-text-distort-slower">
      Coding is a skibidi rizz.
    </p>
    <Button size="lg" asChild className="hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-primary/50 glitch">
      <Link href="/editor">
        Get Bussin&apos;
      </Link>
    </Button>
  </section>;
}

function GehDeeper() {
  type ItemProps = {
    title: string;
    description: string;
  };

  const DeeperItem = ({ title, description }: ItemProps) => {
    return (
      <Card className="flex flex-col bg-card border-border/50 text-left transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20">
        <CardHeader>
          <div className="flex items-center gap-4">
            <CheckSquare className="h-10 w-10 text-primary" />
            <CardTitle className="font-headline text-3xl">{title}</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="flex-grow">
          <CardDescription className="mb-4 font-handwritten text-lg">
            {description}
          </CardDescription>
        </CardContent>
        <div className="p-6 pt-0">
          <Button variant="outline" asChild>
            <Link href="/getting-started">
              Start Gooning <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Card>
    )
  };

  return (
    <section className="w-full py-16 md:py-24 bg-secondary/20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold font-headline mb-12">Go Deeper, Gooner</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <DeeperItem
            title={"Read the Specification"}
            description={"Dive into the official SkullBrain specification. It's probably written on a stained napkin, but it's all there."}
          />
          <DeeperItem
            title={"Getting Started"}
            description={"Follow our step-by-step guide to rot your brain and start gooning with SkullBrain."}
          />
        </div>
      </div>
    </section >
  );
}

function Features() {
  const features = [
    {
      title: 'Brainrot Syntax',
      description: 'Why use normal keywords when you can `rizz` and `goon`? Make your code incomprehensible to anyone who isn\'t chronically online.',
      snippet: '    mew bop goated hash#️⃣_2 uwu param0📋 is clutch owo bustin chad bussin\n                yo fam Это сгенерированный комментарий 🇷🇺\n        delulu "Cześć świecie 🇵🇱".\n    no cap',
    },
    {
      title: 'Modern Structure',
      description: 'We have all the object-oriented buzzwords, but we made them edgy. Use `deadass` for classes, `vibe` for traits, and `bop` for functions.',
      snippet: 'vibe Iमै네джер🇮🇳 bussin\n        bop goated authenticate🔑_0 uwu param0📋 is chad owo bustin aura.\nno cap',
    },
    {
      title: 'Modular (somehow)',
      description: 'Organize your chaos. Import and export modules like a real developer, but with 100% more brainrot. No one knows how it works, but it does.',
      snippet: 'glizzy game like render;\n\nrender uwu owo',
    },
    {
      title: 'Not Slow As Shit',
      description: "It's not the fastest thing on the planet, but it won't take 100 million years to run hello world. It parses, it executes, and it gets the job done without being a total drag. We don't have benchmarks, just vibes.",
      snippet: 'gyatt output📤_0 is chad skibidi "ũñîçø∂ë çhäøs 💀".\ngyatt edge🔗_2 is cringe skibidi 36196u.',
    },
  ];
  return (
    <section id="features" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card border-border/50 overflow-hidden md:flex md:flex-row transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20">
              <div className="p-6 md:w-1/2 flex flex-col justify-center">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="font-headline text-3xl skew-y-[-3deg] text-primary">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-foreground/80 font-handwritten text-lg">{feature.description}</p>
                </CardContent>
              </div>
              <div className="bg-secondary/50 md:w-1/2 p-6 flex items-center justify-center">
                <pre className="font-code text-primary bg-secondary p-4 rounded-md text-sm w-full whitespace-pre-wrap">{feature.snippet}</pre>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function CallToAction() {
  const memes = [
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExN3NuNGFwMGZpMGVrbGV2bWQwYzY5azB1ZGxrYnh6Zmh3MnBleG1uNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/IPHgtwOWk7xwta52n2/giphy.gif",
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExejMxdXh2bDJraWp1NjRyNHc3aGtwZXBoMG8zMHQ5OTdjbG52bWp4ciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xhGE4p9ygdQibhjO5G/giphy.gif"
  ];
  return (
    <section className="w-full py-20 bg-secondary/30">
      <div className="container mx-auto text-center px-4 flex flex-col items-center">
        <div className="flex flex-row items-center gap-4 mb-8">
          {memes.map((meme, index) => (
            <div key={index} className="relative aspect-square w-32 h-32 md:w-48 md:h-48">
              <Image src={meme} layout="fill" objectFit="contain" alt="goon gif" unoptimized />
            </div>
          ))}
        </div>
        <h2 className="text-4xl md:text-5xl font-bold font-headline mb-6">Ready to Skibidi?</h2>
        <Button size="lg" asChild className="bg-primary/90 hover:bg-primary text-primary-foreground">
          <Link href="/editor">
            Enter the Skibidi Realm <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </section>
  );
}

