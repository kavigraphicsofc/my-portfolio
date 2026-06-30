'use client';

import React from 'react';
import Link from 'next/link';
import BackgroundGlow from '@/components/BackgroundGlow';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
}

const projectsList: Project[] = [
  {
    title: "Sinhala & Tamil New Year Post",
    description: "A vibrant and culturally rich social media creative designed for the traditional New Year celebrations.",
    image: "https://raw.githubusercontent.com/kavigraphicsofc/my-portfolio/refs/heads/main/Images/Sinhala%20And%20Tamil%20New%20year%20%5BRecovered%5D.jpg.jpeg",
    tags: ["Graphic Design", "Social Media", "Photoshop"],
  },
  {
    title: "Vesak Festival Creative",
    description: "A serene and visually striking digital artwork crafted to celebrate the peaceful spirit of the Vesak festival.",
    image: "https://raw.githubusercontent.com/kavigraphicsofc/my-portfolio/refs/heads/main/Images/Vesak.jpg.jpeg",
    tags: ["Digital Art", "Festival Branding", "Creative Design"],
  },
  {
    title: "Independence Day Tribute",
    description: "A bold and patriotic visual concept designed for Independence Day celebrations, highlighting national pride.",
    image: "https://github.com/kavigraphicsofc/my-portfolio/blob/main/Images/indepences%20day.png?raw=true",
    tags: ["Poster Design", "National Theme", "Branding"],
  },
  {
    title: "Annual Sports Meet Branding",
    description: "An energetic and dynamic social media graphic tailored for a school/sports community annual meet.",
    image: "https://github.com/kavigraphicsofc/my-portfolio/blob/main/Images/sport%20meett%20copy.png?raw=true",
    tags: ["Sports Graphics", "Event Promotion", "Typography"],
  },
];

export default function Projects() {
  return (
    <main className="relative min-h-screen bg-[#0a0a0c] text-white pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <BackgroundGlow />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Navigation Link back to Home */}
        <div className="mb-8">
          <Link href="/" className="text-sm font-mono text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-2">
            ← Back to Home
          </Link>
        </div>

        {/* Heading */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-mono font-extrabold tracking-tight uppercase">
            Design <span className="text-cyan-400">Gallery</span>
          </h1>
          <p className="mt-2 text-base text-slate-400 max-w-xl font-mono">
            A showcase of creative social media designs, branding elements, and visual artwork.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsList.map((project, index) => (
            <div 
              key={index} 
              className="group relative bg-[#121215] border border-slate-800/60 rounded-xl overflow-hidden hover:border-cyan-500/40 transition-all duration-300 flex flex-col shadow-xl shadow-black/40"
            >
              {/* Image Container */}
              <div className="relative aspect-video w-full overflow-hidden bg-slate-900 border-b border-slate-800/60">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Project Details */}
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-mono font-bold text-white tracking-tight mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="text-[11px] font-mono tracking-wider bg-slate-800/50 text-slate-300 px-2.5 py-1 rounded-md border border-slate-700/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
