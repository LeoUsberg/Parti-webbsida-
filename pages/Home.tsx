import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Users, Heart, Shield, Newspaper, Send } from 'lucide-react';
import { NEWS, POLICIES, SLOGAN, PARTY_NAME, PARTY_ABBREVIATION } from '../constants';

export const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-slate-900 min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
            {/* Overlay with gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent z-10"></div>
            <img 
                src="https://picsum.photos/id/10/1920/1080" 
                alt="Bakgrund" 
                className="w-full h-full object-cover opacity-50"
            />
        </div>
        
        <div className="container mx-auto px-6 relative z-20 pt-20">
          <div className="max-w-3xl">
            {/* Logo/Brand Mark in Hero (Vertical) */}
            <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mb-8 shadow-2xl animate-fade-in-up">
                <span className="text-3xl font-bold text-white tracking-wider">{PARTY_ABBREVIATION}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6 tracking-tight drop-shadow-lg">
              {SLOGAN}
            </h1>
            <p className="text-xl text-slate-300 mb-10 max-w-xl leading-relaxed">
              Vi bygger ett Sverige där familjen står i centrum, där trygghet är en självklarhet och framtidstron spirar. Var med och gör skillnad idag.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => navigate('/bli-medlem')} className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white text-lg font-bold rounded-lg shadow-lg shadow-blue-600/30 transition-all transform hover:-translate-y-1">
                Bli medlem idag
              </button>
              <button onClick={() => navigate('/politik')} className="px-8 py-4 bg-white/10 backdrop-blur hover:bg-white/20 text-white border border-white/30 text-lg font-bold rounded-lg transition-all">
                Läs om vår politik
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Intro */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Vilka är {PARTY_NAME}?</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Vi är en värderingsdriven folkrörelse som tror på familjens och gemenskapens kraft. Grundat på kristdemokratiska principer om förvaltarskap och människovärde.
          </p>
        </div>
      </section>

      {/* Values - Icons */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Våra Kärnvärden</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
             <div className="text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
               <div className="w-16 h-16 mx-auto bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6">
                 <Heart size={32} />
               </div>
               <h3 className="text-xl font-bold mb-4">Människovärde</h3>
               <p className="text-slate-600">Varje människa är unik och har ett okränkbart värde. Vi skyddar de mest utsatta.</p>
             </div>
             <div className="text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
               <div className="w-16 h-16 mx-auto bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                 <Users size={32} />
               </div>
               <h3 className="text-xl font-bold mb-4">Gemenskap</h3>
               <p className="text-slate-600">Familjen och civilsamhället är grunden för ett fungerande samhälle.</p>
             </div>
             <div className="text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
               <div className="w-16 h-16 mx-auto bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-6">
                 <Shield size={32} />
               </div>
               <h3 className="text-xl font-bold mb-4">Förvaltarskap</h3>
               <p className="text-slate-600">Vi tar ansvar för ekonomi och miljö för att lämna över en bättre värld.</p>
             </div>
          </div>
        </div>
      </section>

      {/* Politics Preview */}
      <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
             <div className="flex justify-between items-end mb-12">
                 <div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">Vår Politik</h2>
                    <p className="text-slate-500">Lösningar för nutiden och framtiden</p>
                 </div>
                 <button onClick={() => navigate('/politik')} className="text-blue-600 font-semibold flex items-center gap-2 hover:underline">
                    Alla områden <ArrowRight size={16} />
                 </button>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {POLICIES.slice(0, 3).map(policy => (
                    <div key={policy.id} className="border border-slate-100 p-6 rounded-xl hover:border-blue-200 hover:shadow-lg transition-all cursor-pointer" onClick={() => navigate(`/politik`)}>
                        <div className="flex items-center gap-3 mb-4">
                            <policy.icon className="text-blue-600" size={24} />
                            <h3 className="text-xl font-bold">{policy.title}</h3>
                        </div>
                        <p className="text-slate-600 mb-4 line-clamp-3">{policy.description}</p>
                        <ul className="space-y-2">
                            {policy.points.slice(0, 2).map((point, idx) => (
                                <li key={idx} className="flex items-center gap-2 text-sm text-slate-500">
                                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
             </div>
          </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-12">
             <h2 className="text-3xl font-bold text-slate-900">Senaste Nytt</h2>
             <button onClick={() => navigate('/nyheter')} className="px-6 py-2 border border-slate-300 rounded-full hover:bg-white transition-colors text-sm font-semibold">
               Se alla nyheter
             </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {NEWS.map((news) => (
              <div key={news.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all group cursor-pointer" onClick={() => navigate('/nyheter')}>
                <div className="relative h-48 overflow-hidden">
                  <img src={news.imageUrl} alt={news.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                    {news.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-slate-400 text-sm mb-2">{news.date}</div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">{news.title}</h3>
                  <p className="text-slate-600 text-sm line-clamp-3">{news.excerpt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engage / Newsletter */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-6">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                  <h2 className="text-4xl font-bold mb-6">Din röst räknas.</h2>
                  <p className="text-blue-100 text-lg mb-8">
                      Håll dig uppdaterad om vårt arbete och vad som händer i politiken. 
                      Prenumerera på vårt nyhetsbrev för inbjudningar, analyser och nyheter direkt i inkorgen.
                  </p>
                  <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
                      <input 
                        type="email" 
                        placeholder="Din e-postadress" 
                        className="px-6 py-4 rounded-lg text-slate-900 flex-grow focus:outline-none focus:ring-2 focus:ring-white/50"
                      />
                      <button type="submit" className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2">
                          Prenumerera <Send size={18} />
                      </button>
                  </form>
              </div>
              <div className="bg-blue-700 p-8 rounded-2xl border border-blue-500">
                  <h3 className="text-2xl font-bold mb-6">Engagera dig nu</h3>
                  <div className="space-y-4">
                      <button onClick={() => navigate('/bli-medlem')} className="w-full text-left p-4 bg-blue-800 hover:bg-blue-900 rounded-xl transition-colors flex items-center justify-between group">
                          <div>
                              <div className="font-bold text-lg">Bli medlem</div>
                              <div className="text-blue-200 text-sm">Gå med i rörelsen för 100kr/år</div>
                          </div>
                          <ArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </button>
                      <button onClick={() => navigate('/stotta')} className="w-full text-left p-4 bg-blue-800 hover:bg-blue-900 rounded-xl transition-colors flex items-center justify-between group">
                          <div>
                              <div className="font-bold text-lg">Ge en gåva</div>
                              <div className="text-blue-200 text-sm">Stöd vår valfond via Swish</div>
                          </div>
                          <ArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </button>
                  </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};