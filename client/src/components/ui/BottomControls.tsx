import React from 'react';
import { RotateCcw, Footprints, Eye, Layers, Ruler, Map, Compass, ArrowUpFromLine, SlidersHorizontal } from 'lucide-react';

interface BottomControlsProps {
  onResetView: () => void;
  isFirstPerson: boolean;
  onToggleFirstPerson: () => void;
  isTopDownView: boolean;
  onToggleTopDownView: () => void;
  isCutawayWalls: boolean;
  onToggleCutawayWalls: () => void;
  showCeiling: boolean;
  onToggleCeiling: () => void;
  showHotspots: boolean;
  onToggleHotspots: () => void;
  showMeasurements: boolean;
  onToggleMeasurements: () => void;
  onOpenFloorPlan: () => void;
}

export const BottomControls: React.FC<BottomControlsProps> = ({
  onResetView,
  isFirstPerson,
  onToggleFirstPerson,
  isTopDownView,
  onToggleTopDownView,
  isCutawayWalls,
  onToggleCutawayWalls,
  showCeiling,
  onToggleCeiling,
  showHotspots,
  onToggleHotspots,
  showMeasurements,
  onToggleMeasurements,
  onOpenFloorPlan,
}) => {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-30 w-auto max-w-[95vw]">
      <div className="bg-slate-900/95 border border-slate-800 backdrop-blur-xl px-3 py-2 rounded-2xl shadow-2xl flex items-center gap-1.5 overflow-x-auto no-scrollbar">
        {/* Reset View */}
        <button
          onClick={onResetView}
          title="Reset Camera View"
          className="px-3 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800 transition-colors flex items-center gap-1.5 whitespace-nowrap"
        >
          <RotateCcw className="w-3.5 h-3.5 text-indigo-400" />
          <span className="hidden sm:inline">Reset View</span>
        </button>

        {/* Top-Down Bird's Eye 3D View */}
        <button
          onClick={onToggleTopDownView}
          title="View 3D Apartment Straight From Top"
          className={`px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap ${
            isTopDownView
              ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/30'
              : 'bg-slate-800 text-amber-400 hover:bg-slate-700'
          }`}
        >
          <ArrowUpFromLine className="w-3.5 h-3.5" />
          <span>Top View (3D Map)</span>
        </button>

        {/* Cutaway Wall Height Toggle */}
        <button
          onClick={onToggleCutawayWalls}
          title="Toggle Low Cutaway Walls for Clear Furniture Visibility"
          className={`px-3 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 whitespace-nowrap ${
            isCutawayWalls
              ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
              : 'text-slate-300 hover:text-white hover:bg-slate-800'
          }`}
        >
          <SlidersHorizontal className="w-3.5 h-3.5 text-emerald-400" />
          <span>{isCutawayWalls ? 'Cutaway Walls' : 'Full Walls'}</span>
        </button>

        {/* First Person Walkthrough */}
        <button
          onClick={onToggleFirstPerson}
          title="Toggle WASD First-Person Walkthrough"
          className={`px-3 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 whitespace-nowrap ${
            isFirstPerson
              ? 'bg-sky-600 text-white shadow-md shadow-sky-600/30'
              : 'text-slate-300 hover:text-white hover:bg-slate-800'
          }`}
        >
          <Footprints className="w-3.5 h-3.5 text-sky-400" />
          <span className="hidden sm:inline">Walkthrough</span>
        </button>

        {/* Hotspots Toggle */}
        <button
          onClick={onToggleHotspots}
          title="Toggle 3D Interactive Hotspot Markers"
          className={`px-3 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 whitespace-nowrap ${
            showHotspots
              ? 'bg-indigo-950 text-indigo-300 border border-indigo-500/40'
              : 'text-slate-400 hover:text-white hover:bg-slate-800'
          }`}
        >
          <Eye className="w-3.5 h-3.5 text-indigo-400" />
          <span className="hidden lg:inline">Hotspots</span>
        </button>

        {/* Measurements Overlay */}
        <button
          onClick={onToggleMeasurements}
          title="Toggle Room Dimensions Overlay"
          className={`px-3 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 whitespace-nowrap ${
            showMeasurements
              ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
              : 'text-slate-400 hover:text-white hover:bg-slate-800'
          }`}
        >
          <Ruler className="w-3.5 h-3.5 text-amber-400" />
          <span className="hidden md:inline">Dimensions</span>
        </button>

        <div className="w-px h-5 bg-slate-800 mx-0.5" />

        {/* 2D Architectural Floor Plan */}
        <button
          onClick={onOpenFloorPlan}
          className="px-3.5 py-2 rounded-xl text-xs font-bold bg-indigo-600 text-white hover:bg-indigo-500 transition-colors flex items-center gap-1.5 whitespace-nowrap shadow-md shadow-indigo-600/30"
        >
          <Map className="w-3.5 h-3.5" />
          <span>2D Map</span>
        </button>
      </div>
    </div>
  );
};
