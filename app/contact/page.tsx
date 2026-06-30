'use client';

import { useState } from 'react';
import BackgroundGlow from '@/components/BackgroundGlow';

export default function Contact() {
  // ෆෝම් එකේ දත්ත ලබාගන්න state එකක් හදමු
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 1. WhatsApp හරහා මැසේජ් එක යැවීම
  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.message) {
      alert('Please fill in your Name and Message first!');
      return;
    }

    const phoneNumber = '94785144644'; // Yasiru's WhatsApp Number
    const text = `*New Portfolio Message* 🚀%0A%0A` +
                 `*Name:* ${formData.name}%0A` +
                 `*WhatsApp/Phone:* ${formData.phone || 'Not Provided'}%0A` +
                 `*Email:* ${formData.email || 'Not Provided'}%0A%0A` +
                 `*Message:*%0A${formData.message}`;

    window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${text}`, '_blank');
  };

  // 2. Gmail හරහා මැසේජ් එක යැවීම
  const handleGmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.message) {
      alert('Please fill in your Name and Message first!');
      return;
    }

    const targetEmail = 'kavigraphics45@gmail.com'; // Your Current Gmail
    const subject = encodeURIComponent(`Inquiry from Kavi Graphics Portfolio - ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Phone: ${formData.phone || 'Not Provided'}\n` +
      `Email: ${formData.email || 'Not Provided'}\n\n` +
      `Message:\n${formData.message}`
    );

    window.location.href = `mailto:${targetEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="relative min-h-screen pt-36 pb-16 px-4 sm:px-6 lg:px-8">
      <BackgroundGlow />
      <div className="max-w-6xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-6">
          
          {/* වම් පැත්ත: Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl font-mono font-bold text-white mb-6">Contact Information</h2>
            
            {/* WhatsApp Card */}
            <div className="bg-[#0b101d]/60 border border-slate-800 p-5 rounded-xl flex items-center space-x-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div>
                <p className="text-lg font-mono font-bold text-white">WhatsApp</p>
                <p className="text-sm text-slate-400">+94 78 514 4644</p>
              </div>
            </div>

            {/* Facebook Card */}
            <div className="bg-[#0b101d]/60 border border-slate-800 p-5 rounded-xl flex items-center space-x-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </div>
              <div>
                <p className="text-lg font-mono font-bold text-white">Facebook Profile</p>
                <a href="https://www.facebook.com/profile.php?id=61573246677121" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">
                  Yasiru Narangoda
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-[#0b101d]/60 border border-slate-800 p-5 rounded-xl flex items-center space-x-4">
              <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div>
                <p className="text-lg font-mono font-bold text-white">Location</p>
                <p className="text-sm text-slate-400">Sri Lanka</p>
              </div>
            </div>
          </div>

          {/* දකුණු පැත්ත: Send a Message Form */}
          <div className="lg:col-span-7 bg-[#0b101d]/40 border border-slate-800 p-8 rounded-2xl backdrop-blur-md">
            <h2 className="text-3xl font-mono font-bold text-white mb-6">Send a Message</h2>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#05070c] border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 font-mono text-sm" 
                  placeholder="Name" 
                />
                <input 
                  type="text" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-[#05070c] border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 font-mono text-sm" 
                  placeholder="WhatsApp (Optional)" 
                />
              </div>
              
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-[#05070c] border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 font-mono text-sm" 
                placeholder="Email" 
              />
              
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5} 
                className="w-full bg-[#05070c] border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 font-mono text-sm" 
                placeholder="Your Message"
              ></textarea>
              
              {/* Actions Button Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <button 
                  type="button"
                  onClick={handleWhatsAppSubmit}
                  className="py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-mono font-bold rounded-xl transition-all active:scale-[0.98] text-sm flex items-center justify-center space-x-2 shadow-lg hover:shadow-emerald-500/10"
                >
                  <span>via WhatsApp</span>
                </button>
                
                <button 
                  type="button"
                  onClick={handleGmailSubmit}
                  className="py-3 bg-rose-600 hover:bg-rose-500 text-white font-mono font-bold rounded-xl transition-all active:scale-[0.98] text-sm flex items-center justify-center space-x-2 shadow-lg hover:shadow-rose-500/10"
                >
                  <span>via Gmail</span>
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}