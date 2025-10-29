// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState, useEffect } from 'react';
const App: React.FC = () => {
const [isDarkMode, setIsDarkMode] = useState(false);
const [isSignIn, setIsSignIn] = useState(true);
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [name, setName] = useState('');
const [confirmPassword, setConfirmPassword] = useState('');
const [showConfirmPassword, setShowConfirmPassword] = useState(false);
const [rememberMe, setRememberMe] = useState(false);
const [showPassword, setShowPassword] = useState(false);
const [isLoading, setIsLoading] = useState(false);
const [currentSection, setCurrentSection] = useState('hero');
const [feedbackEmail, setFeedbackEmail] = useState('');
const [feedbackMessage, setFeedbackMessage] = useState('');
const [feedbackRating, setFeedbackRating] = useState(0);
const [showChatbot, setShowChatbot] = useState(false);
const [chatMessages, setChatMessages] = useState([
{ type: 'bot', message: 'Hello! How can I help you today?' }
]);
const [chatInput, setChatInput] = useState('');
const [currentTestimonial, setCurrentTestimonial] = useState(0);
const testimonials = [
{
name: 'Sarah Johnson',
role: 'Marketing Director',
message: 'This platform has revolutionized how we manage our QR campaigns. The dynamic linking feature is incredible!',
rating: 5,
avatar: 'https://readdy.ai/api/search-image?query=professional%20business%20woman%20headshot%20portrait%20smiling%20confident%20modern%20office%20background%20clean%20lighting&width=60&height=60&seq=avatar001&orientation=squarish'
},
{
name: 'Michael Chen',
role: 'Tech Entrepreneur',
message: 'The analytics and tracking capabilities are outstanding. We can see exactly how our QR codes perform.',
rating: 5,
avatar: 'https://readdy.ai/api/search-image?query=professional%20business%20man%20headshot%20portrait%20smiling%20confident%20modern%20office%20background%20clean%20lighting&width=60&height=60&seq=avatar002&orientation=squarish'
},
{
name: 'Emily Rodriguez',
role: 'Event Coordinator',
message: 'Perfect for our events! We can update links in real-time without reprinting QR codes.',
rating: 5,
avatar: 'https://readdy.ai/api/search-image?query=professional%20business%20woman%20headshot%20portrait%20smiling%20confident%20modern%20office%20background%20clean%20lighting&width=60&height=60&seq=avatar003&orientation=squarish'
}
];
useEffect(() => {
const interval = setInterval(() => {
setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
}, 4000);
return () => clearInterval(interval);
}, []);
useEffect(() => {
const handleScroll = () => {
const sections = ['hero', 'features', 'about', 'feedback', 'contact'];
const scrollPosition = window.scrollY + 100;
sections.forEach((section) => {
const element = document.getElementById(section);
if (element) {
const offsetTop = element.offsetTop;
const offsetHeight = element.offsetHeight;
if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
setCurrentSection(section);
}
}
});
};
window.addEventListener('scroll', handleScroll);
return () => window.removeEventListener('scroll', handleScroll);
}, []);
const handleLogin = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsLoading(true);
  setTimeout(() => {
    setIsLoading(false);
    window.location.href = 'https://readdy.ai/home/32f8e29e-c698-4160-ac6a-d8ea4121fd08/b802b1fb-5406-4cc8-bdf4-aa5b0a4b187d';
  }, 2000);
};

