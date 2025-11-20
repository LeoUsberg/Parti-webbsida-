import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About, Politics, Politicians, Program, Support, Membership, Contact, Shop, Election2026 } from './pages/GenericPages';
import { News } from './pages/News';

// Scroll to top helper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const PlaceholderPage: React.FC<{ title: string }> = ({ title }) => (
  <div className="container mx-auto px-6 py-20 text-center">
    <h1 className="text-4xl font-bold text-slate-800 mb-4">{title}</h1>
    <p className="text-slate-600">Innehåll kommer snart.</p>
  </div>
);

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/om-oss" element={<About />} />
          <Route path="/politik" element={<Politics />} />
          <Route path="/politiker" element={<Politicians />} />
          <Route path="/program" element={<Program />} />
          <Route path="/stotta" element={<Support />} />
          <Route path="/bli-medlem" element={<Membership />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/valet-2026" element={<Election2026 />} />
          <Route path="/nyheter" element={<News />} />
          
          {/* Placeholders for secondary pages to ensure navigation works without 404s */}
          <Route path="/forslag" element={<PlaceholderPage title="Förslagslåda" />} />
          <Route path="/media" element={<PlaceholderPage title="I Media" />} />
          <Route path="/organisation" element={<PlaceholderPage title="Organisation" />} />
          <Route path="/engagera" element={<PlaceholderPage title="Engagera dig" />} />
          <Route path="/valsedlar" element={<PlaceholderPage title="Valsedlar" />} />
          <Route path="/nyhetsbrev" element={<PlaceholderPage title="Nyhetsbrev" />} />
          <Route path="/arkiv" element={<PlaceholderPage title="Arkiv" />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;