import React from 'react';
import { Cpu } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="w-full p-6 border-b border-purple-900/50 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        <div className="flex flex-col items-center md:items-start group">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-900/30 rounded-lg border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
              <Cpu className="w-8 h-8 text-purple-400 animate-pulse" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-purple-400 drop-shadow-sm">
              KANDA BETA CURRENCY
            </h1>
          </div>
          
          {/* Matrix Style Subtitle */}
          <div className="mt-2 pl-2">
            <p className="font-matrix text-sm md:text-base text-green-500 flex items-center gap-2 tracking-wide">
              <span>&gt; initializing source...</span>
              <span className="font-bold">by polbangtan bogor</span>
              <span className="w-2 h-4 bg-green-500 animate-[pulse_0.8s_ease-in-out_infinite]"></span>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
           <span className="text-xs text-purple-400/60 font-mono border border-purple-900/50 px-2 py-1 rounded">v1.0.0-beta</span>
        </div>
      </div>
    </header>
  );
};

export default Header;