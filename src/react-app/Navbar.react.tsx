import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";

export const Navbar: React.FC = () => {
  const location = useLocation();

  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link
      to={href}
      className={`text-sm text-neutral-700 hover:text-black transition-colors ${
        location.pathname === href ? "text-black" : ""
      }`}
    >
      {children}
    </Link>
  );

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[var(--color-vercel-border-gray)] bg-white/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Left: Brand */}
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2 text-black">
              <span className="h-0 w-0 border-x-[7px] border-b-[12px] border-x-transparent border-b-black" aria-hidden />
              <span className="font-medium">Acme</span>
            </Link>

            {/* Primary Nav */}
            <nav className="hidden md:flex items-center gap-6">
              <button className="inline-flex items-center gap-1 text-sm text-neutral-700 hover:text-black">
                Products <ChevronDown className="h-4 w-4" />
              </button>
              <button className="inline-flex items-center gap-1 text-sm text-neutral-700 hover:text-black">
                Solutions <ChevronDown className="h-4 w-4" />
              </button>
              <button className="inline-flex items-center gap-1 text-sm text-neutral-700 hover:text-black">
                Resources <ChevronDown className="h-4 w-4" />
              </button>
              <NavLink href="#">Enterprise</NavLink>
              <NavLink href="#">Docs</NavLink>
              <NavLink href="#">Pricing</NavLink>
            </nav>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="rounded-full border border-[var(--color-vercel-border-gray)] px-4 py-1.5 text-sm font-medium text-black hover:bg-neutral-50"
            >
              Contact
            </a>
            <Link
              to="/dashboard"
              className="rounded-full border border-[var(--color-vercel-border-gray)] px-4 py-1.5 text-sm font-medium text-black hover:bg-neutral-50"
            >
              Dashboard
            </Link>
            <div
              className="ml-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-green-200 text-xs font-semibold text-black"
              title="User"
            >
              AC
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;