const handleSignUp = async (e: React.FormEvent) => {
  e.preventDefault();
  if (password !== confirmPassword) {
    alert('Passwords do not match');
    return;
  }
  setIsLoading(true);
  setTimeout(() => {
    setIsLoading(false);
    setIsSignIn(true);
    setEmail('');
    setPassword('');
    setName('');
    setConfirmPassword('');
  }, 2000);
};
const handleFeedbackSubmit = (e: React.FormEvent) => {
e.preventDefault();
console.log('Feedback submitted:', { email: feedbackEmail, message: feedbackMessage, rating: feedbackRating });
setFeedbackEmail('');
setFeedbackMessage('');
setFeedbackRating(0);
};
const handleChatSubmit = (e: React.FormEvent) => {
e.preventDefault();
if (chatInput.trim()) {
setChatMessages([...chatMessages, { type: 'user', message: chatInput }]);
setTimeout(() => {
const responses = [
'Our platform offers dynamic QR code management with real-time link updates.',
'You can track analytics, manage multiple campaigns, and customize your QR codes.',
'We provide enterprise-grade security and 24/7 customer support.',
'Our pricing starts at $9.99/month for basic features with unlimited QR codes.'
];
const randomResponse = responses[Math.floor(Math.random() * responses.length)];
setChatMessages(prev => [...prev, { type: 'bot', message: randomResponse }]);
}, 1000);
setChatInput('');
}
};
const scrollToSection = (sectionId: string) => {
const element = document.getElementById(sectionId);
if (element) {
element.scrollIntoView({ behavior: 'smooth' });
}
};
const themeClasses = isDarkMode
? 'bg-gray-900 text-white'
: 'bg-gray-50 text-gray-900';
const cardClasses = isDarkMode
? 'bg-gray-800 border-gray-700'
: 'bg-white border-gray-200';
const inputClasses = isDarkMode
? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
: 'bg-white border-gray-300 text-gray-900 placeholder-gray-500';
return (
<div className={`min-h-screen ${themeClasses} transition-colors duration-300`}>
{/* Navigation */}
<nav className={`fixed top-0 w-full z-50 ${cardClasses} border-b backdrop-blur-md bg-opacity-95`}>
<div className="max-w-6xl mx-auto px-6 py-4">
<div className="flex items-center justify-between">
<div className="flex items-center space-x-2">
<i className="fas fa-qrcode text-2xl text-blue-600"></i>
<h1 className="text-xl font-bold">Dynamic QR</h1>
</div>
<div className="hidden md:flex items-center space-x-8">
<button
onClick={() => scrollToSection('hero')}
className={`hover:text-blue-600 transition-colors cursor-pointer ${currentSection === 'hero' ? 'text-blue-600' : ''}`}
>
Home
</button>
<button
onClick={() => scrollToSection('features')}
className={`hover:text-blue-600 transition-colors cursor-pointer ${currentSection === 'features' ? 'text-blue-600' : ''}`}
>
Features
</button>
<button
onClick={() => scrollToSection('about')}
className={`hover:text-blue-600 transition-colors cursor-pointer ${currentSection === 'about' ? 'text-blue-600' : ''}`}
>
About
</button>
<button
onClick={() => scrollToSection('feedback')}
className={`hover:text-blue-600 transition-colors cursor-pointer ${currentSection === 'feedback' ? 'text-blue-600' : ''}`}
>
Feedback
</button>
<button
onClick={() => scrollToSection('contact')}
className={`hover:text-blue-600 transition-colors cursor-pointer ${currentSection === 'contact' ? 'text-blue-600' : ''}`}
>
Contact
</button>
</div>
<div className="flex items-center space-x-4">
<div className="flex items-center space-x-2">
<i className="fas fa-sun text-yellow-500"></i>
<button
onClick={() => setIsDarkMode(!isDarkMode)}
className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors cursor-pointer ${
isDarkMode ? 'bg-blue-600' : 'bg-gray-300'
}`}
>
<span
className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
isDarkMode ? 'translate-x-6' : 'translate-x-1'
}`}
/>
</button>
<i className="fas fa-moon text-blue-500"></i>
</div>
<a
href="https://readdy.ai/home/32f8e29e-c698-4160-ac6a-d8ea4121fd08/b802b1fb-5406-4cc8-bdf4-aa5b0a4b187d"
data-readdy="true"
className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors !rounded-button whitespace-nowrap cursor-pointer"
>
Dashboard
</a>
</div>
</div>
</div>
</nav>
{/* Hero Section */}
<section
id="hero"
className="relative min-h-screen flex items-center justify-center overflow-hidden"
style={{
backgroundImage: `url('https://readdy.ai/api/search-image?query=modern%20technology%20background%20with%20gradient%20blue%20purple%20colors%20abstract%20geometric%20shapes%20digital%20network%20pattern%20futuristic%20design%20clean%20minimal%20professional%20business%20atmosphere&width=1440&height=1024&seq=hero001&orientation=landscape')`,
backgroundSize: 'cover',
backgroundPosition: 'center'
}}
>
<div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/60"></div>
<div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="text-white">
<h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
Dynamic QR Codes for Modern Business
</h1>
<p className="text-xl mb-8 text-gray-200">
Create, manage, and track QR codes that adapt to your needs. Update destinations in real-time without reprinting.
</p>
<div className="flex flex-col sm:flex-row gap-4">
<button
onClick={() => scrollToSection('features')}
className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors !rounded-button whitespace-nowrap cursor-pointer text-lg font-semibold"
>
Explore Features
</button>
<button
onClick={() => scrollToSection('contact')}
className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-colors !rounded-button whitespace-nowrap cursor-pointer text-lg font-semibold"
>
Get Started
</button>
</div>
</div>
<div className="hidden lg:block">
<div className="relative">
<div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-xl opacity-30"></div>
<div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
<div className="flex justify-center mb-8">
  <div className="bg-white/20 p-1 rounded-lg">
    <div className="relative flex">
      <button
        onClick={() => setIsSignIn(true)}
        className={`px-6 py-2 text-sm font-medium transition-colors relative z-10 ${isSignIn ? 'text-gray-900' : 'text-white'}`}
      >
        Sign In
      </button>
      <button
        onClick={() => setIsSignIn(false)}
        className={`px-6 py-2 text-sm font-medium transition-colors relative z-10 ${!isSignIn ? 'text-gray-900' : 'text-white'}`}
      >
        Sign Up
      </button>
      <div
        className={`absolute top-0 ${isSignIn ? 'left-0' : 'left-1/2'} w-1/2 h-full bg-white rounded-md transition-all duration-300`}
      ></div>
    </div>
  </div>
