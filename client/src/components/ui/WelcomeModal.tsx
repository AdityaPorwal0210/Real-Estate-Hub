import React, { useState } from 'react';
import { Home, Compass, Map, Sparkles, ArrowRight, CheckCircle2, Bed, Bath, Sun, ShieldCheck } from 'lucide-react';
import { FlatDimension, FlatBhk, FlatVariantId, FLAT_CONFIGS, getFlatVariantId } from '../../data/propertyData';

interface WelcomeModalProps {
  isOpen: boolean;
  dimension: FlatDimension;
  bhk: FlatBhk;
  onSelectDimension: (dim: FlatDimension) => void;
  onSelectBhk: (bhk: FlatBhk) => void;
  onStartTour: () => void;
  onOpenFloorPlan: () => void;
}

export const WelcomeModal: React.FC<WelcomeModalProps> = ({
  isOpen,
  dimension,
  bhk,
  onSelectDimension,
  onSelectBhk,
  onStartTour,
  onOpenFloorPlan,
}) => {
  if (!isOpen) return null;

  const currentVariantId = getFlatVariantId(dimension, bhk);
  const activeConfig = FLAT_CONFIGS[currentVariantId];

  const flatList: { dim: FlatDimension; bhk: FlatBhk; id: FlatVariantId }[] = [
    { dim: '1500', bhk: '2bhk', id: '1500_2bhk' },
    { dim: '1500', bhk: '3bhk', id: '1500_3bhk' },
    { dim: '2000', bhk: '2bhk', id: '2000_2bhk' },
    { dim: '2000', bhk: '3bhk', id: '2000_3bhk' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/85 backdrop-blur-xl animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-indigo-500/30 rounded-3xl shadow-2xl overflow-hidden text-slate-100 p-5 sm:p-7 space-y-4 my-auto">
        {/* Decorative Top Accent Glow */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-indigo-500 via-amber-400 to-indigo-500" />

        {/* Hero Branding & Title */}
        <div className="text-center space-y-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-bold bg-indigo-500/10 text-indigo-400 border border-indigo-500/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive 3D Virtual Real-Estate Tour</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
            Choose from 4 Flat Configurations & Dimensions
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Both <strong className="text-indigo-400">1,500 sq ft</strong> and <strong className="text-amber-400">2,000 sq ft</strong> dimensions offer tailored <strong className="text-white">2 BHK</strong> and <strong className="text-white">3 BHK</strong> layouts with realistic pricing and custom 3D architecture.
          </p>
        </div>

        {/* Dimension Filter Tabs */}
        <div className="flex items-center justify-center gap-2">
          <button
            onClick={() => onSelectDimension('1500')}
            className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all ${
              dimension === '1500'
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 ring-2 ring-indigo-400'
                : 'bg-slate-950/80 text-slate-400 border border-slate-800 hover:text-white'
            }`}
          >
            🏢 1,500 sq ft Flats
          </button>

          <button
            onClick={() => onSelectDimension('2000')}
            className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all ${
              dimension === '2000'
                ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/30 ring-2 ring-amber-400 font-black'
                : 'bg-slate-950/80 text-slate-400 border border-slate-800 hover:text-white'
            }`}
          >
            🏰 2,000 sq ft Flats
          </button>
        </div>

        {/* 4 Flat Selection Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-1">
          {flatList.map((item) => {
            const config = FLAT_CONFIGS[item.id];
            const isSelected = dimension === item.dim && bhk === item.bhk;
            const isDimActive = dimension === item.dim;

            return (
              <div
                key={item.id}
                onClick={() => {
                  onSelectDimension(item.dim);
                  onSelectBhk(item.bhk);
                }}
                className={`p-3.5 rounded-2xl border-2 cursor-pointer transition-all duration-200 relative flex flex-col justify-between ${
                  isSelected
                    ? 'bg-gradient-to-b from-indigo-950/90 to-slate-900 border-indigo-500 shadow-xl shadow-indigo-950/60 ring-2 ring-indigo-500/30 scale-[1.02]'
                    : isDimActive
                    ? 'bg-slate-950/70 border-slate-700 hover:border-slate-600'
                    : 'bg-slate-950/30 border-slate-850 opacity-70 hover:opacity-100 hover:border-slate-700'
                }`}
              >
                {isSelected && (
                  <div className="absolute -top-2.5 right-3 px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-indigo-600 text-white shadow">
                    Selected
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-400">
                      {item.dim} sq ft
                    </span>
                    <span className="text-[10px] font-semibold text-slate-400">
                      {config.carpetAreaSqFt} sq ft Carpet
                    </span>
                  </div>

                  <h3 className="text-sm font-black text-white">{item.bhk.toUpperCase()} Flat</h3>
                  <div className="text-[11px] text-slate-400 truncate mb-1.5">{config.subtitle}</div>

                  <div className="my-1.5">
                    <span className="text-lg font-black text-emerald-400 block">{config.price}</span>
                    <span className="text-[10px] text-slate-400 font-medium">{config.pricePerSqFt}</span>
                  </div>

                  <div className="grid grid-cols-3 gap-1 py-1.5 border-y border-slate-800 text-[10px] text-slate-300 my-2">
                    <div className="flex items-center gap-1 font-semibold">
                      <Bed className="w-3 h-3 text-indigo-400" />
                      <span>{config.bedrooms} Bed</span>
                    </div>
                    <div className="flex items-center gap-1 font-semibold">
                      <Bath className="w-3 h-3 text-sky-400" />
                      <span>{config.bathrooms} Bath</span>
                    </div>
                    <div className="flex items-center gap-1 font-semibold">
                      <Sun className="w-3 h-3 text-amber-400" />
                      <span>{config.balconies} Balc</span>
                    </div>
                  </div>

                  <ul className="space-y-1 text-[11px] text-slate-300">
                    {config.highlights.slice(0, 2).map((h, idx) => (
                      <li key={idx} className="flex items-start gap-1">
                        <CheckCircle2 className="w-3 h-3 text-indigo-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-800/60 flex items-center justify-between text-[10px]">
                  <span className="text-slate-400">Est. EMI</span>
                  <span className="font-bold text-amber-300">{config.financials.estimatedEmi}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 pt-1">
          <button
            onClick={onStartTour}
            className="w-full sm:flex-1 py-3 px-6 rounded-2xl bg-gradient-to-r from-indigo-600 via-indigo-700 to-amber-600 hover:from-indigo-500 hover:to-amber-500 text-white font-extrabold text-sm transition-all shadow-xl shadow-indigo-600/30 flex items-center justify-center gap-2 group"
          >
            <span>Start 3D Tour ({activeConfig.badge} • {activeConfig.price})</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => {
              onStartTour();
              onOpenFloorPlan();
            }}
            className="w-full sm:w-auto py-3 px-6 rounded-2xl bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white font-bold text-sm transition-colors flex items-center justify-center gap-2"
          >
            <Map className="w-4 h-4 text-amber-400" />
            <span>View 2D Blueprint</span>
          </button>
        </div>
      </div>
    </div>
  );
};
