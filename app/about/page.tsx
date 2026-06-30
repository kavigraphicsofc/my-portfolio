'use client';

import BackgroundGlow from '@/components/BackgroundGlow';

export default function About() {
  return (
    <div className="relative min-h-screen pt-36 pb-16 px-4 sm:px-6 lg:px-8">
      <BackgroundGlow />
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-12">
          <h1 className="text-5xl sm:text-6xl font-mono font-extrabold text-white mb-2">
            About <span className="text-cyan-400">Me</span>
          </h1>
          <div className="w-20 h-[3px] bg-cyan-500 mx-auto rounded-full shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
        </div>

        {/* IMAGE_588B42.JPG විදිහටම නිමවූ Card එක */}
        <div className="bg-[#0b101d]/60 border border-slate-800/80 p-8 rounded-2xl backdrop-blur-md relative overflow-hidden group hover:border-cyan-500/20 transition-all duration-300">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 font-mono font-bold text-xl">
              {`</>`}
            </div>
            <div>
              <h2 className="text-2xl font-mono font-bold text-white tracking-wide">Yasiru Narangoda</h2>
              <p className="text-sm text-cyan-400/80 uppercase font-semibold tracking-wider">Professional Graphic Designer</p>
            </div>
          </div>

          <p className="text-slate-300 leading-relaxed mb-8 text-[15px]">
            I am a passionate Graphic Designer dedicated to creating high-impact visual identities and digital content. With deep expertise in social media branding and banner layout design, I focus on transforming creative concepts into engaging visual experiences. Whether it's promotional content for social media presence or premium banner setups, I deliver sleek, modern designs that captivate audiences.
          </p>

          <div className="border-t border-slate-900/80 pt-6 flex flex-wrap gap-6 text-sm text-slate-400 font-mono">
            <div className="flex items-center space-x-2">
              <span className="text-cyan-500">◎</span>
              <span>Based in Sri Lanka</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-cyan-500">❖</span>
              <span>Social Media & Banners Expert</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}