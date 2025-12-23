
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const CATEGORIES = [
  { id: 'request', label: 'Resource Request', icon: 'add_notes' },
  { id: 'bug', label: 'Report a Bug', icon: 'bug_report' },
  { id: 'suggestion', label: 'Suggestion', icon: 'lightbulb' },
  { id: 'other', label: 'Other', icon: 'more_horiz' },
];

const Feedback: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [category, setCategory] = useState('suggestion');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitError(null);

    const payload = {
      ...formData,
      rating: rating > 0 ? `${rating} Stars` : 'No rating',
      category: category.toUpperCase(),
      access_key: "e4935443-1b7a-4307-809e-c36882e4fc77",
      subject: `Vidyate Feedback: ${category.toUpperCase()}`,
      from_name: "Vidyate Feedback System",
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
        setSubmitError("Something went wrong. Please try again or contact us via email.");
      }
    } catch (error) {
      setSubmitError("Network error. Please check your connection and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const inputClasses = "w-full glass rounded-xl p-4 transition-all focus:outline-none ring-slate-500/0 focus:ring-2 focus:ring-slate-500/50 border-slate-500/10 focus:border-slate-500 text-base font-medium";

  if (isSubmitted) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <SEO title="Feedback Received" />
        <div 
          className="glass p-10 md:p-14 rounded-2xl border max-w-xl mx-auto relative overflow-hidden"
          style={{ borderColor: 'var(--emerald)' }}
        >
          <div className="absolute top-0 left-0 w-full h-1.5 bg-[#10B981]"></div>
          <div className="w-16 h-16 bg-[#10B981]/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="material-symbols-rounded text-3xl text-[#10B981]">check_circle</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-black mb-3" style={{ color: 'var(--text-main)' }}>Thank You!</h2>
          <p className="opacity-60 text-base mb-8 leading-relaxed font-medium" style={{ color: 'var(--text-main)' }}>
            Your feedback helps us make Vidyate better. We've received your message and will look into it shortly.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link 
              to="/" 
              className="px-6 py-3 rounded-xl glass text-sm font-bold transition-all hover:bg-white/10"
              style={{ color: 'var(--text-main)' }}
            >
              Back Home
            </Link>
            <Link 
              to="/b-pharm" 
              className="px-6 py-3 rounded-xl bg-[#405cff] text-white text-sm font-bold hover:shadow-lg transition-all"
            >
              Go to Resources
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-10">
      <SEO 
        title="Feedback & Support" 
        description="Share your suggestions, report bugs, or request new academic resources to help Vidyate Pro grow."
      />
      <div className="text-center mb-12">
        <span className="text-[#405cff] font-black text-[11px] tracking-[0.2em] uppercase mb-3 block">Help Us Grow</span>
        <h1 className="text-3xl md:text-5xl font-black mb-4" style={{ color: 'var(--text-main)' }}>Share Your Thoughts.</h1>
        <p className="opacity-50 text-base max-w-xl mx-auto font-medium" style={{ color: 'var(--text-main)' }}>
          Found a bug? Missing a subject? Or just want to say hi? Your feedback is the catalyst for our improvement.
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <form 
          onSubmit={handleSubmit} 
          className="glass p-6 md:p-10 rounded-2xl border shadow-xl space-y-6"
          style={{ borderColor: 'var(--glass-border)' }}
        >
          {submitError && (
            <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-500 rounded-xl text-sm font-bold flex items-center gap-3">
              <span className="material-symbols-rounded">error</span>
              {submitError}
            </div>
          )}
          
          <div className="space-y-3 text-center">
            <label className="text-[11px] font-black uppercase tracking-[0.2em] block opacity-40" style={{ color: 'var(--text-main)' }}>
              How would you rate Vidyate?
            </label>
            <div className="flex justify-center gap-3">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  onClick={() => setRating(star)}
                  className="transition-transform active:scale-90"
                >
                  <span className={`material-symbols-rounded text-3xl ${
                    star <= (hoverRating || rating) ? 'text-[#FFD700]' : 'opacity-20'
                  }`}
                  style={{ color: star <= (hoverRating || rating) ? '#FFD700' : 'var(--text-main)' }}>
                    star
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-[11px] font-black uppercase tracking-[0.2em] block opacity-40" style={{ color: 'var(--text-main)' }}>
              Feedback Category
            </label>
            <div className="grid grid-cols-2 gap-2.5">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setCategory(cat.id)}
                  className={`flex items-center gap-3 p-4 rounded-xl border transition-all text-sm font-bold ${
                    category === cat.id 
                    ? 'bg-[#405cff]/10 border-[#405cff] text-[#405cff]' 
                    : 'glass hover:bg-white/5'
                  }`}
                  style={{ 
                    borderColor: category === cat.id ? '#405cff' : 'var(--glass-border)',
                    color: category === cat.id ? '#405cff' : 'var(--text-main)'
                  }}
                >
                  <span className={`material-symbols-rounded text-xl ${category === cat.id ? 'text-[#405cff]' : 'opacity-40'}`}>{cat.icon}</span>
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <label htmlFor="message" className="text-[11px] font-black uppercase tracking-[0.2em] block opacity-40" style={{ color: 'var(--text-main)' }}>
              Your Message
            </label>
            <textarea
              id="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Tell us more about your experience..."
              className={inputClasses}
              style={{ 
                backgroundColor: 'var(--glass-bg)', 
                color: 'var(--text-main)'
              }}
            ></textarea>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-[11px] font-black uppercase tracking-[0.2em] block opacity-40" style={{ color: 'var(--text-main)' }}>
                Name (Optional)
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Dr. Smith"
                className={inputClasses}
                style={{ backgroundColor: 'var(--glass-bg)', color: 'var(--text-main)' }}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-[11px] font-black uppercase tracking-[0.2em] block opacity-40" style={{ color: 'var(--text-main)' }}>
                Email (Optional)
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="example@pharmacy.com"
                className={inputClasses}
                style={{ backgroundColor: 'var(--glass-bg)', color: 'var(--text-main)' }}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-4 rounded-xl bg-[#405cff] text-white font-black text-base hover:shadow-lg transition-all disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                Processing...
              </>
            ) : (
              <>
                Submit Feedback
                <span className="material-symbols-rounded text-sm">rocket_launch</span>
              </>
            )}
          </button>
        </form>

        <p className="mt-6 text-center opacity-30 text-[9px] uppercase tracking-[0.2em] font-black" style={{ color: 'var(--text-main)' }}>
          Your data is safe with us.
        </p>
      </div>
    </div>
  );
};

export default Feedback;
