import Link from 'next/link';
import { Bot, Server, Shield, ShieldCheck, User } from 'lucide-react';

const ComputeSecuritySection = () => {
  return (
    <section className="bg-vercel-background-light py-20 lg:py-28">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-16">
          {/* Left Column: Compute for AI */}
          <div className="flex flex-col">
            <div className="relative bg-white border border-border rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.1)] p-8 flex-grow flex flex-col justify-center min-h-[300px]">
              <div className="flex items-center gap-2 text-sm font-mono text-zinc-500 absolute top-8 left-8">
                <Server className="w-4 h-4 text-zinc-400" />
                <span>fluid-1</span>
              </div>
              <div className="w-full">
                <div className="relative flex justify-between items-center h-8">
                  <span className="text-xs font-medium px-2 py-0.5 border border-green-200 bg-green-50 text-green-700 rounded-md">Active</span>
                  <span className="text-xs font-medium px-2 py-0.5 border border-gray-200 bg-gray-50 text-gray-500 rounded-md">Idle (no charge)</span>
                  <span className="text-xs font-medium px-2 py-0.5 border border-green-200 bg-green-50 text-green-700 rounded-md">Active</span>
                  <div className="absolute top-1/2 left-[15%] right-[15%] h-px bg-gray-300 -translate-y-1/2 -z-10 w-[70%]" />
                </div>
                <div className="mt-2 h-16">
                  <svg width="100%" height="100%" viewBox="0 0 400 60" preserveAspectRatio="none">
                    <path d="M 0 15 L 70 15 C 90 15, 90 35, 110 35 L 290 35 C 310 35, 310 15, 330 15 L 400 15" fill="none" className="stroke-green-500" strokeWidth="2"/>
                    <path d="M 0 20 L 65 20 C 85 20, 85 40, 105 40 L 295 40 C 315 40, 315 20, 335 20 L 400 20" fill="none" className="stroke-yellow-400" strokeWidth="2"/>
                    <path d="M 0 25 L 60 25 C 80 25, 80 45, 100 45 L 300 45 C 320 45, 320 25, 340 25 L 400 25" fill="none" className="stroke-blue-400" strokeWidth="2"/>
                    <path d="M 0 30 L 55 30 C 75 30, 75 50, 95 50 L 305 50 C 325 50, 325 30, 345 30 L 400 30" fill="none" className="stroke-red-400" strokeWidth="2"/>
                  </svg>
                </div>
              </div>
            </div>
            <h2 className="text-3xl font-semibold text-black mt-8">Compute for AI.</h2>
            <p className="text-lg text-vercel-gray-secondary mt-3">
              Designed and optimized for backend workloads.
            </p>
            <Link href="https://vercel.com/fluid" className="mt-6 text-black bg-white border border-gray-300 rounded-full py-2 px-5 text-base font-medium hover:border-black transition-colors w-fit">
              More about Fluid
            </Link>
          </div>

          {/* Right Column: Secure by default */}
          <div className="flex flex-col">
            <div className="relative bg-white border border-border rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.1)] p-8 flex-grow flex flex-col justify-center min-h-[300px]">
               <div className="flex justify-center gap-16">
                  <div className="flex flex-col items-center">
                      <User className="h-6 w-6 text-gray-400" />
                      <div className="w-px h-10 bg-green-500 mt-3" />
                  </div>
                  <div className="flex flex-col items-center">
                      <Bot className="h-6 w-6 text-gray-400" />
                      <div className="w-px h-10 bg-red-500 mt-3" />
                  </div>
               </div>
               <div className="mt-6 border border-gray-200 rounded-md p-3 flex items-center gap-3 bg-gray-50">
                   <Shield className="h-5 w-5 text-gray-500 flex-shrink-0"/>
                   <span className="text-sm font-medium text-gray-900">Bot management</span>
               </div>
               <div className="mt-4 flex items-center gap-3 pl-1">
                   <ShieldCheck className="h-5 w-5 text-gray-400 flex-shrink-0" />
                   <span className="text-sm text-gray-500">Enterprise DDoS Support</span>
               </div>
            </div>
            <h2 className="text-3xl font-semibold text-black mt-8">Secure by default.</h2>
            <p className="text-lg text-vercel-gray-secondary mt-3">
              Protect your workloads from DDoS and Bots.
            </p>
            <Link href="https://vercel.com/security" className="mt-6 text-black bg-white border border-gray-300 rounded-full py-2 px-5 text-base font-medium hover:border-black transition-colors w-fit">
               Explore security
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComputeSecuritySection;