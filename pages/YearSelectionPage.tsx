import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { COURSES_DATA } from '../constants';

const YearSelectionPage: React.FC = () => {
  const { courseName, resourceType } = useParams<{ courseName: string; resourceType: string }>();
  const navigate = useNavigate();

  if (!courseName || !resourceType || !COURSES_DATA[courseName]?.resources[resourceType]) {
    return <div className="text-center py-20 text-red-500">Invalid selection.</div>;
  }

  const resourceData = COURSES_DATA[courseName].resources[resourceType];
  const years = Object.entries(resourceData.years);

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="mb-8">
        <Link to={`/course/${courseName}`} className="text-blue-400 hover:underline">&larr; Back to {COURSES_DATA[courseName].name}</Link>
      </div>
      <h1 className="text-4xl font-bold mb-2 text-orange-400">{resourceData.name}</h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">Please choose the academic year.</p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {years.map(([key, year]) => (
          <div
            key={key}
            onClick={() => navigate(`/course/${courseName}/${resourceType}/${key}`)}
            className="bg-white dark:bg-slate-800 p-8 rounded-lg border border-gray-200 dark:border-slate-700 shadow-lg hover:shadow-orange-500/10 dark:hover:shadow-orange-500/20 hover:border-orange-500 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer flex items-center justify-center"
          >
            <h3 className="text-xl font-bold text-slate-900 dark:text-white text-center">{year.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YearSelectionPage;