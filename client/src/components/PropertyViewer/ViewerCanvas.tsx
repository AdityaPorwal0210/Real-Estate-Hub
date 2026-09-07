import React, { useState, useEffect, Component, ReactNode } from 'react';
import { Canvas } from '@react-three/fiber';
import { ApartmentModel } from './3D/ApartmentModel';
import { LightingEnvironment } from './3D/LightingEnvironment';
import { InteractiveHotspots } from './3D/InteractiveHotspots';
import { CameraController } from './3D/CameraController';
import { WebGLFallback } from './WebGLFallback';
import { FlatVariantId, RoomInfo, InteractiveObject } from '../../data/propertyData';

interface ViewerCanvasProps {
  variantId: FlatVariantId;
  rooms: RoomInfo[];
  interactiveObjects: InteractiveObject[];
  selectedRoomId: string;
  onSelectRoom: (roomId: string) => void;
  onSelectObject: (obj: InteractiveObject) => void;
  isNightMode: boolean;
  isFirstPerson: boolean;
  isTopDownView: boolean;
  isCutawayWalls: boolean;
  showCeiling: boolean;
  showHotspots: boolean;
  showMeasurements: boolean;
  onOpenFloorPlan: () => void;
  fpKeys: { forward: boolean; backward: boolean; left: boolean; right: boolean };
}

// Simple ErrorBoundary Component for Canvas Safety
class CanvasErrorBoundary extends Component<{ children: ReactNode; fallback: ReactNode }, { hasError: boolean }> {
  constructor(props: { children: ReactNode; fallback: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.error("3D Canvas Error:", error);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

export const ViewerCanvas: React.FC<ViewerCanvasProps> = ({
  variantId,
  rooms,
  interactiveObjects,
  selectedRoomId,
  onSelectRoom,
  onSelectObject,
  isNightMode,
  isFirstPerson,
  isTopDownView,
  isCutawayWalls,
  showCeiling,
  showHotspots,
  showMeasurements,
  onOpenFloorPlan,
  fpKeys,
}) => {
  const [webGlSupported, setWebGlSupported] = useState(true);

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setWebGlSupported(false);
      }
    } catch {
      setWebGlSupported(false);
    }
  }, []);

  if (!webGlSupported) {
    return <WebGLFallback onOpenFloorPlan={onOpenFloorPlan} />;
  }

  return (
    <div className="w-full h-full relative select-none bg-slate-950">
      <CanvasErrorBoundary fallback={<WebGLFallback onOpenFloorPlan={onOpenFloorPlan} />}>
        <Canvas
          shadows
          camera={{ position: [-2.5, 2.2, 6.5], fov: 50, near: 0.1, far: 120 }}
          gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}
          onCreated={({ scene }) => {
            scene.background = null;
          }}
        >
          <LightingEnvironment isNightMode={isNightMode} />

          <ApartmentModel
            variantId={variantId}
            rooms={rooms}
            showCeiling={showCeiling}
            showMeasurements={showMeasurements}
            selectedRoomId={selectedRoomId}
            isCutawayWalls={isCutawayWalls}
          />

          <InteractiveHotspots
            interactiveObjects={interactiveObjects}
            selectedRoomId={selectedRoomId}
            onSelectObject={onSelectObject}
            onSelectRoom={onSelectRoom}
            showHotspots={showHotspots}
          />

          <CameraController
            rooms={rooms}
            selectedRoomId={selectedRoomId}
            isFirstPerson={isFirstPerson}
            isTopDownView={isTopDownView}
            fpKeys={fpKeys}
          />
        </Canvas>
      </CanvasErrorBoundary>
    </div>
  );
};
