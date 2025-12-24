import React, { useState } from 'react';
import { Bot, Sparkles, RefreshCw } from 'lucide-react';
import { Coin } from '../types';
import { analyzeMarket } from '../services/geminiService';

interface GeminiAnalystProps {
  coins: Coin[];
}

const GeminiAnalyst: React.FC<GeminiAnalystProps> = ({ coins }) => {
  const [analysis, setAnalysis] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    setLoading(true);
    const result = await analyzeMarket(coins);
    setAnalysis(result);
    setLoading(false);
  };

  return (
    <div className="w-full bg-slate-900/80 border border-purple-500/30 rounded-xl p-6 mb-8 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-purple-600/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-32 h-32 bg-fuchsia-600/10 blur-3xl rounded-full"></div>

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-purple-600 to-fuchsia-600 rounded-lg shadow-lg">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-xl font-bold text-white">AI Market Analyst</h2>
          </div>
          <button
            onClick={handleAnalyze}
            disabled={loading}
            className="flex items-center gap-2 px-4 py-2 bg-purple-900/40 hover:bg-purple-800/60 border border-purple-500/40 text-purple-200 rounded-lg transition-all text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed group"
          >
            {loading ? (
              <RefreshCw className="w-4 h-4 animate-spin" />
            ) : (
              <Sparkles className="w-4 h-4 group-hover:text-yellow-300 transition-colors" />
            )}
            {analysis ? 'Analisis Ulang' : 'Analisis Market'}
          </button>
        </div>

        <div className="bg-slate-950/50 rounded-lg p-4 border border-purple-900/30 min-h-[100px] flex items-center justify-center">
          {loading ? (
            <div className="flex flex-col items-center gap-2 text-purple-300/70">
              <div className="w-2 h-2 rounded-full bg-purple-500 animate-ping"></div>
              <p className="text-sm font-mono animate-pulse">Gemini sedang membaca data pasar...</p>
            </div>
          ) : analysis ? (
             <div className="w-full">
               <p className="text-slate-300 leading-relaxed whitespace-pre-line text-sm md:text-base">
                 {analysis}
               </p>
               <div className="mt-3 flex justify-end">
                  <span className="text-[10px] text-purple-500/50 font-mono">Powered by Google Gemini</span>
               </div>
             </div>
          ) : (
            <p className="text-slate-500 text-sm text-center italic">
              Tekan tombol "Analisis Market" untuk mendapatkan insight cerdas dari Gemini AI tentang kondisi top 10 kripto saat ini.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default GeminiAnalyst;