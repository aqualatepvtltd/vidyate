import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';

const CertificationTest: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const location = useLocation();
  const [testLink, setTestLink] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Get test link from navigation state or use default
    const state = location.state as { testLink?: string } | null;
    if (state?.testLink) {
      setTestLink(state.testLink);
    }
    setIsLoading(false);
  }, [location.state]);

  const instructions = [
    'Read all questions carefully before answering',
    'Each question carries equal marks',
    'You will have limited time to complete the test',
    'Submit your response at the end to get your certificate',
    'Ensure you provide a valid email address for certificate delivery',
    'You can only attempt the test once'
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--bg-color)]">
        <div className="w-12 h-12 border-4 border-[#405cff] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--bg-color)] to-[var(--bg-secondary)]">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-12">
        {/* Header */}
        <div className="mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-2" style={{ color: 'var(--text-main)' }}>
            Certification <span className="text-[#405cff]">Test</span>
          </h1>
          <p className="text-sm opacity-60" style={{ color: 'var(--text-main)' }}>
            Course ID: {courseId}
          </p>
        </div>

        {/* Instructions Section */}
        <div className="mb-8 md:mb-12">
          <div className="p-6 md:p-8 rounded-2xl glass border" style={{ borderColor: 'var(--glass-border)', backgroundColor: 'var(--glass-bg)' }}>
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-[#405cff]/20">
                  <span className="material-symbols-rounded text-lg text-[#405cff]">rule</span>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-black mb-4" style={{ color: 'var(--text-main)' }}>
                  Test Instructions
                </h2>
                <ul className="space-y-3">
                  {instructions.map((instruction, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm md:text-base opacity-70" style={{ color: 'var(--text-main)' }}>
                      <span className="material-symbols-rounded text-lg text-[#405cff] flex-shrink-0 mt-0.5">check_circle</span>
                      <span>{instruction}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Warning Box */}
            <div className="mt-6 p-4 rounded-lg bg-amber-500/10 border border-amber-500/30">
              <div className="flex items-start gap-3">
                <span className="material-symbols-rounded text-xl text-amber-500 flex-shrink-0">warning</span>
                <div>
                  <h4 className="font-black text-amber-600 dark:text-amber-400 mb-1">Important</h4>
                  <p className="text-sm opacity-80" style={{ color: 'var(--text-main)' }}>
                    Please ensure you have enough time and a stable internet connection before starting the test. Once you begin, you cannot pause or resume.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Test Iframe Section */}
        <div className="mb-8 md:mb-12">
          <div className="p-0 md:p-0 rounded-2xl glass border" style={{ borderColor: 'var(--glass-border)', backgroundColor: 'var(--glass-bg)' }}>
            

            {testLink ? (
              <div className="w-full h-screen md:h-[800px] rounded-xl overflow-hidden border" style={{ borderColor: 'var(--glass-border)' }}>
                <iframe
                  src={testLink}
                  style={{
                    width: '100%',
                    height: '100%',
                    border: 'none',
                    borderRadius: '0.75rem'
                  }}
                  title="Certification Test"
                  loading="lazy"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                />
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <span className="material-symbols-rounded text-6xl text-[#405cff]/30 mb-4">description</span>
                <p className="text-lg font-black opacity-60 mb-2" style={{ color: 'var(--text-main)' }}>
                  Test Form Not Available
                </p>
                <p className="text-sm opacity-40 max-w-sm" style={{ color: 'var(--text-main)' }}>
                  The test form could not be loaded. Please try again later or contact support.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Footer Info */}
        <div className="bg-gradient-to-r from-[#405cff]/10 to-[#8B5CF6]/10 rounded-2xl p-6 md:p-8 border" style={{ borderColor: 'var(--glass-border)' }}>
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <span className="material-symbols-rounded text-2xl text-[#405cff]">sentiment_satisfied</span>
            </div>
            <div>
              <h4 className="font-black mb-2" style={{ color: 'var(--text-main)' }}>
                Good Luck!
              </h4>
              <p className="text-sm opacity-70" style={{ color: 'var(--text-main)' }}>
                Complete the test with honesty and to the best of your knowledge. Your certificate will be sent to your registered email address within 24 hours of passing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificationTest;
