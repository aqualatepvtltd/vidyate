import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { COURSES_DATA } from '../constants';

const SubjectsPage: React.FC = () => {
  const { courseName, resourceType, year } = useParams<{ courseName: string; resourceType: string; year: string }>();

  if (!courseName || !resourceType || !year || !COURSES_DATA[courseName]?.resources[resourceType]?.years[year]) {
    return <div className="text-center py-20 text-red-500">Could not find resources for the specified path.</div>;
  }

  const yearData = COURSES_DATA[courseName].resources[resourceType].years[year];
  const courseData = COURSES_DATA[courseName];
  const resourceData = courseData.resources[resourceType];

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="hover:text-orange-400">Home</Link> &gt; 
        <Link to={`/course/${courseName}`} className="hover:text-orange-400"> {courseData.name}</Link> &gt; 
        <Link to={`/course/${courseName}/${resourceType}`} className="hover:text-orange-400"> {resourceData.name}</Link>
      </div>
      <h1 className="text-4xl font-bold mb-2 text-orange-400">{yearData.name} - {resourceData.name}</h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">Click on a subject to access the materials.</p>

      <div className="bg-white dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 rounded-lg shadow-lg">
        <ul className="divide-y divide-gray-200 dark:divide-slate-700">
          {yearData.subjects.map((subject, index) => (
            <li key={index}>
              <a
                href={subject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-6 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors duration-300"
              >
                <span className="text-lg text-slate-900 dark:text-white font-medium">{subject.name}</span>
                <span className="material-symbols-outlined text-blue-400">open_in_new</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SubjectsPage;