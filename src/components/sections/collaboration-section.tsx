import Image from 'next/image';

const UpArrowIcon = () => (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.93665 1.34119C6.54951 0.954051 5.91635 0.954051 5.5292 1.34119L1.34119 5.5292C0.954051 5.91635 0.954051 6.54951 1.34119 6.93665C1.72833 7.3238 2.36149 7.3238 2.74864 6.93665L5.25 4.43529V11.25C5.25 11.6642 5.58579 12 6 12C6.41421 12 6.75 11.6642 6.75 11.25V4.43529L9.25136 6.93665C9.63851 7.3238 10.2717 7.3238 10.6588 6.93665C11.046 6.54951 11.046 5.91635 10.6588 5.5292L6.93665 1.34119Z" fill="white"/>
    </svg>
);

const CollaborationSection = () => {
  return (
    <div className="pt-16 md:pt-0">
      <div className="flex items-center gap-2">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/86b3dd5a-d64b-46bb-88f1-19266bde8cbd-vercel-com/assets/svgs/message.26d850f8-32.svg?"
          alt="Message icon"
          width={16}
          height={16}
        />
        <p className="text-sm text-[#666666]">Collaborative Pre-production</p>
      </div>

      <h3 className="mt-2 text-2xl font-semibold text-black tracking-tight leading-tight">Every deploy is remarkable.</h3>

      <p className="mt-2 text-base text-[#666666] max-w-[360px]">
        Chat with your team on real, production-grade UI, not just designs.
      </p>

      <div className="relative mt-12 min-h-[300px]">
        
        <div className="absolute top-0 left-[55px] bg-white text-sm text-black py-3 px-4 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
          Swapped out the <code className="text-sm font-mono bg-[#fafafa] border border-[#eaeaea] rounded-[5px] px-1 py-0.5 whitespace-nowrap">button</code> for <br /> some variants we needed.
        </div>

        <div className="absolute top-[88px] right-[40px]">
          <div className="relative flex items-center justify-end gap-2">
            <div className="bg-[#0070f3] text-white text-xs font-semibold px-2.5 py-1 rounded-full">Pranathi</div>
            <div className="bg-white text-sm text-black py-3 px-4 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
              How about this instead?
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-[-8px] w-0 h-0 border-t-[6px] border-b-[6px] border-l-[8px] border-t-transparent border-b-transparent border-l-[#0070f3]" />
          </div>
        </div>

        <div className="absolute top-[152px] left-[80px]">
          <div className="relative flex items-center gap-2">
            <div className="bg-[#ff0000] text-white text-xs font-semibold px-2.5 py-1 rounded-full">Rauno</div>
            <div className="absolute top-1/2 -translate-y-1/2 left-[58px] w-0 h-0 border-t-[6px] border-b-[6px] border-r-[8px] border-t-transparent border-b-transparent border-r-[#ff0000]" />
            <div className="bg-white text-sm text-black p-3 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.1)] ml-2">
                I like it. Does this work with <br /> the brand tweaks <span className="text-[#0070f3]">@mamuso</span>?
            </div>
          </div>
        </div>
        
        <div className="absolute top-[236px] right-[12px]">
          <div className="relative flex items-center justify-end gap-2">
              <div className="bg-black text-white text-sm py-3 px-4 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
                  This looks great!
              </div>
              <div className="bg-black text-white w-7 h-7 rounded-full flex items-center justify-center">
                  <UpArrowIcon />
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 right-[-8px] w-0 h-0 border-t-[6px] border-b-[6px] border-l-[8px] border-t-transparent border-b-transparent border-l-[#00d2ff]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollaborationSection;