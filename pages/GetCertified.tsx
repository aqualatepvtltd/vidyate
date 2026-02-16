import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

interface CertificationCourse {
  id: string;
  name: string;
  materialLink: string;
  testLink: string;
}

const GetCertified: React.FC = () => {
  const navigate = useNavigate();
  const [selectedCourse, setSelectedCourse] = useState<CertificationCourse | null>(null);

  // Sample certification courses - you can update these with actual course data
  const certificationCourses: CertificationCourse[] = useMemo(() => [
    {
      id: 'pharmacovigilance',
      name: 'Pharmacovigilance',
      materialLink: 'https://drive.google.com/file/d/1_MvJlV-oam8NWXHkpqlqe4aPl67X7g_S/view?usp=drive_link',
      testLink: 'https://forms.gle/X4bdtCADUiizSiTq7'
    },
    {
      id: 'ipr',
      name: 'Intellectual Property Rights (IPR)',
      materialLink: 'https://drive.google.com/file/d/1_MvJlV-oam8NWXHkpqlqe4aPl67X7g_S/view?usp=drive_link',
      testLink: 'https://forms.gle/18iveUh2RfEafTaX8'
    },
  ], []);

  const steps = [
    {
      number: 1,
      title: 'Download Course Material',
      description: 'Access comprehensive study materials and resources'
    },
    {
      number: 2,
      title: 'Attempt the Test',
      description: 'Complete the certification test to validate your knowledge'
    },
    {
      number: 3,
      title: 'Get Certified',
      description: 'Receive your certificate directly on your email'
    }
  ];

  const handleDownloadMaterial = (course: CertificationCourse) => {
    if (course.materialLink) {
      window.open(course.materialLink, '_blank', 'noopener,noreferrer');
    }
  };

  const handleAttemptTest = (course: CertificationCourse) => {
    navigate(`/certification-test/${course.id}`, { state: { testLink: course.testLink } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--bg-color)] to-[var(--bg-secondary)]">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="text-center mb-12 md:mb-16">
          <h1
            className="text-4xl md:text-5xl font-black tracking-tight mb-4"
            style={{ color: 'var(--text-main)' }}
          >
            Get <span className="text-[#405cff]">Certified</span>
          </h1>
          <p className="text-lg opacity-60 max-w-2xl mx-auto" style={{ color: 'var(--text-main)' }}>
            Complete our certification courses and showcase your expertise with official certificates
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {steps.map((step, idx) => (
            <div
              key={step.number}
              className="relative p-6 md:p-8 rounded-2xl glass border transition-all duration-300 hover:scale-95"
              style={{
                borderColor: 'var(--glass-border)',
                backgroundColor: 'var(--glass-bg)'
              }}
            >
              {/* Step Number Circle */}
              <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-[#405cff] flex items-center justify-center font-black text-white text-xl left-1/2 transform -translate-x-1/2">
                {step.number}
              </div>

              {/* Arrow between steps (visible on md and above) */}
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute -right-7 top-1/2 transform -translate-y-1/2">
                  <span className="material-symbols-rounded text-3xl text-[#405cff]">arrow_forward</span>
                </div>
              )}

              <div className="pt-4">
                <h3 className="text-xl font-black mb-2" style={{ color: 'var(--text-main)' }}>
                  {step.title}
                </h3>
                <p className="text-sm opacity-60" style={{ color: 'var(--text-main)' }}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-1 bg-gradient-to-r from-transparent via-[#405cff] to-transparent mb-12 md:mb-16 opacity-40"></div>

        {/* Available Courses */}
        <div className="mb-12">
          <h2
            className="text-3xl font-black tracking-tight mb-8"
            style={{ color: 'var(--text-main)' }}
          >
            Available Courses
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificationCourses.map((course) => (
              <div
                key={course.id}
                className="group p-6 md:p-8 rounded-2xl glass border transition-all duration-300"
                style={{
                  borderColor: 'var(--glass-border)',
                  backgroundColor: 'var(--glass-bg)'
                }}
              >
                <div className="mb-6">
                  <h3 className="text-xl font-black mb-2 group-hover:text-[#405cff] transition-colors" style={{ color: 'var(--text-main)' }}>
                    {course.name}
                  </h3>
                  <div className="flex items-center gap-2 text-sm opacity-60" style={{ color: 'var(--text-main)' }}>
                    <span className="material-symbols-rounded text-base">verified</span>
                    <span>Official Certification</span>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-3">
                  <button
                    onClick={() => handleDownloadMaterial(course)}
                    className="flex-1 px-4 py-3 rounded-xl font-black text-white transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 bg-[#405cff]"
                  >
                    <span className="material-symbols-rounded text-lg">download</span>
                    <span>Download Material</span>
                  </button>

                  <button
                    onClick={() => handleAttemptTest(course)}
                    className="flex-1 px-4 py-3 rounded-xl font-black text-white transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 bg-[#8B5CF6]"
                  >
                    <span className="material-symbols-rounded text-lg">assignment</span>
                    <span>Attempt Test</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Info Section */}
        <div className="bg-gradient-to-r from-[#405cff]/10 to-[#8B5CF6]/10 rounded-2xl p-6 md:p-8 border" style={{ borderColor: 'var(--glass-border)' }}>
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <span className="material-symbols-rounded text-3xl text-[#405cff]">info</span>
            </div>
            <div>
              <h4 className="font-black mb-2" style={{ color: 'var(--text-main)' }}>
                Certification Details
              </h4>
              <ul className="space-y-2 text-sm opacity-70" style={{ color: 'var(--text-main)' }}>
                <li>✓ Study at your own pace</li>
                <li>✓ Take the test when ready</li>
                <li>✓ Receive certificate via email upon passing</li>
                <li>✓ Share your achievement on LinkedIn and resumes</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetCertified;
