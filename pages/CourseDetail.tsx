
import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { COURSES } from '../data/courses';
import BentoCard from '../components/BentoCard';
import SEO from '../components/SEO';

const CourseDetail: React.FC = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const course = courseId ? COURSES[courseId] : null;

  if (!course) {
    return (
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-20 text-center">
        <SEO title="Course Not Found" />
        <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-main)' }}>Course not found</h2>
        <Link to="/" className="text-[#405cff] font-bold">Return Home</Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-10">
      <SEO 
        title={course.name} 
        description={course.description} 
        keywords={`Pharmacy Course, ${course.name}, Pharmacy Notes, Academic Tracks`}
      />
      <div className="mb-10">
        <Link to="/" className="text-theme-muted hover:text-[#405cff] transition-colors flex items-center gap-2 mb-4 text-[10px] font-black uppercase tracking-widest">
          <span className="material-symbols-rounded text-sm">arrow_back</span>
          All Tracks
        </Link>
        <h1 className="text-3xl md:text-5xl font-black mb-3 md:mb-4 tracking-tight" style={{ color: 'var(--text-main)' }}>{course.name}</h1>
        <p className="text-theme-muted text-sm md:text-base max-w-xl font-medium leading-relaxed">{course.description}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {Object.values(course.resources).map((resource) => (
          <BentoCard
            key={resource.id}
            title={resource.name}
            description={`Verified collection of ${resource.name.toLowerCase()} curated for all academic years.`}
            icon={resource.icon}
            color={resource.color}
            onClick={() => navigate(`/${courseId}/${resource.id}`)}
            footer={
              <div className="flex items-center justify-between text-[9px] font-black uppercase tracking-[0.15em] opacity-40" style={{ color: 'var(--text-main)' }}>
                <span>{resource.years.length} Section</span>
                <span className="material-symbols-rounded text-sm">chevron_right</span>
              </div>
            }
          />
        ))}

        {/* Future feature teaser */}
        <div className="glass group p-6 md:p-8 rounded-2xl border border-dashed flex flex-col items-center justify-center text-center opacity-40 hover:opacity-100 transition-all cursor-not-allowed" style={{ borderColor: 'var(--glass-border)' }}>
          <span className="material-symbols-rounded text-3xl mb-3" style={{ color: 'var(--text-main)' }}>video_library</span>
          <h3 className="text-lg font-black mb-1" style={{ color: 'var(--text-main)' }}>Lectures</h3>
          <p className="text-[9px] font-bold uppercase tracking-widest opacity-50" style={{ color: 'var(--text-main)' }}>Coming Soon</p>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
