import React from 'react';
import { X, Tag, Maximize2, Sparkles, CheckCircle2 } from 'lucide-react';
import { InteractiveObject } from '../../data/propertyData';

interface ObjectDetailModalProps {
  object: InteractiveObject | null;
  onClose: () => void;
}

export const ObjectDetailModal: React.FC<ObjectDetailModalProps> = ({ object, onClose }) => {
  if (!object) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden text-slate-100 p-6 space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-indigo-500/10 text-indigo-400 border border-indigo-500/30">
              {object.category}
            </span>
            <h3 className="text-xl font-bold text-white leading-tight">{object.name}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Description */}
        <p className="text-xs text-slate-300 leading-relaxed bg-slate-950/50 p-3 rounded-xl border border-slate-800/60">
          {object.description}
        </p>

        {/* Dimensions */}
        <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950/80 border border-slate-800">
          <span className="text-xs text-slate-400 font-medium">Estimated Dimensions:</span>
          <span className="text-xs font-bold text-amber-400">{object.dimensions}</span>
        </div>

        {/* Specifications */}
        {object.specs && object.specs.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              Key Specifications
            </h4>
            <ul className="space-y-1.5">
              {object.specs.map((spec, idx) => (
                <li key={idx} className="text-xs text-slate-300 flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{spec}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Close Button */}
        <div className="pt-2">
          <button
            onClick={onClose}
            className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl text-xs transition-colors shadow-lg shadow-indigo-600/30"
          >
            Done Inspecting
          </button>
        </div>
      </div>
    </div>
  );
};
