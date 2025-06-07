import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './components/home/HomePage';
import ContactForm from './components/contact/ContactForm';
import ServicesPage from './components/services/ServicesPage';
import AboutPage from './components/about/AboutPage';
import GalleryPage from './components/gallery/GalleryPage';
import LegalPage from './components/legal/LegalPage';
import NotFoundPage from './components/common/NotFoundPage';
import ScrollToTop from './components/common/ScrollToTop';
import './styles/globals.scss';

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/legal" element={<LegalPage />} />
          {/* Catch-all route for 404 page */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
