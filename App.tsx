
import React, { Suspense, lazy } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';

// Lazy load pages. It's best practice to omit file extensions for bundler compatibility.
const CourseDetail = lazy(() => import('./pages/CourseDetail'));
const ResourceSelection = lazy(() => import('./pages/ResourceSelection'));
const About = lazy(() => import('./pages/About'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const RequestMaterial = lazy(() => import('./pages/RequestMaterial'));
const Contact = lazy(() => import('./pages/Contact'));
const WorkInProgress = lazy(() => import('./pages/WorkInProgress'));
const GetCertified = lazy(() => import('./pages/GetCertified'));
const CertificationTest = lazy(() => import('./pages/CertificationTest'));
const PaidTestPage = lazy(() => import('./pages/PaidTestPage'));

const App: React.FC = () => {
  // --- Maintenance Mode Flag ---
  // Set to true to show the Work in Progress page for the entire site.
  const maintenanceMode = false;

  const LoadingFallback = (
    <div className="h-screen flex items-center justify-center bg-[var(--bg-color)]">
      <div className="w-12 h-12 border-4 border-[#405cff] border-t-transparent rounded-full animate-spin"></div>
    </div>
  );

  if (maintenanceMode) {
    return (
      <Suspense fallback={LoadingFallback}>
        <WorkInProgress />
      </Suspense>
    );
  }

  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-24">
          <Suspense fallback={LoadingFallback}>
            <Routes>
              {/* Primary Static Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/get-certified" element={<GetCertified />} />
              <Route path="/certification-test/:courseId" element={<CertificationTest />} />
              <Route path="/paid-certification-test/:courseId" element={<PaidTestPage />} />

              {/* Flattened Dynamic Course & Resource Routes */}
              {/* This prevents greedy matching or index collisions in nested structures */}
              <Route path="/:courseId" element={<CourseDetail />} />
              <Route path="/:courseId/:resourceId" element={<ResourceSelection />} />
              <Route path="/:courseId/:resourceId/:yearId" element={<ResourceSelection />} />
              <Route path="/:courseId/:resourceId/:yearId/:subjectId/request" element={<RequestMaterial />} />

              {/* Fallback Catch-all */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </main>
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
      <Analytics />
    </HashRouter>
  );
};

export default App;
