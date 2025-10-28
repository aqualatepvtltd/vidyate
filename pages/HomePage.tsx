import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { COURSES_DATA } from '../constants';

const CourseCard: React.FC<{ courseKey: string; courseName: string; description: string }> = ({ courseKey, courseName, description }) => {
    const navigate = useNavigate();
    return (
        <div className="bg-white dark:bg-slate-800/50 p-6 rounded-lg border border-gray-200 dark:border-slate-700 shadow-lg hover:shadow-orange-500/10 dark:hover:shadow-orange-500/20 hover:border-orange-500 transition-all duration-300 transform hover:-translate-y-1">
            <h3 className="text-2xl font-bold text-orange-400 mb-2">{courseName}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
            <button
                onClick={() => navigate(`/course/${courseKey}`)}
                className="w-full text-center font-semibold bg-gradient-to-r from-orange-500 to-orange-600 text-white py-2 px-4 rounded-md hover:from-orange-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center"
            >
                Explore Resources <span className="material-symbols-outlined ml-2">arrow_forward</span>
            </button>
        </div>
    );
};

const TestimonialCard: React.FC<{ quote: string; name: string; course: string; avatarUrl: string }> = ({ quote, name, course, avatarUrl }) => (
    <div className="bg-gray-50 dark:bg-slate-800 p-6 rounded-lg border border-gray-200 dark:border-slate-700">
        <p className="text-gray-700 dark:text-gray-300 italic mb-4">"{quote}"</p>
        <div className="flex items-center">
            <img src={avatarUrl} alt={name} className="w-12 h-12 rounded-full mr-4 border-2 border-orange-400" />
            <div>
                <p className="font-bold text-slate-900 dark:text-white">{name}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{course}</p>
            </div>
        </div>
    </div>
);


const HomePage: React.FC = () => {
    const location = useLocation();

    useEffect(() => {
        // This effect handles scrolling when navigating from another page to a section on the homepage.
        if (location.hash) {
            const id = location.hash.substring(1); // Remove the '#'
            // Use a timeout to ensure the DOM is fully rendered before scrolling
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    }, [location]);

    const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="space-y-24 md:space-y-32 pb-24">
            {/* Hero Section */}
            <section className="pt-36 pb-10 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-slate-200/60 dark:bg-grid-slate-700/20 [mask-image:linear-gradient(to_bottom,white_5%,transparent_80%)]"></div>
                <div className="container mx-auto px-6 relative">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-orange-500 to-red-500">
                        Welcome to Vidyate
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
                        Your ultimate companion for Pharmacy studies. Access notes, syllabi, past papers, and career guidance, all in one place.
                    </p>
                    <a href="#courses" onClick={(e) => handleScrollClick(e, 'courses')} className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold py-3 px-8 rounded-full hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 inline-block">
                        Get Started
                    </a>
                </div>
            </section>
            
            {/* Why Vidyate? */}
            <section id="features" className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Why <span className="text-orange-400">Vidyate</span>?</h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">We provide a streamlined, easy-to-use platform that brings all essential academic resources right to your fingertips.</p>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-gray-100 dark:bg-slate-800 p-6 rounded-lg border border-gray-200 dark:border-slate-700">
                       <span className="material-symbols-outlined text-4xl text-blue-400 mb-4">collections_bookmark</span>
                       <h3 className="text-xl font-bold mb-2">Curated Content</h3>
                       <p className="text-gray-600 dark:text-gray-400">Expertly organized notes and resources to help you study smarter, not harder.</p>
                    </div>
                    <div className="bg-gray-100 dark:bg-slate-800 p-6 rounded-lg border border-gray-200 dark:border-slate-700">
                       <span className="material-symbols-outlined text-4xl text-blue-400 mb-4">rocket_launch</span>
                       <h3 className="text-xl font-bold mb-2">Easy Access</h3>
                       <p className="text-gray-600 dark:text-gray-400">Find what you need in just a few clicks. No more endless searching for reliable materials.</p>
                    </div>
                    <div className="bg-gray-100 dark:bg-slate-800 p-6 rounded-lg border border-gray-200 dark:border-slate-700">
                       <span className="material-symbols-outlined text-4xl text-blue-400 mb-4">groups</span>
                       <h3 className="text-xl font-bold mb-2">Career Guidance</h3>
                       <p className="text-gray-600 dark:text-gray-400">Insights and advice to help you navigate your career path after graduation.</p>
                    </div>
                </div>
            </section>

            {/* What we offer / Courses Section */}
            <section id="courses" className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What We Offer</h2>
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {Object.keys(COURSES_DATA).map(key => (
                        <CourseCard 
                            key={key} 
                            courseKey={key} 
                            courseName={COURSES_DATA[key].name} 
                            description={COURSES_DATA[key].description} 
                        />
                    ))}
                </div>
            </section>

            {/* Student Testimonials */}
            <section id="testimonials" className="container mx-auto px-6">
                 <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Student Testimonials</h2>
                 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <TestimonialCard quote="Vidyate has been a lifesaver during my exams. All the question papers in one place is just amazing!" name="Priya Sharma" course="B. Pharm, 3rd Year" avatarUrl="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png" />
                    <TestimonialCard quote="The notes are so well-structured and easy to understand. It really helped me grasp complex topics." name="Rohan Verma" course="Pharm. D, 2nd Year" avatarUrl="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png" />
                    <TestimonialCard quote="Finally, a single platform for everything I need. From syllabus to career advice, Vidyate has it all." name="Anjali Mehta" course="B. Pharm, 4th Year" avatarUrl="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png" />
                 </div>
            </section>

            {/* Feedback Section */}
            <section id="feedback" className="container mx-auto px-6">
                <div className="max-w-2xl mx-auto bg-gray-50 dark:bg-slate-800 rounded-lg p-8 border border-gray-200 dark:border-slate-700">
                    <h2 className="text-3xl font-bold text-center mb-6">Feedback</h2>
                    <p className="text-center text-gray-500 dark:text-gray-400 mb-8">We'd love to hear from you! Your feedback helps us improve.</p>
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                            <input type="text" id="name" className="w-full bg-gray-200 dark:bg-slate-700 border border-gray-300 dark:border-slate-600 rounded-md py-2 px-3 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                            <input type="email" id="email" className="w-full bg-gray-200 dark:bg-slate-700 border border-gray-300 dark:border-slate-600 rounded-md py-2 px-3 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500" />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                            <textarea id="message" rows={4} className="w-full bg-gray-200 dark:bg-slate-700 border border-gray-300 dark:border-slate-600 rounded-md py-2 px-3 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"></textarea>
                        </div>
                        <button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-3 px-6 rounded-md hover:from-orange-600 hover:to-orange-700 transition-all duration-300">
                            Submit Feedback
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
