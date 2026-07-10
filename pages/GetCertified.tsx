import React, { useState, useMemo } from 'react';
import { useNavigate, Link } from 'react-router-dom';

interface CertificationCourse {
  id: string;
  name: string;
  materialLink: string;
  testLink: string;
  quiz?: boolean;
  isPaid?: boolean;
}

const GetCertified: React.FC = () => {
  const navigate = useNavigate();
  const [selectedCourse, setSelectedCourse] = useState<CertificationCourse | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState<'advance' | 'basic' | 'quiz'>('advance');

  const filters = [
    { id: 'advance', label: 'Advance', color: '#10B981' },
    { id: 'basic', label: 'Basic', color: '#0088ff' },
    { id: 'quiz', label: 'Quiz', color: '#FF6B6B' },
  ];

  // Sample certification courses - you can update these with actual course data
  const certificationCourses: CertificationCourse[] = useMemo(() => [
    {
      id: 'pharmaceutical-quality-assurance-masterclass',
      name: 'Pharmaceutical Quality Assurance Masterclass GMP, Validation, and Executive Skills',
      materialLink: 'https://drive.google.com/drive/folders/1ykrG0jFdMvRJ8r4sJ2xdtr-FKiZkX5tA?usp=drive_link',
      testLink: 'https://forms.gle/guK5eFywtFd9mCQx7',
      isPaid: true,
    },
    {
      id: 'pharma-quality-control-analyst-accelerator',
      name: 'Pharma quality control Analyst Accelerator Core Lab Skills & Compliance',
      materialLink: 'https://drive.google.com/drive/folders/1_uiCnF6VgO5CFIQi0d9Q-nxgFlHokjlZ?usp=drive_link',
      testLink: 'https://forms.gle/VQp73Mm3cLXtNapCA',
      isPaid: true,
    },
    {
      id: 'clinical-data-analyst-masterclass',
      name: 'Clinical Data Analyst Masterclass Mastering Bioinformatics, Patient Outcomes, and Statistical Modeling in Pharmacy Research',
      materialLink: 'https://drive.google.com/drive/folders/1gBS2QqVJDYgpdSO4Kcj5zdcsBkaV5P2b?usp=drive_link',
      testLink: 'https://forms.gle/6cvYFMVF16MZsbik6',
      isPaid: true,
    },
    {
      id: 'next-generation-pharmacovigilance',
      name: 'Next-Generation Pharmacovigilance: AI, Automation, and Global Drug Safety',
      materialLink: 'https://drive.google.com/drive/folders/1kwlcZV9ZTkGOIWuJ4X8SWn7PJ2GwZRfJ?usp=drive_link',
      testLink: 'https://forms.gle/CimeeGkYENSsMcVDA',
      isPaid: true,
    },
    {
      id: 'ai-powered-medical-writing',
      name: 'Masterclass in AI-Powered Medical Writing, Research Publication & Scientific Communication',
      materialLink: 'https://drive.google.com/drive/folders/1CZCoFBPBrWYABFsTcEWvMjxB1In5gQH9?usp=drive_link',
      testLink: 'https://forms.gle/A8wHrAHLTV4uQ4jg8',
      isPaid: true,
    },
    {
      id: 'pharmaceutical-regulatory-affairs-masterclass',
      name: 'Pharmaceutical Regulatory Affairs Masterclass Global Regulations, CTDeCTD Documentation & Regulatory Submission',
      materialLink: 'https://drive.google.com/drive/folders/1g_z53DW390rwC1-exHSCdD8tktnJFMHe?usp=drive_link',
      testLink: 'https://forms.gle/i734fY97uuWHYSdv9',
      isPaid: true,
    },
    {
      id: 'bioinformatics-excellence-program',
      name: 'Bioinformatics Excellence Program Modern Tools for Research, Biotechnology & Pharmaceutical Innovation',
      materialLink: 'https://drive.google.com/drive/folders/1iqqw50q6QShZWmggP9Pn4ma2pyP3FnjB?usp=drive_link',
      testLink: 'https://forms.gle/BQen6U3KXWwo6fqf6',
      isPaid: true,
    },
    {
      id: 'ai-driven-clinical-data-management',
      name: 'AI-Driven Clinical Data Management: Automation, Quality, and Insights',
      materialLink: 'https://drive.google.com/drive/folders/1tGrWAnTeXVvs5DKPT-r41puNpyAAmeDA?usp=drive_link',
      testLink: 'https://forms.gle/8dwyZLce7GyUdbwQA',
      isPaid: true,
    },
    {
      id: 'artificial-intelligence-pharmacovigilance',
      name: 'Artificial Intelligence in Pharmacovigilance Enhancing Drug Safety Monitoring - Basic (Ch. 1 to 5)',
      materialLink: 'https://drive.google.com/file/d/1YeE6AZpxNhEwYaNoE-Q1eoUgk4gpT99a/view?usp=drive_link',
      testLink: 'https://forms.gle/zXbWvdjMzUzmptNZ8',
      quiz: false,
    },
    {
      id: 'intelligent-dispensing-ai-pharmacy',
      name: 'Intelligent Dispensing The Role of Artificial Intelligence in Modern Pharmacy Practice - Basic (Ch. 1 to 4)',
      materialLink: 'https://drive.google.com/file/d/1i7WIqyXsn4BR86lu9PAGuhIvvGsT1WBt/view?usp=sharing',
      testLink: 'https://forms.gle/c3ieoeq6BSQjZFx58',
      quiz: false,
    },
    {
      id: 'world-hypertension-day-quiz-2026',
      name: 'World Hypertension Day Quiz 2026',
      materialLink: 'https://www.instagram.com/p/DVigIDnGZdD/',
      testLink: 'https://forms.gle/siM4yEwz9HAMTDE47',
      quiz: true
    },
    {
      id: 'pharmacovigilance',
      name: 'Pharmacovigilance',
      materialLink: 'https://drive.google.com/file/d/1_MvJlV-oam8NWXHkpqlqe4aPl67X7g_S/view?usp=drive_link',
      testLink: 'https://forms.gle/X4bdtCADUiizSiTq7'
    },
    {
      id: 'ipr',
      name: 'Intellectual Property Rights (IPR)',
      materialLink: 'https://drive.google.com/file/d/1tNBpe-Bfg_JAJJcheb-lCT4YT-HHLNAx/view?usp=drive_link',
      testLink: 'https://forms.gle/18iveUh2RfEafTaX8'
    },
    {
      id: 'bls',
      name: 'BLS & Emergency Care',
      materialLink: 'https://drive.google.com/file/d/1b7mvuUFMciexqHSpsO1I7pg5qI8g-XG8/view?usp=drive_link',
      testLink: 'https://forms.gle/tP2rShD76VfGf36r9'
    },
    {
      id: 'hplc',
      name: 'HPL Chromatography',
      materialLink: 'https://drive.google.com/file/d/19rZFmblhpbPDtOjVI1JBhzllXYg_s2HS/view?usp=drive_link',
      testLink: 'https://forms.gle/afAvnEfT4wdaGJRCA',
    },
    {
      id: 'nped-quiz-contest-2026',
      name: 'NPED Quiz Contest 2026',
      materialLink: 'https://www.instagram.com/p/DVigIDnGZdD/',
      testLink: 'https://forms.gle/JLhUCHe7mo917BV88',
      quiz: true
    },
  ], []);

  const { coursesToShow, suggestion } = useMemo(() => {
    const getCoursesByFilter = (f: typeof filter) => {
      switch (f) {
        case 'advance': return certificationCourses.filter(c => c.isPaid);
        case 'basic': return certificationCourses.filter(c => !c.isPaid && !c.quiz);
        case 'quiz': return certificationCourses.filter(c => c.quiz);
        default: return [];
      }
    };

    if (searchQuery.trim() === '') {
      return { coursesToShow: getCoursesByFilter(filter), suggestion: null };
    }

    const allMatchingCourses = certificationCourses.filter(course =>
      course.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (allMatchingCourses.length === 0) {
      return { coursesToShow: [], suggestion: { type: 'not_found' as const } };
    }

    const coursesInCurrentFilter = allMatchingCourses.filter(course => {
      const currentFilterCourses = getCoursesByFilter(filter);
      return currentFilterCourses.some(c => c.id === course.id);
    });

    if (coursesInCurrentFilter.length > 0) {
      return { coursesToShow: coursesInCurrentFilter, suggestion: null };
    }

    // If not in current filter, find which filter it belongs to
    const firstMatch = allMatchingCourses[0];
    let targetFilter: 'advance' | 'basic' | 'quiz' | null = null;
    if (firstMatch.isPaid) targetFilter = 'advance';
    else if (firstMatch.quiz) targetFilter = 'quiz';
    else if (!firstMatch.isPaid && !firstMatch.quiz) targetFilter = 'basic';

    if (targetFilter && targetFilter !== filter) {
      return { coursesToShow: [], suggestion: { type: 'switch_filter' as const, target: targetFilter } };
    }

    return { coursesToShow: [], suggestion: { type: 'not_found' as const } };
  }, [filter, certificationCourses, searchQuery]);


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
    if (course.isPaid) {
      navigate(`/paid-certification-test/${course.id}`, { state: { testLink: course.testLink } });
    } else {
      navigate(`/certification-test/${course.id}`, { state: { testLink: course.testLink } });
    }
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

          {/* Search Bar */}
          <div className="mb-8 relative">
            <input
              type="text"
              placeholder="Search for a course..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-4 pl-12 pr-12 rounded-xl glass border text-base font-medium focus:outline-none focus:ring-2 focus:ring-[#405cff]/50"
              style={{ borderColor: 'var(--glass-border)', color: 'var(--text-main)' }}
            />
            <span className="material-symbols-rounded absolute left-4 top-1/2 -translate-y-1/2 opacity-40" style={{ color: 'var(--text-main)' }}>
              search
            </span>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute top-1/2 -translate-y-1/2 opacity-30 hover:opacity-80 transition-opacity "
                aria-label="Clear search"
              >
                <span className="material-symbols-rounded absolute right-4 top-1/2 -translate-y-1/2" style={{ color: 'var(--text-main)' }}>close</span>
              </button>
            )}
          </div>

          {/* Filter Buttons */}
          <div className="flex justify-center items-center gap-2 mb-8 p-2 rounded-xl glass border" style={{ borderColor: 'var(--glass-border)' }}>
            {filters.map(f => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id as any)}
                className={`flex-1 px-4 py-2.5 rounded-lg font-black text-xs uppercase tracking-wider transition-all duration-300 ${filter === f.id
                    ? 'text-white shadow-lg' // Active state
                    : 'opacity-60 hover:opacity-100' // Inactive state
                  }`}
                style={{
                  backgroundColor: filter === f.id ? f.color : 'transparent',
                }}
              >
                {f.label}
              </button>
            ))}
          </div>


          {suggestion?.type === 'not_found' && (
            <div className="text-center py-12 glass rounded-2xl border border-dashed" style={{ borderColor: 'var(--glass-border)' }}>
              <span className="material-symbols-rounded text-5xl opacity-20 mb-4" style={{ color: 'var(--text-main)' }}>search_off</span>
              <h3 className="text-xl font-black" style={{ color: 'var(--text-main)' }}>No Courses Found</h3>
              <p className="opacity-50 mt-1" style={{ color: 'var(--text-main)' }}>Try a different search term or check other categories.</p>
            </div>
          )}

          {suggestion?.type === 'switch_filter' && (
            <div className="text-center py-12 glass rounded-2xl border" style={{ borderColor: 'var(--glass-border)' }}>
              <span className="material-symbols-rounded text-5xl opacity-20 mb-4" style={{ color: 'var(--text-main)' }}>move_item</span>
              <h3 className="text-xl font-black" style={{ color: 'var(--text-main)' }}>Course found in another category!</h3>
              <p className="opacity-50 mt-2 mb-6" style={{ color: 'var(--text-main)' }}>Click below to switch to the '{suggestion.target}' tab.</p>
              <button
                onClick={() => setFilter(suggestion.target)}
                className="px-8 py-3 rounded-xl bg-[#405cff] text-white font-black text-sm uppercase tracking-widest hover:shadow-lg active:scale-95 transition-all"
              >
                Switch to {suggestion.target}
              </button>
            </div>
          )}

          {coursesToShow.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {coursesToShow.map((course) => (
                <div
                  key={course.id}
                  className="group p-6 md:p-8 rounded-2xl glass border transition-all duration-300 animate-subtle-fade"
                  style={{
                    borderColor: 'var(--glass-border)',
                    backgroundColor: 'var(--glass-bg)'
                  }}
                >
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-black group-hover:text-[#405cff] transition-colors" style={{ color: 'var(--text-main)' }}>
                        {course.name}
                      </h3>
                      <div className="flex-shrink-0 ml-4 flex items-center gap-2">
                        {course.isPaid && (
                          <span className="px-2 py-1 bg-[#10B981] text-white text-xs font-black uppercase tracking-wider rounded-md">
                            Advance
                          </span>
                        )}
                        {!course.isPaid && course.quiz && (
                          <span className="px-2 py-1 bg-[#FF6B6B] text-white text-xs font-black uppercase tracking-wider rounded-md">
                            QUIZ
                          </span>
                        )}
                        {!course.isPaid && !course.quiz && (
                          <span className="px-2 py-1 bg-[#0088ff] text-white text-xs font-black uppercase tracking-wider rounded-md">
                            Basic
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm opacity-60" style={{ color: 'var(--text-main)' }}>
                      <span className="material-symbols-rounded text-base">verified</span>
                      <span>Official Certification</span>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row gap-3">
                    {!course.quiz && (
                      <button
                        onClick={() => handleDownloadMaterial(course)}
                        className="flex-1 px-4 py-3 rounded-xl font-black text-white transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 bg-[#405cff]"
                      >
                        <span className="material-symbols-rounded text-lg">download</span>
                        <span>Download Material</span>
                      </button>
                    )}

                    <button
                      onClick={() => handleAttemptTest(course)}
                      className={`px-4 py-3 rounded-xl font-black text-white transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 ${course.quiz ? 'flex-1 bg-[#FF6B6B]' : 'flex-1 bg-[#8B5CF6]'}`}
                    >
                      <span className="material-symbols-rounded text-lg">assignment</span>
                      <span>{course.quiz ? 'Join Quiz' : 'Attempt Test'}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
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
          <div className="mt-6 pt-6 border-t flex flex-col sm:flex-row items-center justify-center gap-4" style={{ borderColor: 'var(--glass-border)' }}>
            {/* <Link 
              to="/verify-certificate"
              className="px-6 py-3 rounded-xl glass border border-transparent font-bold text-xs transition-all hover:border-white/20 hover:bg-white/5 flex items-center justify-center gap-2"
              style={{ color: 'var(--text-main)' }}
            >
              <span className="material-symbols-rounded text-base">verified_user</span>
              Verify Certificate
            </Link> */}
            <a
              href="https://drive.google.com/drive/folders/1Di_q89YdmxBItvWHV21W0T7YiumnomnS?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl glass border border-transparent font-bold text-xs transition-all hover:border-white/20 hover:bg-white/5 flex items-center justify-center gap-2"
              style={{ color: 'var(--text-main)' }}
            >
              <span className="material-symbols-rounded text-base">description</span>
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetCertified;
