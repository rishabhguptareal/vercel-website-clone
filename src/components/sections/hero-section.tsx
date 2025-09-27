import React from 'react';
import Link from 'next/link';
import { Triangle } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative isolate overflow-hidden bg-[#fafafa] pt-24 pb-48 sm:pt-32">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Grid pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundSize: '_clamp(4rem,10vw,5rem)_ _clamp(4rem,10vw,5rem)',
            backgroundImage:
              'linear-gradient(to right, #e1e1e1 1px, transparent 1px), linear-gradient(to bottom, #e1e1e1 1px, transparent 1px)',
            backgroundPosition: '-1px -1px',
            maskImage: 'radial-gradient(ellipse 50% 40% at 50% 0%, black 70%, transparent 100%)',
          }}
        />

        {/* Gradient effect */}
        <div className="absolute inset-x-0 bottom-0 h-[650px]">
          <div
            className="absolute inset-0 opacity-60"
            style={{
              background: 'linear-gradient(to right, #ff8a00, #00d2ff)',
              maskImage:
                'repeating-conic-gradient(from 270deg at 50% 100%, black 0deg, transparent 0.2deg, black 0.4deg)',
              WebkitMaskImage:
                'repeating-conic-gradient(from 270deg at 50% 100%, black 0deg, transparent 0.2deg, black 0.4deg)',
            }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                'repeating-linear-gradient(rgba(0,0,0,0.05) 0, rgba(0,0,0,0.05) 1px, transparent 1px, transparent 3px)',
              backgroundSize: '100% 3px',
            }}
          />
          {/* Prism SVG */}
          <svg
            viewBox="0 0 346 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-1/2 -translate-x-1/2 bottom-[130px] w-auto h-[250px] sm:h-[300px]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="prism-texture"
                patternUnits="userSpaceOnUse"
                width="8"
                height="8"
              >
                <path
                  d="M-4 4l8-8M0 8l8-8M4 12l8-8"
                  stroke="black"
                  strokeWidth=".5"
                  strokeOpacity=".5"
                ></path>
              </pattern>
              <mask id="prism-mask">
                <rect width="346" height="300" fill="white"></rect>
                <rect
                  width="346"
                  height="300"
                  fill="url(#prism-texture)"
                ></rect>
              </mask>
            </defs>
            <path
              d="M173 0L346 300H0L173 0Z"
              stroke="black"
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
            />
            <path
              d="M173 0L346 300H0L173 0Z"
              fill="white"
              mask="url(#prism-mask)"
            />
          </svg>

          {/* Fade to background */}
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#fafafa] to-transparent" />
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8 text-center">
        <h1 className="text-[48px] font-semibold tracking-[-0.02em] text-black sm:text-[56px] leading-[1.1]">
          Build and deploy on the AI Cloud.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-[#666666] max-w-2xl mx-auto">
          Vercel provides the developer tools and cloud infrastructure to build,
          scale, and secure a faster, more personalized web.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-4">
          <Link
            href="https://vercel.com/new"
            className="flex items-center gap-2 rounded-full bg-black px-6 py-3 text-base font-medium text-white shadow-sm transition hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            <Triangle className="h-3 w-3 fill-white" />
            Start Deploying
          </Link>
          <Link
            href="https://vercel.com/contact/sales"
            className="rounded-full border border-[#e1e1e1] bg-white px-6 py-3 text-base font-medium text-black shadow-sm transition-colors hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400"
          >
            Get a Demo
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;