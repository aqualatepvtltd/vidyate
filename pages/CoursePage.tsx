import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { COURSES_DATA } from '../constants';

const CoursePage: React.FC = () => {
  const { courseName } = useParams<{ courseName: string }>();
  const navigate = useNavigate();

  if (!courseName || !COURSES_DATA[courseName]) {
    return <div className="text-center py-20 text-red-500">Course not found.</div>;
  }

  const courseData = COURSES_DATA[courseName];
  const resources = Object.entries(courseData.resources);

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="mb-8">
        <Link to="/" className="text-blue-400 hover:underline">&larr; Back to Home</Link>
      </div>
      <h1 className="text-4xl font-bold mb-2 text-orange-400">{courseData.name}</h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">Select a resource type to continue.</p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {resources.map(([key, resource]) => (
          <div
            key={key}
            onClick={() => navigate(`/course/${courseName}/${key}`)}
            className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-gray-200 dark:border-slate-700 shadow-lg hover:shadow-blue-500/10 dark:hover:shadow-blue-500/20 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer flex flex-col items-center text-center"
          >
            <span className="material-symbols-outlined text-5xl text-blue-400 mb-4">{resource.icon}</span>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{resource.name}</h3>
            <p className="text-gray-600 dark:text-gray-400 flex-grow">{resource.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursePage;