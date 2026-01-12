
import React, { useState } from 'react';
import SEO from '../components/SEO';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitError(null);

    const payload = {
      ...formData,
      access_key: "bfe80316-38d8-4190-a6a0-1ced2791c960",
      from_name: "Vidyate Contact Hub",
      subject_line: `New Inquiry: ${formData.subject}`
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      if (result.success) {
        setIsSubmitted(true);
      } else {
        setSubmitError("Failed to send message. Please try again later.");
      }
    } catch (error) {
      setSubmitError("Network error. Please check your connection.");
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      title: 'Email Support',
      value: 'vidyatestudenthub@gmail.com',
      icon: 'alternate_email',
      color: '#405cff',
      description: 'Standard support for all resource-related queries.'
    },
    {
      title: 'Academic Helpline',
      value: '+91 8800-VIDYATE',
      icon: 'call',
      color: '#10B981',
      description: 'Mon-Fri, 9AM to 6PM IST for emergency student support.'
    },
    {
      title: 'Headquarters',
      value: 'Bihar, India',
      icon: 'location_on',
      color: '#8B5CF6',
      description: 'Our central academic content and technology hub.'
    }
  ];

  const inputClasses = "w-full glass rounded-xl p-4 transition-all focus:outline-none ring-slate-500/0 focus:ring-2 focus:ring-slate-500/50 border-slate-500/10 focus:border-slate-500 text-base font-medium";

  if (isSubmitted) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center animate-scale-up">
        <SEO title="Message Sent" />
        <div className="glass p-12 md:p-20 rounded-3xl border shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-[#10B981]"></div>
          <div className="w-20 h-20 bg-[#10B981]/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <span className="material-symbols-rounded text-4xl text-[#10B981]">mark_email_read</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tighter" style={{ color: 'var(--text-main)' }}>Message Sent.</h2>
          <p className="opacity-60 text-base md:text-lg max-w-md mx-auto leading-relaxed font-medium mb-10" style={{ color: 'var(--text-main)' }}>
            Thank you for reaching out. A Vidyate team member will review your inquiry and respond via email within 24 hours.
          </p>
          <button 
            onClick={() => {
              setIsSubmitted(false);
              setFormData({ name: '', email: '', subject: '', message: '' });
            }}
            className="px-10 py-4 bg-[#405cff] text-white font-black rounded-xl text-sm uppercase tracking-widest hover:shadow-lg active:scale-95 transition-all"
          >
            Send Another
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 animate-subtle-fade">
      <SEO 
        title="Contact Support" 
        description="Need help with academic resources or technical issues? Contact Vidyate Pro's dedicated support team."
      />
      {/* Hero Header */}
      <div className="text-center mb-16">
        <span className="text-[#405cff] font-black text-[11px] tracking-[0.3em] uppercase mb-4 block">Get In Touch</span>
        <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter" style={{ color: 'var(--text-main)' }}>
          We're Here <span className="opacity-30">to Help.</span>
        </h1>
        <p className="opacity-50 text-base md:text-xl max-w-2xl mx-auto leading-relaxed font-medium" style={{ color: 'var(--text-main)' }}>
          Whether you have a technical question or need academic guidance, our team is dedicated to your success.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Info Cards */}
        <div className="lg:col-span-5 space-y-6">
          <div className="grid grid-cols-1 gap-6">
            {contactInfo.map((info, idx) => (
              <div 
                key={idx}
                className="glass p-8 rounded-2xl border transition-all hover:-translate-y-1 hover:shadow-xl group"
                style={{ borderColor: 'var(--glass-border)' }}
              >
                <div className="flex items-start gap-5">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${info.color}15`, color: info.color }}
                  >
                    <span className="material-symbols-rounded text-2xl">{info.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-[11px] font-black uppercase tracking-widest opacity-40 mb-1" style={{ color: 'var(--text-main)' }}>{info.title}</h3>
                    <p className="text-xl font-black mb-2 tracking-tight" style={{ color: 'var(--text-main)' }}>{info.value}</p>
                    <p className="text-sm opacity-50 leading-relaxed font-medium" style={{ color: 'var(--text-main)' }}>{info.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7">
          <form 
            onSubmit={handleSubmit}
            className="glass p-8 md:p-12 rounded-3xl border shadow-xl space-y-6"
            style={{ borderColor: 'var(--glass-border)' }}
          >
            {submitError && (
              <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-500 rounded-xl text-sm font-bold flex items-center gap-3">
                <span className="material-symbols-rounded">error_outline</span>
                {submitError}
              </div>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[11px] font-black uppercase tracking-widest opacity-40 ml-1" style={{ color: 'var(--text-main)' }}>Full Name</label>
                <input 
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  className={inputClasses}
                  value={formData.name}
                  onChange={handleInputChange}
                  style={{ color: 'var(--text-main)' }}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-black uppercase tracking-widest opacity-40 ml-1" style={{ color: 'var(--text-main)' }}>Email Address</label>
                <input 
                  type="email"
                  name="email"
                  required
                  placeholder="hello@gmail.com"
                  className={inputClasses}
                  value={formData.email}
                  onChange={handleInputChange}
                  style={{ color: 'var(--text-main)' }}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[11px] font-black uppercase tracking-widest opacity-40 ml-1" style={{ color: 'var(--text-main)' }}>Subject</label>
              <input 
                type="text"
                name="subject"
                required
                placeholder="How can we help?"
                className={inputClasses}
                value={formData.subject}
                onChange={handleInputChange}
                style={{ color: 'var(--text-main)' }}
              />
            </div>

            <div className="space-y-2">
              <label className="text-[11px] font-black uppercase tracking-widest opacity-40 ml-1" style={{ color: 'var(--text-main)' }}>Your Message</label>
              <textarea 
                name="message"
                required
                rows={5}
                placeholder="Tell us about your inquiry..."
                className={`${inputClasses} resize-none`}
                value={formData.message}
                onChange={handleInputChange}
                style={{ color: 'var(--text-main)' }}
              />
            </div>

            <button 
              type="submit"
              disabled={isLoading}
              className="w-full py-5 bg-[#405cff] text-white font-black rounded-xl text-base shadow-lg hover:shadow-[0_15px_30px_rgba(64,92,255,0.3)] hover:-translate-y-1 active:scale-95 transition-all disabled:opacity-50 flex items-center justify-center gap-3"
            >
              {isLoading ? (
                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
              ) : (
                <>
                  Send Message
                  <span className="material-symbols-rounded text-xl">send</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
