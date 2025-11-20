import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Tag, Calendar, ArrowRight, Filter, X } from 'lucide-react';
import { NEWS, PARTY_NAME } from '../constants';

export const News = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('Alla');
  const [searchQuery, setSearchQuery] = useState('');

  // Extract unique categories from news items
  const categories = useMemo(() => {
    const cats = new Set(NEWS.map(item => item.category));
    return ['Alla', ...Array.from(cats)];
  }, []);

  // Filter news based on category and search query (title or tags)
  const filteredNews = useMemo(() => {
    return NEWS.filter(item => {
      const matchesCategory = selectedCategory === 'Alla' || item.category === selectedCategory;
      const query = searchQuery.toLowerCase();
      const matchesSearch = 
        item.title.toLowerCase().includes(query) || 
        item.tags.some(tag => tag.toLowerCase().includes(query));
      
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-white border-b border-slate-200 py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Nyheter & Press</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Håll dig uppdaterad med de senaste händelserna, politiska utspelen och aktiviteterna från {PARTY_NAME}.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        {/* Toolbar: Search and Filter */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 overflow-x-auto pb-2 w-full md:w-auto no-scrollbar">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 hover:border-blue-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Sök på rubrik eller tagg..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-10 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
            />
            <Search className="absolute left-3 top-3.5 text-slate-400" size={18} />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-3.5 text-slate-400 hover:text-slate-600"
              >
                <X size={18} />
              </button>
            )}
          </div>
        </div>

        {/* News Grid */}
        {filteredNews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map(news => (
              <article 
                key={news.id} 
                onClick={() => navigate(`/nyheter`)} /* Placeholder navigation */
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full border border-slate-100 group cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={news.imageUrl} 
                    alt={news.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute top-4 left-4 bg-blue-600/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    {news.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col">
                  {/* Date Display */}
                  <time dateTime={news.date} className="flex items-center text-slate-500 text-sm mb-3">
                    <Calendar size={14} className="mr-2" />
                    {news.date}
                  </time>
                  
                  {/* Title with Hover Effect */}
                  <h2 className="text-xl font-bold text-slate-900 mb-3 leading-tight group-hover:text-blue-600 group-hover:underline underline-offset-2 transition-colors">
                    {news.title}
                  </h2>
                  
                  <p className="text-slate-600 text-sm mb-6 line-clamp-3 flex-grow">
                    {news.excerpt}
                  </p>
                  
                  {/* Tags */}
                  {news.tags && news.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {news.tags.map(tag => (
                        <span 
                          key={tag} 
                          className="inline-flex items-center px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded hover:bg-blue-50 hover:text-blue-600 cursor-pointer transition-colors"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSearchQuery(tag);
                          }}
                        >
                          <Tag size={10} className="mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Footer */}
                  <div className="mt-auto pt-4 border-t border-slate-100 flex justify-end">
                    <button className="text-blue-600 font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                      Läs mer <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-xl border border-slate-100">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
                <Filter size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Inga nyheter hittades</h3>
            <p className="text-slate-500 mb-6">
              Vi kunde inte hitta några nyheter som matchar din sökning eller filter.
            </p>
            <button 
              onClick={() => { setSelectedCategory('Alla'); setSearchQuery(''); }}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Rensa filter
            </button>
          </div>
        )}
      </div>
    </div>
  );
};