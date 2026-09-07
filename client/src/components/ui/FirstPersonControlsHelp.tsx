import React from 'react';
import { Footprints, X, MoveHorizontal, ArrowUp, ArrowDown, ArrowLeft, ArrowRight } from 'lucide-react';

interface FirstPersonControlsHelpProps {
  isFirstPerson: boolean;
  onExitFirstPerson: () => void;
  onFpsMove: (direction: 'forward' | 'backward' | 'left' | 'right', active: boolean) => void;
}

export const FirstPersonControlsHelp: React.FC<FirstPersonControlsHelpProps> = ({
  isFirstPerson,
  onExitFirstPerson,
  onFpsMove,
}) => {
  if (!isFirstPerson) return null;

  return (
    <>
      {/* Top Banner Control Indicator */}
      <div className="fixed top-20 left-1/2 -translate-x-1/2 z-40 bg-slate-900/90 border border-sky-500/40 backdrop-blur-xl px-4 py-2.5 rounded-2xl shadow-2xl text-slate-100 flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/30">
            <Footprints className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-xs font-bold text-sky-300">First-Person Walkthrough Mode</h3>
            <p className="text-[10px] text-slate-400">Use WASD or touch buttons to walk through apartment</p>
          </div>
        </div>

        {/* Keyboard Shortcut Badges */}
        <div className="hidden sm:flex items-center gap-1 text-[11px] font-mono">
          <span className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-amber-300">W</span>
          <span className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-amber-300">A</span>
          <span className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-amber-300">S</span>
          <span className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-amber-300">D</span>
        </div>

        <button
          onClick={onExitFirstPerson}
          className="px-3 py-1.5 bg-rose-600 hover:bg-rose-500 text-white font-semibold rounded-xl text-xs transition-colors flex items-center gap-1"
        >
          <X className="w-3.5 h-3.5" />
          <span>Exit Walkthrough</span>
        </button>
      </div>

      {/* Mobile Touch Virtual D-Pad (Shown on bottom right for touch screens) */}
      <div className="fixed bottom-20 right-6 z-40 sm:hidden flex flex-col items-center gap-1.5 bg-slate-900/80 p-3 rounded-2xl border border-slate-800 backdrop-blur-md">
        <button
          onMouseDown={() => onFpsMove('forward', true)}
          onMouseUp={() => onFpsMove('forward', false)}
          onTouchStart={() => onFpsMove('forward', true)}
          onTouchEnd={() => onFpsMove('forward', false)}
          className="p-3 bg-slate-800 active:bg-sky-600 rounded-xl text-white shadow-lg"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-1.5">
          <button
            onMouseDown={() => onFpsMove('left', true)}
            onMouseUp={() => onFpsMove('left', false)}
            onTouchStart={() => onFpsMove('left', true)}
            onTouchEnd={() => onFpsMove('left', false)}
            className="p-3 bg-slate-800 active:bg-sky-600 rounded-xl text-white shadow-lg"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button
            onMouseDown={() => onFpsMove('backward', true)}
            onMouseUp={() => onFpsMove('backward', false)}
            onTouchStart={() => onFpsMove('backward', true)}
            onTouchEnd={() => onFpsMove('backward', false)}
            className="p-3 bg-slate-800 active:bg-sky-600 rounded-xl text-white shadow-lg"
          >
            <ArrowDown className="w-5 h-5" />
          </button>
          <button
            onMouseDown={() => onFpsMove('right', true)}
            onMouseUp={() => onFpsMove('right', false)}
            onTouchStart={() => onFpsMove('right', true)}
            onTouchEnd={() => onFpsMove('right', false)}
            className="p-3 bg-slate-800 active:bg-sky-600 rounded-xl text-white shadow-lg"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </>
  );
};
