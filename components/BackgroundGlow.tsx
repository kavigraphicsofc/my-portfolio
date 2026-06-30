'use client';

export default function BackgroundGlow() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-background">
      {/* Top Left Purple Glow */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-primary-500/10 blur-[120px]" />
      {/* Bottom Right Pink Glow */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-accent-500/10 blur-[120px]" />
      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px]" />
    </div>
  );
}