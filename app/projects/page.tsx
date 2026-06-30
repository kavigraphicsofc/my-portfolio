'use client';

import { useState } from 'react';
import BackgroundGlow from '@/components/BackgroundGlow';

// Sample Array (මෙහි ඔයාගේ ඉතුරු images සහ විස්තර දාගන්න පුළුවන්)
const designs = [
  {
    title: 'Cyber Gaming Poster Template',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Corporate Event Banner Layout',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Product Launch Instagram Flyer',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
  },
];

export default function Designs() {
  // Popup එකේ දාන්න ඕන Photo එකේ URL එක සහ Title එක තියාගන්න State එක
  const [selectedImage, setSelectedImage] = useState<{ image: string; title: string } | null>(null);

  return (
    <div className="relative min-h-screen pt-36 pb-16 px-4 sm:px-6 lg:px-8">
      <BackgroundGlow />
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-mono font-extrabold text-white mb-3">Design Gallery</h1>
          <p className="text-slate-400 text-sm sm:text-base">
            Explore premium visual concepts, social creatives, and masterfully crafted production layouts. Click on any design to preview.
          </p>
        </div>

        {/* Design Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {designs.map((design, index) => (
            <div 
              key={index} 
              // ක්ලික් කරපු ගමන් Popup එක open වෙන්න මෙතනින් සෙට් කලා
              onClick={() => setSelectedImage(design)}
              className="bg-[#0b101d]/50 border border-slate-800/80 rounded-2xl overflow-hidden group hover:border-cyan-500/20 transition-all duration-300 cursor-pointer hover:shadow-[0_0_25px_rgba(34,211,238,0.05)]"
            >
              <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
                <img 
                  src={design.image} 
                  alt={design.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 opacity-85 group-hover:opacity-100"
                />
                
                {/* Hover කරද්දී පේන ලස්සන Overlay එකක් */}
                <div className="absolute inset-0 bg-cyan-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="bg-[#080B11]/90 text-cyan-400 border border-cyan-500/30 text-xs font-mono px-3 py-1.5 rounded-md shadow-lg">
                    🔍 View Full Design
                  </span>
                </div>
              </div>
              
              <div className="p-5">
                <h3 className="text-lg font-mono font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {design.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* 🖼️ PHOTO POPUP MODAL (LIGHTBOX) SECTION */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedImage(null)} // Background එක ක්ලික් කලත් වහන්න
        >
          {/* Close Button */}
          <button 
            className="absolute top-6 right-6 text-slate-400 hover:text-white bg-slate-900/50 border border-slate-800 p-2.5 rounded-full text-xl transition-colors font-sans"
            onClick={() => setSelectedImage(null)}
          >
            ✕
          </button>

          {/* Container & Image */}
          <div 
            className="relative max-w-4xl w-full max-h-[80vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()} // ෆොටෝ එක උඩ ක්ලික් කලොත් Popup එක වැහෙන එක නවත්තන්න
          >
            <img 
              src={selectedImage.image} 
              alt={selectedImage.title} 
              className="object-contain max-w-full max-h-[70vh] rounded-xl border border-slate-800 shadow-[0_0_5px_rgba(34,211,238,0.2)]"
            />
            
            {/* Title Below Image */}
            <h3 className="text-white font-mono text-center mt-4 text-lg font-bold px-4">
              {selectedImage.title}
            </h3>
          </div>
        </div>
      )}
    </div>
  );
}