</div>

{isSignIn ? (
  <form onSubmit={handleLogin} className="space-y-6">
    <div className="text-center mb-6">
      <h2 className="text-2xl font-bold text-white mb-2">Welcome Back</h2>
      <p className="text-gray-300">Sign in to your account</p>
    </div>
    <div>
      <label className="block text-sm font-medium text-white mb-2">
        Email Address
      </label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
        placeholder="Enter your email"
        required
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-white mb-2">
        Password
      </label>
      <div className="relative">
        <input
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm pr-12"
          placeholder="Enter your password"
          required
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-300 hover:text-white cursor-pointer"
        >
          <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
        </button>
      </div>
    </div>
    <div className="flex items-center justify-between">
      <label className="flex items-center text-white">
        <input
          type="checkbox"
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
          className="mr-2 rounded cursor-pointer"
        />
        <span className="text-sm">Remember me</span>
      </label>
      <button
        type="button"
        className="text-sm text-blue-300 hover:text-blue-200 cursor-pointer"
      >
        Forgot password?
      </button>
    </div>
    <button
      type="submit"
      disabled={isLoading}
      className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors !rounded-button whitespace-nowrap cursor-pointer font-semibold disabled:opacity-50"
    >
      {isLoading ? (
        <div className="flex items-center justify-center">
          <i className="fas fa-spinner fa-spin mr-2"></i>
          Signing in...
        </div>
      ) : (
        'Sign In'
      )}
    </button>
  </form>
) : (
  <form onSubmit={handleSignUp} className="space-y-6">
    <div className="text-center mb-6">
      <h2 className="text-2xl font-bold text-white mb-2">Create Account</h2>
      <p className="text-gray-300">Join us today</p>
    </div>
    <div>
      <label className="block text-sm font-medium text-white mb-2">
        Full Name
      </label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
        placeholder="Enter your full name"
        required
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-white mb-2">
        Email Address
      </label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
        placeholder="Enter your email"
        required
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-white mb-2">
        Password
      </label>
      <div className="relative">
        <input
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm pr-12"
          placeholder="Create a password"
          required
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-300 hover:text-white cursor-pointer"
        >
          <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
        </button>
      </div>
    </div>
    <div>
      <label className="block text-sm font-medium text-white mb-2">
        Confirm Password
      </label>
      <div className="relative">
        <input
          type={showConfirmPassword ? 'text' : 'password'}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm pr-12"
          placeholder="Confirm your password"
          required
        />
        <button
          type="button"
          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-300 hover:text-white cursor-pointer"
        >
          <i className={`fas ${showConfirmPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
        </button>
      </div>
    </div>
    <button
      type="submit"
      disabled={isLoading}
      className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors !rounded-button whitespace-nowrap cursor-pointer font-semibold disabled:opacity-50"
    >
      {isLoading ? (
        <div className="flex items-center justify-center">
          <i className="fas fa-spinner fa-spin mr-2"></i>
          Creating account...
        </div>
      ) : (
        'Sign Up'
      )}
    </button>
  </form>
)}
</div>
</div>
</div>
</div>
</div>
</section>
{/* Features Section */}
<section id="features" className="py-20">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-4xl font-bold mb-6">Powerful Features</h2>
<p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
Everything you need to create and manage dynamic QR codes
</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
{[
{
icon: 'fa-sync-alt',
title: 'Real-time Updates',
description: 'Change your QR code destination instantly without reprinting',
image: 'https://readdy.ai/api/search-image?query=modern%20smartphone%20displaying%20QR%20code%20scanner%20interface%20with%20blue%20digital%20overlay%20technology%20background%20clean%20minimal%20design&width=400&height=300&seq=feature001&orientation=landscape'
},
{
icon: 'fa-chart-line',
title: 'Advanced Analytics',
description: 'Track scans, locations, devices, and user behavior',
image: 'https://readdy.ai/api/search-image?query=analytics%20dashboard%20with%20colorful%20charts%20graphs%20data%20visualization%20modern%20business%20interface%20clean%20professional%20design&width=400&height=300&seq=feature002&orientation=landscape'
},
{
icon: 'fa-palette',
title: 'Custom Design',
description: 'Brand your QR codes with colors, logos, and custom frames',
image: 'https://readdy.ai/api/search-image?query=customizable%20QR%20code%20designs%20with%20different%20colors%20patterns%20branding%20elements%20modern%20creative%20layout%20clean%20background&width=400&height=300&seq=feature003&orientation=landscape'
},
{
icon: 'fa-shield-alt',
title: 'Enterprise Security',
description: 'Bank-level encryption and security for your campaigns',
image: 'https://readdy.ai/api/search-image?query=digital%20security%20shield%20with%20lock%20icon%20cyber%20protection%20technology%20background%20blue%20gradient%20professional%20design&width=400&height=300&seq=feature004&orientation=landscape'
},
{
icon: 'fa-mobile-alt',
title: 'Multi-platform',
description: 'Works seamlessly across all devices and platforms',
image: 'https://readdy.ai/api/search-image?query=multiple%20devices%20smartphone%20tablet%20laptop%20showing%20responsive%20design%20modern%20technology%20clean%20white%20background&width=400&height=300&seq=feature005&orientation=landscape'
},
{
icon: 'fa-users',
title: 'Team Collaboration',
description: 'Share and manage QR codes with your team members',
image: 'https://readdy.ai/api/search-image?query=business%20team%20collaboration%20people%20working%20together%20modern%20office%20environment%20professional%20atmosphere%20clean%20lighting&width=400&height=300&seq=feature006&orientation=landscape'
}
].map((feature, index) => (
<div
key={index}
className={`${cardClasses} border rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2`}
>
<div className="relative overflow-hidden rounded-lg mb-6">
<img
src={feature.image}
alt={feature.title}
className="w-full h-48 object-cover object-top"
/>
</div>
<div className="text-center">
<div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
<i className={`fas ${feature.icon} text-white text-xl`}></i>
</div>
<h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
<p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
{feature.description}
</p>
</div>
</div>
))}
</div>
</div>
</section>
{/* About Section */}
<section id="about" className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div>
<h2 className="text-4xl font-bold mb-6">About Dynamic QR</h2>
<p className={`text-lg mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
We are revolutionizing how businesses use QR codes by making them dynamic, trackable, and incredibly powerful. Our platform serves over 10,000 businesses worldwide.
</p>
<div className="space-y-4">
<div className="flex items-center space-x-3">
<div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
<i className="fas fa-check text-white text-sm"></i>
</div>
<span className="text-lg">99.9% uptime guarantee</span>
</div>
<div className="flex items-center space-x-3">
<div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
<i className="fas fa-check text-white text-sm"></i>
</div>
<span className="text-lg">24/7 customer support</span>
</div>
<div className="flex items-center space-x-3">
<div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
<i className="fas fa-check text-white text-sm"></i>
</div>
<span className="text-lg">Enterprise-grade security</span>
</div>
</div>
</div>
<div className="relative">
<img
src="https://readdy.ai/api/search-image?query=modern%20business%20team%20working%20with%20technology%20QR%20codes%20digital%20marketing%20professional%20office%20environment%20clean%20bright%20lighting&width=600&height=400&seq=about001&orientation=landscape"
alt="About Us"
className="rounded-xl shadow-2xl w-full h-96 object-cover object-top"
/>
</div>
</div>
</div>
</section>
{/* Feedback Section */}
<section id="feedback" className="py-20">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-4xl font-bold mb-6">Share Your Experience</h2>
<p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
We value your feedback and testimonials
</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
{/* Testimonials */}
<div className={`${cardClasses} border rounded-xl p-8`}>
<h3 className="text-2xl font-semibold mb-6">What Our Users Say</h3>
<div className="relative">
<div className="transition-all duration-500 ease-in-out">
<div className="flex items-center space-x-4 mb-6">
<img
src={testimonials[currentTestimonial].avatar}
alt={testimonials[currentTestimonial].name}
className="w-16 h-16 rounded-full object-cover"
/>
<div>
<h4 className="font-semibold text-lg">{testimonials[currentTestimonial].name}</h4>
<p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
{testimonials[currentTestimonial].role}
</p>
</div>
</div>
<div className="flex mb-4">
{[...Array(5)].map((_, i) => (
<i
key={i}
className={`fas fa-star ${
i < testimonials[currentTestimonial].rating ? 'text-yellow-500' : 'text-gray-300'
}`}
></i>
))}
</div>
<p className={`text-lg italic ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
"{testimonials[currentTestimonial].message}"
</p>
</div>
<div className="flex justify-center mt-8 space-x-2">
{testimonials.map((_, index) => (
<button
key={index}
onClick={() => setCurrentTestimonial(index)}
className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300'
}`}
/>
))}
</div>
</div>
</div>
{/* Feedback Form */}
<div className={`${cardClasses} border rounded-xl p-8`}>
<h3 className="text-2xl font-semibold mb-6">Send Us Your Feedback</h3>
<form onSubmit={handleFeedbackSubmit} className="space-y-6">
<div>
<label className="block text-sm font-medium mb-2">
Email Address
</label>
<input
type="email"
value={feedbackEmail}
onChange={(e) => setFeedbackEmail(e.target.value)}
className={`w-full px-4 py-3 border rounded-lg ${inputClasses} text-sm`}
placeholder="Enter your email"
required
/>
</div>
<div>
<label className="block text-sm font-medium mb-2">
Your Feedback
</label>
<textarea
value={feedbackMessage}
onChange={(e) => setFeedbackMessage(e.target.value)}
rows={4}
className={`w-full px-4 py-3 border rounded-lg ${inputClasses} text-sm resize-none`}
placeholder="Tell us about your experience..."
required
/>
<div className={`text-right text-sm mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
{feedbackMessage.length}/500
</div>
</div>
<div>
<label className="block text-sm font-medium mb-2">
Rate Your Experience
</label>
<div className="flex space-x-1">
{[1, 2, 3, 4, 5].map((star) => (
<button
key={star}
type="button"
onClick={() => setFeedbackRating(star)}
className={`text-2xl transition-colors cursor-pointer ${
star <= feedbackRating ? 'text-yellow-500' : 'text-gray-300'
}`}
>
<i className="fas fa-star"></i>
</button>
))}
</div>
</div>
<button
type="submit"
className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors !rounded-button whitespace-nowrap cursor-pointer font-semibold"
>
Submit Feedback
</button>
</form>
</div>
</div>
</div>
</section>
{/* Contact Section */}
<section id="contact" className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
<p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
Ready to get started? Contact us today
</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
<div className="text-center">
<div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
<i className="fas fa-envelope text-white text-xl"></i>
</div>
<h3 className="text-lg font-semibold mb-2">Email</h3>
<p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
support@dynamicqr.com
</p>
</div>
<div className="text-center">
<div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
<i className="fas fa-phone text-white text-xl"></i>
</div>
<h3 className="text-lg font-semibold mb-2">Phone</h3>
<p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
+1 (555) 123-4567
</p>
</div>
<div className="text-center">
<div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
<i className="fas fa-map-marker-alt text-white text-xl"></i>
</div>
<h3 className="text-lg font-semibold mb-2">Address</h3>
<p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
123 Tech Street, San Francisco, CA
</p>
</div>
<div className="text-center">
<div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
<i className="fas fa-clock text-white text-xl"></i>
</div>
<h3 className="text-lg font-semibold mb-2">Hours</h3>
<p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
24/7 Support Available
</p>
</div>
</div>
</div>
</section>
{/* Footer */}
<footer className={`${cardClasses} border-t py-12`}>
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
<div>
<div className="flex items-center space-x-2 mb-4">
<i className="fas fa-qrcode text-2xl text-blue-600"></i>
<h3 className="text-xl font-bold">Dynamic QR</h3>
</div>
<p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
The most powerful QR code platform for modern businesses.
</p>
<div className="flex space-x-4">
<i className="fab fa-facebook text-blue-600 text-xl cursor-pointer hover:text-blue-700"></i>
<i className="fab fa-twitter text-blue-600 text-xl cursor-pointer hover:text-blue-700"></i>
<i className="fab fa-linkedin text-blue-600 text-xl cursor-pointer hover:text-blue-700"></i>
<i className="fab fa-instagram text-blue-600 text-xl cursor-pointer hover:text-blue-700"></i>
</div>
</div>
<div>
<h4 className="font-semibold mb-4">Product</h4>
<ul className="space-y-2">
<li><a href="#" className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors cursor-pointer`}>Features</a></li>
<li><a href="#" className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors cursor-pointer`}>Pricing</a></li>
<li><a href="#" className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors cursor-pointer`}>API</a></li>
<li><a href="#" className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors cursor-pointer`}>Documentation</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold mb-4">Company</h4>
<ul className="space-y-2">
<li><a href="#" className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors cursor-pointer`}>About</a></li>
<li><a href="#" className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors cursor-pointer`}>Blog</a></li>
<li><a href="#" className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors cursor-pointer`}>Careers</a></li>
<li><a href="#" className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors cursor-pointer`}>Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold mb-4">Support</h4>
<ul className="space-y-2">
<li><a href="#" className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors cursor-pointer`}>Help Center</a></li>
<li><a href="#" className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors cursor-pointer`}>Privacy Policy</a></li>
<li><a href="#" className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors cursor-pointer`}>Terms of Service</a></li>
<li><a href="#" className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors cursor-pointer`}>Status</a></li>
</ul>
</div>
</div>
<div className="border-t border-gray-200 mt-8 pt-8 text-center">
<p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
© 2025 Dynamic QR. All rights reserved.
</p>
</div>
</div>
</footer>
{/* Chatbot */}
<div className="fixed bottom-6 right-6 z-50">
{showChatbot && (
<div className={`${cardClasses} border rounded-xl shadow-2xl w-80 h-96 mb-4 flex flex-col`}>
<div className="flex items-center justify-between p-4 border-b">
<h3 className="font-semibold">Chat Support</h3>
<button
onClick={() => setShowChatbot(false)}
className="text-gray-500 hover:text-gray-700 cursor-pointer"
>
<i className="fas fa-times"></i>
</button>
</div>
<div className="flex-1 overflow-y-auto p-4 space-y-4">
{chatMessages.map((message, index) => (
<div
key={index}
className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
>
<div
className={`max-w-xs px-4 py-2 rounded-lg ${
message.type === 'user'
? 'bg-blue-600 text-white'
: isDarkMode
? 'bg-gray-700 text-white'
: 'bg-gray-100 text-gray-900'
}`}
>
{message.message}
</div>
</div>
))}
</div>
<form onSubmit={handleChatSubmit} className="p-4 border-t">
<div className="flex space-x-2">
<input
type="text"
value={chatInput}
onChange={(e) => setChatInput(e.target.value)}
className={`flex-1 px-3 py-2 border rounded-lg ${inputClasses} text-sm`}
placeholder="Type your message..."
/>
<button
type="submit"
className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors !rounded-button whitespace-nowrap cursor-pointer"
>
<i className="fas fa-paper-plane"></i>
</button>
</div>
</form>
</div>
)}
<button
onClick={() => setShowChatbot(!showChatbot)}
className="w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors cursor-pointer flex items-center justify-center"
>
<i className={`fas ${showChatbot ? 'fa-times' : 'fa-comments'} text-xl`}></i>
</button>
</div>
</div>
);
};
export default App