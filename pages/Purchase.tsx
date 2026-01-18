import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { BOOKS } from '../data/books';
import SEO from '../components/SEO';

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
  city?: string;
  pincode?: string;
  transactionId?: string;
  confirmation?: string;
}

const Purchase: React.FC = () => {
  const { bookId } = useParams();
  const navigate = useNavigate();
  const book = BOOKS.find(b => b.id === bookId);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    pincode: '',
    transactionId: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isProcessing, setIsProcessing] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [hasConfirmedScreenshot, setHasConfirmedScreenshot] = useState(false);

  if (!book) return <div className="p-20 text-center">Invalid book selection.</div>;

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit number';
    }

    if (!formData.address.trim()) newErrors.address = 'Shipping address is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    
    if (!formData.pincode.trim()) {
      newErrors.pincode = 'Pincode is required';
    } else if (!/^\d{6}$/.test(formData.pincode)) {
      newErrors.pincode = 'Invalid pincode (6 digits)';
    }

    if (!formData.transactionId.trim()) {
      newErrors.transactionId = 'Transaction ID is required';
    }

    if (!hasConfirmedScreenshot) {
      newErrors.confirmation = 'Please confirm you will attach the payment proof';
    }

    setErrors(newErrors);
    return newErrors;
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      pincode: '',
      transactionId: ''
    });
    setHasConfirmedScreenshot(false);
    setErrors({});
    setIsDone(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const validationErrors = validate();
    const hasErrors = Object.keys(validationErrors).length > 0;

    if (hasErrors) {
      const fieldOrder: (keyof FormErrors)[] = ['name', 'phone', 'email', 'address', 'city', 'pincode', 'transactionId', 'confirmation'];
      const firstErrorKey = fieldOrder.find(key => validationErrors[key]);
      
      if (firstErrorKey) {
        const element = document.getElementsByName(firstErrorKey)[0];
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          if (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement) element.focus();
        }
      }
      return;
    }

    setIsProcessing(true);

    const recipient = "vidyatestudenthub@gmail.com";
    const emailSubject = `BOOK ORDER: ${book.name} - ${formData.name}`;
    
    const emailBody = `
VIDYATE BOOK STORE - ORDER FORM

ORDER DETAILS
-------------
Book: ${book.name}
Price: ₹${book.selling_price}
Delivery: ₹${book.delivery_cost}
Total: ₹${book.selling_price + book.delivery_cost}

SHIPPING INFORMATION
--------------------
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Address: ${formData.address}
City: ${formData.city}
Pincode: ${formData.pincode}

PAYMENT VERIFICATION
--------------------
Status: Completed via UPI
Transaction ID: ${formData.transactionId}
Screenshot Status: TO BE ATTACHED BY USER MANUALLY

DECLARATION
-----------
I confirm that I have made the payment and I am attaching the screenshot to this email. I understand that my order will be processed after payment verification.

---------------------------------------------------
IMPORTANT: PLEASE ATTACH YOUR PAYMENT SCREENSHOT TO THIS EMAIL BEFORE SENDING!
`;

    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

    setTimeout(() => {
      window.location.href = mailtoLink;
      setIsProcessing(false);
      setIsDone(true);
      
      // Clear form after submission
      setFormData({ name: '', email: '', phone: '', address: '', city: '', pincode: '', transactionId: '' });
      setHasConfirmedScreenshot(false);
      setErrors({});
    }, 1200);
  };

  // Enhanced input classes with dark grey outline while focused/filling
  const inputClasses = (error?: string) => `w-full glass p-4 rounded-xl border transition-all focus:outline-none ring-slate-500/0 focus:ring-2 focus:ring-slate-500/50 border-slate-500/10 focus:border-slate-500 text-base font-medium ${error ? 'border-red-500/50' : ''}`;

  if (isDone) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center animate-scale-up">
        <SEO title="Order Prepared" />
        <div className="glass p-10 md:p-16 rounded-3xl border-[#10B981] border shadow-2xl">
          <span className="material-symbols-rounded text-6xl text-[#10B981] mb-6 animate-bounce">forward_to_inbox</span>
          <h1 className="text-3xl md:text-4xl font-black mb-4" style={{ color: 'var(--text-main)' }}>Email Prepared!</h1>
          <p className="opacity-70 text-base font-medium mb-6 leading-relaxed" style={{ color: 'var(--text-main)' }}>
            Your order email has been generated. <span className="text-[#405cff] font-bold">Attach your payment screenshot</span> in your email app and hit <b>Send</b>.
          </p>
          <div className="bg-[#405cff]/10 border border-[#405cff]/20 p-4 rounded-xl mb-10">
            <p className="text-[11px] font-black uppercase tracking-widest text-[#405cff]">
              Verification Status
            </p>
            <p className="text-xs mt-1 font-medium opacity-80" style={{ color: 'var(--text-main)' }}>
              Once you send the email, our team will verify your payment and <b>process your order in the next few hours</b>.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleReset}
              className="px-8 py-4 rounded-xl glass border border-transparent font-black text-sm transition-all hover:bg-white/5 flex items-center justify-center gap-2"
              style={{ color: 'var(--text-main)' }}
            >
              <span className="material-symbols-rounded text-sm">refresh</span>
              New Order
            </button>
            <Link to="/" className="inline-block px-10 py-4 rounded-xl bg-[#405cff] text-white font-black text-sm transition-all hover:shadow-lg active:scale-95 shadow-md">
              Return to Dashboard
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12 animate-subtle-fade">
      <SEO 
        title={`Secure Checkout - ${book.name} | Vidyate Store`} 
        description={`Complete your purchase for ${book.name}. Secure payment processing and fast shipping for pharmacy students.`}
        keywords="Checkout, Buy Book, Secure Payment, Pharmacy Book Order, Online Store"
      />
      <div className="mb-8 flex justify-between items-center">
        <Link to={`/books/${bookId}`} className="text-theme-muted hover:text-[#405cff] flex items-center gap-2 font-black text-[11px] uppercase tracking-widest transition-colors">
          <span className="material-symbols-rounded text-sm">arrow_back</span>
          Back to Details
        </Link>
        <button 
          onClick={handleReset}
          className="text-theme-muted hover:text-red-500 flex items-center gap-2 font-black text-[11px] uppercase tracking-widest transition-colors"
        >
          <span className="material-symbols-rounded text-sm">restart_alt</span>
          Reset Form
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-start">
        
        {/* Payment Column */}
        <div className="w-full lg:w-5/12 order-1 lg:order-2 space-y-6">
          <div className="glass p-8 rounded-3xl border text-center shadow-lg" style={{ borderColor: 'var(--glass-border)' }}>
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="material-symbols-rounded text-[#405cff]">payments</span>
              <h3 className="text-lg font-black" style={{ color: 'var(--text-main)' }}>Complete Payment</h3>
            </div>
            
            <div className="w-44 h-44 bg-white p-2 rounded-2xl mx-auto mb-6 shadow-xl border border-[#eee] flex items-center justify-center relative overflow-hidden group">
              <div className="w-full h-full bg-[#f8f9fa] flex items-center justify-center relative rounded-lg border border-dashed border-gray-200 overflow-hidden">
                 <img src="/GooglePay_QR.png" alt="Payment QR" className="w-full h-full object-contain group-hover:scale-90 transition-transform" />
                 <div className="absolute top-0 right-0 p-1 bg-[#405cff] rounded-bl-lg text-white z-10">
                   <span className="material-symbols-rounded text-[8px]">verified</span>
                 </div>
              </div>
              <a href="/GooglePay_QR.png" download="Vidyate_Payment_QR" className="absolute bottom-2 right-2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center text-black hover:bg-gray-50 transition-colors z-20" title="Download QR">
                <span className="material-symbols-rounded text-sm">download</span>
              </a>
            </div>
            
            <p className="text-[11px] font-bold opacity-60 mb-8 " style={{ color: 'var(--text-main)' }}>Scan QR</p>
            
            <div className="md:hidden w-full mb-8">
               <div className="flex items-center gap-2 mb-3 opacity-50 justify-center">
                 <span className="h-px w-6 bg-current"></span>
                 <span className="text-[10px] font-black uppercase tracking-widest">Pay via</span>
                 <span className="h-px w-6 bg-current"></span>
               </div>
               <div className="grid grid-cols-1 gap-2">
                 <a href={`tez://upi/pay?pa=godowner1976@okicici&pn=Vidyate&am=${book.selling_price + book.delivery_cost}&cu=INR`} className="flex items-center justify-between p-3 px-4 rounded-xl bg-white/5 border hover:bg-white/10 transition-all group" style={{ borderColor: 'var(--glass-border)' }}>
                   <div className="flex items-center gap-3">
                     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKDT3FviQFGcOuDXlMa7i5Dq6Jjh1T8lc5eA&s" className="w-6 h-6 rounded-full" alt="GPay" />
                     <span className="text-xs font-bold" style={{ color: 'var(--text-main)' }}>Pay via GPay</span>
                   </div>
                   <span className="material-symbols-rounded text-sm opacity-50 group-hover:translate-x-1 transition-transform" style={{ color: 'var(--text-main)' }}>arrow_forward</span>
                 </a>
                 <a href={`phonepe://pay?pa=godowner1976@okicici&pn=Vidyate&am=${book.selling_price + book.delivery_cost}&cu=INR`} className="flex items-center justify-between p-3 px-4 rounded-xl bg-white/5 border hover:bg-white/10 transition-all group" style={{ borderColor: 'var(--glass-border)' }}>
                   <div className="flex items-center gap-3">
                     <img src="https://eu-images.contentstack.com/v3/assets/blt7dacf616844cf077/blt85b08b4917701bc0/67997d68d8a86f00203713cc/phonepe-logo-icon.jpg?width=1280&auto=webp&quality=80&format=jpg&disable=upscale" className="w-6 h-6 rounded-full" alt="PhonePe" />
                     <span className="text-xs font-bold" style={{ color: 'var(--text-main)' }}>Pay via PhonePe</span>
                   </div>
                   <span className="material-symbols-rounded text-sm opacity-50 group-hover:translate-x-1 transition-transform" style={{ color: 'var(--text-main)' }}>arrow_forward</span>
                 </a>
                 <a href={`paytmmp://pay?pa=godowner1976@okicici&pn=Vidyate&am=${book.selling_price + book.delivery_cost}&cu=INR`} className="flex items-center justify-between p-3 px-4 rounded-xl bg-white/5 border hover:bg-white/10 transition-all group" style={{ borderColor: 'var(--glass-border)' }}>
                   <div className="flex items-center gap-3">
                     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2pquF8Mipu7bnOZ1m2hvOOiOV36J-Hv6RYA&s" className="w-6 h-6 rounded-full" alt="Paytm" />
                     <span className="text-xs font-bold" style={{ color: 'var(--text-main)' }}>Pay via Paytm</span>
                   </div>
                   <span className="material-symbols-rounded text-sm opacity-50 group-hover:translate-x-1 transition-transform" style={{ color: 'var(--text-main)' }}>arrow_forward</span>
                 </a>
               </div>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-dashed text-left" style={{ borderColor: 'var(--glass-border)' }}>
              <p className="text-[11px] font-black uppercase tracking-widest opacity-30 mb-2">Order Summary</p>
              <div className="flex justify-between items-center font-bold mb-1">
                <span className="opacity-60 text-xs">Item:</span>
                <span className="text-xs truncate max-w-[150px]">{book.name}</span>
              </div>
              <div className="flex justify-between items-center font-bold mb-1">
                <span className="opacity-60 text-xs">Price:</span>
                <span className="text-xs">₹{book.selling_price}</span>
              </div>
              <div className="flex justify-between items-center font-bold mb-1">
                <span className="opacity-60 text-xs">Delivery:</span>
                <span className="text-xs">₹{book.delivery_cost}</span>
              </div>
              <div className="flex justify-between items-center font-black text-lg pt-2 border-t mt-2" style={{ borderColor: 'var(--glass-border)' }}>
                <span>Total:</span>
                <div className="flex items-center text-[#405cff]">
                  <span className="material-symbols-rounded text-sm mr-1">currency_rupee</span>
                  <span>{book.selling_price + book.delivery_cost}.00</span>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-yellow-500/5 border border-yellow-500/20 rounded-xl text-left">
               <div className="flex gap-2 items-center mb-1">
                 <span className="material-symbols-rounded text-yellow-500 text-sm">info</span>
                 <p className="text-[11px] font-black uppercase tracking-widest text-yellow-600">Proof Required</p>
               </div>
               <p className="text-xs opacity-70" style={{ color: 'var(--text-main)' }}>
                 After submitting the form, your email app will open. You <b>must attach</b> the payment screenshot manually there.
               </p>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div className="w-full lg:w-7/12 order-2 lg:order-1 glass p-6 md:p-10 rounded-3xl border shadow-xl" style={{ borderColor: 'var(--glass-border)' }}>
          <h2 className="text-2xl font-black mb-8 tracking-tight" style={{ color: 'var(--text-main)' }}>Shipping Details</h2>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[11px] font-black uppercase tracking-widest opacity-50 ml-1" style={{ color: 'var(--text-main)' }}>Full Name*</label>
                <input 
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  className={inputClasses(errors.name)}
                  style={{ borderColor: errors.name ? '#FF6B6B' : undefined, color: 'var(--text-main)' }}
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({...formData, name: e.target.value});
                    if (errors.name) setErrors({...errors, name: undefined});
                  }}
                />
                {errors.name && <p className="text-[11px] text-red-500 font-bold ml-1">{errors.name}</p>}
              </div>
              <div className="space-y-1.5">
                <label className="text-[11px] font-black uppercase tracking-widest opacity-50 ml-1" style={{ color: 'var(--text-main)' }}>Phone Number*</label>
                <input 
                  name="phone"
                  type="tel"
                  placeholder="10-digit number"
                  maxLength={10}
                  className={inputClasses(errors.phone)}
                  style={{ borderColor: errors.phone ? '#FF6B6B' : undefined, color: 'var(--text-main)' }}
                  value={formData.phone}
                  onChange={(e) => {
                    const val = e.target.value.replace(/\D/g, '');
                    setFormData({...formData, phone: val});
                    if (errors.phone) setErrors({...errors, phone: undefined});
                  }}
                />
                {errors.phone && <p className="text-[11px] text-red-500 font-bold ml-1">{errors.phone}</p>}
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] font-black uppercase tracking-widest opacity-50 ml-1" style={{ color: 'var(--text-main)' }}>Email Address*</label>
              <input 
                name="email"
                type="email"
                placeholder="john@example.com"
                className={inputClasses(errors.email)}
                style={{ borderColor: errors.email ? '#FF6B6B' : undefined, color: 'var(--text-main)' }}
                value={formData.email}
                onChange={(e) => {
                  setFormData({...formData, email: e.target.value});
                  if (errors.email) setErrors({...errors, email: undefined});
                }}
              />
              {errors.email && <p className="text-[11px] text-red-500 font-bold ml-1">{errors.email}</p>}
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] font-black uppercase tracking-widest opacity-50 ml-1" style={{ color: 'var(--text-main)' }}>Complete Address*</label>
              <textarea 
                name="address"
                rows={3}
                placeholder="Flat No, Building, Area, Landmark..."
                className={inputClasses(errors.address)}
                style={{ borderColor: errors.address ? '#FF6B6B' : undefined, color: 'var(--text-main)' }}
                value={formData.address}
                onChange={(e) => {
                  setFormData({...formData, address: e.target.value});
                  if (errors.address) setErrors({...errors, address: undefined});
                }}
              />
              {errors.address && <p className="text-[11px] text-red-500 font-bold ml-1">{errors.address}</p>}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[11px] font-black uppercase tracking-widest opacity-50 ml-1" style={{ color: 'var(--text-main)' }}>City*</label>
                <input 
                  name="city"
                  type="text"
                  placeholder="Mumbai"
                  className={inputClasses(errors.city)}
                  style={{ borderColor: errors.city ? '#FF6B6B' : undefined, color: 'var(--text-main)' }}
                  value={formData.city}
                  onChange={(e) => {
                    setFormData({...formData, city: e.target.value});
                    if (errors.city) setErrors({...errors, city: undefined});
                  }}
                />
                {errors.city && <p className="text-[11px] text-red-500 font-bold ml-1">{errors.city}</p>}
              </div>
              <div className="space-y-1.5">
                <label className="text-[11px] font-black uppercase tracking-widest opacity-50 ml-1" style={{ color: 'var(--text-main)' }}>Pincode*</label>
                <input 
                  name="pincode"
                  type="text"
                  placeholder="400001"
                  maxLength={6}
                  className={inputClasses(errors.pincode)}
                  style={{ borderColor: errors.pincode ? '#FF6B6B' : undefined, color: 'var(--text-main)' }}
                  value={formData.pincode}
                  onChange={(e) => {
                    const val = e.target.value.replace(/\D/g, '');
                    setFormData({...formData, pincode: val});
                    if (errors.pincode) setErrors({...errors, pincode: undefined});
                  }}
                />
                {errors.pincode && <p className="text-[11px] text-red-500 font-bold ml-1">{errors.pincode}</p>}
              </div>
            </div>

            <div className="space-y-1.5 pt-2">
              <label className="text-[11px] font-black uppercase tracking-widest opacity-50 ml-1" style={{ color: 'var(--text-main)' }}>Transaction ID*</label>
              <input 
                name="transactionId"
                type="text"
                placeholder="Enter UPI Transaction ID"
                className={inputClasses(errors.transactionId)}
                style={{ borderColor: errors.transactionId ? '#FF6B6B' : undefined, color: 'var(--text-main)' }}
                value={formData.transactionId}
                onChange={(e) => {
                  setFormData({...formData, transactionId: e.target.value});
                  if (errors.transactionId) setErrors({...errors, transactionId: undefined});
                }}
              />
              {errors.transactionId && <p className="text-[11px] text-red-500 font-bold ml-1">{errors.transactionId}</p>}
            </div>

            <div className="pt-4 border-t" style={{ borderColor: 'var(--glass-border)' }}>
              <div className="flex items-start gap-3 cursor-pointer group">
                <input 
                  name="confirmation"
                  type="checkbox" 
                  id="confirm-purchase"
                  className="mt-1 w-4 h-4 rounded border-[#405cff] text-[#405cff] focus:ring-[#405cff] cursor-pointer"
                  checked={hasConfirmedScreenshot}
                  onChange={(e) => {
                    setHasConfirmedScreenshot(e.target.checked);
                    if (errors.confirmation) setErrors({...errors, confirmation: undefined});
                  }}
                />
                <label htmlFor="confirm-purchase" className="text-sm font-medium opacity-70 group-hover:opacity-100 transition-opacity cursor-pointer" style={{ color: 'var(--text-main)' }}>
                  I confirm that I have made the payment and I will attach the screenshot in the email app.*
                </label>
              </div>
              {errors.confirmation && <p className="text-[11px] text-red-500 font-bold mt-2 ml-7">{errors.confirmation}</p>}
            </div>

            <button 
              type="submit"
              disabled={isProcessing}
              className="w-full py-4 rounded-xl bg-[#405cff] text-white font-black text-base hover:shadow-lg transition-all disabled:opacity-50 mt-6 active:scale-95 flex items-center justify-center gap-2 shadow-md"
            >
              {isProcessing ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                  Processing...
                </>
              ) : (
                <>
                  Proceed to Order Email
                  <span className="material-symbols-rounded text-sm">forward_to_inbox</span>
                </>
              )}
            </button>
            
            <div className="space-y-4 mt-6">
              <div className="bg-[#405cff]/5 border border-[#405cff]/10 rounded-lg p-4">
                <div className="flex gap-3">
                  <span className="material-symbols-rounded text-[#405cff] text-lg">info</span>
                  <p className="text-[11px] font-bold opacity-60 uppercase tracking-widest leading-relaxed">
                    Final Step Alert <br/>
                    <span className="opacity-100 text-[#405cff]">Your email app will open next. You MUST attach your payment screenshot there before sending.</span>
                  </p>
                </div>
              </div>

              {/* Technical Support Red Note - HIDDEN ON MOBILE DEVICES */}
              <div className="hidden md:block bg-red-500/5 border border-red-500/20 rounded-lg p-4">
                <div className="flex gap-3">
                  <span className="material-symbols-rounded text-red-500 text-lg">error_outline</span>
                  <div className="space-y-1">
                    <p className="text-[11px] font-black uppercase tracking-widest text-red-600">Technical Issue? Already Paid?</p>
                    <p className="text-[11px] font-medium leading-relaxed text-red-600/80">
                      If you've already made the payment but are unable to proceed on this device due to attachment errors, <b>please refill this form using your smartphone</b> to successfully attach the screenshot in your mobile email app.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Purchase;