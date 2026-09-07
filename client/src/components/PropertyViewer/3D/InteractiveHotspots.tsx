import React, { useState } from 'react';
import { Html } from '@react-three/drei';
import { InteractiveObject } from '../../../data/propertyData';

interface InteractiveHotspotsProps {
  interactiveObjects: InteractiveObject[];
  selectedRoomId: string;
  onSelectObject: (obj: InteractiveObject) => void;
  onSelectRoom: (roomId: string) => void;
  showHotspots: boolean;
}

export const InteractiveHotspots: React.FC<InteractiveHotspotsProps> = ({
  interactiveObjects,
  selectedRoomId,
  onSelectObject,
  onSelectRoom,
  showHotspots
}) => {
  const [hoveredObjectId, setHoveredObjectId] = useState<string | null>(null);

  if (!showHotspots) return null;

  return (
    <group>
      {/* Furniture Interactive Hotspot Markers */}
      {interactiveObjects.map((obj) => {
        const isHovered = hoveredObjectId === obj.id;
        const isSelectedRoom = obj.roomId === selectedRoomId;

        return (
          <group key={obj.id} position={obj.hotspotPosition}>
            {/* Sleek 3D Glowing Sphere */}
            <mesh
              onPointerOver={(e) => {
                e.stopPropagation();
                setHoveredObjectId(obj.id);
                document.body.style.cursor = 'pointer';
              }}
              onPointerOut={(e) => {
                e.stopPropagation();
                setHoveredObjectId(null);
                document.body.style.cursor = 'auto';
              }}
              onClick={(e) => {
                e.stopPropagation();
                onSelectObject(obj);
              }}
            >
              <sphereGeometry args={[isHovered ? 0.18 : 0.12, 16, 16]} />
              <meshStandardMaterial
                color={isHovered ? '#38bdf8' : isSelectedRoom ? '#f59e0b' : '#6366f1'}
                emissive={isHovered ? '#0284c7' : isSelectedRoom ? '#d97706' : '#4f46e5'}
                emissiveIntensity={isHovered ? 2.0 : 1.0}
                roughness={0.1}
              />
            </mesh>

            {/* Subtle Ground Ring */}
            <mesh rotation={[-Math.PI / 2, 0, 0]}>
              <ringGeometry args={[0.14, 0.18, 32]} />
              <meshBasicMaterial
                color={isHovered ? '#38bdf8' : '#ffffff'}
                transparent
                opacity={isHovered ? 0.9 : 0.4}
              />
            </mesh>

            {/* Non-intrusive hover tooltip (only renders on explicit hover) */}
            {isHovered && (
              <Html distanceFactor={14} position={[0, 0.35, 0]} center style={{ pointerEvents: 'none' }}>
                <div className="px-2.5 py-1 rounded-lg text-xs font-bold whitespace-nowrap bg-slate-900/95 text-amber-300 border border-amber-500/50 shadow-xl backdrop-blur-md">
                  📍 {obj.name}
                </div>
              </Html>
            )}
          </group>
        );
      })}
    </group>
  );
};
