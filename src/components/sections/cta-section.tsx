import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="bg-background py-[120px]">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-stretch">
          <Link
            href="https://vercel.com/new"
            className="group flex flex-1 items-center justify-between rounded-2xl border border-zinc-200 bg-white p-6 shadow-[0_5px_20px_-5px_rgba(0,0,0,0.1)] transition-shadow duration-300 hover:shadow-[0_8px_30px_-5px_rgba(0,0,0,0.2)] sm:p-8 lg:p-12"
          >
            <h2 className="text-4xl font-semibold leading-none tracking-[-0.035em] text-black sm:text-5xl lg:text-[56px]">
              Start Deploying
            </h2>
            <div className="ml-4 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-black text-white transition-transform duration-300 group-hover:scale-105 md:h-20 md:w-20">
              <ArrowRight className="h-8 w-8 md:h-9 md:w-9" />
            </div>
          </Link>
          <div className="flex w-full flex-col justify-center gap-4 lg:w-[350px] lg:shrink-0">
            <Link
              href="https://vercel.com/contact/sales"
              className="group flex items-center justify-between rounded-full bg-black py-4 px-6 font-medium text-white transition-transform duration-200 hover:-translate-y-0.5"
            >
              <span className="text-base">Talk to an Expert</span>
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/86b3dd5a-d64b-46bb-88f1-19266bde8cbd-vercel-com/assets/svgs/chevron-circle-right-fill.d76f481e-40.svg?"
                alt="Arrow icon"
                width={24}
                height={24}
                className="invert"
              />
            </Link>
            <Link
              href="https://vercel.com/contact/sales/enterprise-trial"
              className="group flex items-center justify-between rounded-full border border-zinc-200 bg-white py-4 px-6 font-medium text-black transition-transform duration-200 hover:-translate-y-0.5"
            >
              <span className="text-base">Get an Enterprise Trial</span>
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/86b3dd5a-d64b-46bb-88f1-19266bde8cbd-vercel-com/assets/svgs/chevron-circle-right-fill.d76f481e-40.svg?"
                alt="Arrow icon"
                width={24}
                height={24}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;