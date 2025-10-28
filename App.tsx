import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CoursePage from './pages/CoursePage';
import YearSelectionPage from './pages/YearSelectionPage';
import SubjectsPage from './pages/SubjectsPage';
import Header from './components/Header';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col bg-white dark:bg-slate-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/course/:courseName" element={<CoursePage />} />
            <Route path="/course/:courseName/:resourceType" element={<YearSelectionPage />} />
            <Route path="/course/:courseName/:resourceType/:year" element={<SubjectsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;