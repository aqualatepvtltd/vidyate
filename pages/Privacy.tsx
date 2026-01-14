import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Privacy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 py-12 md:py-20 animate-subtle-fade">
      <SEO 
        title="Privacy Policy | Vidyate Data Protection" 
        description="Read Vidyate's Privacy Policy to understand how we collect, use, and protect your personal information and academic data."
        keywords="Privacy Policy, Data Protection, Student Data Privacy, Vidyate Terms, User Rights, Information Security"
      />
      <Link to="/" className="inline-flex items-center gap-2 text-theme-muted hover:text-[#405cff] transition-all font-black text-[10px] uppercase tracking-widest mb-8">
        <span className="material-symbols-rounded text-sm">arrow_back</span>
        Return to Dashboard
      </Link>

      <div className="glass p-8 md:p-12 rounded-3xl border shadow-xl relative overflow-hidden" style={{ borderColor: 'var(--glass-border)' }}>
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#405cff] to-[#8B5CF6]"></div>
        
        <h1 className="text-3xl md:text-5xl font-black mb-8 tracking-tighter" style={{ color: 'var(--text-main)' }}>
          Privacy <span className="text-[#405cff]">Policy.</span>
        </h1>

        <div className="space-y-8 opacity-70 leading-relaxed font-medium text-sm md:text-base" style={{ color: 'var(--text-main)' }}>
          <section>
            <h2 className="text-xl font-black mb-4 opacity-100 uppercase tracking-tight" style={{ color: 'var(--text-main)' }}>1. Information We Collect</h2>
            <p className="mb-4">
              Vidyate Pro collects minimal personal information necessary to provide our academic services. This includes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contact details (Name, Email, Phone) when you place a book order or subscribe to our newsletter.</li>
              <li>Usage data to improve our AI Career Counselor's performance.</li>
              <li>Shipping addresses exclusively for physical book deliveries.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-black mb-4 opacity-100 uppercase tracking-tight" style={{ color: 'var(--text-main)' }}>2. How We Use Data</h2>
            <p>
              Your data is used solely for order fulfillment, academic updates, and enhancing your personalized learning experience. We do not sell your personal data to third-party advertisers. Academic materials you download are tracked anonymously to understand resource popularity.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black mb-4 opacity-100 uppercase tracking-tight" style={{ color: 'var(--text-main)' }}>3. AI Interactions</h2>
            <p>
              Conversations with our Gemini-powered Career Counselor are used to generate real-time advice. While these interactions are private, we advise users not to share highly sensitive personal medical records or financial details within the chat interface.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black mb-4 opacity-100 uppercase tracking-tight" style={{ color: 'var(--text-main)' }}>4. Security</h2>
            <p>
              We implement industry-standard encryption to protect your transaction details and personal information. Payment screenshots uploaded for book purchases are deleted after verification.
            </p>
          </section>

          <section className="pt-8 border-t border-dashed" style={{ borderColor: 'var(--glass-border)' }}>
            <p className="text-xs font-bold opacity-40 uppercase tracking-widest text-center">
              Last Updated: January 2026 • Vidyate Legal Team
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;