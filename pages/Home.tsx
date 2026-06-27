
import React, { useState, useEffect } from 'react';
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

  const scrollerImages = [
    '/google.png',
    '/bharat.png',
    '/dpiit.jpeg',
    '/doaj.svg',
    '/zenedo.png',
    '/google.png',
    '/bharat.png',
    '/dpiit.jpeg',
    '/doaj.svg',
    '/zenedo.png',
  ];

  // Duplicate images for a seamless loop
  const extendedScrollerImages = [...scrollerImages, ...scrollerImages];


  const [activeWhyVidyateTab, setActiveWhyVidyateTab] = useState(0);

  const whyVidyateTabs = [
    {
      title: 'Content Integrity',
      icon: 'check_circle',
      color: '#10B981',
      content: 'Every piece of material, from notes to question banks, is reviewed and verified by academic toppers and subject matter experts. We ensure you study what matters most, aligned with university standards.'
    },
    {
      title: 'One-Tap Archive',
      icon: 'download_done',
      color: '#FF6B6B',
      content: 'No more hunting through countless groups. Download complete subjects, including notes and past papers, in seconds. Our resources are optimized for high quality with low file sizes for easy access.'
    },
    {
      title: 'Integrated Ecosystem',
      icon: 'hub',
      color: '#8B5CF6',
      content: 'Vidyate is more than just a resource hub. We connect notes with past papers and career advice seamlessly, creating a circular learning experience that prepares you for both exams and your future career.'
    }
  ];

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

  const ScrollerStyles = () => (
    <style>
      {`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}
    </style>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6">
      <SEO 
        title="Vidyate - Digital Ecosystem for Pharmacy Students" 
        description="Vidyate is India's premier academic hub for B.Pharm and D.Pharm students. Access verified notes, buy textbooks, get career guidance, and prepare for GPAT/NIPER exams."
        keywords="Pharmacy Education, B.Pharm Notes, D.Pharm Resources, GPAT Preparation, Pharmacy Books, Medical Education, Vidyate, Pharmacy Career, Study Material"
      />
      <ScrollerStyles />
      {/* Hero Section - Full Height Fold Yes*/}
      <section className="min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center text-center relative overflow-visible animate-subtle-fade pt-32 pb-12 md:py-0">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border text-[10px] md:text-xs font-bold mb-6 md:mb-8 uppercase tracking-[0.1em]" style={{ borderColor: 'var(--glass-border)', color: 'var(--text-main)' }}>
          <span className="flex h-1.5 w-1.5 rounded-full bg-[#10B981] animate-pulse"></span>
          <span className="opacity-80">New: 2026 Question Bank is Live</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter mb-4 md:mb-6 leading-[1.1] md:leading-[1.05]" style={{ color: 'var(--text-main)' }}>
          Elevate Your 
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#405cff] via-[#8B5CF6] to-[#10B981] drop-shadow-sm pr-1 "> Pharmacy</span>Journey
        </h1>
        <p className="opacity-60 text-sm md:text-lg max-w-xl mb-8 md:mb-10 font-medium leading-relaxed px-2" style={{ color: 'var(--text-main)' }}>
          The ultimate digital ecosystem for pharmaceutical students. Access verified notes, question banks and career guidance.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 w-full sm:w-auto px-4 sm:px-0">

          <a
            href="https://vidyatestudenthub.blogspot.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 md:px-8 py-3.5 md:py-4 rounded-xl bg-[#8B5CF6] text-white font-black text-sm md:text-base hover:shadow-[0_15px_30px_rgba(139,92,246,0.3)] hover:-translate-y-1 transition-all active:scale-95 flex items-center justify-center gap-2 relative"
            style={{ textDecoration: 'none' }}
          >
            <span className="material-symbols-rounded text-lg">article</span>
            <span>Visit Blogs</span>
          </a>

          <Link
            to="/get-certified"
            className="w-full sm:w-auto px-6 md:px-8 py-3.5 md:py-4 rounded-xl bg-[#10B981] text-white font-black text-sm md:text-base hover:shadow-[0_15px_30px_rgba(16,185,129,0.3)] hover:-translate-y-1 transition-all active:scale-95 flex items-center justify-center gap-2"
            style={{ textDecoration: 'none' }}
          >
            <span className="material-symbols-rounded text-lg">verified</span>
            <span>Get Certified</span>
          </Link>


          <button
            onClick={() => document.getElementById('tracks')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto px-6 md:px-8 py-3.5 md:py-4 rounded-xl bg-[#405cff] text-white font-black text-sm md:text-base hover:shadow-[0_15px_30px_rgba(64,92,255,0.3)] hover:-translate-y-1 transition-all active:scale-95 flex items-center justify-center gap-2"
          >
            <span className="material-symbols-rounded text-lg">school</span>
            <span>Explore Courses</span>
          </button>
        </div>
        
        {/* Infinite Image Scroller */}
        <div 
          className="w-full max-w-3xl mt-8 p-4 rounded-2xl border group overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]"
          style={{ borderColor: 'var(--glass-border)', backgroundColor: 'var(--glass-bg)' }}
        >
          <div 
            className="flex gap-12 group-hover:[animation-play-state:paused]"
            style={{
              animation: 'scroll 30s linear infinite'
            }}
          >
            {extendedScrollerImages.map((src, index) => (
              <div key={index} className="flex-shrink-0">
                <img
                  src={src}
                  alt={`Logo ${index + 1}`}
                  className="h-8 w-auto object-contain"
                  style={{
                    filter: 'grayscale(1) opacity(0.4)',
                    transition: 'filter 0.3s',
                  }}
                  onMouseOver={(e) => e.currentTarget.style.filter = 'grayscale(0) opacity(1)'}
                  onMouseOut={(e) => e.currentTarget.style.filter = 'grayscale(1) opacity(0.4)'}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-20 hidden md:block">
          <span className="material-symbols-rounded text-2xl">keyboard_double_arrow_down</span>
        </div>
      </section>

      {/* Get Certified Section */}
      <section className="py-16 md:py-20">
        <div className="glass p-8 md:p-12 rounded-3xl border text-center relative overflow-hidden" style={{ borderColor: 'var(--glass-border)' }}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#10B981]/10 blur-[100px] rounded-full -z-10"></div>
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10B981]/10 text-[#10B981] text-[10px] font-black uppercase tracking-[0.2em] mb-6">
              <span className="material-symbols-rounded text-sm">verified_user</span>
              Skill Validation
            </div>
            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter" style={{ color: 'var(--text-main)' }}>
              Get <span className="text-[#10B981]">Certified</span>, Stand Out.
            </h2>
            <p className="opacity-60 text-sm md:text-lg max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
              Validate your knowledge with our official certification courses. Enhance your resume and demonstrate your expertise to potential employers.
            </p>
            <Link 
              to="/get-certified"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-[#10B981] text-white rounded-xl font-black text-sm md:text-base hover:shadow-[0_15px_30px_rgba(16,185,129,0.3)] hover:-translate-y-1 transition-all active:scale-95"
            >
              <span>Browse Certifications</span>
              <span className="material-symbols-rounded group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </div>
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

      {/* Why Vidyate? */}
      <section className="py-16 md:py-20">
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#10B981]/10 text-[#10B981] text-[10px] font-black uppercase tracking-[0.2em] mb-3">
            <span className="material-symbols-rounded text-sm">verified</span>
            Quality Assurance
          </div>
          <h2 className="text-3xl md:text-5xl font-black" style={{ color: 'var(--text-main)' }}>Why Vidyate?</h2>
          <p className="opacity-60 text-sm md:text-lg max-w-xl mx-auto font-medium leading-relaxed">
            We're not just another resource website. We are a complete ecosystem built on three core pillars of quality and accessibility.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {whyVidyateTabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveWhyVidyateTab(index)}
              className={`p-6 text-left glass rounded-2xl border transition-all duration-300 group ${activeWhyVidyateTab === index ? 'shadow-xl -translate-y-1' : 'hover:shadow-lg'}`}
              style={{ borderColor: activeWhyVidyateTab === index ? tab.color : 'var(--glass-border)' }}
            >
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors`} style={{ backgroundColor: `${tab.color}20`, color: tab.color }}>
                  <span className="material-symbols-rounded text-2xl">{tab.icon}</span>
                </div>
                <h3 className="text-lg font-black" style={{ color: 'var(--text-main)' }}>{tab.title}</h3>
              </div>
            </button>
          ))}
        </div>
        <div className="mt-6 relative">
          {whyVidyateTabs.map((tab, index) => (
            <div
              key={index}
              className={`glass p-8 md:p-10 rounded-2xl border transition-all duration-500 ${activeWhyVidyateTab === index ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 absolute top-0 left-0 w-full pointer-events-none'}`}
              style={{ borderColor: 'var(--glass-border)' }}
            >
              <p className="text-base md:text-lg leading-relaxed font-medium opacity-70" style={{ color: 'var(--text-main)' }}>
                {tab.content}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* About Us Spotlight Section */}
      <section className="py-16 md:py-24">
        <div className="glass p-8 md:p-12 rounded-3xl border flex flex-col lg:flex-row items-center justify-between gap-10 relative overflow-hidden" style={{ borderColor: 'var(--glass-border)' }}>
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#405cff]/10 blur-[80px] rounded-full -z-10"></div>
          <div className="relative z-10 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#405cff]/10 text-[#405cff] text-[10px] font-black uppercase tracking-[0.2em] mb-6">
              <span className="material-symbols-rounded text-sm">visibility</span>
              Our Vision
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight leading-[1.1]" style={{ color: 'var(--text-main)' }}>
              Academic Excellence, <br/> Digitally Perfected.
            </h2>
            <p className="opacity-50 text-sm md:text-base font-medium leading-relaxed mb-8 max-w-2xl">
              Vidyate is more than just a website; it's a complete learning hub. We combine trusted academic content with modern technology to accelerate your learning curve and career readiness.
            </p>
            <Link 
              to="/about"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-[#405cff] text-white rounded-xl font-black text-sm md:text-base hover:shadow-[0_15px_30px_rgba(64,92,255,0.3)] hover:-translate-y-1 transition-all active:scale-95"
            >
              <span>Discover Our Mission</span>
              <span className="material-symbols-rounded group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </div>
          <div className="relative z-10 hidden lg:block">
            <div className="w-48 h-48 glass rounded-full flex items-center justify-center border-dashed border-2 opacity-30 border-[#405cff]">
              <span className="material-symbols-rounded text-7xl text-[#405cff] animate-pulse">hub</span>
            </div>
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
              <h2 className="text-2xl md:text-4xl font-black mb-4 md:mb-6 leading-[1.1]" style={{ color: 'var(--text-main)' }}>Subscribe Newsletter</h2>
              <p className="opacity-50 text-sm md:text-lg font-medium" style={{ color: 'var(--text-main)' }}>
                Stay updated with Vidyate Student Hub. Join our newsletter for exclusive insights and resources.
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
