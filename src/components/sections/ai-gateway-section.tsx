import Image from 'next/image';

const AIGatewaySection = () => {
  return (
    <section className="bg-white py-20 lg:py-24 xl:py-32">
      <div className="container">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/86b3dd5a-d64b-46bb-88f1-19266bde8cbd-vercel-com/assets/svgs/golden-gate.927cf0f4-34.svg?"
            alt="Golden Gate icon"
            width={48}
            height={38}
            className="mb-8"
          />
          <h2 className="mb-4 text-[32px] font-semibold leading-[1.2] text-black">
            Vercel AI Gateway
          </h2>
          <h3 className="mb-4 text-2xl font-medium text-black">
            Deploy AI in seconds.
          </h3>
          <p className="max-w-lg text-base text-[#666666]">
            Access all major models through a single, unified interface and shared AI credit wallet.
          </p>
        </div>
        <div className="mt-16">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/86b3dd5a-d64b-46bb-88f1-19266bde8cbd-vercel-com/assets/svgs/ai-gateway-full-light-35.svg?"
            alt="Vercel AI Gateway product interface"
            width={1232}
            height={746}
            className="mx-auto h-auto w-full max-w-[1232px] rounded-lg border border-[#EAEAEA] shadow-[0_5px_15px_rgba(0,0,0,0.02),0_15px_35px_rgba(0,0,0,0.07)]"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default AIGatewaySection;