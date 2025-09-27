import Image from 'next/image';
import { Search } from 'lucide-react';

const TrendLineUp = ({ color }: { color: string }) => (
  <svg width="48" height="16" viewBox="0 0 48 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-1">
    <path d="M1 15L12.5 8L24.5 10L36 2L47 5" stroke={color} strokeWidth="1.5" />
  </svg>
);

const invocations = [
  { path: '/_src/api/user.ts', status: 'success', time: '1m ago' },
  { path: '/_src/lib/kv.ts', status: 'success', time: '1m ago' },
  { path: '/_middleware.ts', status: 'warning', time: '5m ago' },
  { path: '/_src/api/new.ts', status: 'success', time: '8m ago' },
  { path: '/_src/api/auth.ts', status: 'error', time: '12m ago' },
];

const statusColors: { [key: string]: string } = {
  success: 'bg-green-500',
  warning: 'bg-yellow-400',
  error: 'bg-red-500',
};

const ObservabilitySection = () => {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 lg:gap-24 items-center">
          <div className="max-w-md">
            <div className="flex items-center gap-3">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/86b3dd5a-d64b-46bb-88f1-19266bde8cbd-vercel-com/assets/svgs/analytics.1980978e-33.svg?"
                alt="Analytics icon"
                width={24}
                height={24}
                className="h-6 w-6"
              />
              <p className="text-sm font-semibold tracking-wider text-[#666666]">OBSERVABILITY</p>
            </div>
            <h2 className="mt-4 text-[32px] font-semibold leading-tight text-black tracking-tight">
              Route-aware observability.
            </h2>
            <p className="mt-4 text-base text-[#666666] leading-relaxed">
              Monitor and analyze the performance and traffic of your projects.
            </p>
          </div>

          <div className="mt-12 lg:mt-0">
            <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-2">
              <div className="divide-y divide-gray-200">
                <div className="flex p-4">
                  <div className="flex flex-col-reverse justify-between text-right text-xs text-gray-400 pr-3 h-[100px]">
                    {['100k', '200k', '300k', '400k', '500k'].map((label) => <span key={label}>{label}</span>)}
                  </div>
                  <div className="relative flex-1 h-[100px] border-l border-gray-200">
                    {Array.from({ length: 4 }).map((_, i) => <div key={i} className="absolute left-0 right-0 border-t border-gray-200/80" style={{ top: `${i * 25}%` }} />)}
                    {Array.from({ length: 4 }).map((_, i) => <div key={i} className="absolute top-0 bottom-0 border-l border-gray-200/80" style={{ left: `${(i + 1) * 20}%` }} />)}
                    <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <path d="M0 40 C 25 20, 75 25, 100 10" stroke="#3b82f6" fill="none" strokeWidth="2.5" vectorEffect="non-scaling-stroke" />
                      <path d="M0 60 C 25 50, 75 65, 100 45" stroke="#22c55e" fill="none" strokeWidth="2.5" vectorEffect="non-scaling-stroke" />
                    </svg>
                  </div>
                  <div className="pl-6 space-y-4 w-40 shrink-0">
                    <div>
                      <div className="flex items-center gap-2 text-sm text-gray-600"><span className="w-2 h-2 rounded-full bg-blue-500" />Views</div>
                      <p className="text-xl font-bold text-black">608,300</p>
                      <TrendLineUp color="#3b82f6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-sm text-gray-600"><span className="w-2 h-2 rounded-full bg-green-500" />Clicks</div>
                      <p className="text-xl font-bold text-black">225,400</p>
                      <TrendLineUp color="#22c55e" />
                    </div>
                  </div>
                </div>

                <div className="flex p-4">
                  <div className="flex flex-col-reverse justify-between text-right text-xs text-gray-400 pr-3 h-[100px]">
                    {['100k', '200k', '300k', '400k', '500k', '600k', '700k'].map((label) => <span key={label}>{label}</span>)}
                  </div>
                  <div className="relative flex-1 h-[100px] border-l border-gray-200">
                     {Array.from({ length: 6 }).map((_, i) => <div key={i} className="absolute left-0 right-0 border-t border-gray-200/80" style={{ top: `${i * (100/6)}%` }} />)}
                    {Array.from({ length: 4 }).map((_, i) => <div key={i} className="absolute top-0 bottom-0 border-l border-gray-200/80" style={{ left: `${(i + 1) * 20}%` }} />)}
                    <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <path d="M0 20 C 25 15, 75 30, 100 25" stroke="#f59e0b" fill="none" strokeWidth="2.5" vectorEffect="non-scaling-stroke" />
                      <path d="M0 80 C 25 70, 75 85, 100 75" stroke="#ef4444" fill="none" strokeWidth="2.5" vectorEffect="non-scaling-stroke" />
                    </svg>
                  </div>
                  <div className="pl-6 space-y-4 w-40 shrink-0">
                    <div>
                      <div className="flex items-center gap-2 text-sm text-gray-600"><span className="w-2 h-2 rounded-full bg-amber-500" />Homepage</div>
                      <p className="text-xl font-bold text-black">588,400</p>
                      <TrendLineUp color="#f59e0b" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-sm text-gray-600"><span className="w-2 h-2 rounded-full bg-red-500" />Checkout</div>
                      <p className="text-xl font-bold text-black">162,600</p>
                      <TrendLineUp color="#ef4444" />
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center p-4">
                    <h4 className="text-sm font-medium text-black">Function Invocations</h4>
                    <button className="flex items-center gap-1 text-sm text-gray-600 bg-gray-100 border border-gray-200 rounded-md px-2 py-1">
                      Project
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-gray-400">
                        <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                  <div className="bg-gray-50/50 px-4 py-2 text-sm space-y-1">
                    {invocations.map((item, index) => (
                      <div key={index} className="flex justify-between items-center py-2">
                        <div className="flex items-center gap-2.5">
                          <span className={`w-2 h-2 rounded-full ${statusColors[item.status]}`} />
                          <span className="font-mono text-gray-700">{item.path}</span>
                        </div>
                        <span className="text-gray-500">{item.time}</span>
                      </div>
                    ))}
                  </div>
                  <div className="p-2 border-t border-gray-200">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                      <input type="text" placeholder="Filter" className="w-full bg-[#f9f9f9] border-none rounded-md pl-9 pr-3 py-1.5 text-sm focus:ring-2 focus:ring-black focus:outline-none" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ObservabilitySection;