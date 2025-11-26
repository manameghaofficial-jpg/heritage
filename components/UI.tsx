import React from 'react';
import { LucideIcon } from 'lucide-react';

export const Logo: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <div className="relative w-10 h-10 flex items-center justify-center">
      <div className="absolute inset-0 bg-brand-red blur-lg opacity-50 animate-pulse"></div>
      <svg viewBox="0 0 100 100" className="w-full h-full relative z-10 text-brand-neon fill-current">
        <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" fill="none" />
        <circle cx="50" cy="50" r="25" stroke="#FF0033" strokeWidth="3" fill="none" />
        <path d="M50 5 L50 95 M5 50 L95 50" stroke="#00C8FF" strokeWidth="1" opacity="0.5" />
        <circle cx="50" cy="50" r="10" fill="#FF0033" />
      </svg>
    </div>
    <div className="flex flex-col">
      <span className="text-xl font-display font-bold tracking-wider text-white">SHARSHI</span>
      <span className="text-[0.6rem] tracking-[0.2em] text-brand-red uppercase">Science Heritage</span>
    </div>
  </div>
);

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'glass';
  icon?: LucideIcon;
}

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', icon: Icon, className = "", ...props }) => {
  const baseStyle = "px-6 py-3 rounded-none font-display text-sm uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden group";
  
  const variants = {
    primary: "bg-brand-red text-white hover:bg-brand-crimson border border-transparent hover:shadow-[0_0_20px_rgba(255,0,51,0.5)]",
    secondary: "bg-transparent border border-brand-blue text-brand-blue hover:bg-brand-blue/10 hover:shadow-[0_0_15px_rgba(0,200,255,0.3)]",
    glass: "bg-white/5 backdrop-blur-md border border-white/10 text-white hover:bg-white/10"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      <span className="relative z-10 flex items-center gap-2">
        {Icon && <Icon size={16} />}
        {children}
      </span>
      {variant === 'primary' && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
      )}
    </button>
  );
};

export const GlassCard: React.FC<{ children: React.ReactNode; className?: string; hoverEffect?: boolean }> = ({ children, className = "", hoverEffect = true }) => (
  <div className={`glass-panel p-6 rounded-xl ${hoverEffect ? 'hover:border-brand-red/50 hover:bg-black/40 transition-all duration-300' : ''} ${className}`}>
    {children}
  </div>
);

export const SectionTitle: React.FC<{ title: string; subtitle?: string }> = ({ title, subtitle }) => (
  <div className="mb-12 text-center">
    <h2 className="text-3xl md:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-red via-white to-brand-blue mb-4">
      {title}
    </h2>
    {subtitle && (
      <p className="text-brand-silver text-sm md:text-base tracking-widest uppercase">
        {subtitle}
      </p>
    )}
    <div className="w-24 h-1 bg-brand-red mx-auto mt-4 rounded-full shadow-[0_0_10px_#FF0033]"></div>
  </div>
);
