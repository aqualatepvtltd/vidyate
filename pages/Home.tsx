
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import BentoCard from '../components/BentoCard';
import SEO from '../components/SEO';
import { COURSES } from '../data/courses';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email: email,
          access_key: "bfe80316-38d8-4190-a6a0-1ced2791c960",
          subject: "New Newsletter Subscription - Vidyate",
          from_name: "Vidyate Ecosystem",
          message: `New student subscription request from: ${email}`
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubscribed(true);
        setEmail('');
      } else {
        setSubmitError("Subscription failed. Please try again later.");
      }
    } catch (error) {
      setSubmitError("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6">
      <SEO 
        title="Home" 
        description="The ultimate digital ecosystem for Pharmacy students. Access verified notes, clinical resources, and career guidance."
      />
      {/* Hero Section - Full Height Fold */}
      <section className="min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center text-center relative overflow-visible animate-subtle-fade py-12 md:py-0">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border text-[10px] md:text-xs font-bold mb-6 md:mb-8 uppercase tracking-[0.1em]" style={{ borderColor: 'var(--glass-border)', color: 'var(--text-main)' }}>
          <span className="flex h-1.5 w-1.5 rounded-full bg-[#10B981] animate-pulse"></span>
          <span className="opacity-80">New: 2026 Question Bank is Live</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter mb-4 md:mb-6 leading-[1.1] md:leading-[1.05]" style={{ color: 'var(--text-main)' }}>
          Elevate Your <br/>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#405cff] via-[#8B5CF6] to-[#10B981] drop-shadow-sm">Pharmacy</span> Journey.
        </h1>
        <p className="opacity-60 text-sm md:text-lg max-w-xl mb-8 md:mb-10 font-medium leading-relaxed px-2" style={{ color: 'var(--text-main)' }}>
          The ultimate digital ecosystem for pharmaceutical students. Access verified notes, question banks and career guidance.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 w-full sm:w-auto px-4 sm:px-0">
          <button 
            onClick={() => document.getElementById('tracks')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto px-6 md:px-8 py-3.5 md:py-4 rounded-xl bg-[#405cff] text-white font-black text-sm md:text-base hover:shadow-[0_15px_30px_rgba(64,92,255,0.3)] hover:-translate-y-1 transition-all active:scale-95"
          >
            Explore Courses
          </button>
          <Link 
            to="/books"
            className="w-full sm:w-auto px-6 md:px-8 py-3.5 md:py-4 rounded-xl glass border border-[#405cff]/20 font-black text-sm md:text-base transition-all hover:bg-[#405cff]/5 active:scale-95"
            style={{ color: 'var(--text-main)' }}
          >
            Visit Store
          </Link>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-20 hidden md:block">
          <span className="material-symbols-rounded text-2xl">keyboard_double_arrow_down</span>
        </div>
      </section>

      {/* Course Selection */}
      <section id="tracks" className="py-16 md:py-20">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-10 md:mb-12 gap-4 text-center md:text-left">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#405cff]/10 text-[#405cff] text-[10px] font-black uppercase tracking-[0.2em] mb-3">
              <span className="material-symbols-rounded text-sm">stairs</span>
              Learning Pathways
            </div>
            <h2 className="text-2xl md:text-4xl font-black" style={{ color: 'var(--text-main)' }}>Choose Your Path</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
          {Object.values(COURSES).map((course) => (
            <BentoCard
              key={course.id}
              title={course.name}
              description={course.description}
              icon={course.id === 'b-pharm' ? 'school' : 'medical_services'}
              color={course.id === 'b-pharm' ? '#405cff' : '#8B5CF6'}
              onClick={() => navigate(`/${course.id}`)}
              footer={
                <div className="flex items-center gap-2 font-black text-[10px] md:text-xs group-hover:gap-4 transition-all uppercase tracking-[0.2em]" style={{ color: course.id === 'b-pharm' ? '#405cff' : '#8B5CF6' }}>
                  Enter Dashboard <span className="material-symbols-rounded text-sm">arrow_forward</span>
                </div>
              }
            />
          ))}
        </div>
      </section>

      {/* About Section Preview */}
      <section className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.03)_1px,transparent_0)] bg-[length:40px_40px] -z-10 opacity-50"></div>
        
        <div className="flex flex-col xl:flex-row gap-10 md:gap-16 items-start">
          <div className="w-full xl:w-2/5 xl:sticky xl:top-40">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#405cff]/10 border border-[#405cff]/20 text-[#405cff] text-[10px] font-black uppercase tracking-[0.2em] mb-4 md:mb-6">
              <span className="material-symbols-rounded text-sm">verified</span>
              The Vidyate Standard
            </div>
            <h2 className="text-3xl md:text-5xl font-black mb-4 md:mb-8 leading-[1.1] tracking-tight text-center md:text-left" style={{ color: 'var(--text-main)' }}>
              Academic <span className="opacity-30">Excellence,</span> <br className="hidden md:block"/>
              Digitally <span className="text-[#405cff]">Perfected.</span>
            </h2>
            <p className="opacity-50 text-sm md:text-lg leading-relaxed mb-6 md:mb-10 max-w-lg font-medium text-center md:text-left" style={{ color: 'var(--text-main)' }}>
              Vidyate is more than just a website; it's a complete learning hub. We combine trusted academic content with modern technology.
            </p>
            
            <div className="flex flex-col gap-3 md:gap-4 mb-8 md:mb-10">
               <div className="flex items-start gap-3 p-4 glass rounded-xl border-white/5 hover:border-[#405cff]/20 transition-colors" style={{ borderColor: 'var(--glass-border)' }}>
                  <div className="w-8 h-8 rounded-lg bg-[#405cff]/10 flex items-center justify-center text-[#10B981] flex-shrink-0">
                    <span className="material-symbols-rounded text-xl">shield</span>
                  </div>
                  <div>
                    <h4 className="font-bold opacity-90 text-sm" style={{ color: 'var(--text-main)' }}>Curated & Verified</h4>
                    <p className="text-xs opacity-40" style={{ color: 'var(--text-main)' }}>100% material reviewed by subject matter experts.</p>
                  </div>
               </div>
               <div className="flex items-start gap-3 p-4 glass rounded-xl border-white/5 hover:border-[#405cff]/20 transition-colors" style={{ borderColor: 'var(--glass-border)' }}>
                  <div className="w-8 h-8 rounded-lg bg-[#405cff]/10 flex items-center justify-center text-[#8B5CF6] flex-shrink-0">
                    <span className="material-symbols-rounded text-xl">model_training</span>
                  </div>
                  <div>
                    <h4 className="font-bold opacity-90 text-sm" style={{ color: 'var(--text-main)' }}>Career Guidance</h4>
                    <p className="text-xs opacity-40" style={{ color: 'var(--text-main)' }}>Career counseling tailored to the pharmacy sector.</p>
                  </div>
               </div>
            </div>

            <div className="flex justify-center md:justify-start">
              <Link 
                to="/about"
                className="group relative inline-flex items-center gap-3 px-6 md:px-8 py-3.5 md:py-4 bg-[#405cff] text-white rounded-xl font-black text-sm md:text-base overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1"
              >
                <span className="relative z-10">Discover Our Vision</span>
                <span className="material-symbols-rounded relative z-10 group-hover:translate-x-2 transition-transform">arrow_forward</span>
              </Link>
            </div>
          </div>

          <div className="w-full xl:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#405cff]/5 blur-[80px] md:blur-[100px] rounded-full -z-10"></div>
            
            <div className="glass p-6 md:p-8 rounded-2xl border transition-all duration-500 group relative overflow-hidden hover:-translate-y-1.5" style={{ borderColor: 'var(--glass-border)' }}>
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-lg bg-[#10B981]/10 flex items-center justify-center text-[#10B981] mb-5 md:mb-6">
                  <span className="material-symbols-rounded text-xl md:text-2xl">verified</span>
                </div>
                <h3 className="text-xs font-bold mb-1 md:mb-2 opacity-90 uppercase tracking-widest text-[9px] md:text-[10px]" style={{ color: 'var(--text-main)' }}>Verified Resources</h3>
                <p className="opacity-40 leading-relaxed font-medium text-xs" style={{ color: 'var(--text-main)' }}>Every note is audited by academic high-achievers.</p>
              </div>
            </div>

            <div className="glass p-6 md:p-8 rounded-2xl border transition-all duration-500 group relative overflow-hidden hover:-translate-y-1.5 sm:mt-8" style={{ borderColor: 'var(--glass-border)' }}>
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-lg bg-[#405cff]/10 flex items-center justify-center text-[#405cff] mb-5 md:mb-6">
                  <span className="material-symbols-rounded text-xl md:text-2xl">local_library</span>
                </div>
                <h3 className="text-xs font-bold mb-1 md:mb-2 opacity-90 uppercase tracking-widest text-[9px] md:text-[10px]" style={{ color: 'var(--text-main)' }}>Core Subjects</h3>
                <p className="opacity-40 leading-relaxed font-medium text-xs" style={{ color: 'var(--text-main)' }}>Deep-coverage learning materials for all modules.</p>
              </div>
            </div>

            <div className="glass p-6 md:p-8 rounded-2xl border transition-all duration-500 group relative overflow-hidden hover:-translate-y-1.5" style={{ borderColor: 'var(--glass-border)' }}>
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-lg bg-[#8B5CF6]/10 flex items-center justify-center text-[#8B5CF6] mb-5 md:mb-6">
                  <span className="material-symbols-rounded text-xl md:text-2xl">psychology</span>
                </div>
                <h3 className="text-xs font-bold mb-1 md:mb-2 opacity-90 uppercase tracking-widest text-[9px] md:text-[10px]" style={{ color: 'var(--text-main)' }}>Career Specialist</h3>
                <p className="opacity-40 leading-relaxed font-medium text-xs" style={{ color: 'var(--text-main)' }}>Career guidance specialized in Pharmacy.</p>
              </div>
            </div>

            <div className="glass p-6 md:p-8 rounded-2xl border transition-all duration-500 group relative overflow-hidden hover:-translate-y-1.5 sm:mt-8" style={{ borderColor: 'var(--glass-border)' }}>
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-lg bg-[#FF6B6B]/10 flex items-center justify-center text-[#FF6B6B] mb-5 md:mb-6">
                  <span className="material-symbols-rounded text-xl md:text-2xl">sync_saved_locally</span>
                </div>
                <h3 className="text-xs font-bold mb-1 md:mb-2 opacity-90 uppercase tracking-widest text-[9px] md:text-[10px]" style={{ color: 'var(--text-main)' }}>Global Access</h3>
                <p className="opacity-40 leading-relaxed font-medium text-xs" style={{ color: 'var(--text-main)' }}>Completely free and optimized for low-bandwidth.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Vidyate? */}
      <section className="py-16 md:py-20">
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#10B981]/10 text-[#10B981] text-[10px] font-black uppercase tracking-[0.2em] mb-3">
            <span className="material-symbols-rounded text-sm">verified</span>
            Quality Assurance
          </div>
          <h2 className="text-3xl md:text-5xl font-black" style={{ color: 'var(--text-main)' }}>Why Vidyate?</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
          <div className="p-6 md:p-8 glass rounded-2xl border transition-all text-center sm:text-left relative overflow-hidden group" style={{ borderColor: 'var(--glass-border)' }}>
            <div className="text-[9px] font-black uppercase tracking-[0.2em] opacity-30 mb-4 block" style={{ color: 'var(--text-main)' }}>Academic Precision</div>
            <span className="material-symbols-rounded text-3xl md:text-4xl text-[#10B981] mb-5 md:mb-6">check_circle</span>
            <h3 className="text-lg md:text-xl font-black mb-2 md:mb-3" style={{ color: 'var(--text-main)' }}>Content Integrity</h3>
            <p className="opacity-40 text-[11px] md:text-xs leading-relaxed font-medium" style={{ color: 'var(--text-main)' }}>Resources are formatted to university standards, ensuring you study what matters most.</p>
          </div>
          <div className="p-6 md:p-8 glass rounded-2xl border transition-all text-center sm:text-left relative overflow-hidden group" style={{ borderColor: 'var(--glass-border)' }}>
            <div className="text-[9px] font-black uppercase tracking-[0.2em] opacity-30 mb-4 block" style={{ color: 'var(--text-main)' }}>Academic Precision</div>
            <span className="material-symbols-rounded text-3xl md:text-4xl text-[#FF6B6B] mb-5 md:mb-6">download_done</span>
            <h3 className="text-lg md:text-xl font-black mb-2 md:mb-3" style={{ color: 'var(--text-main)' }}>One-Tap Archive</h3>
            <p className="opacity-40 text-[11px] md:text-xs leading-relaxed font-medium" style={{ color: 'var(--text-main)' }}>Download complete subjects in seconds. High quality with low file sizes.</p>
          </div>
          <div className="p-6 md:p-8 glass rounded-2xl border transition-all text-center sm:text-left sm:col-span-2 md:col-span-1 relative overflow-hidden group" style={{ borderColor: 'var(--glass-border)' }}>
            <div className="text-[9px] font-black uppercase tracking-[0.2em] opacity-30 mb-4 block" style={{ color: 'var(--text-main)' }}>Academic Precision</div>
            <span className="material-symbols-rounded text-3xl md:text-4xl text-[#8B5CF6] mb-5 md:mb-6">hub</span>
            <h3 className="text-lg md:text-xl font-black mb-2 md:mb-3" style={{ color: 'var(--text-main)' }}>Integrated Ecosystem</h3>
            <p className="opacity-40 text-[11px] md:text-xs leading-relaxed font-medium" style={{ color: 'var(--text-main)' }}>Connect notes with past papers and advice seamlessly for a circular experience.</p>
          </div>
        </div>
      </section>

      {/* Book Store Preview Section */}
      <section className="py-16 md:py-24 animate-subtle-fade">
        <div className="glass p-8 md:p-16 rounded-3xl border shadow-2xl relative overflow-hidden text-center" style={{ borderColor: 'var(--glass-border)' }}>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-[#405cff]/10 blur-[100px] rounded-full -z-10"></div>
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#405cff]/10 text-[#405cff] text-[10px] font-black uppercase tracking-[0.2em] mb-6">
            <span className="material-symbols-rounded text-sm">shopping_basket</span>
            Academic Marketplace
          </div>
          
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter" style={{ color: 'var(--text-main)' }}>
            Premium <span className="text-[#405cff]">Textbooks</span> for Future Experts.
          </h2>
          
          <p className="opacity-50 text-sm md:text-lg max-w-2xl mx-auto mb-10 font-medium leading-relaxed px-4" style={{ color: 'var(--text-main)' }}>
            Stop searching and start studying. From K.D. Tripathi to Remington, access the world's most trusted pharmacy literature at exclusive student rates.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Link 
              to="/books"
              className="group relative flex items-center gap-3 px-10 py-5 bg-[#405cff] text-white rounded-2xl font-black text-sm md:text-base hover:shadow-[0_20px_40px_rgba(64,92,255,0.4)] hover:-translate-y-1 transition-all active:scale-95"
            >
              <span className="material-symbols-rounded">menu_book</span>
              View Book Collection
              <span className="material-symbols-rounded group-hover:translate-x-1 transition-transform">chevron_right</span>
            </Link>
          </div>
          
          <div className="mt-12 flex justify-center items-center gap-8 text-slate-400 font-medium">
             <div className="flex items-center gap-2">
               <span className="material-symbols-rounded text-2xl">verified</span>
               <span className="text-[10px] font-black uppercase tracking-widest">Official Publishers</span>
             </div>
             <div className="flex items-center gap-2">
               <span className="material-symbols-rounded text-2xl">local_shipping</span>
               <span className="text-[10px] font-black uppercase tracking-widest">Fast Delivery</span>
             </div>
          </div>
        </div>
      </section>

      {/* Contact Us Spotlight Section */}
      <section className="py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <div className="glass p-8 md:p-12 rounded-3xl border flex flex-col justify-center relative overflow-hidden" style={{ borderColor: 'var(--glass-border)' }}>
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#8B5CF6]/5 blur-[80px] rounded-full"></div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#8B5CF6]/10 text-[#8B5CF6] text-[10px] font-black uppercase tracking-[0.2em] mb-6">
              <span className="material-symbols-rounded text-sm">support_agent</span>
              Human Support
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-6 tracking-tight leading-[1.1]" style={{ color: 'var(--text-main)' }}>
              Need Help <span className="text-[#8B5CF6]">Navigating</span> Your Pharmacy Career?
            </h2>
            <p className="opacity-50 text-sm md:text-base font-medium leading-relaxed mb-8" style={{ color: 'var(--text-main)' }}>
              Our expert counselors and support team are available to help you with resource access, course selection, and exam preparation strategies. No robots here—just real pharmacists who care.
            </p>
          </div>

          <div className="glass p-8 md:p-12 rounded-3xl border flex flex-col items-center justify-center text-center relative overflow-hidden bg-gradient-to-br from-[#10B981]/5 via-transparent to-transparent" style={{ borderColor: 'var(--glass-border)' }}>
            <div className="w-20 h-20 rounded-2xl bg-[#10B981]/10 flex items-center justify-center text-[#10B981] mb-8 shadow-inner">
               <span className="material-symbols-rounded text-4xl">alternate_email</span>
            </div>
            <h3 className="text-2xl font-black mb-4" style={{ color: 'var(--text-main)' }}>Contact Our Team</h3>
            <p className="opacity-40 text-sm font-medium mb-10 max-w-xs" style={{ color: 'var(--text-main)' }}>
              Get a response within 2 hours from our specialized academic support desk.
            </p>
            <Link 
              to="/contact"
              className="group w-full py-5 bg-[#10B981] text-white rounded-2xl font-black text-sm md:text-base hover:shadow-[0_20px_40px_rgba(16,185,129,0.3)] hover:-translate-y-1 transition-all active:scale-95 flex items-center justify-center gap-3"
            >
              Get In Touch
              <span className="material-symbols-rounded group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Community Feedback Section */}
      <section className="py-16 md:py-24">
        <div className="glass p-8 md:p-14 rounded-3xl border relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10" style={{ borderColor: 'var(--glass-border)' }}>
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-[#8B5CF6]/5 blur-[100px] rounded-full pointer-events-none"></div>
          
          <div className="max-w-xl text-center md:text-left relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8B5CF6]/10 text-[#8B5CF6] text-[10px] font-black uppercase tracking-[0.2em] mb-6">
              <span className="material-symbols-rounded text-sm">campaign</span>
              Community Voice
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-6 tracking-tighter leading-tight" style={{ color: 'var(--text-main)' }}>
              Your Feedback <br className="hidden md:block"/>
              Drives Our <span className="text-[#8B5CF6]">Innovation.</span>
            </h2>
            <p className="opacity-50 text-sm md:text-base font-medium leading-relaxed max-w-md mx-auto md:mx-0" style={{ color: 'var(--text-main)' }}>
              Help us build the ultimate learning ecosystem. Whether it's a resource request or a feature idea, we listen to every suggestion from our community.
            </p>
          </div>

          <div className="flex-shrink-0 relative z-10 w-full md:w-auto">
            <Link 
              to="/feedback"
              className="group flex items-center justify-center gap-4 px-10 py-5 bg-white/5 border border-[#8B5CF6]/20 text-[#8B5CF6] rounded-2xl font-black text-sm md:text-base hover:bg-[#8B5CF6] hover:text-white transition-all duration-300 hover:shadow-[0_20px_40px_rgba(139,92,246,0.3)] hover:-translate-y-1 active:scale-95"
            >
              <span className="material-symbols-rounded">rate_review</span>
              Share Your Thoughts
              <span className="material-symbols-rounded group-hover:translate-x-1 transition-transform">chevron_right</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 md:py-20">
        <div className="relative glass rounded-3xl p-6 md:p-12 border overflow-hidden text-center md:text-left shadow-xl" style={{ borderColor: 'var(--glass-border)' }}>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#405cff]/10 via-transparent to-transparent opacity-60"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12">
            <div className="max-w-lg">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#405cff]/20 text-[#405cff] text-[9px] font-black uppercase tracking-[0.2em] mb-4 md:mb-6">
                <span className="material-symbols-rounded text-sm">mail</span>
                Academic Newsletter
              </div>
              <h2 className="text-2xl md:text-4xl font-black mb-4 md:mb-6 leading-[1.1]" style={{ color: 'var(--text-main)' }}>Join the elite circle.</h2>
              <p className="opacity-50 text-sm md:text-lg font-medium" style={{ color: 'var(--text-main)' }}>
                Get the latest study strategies and GPAT mock schedules every Monday.
              </p>
            </div>

            <div className="w-full max-w-sm">
              {subscribed ? (
                <div className="p-8 md:p-10 glass border-[#10B981]/40 rounded-2xl text-center animate-fade-in bg-[#10B981]/5">
                  <span className="material-symbols-rounded text-4xl md:text-5xl text-[#10B981] mb-4 md:mb-5">verified</span>
                  <h3 className="text-lg md:text-xl font-black mb-2" style={{ color: 'var(--text-main)' }}>Welcome Aboard!</h3>
                  <p className="opacity-50 text-xs font-medium" style={{ color: 'var(--text-main)' }}>The first edition is on its way.</p>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-3 md:space-y-4">
                  {submitError && (
                    <div className="p-2 bg-red-500/10 border border-red-500/20 text-red-500 rounded-lg text-[10px] font-bold">
                      {submitError}
                    </div>
                  )}
                  <div className="relative group flex flex-col gap-3">
                    <input 
                      type="email" 
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="example@gmail.com"
                      className="w-full glass border rounded-xl py-4 md:py-5 px-5 md:px-6 placeholder-slate-400 focus:outline-none focus:border-[#405cff]/50 focus:ring-4 focus:ring-[#405cff]/5 transition-all text-sm md:text-base font-medium"
                      style={{ backgroundColor: 'var(--glass-bg)', borderColor: 'var(--glass-border)', color: 'var(--text-main)' }}
                    />
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-6 md:px-8 py-3.5 md:py-4 rounded-xl md:absolute md:right-2 md:top-2 md:w-auto md:py-3 bg-[#405cff] text-white font-black text-xs md:text-sm transition-all hover:shadow-lg hover:-translate-y-1 active:scale-95 disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                      ) : (
                        <>
                          Join Now
                          <span className="material-symbols-rounded text-sm">rocket_launch</span>
                        </>
                      )}
                    </button>
                  </div>
                  <p className="text-[9px] opacity-30 text-center md:text-left font-black uppercase tracking-[0.2em]" style={{ color: 'var(--text-main)' }}>
                    Strictly Education. Zero Spam.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
