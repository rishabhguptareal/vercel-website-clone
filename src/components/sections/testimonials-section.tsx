"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles } from "lucide-react";

const tabs = ["AI Apps", "Web Apps", "Ecommerce", "Marketing", "Platforms"];

const contentData: { [key:string]: { description: string } } = {
  "AI Apps": {
    description: "Get started using our pre-built templates. Easily stream long-running LLM responses for a better user experience with zero-config infrastructure that's always globally performant."
  },
  "Web Apps": {
    description: "Fast load times, zero overhead with Vercel's highly optimized infrastructure and CDN, reducing bounce rates and improving SEO. Streamline content creation & publishing with built-in previews."
  },
  "Ecommerce": {
    description: "Build high-performance storefronts that convert. Benefit from Vercel's scalable infrastructure that handles traffic spikes with ease, ensuring a smooth customer experience."
  },
  "Marketing": {
    description: "Launch captivating marketing sites that load instantly. A/B test, personalize content, and analyze results on a platform built for speed and iteration."
  },
  "Platforms": {
    description: "Create and scale multi-tenant platforms with a single codebase. Vercel provides the tools to build robust applications for numerous customers efficiently."
  }
};

const TestimonialsSection = () => {
  const [activeTab, setActiveTab] = useState("AI Apps");

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:w-7/12">
          <div className="space-y-4 mb-10">
            <p className="text-[32px] font-medium leading-[40px] tracking-tight text-zinc-900">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/86b3dd5a-d64b-46bb-88f1-19266bde8cbd-vercel-com/assets/svgs/runway-light.4fe4ed23-3.svg?"
                alt="Runway Logo"
                width={118}
                height={28}
                className="mr-3 inline-block h-[28px] w-auto align-middle"
              />
              build times went from 7m to 40s.
            </p>
            <p className="text-[32px] font-medium leading-[40px] tracking-tight text-zinc-900">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/86b3dd5a-d64b-46bb-88f1-19266bde8cbd-vercel-com/assets/svgs/leonardo-ai-light.c7c240a2-5.svg?"
                alt="Leonardo.AI Logo"
                width={178}
                height={33}
                className="mr-3 inline-block h-[33px] w-auto align-middle"
              />
              saw a 95% reduction in page load times.
            </p>
            <p className="text-[32px] font-medium leading-[40px] tracking-tight text-zinc-900">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/86b3dd5a-d64b-46bb-88f1-19266bde8cbd-vercel-com/assets/svgs/zapier-light.5dde0542-7.svg?"
                alt="Zapier Logo"
                width={97}
                height={22}
                className="mr-3 inline-block h-[22px] w-auto align-middle"
              />
              saw 24x faster builds.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-x-16 items-start">
          <div className="lg:col-span-7">
            <div className="flex flex-wrap gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`rounded-full px-3 py-1 text-sm font-medium border transition-colors duration-150 ${
                    activeTab === tab
                      ? "bg-black text-white border-black"
                      : "bg-transparent text-gray-500 border-gray-300 hover:bg-gray-50 hover:text-black hover:border-gray-400"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 mt-10 lg:mt-0">
            <div className="min-h-[140px]">
              <p className="text-base text-gray-600 mb-6 leading-relaxed">
                {contentData[activeTab]?.description}
              </p>
            </div>
            <Link
              href="https://vercel.com/ai"
              className="inline-flex items-center gap-2 bg-black text-white rounded-full px-4 text-sm font-medium h-10 hover:opacity-80 transition-opacity"
            >
              Deploy AI Apps in seconds
              <Sparkles className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;