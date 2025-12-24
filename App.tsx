import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import CryptoCard from './components/CryptoCard';
import GeminiAnalyst from './components/GeminiAnalyst';
import { fetchCryptoData } from './services/api';
import { Coin } from './types';
import { LayoutGrid, List, RefreshCcw } from 'lucide-react';

const App: React.FC = () => {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());

  const loadData = async () => {
    setLoading(true);
    const data = await fetchCryptoData();
    setCoins(data);
    setLastUpdated(new Date());
    setLoading(false);
  };

  useEffect(() => {
    loadData();
    // Auto refresh every 60 seconds
    const interval = setInterval(loadData, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-purple-500/30 selection:text-purple-200">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-8">
        
        <GeminiAnalyst coins={coins} />

        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-bold text-white">Top 10 Global Market Cap</h2>
            <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse ml-2" title="Live Update Active"></div>
          </div>

          <div className="flex items-center gap-3 bg-slate-900/50 p-1 rounded-lg border border-purple-900/30">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded transition-all ${
                viewMode === 'grid' 
                  ? 'bg-purple-600 text-white shadow-lg' 
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
              aria-label="Grid View"
            >
              <LayoutGrid size={18} />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded transition-all ${
                viewMode === 'list' 
                  ? 'bg-purple-600 text-white shadow-lg' 
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
              aria-label="List View"
            >
              <List size={18} />
            </button>
            <div className="w-px h-6 bg-slate-700 mx-1"></div>
            <button 
              onClick={loadData}
              disabled={loading}
              className="p-2 text-slate-400 hover:text-purple-400 transition-colors"
              title="Refresh Data"
            >
              <RefreshCcw size={18} className={loading ? 'animate-spin' : ''} />
            </button>
          </div>
        </div>

        {loading && coins.length === 0 ? (
          <div className="flex justify-center items-center h-64">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 border-4 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
              <p className="mt-4 text-purple-400 font-mono animate-pulse">Loading Asset Data...</p>
            </div>
          </div>
        ) : (
          <div className={
            viewMode === 'grid' 
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              : "flex flex-col gap-3"
          }>
            {coins.map((coin) => (
              <CryptoCard key={coin.id} coin={coin} />
            ))}
          </div>
        )}
        
        <div className="mt-12 text-center border-t border-purple-900/30 pt-8">
            <p className="text-slate-500 text-sm">
                Data provided by CoinGecko Public API • Updated: {lastUpdated.toLocaleTimeString()}
            </p>
            <p className="font-matrix text-xs text-green-900/40 mt-2 select-none">
                SYSTEM_READY // POLBANGTAN_BOGOR // ACCESS_GRANTED
            </p>
        </div>
      </main>
    </div>
  );
};

export default App;