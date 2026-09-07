import React from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface WebGLFallbackProps {
  onOpenFloorPlan: () => void;
}

export const WebGLFallback: React.FC<WebGLFallbackProps> = ({ onOpenFloorPlan }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] p-8 text-center bg-slate-950 text-slate-100 rounded-3xl border border-slate-800 space-y-4 max-w-md mx-auto my-12">
      <div className="p-4 rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/30">
        <AlertTriangle className="w-10 h-10 animate-bounce" />
      </div>
      <h2 className="text-xl font-bold text-white">WebGL Hardware Acceleration Required</h2>
      <p className="text-xs text-slate-400 leading-relaxed">
        Your browser or graphics hardware currently has WebGL acceleration disabled or unsupported.
      </p>
      <div className="pt-2 flex flex-col gap-2.5 w-full">
        <button
          onClick={onOpenFloorPlan}
          className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-xs transition-colors"
        >
          Open 2D Architectural Floor Plan Instead
        </button>
        <button
          onClick={() => window.location.reload()}
          className="w-full py-2.5 bg-slate-900 border border-slate-800 text-slate-300 hover:text-white font-semibold rounded-xl text-xs transition-colors flex items-center justify-center gap-2"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Reload WebGL Viewport</span>
        </button>
      </div>
    </div>
  );
};
