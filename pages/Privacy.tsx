import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Privacy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 py-12 md:py-20 animate-subtle-fade">
      <SEO 
        title="Privacy Policy | Vidyate Data Protection" 
        description="Read Vidyate's Privacy Policy to understand how we collect, use, and protect your personal information and academic data."
        keywords="Privacy Policy, Data Protection, Student Data Privacy, Vidyate Terms, User Rights, Information Security"
      />
      <Link to="/" className="inline-flex items-center gap-2 text-theme-muted hover:text-[#405cff] transition-all font-black text-[10px] uppercase tracking-widest mb-8">
        <span className="material-symbols-rounded text-sm">home</span>
        Back to Home
      </Link>

      <div className="glass p-8 md:p-12 rounded-2xl border" style={{ borderColor: 'var(--glass-border)' }}>
        <h1 className="text-3xl md:text-4xl font-black mb-2 tracking-tighter" style={{ color: 'var(--text-main)' }}>
          Privacy Policy
        </h1>

        <div className="prose prose-sm md:prose-base prose-invert max-w-none" style={{ color: 'var(--text-main)' }}>
          <p>Vidyate Student Hub ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services (collectively, the "Services"). Please read this policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.</p>

          <section>
            <h2 className="text-lg font-bold">1. Information We Collect</h2>
            <p>We may collect information about you in a variety of ways. The information we may collect on the Service includes:</p>
            <h3>Personal Data</h3>
            <p>Personally identifiable information, such as your name, email address, and telephone number, that you voluntarily give to us when you subscribe to our newsletter, submit a feedback form, or request academic materials.</p>
            <h3>Derivative Data</h3>
            <p>Information our servers automatically collect when you access the Services, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the site. This is collected via Vercel Analytics and is anonymized.</p>
            <h3>Financial Data</h3>
            <p>For material or book purchases, we collect your name, shipping address, and transaction ID. Please note, we do not process or store payment card details directly. Payments are handled via a `mailto` link which opens your default email client, and payment verification is done via user-submitted screenshots.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold">2. Use of Your Information</h2>
            <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Services to:</p>
            <ul>
              <li>Provide, operate, and maintain our Services.</li>
              <li>Process your transactions and deliver requested materials or products.</li>
              <li>Send you newsletters, marketing, or promotional materials and other information that may be of interest to you. You may opt out of receiving any, or all, of these communications from us by following the unsubscribe link.</li>
              <li>Respond to your comments, questions, and provide customer service.</li>
              <li>Monitor and analyze usage and trends to improve your experience with our Services.</li>
              <li>Fulfill any other purpose for which you provide it.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold">3. Disclosure of Your Information</h2>
            <p>We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. However, we may share information we have collected about you in certain situations:</p>
            <ul>
              <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.</li>
              <li><strong>Third-Party Service Providers:</strong> We use third-party services for form submissions (Web3Forms) and analytics (Vercel Analytics). These services have their own privacy policies addressing how they use such information.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold">4. Data Security</h2>
            <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold">5. Data Retention</h2>
            <p>We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your information to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold">6. Your Data Protection Rights</h2>
            <p>Depending on your location, you may have the following rights regarding your personal data:</p>
            <ul>
              <li><strong>The right to access</strong> – You have the right to request copies of your personal data.</li>
              <li><strong>The right to rectification</strong> – You have the right to request that we correct any information you believe is inaccurate or complete information you believe is incomplete.</li>
              <li><strong>The right to erasure</strong> – You have the right to request that we erase your personal data, under certain conditions.</li>
              <li><strong>The right to restrict processing</strong> – You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>
              <li><strong>The right to object to processing</strong> – You have the right to object to our processing of your personal data, under certain conditions.</li>
              <li><strong>The right to data portability</strong> – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</li>
            </ul>
            <p>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us at our email.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold">7. Children's Privacy</h2>
            <p>Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do necessary actions.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold">8. Changes to This Privacy Policy</h2>
            <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold">9. Contact Us</h2>
            <p>If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at <a href="mailto:vidyatestudenthub@gmail.com" className="text-[#405cff] hover:underline">vidyatestudenthub@gmail.com</a>.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;