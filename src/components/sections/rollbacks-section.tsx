import Image from 'next/image';

const RollbacksSection = () => {
  return (
    <section className="bg-vercel-background-light py-20 lg:py-24">
      <div className="container mx-auto grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        
        {/* Left Column - Text Content */}
        <div className="flex flex-col gap-4 text-center lg:text-left">
          <div className="flex justify-center lg:justify-start">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/86b3dd5a-d64b-46bb-88f1-19266bde8cbd-vercel-com/assets/svgs/clock-rewind.19e0a3fa-39.svg?"
              alt="Clock Rewind Icon"
              width={24}
              height={24} 
              className="mb-2"
            />
          </div>
          <h2 className="text-base font-semibold text-black">
            Instant Rollbacks
          </h2>
          <h3 className="text-[32px] font-semibold leading-tight tracking-tight text-black">
            Go ahead, deploy on Friday.
          </h3>
          <p className="mx-auto max-w-md text-lg leading-relaxed text-vercel-gray-secondary lg:mx-0">
            Safely manage releases with automated deployments and instant rollbacks.
          </p>
        </div>

        {/* Right Column - Deployment Mockup */}
        <div className="w-full max-w-lg justify-self-center lg:justify-self-end">
          <div className="rounded-lg border border-border bg-white p-6 shadow-md">
            <div className="flex flex-col space-y-5">
              
              {/* First Deployment */}
              <div className="border-b border-border pb-5">
                <div className="space-y-3">
                  <div className="flex items-center justify-between font-mono text-sm">
                    <p className="text-vercel-gray-secondary">
                      vercel-site/
                      <span className="font-semibold text-black">jvjb4ynna</span>
                    </p>
                    <p className="text-vercel-gray-light">1d ago</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <p className="font-mono text-sm text-vercel-gray-light">ba5f55f</p>
                      <p className="text-sm text-black">Update bento box design</p>
                    </div>
                    <div className="flex h-6 min-w-[40px] items-center justify-center rounded bg-secondary px-2 text-sm font-medium text-black">
                      90
                    </div>
                  </div>
                </div>
              </div>

              {/* Second Deployment */}
              <div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between font-mono text-sm">
                    <p className="text-vercel-gray-secondary">
                      vercel-site/
                      <span className="font-semibold text-black">gigj178pv</span>
                    </p>
                    <p className="text-vercel-gray-light">10m ago</p>
                  </div>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3">
                      <p className="font-mono text-sm text-vercel-gray-light">bx012mm</p>
                      <div>
                          <p className="text-sm text-black">Fix ESLint error</p>
                          <p className="text-sm text-vercel-gray-secondary">Fix ESLint error on query</p>
                      </div>
                    </div>
                     <div className="flex h-6 min-w-[40px] items-center justify-center rounded bg-secondary px-2 text-sm font-medium text-black">
                      55
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

export default RollbacksSection;