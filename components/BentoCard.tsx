
import React from 'react';

interface BentoCardProps {
  title: string;
  description?: string;
  icon: string;
  color: string;
  onClick?: () => void;
  className?: string;
  footer?: React.ReactNode;
}

const BentoCard: React.FC<BentoCardProps> = ({ title, description, icon, color, onClick, className = '', footer }) => {
  return (
    <div 
      onClick={onClick}
      className={`glass group cursor-pointer p-6 md:p-8 rounded-2xl md:rounded-3xl hover:-translate-y-1.5 transition-all duration-500 border shadow-sm hover:shadow-xl flex flex-col justify-between relative overflow-hidden ${className}`}
      style={{ 
        borderColor: 'var(--glass-border)',
      }}
    >
      {/* Dynamic Hover Glow */}
      <div 
        className="absolute -top-24 -right-24 w-40 h-40 rounded-full blur-[60px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"
        style={{ backgroundColor: color }}
      ></div>

      <div>
        <div 
          className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center mb-5 md:mb-6 shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
          style={{ 
            backgroundColor: `${color}15`, 
            color,
            border: `1px solid ${color}30`
          }}
        >
          <span className="material-symbols-rounded text-2xl md:text-3xl">{icon}</span>
        </div>
        
        <h3 
          className="text-xl md:text-2xl font-black mb-2 md:mb-3 tracking-tight transition-colors duration-300"
          style={{ color: 'var(--text-main)' }}
        >
          {title}
        </h3>
        
        {description && (
          <p 
            className="text-sm md:text-base leading-relaxed font-medium transition-opacity duration-300 opacity-60 group-hover:opacity-100"
            style={{ color: 'var(--text-main)' }}
          >
            {description}
          </p>
        )}
      </div>

      {footer && (
        <div className="mt-6 md:mt-8 pt-4 md:pt-5 border-t border-dashed" style={{ borderColor: 'var(--glass-border)' }}>
          {footer}
        </div>
      )}
    </div>
  );
};

export default BentoCard;
