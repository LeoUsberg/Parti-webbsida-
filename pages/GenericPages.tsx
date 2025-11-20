import React from 'react';
import { POLITICIANS, POLICIES, PRODUCTS, PARTY_NAME, PARTY_ABBREVIATION } from '../constants';
import { Mail, Phone, MapPin, User, Download, DollarSign, ShoppingBag } from 'lucide-react';

const PageHeader: React.FC<{ title: string, subtitle?: string }> = ({ title, subtitle }) => (
  <div className="bg-slate-100 py-16">
    <div className="container mx-auto px-6 text-center">
      <h1 className="text-4xl font-extrabold text-slate-900 mb-4">{title}</h1>
      {subtitle && <p className="text-xl text-slate-600 max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  </div>
);

export const About: React.FC = () => (
  <div>
    <PageHeader title="Om Oss" subtitle="Partiet som sätter familjen och de mjuka värdena främst." />
    <div className="container mx-auto px-6 py-12 max-w-3xl">
      <div className="prose prose-lg prose-slate">
        <h3>Vår Historia</h3>
        <p>{PARTY_NAME} ({PARTY_ABBREVIATION}) grundades för att ge en röst åt de som tror att samhället byggs underifrån, av familjer, föreningar och gemenskaper. Vi såg ett behov av en politik som balanserar frihet med ansvar.</p>
        <h3>Vision och Mål</h3>
        <p>Vår vision är ett samhälle där varje människa ses, där barn får växa upp i trygghet och där de äldre möts med värdighet och respekt.</p>
        <h3>Varför vi behövs</h3>
        <p>I en tid av snabba förändringar står vi fast vid de värden som burit samhället i generationer. Vi är den trygga rösten för framtiden.</p>
      </div>
    </div>
  </div>
);

export const Politics: React.FC = () => (
  <div>
    <PageHeader title="Vår Politik" subtitle="Lösningar för ett medmänskligare samhälle." />
    <div className="container mx-auto px-6 py-12">
      <div className="grid gap-8 md:grid-cols-2">
        {POLICIES.map(policy => (
          <div key={policy.id} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
             <div className="flex items-center gap-4 mb-6">
               <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                 <policy.icon size={28} />
               </div>
               <h2 className="text-2xl font-bold">{policy.title}</h2>
             </div>
             <p className="text-slate-600 mb-6">{policy.description}</p>
             <ul className="space-y-3 mb-6">
               {policy.points.map((pt, i) => (
                 <li key={i} className="flex items-start gap-3 text-slate-700">
                    <span className="mt-1.5 w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" />
                    {pt}
                 </li>
               ))}
             </ul>
             <button className="text-blue-600 font-semibold hover:underline">Läs hela programmet &rarr;</button>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const Politicians: React.FC = () => (
  <div>
    <PageHeader title="Våra Företrädare" subtitle="Vi som arbetar för din vardag." />
    <div className="container mx-auto px-6 py-12">
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {POLITICIANS.map(p => (
            <div key={p.id} className="bg-white rounded-xl overflow-hidden shadow-lg border border-slate-100">
               <img src={p.imageUrl} alt={p.name} className="w-full h-64 object-cover" />
               <div className="p-6">
                 <h3 className="text-xl font-bold text-slate-900">{p.name}</h3>
                 <div className="text-blue-600 font-medium mb-2">{p.role}</div>
                 <div className="flex items-center gap-2 text-slate-500 text-sm mb-4">
                    <MapPin size={14} /> {p.municipality}
                 </div>
                 <blockquote className="italic text-slate-600 border-l-2 border-blue-200 pl-3 mb-4">"{p.quote}"</blockquote>
                 <a href={`mailto:${p.email}`} className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800">
                   <Mail size={16} /> Kontakta
                 </a>
               </div>
            </div>
          ))}
       </div>
    </div>
  </div>
);

export const Program: React.FC = () => (
  <div>
    <PageHeader title="Partiprogram" subtitle="Vår kompass för Sverige." />
    <div className="container mx-auto px-6 py-12 max-w-4xl">
       <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between mb-12">
          <div>
             <h3 className="text-xl font-bold mb-2">Ladda ner hela programmet</h3>
             <p className="text-slate-600">Läs vår politik i detalj (PDF, 2.5 MB)</p>
          </div>
          <button className="mt-4 md:mt-0 px-6 py-3 bg-blue-600 text-white font-bold rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors">
             <Download size={20} /> Ladda ner PDF
          </button>
       </div>
       
       <div className="space-y-8">
          <h2 className="text-2xl font-bold border-b pb-4">Kortversion</h2>
          <div className="space-y-4">
             <details className="group p-4 bg-white rounded-lg shadow-sm border border-slate-100 cursor-pointer">
                <summary className="font-bold text-lg list-none flex justify-between items-center">
                   Kapitel 1: Familj och Uppväxt
                   <span className="transition group-open:rotate-180">▼</span>
                </summary>
                <p className="mt-4 text-slate-600">Familjen är samhällets grund. Vi vill se ökad valfrihet i föräldraförsäkringen och stärkt stöd till barnfamiljer...</p>
             </details>
             <details className="group p-4 bg-white rounded-lg shadow-sm border border-slate-100 cursor-pointer">
                <summary className="font-bold text-lg list-none flex justify-between items-center">
                   Kapitel 2: Vård och Omsorg
                   <span className="transition group-open:rotate-180">▼</span>
                </summary>
                <p className="mt-4 text-slate-600">Vården ska finnas där när du behöver den. Vi satsar på fast läkarkontakt och en värdig äldreomsorg...</p>
             </details>
          </div>
       </div>
    </div>
  </div>
);

export const Support: React.FC = () => (
  <div>
    <PageHeader title="Stötta oss" subtitle="Ditt bidrag gör skillnad för demokratin." />
    <div className="container mx-auto px-6 py-12">
       <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-orange-500">
             <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <DollarSign className="text-orange-500" /> Donera via Swish
             </h2>
             <div className="text-center py-8 bg-slate-50 rounded-xl mb-6">
                <div className="text-sm text-slate-500 uppercase tracking-widest mb-2">Swish-nummer</div>
                <div className="text-4xl font-black text-slate-900">123 456 78 90</div>
             </div>
             <p className="text-slate-600 mb-4">Märk betalningen med "Gåva {PARTY_ABBREVIATION}".</p>
             <h3 className="font-bold mt-6 mb-2">Bankgiro</h3>
             <p className="font-mono bg-slate-100 p-2 rounded inline-block">5555-1234</p>
          </div>
          <div>
             <h2 className="text-2xl font-bold mb-4">Hur används pengarna?</h2>
             <p className="text-slate-600 mb-4">Som ett oberoende parti är vi helt beroende av medlemsavgifter och donationer från privatpersoner. Ditt bidrag går till:</p>
             <ul className="list-disc list-inside space-y-2 text-slate-700 mb-8">
                <li>Informationsspridning och kampanjer</li>
                <li>Stöd till våra lokala avdelningar</li>
                <li>Utbildning av förtroendevalda</li>
                <li>Att nå ut till fler väljare</li>
             </ul>
             <button className="w-full py-4 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800">
                Bli månadsgivare (Autogiro)
             </button>
          </div>
       </div>
    </div>
  </div>
);

export const Membership: React.FC = () => (
  <div className="min-h-screen bg-slate-50">
    <div className="container mx-auto px-6 py-12 max-w-2xl">
       <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl">
          <h1 className="text-3xl font-bold mb-2 text-center">Bli medlem i {PARTY_NAME}</h1>
          <p className="text-center text-slate-600 mb-8">Var med och påverka Sveriges framtid. Medlemskap kostar 100 kr/år.</p>
          
          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Tack för din ansökan!"); }}>
             <div className="grid grid-cols-2 gap-4">
               <div>
                  <label className="block text-sm font-bold mb-1">Förnamn</label>
                  <input type="text" className="w-full p-3 border rounded-lg" required />
               </div>
               <div>
                  <label className="block text-sm font-bold mb-1">Efternamn</label>
                  <input type="text" className="w-full p-3 border rounded-lg" required />
               </div>
             </div>
             <div>
                  <label className="block text-sm font-bold mb-1">Personnummer</label>
                  <input type="text" placeholder="ÅÅÅÅMMDD-XXXX" className="w-full p-3 border rounded-lg" required />
             </div>
             <div>
                  <label className="block text-sm font-bold mb-1">E-post</label>
                  <input type="email" className="w-full p-3 border rounded-lg" required />
             </div>
             <div>
                  <label className="block text-sm font-bold mb-1">Telefon</label>
                  <input type="tel" className="w-full p-3 border rounded-lg" />
             </div>
             <div className="flex items-center gap-3 pt-4">
                <input type="checkbox" id="consent" className="w-5 h-5 text-blue-600" required />
                <label htmlFor="consent" className="text-sm text-slate-600">Jag godkänner att {PARTY_ABBREVIATION} behandlar mina personuppgifter.</label>
             </div>
             <button type="submit" className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors text-lg">
                Bli medlem nu
             </button>
          </form>
       </div>
    </div>
  </div>
);

export const Contact: React.FC = () => (
  <div>
    <PageHeader title="Kontakta Oss" subtitle="Vi vill gärna höra från dig." />
    <div className="container mx-auto px-6 py-12">
       <div className="grid md:grid-cols-2 gap-12">
          <div>
             <h2 className="text-2xl font-bold mb-6">Kontaktuppgifter</h2>
             <div className="space-y-6">
                <div className="flex items-start gap-4">
                   <MapPin className="text-blue-600 mt-1" />
                   <div>
                      <div className="font-bold">Postadress</div>
                      <p className="text-slate-600">{PARTY_NAME}<br/>Box 123<br/>111 22 Stockholm</p>
                   </div>
                </div>
                <div className="flex items-start gap-4">
                   <Mail className="text-blue-600 mt-1" />
                   <div>
                      <div className="font-bold">E-post</div>
                      <p className="text-slate-600">info@kfp.se</p>
                      <p className="text-slate-600">press@kfp.se</p>
                   </div>
                </div>
                <div className="flex items-start gap-4">
                   <Phone className="text-blue-600 mt-1" />
                   <div>
                      <div className="font-bold">Telefon</div>
                      <p className="text-slate-600">08-123 45 67 (Vardagar 09-16)</p>
                   </div>
                </div>
             </div>
          </div>
          <div className="bg-slate-50 p-8 rounded-2xl">
             <h2 className="text-xl font-bold mb-4">Skicka ett meddelande</h2>
             <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Meddelande skickat"); }}>
                <input type="text" placeholder="Namn" className="w-full p-3 border rounded-lg" />
                <input type="email" placeholder="E-post" className="w-full p-3 border rounded-lg" />
                <select className="w-full p-3 border rounded-lg bg-white">
                   <option>Allmän fråga</option>
                   <option>Medlemsfrågor</option>
                   <option>Press</option>
                </select>
                <textarea rows={4} placeholder="Ditt meddelande..." className="w-full p-3 border rounded-lg"></textarea>
                <button className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700">Skicka</button>
             </form>
          </div>
       </div>
    </div>
  </div>
);

export const Shop: React.FC = () => (
  <div>
    <PageHeader title="Webshop" subtitle="Visa ditt stöd med våra profilprodukter." />
    <div className="container mx-auto px-6 py-12">
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map(product => (
             <div key={product.id} className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-64 bg-slate-100 flex items-center justify-center">
                   <img src={product.imageUrl} alt={product.name} className="h-full w-full object-cover" />
                </div>
                <div className="p-4">
                   <div className="text-xs text-slate-500 mb-1">{product.category}</div>
                   <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                   <div className="flex justify-between items-center mt-4">
                      <span className="text-xl font-bold text-blue-600">{product.price} kr</span>
                      <button className="p-2 bg-slate-900 text-white rounded-full hover:bg-slate-700">
                         <ShoppingBag size={18} />
                      </button>
                   </div>
                </div>
             </div>
          ))}
       </div>
    </div>
  </div>
);

export const Election2026: React.FC = () => (
   <div>
      <section className="bg-blue-900 text-white py-20 text-center">
         <div className="container mx-auto px-6">
            <h1 className="text-5xl md:text-7xl font-black mb-6">VALET 2026</h1>
            <p className="text-2xl text-blue-200 mb-8">Rösta för familjens trygghet.</p>
            <div className="inline-block bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-xl">
               Rösta på {PARTY_NAME}
            </div>
         </div>
      </section>
      <div className="container mx-auto px-6 py-16">
         <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-8 bg-slate-50 rounded-xl">
               <h3 className="text-7xl font-black text-blue-200 mb-4">1</h3>
               <h4 className="text-xl font-bold mb-2">Familjen i Centrum</h4>
               <p>Mer tid och resurser för barnfamiljer.</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-xl">
               <h3 className="text-7xl font-black text-blue-200 mb-4">2</h3>
               <h4 className="text-xl font-bold mb-2">Värdig Vård</h4>
               <p>Trygghet genom hela livet.</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-xl">
               <h3 className="text-7xl font-black text-blue-200 mb-4">3</h3>
               <h4 className="text-xl font-bold mb-2">Starkt Civilsamhälle</h4>
               <p>Föreningar och gemenskap bygger Sverige.</p>
            </div>
         </div>
      </div>
   </div>
);