import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Terms: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 py-12 md:py-20 animate-subtle-fade">
      <SEO 
        title="Terms & Conditions | Vidyate Usage Policy" 
        description="Review the Terms and Conditions for using Vidyate's academic platform, resources, and services."
        keywords="Terms of Service, Usage Policy, Academic Disclaimer, Vidyate Rules, Student Agreement"
      />
      <Link to="/" className="inline-flex items-center gap-2 text-theme-muted hover:text-[#405cff] transition-all font-black text-[10px] uppercase tracking-widest mb-8">
        <span className="material-symbols-rounded text-sm">arrow_back</span>
        Return to Dashboard
      </Link>

      <div className="glass p-8 md:p-12 rounded-3xl border shadow-xl relative overflow-hidden" style={{ borderColor: 'var(--glass-border)' }}>
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#FF6B6B] to-[#8B5CF6]"></div>
        
        <h1 className="text-3xl md:text-5xl font-black mb-8 tracking-tighter" style={{ color: 'var(--text-main)' }}>
          Terms & <span className="text-[#FF6B6B]">Conditions.</span>
        </h1>

        <div className="space-y-8 opacity-70 leading-relaxed font-medium text-sm md:text-base" style={{ color: 'var(--text-main)' }}>
          <section>
            <h2 className="text-xl font-black mb-4 opacity-100 uppercase tracking-tight" style={{ color: 'var(--text-main)' }}>1. Academic Use Only</h2>
            <p>
              All resources provided on Vidyate Pro (Notes, PYQs, Syllabus) are intended for educational purposes only. These materials should supplement, not replace, official university textbooks and classroom lectures.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black mb-4 opacity-100 uppercase tracking-tight" style={{ color: 'var(--text-main)' }}>2. Medical Disclaimer</h2>
            <p className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 font-bold">
              Vidyate Pro is an academic hub, not a clinical diagnostic tool. Information regarding drug dosages, pharmacology, and clinical research is for study purposes only. Consult a licensed medical professional for health advice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black mb-4 opacity-100 uppercase tracking-tight" style={{ color: 'var(--text-main)' }}>3. Intellectual Property</h2>
            <p>
              The "Vidyate" brand, logo, and custom-curated notes are the property of the Vidyate Ecosystem. Users are granted a limited license to download and print materials for personal, non-commercial use. Redistribution of these materials for profit is strictly prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black mb-4 opacity-100 uppercase tracking-tight" style={{ color: 'var(--text-main)' }}>4. AI Counselor Usage</h2>
            <p>
              Our AI Career Counselor provides advice based on general pharmacy industry trends. While highly accurate, we do not guarantee specific employment outcomes or exam results based on AI recommendations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black mb-4 opacity-100 uppercase tracking-tight" style={{ color: 'var(--text-main)' }}>5. Book Store Policy</h2>
            <p>
              Book orders are processed only after manual verification of payment screenshots. Delivery times vary by location. Returns are accepted only if the book is received in a damaged condition.
            </p>
          </section>

          <section className="pt-8 border-t border-dashed" style={{ borderColor: 'var(--glass-border)' }}>
            <p className="text-xs font-bold opacity-40 uppercase tracking-widest text-center">
              Last Updated: October 2024 • Academic Excellence First
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;