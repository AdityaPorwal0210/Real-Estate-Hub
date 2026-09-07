import React, { useState } from 'react';
import { Home, Compass, Sun, Moon, Maximize, Map, Info, Play, ArrowUpFromLine, Check, ChevronDown, Sliders } from 'lucide-react';
import { FlatDimension, FlatBhk, FlatVariantId, FlatConfigData, FLAT_CONFIGS, getFlatVariantId } from '../../data/propertyData';

interface HeaderProps {
  currentConfig: FlatConfigData;
  dimension: FlatDimension;
  bhk: FlatBhk;
  onSelectDimension: (dim: FlatDimension) => void;
  onSelectBhk: (bhk: FlatBhk) => void;
  onOpenOverview: () => void;
  onOpenFloorPlan: () => void;
  onStartGuidedTour: () => void;
  isNightMode: boolean;
  onToggleNightMode: () => void;
  onToggleFullscreen: () => void;
  isTopDownView: boolean;
  onToggleTopDownView: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentConfig,
  dimension,
  bhk,
  onSelectDimension,
  onSelectBhk,
  onOpenOverview,
  onOpenFloorPlan,
  onStartGuidedTour,
  isNightMode,
  onToggleNightMode,
  onToggleFullscreen,
  isTopDownView,
  onToggleTopDownView,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const flatOptions: { dim: FlatDimension; bhk: FlatBhk; label: string; area: string; price: string }[] = [
    { dim: '1500', bhk: '2bhk', label: '2 BHK Smart Luxury', area: '1,500 sq ft', price: '₹98.50 Lakh' },
    { dim: '1500', bhk: '3bhk', label: '3 BHK Smart Compact', area: '1,500 sq ft', price: '₹1.08 Crore' },
    { dim: '2000', bhk: '2bhk', label: '2 BHK Grand Presidential', area: '2,000 sq ft', price: '₹1.35 Crore' },
    { dim: '2000', bhk: '3bhk', label: '3 BHK Imperial Luxury', area: '2,000 sq ft', price: '₹1.48 Crore' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-slate-950/90 border-b border-slate-800/80 backdrop-blur-md px-3 sm:px-4 py-2 flex items-center justify-between text-slate-100 gap-2">
      {/* Brand & Property Tagline */}
      <div className="flex items-center gap-2.5">
        <div className="p-2 rounded-xl bg-gradient-to-tr from-indigo-600 to-amber-500 text-white shadow-lg shadow-indigo-600/30">
          <Home className="w-5 h-5" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-sm sm:text-base font-bold tracking-tight text-white flex items-center gap-1.5">
              {currentConfig.name}
            </h1>
          </div>
          <p className="text-xs text-slate-400 hidden sm:block">
            {currentConfig.tagline} • <span className="text-emerald-400 font-bold">{currentConfig.price}</span>
          </p>
        </div>
      </div>

      {/* Flat Dimension & BHK Selectors */}
      <div className="flex items-center gap-2">
        {/* Quick Dropdown / Selector for all 4 flats */}
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 border border-indigo-500/40 hover:border-indigo-500 text-xs font-bold transition-all shadow-md"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-indigo-300 font-extrabold">{currentConfig.badge}</span>
            <span className="text-emerald-400 font-black">{currentConfig.price}</span>
            <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* 4-Flat Dropdown Menu */}
          {isDropdownOpen && (
            <>
              <div
                className="fixed inset-0 z-40"
                onClick={() => setIsDropdownOpen(false)}
              />
              <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 sm:left-0 sm:translate-x-0 w-72 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl z-50 p-2 space-y-1 backdrop-blur-xl animate-fade-in">
                <div className="px-2 py-1 text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                  Select from 4 Flat Configurations
                </div>
                {flatOptions.map((opt) => {
                  const isCurrent = dimension === opt.dim && bhk === opt.bhk;
                  return (
                    <button
                      key={`${opt.dim}_${opt.bhk}`}
                      onClick={() => {
                        onSelectDimension(opt.dim);
                        onSelectBhk(opt.bhk);
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full p-2.5 rounded-xl text-left text-xs transition-all flex items-center justify-between border ${
                        isCurrent
                          ? 'bg-indigo-600 text-white border-indigo-500 shadow-md font-bold'
                          : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white'
                      }`}
                    >
                      <div>
                        <div className="font-bold flex items-center gap-1.5">
                          <span>{opt.bhk.toUpperCase()}</span>
                          <span className="text-[10px] opacity-80">({opt.area})</span>
                        </div>
                        <div className={`text-[10px] ${isCurrent ? 'text-indigo-200' : 'text-slate-400'}`}>
                          {opt.label}
                        </div>
                      </div>
                      <span className={`font-black text-xs ${isCurrent ? 'text-white' : 'text-emerald-400'}`}>
                        {opt.price}
                      </span>
                    </button>
                  );
                })}
              </div>
            </>
          )}
        </div>

        {/* Dual Dimension & BHK Quick Toggle Pills */}
        <div className="hidden lg:flex items-center gap-1 bg-slate-900/90 p-1 rounded-xl border border-slate-800">
          <button
            onClick={() => onSelectDimension('1500')}
            className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
              dimension === '1500'
                ? 'bg-indigo-600 text-white shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            1,500 sq ft
          </button>
          <button
            onClick={() => onSelectDimension('2000')}
            className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
              dimension === '2000'
                ? 'bg-amber-500 text-slate-950 shadow font-black'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            2,000 sq ft
          </button>
          <div className="w-px h-4 bg-slate-700 mx-0.5" />
          <button
            onClick={() => onSelectBhk('2bhk')}
            className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
              bhk === '2bhk'
                ? 'bg-indigo-600 text-white shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            2 BHK
          </button>
          <button
            onClick={() => onSelectBhk('3bhk')}
            className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
              bhk === '3bhk'
                ? 'bg-amber-500 text-slate-950 shadow font-black'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            3 BHK
          </button>
        </div>
      </div>

      {/* Center Action Tabs */}
      <div className="flex items-center gap-1.5 bg-slate-900/90 p-1 rounded-xl border border-slate-800">
        <button
          onClick={onToggleTopDownView}
          className={`px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
            isTopDownView
              ? 'bg-amber-500 text-slate-950 shadow-md'
              : 'text-amber-400 hover:text-amber-300 hover:bg-slate-800'
          }`}
        >
          <ArrowUpFromLine className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Top 3D</span>
        </button>

        <button
          onClick={onOpenFloorPlan}
          className="px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800 transition-colors flex items-center gap-1.5"
        >
          <Map className="w-3.5 h-3.5 text-indigo-400" />
          <span>2D Map</span>
        </button>

        <button
          onClick={onOpenOverview}
          className="px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800 transition-colors flex items-center gap-1.5 hidden md:flex"
        >
          <Info className="w-3.5 h-3.5 text-sky-400" />
          <span>Brochure</span>
        </button>

        <button
          onClick={onStartGuidedTour}
          className="px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-indigo-600 to-indigo-700 text-white shadow-md hover:from-indigo-500 hover:to-indigo-600 transition-all flex items-center gap-1.5"
        >
          <Play className="w-3.5 h-3.5 fill-current text-white" />
          <span className="hidden sm:inline">Tour</span>
        </button>
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-1.5">
        <button
          onClick={onToggleNightMode}
          title={isNightMode ? "Switch to Day Lighting" : "Switch to Night Lighting"}
          className={`p-2 rounded-xl border transition-all ${
            isNightMode
              ? 'bg-amber-500/10 text-amber-300 border-amber-500/40 hover:bg-amber-500/20'
              : 'bg-slate-900 text-amber-400 border-slate-800 hover:bg-slate-800'
          }`}
        >
          {isNightMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>

        <button
          onClick={onToggleFullscreen}
          title="Toggle Fullscreen"
          className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
        >
          <Maximize className="w-4 h-4" />
        </button>
      </div>
    </header>
  );
};
