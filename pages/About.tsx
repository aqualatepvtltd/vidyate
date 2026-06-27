
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const About: React.FC = () => {
    return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-10">
      <SEO 
        title="About Vidyate | Revolutionizing Pharmacy Education" 
        description="Discover Vidyate's mission to transform pharmaceutical education through digital accessibility, expert-verified resources, and a student-centric academic ecosystem."
        keywords="About Vidyate, Pharmacy Education, Digital Learning, B.Pharm Resources, D.Pharm Guide, Academic Ecosystem, Pharmacy Students India"
      />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#405cff]/10 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#8B5CF6]/10 rounded-full blur-[100px] animate-pulse delay-500"></div>
        </div>
        
        <span className="text-[#405cff] font-black text-[10px] tracking-[0.4em] uppercase mb-6 block">The Vidyate Manifest</span>
        <h1 className="text-4xl md:text-7xl font-black mb-6 leading-[1.1] tracking-tighter" style={{ color: 'var(--text-main)' }}>
          Dedicated to <br/>
          <span className="text-[#405cff]">Academic</span> Clarity.
        </h1>
        <p className="opacity-60 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-medium mb-12" style={{ color: 'var(--text-main)' }}>
          Vidyate is a high-performance academic ecosystem designed to accelerate the learning curve for Pharmacy students globally.
        </p>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 md:py-24">
        <div 
          className="glass p-8 md:p-12 rounded-3xl border relative overflow-hidden grid grid-cols-1 lg:grid-cols-5 gap-12 items-center"
          style={{ borderColor: 'var(--glass-border)' }}
        >
          <div className="lg:col-span-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10B981]/10 text-[#10B981] text-[10px] font-black uppercase tracking-[0.2em] mb-6">
              <span className="material-symbols-rounded text-sm">radar</span>
              Our Mission
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-6 tracking-tighter" style={{ color: 'var(--text-main)' }}>Resource Minimalism, Maximum Impact.</h2>
            <div className="space-y-4 opacity-70 leading-relaxed font-medium text-sm md:text-base" style={{ color: 'var(--text-main)' }}>
              <p>
                Pharmacy education is burdened by data overload. Students waste countless hours searching for reliable materials instead of learning. We solve this by applying a simple principle: <strong>Resource Minimalism</strong>.
              </p>
              <p>
                By filtering out the noise and providing only high-yield, PCI-aligned content, we help you master your curriculum in half the time.
              </p>
            </div>
          </div>
          <div className="lg:col-span-2 space-y-6">
            <div className="glass p-5 rounded-xl border border-transparent hover:border-[#405cff]/20 transition-colors">
              <div className="flex items-center gap-4">
                <span className="material-symbols-rounded text-2xl text-[#405cff]">hub</span>
                <h4 className="font-bold">Centralized Hub</h4>
              </div>
            </div>
            <div className="glass p-5 rounded-xl border border-transparent hover:border-[#10B981]/20 transition-colors">
              <div className="flex items-center gap-4">
                <span className="material-symbols-rounded text-2xl text-[#10B981]">verified_user</span>
                <h4 className="font-bold">Expert Verified</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curation Process Section */}
      <section className="py-16 md:py-24">
        <div className="text-center mb-12">
          <span className="text-[#8B5CF6] font-black text-[10px] tracking-[0.3em] uppercase mb-4 block">The Pipeline</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter" style={{ color: 'var(--text-main)' }}>Our Curation Process.</h2>
        </div>
        
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-8 -translate-x-1/2 top-0 w-0.5 h-full bg-gradient-to-b from-[#8B5CF6]/0 via-[#8B5CF6]/30 to-[#8B5CF6]/0 -z-10"></div>
          {[
            { title: 'Source Collection', desc: 'We aggregate materials from university toppers and leading professors.', icon: 'cloud_sync' },
            { title: 'Clinical Audit', desc: 'Our review board checks every fact for accuracy against current PCI standards.', icon: 'biotech' },
            { title: 'Digital Formatting', desc: 'Materials are optimized for mobile reading and low-ink printing.', icon: 'picture_as_pdf' }
          ].map((item, i, arr) => (
            <div key={i} className="flex items-start gap-6 md:gap-8 mb-12 last:mb-0">
              <div className="flex-shrink-0 w-16 h-16 rounded-full glass border flex items-center justify-center shadow-lg" style={{ borderColor: 'var(--glass-border)' }}>
                <span className="material-symbols-rounded text-3xl text-[#8B5CF6]">{item.icon}</span>
              </div>
              <div className="pt-2">
                <h3 className="text-xl font-black mb-2" style={{ color: 'var(--text-main)' }}>{item.title}</h3>
                <p className="opacity-60 font-medium leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:pb-24">
        <div className="glass p-8 md:p-16 rounded-3xl border text-center relative overflow-hidden shadow-2xl bg-gradient-to-br from-[#405cff]/10 to-transparent">
          <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight tracking-tighter" style={{ color: 'var(--text-main)' }}>
            Your Academic <br/> Competitive <span className="text-[#405cff]">Advantage</span>.
          </h2>
          <p className="opacity-60 text-base md:text-lg font-medium mb-10 max-w-xl mx-auto" style={{ color: 'var(--text-main)' }}>
            Stop searching, start learning. Explore the ecosystem that thousands of students trust.
          </p>
          <Link 
            to="/b-pharm"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-[#405cff] text-white rounded-xl font-black text-base hover:shadow-[0_20px_40px_rgba(64,92,255,0.4)] hover:-translate-y-1 transition-all active:scale-95"
          >
            <span>Explore Resources</span>
            <span className="material-symbols-rounded group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
