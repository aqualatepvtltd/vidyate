import React from 'react';
import { Link } from 'react-router-dom';

const CareerPage: React.FC = () => {
    return (
        <div className="container mx-auto px-6 py-12">
            <div className="mb-8">
                <Link to="/" className="text-blue-400 hover:underline">&larr; Back to Home</Link>
            </div>
            <div className="max-w-2xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-4 text-orange-400">Join Our Team</h1>
                <p className="text-center text-gray-600 dark:text-gray-400 mb-10">
                    We are always looking for passionate individuals to join us on our mission to simplify education. If you believe you are a good fit, please fill out the form below.
                </p>

                <div className="bg-white dark:bg-slate-800/50 rounded-lg p-8 border border-gray-200 dark:border-slate-700 shadow-lg">
                    <form className="space-y-6" action="https://api.web3forms.com/submit" method="POST">
                        <input type="hidden" name="access_key" value="0503cb46-1236-44cd-895a-25f61aad3650" />
                        <input type="hidden" name="subject" value="New Career Application from Vidyata Website" />
                        <input type="hidden" name="from_name" value="Vidyata Careers" />


                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Full Name</label>
                            <input required type="text" id="name" name="name" className="w-full bg-gray-200 dark:bg-slate-700 border border-gray-300 dark:border-slate-600 rounded-md py-2 px-3 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500" />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                            <input required type="email" id="email" name="email" className="w-full bg-gray-200 dark:bg-slate-700 border border-gray-300 dark:border-slate-600 rounded-md py-2 px-3 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500" />
                        </div>
                        
                        <div>
                            <label htmlFor="contact_number" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Contact Number</label>
                            <input required type="tel" id="contact_number" name="contact_number" className="w-full bg-gray-200 dark:bg-slate-700 border border-gray-300 dark:border-slate-600 rounded-md py-2 px-3 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500" />
                        </div>

                        <div>
                            <label htmlFor="position" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Position You Want to Join</label>
                            <input required type="text" id="position" name="position" className="w-full bg-gray-200 dark:bg-slate-700 border border-gray-300 dark:border-slate-600 rounded-md py-2 px-3 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500" />
                        </div>

                        <div>
                            <label htmlFor="experience" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Any Experience</label>
                            <textarea required id="experience" name="experience" rows={5} className="w-full bg-gray-200 dark:bg-slate-700 border border-gray-300 dark:border-slate-600 rounded-md py-2 px-3 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"></textarea>
                        </div>

                        <button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-3 px-6 rounded-md hover:from-orange-600 hover:to-orange-700 transition-all duration-300">
                            Submit Application
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CareerPage;