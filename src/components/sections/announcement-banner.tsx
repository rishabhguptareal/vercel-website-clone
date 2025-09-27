import * as React from "react";
import { ArrowRight } from "lucide-react";

const AnnouncementBanner = () => {
  return (
    <div className="w-full bg-[#FAFAFA] text-black">
      <div className="mx-auto flex h-11 max-w-7xl items-center justify-center gap-x-4 px-4">
        <div className="flex items-center gap-x-3 sm:gap-x-4">
          <span className="flex-shrink-0 rounded-full bg-[#E6F4FF] px-2.5 py-0.5 text-xs font-medium text-[#0070F3]">
            New
          </span>

          <p className="hidden truncate text-sm text-black sm:inline">
            What and how to build with AI. Join us at Ship AI on Oct 23. SF or online.
          </p>

          <p className="truncate text-sm text-black sm:hidden">
            Join us at Ship AI on Oct 23.
          </p>
        </div>

        <a
          href="https://vercel.com/ship/ai"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-x-1 whitespace-nowrap rounded-full bg-black px-3 py-1.5 text-sm font-medium text-white transition-opacity hover:opacity-80"
        >
          Get tickets
          <ArrowRight className="hidden h-4 w-4 sm:inline" />
        </a>
      </div>
    </div>
  );
};

export default AnnouncementBanner;