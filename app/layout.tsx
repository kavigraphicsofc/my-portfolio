import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kavi Graphics | Portfolio",
  description: "Graphic Design Portfolio of Yasiru Narangoda",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning මඟින් Extension නිසා එන වැරදි සහ Footer නැතිවීමේ ප්‍රශ්නය සම්පූර්ණයෙන්ම විසඳයි
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} font-sans bg-[#080B11] antialiased min-h-screen flex flex-col justify-between`}>
        <div>
          <Navbar />
          {children}
        </div>

        {/* FOOTER SECTION */}
        <footer className="bg-[#0b0f19] border-t border-slate-900 pt-16 pb-8 px-4 sm:px-6 lg:px-8 mt-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
            
            {/* වම් පැත්ත: Brand & About */}
            <div className="space-y-4">
              <h3 className="text-xl font-mono font-extrabold tracking-wider text-white">
                KAVI <span className="text-cyan-400">GRAPHICS</span>
              </h3>
              <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
                Expert Graphic Designer specializing in high-converting creatives and production-ready banner layouts.
              </p>
            </div>

            {/* මැද: Quick Links */}
            <div className="space-y-4">
              <h4 className="text-md font-bold text-white tracking-wide">Quick Links</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link></li>
                <li><Link href="/about" className="hover:text-cyan-400 transition-colors">About</Link></li>
                <li><Link href="/projects" className="hover:text-cyan-400 transition-colors">Designs</Link></li>
                <li><Link href="/contact" className="hover:text-cyan-400 transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* දකුණු පැත්ත: Get In Touch */}
            <div className="space-y-4">
              <h4 className="text-md font-bold text-white tracking-wide">Get In Touch</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><span className="text-slate-500">Phone:</span> 0785144644</li>
                <li>
                  <a href="https://www.facebook.com/profile.php?id=61573246677121" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                    Facebook Profile
                  </a>
                </li>
              </ul>
            </div>

          </div>

          {/* Copyright සහ Credit Link */}
          <div className="max-w-7xl mx-auto border-t border-slate-900/60 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>
              Made with <span className="text-red-500 animate-pulse">❤️</span> by{" "}
              <a 
                href="https://induwaradeshan.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text font-bold hover:brightness-125 transition-all text-[13px] tracking-wide"
              >
                Induwara Deshan
              </a>
            </p>
            <p>© {new Date().getFullYear()} Kavi Graphics. All rights reserved.</p>
          </div>
        </footer>

      </body>
    </html>
  );
}