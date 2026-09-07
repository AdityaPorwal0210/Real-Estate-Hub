import React from 'react';
import { X, Home, Compass, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { FlatDimension, FlatBhk, FlatVariantId, FlatConfigData, FLAT_CONFIGS, RoomInfo, getFlatVariantId } from '../../data/propertyData';

interface FloorPlanModalProps {
  isOpen: boolean;
  onClose: () => void;
  dimension: FlatDimension;
  bhk: FlatBhk;
  onSelectDimension: (dim: FlatDimension) => void;
  onSelectBhk: (bhk: FlatBhk) => void;
  selectedRoomId: string;
  onSelectRoom: (roomId: string) => void;
}

export const FloorPlanModal: React.FC<FloorPlanModalProps> = ({
  isOpen,
  onClose,
  dimension,
  bhk,
  onSelectDimension,
  onSelectBhk,
  selectedRoomId,
  onSelectRoom,
}) => {
  if (!isOpen) return null;

  const variantId = getFlatVariantId(dimension, bhk);
  const currentConfig: FlatConfigData = FLAT_CONFIGS[variantId] || FLAT_CONFIGS['1500_2bhk'];
  const rooms = currentConfig.rooms;
  const selectedRoom = rooms.find((r) => r.id === selectedRoomId) || rooms[0];

  // Map 3D coordinates to SVG coordinate system
  const getSvgCoords = (room: RoomInfo) => {
    if (dimension === '1500') {
      const x = (room.bounds.minX + 8.6) * 10;
      const y = (room.bounds.minZ + 6.6) * 10;
      const width = (room.bounds.maxX - room.bounds.minX) * 10;
      const height = (room.bounds.maxZ - room.bounds.minZ) * 10;
      return { x, y, width, height };
    } else {
      // 2000 sq ft coordinate mapping
      const x = (room.bounds.minX + 12.4) * 9.5;
      const y = (room.bounds.minZ + 7.4) * 9.5;
      const width = (room.bounds.maxX - room.bounds.minX) * 9.5;
      const height = (room.bounds.maxZ - room.bounds.minZ) * 9.5;
      return { x, y, width, height };
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-5xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/95 gap-3">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-slate-100 flex items-center gap-2">
                2D Architectural Blueprint ({currentConfig.badge})
              </h2>
              <p className="text-xs text-slate-400">
                Click any space to fly the 3D virtual tour camera directly into that room.
              </p>
            </div>
          </div>

          {/* Dual Dimension & BHK Selector Controls */}
          <div className="flex items-center gap-2 self-stretch sm:self-auto flex-wrap">
            {/* Dimension Pills */}
            <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800">
              <button
                onClick={() => onSelectDimension('1500')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  dimension === '1500'
                    ? 'bg-indigo-600 text-white shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                1,500 sq ft
              </button>
              <button
                onClick={() => onSelectDimension('2000')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  dimension === '2000'
                    ? 'bg-amber-500 text-slate-950 shadow font-black'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                2,000 sq ft
              </button>
            </div>

            {/* BHK Pills */}
            <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800">
              <button
                onClick={() => onSelectBhk('2bhk')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  bhk === '2bhk'
                    ? 'bg-indigo-600 text-white shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                2 BHK
              </button>
              <button
                onClick={() => onSelectBhk('3bhk')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  bhk === '3bhk'
                    ? 'bg-amber-500 text-slate-950 shadow font-black'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                3 BHK
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-100 hover:bg-slate-800 rounded-lg transition-colors ml-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="px-6 py-2.5 bg-slate-950/70 border-b border-slate-800/80 grid grid-cols-2 sm:grid-cols-5 gap-2 text-xs">
          <div>
            <span className="text-slate-500 text-[10px] block uppercase font-semibold">Configuration</span>
            <span className="font-bold text-indigo-300">{currentConfig.badge}</span>
          </div>
          <div>
            <span className="text-slate-500 text-[10px] block uppercase font-semibold">Total Super Area</span>
            <span className="font-bold text-slate-200">{currentConfig.totalAreaSqFt} sq ft ({currentConfig.totalAreaSqM} m²)</span>
          </div>
          <div>
            <span className="text-slate-500 text-[10px] block uppercase font-semibold">Carpet Area</span>
            <span className="font-bold text-slate-200">{currentConfig.carpetAreaSqFt} sq ft</span>
          </div>
          <div>
            <span className="text-slate-500 text-[10px] block uppercase font-semibold">Layout Specs</span>
            <span className="font-bold text-slate-200">{currentConfig.bedrooms} Bed • {currentConfig.bathrooms} Bath • {currentConfig.balconies} Balcony</span>
          </div>
          <div>
            <span className="text-slate-500 text-[10px] block uppercase font-semibold">Realistic Price</span>
            <span className="font-black text-emerald-400">{currentConfig.price}</span>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-auto p-4 sm:p-6 flex flex-col md:flex-row gap-6 items-center justify-center">
          {/* SVG Floor Plan Container */}
          <div className="w-full md:w-8/12 max-w-2xl bg-slate-950 border border-slate-800 rounded-2xl p-4 shadow-inner relative flex items-center justify-center min-h-[320px]">
            {dimension === '1500' ? (
              /* 1,500 sq ft Blueprint */
              <svg
                viewBox="-10 -10 195 175"
                className="w-full h-auto drop-shadow-xl select-none"
              >
                <defs>
                  <pattern id="grid-1500" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#1e293b" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect x="-10" y="-10" width="195" height="175" fill="url(#grid-1500)" />

                {/* North Indicator */}
                <g transform="translate(170, 10)">
                  <circle cx="0" cy="0" r="9" fill="#0f172a" stroke="#334155" strokeWidth="1" />
                  <path d="M 0 -6 L 3.5 3.5 L 0 2 L -3.5 3.5 Z" fill="#38bdf8" />
                  <text x="0" y="14" textAnchor="middle" fill="#94a3b8" fontSize="5.5" fontWeight="bold">N</text>
                </g>

                {/* Outer Wall Boundary */}
                <rect
                  x="-2"
                  y="-2"
                  width="176"
                  height="154"
                  fill="none"
                  stroke="#475569"
                  strokeWidth="3.5"
                  rx="2"
                />

                {/* Rooms */}
                {rooms.map((room) => {
                  const { x, y, width, height } = getSvgCoords(room);
                  const isSelected = room.id === selectedRoomId;

                  return (
                    <g
                      key={`fp-${variantId}-${room.id}`}
                      onClick={() => onSelectRoom(room.id)}
                      className="cursor-pointer transition-all duration-200 group"
                    >
                      <rect
                        x={x}
                        y={y}
                        width={width}
                        height={height}
                        fill={isSelected ? `${room.color}35` : '#0f172a'}
                        stroke={isSelected ? room.color : '#334155'}
                        strokeWidth={isSelected ? '2.5' : '1.2'}
                        rx="1.5"
                        className="group-hover:stroke-indigo-400 group-hover:fill-indigo-950/40 transition-colors"
                      />

                      {isSelected && (
                        <circle
                          cx={x + width / 2}
                          cy={y + height / 2 - 5}
                          r="2.8"
                          fill={room.color}
                          className="animate-ping opacity-75"
                        />
                      )}

                      <text
                        x={x + width / 2}
                        y={y + height / 2 - 1.5}
                        textAnchor="middle"
                        fill={isSelected ? '#ffffff' : '#e2e8f0'}
                        fontSize="4.5"
                        fontWeight={isSelected ? 'bold' : '600'}
                      >
                        {room.shortName}
                      </text>

                      <text
                        x={x + width / 2}
                        y={y + height / 2 + 5}
                        textAnchor="middle"
                        fill="#94a3b8"
                        fontSize="3.4"
                      >
                        {room.dimensions}
                      </text>
                    </g>
                  );
                })}
              </svg>
            ) : (
              /* 2,000 sq ft Blueprint */
              <svg
                viewBox="-10 -10 270 185"
                className="w-full h-auto drop-shadow-xl select-none"
              >
                <defs>
                  <pattern id="grid-2000" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#1e293b" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect x="-10" y="-10" width="270" height="185" fill="url(#grid-2000)" />

                {/* North Indicator */}
                <g transform="translate(245, 10)">
                  <circle cx="0" cy="0" r="9" fill="#0f172a" stroke="#334155" strokeWidth="1" />
                  <path d="M 0 -6 L 3.5 3.5 L 0 2 L -3.5 3.5 Z" fill="#38bdf8" />
                  <text x="0" y="14" textAnchor="middle" fill="#94a3b8" fontSize="5.5" fontWeight="bold">N</text>
                </g>

                {/* Outer Wall Boundary */}
                <rect
                  x="-2"
                  y="-2"
                  width="254"
                  height="165"
                  fill="none"
                  stroke="#475569"
                  strokeWidth="3.5"
                  rx="2"
                />

                {/* Rooms */}
                {rooms.map((room) => {
                  const { x, y, width, height } = getSvgCoords(room);
                  const isSelected = room.id === selectedRoomId;

                  return (
                    <g
                      key={`fp-${variantId}-${room.id}`}
                      onClick={() => onSelectRoom(room.id)}
                      className="cursor-pointer transition-all duration-200 group"
                    >
                      <rect
                        x={x}
                        y={y}
                        width={width}
                        height={height}
                        fill={isSelected ? `${room.color}35` : '#0f172a'}
                        stroke={isSelected ? room.color : '#334155'}
                        strokeWidth={isSelected ? '2.5' : '1.2'}
                        rx="1.5"
                        className="group-hover:stroke-indigo-400 group-hover:fill-indigo-950/40 transition-colors"
                      />

                      {isSelected && (
                        <circle
                          cx={x + width / 2}
                          cy={y + height / 2 - 5}
                          r="2.8"
                          fill={room.color}
                          className="animate-ping opacity-75"
                        />
                      )}

                      <text
                        x={x + width / 2}
                        y={y + height / 2 - 1.5}
                        textAnchor="middle"
                        fill={isSelected ? '#ffffff' : '#e2e8f0'}
                        fontSize="4.2"
                        fontWeight={isSelected ? 'bold' : '600'}
                      >
                        {room.shortName}
                      </text>

                      <text
                        x={x + width / 2}
                        y={y + height / 2 + 5}
                        textAnchor="middle"
                        fill="#94a3b8"
                        fontSize="3.2"
                      >
                        {room.dimensions}
                      </text>
                    </g>
                  );
                })}
              </svg>
            )}
          </div>

          {/* Room Selection Sidebar */}
          <div className="w-full md:w-4/12 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Selected Space Specs
              </h3>
              <span className="text-[11px] font-semibold text-indigo-400">
                {rooms.length} Spaces
              </span>
            </div>

            {selectedRoom && (
              <div 
                className="p-4 rounded-xl border bg-slate-950/80 shadow-lg space-y-3"
                style={{ borderColor: `${selectedRoom.color}50` }}
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: selectedRoom.color }} />
                    <h4 className="text-base font-bold text-slate-100">{selectedRoom.name}</h4>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-800 text-slate-300">
                    {selectedRoom.category.toUpperCase()}
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">{selectedRoom.description}</p>

                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800 text-xs">
                  <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800/80">
                    <span className="text-slate-500 text-[10px] block uppercase font-bold">Calculated Area</span>
                    <span className="font-semibold text-amber-400">{selectedRoom.areaSqM} m² ({selectedRoom.areaSqFt} sq ft)</span>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800/80">
                    <span className="text-slate-500 text-[10px] block uppercase font-bold">Dimensions</span>
                    <span className="font-semibold text-indigo-300">{selectedRoom.dimensions}</span>
                  </div>
                </div>

                <div className="pt-1">
                  <span className="text-xs font-semibold text-slate-400 block mb-1.5 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-amber-400" />
                    Key Architectural Features:
                  </span>
                  <ul className="space-y-1">
                    {selectedRoom.features.slice(0, 3).map((feat, idx) => (
                      <li key={idx} className="text-xs text-slate-300 flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 mt-0.5 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Quick Room Jump Buttons */}
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold text-slate-500 block">Quick Room Teleport</span>
              <div className="grid grid-cols-3 gap-1 max-h-28 overflow-y-auto no-scrollbar">
                {rooms.map((r) => (
                  <button
                    key={`btn-room-${r.id}`}
                    onClick={() => onSelectRoom(r.id)}
                    className={`p-1.5 rounded-lg text-[11px] font-medium text-center truncate border transition-all ${
                      r.id === selectedRoomId
                        ? 'bg-indigo-600 text-white border-indigo-500'
                        : 'bg-slate-950 text-slate-300 border-slate-800 hover:bg-slate-800'
                    }`}
                  >
                    {r.shortName}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-slate-950 border-t border-slate-800 flex justify-between items-center text-xs text-slate-400">
          <span>* Realistic architectural blueprints for all 4 configurations.</span>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white font-bold rounded-xl transition-all shadow-md flex items-center gap-1.5"
          >
            <span>Fly into 3D Space</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
