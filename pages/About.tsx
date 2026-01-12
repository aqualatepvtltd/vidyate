
import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-10">
      <SEO 
        title="About Us" 
        description="Learn more about Vidyate's mission to bridge the gap between complex pharmaceutical sciences and digital accessibility."
      />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-0 w-64 h-64  rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64  rounded-full blur-[120px] animate-pulse delay-700"></div>
        </div>
        
        <span className="text-[#405cff] font-black text-[10px] tracking-[0.4em] uppercase mb-6 block">The Vidyate Manifest</span>
        <h1 className="text-4xl md:text-7xl font-black mb-6 leading-[1.1] tracking-tighter" style={{ color: 'var(--text-main)' }}>
          Providing <br/>
          <span className="text-[#405cff]">Academic</span> Clarity.
        </h1>
        <p className="opacity-60 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-medium mb-12" style={{ color: 'var(--text-main)' }}>
          Vidyate is a high-performance academic ecosystem designed to accelerate the learning curve for Pharmacy students globally.
        </p>
      </section>

      {/* Story & Philosophy Section */}
      <section className="py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div 
          className="glass p-8 md:p-12 rounded-2xl md:rounded-3xl border relative overflow-hidden transition-all duration-500 hover:shadow-2xl"
          style={{ borderColor: 'var(--glass-border)' }}
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-[#10B981]/10 blur-[80px]"></div>
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-black mb-6 tracking-tighter" style={{ color: 'var(--text-main)' }}>Our Philosophy</h2>
            <div className="space-y-5 opacity-70 leading-relaxed font-medium text-sm md:text-base" style={{ color: 'var(--text-main)' }}>
              <p>
                Pharmacy education is traditionally burdened by massive volumes of complex data. Most students spend 40% of their time just <i>finding</i> the right resources rather than <i>learning</i> from them.
              </p>
              <p>
                At Vidyate, we believe in <b>Resource Minimalism</b>. By filtering out the noise and providing only high-yield, verified content, we help students master their curriculum in half the time.
              </p>
              <p>
                Our ecosystem is built on the pillars of PCI standards, ensuring that every note, past paper, and AI response is academically relevant and practically useful.
              </p>
            </div>
          </div>
        </div>
        
        <div className="space-y-8 px-4">
          <div className="group">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#405cff]/10 flex items-center justify-center text-[#405cff] group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <span className="material-symbols-rounded text-2xl">hub</span>
              </div>
              <h3 className="text-xl font-black tracking-tight" style={{ color: 'var(--text-main)' }}>The Centralized Hub</h3>
            </div>
            <p className="opacity-50 text-base leading-relaxed font-medium" style={{ color: 'var(--text-main)' }}>
              We eliminate the need for hundreds of Telegram groups and outdated websites by providing a single, lightning-fast source of truth for your degree.
            </p>
          </div>
          
          <div className="group">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#10B981]/10 flex items-center justify-center text-[#10B981] group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500">
                <span className="material-symbols-rounded text-2xl">verified_user</span>
              </div>
              <h3 className="text-xl font-black tracking-tight" style={{ color: 'var(--text-main)' }}>Expert Verification</h3>
            </div>
            <p className="opacity-50 text-base leading-relaxed font-medium" style={{ color: 'var(--text-main)' }}>
              Unlike open-source platforms, every document on Vidyate goes through a 3-step verification process by academic toppers and subject specialists.
            </p>
          </div>
        </div>
      </section>

      {/* Curation Process Section */}
      <section className="py-20">
        <div className="text-center mb-12">
          <span className="text-[#8B5CF6] font-black text-[10px] tracking-[0.3em] uppercase mb-4 block">The Pipeline</span>
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter" style={{ color: 'var(--text-main)' }}>How We Curate.</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              step: '01',
              title: 'Source Collection',
              desc: 'We aggregate materials from university toppers and leading professors across colleges.',
              icon: 'cloud_sync',
              color: '#405cff'
            },
            {
              step: '02',
              title: 'Clinical Audit',
              desc: 'Our review board checks every pharmacological and chemical fact for accuracy against current PCI standards.',
              icon: 'biotech',
              color: '#10B981'
            },
            {
              step: '03',
              title: 'Digital Formatting',
              desc: 'Materials are OCR-processed and optimized for high-speed mobile reading and low-ink printing.',
              icon: 'picture_as_pdf',
              color: '#FF6B6B'
            }
          ].map((item, i) => (
            <div key={i} className="glass p-6 md:p-8 rounded-2xl md:rounded-3xl border relative group overflow-hidden" style={{ borderColor: 'var(--glass-border)' }}>
              <div className="absolute top-0 right-0 p-6 text-3xl font-black opacity-5 transition-opacity group-hover:opacity-10" style={{ color: item.color }}>{item.step}</div>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: `${item.color}10`, color: item.color }}>
                <span className="material-symbols-rounded text-xl">{item.icon}</span>
              </div>
              <h4 className="text-lg font-black mb-2" style={{ color: 'var(--text-main)' }}>{item.title}</h4>
              <p className="text-xs md:text-sm opacity-50 font-medium leading-relaxed" style={{ color: 'var(--text-main)' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Future Roadmap Section */}
      <section className="py-20">
        <div className="glass p-8 md:p-12 rounded-2xl md:rounded-3xl border shadow-xl relative overflow-hidden" style={{ borderColor: 'var(--glass-border)' }}>
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-2xl md:text-4xl font-black mb-4 tracking-tighter" style={{ color: 'var(--text-main)' }}>The Vidyate <span className="opacity-30">Roadmap</span></h2>
              <p className="opacity-50 text-base mb-8 font-medium" style={{ color: 'var(--text-main)' }}>
                Our vision for the next 24 months of pharmaceutical education.
              </p>
              <div className="space-y-5">
                {[
                  { title: 'Interactive Quizzes', desc: 'Real-time self-assessment for every B.Pharm subject.', date: 'Q4 2026' },
                  { title: 'Live Mentorship', desc: 'Direct access to industry professionals via workshops.', date: 'Q1 2027' },
                  { title: 'GPAT Mock Hub', desc: 'A dedicated high-pressure testing environment.', date: 'Q2 2027' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="text-[9px] font-black text-[#405cff] bg-[#405cff]/10 px-2 py-0.5 rounded border border-[#405cff]/20 flex-shrink-0">{item.date}</div>
                    <div>
                      <h4 className="font-black text-sm mb-1" style={{ color: 'var(--text-main)' }}>{item.title}</h4>
                      <p className="text-xs opacity-40 font-medium" style={{ color: 'var(--text-main)' }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 relative flex justify-center">
               <div className="w-48 h-48 md:w-64 md:h-64 glass rounded-full flex items-center justify-center border-dashed border-2 opacity-30 border-[#405cff]">
                  <span className="material-symbols-rounded text-6xl md:text-8xl text-[#405cff] animate-pulse">rocket_launch</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div 
          className="glass p-8 md:p-16 rounded-2xl md:rounded-3xl border text-center relative overflow-hidden shadow-2xl bg-gradient-to-br from-[#405cff]/10 to-transparent"
          style={{ borderColor: 'var(--glass-border)' }}
        >
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight tracking-tighter" style={{ color: 'var(--text-main)' }}>
              Join the <span className="text-[#405cff]">Elite</span> Pharmacy Community.
            </h2>
            <p className="opacity-60 text-base md:text-lg font-medium mb-10 max-w-xl mx-auto" style={{ color: 'var(--text-main)' }}>
              Vidyate is more than a tool—it's your academic competitive advantage. Start exploring the ecosystem today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/contact"
                className="px-8 py-4 rounded-xl bg-[#405cff] text-white font-black text-base hover:shadow-[0_20px_40px_rgba(64,92,255,0.4)] hover:-translate-y-1 transition-all active:scale-95"
              >
                Enter Workspace
              </Link>
              <Link 
                to="/books"
                className="px-8 py-4 rounded-xl glass border font-black text-base hover:bg-white/5 transition-all active:scale-95 flex items-center gap-2"
                style={{ borderColor: 'var(--glass-border)', color: 'var(--text-main)' }}
              >
                Visit Store
                <span className="material-symbols-rounded">shopping_cart</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
