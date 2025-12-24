import React from 'react';
import { Coin } from '../types';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface CryptoCardProps {
  coin: Coin;
}

const CryptoCard: React.FC<CryptoCardProps> = ({ coin }) => {
  const isPositive = coin.price_change_percentage_24h >= 0;

  return (
    <div className="group relative bg-slate-900/50 border border-purple-900/30 hover:border-purple-500/50 rounded-xl p-5 transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)] hover:-translate-y-1">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
      
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-3">
            <img 
              src={coin.image} 
              alt={coin.name} 
              className="w-10 h-10 rounded-full shadow-lg"
            />
            <div>
              <h3 className="font-bold text-lg text-slate-100">{coin.name}</h3>
              <span className="text-xs font-mono text-purple-400 uppercase">{coin.symbol}</span>
            </div>
          </div>
          <span className="px-2 py-1 bg-slate-950 rounded text-xs font-mono text-slate-400 border border-slate-800">
            #{coin.market_cap_rank}
          </span>
        </div>

        <div className="space-y-1">
          <div className="text-2xl font-bold text-white tracking-tight">
            ${coin.current_price.toLocaleString()}
          </div>
          
          <div className={`flex items-center text-sm font-medium ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
            {isPositive ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingDown className="w-4 h-4 mr-1" />}
            {Math.abs(coin.price_change_percentage_24h).toFixed(2)}%
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-purple-900/30 flex justify-between text-xs text-slate-400">
          <div>
            <p className="text-slate-500 mb-1">Market Cap</p>
            <p className="font-mono text-slate-300">${(coin.market_cap / 1e9).toFixed(2)}B</p>
          </div>
          <div className="text-right">
            <p className="text-slate-500 mb-1">Volume (24h)</p>
            <p className="font-mono text-slate-300">${(coin.total_volume / 1e6).toFixed(0)}M</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoCard;