import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const VerifyCertificate: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    verifyingFor: 'Self',
    certificateId: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
      from_name: "Vidyate Certificate Verification",
      subject: `Certificate Verification Request: ${formData.certificateId}`
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
        setSubmitError("Failed to send verification request. Please try again later.");
      }
    } catch (error) {
      setSubmitError("Network error. Please check your connection.");
    } finally {
      setIsLoading(false);
    }
  };

  const inputClasses = "w-full glass rounded-xl p-4 transition-all focus:outline-none ring-slate-500/0 focus:ring-2 focus:ring-slate-500/50 border-slate-500/10 focus:border-slate-500 text-base font-medium";
  const labelClasses = "text-[11px] font-black uppercase tracking-widest opacity-40 ml-1 mb-2 block";

  if (isSubmitted) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center animate-scale-up">
        <SEO title="Verification Request Sent" />
        <div className="glass p-12 md:p-20 rounded-3xl border shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-[#10B981]"></div>
          <div className="w-20 h-20 bg-[#10B981]/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <span className="material-symbols-rounded text-4xl text-[#10B981]">task_alt</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tighter" style={{ color: 'var(--text-main)' }}>Request Sent.</h2>
          <p className="opacity-60 text-base md:text-lg max-w-md mx-auto leading-relaxed font-medium mb-10" style={{ color: 'var(--text-main)' }}>
            Thank you for your request. Our team will verify the certificate details and respond via email within 48 hours.
          </p>
          <Link 
            to="/get-certified"
            className="px-10 py-4 bg-[#405cff] text-white font-black rounded-xl text-sm uppercase tracking-widest hover:shadow-lg active:scale-95 transition-all"
          >
            Back to Certifications
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 md:px-6 py-10 animate-subtle-fade">
      <SEO 
        title="Verify Certificate | Vidyate Academic Hub" 
        description="Submit your certificate ID for verification. Ensure the authenticity of your Vidyate certification."
        keywords="Verify Certificate, Vidyate Verification, Certificate Check, Student Certification"
      />
      <div className="text-center mb-12">
        <span className="text-[#405cff] font-black text-[11px] tracking-[0.3em] uppercase mb-4 block">Authenticity Check</span>
        <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter" style={{ color: 'var(--text-main)' }}>
          Verify a Certificate
        </h1>
        <p className="opacity-50 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-medium" style={{ color: 'var(--text-main)' }}>
          Enter the details below to request manual verification of a certificate issued by Vidyate.
        </p>
      </div>

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
          <div>
            <label className={labelClasses} style={{ color: 'var(--text-main)' }}>Full Name*</label>
            <input type="text" name="name" required placeholder="Your Full Name" className={inputClasses} value={formData.name} onChange={handleInputChange} style={{ color: 'var(--text-main)' }} />
          </div>
          <div>
            <label className={labelClasses} style={{ color: 'var(--text-main)' }}>Verifying For*</label>
            <select name="verifyingFor" className={inputClasses} value={formData.verifyingFor} onChange={handleInputChange} style={{ color: 'var(--text-main)', backgroundColor: 'var(--glass-bg)' }}>
              <option value="Self" style={{ backgroundColor: 'var(--bg-color)' }}>Self</option>
              <option value="Other" style={{ backgroundColor: 'var(--bg-color)' }}>Other (e.g., Employer, Student, etc)</option>
            </select>
          </div>
        </div>

        <div>
          <label className={labelClasses} style={{ color: 'var(--text-main)' }}>Certificate ID*</label>
          <input type="text" name="certificateId" required placeholder="Enter the ID found on the certificate" className={inputClasses} value={formData.certificateId} onChange={handleInputChange} style={{ color: 'var(--text-main)' }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className={labelClasses} style={{ color: 'var(--text-main)' }}>Email Address*</label>
            <input type="email" name="email" required placeholder="your.email@example.com" className={inputClasses} value={formData.email} onChange={handleInputChange} style={{ color: 'var(--text-main)' }} />
          </div>
          <div>
            <label className={labelClasses} style={{ color: 'var(--text-main)' }}>Phone Number*</label>
            <input type="tel" name="phone" required placeholder="10-digit number" className={inputClasses} value={formData.phone} onChange={handleInputChange} style={{ color: 'var(--text-main)' }} />
          </div>
        </div>

        <div>
          <label className={labelClasses} style={{ color: 'var(--text-main)' }}>Additional Message (Optional)</label>
          <textarea name="message" rows={3} placeholder="Any additional details..." className={`${inputClasses} resize-none`} value={formData.message} onChange={handleInputChange} style={{ color: 'var(--text-main)' }} />
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
              Submit for Verification
              <span className="material-symbols-rounded text-xl">send</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default VerifyCertificate;