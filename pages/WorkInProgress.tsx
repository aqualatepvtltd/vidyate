import React from 'react';
import SEO from '../components/SEO';

const WorkInProgress: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[var(--bg-color)] p-4">
        <div className="max-w-2xl mx-auto text-center animate-scale-up">
            <SEO title="Under Maintenance | Vidyate" />
            <div className="glass p-10 md:p-16 rounded-3xl border shadow-2xl relative overflow-hidden" style={{ borderColor: 'var(--glass-border)' }}>
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-yellow-400 to-orange-500"></div>
                <div className="w-20 h-20 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-8">
                    <span className="material-symbols-rounded text-4xl text-yellow-500">construction</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-black mb-4 tracking-tighter" style={{ color: 'var(--text-main)' }}>
                    Work in Progress
                </h1>
                <p className="opacity-60 text-base md:text-lg max-w-md mx-auto leading-relaxed font-medium mb-10" style={{ color: 'var(--text-main)' }}>
                    Our developer team is working on some extraordinary things. The site is temporarily undergoing maintenance. We'll be back shortly!
                </p>
                <div className="bg-slate-500/10 border border-slate-500/20 p-4 rounded-xl">
                    <p className="text-sm font-bold opacity-80" style={{ color: 'var(--text-main)' }}>
                        For urgent inquiries, please contact us at:
                    </p>
                    <a 
                        href="mailto:vidyatestudenthub@gmail.com" 
                        className="text-base font-black text-[#405cff] mt-1 block hover:underline"
                    >
                        vidyatestudenthub@gmail.com
                    </a>
                </div>
            </div>
        </div>
    </div>
  );
};

export default WorkInProgress;