import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Terms: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 py-12 md:py-20 animate-subtle-fade">
      <SEO 
        title="Terms & Conditions | Vidyate Usage Policy" 
        description="Review the Terms and Conditions for using Vidyate's academic platform, resources, and services."
        keywords="Terms of Service, Usage Policy, Academic Disclaimer, Vidyate Rules, Student Agreement"
      />
      <Link to="/" className="inline-flex items-center gap-2 text-theme-muted hover:text-[#405cff] transition-all font-black text-[10px] uppercase tracking-widest mb-8">
        <span className="material-symbols-rounded text-sm">home</span>
        Back to Home
      </Link>

      <div className="glass p-8 md:p-12 rounded-2xl border" style={{ borderColor: 'var(--glass-border)' }}>
        <h1 className="text-3xl md:text-4xl font-black mb-2 tracking-tighter" style={{ color: 'var(--text-main)' }}>
          Terms and Conditions
        </h1>
        <div className="prose prose-sm md:prose-base prose-invert max-w-none" style={{ color: 'var(--text-main)' }}>
          <h3>1. Acceptance of Terms</h3>
          <p>By accessing or using the Vidyate Student Hub website (the "Service"), you agree to be bound by these Terms and Conditions ("Terms"). These Terms apply to all visitors, users, and others who access or use the Service. If you disagree with any part of the terms, then you may not access the Service.</p>

          <section>
            <h2 className="text-lg font-bold">2. Use of Resources</h2>
            <p>All academic materials, including but not limited to notes, question banks, and syllabi ("Materials"), provided on Vidyate are for your personal, non-commercial, and educational use only. These resources are intended to supplement, not replace, official course materials and academic instruction. You may not distribute, modify, transmit, reuse, download, repost, copy, or use said Materials, whether in whole or in part, for commercial purposes or for personal gain, without express advance written permission from us.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold">3. Medical and Professional Disclaimer</h2>
            <div className="p-4 rounded-md border border-red-500/30 bg-red-500/10">
              <p className="font-bold text-red-400">The information provided on Vidyate, including content related to pharmacology, drug dosages, and clinical practices, is for educational and informational purposes only. It is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of a qualified healthcare provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of something you have read on this Service.</p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold">4. Intellectual Property</h2>
            <p>The Service and its original content (excluding user-provided content), features, and functionality are and will remain the exclusive property of Vidyate and its licensors. The "Vidyate" name, logo, and all related names, logos, product and service names, designs, and slogans are trademarks of Vidyate or its affiliates or licensors. You must not use such marks without the prior written permission of Vidyate. All other names, logos, product and service names, designs, and slogans on this Website are the trademarks of their respective owners.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold">5. User Conduct</h2>
            <p>You agree not to use the Service in any way that violates any applicable federal, state, local, or international law or regulation. Additionally, you agree not to:</p>
            <ul>
              <li>Use the Service in any manner that could disable, overburden, damage, or impair the site or interfere with any other party's use of the Service.</li>
              <li>Use any robot, spider, or other automatic device, process, or means to access the Service for any purpose, including monitoring or copying any of the material on the Service.</li>
              <li>Introduce any viruses, trojan horses, worms, logic bombs, or other material that is malicious or technologically harmful.</li>
              <li>Attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of the Service, the server on which the Service is stored, or any server, computer, or database connected to the Service.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold">6. Material & Book Purchases</h2>
            <p>All purchases of academic materials or books are initiated via a `mailto` link that opens in your default email client. It is your sole responsibility to ensure the payment is made correctly to the specified UPI ID and to attach the payment screenshot as proof within the email. Orders will only be processed after manual verification of payment. We are not responsible for delays or non-delivery resulting from incorrect information provided by you or failure to provide valid payment proof.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold">7. Disclaimer of Warranties and Limitation of Liability</h2>
            <p>The Service is provided on an "AS IS" and "AS AVAILABLE" basis. Vidyate makes no representations or warranties of any kind, express or implied, as to the operation of their services, or the information, content, or materials included therein. You expressly agree that your use of these services is at your sole risk.</p>
            <p>In no event shall Vidyate, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold">8. Indemnification</h2>
            <p>You agree to defend, indemnify, and hold harmless Vidyate and its licensee and licensors, and their employees, contractors, agents, officers, and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees), resulting from or arising out of a) your use and access of the Service, or b) a breach of these Terms.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold">9. Governing Law</h2>
            <p>These Terms shall be governed and construed in accordance with the laws of India, specifically the state of Bihar, without regard to its conflict of law provisions.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold">10. Changes to Terms</h2>
            <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect by posting on this page. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold">11. Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us at <a href="mailto:vidyatestudenthub@gmail.com" className="text-[#405cff] hover:underline">vidyatestudenthub@gmail.com</a>.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;