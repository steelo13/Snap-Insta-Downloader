
import React, { useState, useMemo, useEffect } from 'react';
import Layout from './components/Layout';
import ToolView from './components/ToolView';
import { TOOLS, ICON_MAP } from './constants';
import { Tool, ToolCategory, ViewType } from './types';
import { Search, Sparkles, TrendingUp, ArrowRight, ShieldCheck, FileText } from 'lucide-react';

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ToolCategory | 'All' | 'Viral'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null);
  const [view, setView] = useState<ViewType>('dashboard');

  // Unified scroll to top whenever navigation changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [view, selectedTool, activeCategory]);

  const filteredTools = useMemo(() => {
    let list = TOOLS;
    if (activeCategory === 'Viral') {
      list = list.filter(t => t.isViral);
    } else if (activeCategory !== 'All') {
      list = list.filter(t => t.category === activeCategory);
    }
    
    if (searchQuery) {
      list = list.filter(t => 
        t.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        t.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return list;
  }, [activeCategory, searchQuery]);

  const handleToolClick = (tool: Tool) => {
    setSelectedTool(tool);
    setView('tool');
  };

  const renderContent = () => {
    if (view === 'tool' && selectedTool) {
      return <ToolView tool={selectedTool} onBack={() => setView('dashboard')} />;
    }

    if (view === 'privacy') {
      return (
        <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-lg max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-blue-50 p-3 rounded-xl text-blue-600">
              <ShieldCheck size={24} />
            </div>
            <h1 className="text-2xl font-black text-slate-900">Privacy Policy</h1>
          </div>
          <div className="prose prose-slate prose-sm max-w-none space-y-4 text-slate-600 leading-relaxed">
            <p>At SnapInstaDownloader, we prioritize the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by SnapInstaDownloader and how we use it.</p>
            <h2 className="text-lg font-bold text-slate-900">Log Files</h2>
            <p>SnapInstaDownloader follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics.</p>
            <h2 className="text-lg font-bold text-slate-900">Data Collection</h2>
            <p>We do not store any Instagram media on our servers. All processing is done client-side or via temporary cached requests that are immediately discarded. We do not require account logins to use our services.</p>
            <h2 className="text-lg font-bold text-slate-900">Consent</h2>
            <p>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>
          </div>
          <button onClick={() => setView('dashboard')} className="mt-8 bg-slate-900 text-white px-6 py-2 rounded-lg font-bold text-xs">Back to Tools</button>
        </div>
      );
    }

    if (view === 'terms') {
      return (
        <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-lg max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-orange-50 p-3 rounded-xl text-orange-600">
              <FileText size={24} />
            </div>
            <h1 className="text-2xl font-black text-slate-900">Terms of Service</h1>
          </div>
          <div className="prose prose-slate prose-sm max-w-none space-y-4 text-slate-600 leading-relaxed">
            <h2 className="text-lg font-bold text-slate-900">1. Terms</h2>
            <p>By accessing the website at SnapInstaDownloader, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.</p>
            <h2 className="text-lg font-bold text-slate-900">2. Use License</h2>
            <p>Permission is granted to temporarily use the tools on SnapInstaDownloader for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.</p>
            <h2 className="text-lg font-bold text-slate-900">3. Disclaimer</h2>
            <p>The tools on SnapInstaDownloader are provided on an 'as is' basis. SnapInstaDownloader makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability.</p>
            <h2 className="text-lg font-bold text-slate-900">4. Instagram API</h2>
            <p>SnapInstaDownloader is not affiliated with Instagram, Meta, or any third-party social media platform. Users must ensure they have rights to the content they process using our tools.</p>
          </div>
          <button onClick={() => setView('dashboard')} className="mt-8 bg-slate-900 text-white px-6 py-2 rounded-lg font-bold text-xs">Back to Tools</button>
        </div>
      );
    }

    return (
      <div className="space-y-8">
        {/* Hero Section */}
        <section className="relative overflow-hidden rounded-3xl ig-gradient p-6 md:p-12 text-white shadow-xl">
          <div className="relative z-10 max-w-xl text-center md:text-left mx-auto md:mx-0">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold mb-4">
              <TrendingUp size={12} />
              <span>Viral Creator Tools 2025</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black leading-tight mb-4">
              Master Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-white">Instagram Presence</span>
            </h1>
            <p className="text-sm md:text-base text-white/80 font-medium mb-8 max-w-md">
              Download content, format captions, and calculate growth—all in one place.
            </p>
            
            <div className="relative max-w-md mx-auto md:mx-0">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input 
                type="text"
                placeholder={`Search ${TOOLS.length} tools...`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-white text-slate-900 text-sm font-medium shadow-lg focus:ring-4 focus:ring-pink-500/30 outline-none transition-all"
              />
            </div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full -ml-16 -mb-16 blur-3xl"></div>
        </section>

        {/* Grid Section */}
        <section>
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 px-1 gap-2">
            <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
              {activeCategory} Tools
              <span className="bg-slate-200 text-slate-600 text-[10px] py-0.5 px-2.5 rounded-full font-bold">
                {filteredTools.length}
              </span>
            </h2>
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="text-[10px] font-bold text-pink-600 hover:underline">
                Clear search
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredTools.map((tool) => {
              const Icon = ICON_MAP[tool.icon] || Sparkles;
              return (
                <button
                  key={tool.id}
                  onClick={() => handleToolClick(tool)}
                  className="group relative bg-white border border-slate-200 p-5 rounded-2xl text-left hover:border-pink-500 hover:shadow-xl hover:shadow-pink-500/5 transition-all duration-300 flex flex-col h-full"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className={`p-3 rounded-xl ${tool.isViral ? 'ig-gradient text-white' : 'bg-slate-100 text-slate-900'} group-hover:scale-105 transition-transform duration-300 shadow-sm`}>
                      <Icon size={20} />
                    </div>
                    {tool.isViral && (
                      <span className="text-[8px] font-black uppercase tracking-widest text-pink-600 bg-pink-50 px-2 py-1 rounded-full border border-pink-100">
                        Viral
                      </span>
                    )}
                  </div>
                  <h3 className="font-bold text-lg mb-1.5 text-slate-900 group-hover:text-pink-600 transition-colors leading-tight">{tool.name}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed mb-4 line-clamp-2">{tool.description}</p>
                  
                  <div className="mt-auto flex items-center gap-1.5 text-[10px] font-black text-slate-400 group-hover:text-slate-900 transition-colors uppercase tracking-widest">
                    Explore Tool <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>
              );
            })}
          </div>
          
          {filteredTools.length === 0 && (
            <div className="text-center py-16 bg-white rounded-2xl border-2 border-dashed border-slate-100">
              <div className="bg-slate-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-300">
                <Search size={32} />
              </div>
              <h3 className="text-xl font-black text-slate-900">No tools found</h3>
              <p className="text-slate-500 text-sm mt-1">Try a different term or category.</p>
            </div>
          )}
        </section>

        {/* Sticky Quick Tips */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-900 rounded-3xl p-8 text-white overflow-hidden relative group">
            <div className="relative z-10 text-center md:text-left">
              <h2 className="text-2xl font-black mb-2">Daily Content Ideas</h2>
              <p className="text-slate-400 text-sm mb-6 max-w-xs mx-auto md:mx-0">
                Never run out of post ideas again with our viral spinner.
              </p>
              <button 
                onClick={() => handleToolClick(TOOLS.find(t => t.id === 'idea-spinner')!)}
                className="bg-white text-slate-900 px-6 py-2.5 rounded-xl font-black text-sm hover:bg-slate-100 transition-all shadow-lg"
              >
                Spin for Ideas
              </button>
            </div>
            <Sparkles className="absolute top-0 right-0 w-32 h-32 text-white/5 -mr-4 -mt-4 rotate-12 group-hover:scale-110 transition-transform hidden md:block" />
          </div>

          <div className="bg-pink-600 rounded-3xl p-8 text-white overflow-hidden relative group">
            <div className="relative z-10 text-center md:text-left">
              <h2 className="text-2xl font-black mb-2">Engagement Audit</h2>
              <p className="text-white/80 text-sm mb-6 max-w-xs mx-auto md:mx-0">
                Check your stats against the industry average (3.2%).
              </p>
              <button 
                onClick={() => handleToolClick(TOOLS.find(t => t.id === 'engagement-calc')!)}
                className="bg-slate-900 text-white px-6 py-2.5 rounded-xl font-black text-sm hover:bg-black transition-all shadow-lg"
              >
                Start Audit
              </button>
            </div>
            <TrendingUp className="absolute bottom-0 right-0 w-32 h-32 text-white/10 -mr-4 -mb-4 group-hover:scale-110 transition-transform hidden md:block" />
          </div>
        </section>
      </div>
    );
  };

  return (
    <Layout activeCategory={activeCategory} setActiveCategory={setActiveCategory} setView={setView}>
      {renderContent()}
    </Layout>
  );
};

export default App;
