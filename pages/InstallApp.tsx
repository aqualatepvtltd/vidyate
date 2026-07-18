import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const InstallApp: React.FC = () => {

  const steps = [
    {
      number: 1,
      title: 'Download APK',
      description: 'Click the download button below to get the latest beta version of the Vidyate app.',
      icon: 'download'
    },
    {
      number: 2,
      title: 'Locate the File',
      description: 'Open your phone\'s file manager and navigate to the "Downloads" folder to find the "vidyate-app.apk" file.',
      icon: 'folder_open'
    },
    {
      number: 3,
      title: 'Install the App',
      description: 'Tap on the APK file. If prompted, you may need to "Allow installation from unknown sources" in your device settings.',
      icon: 'install_mobile'
    },
    {
      number: 4,
      title: 'Personalized Experience',
      description: 'You\'re all set! Explore a personalized learning journey with early access to new resources, exams, and features.',
      icon: 'rocket_launch'
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 md:px-6 py-12 md:py-16 animate-subtle-fade">
      <SEO 
        title="Install Vidyate App | Early Access" 
        description="Download the Vidyate Android app for a personalized learning experience. Get early access to new resources, exams, and more."
        keywords="Vidyate App, Download APK, Pharmacy App, Android App, Early Access, Beta Version"
      />
      
      {/* Header */}
      <div className="text-center mb-12 md:mb-16">
        <span className="text-[#405cff] font-black text-[11px] tracking-[0.3em] uppercase mb-4 block">Early Access</span>
        <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter" style={{ color: 'var(--text-main)' }}>
          Get the <span className="text-[#405cff]">Vidyate App</span>
        </h1>
        <p className="opacity-60 text-base md:text-xl max-w-2xl mx-auto leading-relaxed font-medium" style={{ color: 'var(--text-main)' }}>
          Experience a more personalized and streamlined learning journey with the beta version of our Android app.
        </p>
      </div>

      {/* Download Button */}
      <div className="text-center mb-16">
        <a 
          href="/vidyate-app.apk" 
          download
          className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#405cff] text-white font-black rounded-2xl text-lg shadow-xl hover:shadow-[0_20px_40px_rgba(64,92,255,0.3)] hover:-translate-y-1 active:scale-95 transition-all"
        >
          <span className="material-symbols-rounded">android</span>
          Download APK (Beta)
        </a>
        <p className="text-xs opacity-40 mt-4 font-bold">For Android devices only</p>
      </div>

      {/* Installation Steps */}
      <div className="mb-16 md:mb-20">
        <h2 className="text-center text-2xl md:text-3xl font-black mb-10" style={{ color: 'var(--text-main)' }}>Installation Guide</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div key={step.number} className="glass p-6 rounded-2xl border text-center" style={{ borderColor: 'var(--glass-border)' }}>
              <div className="w-12 h-12 bg-[#405cff]/10 text-[#405cff] rounded-full flex items-center justify-center mx-auto mb-4 font-black text-xl">
                {step.number}
              </div>
              <h3 className="text-lg font-black mb-2" style={{ color: 'var(--text-main)' }}>{step.title}</h3>
              <p className="text-sm opacity-60 leading-relaxed" style={{ color: 'var(--text-main)' }}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Beta Info & Feedback */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="material-symbols-rounded text-yellow-500 text-2xl">science</span>
            <h3 className="text-xl font-black text-yellow-500">You're a Beta Tester!</h3>
          </div>
          <p className="opacity-70 leading-relaxed" style={{ color: 'var(--text-main)' }}>
            Our technical team is hard at work developing the app. As an early user, you get exclusive access to features before anyone else. Your experience is crucial for us to build a better platform.
          </p>
        </div>
        <div className="bg-green-500/5 border border-green-500/20 rounded-2xl p-8 flex flex-col items-center justify-center text-center">
          <div className="flex items-center gap-3 mb-3">
            <span className="material-symbols-rounded text-green-500 text-2xl">feedback</span>
            <h3 className="text-xl font-black text-green-500">Got Feedback?</h3>
          </div>
          <p className="opacity-70 leading-relaxed mb-6" style={{ color: 'var(--text-main)' }}>
            Encounter a bug or have a suggestion? We'd love to hear from you. Your feedback helps us improve.
          </p>
          <Link 
            to="/contact"
            className="px-8 py-3 rounded-xl bg-green-500 text-white font-black text-sm hover:shadow-lg transition-all"
          >
            Share Your Thoughts
          </Link>
        </div>
      </div>

    </div>
  );
};

export default InstallApp;