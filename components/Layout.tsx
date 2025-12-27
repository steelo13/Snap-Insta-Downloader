
import React, { useState } from 'react';
import { Menu, X, Zap, Heart, Download, ArrowDown } from 'lucide-react';
import { ToolCategory, ViewType } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  activeCategory: ToolCategory | 'All' | 'Viral';
  setActiveCategory: (cat: any) => void;
  setView: (view: ViewType) => void;
}

const LogoIcon = ({ size = 20, className = "" }: { size?: number, className?: string }) => (
  <div className={`relative flex items-center justify-center ${className}`}>
    <div className="ig-gradient p-1.5 rounded-xl text-white shadow-md relative overflow-hidden">
      {/* Mimic the logo's camera-square + arrow */}
      <div className="relative z-10">
         <ArrowDown size={size} strokeWidth={3} />
      </div>
      {/* Swoosh effect representation */}
      <div className="absolute -bottom-1 -right-1 w-full h-1/2 bg-white/20 rotate-12 blur-sm"></div>
    </div>
  </div>
);

const BrandLogo = ({ showText = true, layout = 'horizontal' }: { showText?: boolean, layout?: 'horizontal' | 'vertical' }) => (
  <div className={`flex ${layout === 'horizontal' ? 'items-center gap-2' : 'flex-col items-center text-center'} group`}>
    <LogoIcon size={layout === 'horizontal' ? 18 : 24} className="group-hover:scale-105 transition-transform duration-300" />
    {showText && (
      <div className={`${layout === 'vertical' ? 'mt-3' : ''}`}>
        <h1 className="font-black text-xl tracking-tight text-slate-900 leading-none">
          Snap Insta
        </h1>
        <div className="mt-1">
          <span className="bg-gradient-to-r from-orange-500 via-pink-600 to-purple-600 text-white px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm">
            Downloader
          </span>
        </div>
      </div>
    )}
  </div>
);

const Layout: React.FC<LayoutProps> = ({ children, activeCategory, setActiveCategory, setView }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const categories = ['All', 'Viral', ...Object.values(ToolCategory)];

  const handleCategoryClick = (cat: any) => {
    setActiveCategory(cat);
    setView('dashboard');
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Sidebar for Desktop */}
      <aside className="hidden md:flex flex-col w-72 bg-white border-r border-slate-200 p-6 fixed h-full shadow-sm">
        <div 
          className="mb-10 cursor-pointer"
          onClick={() => { setView('dashboard'); setActiveCategory('All'); }}
        >
          <BrandLogo />
        </div>

        <nav className="flex-1 space-y-2 overflow-y-auto custom-scrollbar pr-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryClick(cat)}
              className={`w-full text-left px-4 py-3.5 rounded-xl text-sm font-black transition-all duration-200 ${
                activeCategory === cat 
                ? 'bg-slate-900 text-white shadow-xl translate-x-1 ring-4 ring-slate-900/5' 
                : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </nav>

        <div className="pt-6 border-t border-slate-100 mt-4">
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
            <div className="flex items-center gap-2 text-pink-600 mb-2">
              <Zap size={14} className="fill-pink-600" />
              <span className="text-[10px] font-black uppercase tracking-widest">Growth Engine</span>
            </div>
            <p className="text-xs text-slate-500 font-bold leading-tight">
              Join 50k+ creators scaling their reach daily.
            </p>
          </div>
        </div>
      </aside>

      {/* Mobile Header */}
      <header className="md:hidden flex items-center justify-between p-4 bg-white border-b border-slate-200 sticky top-0 z-50">
        <div 
          className="cursor-pointer"
          onClick={() => { setView('dashboard'); setActiveCategory('All'); }}
        >
          <BrandLogo />
        </div>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-slate-600 bg-slate-50 rounded-xl">
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-40 pt-20 px-6 overflow-y-auto">
          <nav className="space-y-3 pb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryClick(cat)}
                className={`w-full text-left px-5 py-4 rounded-2xl text-lg font-black transition-all ${
                  activeCategory === cat ? 'bg-slate-900 text-white shadow-xl' : 'text-slate-600 bg-slate-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </nav>
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-1 md:ml-72 p-4 md:p-8 flex flex-col">
        <div className="max-w-5xl mx-auto w-full flex-grow">
          {children}
        </div>
        
        <footer className="mt-16 py-12 border-t border-slate-200 text-center">
          <div className="mb-8">
            <BrandLogo layout="vertical" />
            <p className="text-slate-500 text-sm mt-4 max-w-xs mx-auto font-semibold">
              The premium toolkit for modern creators and social businesses.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 text-slate-400 text-[10px] font-black uppercase tracking-[0.25em] mb-8">
             <button onClick={() => setView('privacy')} className="hover:text-pink-600 transition-colors">Privacy Policy</button>
             <button onClick={() => setView('terms')} className="hover:text-pink-600 transition-colors">Terms of Use</button>
             <button onClick={() => { setView('dashboard'); setActiveCategory('All'); }} className="hover:text-pink-600 transition-colors">Dashboard</button>
          </div>

          <div className="flex items-center justify-center gap-2 text-slate-300 text-[10px] font-black uppercase tracking-widest">
            &copy; {new Date().getFullYear()} SNAP INSTA. <Heart size={10} className="text-red-400 fill-red-400" /> BUILT FOR THE ECOSYSTEM.
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Layout;
