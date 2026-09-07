import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Layers, Home, Bed, Bath, Sun, DoorOpen } from 'lucide-react';
import { RoomInfo, FlatConfigData } from '../../data/propertyData';

interface RoomNavDrawerProps {
  currentConfig: FlatConfigData;
  rooms: RoomInfo[];
  selectedRoomId: string;
  onSelectRoom: (roomId: string) => void;
}

export const RoomNavDrawer: React.FC<RoomNavDrawerProps> = ({
  currentConfig,
  rooms,
  selectedRoomId,
  onSelectRoom,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All', icon: Layers },
    { id: 'living', label: 'Living', icon: Home },
    { id: 'bedroom', label: 'Beds', icon: Bed },
    { id: 'bathroom', label: 'Baths', icon: Bath },
    { id: 'outdoor', label: 'Balcony', icon: Sun },
  ];

  const filteredRooms = activeCategory === 'all'
    ? rooms
    : rooms.filter((r) => r.category === activeCategory);

  return (
    <div
      className={`fixed left-4 top-20 z-30 transition-all duration-300 ${
        isCollapsed ? 'w-12' : 'w-64'
      }`}
    >
      <div className="bg-slate-900/90 border border-slate-800 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]">
        {/* Drawer Header & Collapse Toggle */}
        <div className="p-3 border-b border-slate-800/80 flex items-center justify-between">
          {!isCollapsed && (
            <div className="flex items-center gap-2 min-w-0">
              <Layers className="w-4 h-4 text-indigo-400 shrink-0" />
              <div className="truncate">
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-200">
                  Spaces ({rooms.length})
                </h2>
                <span className="text-[10px] text-amber-400 font-bold block truncate">
                  {currentConfig.badge}
                </span>
              </div>
            </div>
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors mx-auto shrink-0"
            title={isCollapsed ? 'Expand Rooms Drawer' : 'Collapse Drawer'}
          >
            {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </button>
        </div>

        {!isCollapsed && (
          <>
            {/* Category Quick Filter Pills */}
            <div className="p-2 border-b border-slate-800/60 flex items-center gap-1 overflow-x-auto no-scrollbar">
              {categories.map((cat) => {
                const Icon = cat.icon;
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-2 py-1 rounded-lg text-[11px] font-medium whitespace-nowrap flex items-center gap-1 transition-all ${
                      isActive
                        ? 'bg-indigo-600 text-white shadow-md'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                    }`}
                  >
                    <Icon className="w-3 h-3" />
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Room Items List */}
            <div className="p-2 overflow-y-auto space-y-1.5 no-scrollbar max-h-[60vh]">
              {filteredRooms.map((room) => {
                const isSelected = room.id === selectedRoomId;
                return (
                  <button
                    key={room.id}
                    onClick={() => onSelectRoom(room.id)}
                    className={`w-full p-2.5 rounded-xl text-left transition-all flex items-center justify-between group border ${
                      isSelected
                        ? 'bg-gradient-to-r from-indigo-950/80 to-slate-900 border-indigo-500/60 shadow-lg shadow-indigo-950/50'
                        : 'bg-slate-950/40 border-slate-800/60 hover:bg-slate-800/60 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span
                        className={`w-2.5 h-2.5 rounded-full shrink-0 transition-transform ${
                          isSelected ? 'scale-125 ring-2 ring-indigo-400/50' : 'group-hover:scale-110'
                        }`}
                        style={{ backgroundColor: room.color }}
                      />
                      <div className="truncate">
                        <span
                          className={`text-xs block truncate ${
                            isSelected ? 'font-bold text-white' : 'font-medium text-slate-300'
                          }`}
                        >
                          {room.shortName}
                        </span>
                        <span className="text-[10px] text-slate-500 block truncate">
                          {room.dimensions}
                        </span>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 shrink-0 ml-1">
                      {room.areaSqM} m²
                    </span>
                  </button>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
