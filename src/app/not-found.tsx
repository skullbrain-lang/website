"use client"

import React, { useState, useEffect } from 'react';
import { Skull } from 'lucide-react';

// Secret sequences and words
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];

const secretWords = [
    'skullbrain', 'brainrot', 'ohio',
    'sigma', 'rizz', 'gyatt', 'skibidi',
    'mewing', 'looksmaxxing', 'chad', 'gigachad',
    'based', 'cringe', 'sussy', 'amogus', 'sus',
    'imposter', 'fr', 'slay', 'bet',
    'lowkey', 'fire', 'goated', 'sheesh',
    'bruh', 'dank', 'karen', 'chad',
    'noob', 'trash', 'goat', 'nuts',
    'godlike', 'vibe', 'aura', 'ick',
    'delulu', 'dab', 'yeet', 'cap',
];
const matrixSequence = ['KeyM', 'KeyA', 'KeyT', 'KeyR', 'KeyI', 'KeyX'];


type MatrixRainProps = {
    isActive: boolean;
};

// Matrix Rain Component
const MatrixRain = ({ isActive }: MatrixRainProps) => {
    type MatrixRainData = { id: number; x: number; y: number; char: string; opacity: number };
    const [matrixRain, setMatrixRain] = useState<MatrixRainData[]>([]);
    const matrixChars = '0123456789ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍｦｲｸｺｿｱﾝｽﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ';

    useEffect(() => {
        if (!isActive) return;

        const columns = Math.floor(window.innerWidth / 20);
        const drops = Array(columns).fill(1);

        const interval = setInterval(() => {
            setMatrixRain(drops.map((y, i) => ({
                id: i,
                x: i * 20,
                y: y * 20,
                char: matrixChars[Math.floor(Math.random() * matrixChars.length)],
                opacity: Math.random()
            })));

            drops.forEach((drop, i) => {
                if (drop * 20 > window.innerHeight && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            });
        }, 100);

        return () => clearInterval(interval);
    }, [isActive]);

    if (!isActive) return null;

    return (
        <div className="fixed inset-0 pointer-events-none z-50">
            {matrixRain.map(drop => (
                <div
                    key={drop.id}
                    className="absolute text-green-400 font-mono text-sm animate-pulse"
                    style={{
                        left: drop.x,
                        top: drop.y,
                        opacity: drop.opacity
                    }}
                >
                    {drop.char}
                </div>
            ))}
        </div>
    );
};

type BackgroundOverlaysProp = {
    rainbowMode: boolean;
};

// Background Overlays Component
const BackgroundOverlays = ({ rainbowMode }: BackgroundOverlaysProp) => (
    <>
        <div className={`absolute inset-0 bg-noise animate-color-pulse opacity-30 pointer-events-none z-10 ${rainbowMode ? 'animate-pulse' : ''}`} />
        <div className="absolute inset-0 bg-radial-vignette opacity-50 pointer-events-none z-20" />
    </>
);

type CompositeModes = {
    matrixMode: boolean;
    rainbowMode: boolean;
    secretMode: boolean;
};

type Title404Props = CompositeModes;

// Main 404 Title Component
const Title404 = ({ matrixMode, rainbowMode, secretMode }: Title404Props) => {
    const getTitleClasses = () => {
        if (matrixMode) return 'text-green-400 animate-text-distort chromatic-aberration';
        if (rainbowMode) return 'text-transparent bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 bg-clip-text animate-pulse';
        if (secretMode) return 'text-primary animate-text-distort chromatic-aberration';
        return 'text-primary glitch-text';
    };

    return (
        <h1
            className={`text-9xl font-black leading-none mb-8 transition-all duration-500 ${getTitleClasses()}`}
            data-text="404"
        >
            404
        </h1>
    );
};

type InteractiveSkullProps = CompositeModes & {
    isOverdrive: boolean;
    onClick: () => void
};

// Interactive Skull Component
const InteractiveSkull = ({ isOverdrive, matrixMode, rainbowMode, secretMode, onClick }: InteractiveSkullProps) => {
    const getSkullClasses = () => {
        const classes = 'h-32 w-32 mx-auto transition-all duration-300 hover:scale-110';

        if (matrixMode) return `${classes} text-green-400 animate-spin`;
        if (rainbowMode) return `${classes} text-transparent animate-bounce`;
        if (isOverdrive) return `${classes} text-primary animate-flash`;
        if (secretMode) return `${classes} text-primary animate-spin`;
        return `${classes} text-primary`;
    };

    return (
        <div
            className={`group cursor-pointer select-none mb-6 ${isOverdrive ? '[&>*]:data-[overdrive=true]' : ''}`}
            data-overdrive={isOverdrive}
            onClick={onClick}
        >
            <div className="glitch group-data-[overdrive=true]:animate-fast-glitch">
                <Skull className={getSkullClasses()} />
            </div>
        </div>
    );
};

type DynamicPhraseProps = CompositeModes & {
    isOverdrive: boolean;
    phrase: string;
};

// Dynamic Phrase Component
const DynamicPhrase = ({ phrase, matrixMode, rainbowMode, secretMode, isOverdrive }: DynamicPhraseProps) => {
    const getPhraseClasses = () => {
        const baseClasses = 'text-2xl font-bold font-headline uppercase mb-6 transition-all duration-500';

        if (matrixMode) return `${baseClasses} text-green-400 animate-text-distort-slower font-mono`;
        if (rainbowMode) return `${baseClasses} text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text animate-bounce`;
        if (secretMode) return `${baseClasses} animate-text-distort-slower`;

        return `${baseClasses} animate-pulse ${isOverdrive ? 'animate-flash' : 'text-foreground'}`;
    };

    const renderPhrase = () => {
        if (matrixMode) {
            return phrase.split('').map((char, i) => (
                <span
                    key={i}
                    style={{ animationDelay: `${i * 50}ms` }}
                    className="inline-block animate-pulse"
                >
                    {char === ' ' ? '\u00A0' : char}
                </span>
            ));
        }
        return phrase;
    };

    return (
        <h2 className={getPhraseClasses()}>
            {renderPhrase()}
        </h2>
    );
};

// Description Component
const Description = ({ secretMode }: { secretMode: boolean }) => (
    <p className="text-lg text-muted-foreground mb-8 font-body">
        The page you&apos;re looking for has been consumed by brainrot.
        <br />
        <span className={secretMode ? 'animate-bounce inline-block' : ''}>
            It&apos;s probably busy making TikToks instead of serving content.
        </span>
    </p>
);

// Action Buttons Component
const ActionButtons = ({ isOverdrive }: { isOverdrive: boolean }) => (
    <div className="flex gap-4 justify-center mb-8 flex-wrap">
        <button className={`px-6 py-3 bg-primary text-primary-foreground rounded-md font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg relative overflow-hidden ${isOverdrive ? 'animate-fast-glitch' : ''}`}>
            <span className="relative z-10">Go Home</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-500" />
        </button>

        <button className={`px-6 py-3 bg-secondary text-secondary-foreground rounded-md font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg relative overflow-hidden ${isOverdrive ? 'animate-fast-glitch' : ''}`}>
            <span className="relative z-10">Getting Started</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-500" />
        </button>
    </div>
);

// Code Block Component
const CodeBlock = ({ isOverdrive }: { isOverdrive: boolean }) => (
    <div className={`transition-all duration-500 overflow-hidden ${isOverdrive ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-card border border-border rounded-lg p-6 text-left mx-auto max-w-2xl shadow-lg">
            <pre className="font-code text-sm leading-6 text-card-foreground overflow-x-auto">
                <code>
                    <span className="text-green-400">{'// SkullBrain.exe is having a moment'}</span><br />
                    <span className="text-orange-400">import</span> &#123; <span className="text-blue-300">BrainCell</span> &#125; <span className="text-orange-400">from</span> <span className="text-green-300">&apos;@skullbrain/neuron&apos;</span>;<br />
                    <br />
                    <span className="text-orange-400">const</span> <span className="text-blue-300">userBrain</span> = <span className="text-orange-400">new</span> <span className="text-purple-400">BrainCell</span>();<br />
                    <br />
                    <span className="text-orange-400">if</span> (<span className="text-blue-300">userBrain</span>.<span className="text-yellow-300">isEmpty</span>()) &#123;<br />
                    &nbsp;&nbsp;<span className="text-red-400">throw new</span> <span className="text-purple-400">SkillIssueException</span>(<span className="text-green-300">&apos;No cap detecte&apos;</span>);<br />
                    &#125;<br />
                    <br />
                    <span className="text-gray-500">{"// TODO: Install brain.dll"}</span><br />
                    <span className="text-blue-300">process</span>.<span className="text-yellow-300">exit</span>(<span className="text-orange-300">404</span>);
                </code>
            </pre>
        </div>
    </div>
);

type StatusIndicatorsProps = CompositeModes;

// Status Indicators Component
const StatusIndicators = ({ secretMode, matrixMode, rainbowMode }: StatusIndicatorsProps) => (
    <>
        {secretMode && (
            <div className="mt-8 p-4 bg-primary/20 border border-primary rounded-lg animate-pulse">
                <p className="text-primary font-bold font-headline animate-bounce">
                    ⚡ KONAMI OVERDRIVE ACTIVATED ⚡
                </p>
            </div>
        )}

        {matrixMode && (
            <div className="mt-4 p-3 bg-green-900/20 border border-green-400 rounded-lg">
                <p className="text-green-400 font-mono text-sm animate-pulse">
                    &gt; ENTERING THE MATRIX... REALITY.EXE NOT FOUND
                </p>
            </div>
        )}

        {rainbowMode && (
            <div className="mt-4 p-3 bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-400 rounded-lg animate-pulse">
                <p className="text-transparent bg-gradient-to-r from-red-400 via-yellow-400 via-green-400 via-blue-400 to-purple-400 bg-clip-text font-bold animate-bounce">
                    🌈 RAINBOW BRAINROT MODE UNLOCKED 🌈
                </p>
            </div>
        )}
    </>
);



// Main 404 Component
export default function Custom404() {
    const memePhrases = [
        "404 BRAIN NOT FOUND",
        "SKILL ISSUE DETECTED",
        "ERROR: BRAIN.EXE HAS STOPPED WORKING",
        "YOUR CODE IS IN ANOTHER CASTLE",
        "SEGMENTATION FAULT: BRAIN CORRUPTED",
        "TOUCH GRASS EXCEPTION: PATH NOT FOUND",
        "*DIES FROM CRINGE*",
        "WHO ASKED (ERROR 404)",
        "NO BITCHES?",
        "BRAINROT OVERFLOW EXCEPTION"
    ];

    const [phrase, setPhrase] = useState(memePhrases[0]);
    const [clickCount, setClickCount] = useState(0);
    const [isOverdrive, setIsOverdrive] = useState(false);
    const [konamiIndex, setKonamiIndex] = useState(0);
    const [secretMode, setSecretMode] = useState(false);
    const [typedSequence, setTypedSequence] = useState('');
    const [matrixMode, setMatrixMode] = useState(false);
    const [rainbowMode, setRainbowMode] = useState(false);
    const [lastClickTime, setLastClickTime] = useState(0);
    const [rapidClicks, setRapidClicks] = useState(0);


    // Phrase rotation effect
    useEffect(() => {
        const interval = setInterval(() => {
            setPhrase(memePhrases[Math.floor(Math.random() * memePhrases.length)]);
        }, secretMode ? 500 : (matrixMode ? 200 : 3000));

        return () => clearInterval(interval);
    }, [secretMode, matrixMode]);

    // Keyboard event handlers
    useEffect(() => {
        const handleKeyDown = (event: { code: string; key: string; }) => {
            // Konami Code detection
            if (event.code === konamiCode[konamiIndex]) {
                setKonamiIndex(konamiIndex + 1);
                if (konamiIndex + 1 === konamiCode.length) {
                    setSecretMode(true);
                    setKonamiIndex(0);
                }
            } else {
                setKonamiIndex(0);
            }

            // Matrix mode detection
            if (event.code === matrixSequence[0] && !matrixMode) {
                let matrixIndex = 0;
                const matrixListener = (e: { code: string; }) => {
                    if (e.code === matrixSequence[matrixIndex]) {
                        matrixIndex++;
                        if (matrixIndex === matrixSequence.length) {
                            setMatrixMode(true);
                            document.removeEventListener('keydown', matrixListener);
                        }
                    } else {
                        matrixIndex = 0;
                    }
                };
                document.addEventListener('keydown', matrixListener);
                setTimeout(() => document.removeEventListener('keydown', matrixListener), 5000);
            }

            // Typed word detection
            const newSequence = typedSequence + event.key.toLowerCase();
            setTypedSequence(newSequence.slice(-10));

            secretWords.forEach(word => {
                if (newSequence.includes(word) && !rainbowMode) {
                    setRainbowMode(true);
                    setTimeout(() => setRainbowMode(false), 10000);
                }
            });
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [konamiIndex, typedSequence, matrixMode, rainbowMode]);

    const handleSkullClick = () => {
        const now = Date.now();

        // Detect rapid clicking
        if (now - lastClickTime < 200) {
            setRapidClicks(prev => prev + 1);
            if (rapidClicks >= 2) {
                document.body.style.transform = document.body.style.transform === 'rotate(180deg)'
                    ? 'rotate(0deg)'
                    : 'rotate(180deg)';
                document.body.style.transition = 'transform 1s ease';
                setRapidClicks(0);
            }
        } else {
            setRapidClicks(0);
        }

        setLastClickTime(now);
        setClickCount(prev => prev + 1);

        if (clickCount >= 6) {
            setIsOverdrive(!isOverdrive);
            setClickCount(0);
        }
    };

    return (
        <div className="relative min-h-screen flex flex-col justify-center items-center bg-background overflow-hidden">
            <MatrixRain isActive={matrixMode} />
            <BackgroundOverlays rainbowMode={rainbowMode} />

            <div className={`relative z-30 text-center p-8 max-w-4xl transition-all duration-500 ${secretMode ? 'animate-bounce' : ''} ${rainbowMode ? 'animate-pulse' : ''}`}>
                <Title404
                    matrixMode={matrixMode}
                    rainbowMode={rainbowMode}
                    secretMode={secretMode}
                />

                <InteractiveSkull
                    isOverdrive={isOverdrive}
                    matrixMode={matrixMode}
                    rainbowMode={rainbowMode}
                    secretMode={secretMode}
                    onClick={handleSkullClick}
                />

                <DynamicPhrase
                    phrase={phrase}
                    matrixMode={matrixMode}
                    rainbowMode={rainbowMode}
                    secretMode={secretMode}
                    isOverdrive={isOverdrive}
                />

                <Description secretMode={secretMode} />

                <ActionButtons isOverdrive={isOverdrive} />

                <CodeBlock isOverdrive={isOverdrive} />

                <StatusIndicators
                    secretMode={secretMode}
                    matrixMode={matrixMode}
                    rainbowMode={rainbowMode}
                />
            </div>
        </div>
    );
}