import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Search, Facebook, Instagram, Twitter, Youtube, Globe, Video } from 'lucide-react';
import { NAV_ITEMS, PARTY_NAME, PARTY_ABBREVIATION } from '../constants';

const SocialIcon = ({ icon: Icon, href }: { icon: any, href: string }) => (
  <a href={href} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-500 transition-colors">
    <Icon size={20} />
  </a>
);

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800">
      {/* Sticky Header */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-slate-200/50 ${scrolled ? 'bg-white/95 backdrop-blur shadow-md py-2' : 'bg-white py-4'}`}>
        <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <div 
            onClick={() => navigate('/')} 
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg group-hover:bg-blue-600 transition-colors">
              {PARTY_ABBREVIATION}
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-blue-700 transition-colors">
              {PARTY_NAME}
            </span>
          </div>

          {/* Desktop Primary Nav (Short) */}
          <nav className="hidden lg:flex items-center gap-8">
             {NAV_ITEMS.slice(0, 5).map((item) => (
               <NavLink 
                key={item.path} 
                to={item.path}
                className={({ isActive }) => `text-sm font-semibold tracking-wide transition-colors ${isActive ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'}`}
               >
                 {item.label}
               </NavLink>
             ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
             <button className="hidden md:flex items-center gap-2 text-slate-500 hover:text-blue-600">
               <Search size={20} />
             </button>
             
             <div className="hidden md:flex items-center gap-2 text-sm font-medium text-slate-500">
                <Globe size={16} />
                <span className="cursor-pointer hover:text-blue-600">SV</span>
                <span className="text-slate-300">|</span>
                <span className="cursor-pointer hover:text-blue-600">EN</span>
             </div>

             <button 
               onClick={() => navigate('/bli-medlem')}
               className="hidden sm:block px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-full transition-all shadow-sm hover:shadow-md"
             >
               Bli medlem
             </button>

             {/* Mobile Menu Toggle */}
             <button onClick={toggleMenu} className="p-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors">
               {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
             </button>
          </div>
        </div>
      </header>

      {/* Full Screen Mobile/Mega Menu */}
      <div className={`fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-in-out pt-24 pb-10 px-6 overflow-y-auto ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="container mx-auto max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-6">
              {NAV_ITEMS.map((item) => (
                <NavLink 
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) => `text-xl md:text-2xl font-bold py-2 border-b border-slate-100 hover:border-blue-200 transition-all ${isActive ? 'text-blue-600 translate-x-2' : 'text-slate-800 hover:text-blue-600 hover:translate-x-2'}`}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
            
            <div className="mt-12 pt-8 border-t border-slate-100">
              <div className="flex flex-col sm:flex-row gap-6 justify-between items-start sm:items-center">
                  <div className="flex gap-4">
                    <SocialIcon icon={Facebook} href="#" />
                    <SocialIcon icon={Instagram} href="#" />
                    <SocialIcon icon={Video} href="#" /> {/* TikTok placeholder */}
                    <SocialIcon icon={Twitter} href="#" />
                    <SocialIcon icon={Youtube} href="#" />
                  </div>
                  <div className="flex gap-4 w-full sm:w-auto">
                    <button onClick={() => navigate('/stotta')} className="flex-1 sm:flex-none px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg transition-colors">
                      Stöd oss
                    </button>
                    <button onClick={() => navigate('/bli-medlem')} className="flex-1 sm:flex-none px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors">
                      Bli medlem
                    </button>
                  </div>
              </div>
            </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow pt-[72px]">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Column 1 */}
            <div>
              <h4 className="text-white text-lg font-bold mb-6 border-l-4 border-blue-500 pl-3">Om Partiet</h4>
              <ul className="space-y-3">
                <li><NavLink to="/om-oss" className="hover:text-white transition-colors">Om oss</NavLink></li>
                <li><NavLink to="/politik" className="hover:text-white transition-colors">Vår politik</NavLink></li>
                <li><NavLink to="/program" className="hover:text-white transition-colors">Partiprogram</NavLink></li>
                <li><NavLink to="/organisation" className="hover:text-white transition-colors">Organisation</NavLink></li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h4 className="text-white text-lg font-bold mb-6 border-l-4 border-blue-500 pl-3">Engagera dig</h4>
              <ul className="space-y-3">
                <li><NavLink to="/bli-medlem" className="hover:text-white transition-colors">Bli medlem</NavLink></li>
                <li><NavLink to="/stotta" className="hover:text-white transition-colors">Stöd oss</NavLink></li>
                <li><NavLink to="/engagera" className="hover:text-white transition-colors">Kandidatanmälan</NavLink></li>
                <li><NavLink to="/forslag" className="hover:text-white transition-colors">Tipsa oss</NavLink></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h4 className="text-white text-lg font-bold mb-6 border-l-4 border-blue-500 pl-3">Media & Info</h4>
              <ul className="space-y-3">
                <li><NavLink to="/nyheter" className="hover:text-white transition-colors">Nyheter</NavLink></li>
                <li><NavLink to="/media" className="hover:text-white transition-colors">I Media</NavLink></li>
                <li><NavLink to="/arkiv" className="hover:text-white transition-colors">Dokumentarkiv</NavLink></li>
                <li><NavLink to="/valsedlar" className="hover:text-white transition-colors">Valsedlar</NavLink></li>
              </ul>
            </div>

            {/* Column 4 */}
            <div>
              <h4 className="text-white text-lg font-bold mb-6 border-l-4 border-blue-500 pl-3">Kontakt</h4>
              <p className="mb-4">
                {PARTY_NAME}<br/>
                Storgatan 1<br/>
                111 22 Stockholm
              </p>
              <p className="mb-4">
                <a href="mailto:info@kfp.se" className="hover:text-white">info@kfp.se</a>
              </p>
              <div className="flex gap-4 mt-6">
                <SocialIcon icon={Facebook} href="#" />
                <SocialIcon icon={Twitter} href="#" />
                <SocialIcon icon={Instagram} href="#" />
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <p>&copy; {new Date().getFullYear()} {PARTY_NAME}. Alla rättigheter förbehållna.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white">Integritetspolicy</a>
              <a href="#" className="hover:text-white">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};