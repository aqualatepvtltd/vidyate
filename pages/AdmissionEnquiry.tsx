
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const AdmissionEnquiry: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    // Personal Info
    fullName: '',
    email: '',
    phone: '',
    fatherName: '',
    address: '',
    pincode: '',
    // Academic Info
    tenthMarks: '',
    twelfthMarks: '',
    resultStatus: 'Passed',
    // Admission Requirement
    targetCollege: '',
    department: 'B.Pharmacy'
  });

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
      subject: `New Admission Enquiry: ${formData.targetCollege} - ${formData.department}`,
      from_name: "Vidyate Admission Desk",
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
        setSubmitError("Form submission failed. Please try again or contact us directly.");
      }
    } catch (error) {
      setSubmitError("A network error occurred. Please check your connection.");
    } finally {
      setIsLoading(false);
    }
  };

  const inputClasses = "w-full glass rounded-xl p-4 transition-all focus:outline-none ring-slate-500/0 focus:ring-2 focus:ring-slate-500/50 border-slate-500/10 focus:border-slate-500 text-base font-medium placeholder-slate-500/50";
  const labelClasses = "text-[11px] font-black uppercase tracking-widest opacity-40 ml-1 mb-2 block";

  if (isSubmitted) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center animate-scale-up">
        <SEO title="Enquiry Submitted" />
        <div className="glass p-12 md:p-20 rounded-3xl border shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-[#405cff]"></div>
          <div className="w-20 h-20 bg-[#405cff]/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <span className="material-symbols-rounded text-4xl text-[#405cff]">how_to_reg</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tighter" style={{ color: 'var(--text-main)' }}>Request Received.</h2>
          <p className="opacity-60 text-base md:text-lg max-w-md mx-auto leading-relaxed font-medium mb-10" style={{ color: 'var(--text-main)' }}>
            Your admission enquiry has been sent to our counselors. We will review your profile and contact you within 48 hours to guide you through the process.
          </p>
          <div className="flex justify-center gap-4">
            <Link 
              to="/"
              className="px-10 py-4 bg-[#405cff] text-white font-black rounded-xl text-sm uppercase tracking-widest hover:shadow-lg active:scale-95 transition-all"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 animate-subtle-fade">
      <SEO 
        title="College Admission Enquiry | Expert Pharmacy Career Guidance" 
        description="Get personalized counseling for B.Pharm, D.Pharm, and Pharm.D admissions. Fill out our enquiry form to connect with expert academic counselors for top pharmacy colleges."
        keywords="Pharmacy Admission, B.Pharm Admission, D.Pharm Colleges, Pharmacy Career Counseling, College Enquiry, Pharmacy Entrance Exams, Education Guidance"
      />
      
      {/* Header */}
      <div className="text-center mb-16">
        <span className="text-[#405cff] font-black text-[11px] tracking-[0.3em] uppercase mb-4 block">College Admission Desk</span>
        <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter" style={{ color: 'var(--text-main)' }}>
          Unlock Your <span className="text-[#405cff]">Campus.</span>
        </h1>
        <p className="opacity-50 text-base md:text-xl max-w-2xl mx-auto leading-relaxed font-medium" style={{ color: 'var(--text-main)' }}>
          Whether you're targeting premier universities or diploma colleges, our team helps bridge the gap between your ambition and the right institution.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-10">
          
          {/* Section 1: Personal Information */}
          <div className="glass p-8 md:p-12 rounded-3xl border shadow-xl" style={{ borderColor: 'var(--glass-border)' }}>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-lg bg-[#405cff]/10 flex items-center justify-center text-[#405cff]">
                <span className="material-symbols-rounded">person</span>
              </div>
              <h3 className="text-xl font-black tracking-tight" style={{ color: 'var(--text-main)' }}>Personal Information</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className={labelClasses} style={{ color: 'var(--text-main)' }}>Full Name*</label>
                <input 
                  type="text" 
                  name="fullName" 
                  required 
                  placeholder="Student's Legal Name" 
                  className={inputClasses} 
                  value={formData.fullName} 
                  onChange={handleInputChange} 
                  style={{ color: 'var(--text-main)', backgroundColor: 'var(--glass-bg)' }}
                />
              </div>
              <div>
                <label className={labelClasses} style={{ color: 'var(--text-main)' }}>Email Address*</label>
                <input 
                  type="email" 
                  name="email" 
                  required 
                  placeholder="hello@example.com" 
                  className={inputClasses} 
                  value={formData.email} 
                  onChange={handleInputChange} 
                  style={{ color: 'var(--text-main)', backgroundColor: 'var(--glass-bg)' }}
                />
              </div>
              <div>
                <label className={labelClasses} style={{ color: 'var(--text-main)' }}>Phone Number*</label>
                <input 
                  type="tel" 
                  name="phone" 
                  required 
                  placeholder="10-digit number" 
                  className={inputClasses} 
                  value={formData.phone} 
                  onChange={handleInputChange} 
                  style={{ color: 'var(--text-main)', backgroundColor: 'var(--glass-bg)' }}
                />
              </div>
              <div>
                <label className={labelClasses} style={{ color: 'var(--text-main)' }}>Father's Name (Optional)</label>
                <input 
                  type="text" 
                  name="fatherName" 
                  placeholder="Parent's Name" 
                  className={inputClasses} 
                  value={formData.fatherName} 
                  onChange={handleInputChange} 
                  style={{ color: 'var(--text-main)', backgroundColor: 'var(--glass-bg)' }}
                />
              </div>
              <div>
                <label className={labelClasses} style={{ color: 'var(--text-main)' }}>Pincode*</label>
                <input 
                  type="text" 
                  name="pincode" 
                  required 
                  placeholder="6-digit PIN" 
                  className={inputClasses} 
                  value={formData.pincode} 
                  onChange={handleInputChange} 
                  style={{ color: 'var(--text-main)', backgroundColor: 'var(--glass-bg)' }}
                />
              </div>
              <div className="md:col-span-2">
                <label className={labelClasses} style={{ color: 'var(--text-main)' }}>Residential Address*</label>
                <textarea 
                  name="address" 
                  required 
                  rows={3} 
                  placeholder="Complete postal address..." 
                  className={`${inputClasses} resize-none`} 
                  value={formData.address} 
                  onChange={handleInputChange} 
                  style={{ color: 'var(--text-main)', backgroundColor: 'var(--glass-bg)' }}
                />
              </div>
            </div>
          </div>

          {/* Section 2: Academic Information */}
          <div className="glass p-8 md:p-12 rounded-3xl border shadow-xl" style={{ borderColor: 'var(--glass-border)' }}>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-lg bg-[#10B981]/10 flex items-center justify-center text-[#10B981]">
                <span className="material-symbols-rounded">school</span>
              </div>
              <h3 className="text-xl font-black tracking-tight" style={{ color: 'var(--text-main)' }}>Academic Profile</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className={labelClasses} style={{ color: 'var(--text-main)' }}>10th Class Marks (%)*</label>
                <input 
                  type="text" 
                  name="tenthMarks" 
                  required 
                  placeholder="e.g., 85.5%" 
                  className={inputClasses} 
                  value={formData.tenthMarks} 
                  onChange={handleInputChange} 
                  style={{ color: 'var(--text-main)', backgroundColor: 'var(--glass-bg)' }}
                />
              </div>
              <div>
                <label className={labelClasses} style={{ color: 'var(--text-main)' }}>12th Class Marks (%)*</label>
                <input 
                  type="text" 
                  name="twelfthMarks" 
                  required 
                  placeholder="e.g., 90.0%" 
                  className={inputClasses} 
                  value={formData.twelfthMarks} 
                  onChange={handleInputChange} 
                  style={{ color: 'var(--text-main)', backgroundColor: 'var(--glass-bg)' }}
                />
              </div>
              <div>
                <label className={labelClasses} style={{ color: 'var(--text-main)' }}>12th Result Status*</label>
                <select 
                  name="resultStatus" 
                  className={inputClasses} 
                  value={formData.resultStatus} 
                  onChange={handleInputChange} 
                  style={{ color: 'var(--text-main)', backgroundColor: 'var(--glass-bg)' }}
                >
                  <option value="Passed" style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-main)' }}>Passed</option>
                  <option value="Waiting" style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-main)' }}>Result Awaited</option>
                </select>
              </div>
            </div>
          </div>

          {/* Section 3: Admission Preferences */}
          <div className="glass p-8 md:p-12 rounded-3xl border shadow-xl" style={{ borderColor: 'var(--glass-border)' }}>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-lg bg-[#8B5CF6]/10 flex items-center justify-center text-[#8B5CF6]">
                <span className="material-symbols-rounded">apartment</span>
              </div>
              <h3 className="text-xl font-black tracking-tight" style={{ color: 'var(--text-main)' }}>Admission Preference</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className={labelClasses} style={{ color: 'var(--text-main)' }}>Target College Name (If any)</label>
                <input 
                  type="text" 
                  name="targetCollege" 
                  placeholder="Preferred institution..." 
                  className={inputClasses} 
                  value={formData.targetCollege} 
                  onChange={handleInputChange} 
                  style={{ color: 'var(--text-main)', backgroundColor: 'var(--glass-bg)' }}
                />
              </div>
              <div>
                <label className={labelClasses} style={{ color: 'var(--text-main)' }}>Preferred Department*</label>
                <select 
                  name="department" 
                  className={inputClasses} 
                  value={formData.department} 
                  onChange={handleInputChange} 
                  style={{ color: 'var(--text-main)', backgroundColor: 'var(--glass-bg)' }}
                >
                  <option value="B.Pharmacy" style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-main)' }}>B.Pharmacy (Bachelor)</option>
                  <option value="D.Pharmacy" style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-main)' }}>D.Pharmacy (Diploma)</option>
                  <option value="Pharm.D" style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-main)' }}>Pharm.D (Doctor of Pharmacy)</option>
                  <option value="M.Pharm" style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-main)' }}>M.Pharm (Master)</option>
                  <option value="Other Diploma" style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-main)' }}>Other Diploma/Vocational</option>
                  <option value="Other" style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-main)' }}>Other</option>
                </select>
              </div>
            </div>
          </div>

          {submitError && (
            <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-500 rounded-xl text-sm font-bold flex items-center gap-3">
              <span className="material-symbols-rounded">error_outline</span>
              {submitError}
            </div>
          )}

          <div className="flex flex-col items-center gap-6">
            <button 
              type="submit"
              disabled={isLoading}
              className="w-full max-w-md py-5 bg-[#405cff] text-white font-black rounded-2xl text-lg shadow-xl hover:shadow-[0_20px_40px_rgba(64,92,255,0.3)] hover:-translate-y-1 active:scale-95 transition-all disabled:opacity-50 flex items-center justify-center gap-3"
            >
              {isLoading ? (
                <span className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin"></span>
              ) : (
                <>
                  Submit Enquiry
                  <span className="material-symbols-rounded">rocket_launch</span>
                </>
              )}
            </button>
            <p className="text-center text-[9px] font-black uppercase tracking-[0.3em] opacity-30" style={{ color: 'var(--text-main)' }}>
              100% Secure Submission &bull; PCI Standards Compliant
            </p>
          </div>

        </form>
      </div>
    </div>
  );
};

export default AdmissionEnquiry;
