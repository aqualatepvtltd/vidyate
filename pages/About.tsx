
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
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#405cff] rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#8B5CF6] rounded-full blur-[120px] animate-pulse delay-700"></div>
        </div>
        
        <span className="text-[#405cff] font-black text-[10px] tracking-[0.4em] uppercase mb-6 block">The Vidyate Manifest</span>
        <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[1] tracking-tighter" style={{ color: 'var(--text-main)' }}>
          Engineering <br/>
          <span className="text-[#405cff]">Academic</span> Clarity.
        </h1>
        <p className="opacity-60 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed font-medium mb-12" style={{ color: 'var(--text-main)' }}>
          Vidyate is a high-performance academic ecosystem designed to accelerate the learning curve for Pharmacy students globally.
        </p>
        
        <div className="flex justify-center items-center gap-12 opacity-30">
          <div className="flex flex-col items-center">
            <span className="text-3xl font-black">2024</span>
            <span className="text-[10px] font-bold uppercase tracking-widest">Founded</span>
          </div>
          <div className="w-px h-10 bg-current"></div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-black">10K+</span>
            <span className="text-[10px] font-bold uppercase tracking-widest">Nodes</span>
          </div>
          <div className="w-px h-10 bg-current"></div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-black">PCI</span>
            <span className="text-[10px] font-bold uppercase tracking-widest">Standard</span>
          </div>
        </div>
      </section>

      {/* Story & Philosophy Section */}
      <section className="py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div 
          className="glass p-10 md:p-14 rounded-3xl border relative overflow-hidden transition-all duration-500 hover:shadow-2xl"
          style={{ borderColor: 'var(--glass-border)' }}
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-[#10B981]/10 blur-[80px]"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-black mb-8 tracking-tighter" style={{ color: 'var(--text-main)' }}>Our Philosophy</h2>
            <div className="space-y-6 opacity-70 leading-relaxed font-medium text-base md:text-lg" style={{ color: 'var(--text-main)' }}>
              <p>
                Pharmacy education is traditionally burdened by massive volumes of complex data. Most students spend 40% of their time just <i>finding</i> the right resources rather than <i>learning</i> from them.
              </p>
              <p>
                At Vidyate, we believe in <b>Resource Minimalism</b>. By filtering out the noise and providing only high-yield, verified content, we help students master their curriculum in half the time.
              </p>
              <p>
                Our ecosystem is built on the pillars of AKTU/PCI standards, ensuring that every note, past paper, and AI response is academically relevant and practically useful.
              </p>
            </div>
          </div>
        </div>
        
        <div className="space-y-10 px-4">
          <div className="group">
            <div className="flex items-center gap-5 mb-5">
              <div className="w-14 h-14 rounded-2xl bg-[#405cff]/10 flex items-center justify-center text-[#405cff] group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <span className="material-symbols-rounded text-3xl">hub</span>
              </div>
              <h3 className="text-2xl font-black tracking-tight" style={{ color: 'var(--text-main)' }}>The Centralized Hub</h3>
            </div>
            <p className="opacity-50 text-lg leading-relaxed font-medium" style={{ color: 'var(--text-main)' }}>
              We eliminate the need for hundreds of Telegram groups and outdated websites by providing a single, lightning-fast source of truth for your degree.
            </p>
          </div>
          
          <div className="group">
            <div className="flex items-center gap-5 mb-5">
              <div className="w-14 h-14 rounded-2xl bg-[#10B981]/10 flex items-center justify-center text-[#10B981] group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500">
                <span className="material-symbols-rounded text-3xl">verified_user</span>
              </div>
              <h3 className="text-2xl font-black tracking-tight" style={{ color: 'var(--text-main)' }}>Expert Verification</h3>
            </div>
            <p className="opacity-50 text-lg leading-relaxed font-medium" style={{ color: 'var(--text-main)' }}>
              Unlike open-source platforms, every document on Vidyate goes through a 3-step verification process by academic toppers and subject specialists.
            </p>
          </div>
        </div>
      </section>

      {/* Curation Process Section */}
      <section className="py-20">
        <div className="text-center mb-16">
          <span className="text-[#8B5CF6] font-black text-[10px] tracking-[0.3em] uppercase mb-4 block">The Pipeline</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter" style={{ color: 'var(--text-main)' }}>How We Curate.</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              step: '01',
              title: 'Source Collection',
              desc: 'We aggregate materials from university toppers and leading professors across AKTU affiliated colleges.',
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
            <div key={i} className="glass p-8 rounded-3xl border relative group overflow-hidden" style={{ borderColor: 'var(--glass-border)' }}>
              <div className="absolute top-0 right-0 p-6 text-4xl font-black opacity-5 transition-opacity group-hover:opacity-10" style={{ color: item.color }}>{item.step}</div>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: `${item.color}10`, color: item.color }}>
                <span className="material-symbols-rounded text-2xl">{item.icon}</span>
              </div>
              <h4 className="text-xl font-black mb-3" style={{ color: 'var(--text-main)' }}>{item.title}</h4>
              <p className="text-sm opacity-50 font-medium leading-relaxed" style={{ color: 'var(--text-main)' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Technology & AI Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#405cff]/5 to-[#8B5CF6]/5 rounded-[4rem] -z-10"></div>
        <div className="max-w-4xl mx-auto text-center px-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-[#8B5CF6]/20 mb-8">
            <span className="material-symbols-rounded text-[#8B5CF6]">auto_awesome</span>
            <span className="text-[10px] font-black uppercase tracking-widest" style={{ color: 'var(--text-main)' }}>Powered by Gemini 2.5 Pro</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tighter" style={{ color: 'var(--text-main)' }}>
            The AI <span className="text-[#8B5CF6]">Counselor</span>.
          </h2>
          <p className="text-lg opacity-60 font-medium mb-12 leading-relaxed" style={{ color: 'var(--text-main)' }}>
            Vidyate isn't just about static files. We've integrated the world's most advanced reasoning model, specialized with a custom pharmaceutical context, to provide 24/7 career and academic guidance to every student.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            <div className="glass p-5 rounded-2xl border border-white/5 flex gap-4">
              <span className="material-symbols-rounded text-[#8B5CF6]">clinical_notes</span>
              <p className="text-sm font-bold opacity-80" style={{ color: 'var(--text-main)' }}>Subject-wise exam strategies and weightage analysis.</p>
            </div>
            <div className="glass p-5 rounded-2xl border border-white/5 flex gap-4">
              <span className="material-symbols-rounded text-[#8B5CF6]">work_history</span>
              <p className="text-sm font-bold opacity-80" style={{ color: 'var(--text-main)' }}>Direct mapping of academic modules to industry roles.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Roadmap Section */}
      <section className="py-20">
        <div className="glass p-10 md:p-16 rounded-[3rem] border shadow-2xl relative overflow-hidden" style={{ borderColor: 'var(--glass-border)' }}>
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-black mb-6 tracking-tighter" style={{ color: 'var(--text-main)' }}>The Vidyate <span className="opacity-30">Roadmap</span></h2>
              <p className="opacity-50 text-lg mb-8 font-medium" style={{ color: 'var(--text-main)' }}>
                Our vision for the next 24 months of pharmaceutical education.
              </p>
              <div className="space-y-6">
                {[
                  { title: 'Interactive Quizzes', desc: 'Real-time self-assessment for every B.Pharm subject.', date: 'Q4 2024' },
                  { title: 'Live Mentorship', desc: 'Direct access to industry professionals via workshops.', date: 'Q1 2025' },
                  { title: 'GPAT Mock Hub', desc: 'A dedicated high-pressure testing environment.', date: 'Q2 2025' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-5 items-start">
                    <div className="text-[10px] font-black text-[#405cff] bg-[#405cff]/10 px-2 py-1 rounded border border-[#405cff]/20 flex-shrink-0">{item.date}</div>
                    <div>
                      <h4 className="font-black text-sm mb-1" style={{ color: 'var(--text-main)' }}>{item.title}</h4>
                      <p className="text-xs opacity-40 font-medium" style={{ color: 'var(--text-main)' }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 relative">
               <div className="aspect-square glass rounded-full flex items-center justify-center p-12 border-dashed border-2 opacity-50 border-[#405cff]">
                  <span className="material-symbols-rounded text-[10rem] text-[#405cff] animate-pulse">rocket_launch</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div 
          className="glass p-10 md:p-20 rounded-[3.5rem] border text-center relative overflow-hidden shadow-2xl bg-gradient-to-br from-[#405cff]/10 to-transparent"
          style={{ borderColor: 'var(--glass-border)' }}
        >
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tighter" style={{ color: 'var(--text-main)' }}>
              Join the <span className="text-[#405cff]">Elite</span> Pharmacy Community.
            </h2>
            <p className="opacity-60 text-lg md:text-xl font-medium mb-12 max-w-2xl mx-auto" style={{ color: 'var(--text-main)' }}>
              Vidyate is more than a tool—it's your academic competitive advantage. Start exploring the ecosystem today.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link 
                to="/"
                className="px-10 py-5 rounded-2xl bg-[#405cff] text-white font-black text-lg hover:shadow-[0_20px_40px_rgba(64,92,255,0.4)] hover:-translate-y-1 transition-all active:scale-95"
              >
                Enter Workspace
              </Link>
              <Link 
                to="/books"
                className="px-10 py-5 rounded-2xl glass border-2 font-black text-lg hover:bg-white/5 transition-all active:scale-95 flex items-center gap-3"
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
