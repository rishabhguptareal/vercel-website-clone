import Image from 'next/image';
import { Lock } from 'lucide-react';

const GitDeploysSection = () => {
  return (
    <div>
      <div className="flex items-center gap-2">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/86b3dd5a-d64b-46bb-88f1-19266bde8cbd-vercel-com/assets/svgs/terminal.0d2d148f-31.svg?"
          alt="Terminal icon"
          width={20}
          height={20}
          className="w-5 h-5"
        />
        <h2 className="font-mono text-sm text-neutral-600">Git-connected Deploys</h2>
      </div>
      <h3 className="mt-4 text-[28px] font-semibold tracking-tight text-black leading-tight">
        From localhost to https, in seconds.
      </h3>
      <p className="mt-3 text-base text-neutral-600">
        Deploy from Git or your CLI.
      </p>

      <div
        className="mt-8 overflow-hidden border rounded-lg border-neutral-200/70 bg-neutral-50/50"
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.03) 0px 1px 1px, rgba(0, 0, 0, 0.03) 0px 2px 2px, rgba(0, 0, 0, 0.03) 0px 4px 4px, rgba(0, 0, 0, 0.03) 0px 8px 8px, rgba(0, 0, 0, 0.03) 0px 15px 15px',
        }}
      >
        <div className="p-4 bg-white border-b border-neutral-200/70">
          <pre className="font-mono text-[13px] text-neutral-500 leading-relaxed">
            <span className="text-neutral-400">▲ ~ vercel-site/</span> git push
            <br />
            <span className="text-black">Enumerating objects: 1, done.</span>
            <br />
            <span className="text-black">Counting objects: 100% (1/1), done.</span>
            <br />
            <span className="text-black">Writing objects: 100% (1/1), 72 bytes, done.</span>
            <br />
            <span className="text-black">Total 1 (delta 0), reused 0 (delta 0).</span>
            <br />
            To github.com:vercel/vercel-site.git
            <br />
            <span className="text-green-500">21326a9</span>..
            <span className="text-green-500">81663c3</span> main -&gt; main
          </pre>
        </div>
        <div className="p-6">
          <div className="overflow-hidden bg-white border rounded-md shadow-sm border-neutral-200/70">
            <div className="flex items-center gap-2 px-3 py-2 border-b border-neutral-200/70 bg-neutral-50/50">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
              </div>
              <div className="flex items-center justify-center flex-grow -ml-12">
                <div className="flex items-center gap-1.5 rounded-md bg-neutral-200/60 px-4 py-1">
                  <Lock size={12} className="text-neutral-500" />
                  <span className="text-xs text-neutral-600">vercel.com</span>
                </div>
              </div>
            </div>
            <div className="relative flex flex-col items-center justify-center h-32 text-center bg-white">
              <svg
                width="121"
                height="104"
                viewBox="0 0 121 104"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute opacity-10"
                aria-hidden="true"
              >
                <path
                  d="M60.5 0.999999L120.122 103.5H0.878222L60.5 0.999999Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                ></path>
              </svg>
              <span className="z-10 text-xl font-medium text-neutral-400">What will you ship?</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GitDeploysSection;