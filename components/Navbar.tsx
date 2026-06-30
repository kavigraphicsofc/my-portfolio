'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Designs', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#080B11]/70 backdrop-blur-md border-b border-cyan-500/10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto h-20 flex items-center justify-between">
        {/* Brand Name */}
        <Link href="/" className="flex items-center space-x-2 group">
          <span className="text-xl font-mono font-extrabold tracking-wider text-white">
            {`</>`} KAVI <span className="text-cyan-400">GRAPHICS</span>
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center space-x-1 sm:space-x-4 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  isActive 
                    ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shadow-[0_0_15px_rgba(34,211,238,0.15)]' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}