'use client';

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Noise overlay */}
      <div className="noise-overlay" />

      {/* Gradient Orbs */}
      <div className="orb orb-primary w-[500px] h-[500px] -top-[200px] -left-[200px] animate-float" />
      <div className="orb orb-accent w-[400px] h-[400px] top-[40%] -right-[150px] animate-float-delayed" />
      <div className="orb orb-purple w-[350px] h-[350px] bottom-[10%] left-[20%] animate-float" style={{ animationDelay: '2s' }} />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.008]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />
    </div>
  );
}
