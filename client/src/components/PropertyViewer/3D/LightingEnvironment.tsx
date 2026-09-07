import React from 'react';
import { ROOMS } from '../../../data/propertyData';

interface LightingEnvironmentProps {
  isNightMode: boolean;
}

export const LightingEnvironment: React.FC<LightingEnvironmentProps> = ({ isNightMode }) => {
  return (
    <>
      {/* Background Sky Tone */}
      <color attach="background" args={[isNightMode ? '#090d16' : '#f1f5f9']} />

      {/* Ambient Lighting */}
      <ambientLight 
        intensity={isNightMode ? 0.25 : 0.6} 
        color={isNightMode ? '#93c5fd' : '#ffffff'} 
      />

      {/* Main Directional Sun / Moon Light */}
      <directionalLight
        position={isNightMode ? [-12, 18, -10] : [14, 22, 12]}
        intensity={isNightMode ? 0.3 : 1.2}
        color={isNightMode ? '#7dd3fc' : '#fffbeb'}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-near={0.5}
        shadow-camera-far={50}
        shadow-camera-left={-12}
        shadow-camera-right={12}
        shadow-camera-top={12}
        shadow-camera-bottom={-12}
        shadow-bias={-0.0005}
      />

      {/* Secondary Fill Light */}
      <directionalLight
        position={[-10, 10, -10]}
        intensity={isNightMode ? 0.15 : 0.35}
        color={isNightMode ? '#60a5fa' : '#e0f2fe'}
      />

      {/* Interior Warm Room Spotlights (Activated in Night mode or as interior ambiance) */}
      {ROOMS.map((room) => (
        <pointLight
          key={`light-${room.id}`}
          position={[room.position[0], 2.4, room.position[2]]}
          intensity={isNightMode ? 1.5 : 0.4}
          distance={8}
          decay={2}
          color={isNightMode ? '#fef08a' : '#fff7ed'}
        />
      ))}
    </>
  );
};
