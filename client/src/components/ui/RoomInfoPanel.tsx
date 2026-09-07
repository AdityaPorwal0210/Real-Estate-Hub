import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, Info, CheckCircle2, Maximize2, Sparkles } from 'lucide-react';
import { RoomInfo } from '../../data/propertyData';

interface RoomInfoPanelProps {
  rooms: RoomInfo[];
  selectedRoomId: string;
}

export const RoomInfoPanel: React.FC<RoomInfoPanelProps> = ({ rooms, selectedRoomId }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const room = rooms.find((r) => r.id === selectedRoomId) || rooms[0];

  if (!room) return null;

  return (
    <div
      className={`fixed right-4 top-20 z-30 transition-all duration-300 ${
        isCollapsed ? 'w-12' : 'w-80'
      }`}
    >
      <div className="bg-slate-900/90 border border-slate-800 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden flex flex-col text-slate-100">
        {/* Panel Header */}
        <div className="p-3.5 border-b border-slate-800/80 flex items-center justify-between">
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            title={isCollapsed ? 'Expand Room Info' : 'Collapse Room Info'}
          >
            {isCollapsed ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
          </button>
          {!isCollapsed && (
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: room.color }} />
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Space Information
              </h2>
            </div>
          )}
        </div>

        {!isCollapsed && (
          <div className="p-4 space-y-4 max-h-[75vh] overflow-y-auto no-scrollbar">
            {/* Title & Category Badge */}
            <div>
              <div className="flex items-center justify-between gap-2 mb-1">
                <h3 className="text-base font-bold text-white">{room.name}</h3>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-indigo-500/10 text-indigo-400 border border-indigo-500/30">
                  {room.shortName}
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">{room.description}</p>
            </div>

            {/* Metrics Cards */}
            <div className="grid grid-cols-2 gap-2.5">
              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
                  Calculated Area
                </span>
                <span className="text-sm font-black text-amber-400 block mt-0.5">
                  {room.areaSqM} m²
                </span>
                <span className="text-[10px] text-slate-400 font-medium block">
                  (~{room.areaSqFt} sq ft)
                </span>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
                  Dimensions
                </span>
                <span className="text-sm font-black text-indigo-400 block mt-0.5">
                  {room.dimensions}
                </span>
                <span className="text-[10px] text-slate-400 font-medium block">
                  Sample Data *
                </span>
              </div>
            </div>

            {/* Features List */}
            <div>
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                Architectural Features
              </h4>
              <ul className="space-y-2">
                {room.features.map((feat, idx) => (
                  <li
                    key={idx}
                    className="p-2 rounded-lg bg-slate-950/40 border border-slate-800/40 text-xs text-slate-300 flex items-start gap-2"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 mt-0.5 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Academic Demo Disclaimer Banner */}
            <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-[10px] text-amber-300/90 leading-tight">
              ⚠️ <strong>Demo Layout:</strong> Dimensions and area values are calibrated for realistic architectural demonstration.
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
