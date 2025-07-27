import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingPanicButton from './components/FloatingPanicButton';
import AudioModal from './components/AudioModal';
import HomePage from './pages/HomePage';
import HealthPage from './pages/HealthPage';
import EducationPage from './pages/EducationPage';
import HelpPage from './pages/HelpPage';
import LegalPage from './pages/LegalPage';
import StoriesPage from './pages/StoriesPage';
import './App.css';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-white">
          <Navbar />
          <main className="pt-16">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/health" element={<HealthPage />} />
              <Route path="/education" element={<EducationPage />} />
              <Route path="/help" element={<HelpPage />} />
              <Route path="/legal" element={<LegalPage />} />
              <Route path="/stories" element={<StoriesPage />} />
            </Routes>
          </main>
          <Footer />
          <FloatingPanicButton />
          <AudioModal />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;