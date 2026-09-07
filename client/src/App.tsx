import React, { useState, useEffect, useCallback } from 'react';
import { Header } from './components/ui/Header';
import { ViewerCanvas } from './components/PropertyViewer/ViewerCanvas';
import { RoomNavDrawer } from './components/ui/RoomNavDrawer';
import { RoomInfoPanel } from './components/ui/RoomInfoPanel';
import { BottomControls } from './components/ui/BottomControls';
import { ObjectDetailModal } from './components/ui/ObjectDetailModal';
import { FloorPlanModal } from './components/FloorPlan/FloorPlanModal';
import { PropertyOverviewModal } from './components/ui/PropertyOverviewModal';
import { WelcomeModal } from './components/ui/WelcomeModal';
import { GuidedTourControls } from './components/GuidedTour/GuidedTourControls';
import { FirstPersonControlsHelp } from './components/ui/FirstPersonControlsHelp';
import { FlatDimension, FlatBhk, FlatVariantId, FLAT_CONFIGS, getFlatVariantId, RoomInfo, InteractiveObject } from './data/propertyData';

export function App() {
  // Flat Selection State: 2 Dimensions (1,500 sq ft & 2,000 sq ft) × 2 Types (2 BHK & 3 BHK) = 4 Flats
  const [dimension, setDimension] = useState<FlatDimension>('1500');
  const [bhk, setBhk] = useState<FlatBhk>('2bhk');

  const variantId = getFlatVariantId(dimension, bhk);
  const currentConfig = FLAT_CONFIGS[variantId] || FLAT_CONFIGS['1500_2bhk'];
  const rooms = currentConfig.rooms;
  const interactiveObjects = currentConfig.interactiveObjects;
  const guidedTourSequence = currentConfig.guidedTourSequence;

  const [selectedRoomId, setSelectedRoomId] = useState<string>('living');
  const [selectedObject, setSelectedObject] = useState<InteractiveObject | null>(null);

  // View Modals State
  const [isWelcomeOpen, setIsWelcomeOpen] = useState(true);
  const [isOverviewOpen, setIsOverviewOpen] = useState(false);
  const [isFloorPlanOpen, setIsFloorPlanOpen] = useState(false);
  const [isGuidedTour, setIsGuidedTour] = useState(false);

  // Environment & View Controls
  const [isNightMode, setIsNightMode] = useState(false);
  const [isFirstPerson, setIsFirstPerson] = useState(false);
  const [isTopDownView, setIsTopDownView] = useState(false);
  const [isCutawayWalls, setIsCutawayWalls] = useState(true); // Default cutaway mode so furniture is 100% visible
  const [showCeiling, setShowCeiling] = useState(false);
  const [showHotspots, setShowHotspots] = useState(true);
  const [showMeasurements, setShowMeasurements] = useState(false);

  // First-Person WASD Keys State
  const [fpKeys, setFpKeys] = useState({
    forward: false,
    backward: false,
    left: false,
    right: false,
  });

  const handleSelectDimension = (newDim: FlatDimension) => {
    setDimension(newDim);
    const targetVariant = getFlatVariantId(newDim, bhk);
    const targetConfig = FLAT_CONFIGS[targetVariant];
    const roomExists = targetConfig.rooms.some((r) => r.id === selectedRoomId);
    if (!roomExists) {
      setSelectedRoomId('living');
    }
  };

  const handleSelectBhk = (newBhk: FlatBhk) => {
    setBhk(newBhk);
    const targetVariant = getFlatVariantId(dimension, newBhk);
    const targetConfig = FLAT_CONFIGS[targetVariant];
    const roomExists = targetConfig.rooms.some((r) => r.id === selectedRoomId);
    if (!roomExists) {
      setSelectedRoomId('living');
    }
  };

  useEffect(() => {
    if (!isFirstPerson) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      if (key === 'w' || key === 'arrowup') setFpKeys((prev) => ({ ...prev, forward: true }));
      if (key === 's' || key === 'arrowdown') setFpKeys((prev) => ({ ...prev, backward: true }));
      if (key === 'a' || key === 'arrowleft') setFpKeys((prev) => ({ ...prev, left: true }));
      if (key === 'd' || key === 'arrowright') setFpKeys((prev) => ({ ...prev, right: true }));
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      if (key === 'w' || key === 'arrowup') setFpKeys((prev) => ({ ...prev, forward: false }));
      if (key === 's' || key === 'arrowdown') setFpKeys((prev) => ({ ...prev, backward: false }));
      if (key === 'a' || key === 'arrowleft') setFpKeys((prev) => ({ ...prev, left: false }));
      if (key === 'd' || key === 'arrowright') setFpKeys((prev) => ({ ...prev, right: false }));
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [isFirstPerson]);

  const handleFpsMove = useCallback((direction: 'forward' | 'backward' | 'left' | 'right', active: boolean) => {
    setFpKeys((prev) => ({ ...prev, [direction]: active }));
  }, []);

  const handleSelectRoom = (roomId: string) => {
    setIsTopDownView(false);
    setSelectedRoomId(roomId);
  };

  const handleResetView = () => {
    setIsFirstPerson(false);
    setIsTopDownView(false);
    setSelectedRoomId('living');
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.warn('Fullscreen error:', err);
      });
    } else {
      document.exitFullscreen().catch((err) => {
        console.warn('Exit fullscreen error:', err);
      });
    }
  };

  return (
    <div className="w-screen h-screen overflow-hidden bg-slate-950 text-slate-100 font-sans relative">
      {/* Top Main Header Navigation */}
      <Header
        currentConfig={currentConfig}
        dimension={dimension}
        bhk={bhk}
        onSelectDimension={handleSelectDimension}
        onSelectBhk={handleSelectBhk}
        onOpenOverview={() => setIsOverviewOpen(true)}
        onOpenFloorPlan={() => setIsFloorPlanOpen(true)}
        onStartGuidedTour={() => {
          setIsGuidedTour(true);
          setIsFirstPerson(false);
          setIsTopDownView(false);
        }}
        isNightMode={isNightMode}
        onToggleNightMode={() => setIsNightMode(!isNightMode)}
        onToggleFullscreen={toggleFullscreen}
        isTopDownView={isTopDownView}
        onToggleTopDownView={() => setIsTopDownView(!isTopDownView)}
      />

      {/* Main 3D Viewport Area */}
      <main className="w-full h-full pt-14">
        <ViewerCanvas
          variantId={variantId}
          rooms={rooms}
          interactiveObjects={interactiveObjects}
          selectedRoomId={selectedRoomId}
          onSelectRoom={handleSelectRoom}
          onSelectObject={(obj) => setSelectedObject(obj)}
          isNightMode={isNightMode}
          isFirstPerson={isFirstPerson}
          isTopDownView={isTopDownView}
          isCutawayWalls={isCutawayWalls}
          showCeiling={showCeiling}
          showHotspots={showHotspots}
          showMeasurements={showMeasurements}
          onOpenFloorPlan={() => setIsFloorPlanOpen(true)}
          fpKeys={fpKeys}
        />
      </main>

      {/* Left Room Navigation Drawer */}
      <RoomNavDrawer
        currentConfig={currentConfig}
        rooms={rooms}
        selectedRoomId={selectedRoomId}
        onSelectRoom={handleSelectRoom}
      />

      {/* Right Room Information Side Panel */}
      <RoomInfoPanel
        rooms={rooms}
        selectedRoomId={selectedRoomId}
      />

      {/* Bottom Viewer Controls Bar */}
      <BottomControls
        onResetView={handleResetView}
        isFirstPerson={isFirstPerson}
        onToggleFirstPerson={() => {
          setIsFirstPerson(!isFirstPerson);
          setIsTopDownView(false);
        }}
        isTopDownView={isTopDownView}
        onToggleTopDownView={() => setIsTopDownView(!isTopDownView)}
        isCutawayWalls={isCutawayWalls}
        onToggleCutawayWalls={() => setIsCutawayWalls(!isCutawayWalls)}
        showCeiling={showCeiling}
        onToggleCeiling={() => setShowCeiling(!showCeiling)}
        showHotspots={showHotspots}
        onToggleHotspots={() => setShowHotspots(!showHotspots)}
        showMeasurements={showMeasurements}
        onToggleMeasurements={() => setShowMeasurements(!showMeasurements)}
        onOpenFloorPlan={() => setIsFloorPlanOpen(true)}
      />

      {/* First Person Controls HUD Overlay */}
      <FirstPersonControlsHelp
        isFirstPerson={isFirstPerson}
        onExitFirstPerson={() => setIsFirstPerson(false)}
        onFpsMove={handleFpsMove}
      />

      {/* Guided Tour Banner Overlay */}
      <GuidedTourControls
        isGuidedTour={isGuidedTour}
        guidedTourSequence={guidedTourSequence}
        rooms={rooms}
        selectedRoomId={selectedRoomId}
        onSelectRoom={handleSelectRoom}
        onExitGuidedTour={() => setIsGuidedTour(false)}
      />

      {/* 2D Interactive Architectural Floor Plan Modal */}
      <FloorPlanModal
        isOpen={isFloorPlanOpen}
        onClose={() => setIsFloorPlanOpen(false)}
        dimension={dimension}
        bhk={bhk}
        onSelectDimension={handleSelectDimension}
        onSelectBhk={handleSelectBhk}
        selectedRoomId={selectedRoomId}
        onSelectRoom={handleSelectRoom}
      />

      {/* Property Overview Brochure Modal */}
      <PropertyOverviewModal
        isOpen={isOverviewOpen}
        onClose={() => setIsOverviewOpen(false)}
        dimension={dimension}
        bhk={bhk}
        onSelectDimension={handleSelectDimension}
        onSelectBhk={handleSelectBhk}
        onStartTour={() => {
          setIsOverviewOpen(false);
          setIsWelcomeOpen(false);
        }}
      />

      {/* Welcome Hero Intro Modal */}
      <WelcomeModal
        isOpen={isWelcomeOpen}
        dimension={dimension}
        bhk={bhk}
        onSelectDimension={handleSelectDimension}
        onSelectBhk={handleSelectBhk}
        onStartTour={() => setIsWelcomeOpen(false)}
        onOpenFloorPlan={() => {
          setIsWelcomeOpen(false);
          setIsFloorPlanOpen(true);
        }}
      />

      {/* Interactive Furniture / Object Specs Modal */}
      <ObjectDetailModal
        object={selectedObject}
        onClose={() => setSelectedObject(null)}
      />
    </div>
  );
}

export default App;
