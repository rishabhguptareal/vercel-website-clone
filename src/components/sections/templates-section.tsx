import React from 'react';
import { Github, Terminal, LayoutGrid, AtSign, Lock } from 'lucide-react';
import { SiNextdotjs, SiSvelte, SiReact, SiNuxtdotjs, SiAstro, SiPython } from 'react-icons/si';

const features = [
  {
    icons: [
      <Github key="github" className="w-5 h-5 text-black" />,
      <svg key="vercel" width="18" height="18" viewBox="0 0 75 65" fill="none" className="ml-1.5"><path d="M37.592 0L74.206 64.125H.978L37.592 0z" fill="#000"></path></svg>,
      <Terminal key="cli" className="w-5 h-5 text-black ml-1.5" />
    ],
    text: (
      <>
        Deploy automatically <strong className="font-medium text-black">from git</strong> or with <strong className="font-medium text-black">our CLI</strong>
      </>
    )
  },
  {
    icons: [<LayoutGrid key="frameworks" className="w-5 h-5 text-black" />],
    text: (
      <>
        <strong className="font-medium text-black">Wide range</strong> support for the most popular frameworks
      </>
    )
  },
  {
    icons: [<AtSign key="previews" className="w-5 h-5 text-black" />],
    text: (
      <>
        <strong className="font-medium text-black">Previews</strong> for every push
      </>
    )
  },
  {
    icons: [<Lock key="https" className="w-5 h-5 text-black" />],
    text: (
      <>
        <strong className="font-medium text-black">Automatic HTTPS</strong> for all your domains
      </>
    )
  }
];

const templates = [
  {
    name: 'Next.js Templates',
    href: 'https://vercel.com/templates/nextjs',
    icon: <SiNextdotjs className="w-12 h-12 text-black" />,
    patternStyle: {
      backgroundColor: '#fafafa',
      backgroundImage: 'linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)',
      backgroundSize: '20px 20px',
    },
  },
  {
    name: 'Svelte Templates',
    href: 'https://vercel.com/templates/svelte',
    icon: <SiSvelte className="w-12 h-12 text-[#ff3e00]" />,
    patternStyle: {
      backgroundColor: 'rgba(255, 62, 0, 0.05)',
      backgroundImage: 'linear-gradient(rgba(255, 62, 0, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 62, 0, 0.1) 1px, transparent 1px)',
      backgroundSize: '20px 20px',
    },
  },
  {
    name: 'React Templates',
    href: 'https://vercel.com/templates/react',
    icon: <SiReact className="w-12 h-12 text-[#61dafb]" />,
    patternStyle: {
      backgroundColor: 'rgba(97, 218, 251, 0.05)',
      backgroundImage: 'linear-gradient(rgba(97, 218, 251, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(97, 218, 251, 0.1) 1px, transparent 1px)',
      backgroundSize: '20px 20px',
    },
  },
  {
    name: 'Nuxt Templates',
    href: 'https://vercel.com/templates/nuxt',
    icon: <SiNuxtdotjs className="w-12 h-12 text-[#00dc82]" />,
    patternStyle: {
      backgroundColor: 'rgba(0, 220, 130, 0.05)',
      backgroundImage: 'linear-gradient(rgba(0, 220, 130, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 220, 130, 0.1) 1px, transparent 1px)',
      backgroundSize: '20px 20px',
    },
  },
  {
    name: 'Astro Templates',
    href: 'https://vercel.com/templates/astro',
    icon: <SiAstro className="w-12 h-12 text-black" />,
    patternStyle: {
      backgroundColor: 'rgba(188, 82, 238, 0.05)',
      backgroundImage: 'linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)',
      backgroundSize: '20px 20px',
    },
  },
  {
    name: 'Python Templates',
    href: 'https://vercel.com/templates/python',
    icon: <SiPython className="w-12 h-12 text-[#3776AB]" />,
    patternStyle: {
      backgroundColor: 'rgba(255, 211, 67, 0.08)',
      backgroundImage: 'linear-gradient(rgba(255, 211, 67, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 211, 67, 0.15) 1px, transparent 1px)',
      backgroundSize: '20px 20px',
    },
  }
];

const TemplatesSection = () => {
  return (
    <section className="bg-vercel-background-light py-20 lg:py-32">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-5 lg:gap-16 gap-12 items-center">
          <div className="lg:col-span-2">
            <h2 className="text-[40px] font-semibold leading-[48px] tracking-[-1.2px] text-black">
              Deploy your first app in seconds.
            </h2>
            <ul className="mt-8 space-y-7">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="flex items-center flex-shrink-0 w-6 h-6 justify-center mt-0.5">
                    {feature.icons.map((icon) => icon)}
                  </div>
                  <p className="text-base text-vercel-gray-secondary leading-relaxed">{feature.text}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-3">
            <div className="grid grid-cols-2 gap-4">
              {templates.map((template) => (
                <a
                  key={template.name}
                  href={template.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative overflow-hidden rounded-lg border border-border group"
                >
                  <div 
                    className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={template.patternStyle}
                  />
                  <div className="relative aspect-[3/2] flex flex-col justify-end p-4 transition-transform duration-300 group-hover:-translate-y-1">
                    <div className="flex-grow flex items-center justify-center">
                      {template.icon}
                    </div>
                    <p className="text-center text-sm font-medium text-neutral-800 pt-2">{template.name}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TemplatesSection;