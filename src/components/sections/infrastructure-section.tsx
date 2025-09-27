"use client";

import React from 'react';
import Link from 'next/link';

// Using a self-contained SVG for the Vercel triangle icon as seen on the globe nodes
const VercelTriangle = (props: React.SVGProps<SVGSVGElement>) => (
    <svg width="8" height="7" viewBox="0 0 8 7" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M4 0L7.4641 6H0.535898L4 0Z" fill="currentColor" />
    </svg>
);

// Component for a single node on the globe, with an optional pulsing animation
const GlobeNode = ({ top, left, hasPulse }: { top: string; left: string; hasPulse?: boolean }) => (
    <div className="absolute" style={{ top, left }}>
      <div className="relative flex h-7 w-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center">
        {hasPulse && (
          <div className="absolute h-full w-full animate-ping rounded-full bg-black/15" />
        )}
        <div className="relative flex h-4 w-4 items-center justify-center rounded-full border border-gray-400 bg-white">
          <VercelTriangle className="h-[7px] w-2 text-black" />
        </div>
      </div>
    </div>
);

// The animated globe visualization placeholder
const GlobeVisualization = () => {
    // Node positions are estimated from the provided screenshot.
    const nodes = [
        { top: '38%', left: '23%', hasPulse: true },
        { top: '65%', left: '33%', hasPulse: false },
        { top: '50%', left: '48%', hasPulse: true },
        { top: '25%', left: '68%', hasPulse: false },
        { top: '60%', left: '78%', hasPulse: false },
    ];
    
    return (
        <div className="relative mx-auto w-full max-w-5xl" style={{ aspectRatio: '1200 / 470' }}>
            <div 
                className="absolute inset-0"
                style={{ 
                    maskImage: 'radial-gradient(circle at center, white 55%, transparent 55.5%)',
                    WebkitMaskImage: 'radial-gradient(circle at center, white 55%, transparent 55.5%)'
                }}
            >
                {/* Parallels (horizontal ellipses) */}
                {[0.2, 0.4, 0.6, 0.8, 0.95].map(scaleY => (
                    <div 
                        key={`p-${scaleY}`} 
                        className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 rounded-full border border-gray-200"
                        style={{ transform: `translateX(-50%) translateY(-50%) scaleY(${scaleY})` }} 
                    />
                ))}
                {/* Meridians (vertical ellipses) */}
                {[0, 30, 60, 90, 120, 150].map(deg => (
                     <div 
                        key={`m-${deg}`} 
                        className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 rounded-full border-l border-r border-gray-200"
                        style={{ transform: `translateX(-50%) translateY(-50%) rotate(${deg}deg) scaleY(0.55)` }} 
                    />
                ))}
            </div>

            {/* Animated Connections */}
            <svg
                viewBox="0 0 1200 470"
                className="absolute inset-0 h-full w-full overflow-visible opacity-70"
                fill="none"
            >
                <defs>
                    <style>
                        {`
                            @keyframes stroke-draw {
                                to { stroke-dashoffset: 0; }
                            }
                            .path-animate {
                                stroke-dasharray: 1;
                                stroke-dashoffset: 1;
                                animation: stroke-draw 2.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
                            }
                        `}
                    </style>
                </defs>
                <path
                    d="M280 180 q 210 -160 420 0"
                    stroke="var(--color-vercel-blue-accent)"
                    strokeWidth="1.5"
                    pathLength="1"
                    className="path-animate"
                    style={{ animationDelay: '0.5s' }}
                />
                <path
                    d="M578 235 q 90 -70 215 15"
                    stroke="var(--color-vercel-blue-accent)"
                    strokeWidth="1.5"
                    pathLength="1"
                    className="path-animate"
                    style={{ animationDelay: '1s' }}
                />
            </svg>

            {nodes.map((node, index) => (
                <GlobeNode key={index} {...node} />
            ))}
        </div>
    );
};

const InfrastructureSection = () => {
    return (
        <section className="bg-vercel-background-light py-20 lg:py-32">
            <div className="container mx-auto flex flex-col items-center px-4 text-center">
                <h2 className="mb-4 max-w-3xl text-4xl font-semibold tracking-tight text-black md:text-5xl">
                    Deploy once, deliver everywhere.
                </h2>
                <p className="mx-auto mb-8 max-w-2xl text-lg text-vercel-gray-secondary">
                    When you push code to Vercel, we make it instantly available across the globe.
                </p>
                <div className="mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <Link 
                        href="https://vercel.com/products/managed-infrastructure"
                        className="inline-flex items-center justify-center rounded-full border border-transparent bg-black px-8 py-3 text-base font-medium text-white shadow-md transition-shadow hover:shadow-lg"
                    >
                        More about Infrastructure
                    </Link>
                    <Link 
                        href="https://vercel.com/enterprise"
                        className="inline-flex items-center justify-center rounded-full border border-border bg-white px-8 py-3 text-base font-medium text-black shadow-sm transition-colors hover:bg-gray-50"
                    >
                        Learn about Enterprise
                    </Link>
                </div>
                
                <GlobeVisualization />

                <p className="mt-4 text-sm text-vercel-gray-light">
                    Nodes on the globe are sending out small pulses to indicate activity
                </p>
            </div>
        </section>
    );
};

export default InfrastructureSection;