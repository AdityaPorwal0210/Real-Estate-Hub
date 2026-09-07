import React, { useState } from 'react';
import { X, Home, MapPin, CheckCircle2, ShieldCheck, Sparkles, Phone, DollarSign, Calculator, Bed, Bath, Sun } from 'lucide-react';
import { FlatDimension, FlatBhk, FlatVariantId, FLAT_CONFIGS, FlatConfigData, getFlatVariantId } from '../../data/propertyData';

interface PropertyOverviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  dimension: FlatDimension;
  bhk: FlatBhk;
  onSelectDimension: (dim: FlatDimension) => void;
  onSelectBhk: (bhk: FlatBhk) => void;
  onStartTour: () => void;
}

export const PropertyOverviewModal: React.FC<PropertyOverviewModalProps> = ({
  isOpen,
  onClose,
  dimension,
  bhk,
  onSelectDimension,
  onSelectBhk,
  onStartTour,
}) => {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState<'overview' | 'financials' | 'spaces'>('overview');
  const variantId = getFlatVariantId(dimension, bhk);
  const currentConfig: FlatConfigData = FLAT_CONFIGS[variantId] || FLAT_CONFIGS['1500_2bhk'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden text-slate-100 max-h-[90vh] flex flex-col">
        {/* Header Banner */}
        <div className="relative p-5 sm:p-6 bg-gradient-to-r from-indigo-950 via-slate-900 to-slate-950 border-b border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/30">
                Official Property Brochure
              </span>
              <span className="text-xs text-indigo-300 font-bold">
                {currentConfig.badge}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white">{currentConfig.name}</h2>
            <p className="text-xs text-slate-400 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-indigo-400" />
              {currentConfig.address}
            </p>
          </div>

          <div className="flex items-center gap-2 self-stretch sm:self-auto justify-between sm:justify-end flex-wrap">
            {/* Dimension Switcher */}
            <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800">
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
            </div>

            {/* BHK Switcher */}
            <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800">
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

            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Navigation Sub-Tabs */}
        <div className="flex items-center px-6 border-b border-slate-800 bg-slate-950/60 gap-4 text-xs font-semibold overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-3 border-b-2 transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'overview'
                ? 'border-indigo-500 text-indigo-400 font-bold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Home className="w-3.5 h-3.5" />
            <span>Specifications & Overview</span>
          </button>

          <button
            onClick={() => setActiveTab('financials')}
            className={`py-3 border-b-2 transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'financials'
                ? 'border-emerald-500 text-emerald-400 font-bold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Calculator className="w-3.5 h-3.5" />
            <span>Pricing & Financial Breakdown</span>
          </button>

          <button
            onClick={() => setActiveTab('spaces')}
            className={`py-3 border-b-2 transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'spaces'
                ? 'border-amber-500 text-amber-400 font-bold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Room Area Schedule ({currentConfig.rooms.length})</span>
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 flex-1">
          {activeTab === 'overview' && (
            <>
              {/* Key Pricing & Specs Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800">
                  <span className="text-[10px] text-slate-400 uppercase font-bold block">Realistic Price</span>
                  <span className="text-xl font-black text-emerald-400 block mt-0.5">{currentConfig.price}</span>
                  <span className="text-[10px] text-slate-500">{currentConfig.pricePerSqFt}</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800">
                  <span className="text-[10px] text-slate-400 uppercase font-bold block">Super Built-up Area</span>
                  <span className="text-xl font-black text-indigo-400 block mt-0.5">{currentConfig.totalAreaSqFt} sq ft</span>
                  <span className="text-[10px] text-slate-500">Carpet: {currentConfig.carpetAreaSqFt} sq ft</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800">
                  <span className="text-[10px] text-slate-400 uppercase font-bold block">Configuration</span>
                  <span className="text-xl font-black text-amber-400 block mt-0.5">{currentConfig.bedrooms} BHK</span>
                  <span className="text-[10px] text-slate-500">{currentConfig.bathrooms} Baths • {currentConfig.balconies} Balconies</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800">
                  <span className="text-[10px] text-slate-400 uppercase font-bold block">Parking & Status</span>
                  <span className="text-sm font-bold text-sky-400 block mt-1">{currentConfig.possession}</span>
                  <span className="text-[10px] text-slate-400">{currentConfig.parking}</span>
                </div>
              </div>

              {/* Key Highlights */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  Key Architectural Highlights
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentConfig.highlights.map((item, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-slate-950/40 border border-slate-800/60 text-xs text-slate-300 flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Society Amenities */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Society & Building Amenities
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {currentConfig.amenities.map((amenity, idx) => (
                    <div key={idx} className="p-2.5 rounded-xl bg-slate-950/40 border border-slate-800/40 text-xs text-slate-300 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {activeTab === 'financials' && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">
                    Total Estimated Unit Price ({currentConfig.badge})
                  </span>
                  <span className="text-2xl font-black text-white">{currentConfig.price}</span>
                </div>
                <div className="text-left sm:text-right">
                  <span className="text-xs text-slate-400 block">Est. Monthly Home Loan EMI</span>
                  <span className="text-lg font-black text-emerald-400">{currentConfig.financials.estimatedEmi}</span>
                  <span className="text-[10px] text-slate-500 block">@ 8.5% p.a. for 20 Years</span>
                </div>
              </div>

              {/* Detailed Breakdown Table */}
              <div className="rounded-2xl border border-slate-800 overflow-hidden">
                <table className="w-full text-xs text-left">
                  <thead className="bg-slate-950 text-slate-400 uppercase font-bold text-[10px] border-b border-slate-800">
                    <tr>
                      <th className="p-3">Cost Component</th>
                      <th className="p-3 text-right">Estimated Amount</th>
                      <th className="p-3 text-right">Remarks</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 bg-slate-950/40 text-slate-300">
                    <tr>
                      <td className="p-3 font-medium text-slate-200">Base Unit Consideration</td>
                      <td className="p-3 text-right font-bold text-white">{currentConfig.financials.basePrice}</td>
                      <td className="p-3 text-right text-slate-400">{currentConfig.totalAreaSqFt} sq ft Super Area</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-200">Reserved Covered Parking</td>
                      <td className="p-3 text-right font-bold text-white">{currentConfig.financials.parkingCharges}</td>
                      <td className="p-3 text-right text-slate-400">{currentConfig.parking}</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-200">Clubhouse & Amenities Fee</td>
                      <td className="p-3 text-right font-bold text-white">{currentConfig.financials.clubhouseCharges}</td>
                      <td className="p-3 text-right text-slate-400">Lifetime access to pool & gym</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-200">Estimated Stamp Duty & Reg.</td>
                      <td className="p-3 text-right font-bold text-amber-400">{currentConfig.financials.stampDutyEstimate}</td>
                      <td className="p-3 text-right text-slate-400">Approx 6% State Gov. charges</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-200">Monthly Society Maintenance</td>
                      <td className="p-3 text-right font-bold text-sky-400">{currentConfig.financials.maintenanceCharges}</td>
                      <td className="p-3 text-right text-slate-400">Includes 24/7 security & backup</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'spaces' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400 font-medium">Room-by-room architectural area schedule:</span>
                <span className="text-xs font-bold text-indigo-400">{currentConfig.totalAreaSqFt} sq ft Super Area</span>
              </div>
              <div className="rounded-2xl border border-slate-800 overflow-hidden">
                <table className="w-full text-xs text-left">
                  <thead className="bg-slate-950 text-slate-400 uppercase font-bold text-[10px] border-b border-slate-800">
                    <tr>
                      <th className="p-3">Space / Room</th>
                      <th className="p-3">Category</th>
                      <th className="p-3 text-right">Dimensions</th>
                      <th className="p-3 text-right">Area (m²)</th>
                      <th className="p-3 text-right">Area (sq ft)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 bg-slate-950/40 text-slate-300">
                    {currentConfig.rooms.map((room) => (
                      <tr key={room.id} className="hover:bg-slate-900/50">
                        <td className="p-3 font-semibold text-white flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: room.color }} />
                          <span>{room.name}</span>
                        </td>
                        <td className="p-3 capitalize text-slate-400">{room.category}</td>
                        <td className="p-3 text-right font-mono text-slate-200">{room.dimensions}</td>
                        <td className="p-3 text-right font-semibold text-amber-400">{room.areaSqM} m²</td>
                        <td className="p-3 text-right font-semibold text-indigo-300">{room.areaSqFt} sq ft</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Academic Disclaimer Box */}
          <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-300 leading-relaxed">
            🎓 <strong>Academic Demonstration Notice:</strong> All details, dimensions (1,500 sq ft & 2,000 sq ft), pricing figures, and architectural layout specifications are fictional demo data created for illustrative educational evaluation.
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between gap-3">
          <button
            onClick={() => {
              onClose();
              alert(`Academic Demo: Inquiry simulated for ${currentConfig.name} (${currentConfig.price}).`);
            }}
            className="px-4 py-2.5 rounded-xl border border-slate-700 text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800 transition-colors flex items-center gap-2"
          >
            <Phone className="w-3.5 h-3.5 text-indigo-400" />
            <span>Inquire Now (Demo)</span>
          </button>

          <button
            onClick={() => {
              onClose();
              onStartTour();
            }}
            className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-all shadow-lg shadow-indigo-600/30 flex items-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Enter 3D Virtual Tour ({currentConfig.badge})</span>
          </button>
        </div>
      </div>
    </div>
  );
};
