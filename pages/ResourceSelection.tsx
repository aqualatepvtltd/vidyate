
import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { COURSES } from '../data/courses';
import SEO from '../components/SEO';

const ResourceSelection: React.FC = () => {
  const { courseId, resourceId, yearId } = useParams();
  const navigate = useNavigate();
  
  const course = courseId ? COURSES[courseId] : null;
  const resource = course && resourceId ? course.resources[resourceId] : null;
  const selectedYear = resource?.years.find(y => y.id === yearId);

  if (!course || !resource) {
    return (
      <div className="p-20 text-center">
        <SEO title="Invalid Route" />
        Invalid route.
      </div>
    );
  }

  const isPaidResource = resourceId === 'notes';

  const handleDownload = (subject: any) => {
    if (isPaidResource) {
      navigate(`/${courseId}/${resourceId}/${yearId}/${subject.id}/request`);
    } else if (subject.link) {
      window.open(subject.link, '_blank');
    }
  };

  const seoTitle = selectedYear 
    ? `${resource.name} for ${selectedYear.name} - ${course.name} | Verified Resources`
    : `${resource.name} for ${course.name} | Select Academic Year`;

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-10">
      <SEO 
        title={seoTitle} 
        description={`Download high-quality ${resource.name.toLowerCase()} for ${course.name}. Select your year to access verified subjects, notes, and question papers.`}
        keywords={`${course.name} ${resource.name}, Pharmacy ${resource.name}, B.Pharm ${resource.name}, D.Pharm ${resource.name}, Academic Resources, Study Material`}
      />
      <div className="flex flex-col gap-4 mb-8">
        <nav className="flex items-center flex-wrap gap-2 text-[9px] font-bold uppercase tracking-widest opacity-40" style={{ color: 'var(--text-main)' }}>
          <Link to={`/${courseId}`} className="hover:text-[#405cff] transition-colors">{course.name}</Link>
          <span className="material-symbols-rounded text-[10px]">chevron_right</span>
          <span className="opacity-60">{resource.name}</span>
        </nav>
        <h1 className="text-2xl md:text-4xl font-black" style={{ color: 'var(--text-main)' }}>{resource.name}</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Year Sidebar / Horizontal Selector */}
        <div className="lg:col-span-1">
          <h3 className="text-[9px] font-black text-theme-muted uppercase tracking-[0.2em] px-1 mb-3">Academic Year</h3>
          
          {/* Desktop Sidebar (visible on lg+) */}
          <div className="hidden lg:flex flex-col gap-2">
            {resource.years.map((year) => (
              <button
                key={year.id}
                onClick={() => navigate(`/${courseId}/${resourceId}/${year.id}`)}
                className={`w-full text-left p-3.5 rounded-xl transition-all flex items-center justify-between group border ${
                  yearId === year.id 
                    ? 'bg-[#405cff]/10 border-[#405cff] text-[#405cff] shadow-sm' 
                    : 'glass border-transparent hover:border-white/10'
                }`}
                style={{ color: yearId === year.id ? '#405cff' : 'var(--text-main)' }}
              >
                <span className="font-bold text-xs">{year.name}</span>
                <span className={`material-symbols-rounded text-sm transition-transform ${yearId === year.id ? 'translate-x-0.5 opacity-100' : 'opacity-0'}`}>chevron_right</span>
              </button>
            ))}
          </div>

          {/* Mobile Horizontal Selector */}
          <div className="flex lg:hidden overflow-x-auto pb-3 gap-2 no-scrollbar snap-x">
            {resource.years.map((year) => (
              <button
                key={year.id}
                onClick={() => navigate(`/${courseId}/${resourceId}/${year.id}`)}
                className={`flex-shrink-0 px-5 py-2.5 rounded-xl font-bold text-xs snap-start transition-all border ${
                  yearId === year.id 
                    ? 'bg-[#405cff] text-white border-[#405cff] shadow-md' 
                    : 'glass border-white/5'
                }`}
                style={{ color: yearId === year.id ? '#ffffff' : 'var(--text-main)' }}
              >
                {year.name}
              </button>
            ))}
          </div>
        </div>

        {/* Subject List */}
        <div className="lg:col-span-3">
          {selectedYear ? (
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between px-1 gap-3">
                <h2 className="text-xl md:text-2xl font-black" style={{ color: 'var(--text-main)' }}>{selectedYear.name} Subjects</h2>
                <span className="text-[9px] uppercase font-black tracking-widest opacity-30" style={{ color: 'var(--text-main)' }}>{selectedYear.subjects.length} Found</span>
              </div>
              
              <div className="grid gap-3.5">
                {selectedYear.subjects.map((subject) => (
                  <div 
                    key={subject.id}
                    className="glass p-4 md:p-6 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-4 hover:shadow-lg transition-all border border-transparent hover:border-[#405cff]/20 group"
                  >
                    <div className="flex-grow">
                      <div className="flex items-center flex-wrap gap-2 mb-2">
                        <h4 className="text-base md:text-lg font-black transition-colors" style={{ color: 'var(--text-main)' }}>{subject.name}</h4>
                        {subject.verified && (
                          <span className="bg-[#10B981]/10 text-[#10B981] text-[8px] font-black uppercase px-2 py-0.5 rounded border border-[#10B981]/20">
                            Verified
                          </span>
                        )}
                        {!isPaidResource && (
                          <span className="bg-[#405cff]/10 text-[#405cff] text-[8px] font-black uppercase px-2 py-0.5 rounded border border-[#405cff]/20">
                            Free
                          </span>
                        )}
                      </div>
                      <p className="text-theme-muted text-xs max-w-lg leading-relaxed font-medium">
                        {subject.description || `Verified ${resource.name.toLowerCase()} for academic success.`}
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-2.5 w-full md:w-auto">
                      <button 
                        onClick={() => handleDownload(subject)}
                        className={`w-full md:w-auto px-8 h-11 rounded-xl text-white font-black text-xs hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 active:scale-95 shadow-md ${
                          isPaidResource ? 'bg-[#10B981]' : 'bg-[#405cff]'
                        }`}
                      >
                        {isPaidResource ? 'Buy Material' : 'Download Now'}
                        <span className="material-symbols-rounded text-sm">
                          {isPaidResource ? 'shopping_cart' : 'download'}
                        </span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="h-48 glass rounded-2xl border border-dashed flex flex-col items-center justify-center px-6 text-center" style={{ borderColor: 'var(--glass-border)' }}>
              <span className="material-symbols-rounded text-4xl mb-3 opacity-20" style={{ color: 'var(--text-main)' }}>ads_click</span>
              <p className="font-bold opacity-30 text-xs" style={{ color: 'var(--text-main)' }}>Select an academic year above to explore verified subjects.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResourceSelection;
