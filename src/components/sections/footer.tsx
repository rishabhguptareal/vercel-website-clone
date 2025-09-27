import React from 'react';
import Image from 'next/image';
import {
  ArrowUpRight,
  ChevronDown,
  Github,
  Linkedin,
  Twitter,
  Youtube,
  Monitor,
  Moon,
  Command,
} from 'lucide-react';

const productLinks = [
  { name: 'AI', href: '/ai' },
  { name: 'Enterprise', href: '/enterprise' },
  { name: 'Fluid Compute', href: '/fluid' },
  { name: 'Next.js', href: '/frameworks/nextjs' },
  { name: 'Observability', href: '/products/observability' },
  { name: 'Previews', href: '/products/previews' },
  { name: 'Rendering', href: '/products/rendering' },
  { name: 'Security', href: '/security' },
  { name: 'Turbo', href: '/solutions/turborepo' },
  { name: 'Domains', href: '#' },
  { name: 'v0', href: 'https://v0.dev', external: true },
];

const resourceLinks = [
  { name: 'Community', href: 'https://github.com/vercel/community', external: true },
  { name: 'Docs', href: '/docs' },
  { name: 'Guides', href: '/guides' },
  { name: 'Help', href: '#' },
  { name: 'Integrations', href: '/integrations' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Resources', href: '#' },
  { name: 'Solution Partners', href: '/partners/solutions' },
  { name: 'Startups', href: '/startups' },
  { name: 'Templates', href: '/templates' },
  { name: 'SDKs by Vercel', href: '#', dropdown: true },
];

const companyLinks = [
  { name: 'About', href: '/about' },
  { name: 'Blog', href: 'https://vercel.com/blog' },
  { name: 'Careers', href: '/careers' },
  { name: 'Changelog', href: '/changelog' },
  { name: 'Contact Us', href: '/contact' },
  { name: 'Customers', href: '/customers' },
  { name: 'Events', href: '#' },
  { name: 'Partners', href: '/partners' },
  { name: 'Shipped', href: 'https://vercel.com/shipped' },
  { name: 'Privacy Policy', href: '/legal/privacy-policy' },
  { name: 'Legal', href: '#', dropdown: true },
];

interface SocialLink {
  name: 'GitHub' | 'LinkedIn' | 'Twitter' | 'YouTube';
  href: string;
  icon: React.ComponentType<{ size: number; className?: string }>;
}

const socialLinksData: SocialLink[] = [
  { name: 'GitHub', href: 'https://github.com/vercel', icon: Github },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/vercel', icon: Linkedin },
  { name: 'Twitter', href: 'https://twitter.com/vercel', icon: Twitter },
  { name: 'YouTube', href: 'https://youtube.com/vercel', icon: Youtube },
];

const FooterSection = () => {
  return (
    <footer className="border-t border-[#e1e1e1] bg-[#fafafa] text-sm text-[#666666]">
      <div className="mx-auto max-w-[1248px] px-6">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 py-16 md:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <a href="/" aria-label="Vercel homepage">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/86b3dd5a-d64b-46bb-88f1-19266bde8cbd-vercel-com/assets/svgs/vercel-logotype-light.5273e3f6-1.svg?"
                alt="Vercel Logo"
                width={90.69}
                height={18}
                priority
              />
            </a>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-black">Products</h3>
            <ul className="space-y-3">
              {productLinks.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="flex items-center transition-colors hover:text-black" target={item.external ? '_blank' : undefined} rel={item.external ? 'noopener noreferrer' : undefined}>
                    {item.name}
                    {item.external && <ArrowUpRight className="ml-1" size={14} />}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-black">Resources</h3>
            <ul className="space-y-3">
              {resourceLinks.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="flex items-center transition-colors hover:text-black" target={item.external ? '_blank' : undefined} rel={item.external ? 'noopener noreferrer' : undefined}>
                    {item.name}
                    {item.external && <ArrowUpRight className="ml-1" size={14} />}
                    {item.dropdown && <ChevronDown className="ml-1" size={14} />}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-black">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="flex items-center transition-colors hover:text-black">
                    {item.name}
                    {item.dropdown && <ChevronDown className="ml-1" size={14} />}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-black">Social</h3>
            <ul className="space-y-3">
              {socialLinksData.map(({ name, href, icon: Icon }) => (
                <li key={name}>
                  <a href={href} className="flex items-center gap-2 transition-colors hover:text-black" target="_blank" rel="noopener noreferrer">
                    <Icon size={16} />
                    <span>{name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-[#e1e1e1] py-6">
          <a href="https://vercel-status.com" target="_blank" rel="noopener noreferrer" className="flex items-center text-[#0070f3] transition-colors hover:text-black">
            <span className="mr-2 h-2.5 w-2.5 rounded-full bg-[#0070f3]"></span>
            All systems normal.
          </a>
          <div className="flex items-center space-x-1">
            <button className="rounded-md p-1.5 text-[#888888] transition-colors hover:bg-[#f5f5f5] hover:text-black" aria-label="System status">
              <Monitor size={16} />
            </button>
            <button className="rounded-md p-1.5 text-[#888888] transition-colors hover:bg-[#f5f5f5] hover:text-black" aria-label="Toggle theme">
              <Moon size={16} />
            </button>
            <button className="rounded-md p-1.5 text-[#888888] transition-colors hover:bg-[#f5f5f5] hover:text-black" aria-label="Command menu">
              <Command size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;