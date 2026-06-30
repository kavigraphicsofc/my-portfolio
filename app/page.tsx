'use client';

import Link from 'next/link';
import BackgroundGlow from '@/components/BackgroundGlow';

export default function Home() {
  return (
    <main className="relative min-h-screen pt-40 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden flex flex-col items-center justify-center text-center">
      <BackgroundGlow />

      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-5xl sm:text-7xl font-mono font-extrabold tracking-tight text-white uppercase">
          Creative <span className="text-cyan-400">Graphic</span> Designer
        </h1>

        <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Hi, I'm <span className="text-white font-bold">Yasiru Narangoda</span>. I craft high-converting social media posts and production-ready banners under <span className="text-cyan-400 font-bold">Kavi Graphics</span>.
        </p>

        <div className="pt-6">
          <Link
            href="/about"
            className="inline-flex items-center space-x-2 px-6 py-3 border border-cyan-500/30 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all duration-300"
          >
            <span>Learn More About Me</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </main>
  );
}