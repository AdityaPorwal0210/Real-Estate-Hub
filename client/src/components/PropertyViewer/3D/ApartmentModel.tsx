import React from 'react';
import * as THREE from 'three';
import { Text } from '@react-three/drei';
import { FlatVariantId, RoomInfo } from '../../../data/propertyData';

interface ApartmentModelProps {
  variantId: FlatVariantId;
  rooms: RoomInfo[];
  showCeiling: boolean;
  showMeasurements: boolean;
  selectedRoomId: string;
  isCutawayWalls: boolean;
}

export const ApartmentModel: React.FC<ApartmentModelProps> = ({
  variantId,
  rooms,
  showCeiling,
  showMeasurements,
  selectedRoomId,
  isCutawayWalls,
}) => {
  const fullWallHeight = 2.8;
  const interiorWallHeight = isCutawayWalls ? 1.2 : 2.8;
  const wallThickness = 0.2;
  const is2000 = variantId.startsWith('2000');
  const is3Bhk = variantId.endsWith('3bhk');

  return (
    <group position={[0, 0, 0]}>
      {/* ==================== 1. FLOORS ==================== */}
      
      {/* ========== 1500 SQ FT FLOORS ========== */}
      {!is2000 && (
        <group key={`floors-${variantId}`}>
          {/* Living Lounge */}
          <mesh position={[-5.8, 0.01, 3.8]} receiveShadow>
            <boxGeometry args={[5.6, 0.02, 5.6]} />
            <meshStandardMaterial color="#f8fafc" roughness={0.15} metalness={0.1} />
          </mesh>

          {/* Foyer */}
          <mesh position={[-1.5, 0.01, 5.2]} receiveShadow>
            <boxGeometry args={[3.0, 0.02, 2.8]} />
            <meshStandardMaterial color="#e2e8f0" roughness={0.2} />
          </mesh>

          {/* Balcony */}
          <mesh position={[-5.8, 0.01, 7.5]} receiveShadow>
            <boxGeometry args={[5.6, 0.02, 1.8]} />
            <meshStandardMaterial color="#78350f" roughness={0.6} />
          </mesh>

          {/* Dining / Smart Bed 3 Area */}
          {!is3Bhk ? (
            /* 1500 2BHK: Dining */
            <mesh position={[0.0, 0.01, 1.8]} receiveShadow>
              <boxGeometry args={[6.0, 0.02, 3.8]} />
              <meshStandardMaterial color="#cbd5e1" roughness={0.2} />
            </mesh>
          ) : (
            /* 1500 3BHK: Dining + Bed 3 */
            <group>
              <mesh position={[-1.5, 0.01, 1.8]} receiveShadow>
                <boxGeometry args={[3.0, 0.02, 3.8]} />
                <meshStandardMaterial color="#cbd5e1" roughness={0.2} />
              </mesh>
              <mesh position={[1.5, 0.01, 1.8]} receiveShadow>
                <boxGeometry args={[3.0, 0.02, 3.8]} />
                <meshStandardMaterial color="#a16207" roughness={0.35} />
              </mesh>
            </group>
          )}

          {/* Kitchen */}
          <mesh position={[5.8, 0.01, 3.8]} receiveShadow>
            <boxGeometry args={[5.6, 0.02, 5.6]} />
            <meshStandardMaterial color="#334155" roughness={0.3} />
          </mesh>

          {/* Master Bedroom */}
          <mesh position={[-3.8, 0.01, -3.8]} receiveShadow>
            <boxGeometry args={[3.6, 0.02, 5.6]} />
            <meshStandardMaterial color="#92400e" roughness={0.4} />
          </mesh>

          {/* Master Bathroom */}
          <mesh position={[-7.2, 0.01, -5.2]} receiveShadow>
            <boxGeometry args={[2.8, 0.02, 2.8]} />
            <meshStandardMaterial color="#0f766e" roughness={0.2} />
          </mesh>

          {/* Bedroom 2 */}
          <mesh position={[5.8, 0.01, -3.8]} receiveShadow>
            <boxGeometry args={[5.6, 0.02, 5.6]} />
            <meshStandardMaterial color="#b45309" roughness={0.4} />
          </mesh>

          {/* Common Bathroom */}
          <mesh position={[0.5, 0.01, -4.8]} receiveShadow>
            <boxGeometry args={[5.0, 0.02, 3.6]} />
            <meshStandardMaterial color="#0284c7" roughness={0.2} />
          </mesh>

          {/* Hallway */}
          <mesh position={[0.0, 0.01, -1.0]} receiveShadow>
            <boxGeometry args={[6.0, 0.02, 2.0]} />
            <meshStandardMaterial color="#cbd5e1" roughness={0.2} />
          </mesh>

          {/* Ground Foundation Base */}
          <mesh position={[0, -0.06, 0]} receiveShadow>
            <boxGeometry args={[20, 0.1, 18]} />
            <meshStandardMaterial color="#0f172a" roughness={0.9} />
          </mesh>
        </group>
      )}

      {/* ========== 2000 SQ FT FLOORS ========== */}
      {is2000 && (
        <group key={`floors-${variantId}`}>
          {/* Presidential Living Room (Statuario Italian Marble) */}
          <mesh position={[-6.8, 0.01, 4.2]} receiveShadow>
            <boxGeometry args={[7.2, 0.02, 6.0]} />
            <meshStandardMaterial color="#ffffff" roughness={0.1} metalness={0.15} />
          </mesh>

          {/* Main Balcony Sundeck */}
          <mesh position={[-6.8, 0.01, 8.2]} receiveShadow>
            <boxGeometry args={[7.2, 0.02, 2.0]} />
            <meshStandardMaterial color="#78350f" roughness={0.6} />
          </mesh>

          {/* Grand Foyer */}
          <mesh position={[-1.5, 0.01, 5.7]} receiveShadow>
            <boxGeometry args={[3.2, 0.02, 3.0]} />
            <meshStandardMaterial color="#e2e8f0" roughness={0.18} />
          </mesh>

          {/* Executive Dining */}
          <mesh position={[0.0, 0.01, 2.0]} receiveShadow>
            <boxGeometry args={[6.4, 0.02, 4.2]} />
            <meshStandardMaterial color="#cbd5e1" roughness={0.2} />
          </mesh>

          {/* Island Kitchen */}
          <mesh position={[6.8, 0.01, 4.2]} receiveShadow>
            <boxGeometry args={[7.2, 0.02, 6.0]} />
            <meshStandardMaterial color="#1e293b" roughness={0.3} />
          </mesh>

          {/* Master Bedroom */}
          <mesh position={[-6.4, 0.01, -4.2]} receiveShadow>
            <boxGeometry args={[8.0, 0.02, 6.4]} />
            <meshStandardMaterial color="#7c2d12" roughness={0.35} />
          </mesh>

          {/* Master Balcony Sundeck */}
          <mesh position={[-11.4, 0.01, -4.2]} receiveShadow>
            <boxGeometry args={[2.0, 0.02, 4.4]} />
            <meshStandardMaterial color="#78350f" roughness={0.6} />
          </mesh>

          {/* Master Luxury Spa Bath */}
          <mesh position={[-8.6, 0.01, -5.8]} receiveShadow>
            <boxGeometry args={[3.6, 0.02, 3.2]} />
            <meshStandardMaterial color="#065f46" roughness={0.2} />
          </mesh>

          {/* Bedroom 2 */}
          <mesh position={[6.8, 0.01, -4.2]} receiveShadow>
            <boxGeometry args={[7.2, 0.02, 6.4]} />
            <meshStandardMaterial color="#b45309" roughness={0.4} />
          </mesh>

          {/* Bedroom 3 / Study Suite (for 2000 3BHK) */}
          {is3Bhk && (
            <mesh position={[11.2, 0.01, 0.0]} receiveShadow>
              <boxGeometry args={[5.2, 0.02, 6.0]} />
              <meshStandardMaterial color="#a16207" roughness={0.35} />
            </mesh>
          )}

          {/* Bathroom 2 */}
          <mesh position={[0.8, 0.01, -5.2]} receiveShadow>
            <boxGeometry args={[4.4, 0.02, 4.2]} />
            <meshStandardMaterial color="#0284c7" roughness={0.2} />
          </mesh>

          {/* Powder Room (Bath 3) */}
          <mesh position={[-1.8, 0.01, -2.5]} receiveShadow>
            <boxGeometry args={[2.8, 0.02, 2.6]} />
            <meshStandardMaterial color="#c2410c" roughness={0.25} />
          </mesh>

          {/* Hallways */}
          <mesh position={[0.0, 0.01, -0.8]} receiveShadow>
            <boxGeometry args={[7.0, 0.02, 2.2]} />
            <meshStandardMaterial color="#cbd5e1" roughness={0.2} />
          </mesh>

          {/* Ground Foundation Base */}
          <mesh position={[0.5, -0.06, 0]} receiveShadow>
            <boxGeometry args={[is3Bhk ? 26 : 24, 0.1, 20]} />
            <meshStandardMaterial color="#0f172a" roughness={0.9} />
          </mesh>
        </group>
      )}

      {/* ==================== 2. 3D FLOOR LABELS ==================== */}
      {rooms.map((room) => (
        <group key={`floor-label-${variantId}-${room.id}`} position={[room.position[0], 0.04, room.position[2]]}>
          <Text
            rotation={[-Math.PI / 2, 0, 0]}
            fontSize={0.4}
            color={room.id === selectedRoomId ? '#fbbf24' : '#64748b'}
            anchorX="center"
            anchorY="middle"
          >
            {room.shortName.toUpperCase()}
          </Text>
        </group>
      ))}

      {/* ==================== 3. WALLS ==================== */}
      {!is2000 ? (
        /* ========== 1500 SQ FT WALLS ========== */
        <group key={`walls-${variantId}`}>
          {/* North Wall */}
          <mesh position={[0, fullWallHeight / 2, -6.6]} castShadow receiveShadow>
            <boxGeometry args={[17.2 + wallThickness, fullWallHeight, wallThickness]} />
            <meshStandardMaterial color="#e2e8f0" roughness={0.7} />
          </mesh>

          {/* West Wall */}
          <mesh position={[-8.6, fullWallHeight / 2, 0]} castShadow receiveShadow>
            <boxGeometry args={[wallThickness, fullWallHeight, 13.2]} />
            <meshStandardMaterial color="#e2e8f0" roughness={0.7} />
          </mesh>

          {/* East Wall */}
          <mesh position={[8.6, fullWallHeight / 2, 0]} castShadow receiveShadow>
            <boxGeometry args={[wallThickness, fullWallHeight, 13.2]} />
            <meshStandardMaterial color="#e2e8f0" roughness={0.7} />
          </mesh>

          {/* South Walls */}
          <mesh position={[4.3, fullWallHeight / 2, 6.6]} castShadow receiveShadow>
            <boxGeometry args={[8.6, fullWallHeight, wallThickness]} />
            <meshStandardMaterial color="#e2e8f0" roughness={0.7} />
          </mesh>
          <mesh position={[-1.5, fullWallHeight / 2, 6.6]} castShadow receiveShadow>
            <boxGeometry args={[3.0, fullWallHeight, wallThickness]} />
            <meshStandardMaterial color="#cbd5e1" roughness={0.7} />
          </mesh>
          <mesh position={[-5.8, 0.4, 6.6]} castShadow receiveShadow>
            <boxGeometry args={[5.6, 0.8, wallThickness]} />
            <meshStandardMaterial color="#cbd5e1" roughness={0.7} />
          </mesh>

          {/* Horizontal Divider (Z = -1.0) */}
          <mesh position={[-5.3, interiorWallHeight / 2, -1.0]} castShadow receiveShadow>
            <boxGeometry args={[6.6, interiorWallHeight, wallThickness]} />
            <meshStandardMaterial color="#cbd5e1" roughness={0.7} />
          </mesh>
          <mesh position={[5.8, interiorWallHeight / 2, -1.0]} castShadow receiveShadow>
            <boxGeometry args={[5.6, interiorWallHeight, wallThickness]} />
            <meshStandardMaterial color="#cbd5e1" roughness={0.7} />
          </mesh>

          {/* Vertical Dividers */}
          <mesh position={[-3.0, interiorWallHeight / 2, 3.8]} castShadow receiveShadow>
            <boxGeometry args={[wallThickness, interiorWallHeight, 5.6]} />
            <meshStandardMaterial color="#cbd5e1" roughness={0.7} />
          </mesh>
          <mesh position={[3.0, interiorWallHeight / 2, 3.8]} castShadow receiveShadow>
            <boxGeometry args={[wallThickness, interiorWallHeight, 5.6]} />
            <meshStandardMaterial color="#cbd5e1" roughness={0.7} />
          </mesh>

          {/* Divider for 1500 3BHK Bed 3 */}
          {is3Bhk && (
            <mesh position={[0.0, interiorWallHeight / 2, 1.8]} castShadow receiveShadow>
              <boxGeometry args={[wallThickness, interiorWallHeight, 3.6]} />
              <meshStandardMaterial color="#cbd5e1" roughness={0.7} />
            </mesh>
          )}

          {/* Master Bath Solid Wall */}
          <mesh position={[-5.8, fullWallHeight / 2, -5.2]} castShadow receiveShadow>
            <boxGeometry args={[wallThickness, fullWallHeight, 2.8]} />
            <meshStandardMaterial color="#e2e8f0" roughness={0.7} />
          </mesh>

          {/* Common Bath Wall */}
          <mesh position={[-2.0, fullWallHeight / 2, -4.8]} castShadow receiveShadow>
            <boxGeometry args={[wallThickness, fullWallHeight, 3.6]} />
            <meshStandardMaterial color="#e2e8f0" roughness={0.7} />
          </mesh>
          <mesh position={[3.0, interiorWallHeight / 2, -4.8]} castShadow receiveShadow>
            <boxGeometry args={[wallThickness, interiorWallHeight, 3.6]} />
            <meshStandardMaterial color="#cbd5e1" roughness={0.7} />
          </mesh>

          {/* Balcony Railing */}
          <mesh position={[-5.8, 0.55, 8.4]}>
            <boxGeometry args={[5.6, 1.1, 0.05]} />
            <meshStandardMaterial color="#38bdf8" transparent opacity={0.4} />
          </mesh>
        </group>
      ) : (
        /* ========== 2000 SQ FT WALLS ========== */
        <group key={`walls-${variantId}`}>
          {/* North Wall */}
          <mesh position={[0, fullWallHeight / 2, -7.4]} castShadow receiveShadow>
            <boxGeometry args={[20.8 + wallThickness, fullWallHeight, wallThickness]} />
            <meshStandardMaterial color="#e2e8f0" roughness={0.7} />
          </mesh>

          {/* West Wall */}
          <mesh position={[-10.4, fullWallHeight / 2, 0.4]} castShadow receiveShadow>
            <boxGeometry args={[wallThickness, fullWallHeight, 13.6]} />
            <meshStandardMaterial color="#e2e8f0" roughness={0.7} />
          </mesh>

          {/* East Walls */}
          {is3Bhk ? (
            <group>
              <mesh position={[13.8, fullWallHeight / 2, 0.0]} castShadow receiveShadow>
                <boxGeometry args={[wallThickness, fullWallHeight, 6.0]} />
                <meshStandardMaterial color="#e2e8f0" roughness={0.7} />
              </mesh>
              <mesh position={[12.1, fullWallHeight / 2, 3.0]} castShadow receiveShadow>
                <boxGeometry args={[3.4, fullWallHeight, wallThickness]} />
                <meshStandardMaterial color="#e2e8f0" roughness={0.7} />
              </mesh>
              <mesh position={[12.1, fullWallHeight / 2, -3.0]} castShadow receiveShadow>
                <boxGeometry args={[3.4, fullWallHeight, wallThickness]} />
                <meshStandardMaterial color="#e2e8f0" roughness={0.7} />
              </mesh>
            </group>
          ) : (
            <mesh position={[10.4, fullWallHeight / 2, 0]} castShadow receiveShadow>
              <boxGeometry args={[wallThickness, fullWallHeight, 14.8]} />
              <meshStandardMaterial color="#e2e8f0" roughness={0.7} />
            </mesh>
          )}

          {/* South Walls */}
          <mesh position={[5.3, fullWallHeight / 2, 7.2]} castShadow receiveShadow>
            <boxGeometry args={[10.2, fullWallHeight, wallThickness]} />
            <meshStandardMaterial color="#e2e8f0" roughness={0.7} />
          </mesh>
          <mesh position={[-1.5, fullWallHeight / 2, 7.2]} castShadow receiveShadow>
            <boxGeometry args={[3.2, fullWallHeight, wallThickness]} />
            <meshStandardMaterial color="#cbd5e1" roughness={0.7} />
          </mesh>
          <mesh position={[-6.8, 0.4, 7.2]} castShadow receiveShadow>
            <boxGeometry args={[7.2, 0.8, wallThickness]} />
            <meshStandardMaterial color="#cbd5e1" roughness={0.7} />
          </mesh>

          {/* Master Balcony Walls & Railings */}
          <mesh position={[-12.4, fullWallHeight / 2, -4.2]} castShadow receiveShadow>
            <boxGeometry args={[wallThickness, fullWallHeight, 4.4]} />
            <meshStandardMaterial color="#e2e8f0" roughness={0.7} />
          </mesh>
          <mesh position={[-11.4, 0.55, -6.4]}>
            <boxGeometry args={[2.0, 1.1, 0.05]} />
            <meshStandardMaterial color="#38bdf8" transparent opacity={0.4} />
          </mesh>
          <mesh position={[-11.4, 0.55, -2.0]}>
            <boxGeometry args={[2.0, 1.1, 0.05]} />
            <meshStandardMaterial color="#38bdf8" transparent opacity={0.4} />
          </mesh>

          {/* Horizontal Dividers */}
          <mesh position={[-6.4, interiorWallHeight / 2, -1.0]} castShadow receiveShadow>
            <boxGeometry args={[8.0, interiorWallHeight, wallThickness]} />
            <meshStandardMaterial color="#cbd5e1" roughness={0.7} />
          </mesh>
          <mesh position={[6.8, interiorWallHeight / 2, -1.0]} castShadow receiveShadow>
            <boxGeometry args={[7.2, interiorWallHeight, wallThickness]} />
            <meshStandardMaterial color="#cbd5e1" roughness={0.7} />
          </mesh>

          {/* Vertical Dividers */}
          <mesh position={[-3.2, interiorWallHeight / 2, 4.2]} castShadow receiveShadow>
            <boxGeometry args={[wallThickness, interiorWallHeight, 6.0]} />
            <meshStandardMaterial color="#cbd5e1" roughness={0.7} />
          </mesh>
          <mesh position={[3.2, interiorWallHeight / 2, 4.2]} castShadow receiveShadow>
            <boxGeometry args={[wallThickness, interiorWallHeight, 6.0]} />
            <meshStandardMaterial color="#cbd5e1" roughness={0.7} />
          </mesh>

          {/* Master Bath Wall */}
          <mesh position={[-6.8, fullWallHeight / 2, -5.8]} castShadow receiveShadow>
            <boxGeometry args={[wallThickness, fullWallHeight, 3.2]} />
            <meshStandardMaterial color="#e2e8f0" roughness={0.7} />
          </mesh>

          {/* Powder Room Divider */}
          <mesh position={[-1.8, fullWallHeight / 2, -3.8]} castShadow receiveShadow>
            <boxGeometry args={[2.8, fullWallHeight, wallThickness]} />
            <meshStandardMaterial color="#e2e8f0" roughness={0.7} />
          </mesh>
          <mesh position={[-0.4, fullWallHeight / 2, -2.5]} castShadow receiveShadow>
            <boxGeometry args={[wallThickness, fullWallHeight, 2.6]} />
            <meshStandardMaterial color="#e2e8f0" roughness={0.7} />
          </mesh>

          {/* Main Balcony Glass Railing */}
          <mesh position={[-6.8, 0.55, 9.2]}>
            <boxGeometry args={[7.2, 1.1, 0.05]} />
            <meshStandardMaterial color="#38bdf8" transparent opacity={0.4} roughness={0.1} />
          </mesh>
        </group>
      )}

      {/* ==================== 4. FURNITURE ==================== */}
      {!is2000 ? (
        /* ========== 1500 SQ FT FURNITURE ========== */
        <group key={`furn-${variantId}`}>
          {/* Living Sofa */}
          <group position={[-6.4, 0, 4.6]}>
            <mesh position={[0, 0.25, 0]} castShadow receiveShadow>
              <boxGeometry args={[3.0, 0.5, 1.0]} />
              <meshStandardMaterial color="#1e293b" roughness={0.5} />
            </mesh>
            <mesh position={[0.9, 0.25, -0.9]} castShadow receiveShadow>
              <boxGeometry args={[1.0, 0.5, 1.1]} />
              <meshStandardMaterial color="#1e293b" roughness={0.5} />
            </mesh>
          </group>

          {/* TV Unit */}
          <group position={[-3.25, 0, 3.8]}>
            <mesh position={[0, 0.3, 0]} castShadow>
              <boxGeometry args={[0.35, 0.45, 2.2]} />
              <meshStandardMaterial color="#0f172a" roughness={0.4} />
            </mesh>
            <mesh position={[0.05, 1.3, 0]} castShadow>
              <boxGeometry args={[0.06, 1.0, 1.8]} />
              <meshStandardMaterial color="#020617" metalness={0.9} roughness={0.1} />
            </mesh>
            <mesh position={[0.08, 1.3, 0]}>
              <boxGeometry args={[0.01, 0.94, 1.74]} />
              <meshStandardMaterial color="#0284c7" emissive="#0369a1" emissiveIntensity={0.8} />
            </mesh>
          </group>

          {/* Dining Table (for 1500 2BHK) */}
          {!is3Bhk && (
            <group position={[0.0, 0, 1.8]}>
              <mesh position={[0, 0.74, 0]} castShadow receiveShadow>
                <boxGeometry args={[1.8, 0.05, 1.0]} />
                <meshStandardMaterial color="#78350f" roughness={0.4} />
              </mesh>
              {[-0.8, 0.8].map((x) =>
                [-0.4, 0.4].map((z) => (
                  <mesh key={`dleg-${x}-${z}`} position={[x, 0.36, z]} castShadow>
                    <cylinderGeometry args={[0.03, 0.03, 0.72, 8]} />
                    <meshStandardMaterial color="#0f172a" />
                  </mesh>
                ))
              )}
            </group>
          )}

          {/* Smart Bed 3 / Study Desk (for 1500 3BHK) */}
          {is3Bhk && (
            <group position={[1.5, 0, 1.8]}>
              <mesh position={[0, 0.38, 0.4]} castShadow>
                <boxGeometry args={[1.4, 0.04, 0.7]} />
                <meshStandardMaterial color="#78350f" />
              </mesh>
              <mesh position={[0, 0.22, -0.6]} castShadow>
                <boxGeometry args={[1.8, 0.4, 0.9]} />
                <meshStandardMaterial color="#1e293b" />
              </mesh>
            </group>
          )}

          {/* Kitchen Counters */}
          <group position={[5.8, 0, 3.8]}>
            <mesh position={[0, 0.45, 1.2]} castShadow receiveShadow>
              <boxGeometry args={[4.0, 0.9, 0.9]} />
              <meshStandardMaterial color="#0f172a" roughness={0.3} />
            </mesh>
            <mesh position={[0, 0.92, 1.2]} castShadow receiveShadow>
              <boxGeometry args={[4.1, 0.05, 0.95]} />
              <meshStandardMaterial color="#ffffff" roughness={0.1} />
            </mesh>
            <mesh position={[2.0, 0.92, -1.8]} castShadow>
              <boxGeometry args={[0.9, 1.85, 0.8]} />
              <meshStandardMaterial color="#94a3b8" metalness={0.85} roughness={0.2} />
            </mesh>
          </group>

          {/* Master Bedroom */}
          <group position={[-5.4, 0, -3.8]}>
            <mesh position={[1.4, 0.25, -0.9]} castShadow receiveShadow>
              <boxGeometry args={[1.9, 0.35, 2.0]} />
              <meshStandardMaterial color="#78350f" roughness={0.5} />
            </mesh>
            <mesh position={[1.4, 0.48, -0.9]} castShadow receiveShadow>
              <boxGeometry args={[1.8, 0.22, 1.9]} />
              <meshStandardMaterial color="#ffffff" roughness={0.9} />
            </mesh>
            <mesh position={[-3.0, 1.25, 0.2]} rotation={[0, Math.PI / 2, 0]} castShadow>
              <boxGeometry args={[4.0, 2.5, 0.55]} />
              <meshStandardMaterial color="#1e293b" roughness={0.4} />
            </mesh>
          </group>

          {/* Master En-Suite Shower */}
          <group position={[-7.2, 0, -5.2]}>
            <mesh position={[-0.3, 1.0, -0.5]}>
              <boxGeometry args={[1.0, 2.0, 1.0]} />
              <meshStandardMaterial color="#ffffff" transparent opacity={0.25} roughness={0.05} />
            </mesh>
          </group>

          {/* Bedroom 2 */}
          <group position={[5.8, 0, -3.8]}>
            <mesh position={[0, 0.25, -0.8]} castShadow receiveShadow>
              <boxGeometry args={[1.6, 0.35, 1.9]} />
              <meshStandardMaterial color="#1e293b" />
            </mesh>
          </group>
        </group>
      ) : (
        /* ========== 2000 SQ FT FURNITURE ========== */
        <group key={`furn-${variantId}`}>
          {/* Grand Living 7-Seater Couch */}
          <group position={[-7.6, 0, 5.0]}>
            <mesh position={[0, 0.25, 0]} castShadow receiveShadow>
              <boxGeometry args={[3.8, 0.5, 1.2]} />
              <meshStandardMaterial color="#1e293b" roughness={0.4} />
            </mesh>
            <mesh position={[1.3, 0.25, -1.2]} castShadow receiveShadow>
              <boxGeometry args={[1.2, 0.5, 1.5]} />
              <meshStandardMaterial color="#1e293b" roughness={0.4} />
            </mesh>
          </group>

          {/* 75" 4K OLED Theater Console */}
          <group position={[-3.4, 0, 4.2]}>
            <mesh position={[0, 0.3, 0]} castShadow>
              <boxGeometry args={[0.4, 0.45, 2.6]} />
              <meshStandardMaterial color="#0f172a" roughness={0.3} />
            </mesh>
            <mesh position={[0.06, 1.4, 0]} castShadow>
              <boxGeometry args={[0.06, 1.2, 2.2]} />
              <meshStandardMaterial color="#020617" metalness={0.9} roughness={0.1} />
            </mesh>
            <mesh position={[0.09, 1.4, 0]}>
              <boxGeometry args={[0.01, 1.14, 2.14]} />
              <meshStandardMaterial color="#0284c7" emissive="#0369a1" emissiveIntensity={0.8} />
            </mesh>
          </group>

          {/* Executive Dining */}
          <group position={[0.0, 0, 2.0]}>
            <mesh position={[0, 0.74, 0]} castShadow receiveShadow>
              <boxGeometry args={[2.4, 0.06, 1.1]} />
              <meshStandardMaterial color="#451a03" roughness={0.35} />
            </mesh>
          </group>

          {/* Island Kitchen */}
          <group position={[6.8, 0, 4.2]}>
            <mesh position={[0, 0.46, -0.6]} castShadow receiveShadow>
              <boxGeometry args={[2.4, 0.92, 1.0]} />
              <meshStandardMaterial color="#0f172a" />
            </mesh>
            <mesh position={[0, 0.93, -0.6]} castShadow>
              <boxGeometry args={[2.5, 0.05, 1.05]} />
              <meshStandardMaterial color="#ffffff" roughness={0.1} />
            </mesh>
          </group>

          {/* Master Bedroom Sanctuary & Sundeck */}
          <group position={[-6.4, 0, -4.2]}>
            <mesh position={[1.5, 0.25, -1.0]} castShadow receiveShadow>
              <boxGeometry args={[2.1, 0.35, 2.2]} />
              <meshStandardMaterial color="#451a03" />
            </mesh>
            <mesh position={[1.5, 0.5, -1.0]} castShadow receiveShadow>
              <boxGeometry args={[2.0, 0.25, 2.1]} />
              <meshStandardMaterial color="#ffffff" roughness={0.9} />
            </mesh>
            <mesh position={[-3.8, 1.3, 0.2]} rotation={[0, Math.PI / 2, 0]} castShadow>
              <boxGeometry args={[4.5, 2.6, 0.6]} />
              <meshStandardMaterial color="#0f172a" roughness={0.3} />
            </mesh>
          </group>

          {/* Master Balcony Sundeck */}
          <group position={[-11.2, 0, -4.2]}>
            <mesh position={[0, 0.25, 0]} castShadow>
              <boxGeometry args={[1.8, 0.45, 1.0]} />
              <meshStandardMaterial color="#78350f" />
            </mesh>
          </group>

          {/* Bedroom 2 */}
          <group position={[6.8, 0, -4.2]}>
            <mesh position={[0, 0.25, -0.9]} castShadow receiveShadow>
              <boxGeometry args={[1.7, 0.35, 2.0]} />
              <meshStandardMaterial color="#1e293b" />
            </mesh>
          </group>

          {/* Bedroom 3 / Executive Workstation Suite (for 2000 3BHK) */}
          {is3Bhk && (
            <group position={[11.2, 0, 0.0]}>
              <mesh position={[0.8, 0.38, 0.8]} castShadow>
                <boxGeometry args={[1.8, 0.05, 0.8]} />
                <meshStandardMaterial color="#78350f" />
              </mesh>
              <mesh position={[-0.2, 1.3, -2.4]} castShadow>
                <boxGeometry args={[2.8, 2.6, 0.4]} />
                <meshStandardMaterial color="#334155" roughness={0.4} />
              </mesh>
            </group>
          )}

          {/* Powder Room Vanity */}
          <group position={[-1.8, 0, -2.5]}>
            <mesh position={[0, 0.45, 0]} castShadow>
              <cylinderGeometry args={[0.24, 0.24, 0.9, 32]} />
              <meshStandardMaterial color="#ea580c" roughness={0.3} />
            </mesh>
          </group>
        </group>
      )}

      {/* ==================== 5. CEILING ==================== */}
      {showCeiling && (
        <mesh position={[0, fullWallHeight + 0.05, 0]} receiveShadow>
          <boxGeometry args={[is2000 ? 22.0 : 18.2, 0.1, is2000 ? 16.0 : 14.2]} />
          <meshStandardMaterial color="#f8fafc" roughness={0.9} transparent opacity={0.85} />
        </mesh>
      )}

      {/* ==================== 6. MEASUREMENT OUTLINES ==================== */}
      {showMeasurements && (
        <group>
          {rooms.map((room) => (
            <group key={`meas-${variantId}-${room.id}`} position={[room.position[0], 0.05, room.position[2]]}>
              <lineSegments>
                <edgesGeometry 
                  args={[
                    new THREE.BoxGeometry(
                      room.bounds.maxX - room.bounds.minX, 
                      0.02, 
                      room.bounds.maxZ - room.bounds.minZ
                    )
                  ]} 
                />
                <lineBasicMaterial color="#38bdf8" linewidth={2} />
              </lineSegments>
            </group>
          ))}
        </group>
      )}
    </group>
  );
};
