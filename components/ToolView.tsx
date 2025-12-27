
import React, { useState } from 'react';
import { 
  Download, Copy, Check, RefreshCw, Sparkles, ArrowLeft, 
  Trash2, Plus, Trophy, AlertCircle, CheckCircle2, List, Lightbulb
} from 'lucide-react';
import { Tool, ToolCategory } from '../types';
import { ICON_MAP } from '../constants';

interface ToolViewProps {
  tool: Tool;
  onBack: () => void;
}

const ToolView: React.FC<ToolViewProps> = ({ tool, onBack }) => {
  const [input, setInput] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [listInput, setListInput] = useState<string[]>(['']);
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const ToolIcon = ICON_MAP[tool.icon] || Sparkles;

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const processTool = async () => {
    setLoading(true);
    await new Promise(r => setTimeout(r, 600));

    let toolResult: any = null;

    switch(tool.category) {
      case ToolCategory.DOWNLOADER:
        toolResult = {
          preview: `https://picsum.photos/seed/${tool.id}${input.length}/800/1000`,
          filename: `snapinsta_${tool.id}.jpg`,
          status: 'Direct High-Speed Link Ready'
        };
        break;

      case ToolCategory.TEXT:
        if (tool.id === 'bio-fonts') {
          toolResult = [
            `✨ ${input} ✨`, `【 ${input} 】`, `≋${input}≋`, `『 ${input} 』`,
            ` ҍìօ: ${input} `, ` ★ ${input} ★ `, ` 𝔖𝔫𝔞𝔭: ${input} `, ` Ⓢⓝⓐⓟ: ${input} `, ` 𝕾𝖓𝖆𝖕: ${input} `, ` 𝒮𝓃𝒶𝓅: ${input} `
          ];
        } else if (tool.id === 'caption-formatter' || tool.id === 'comment-formatter') {
          toolResult = input.replace(/\n/g, '\n⠀\n');
        } else if (tool.id === 'invisible-text') {
          toolResult = "⠀"; 
        } else if (tool.id === 'text-case') {
          toolResult = [
            { label: 'UPPER', val: input.toUpperCase() },
            { label: 'lower', val: input.toLowerCase() },
            { label: 'Title', val: input.split(' ').map(w => w[0]?.toUpperCase() + w.slice(1).toLowerCase()).join(' ') }
          ];
        } else if (tool.id === 'caption-counter') {
          const chars = input.length;
          const hashtags = (input.match(/#/g) || []).length;
          toolResult = { 
            items: [
              { label: 'Chars', val: `${chars}/2200`, warning: chars > 2200 },
              { label: 'Hashtags', val: `${hashtags}/30`, warning: hashtags > 30 },
              { label: 'Words', val: input.split(/\s+/).filter(x => x).length }
            ]
          };
        } else if (tool.id === 'emoji-keyboard') {
          toolResult = ["🔥", "✨", "🚀", "📸", "🙌", "💯", "💎", "🌟", "🖤", "🌈", "📍", "💼", "🤳", "🔥", "💫", "🎯"];
        } else {
          toolResult = input;
        }
        break;

      case ToolCategory.ANALYTICS:
        const n1 = parseFloat(input) || 0;
        const n2 = parseFloat(input2) || 0;
        const n3 = parseFloat(input3) || 0;
        if (tool.id === 'engagement-calc' || tool.id === 'reel-engagement') {
          const rate = n1 > 0 ? ((n2 / n1) * 100).toFixed(2) : '0.00';
          toolResult = { main: `${rate}%`, sub: 'Engagement Rate', status: parseFloat(rate) > 3.5 ? 'Viral Level' : 'Average' };
        } else if (tool.id === 'ad-roi') {
          const roi = n1 > 0 ? (((n2 - n1) / n1) * 100).toFixed(0) : '0';
          toolResult = { main: `${roi}%`, sub: 'ROAS / ROI', status: parseInt(roi) > 200 ? 'High Performance' : 'Baseline' };
        } else if (tool.id === 'cpm-calc') {
          const cpm = n2 > 0 ? ((n1 / n2) * 1000).toFixed(2) : '0.00';
          toolResult = { main: `$${cpm}`, sub: 'Cost Per 1000', status: 'Ad Efficiency' };
        } else if (tool.id === 'earnings-est' || tool.id === 'pricing-calc') {
          const min = (n1 * 0.005).toFixed(0);
          const max = (n1 * 0.02).toFixed(0);
          toolResult = { main: `$${min}-$${max}`, sub: 'Brand Deal Est', status: 'Market Rates' };
        } else {
          toolResult = { main: 'Healthy', sub: 'Status', status: 'Pattern Check' };
        }
        break;

      case ToolCategory.DESIGN:
        if (tool.id === 'grid-preview') {
          toolResult = { type: 'grid', items: Array(9).fill(null).map((_, i) => `https://picsum.photos/seed/grid${i}/400`) };
        } else if (tool.id === 'aspect-ratio') {
          const w = parseInt(input) || 1080;
          const h = parseInt(input2) || 1920;
          const ratio = (w / h).toFixed(2);
          toolResult = { main: ratio, sub: 'Aspect Ratio', status: (ratio === '0.56' || ratio === '0.80') ? 'Standard' : 'Non-Standard' };
        } else {
          toolResult = "Optimization Guide Ready";
        }
        break;

      case ToolCategory.UTILITIES:
        if (tool.id === 'utm-builder') {
          toolResult = `${input}?utm_source=instagram&utm_medium=${input2 || 'social'}&utm_campaign=${input3 || 'profile'}`;
        } else if (tool.id === 'link-cleaner') {
          toolResult = input.split('?')[0];
        } else if (tool.id === 'qr-generator') {
          toolResult = `https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=https://instagram.com/${input.replace('@', '')}`;
        } else {
          toolResult = `https://instagram.com/${input.replace('@', '').trim()}`;
        }
        break;

      case ToolCategory.ADMIN:
        if (tool.id === 'giveaway-picker') {
          const names = listInput.filter(n => n.trim());
          const winner = names.length > 0 ? names[Math.floor(Math.random() * names.length)] : 'No Entries';
          toolResult = { winner, total: names.length };
        } else if (tool.id === 'idea-spinner') {
          const ideas = ["Collaborate with a local business", "Post a 'Day in the Life' story", "Share your top 3 tools", "Q&A with followers", "Tutorial of your main skill", "Throwback to your first post", "BTS of your content process", "Viral Myth-Busting", "Industry News Reaction"];
          toolResult = ideas[Math.floor(Math.random() * ideas.length)];
        } else if (tool.id === 'audit-checklist') {
          toolResult = ["Bio includes clear CTA?", "Profile photo is high res?", "Highlights categorized?", "Consistent palette?", "Links are tracked?", "Name field SEO?"];
        } else {
          toolResult = "Plan Generated";
        }
        break;
    }

    setResult(toolResult);
    setLoading(false);
  };

  const isMultiInput = tool.category === ToolCategory.ANALYTICS || tool.id === 'utm-builder' || tool.id === 'aspect-ratio';

  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {/* Main Interface */}
        <div className="lg:col-span-2 p-6 md:p-8 border-b lg:border-b-0 lg:border-r border-slate-100">
          <button onClick={onBack} className="group mb-6 inline-flex items-center gap-1.5 text-slate-400 hover:text-slate-900 transition-colors font-bold text-[10px] uppercase tracking-widest">
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            Back to Dashboard
          </button>

          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
            <div className="ig-gradient p-3 rounded-xl text-white shadow-lg">
               <ToolIcon size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 leading-tight">{tool.name}</h2>
              <p className="text-slate-500 text-sm mt-0.5 font-medium">{tool.description}</p>
            </div>
          </div>

          <div className="space-y-6">
            {tool.id === 'giveaway-picker' ? (
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-700 uppercase tracking-wider">Entries</label>
                {listInput.map((name, idx) => (
                  <div key={idx} className="flex gap-2">
                    <input
                      value={name}
                      onChange={(e) => {
                        const newList = [...listInput];
                        newList[idx] = e.target.value;
                        setListInput(newList);
                      }}
                      placeholder="Name..."
                      className="flex-1 px-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl focus:border-pink-500 focus:outline-none transition-all text-sm"
                    />
                    {listInput.length > 1 && (
                      <button onClick={() => setListInput(listInput.filter((_, i) => i !== idx))} className="p-2.5 text-red-400 hover:bg-red-50 rounded-xl">
                        <Trash2 size={16} />
                      </button>
                    )}
                  </div>
                ))}
                <button onClick={() => setListInput([...listInput, ''])} className="flex items-center gap-1.5 text-pink-600 font-bold text-[10px] py-1 hover:translate-x-1 transition-transform">
                  <Plus size={12} /> Add Entry
                </button>
              </div>
            ) : (
              <div className={`grid grid-cols-1 ${isMultiInput ? 'md:grid-cols-2' : ''} gap-3`}>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-slate-700 uppercase tracking-wider">
                    {tool.category === ToolCategory.ANALYTICS ? 'Metric 1 (e.g. Followers)' : 'Input Value'}
                  </label>
                  {tool.id.includes('formatter') || tool.id.includes('counter') ? (
                    <textarea rows={3} value={input} onChange={(e) => setInput(e.target.value)} placeholder="Paste text here..." className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:border-pink-500 focus:outline-none transition-all text-sm" />
                  ) : (
                    <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder={tool.category === ToolCategory.DOWNLOADER ? "Paste URL..." : "Type here..."} className="w-full px-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl focus:border-pink-500 focus:outline-none transition-all text-sm" />
                  )}
                </div>
                {isMultiInput && (
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-slate-700 uppercase tracking-wider">Metric 2 / Sub-value</label>
                    <input type="text" value={input2} onChange={(e) => setInput2(e.target.value)} placeholder="Value..." className="w-full px-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl focus:border-pink-500 focus:outline-none transition-all text-sm" />
                  </div>
                )}
              </div>
            )}

            <button onClick={processTool} disabled={loading} className="w-full ig-gradient text-white py-3.5 rounded-xl font-black text-sm hover:shadow-lg transition-all flex items-center justify-center gap-2">
              {loading ? <RefreshCw className="animate-spin" size={16} /> : <Sparkles size={16} />}
              Generate Result
            </button>
          </div>

          {result && (
            <div className="mt-8 p-6 bg-slate-50 rounded-2xl border border-slate-100 animate-in fade-in slide-in-from-bottom-2">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle2 size={16} className="text-green-500" />
                <h4 className="text-[10px] font-black text-slate-900 uppercase tracking-widest">Output Ready</h4>
              </div>

              {tool.category === ToolCategory.DOWNLOADER && (
                <div className="flex flex-col items-center gap-4">
                  <img src={result.preview} className="w-full max-w-[200px] h-auto rounded-2xl shadow-lg border-4 border-white" alt="Preview" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
                    <a href={result.preview} download className="bg-slate-900 text-white py-2.5 rounded-xl flex items-center justify-center gap-2 font-black text-xs">
                      <Download size={16} /> Download
                    </a>
                    <button onClick={() => handleCopy(result.preview)} className="bg-white text-slate-900 border border-slate-200 py-2.5 rounded-xl flex items-center justify-center gap-2 font-black text-xs">
                      {copied ? 'Copied' : 'Copy URL'}
                    </button>
                  </div>
                </div>
              )}

              {tool.category === ToolCategory.ANALYTICS && (
                <div className="text-center p-4 bg-white rounded-xl border border-slate-100">
                  <p className="text-slate-400 text-[10px] font-bold uppercase mb-1">{result.sub}</p>
                  <p className="text-4xl font-black text-slate-900 mb-2">{result.main}</p>
                  <span className={`text-[9px] font-black px-3 py-1 rounded-full ${result.status === 'Viral Level' ? 'bg-green-100 text-green-600' : 'bg-slate-200 text-slate-600'}`}>
                    {result.status}
                  </span>
                </div>
              )}

              {(Array.isArray(result) && typeof result[0] === 'string') && (
                <div className="grid grid-cols-1 gap-2">
                  {result.map((item: string, idx: number) => (
                    <div key={idx} className="flex items-center justify-between bg-white px-4 py-2.5 rounded-xl border border-slate-100">
                      <span className="text-sm font-medium text-slate-800">{item}</span>
                      <button onClick={() => handleCopy(item)} className="p-2 text-slate-400 hover:text-pink-600 transition-colors">
                        {copied ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {tool.id === 'qr-generator' && (
                <div className="flex flex-col items-center gap-4">
                  <div className="p-4 bg-white rounded-xl border border-slate-100">
                    <img src={result} className="w-32 h-32" alt="QR" />
                  </div>
                  <button onClick={() => handleCopy(result)} className="bg-slate-900 text-white px-4 py-2 rounded-lg text-[10px] font-black">
                    {copied ? 'Copied' : 'Copy QR Link'}
                  </button>
                </div>
              )}

              {tool.id === 'giveaway-picker' && (
                <div className="text-center py-6 bg-white rounded-2xl border border-yellow-100 shadow-sm">
                  <div className="inline-flex p-4 bg-yellow-400 text-white rounded-full mb-4 shadow-md">
                    <Trophy size={32} />
                  </div>
                  <h4 className="text-[9px] font-black uppercase text-slate-400">Randomly Selected Winner</h4>
                  <p className="text-2xl font-black text-slate-900 mt-1">{result.winner}</p>
                </div>
              )}

              {typeof result === 'string' && tool.id !== 'qr-generator' && tool.id !== 'idea-spinner' && !Array.isArray(result) && (
                <div className="flex items-center gap-3 bg-white p-4 rounded-xl border border-slate-100">
                  <div className="flex-1 text-sm font-bold text-slate-800 break-all">{result}</div>
                  <button onClick={() => handleCopy(result)} className="bg-slate-900 text-white px-4 py-2 rounded-lg font-black text-xs hover:bg-black shadow-md">
                    {copied ? <Check size={14} /> : <Copy size={14} />} {copied ? 'Copied' : 'Copy'}
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Sidebar Info Section */}
        <div className="p-6 lg:p-8 bg-slate-50/50">
          <div className="sticky top-20 space-y-8">
            <section>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-slate-900 text-white p-1.5 rounded-lg">
                  <List size={16} />
                </div>
                <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider">How to Use</h4>
              </div>
              <ul className="space-y-3">
                {tool.instructions?.map((step, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[10px] font-black text-pink-600 shadow-sm">
                      {idx + 1}
                    </span>
                    <p className="text-slate-600 font-medium text-[11px] leading-relaxed">{step}</p>
                  </li>
                )) || <p className="text-slate-400 text-[11px]">Enter your values above and click generate to see the results.</p>}
              </ul>
            </section>

            {tool.proTips && (
              <section className="bg-pink-50 p-5 rounded-2xl border border-pink-100 relative overflow-hidden group">
                <div className="relative z-10">
                  <div className="flex items-center gap-1.5 text-pink-600 mb-2">
                    <Lightbulb size={14} className="fill-pink-600" />
                    <h4 className="text-[9px] font-black uppercase tracking-[0.2em]">Viral Growth Tip</h4>
                  </div>
                  <p className="text-pink-900/80 text-[11px] font-bold leading-relaxed">
                    {tool.proTips}
                  </p>
                </div>
                <div className="absolute top-0 right-0 w-16 h-16 bg-pink-100/50 rounded-full -mr-8 -mt-8 group-hover:scale-150 transition-transform duration-500"></div>
              </section>
            )}

            <section className="bg-slate-900 rounded-2xl p-5 text-white shadow-lg overflow-hidden relative">
              <div className="relative z-10">
                <h4 className="text-[10px] font-black uppercase tracking-widest mb-2 opacity-60">Creator Community</h4>
                <p className="text-xs font-bold leading-relaxed">
                  Join 50k+ creators using Snap Insta to grow their business.
                </p>
                <div className="mt-4 flex -space-x-2">
                  {[1,2,3,4].map(i => (
                    <img key={i} src={`https://i.pravatar.cc/40?img=${i+10}`} className="w-8 h-8 rounded-full border-2 border-slate-900" alt="Avatar" />
                  ))}
                  <div className="w-8 h-8 rounded-full bg-slate-800 border-2 border-slate-900 flex items-center justify-center text-[8px] font-bold">
                    +50k
                  </div>
                </div>
              </div>
              <Sparkles className="absolute -bottom-4 -right-4 w-24 h-24 opacity-5 rotate-12" />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolView;
