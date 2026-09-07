import React, { useRef, useEffect } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { OrbitControls as OrbitControlsImpl } from 'three-stdlib';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { RoomInfo } from '../../../data/propertyData';

interface CameraControllerProps {
  rooms: RoomInfo[];
  selectedRoomId: string;
  isFirstPerson: boolean;
  isTopDownView: boolean;
  fpKeys: { forward: boolean; backward: boolean; left: boolean; right: boolean };
}

export const CameraController: React.FC<CameraControllerProps> = ({
  rooms,
  selectedRoomId,
  isFirstPerson,
  isTopDownView,
  fpKeys,
}) => {
  const { camera } = useThree();
  const orbitRef = useRef<OrbitControlsImpl>(null);
  
  const targetCamPos = useRef(new THREE.Vector3(-2.5, 2.2, 6.5));
  const targetLookAt = useRef(new THREE.Vector3(-6.5, 1.2, 2.5));
  const isTransitioning = useRef(false);

  // Trigger camera transition animation
  useEffect(() => {
    if (isFirstPerson) return;

    if (isTopDownView) {
      targetCamPos.current.set(0, 24, 1.5);
      targetLookAt.current.set(0, 0, 0);
      isTransitioning.current = true;
    } else {
      const room = rooms.find((r) => r.id === selectedRoomId) || rooms[0];
      if (room && room.cameraPosition && room.cameraTarget) {
        targetCamPos.current.set(room.cameraPosition[0], room.cameraPosition[1], room.cameraPosition[2]);
        targetLookAt.current.set(room.cameraTarget[0], room.cameraTarget[1], room.cameraTarget[2]);
        isTransitioning.current = true;
      }
    }

    // Auto release transition control after 650ms so manual mouse rotation is 100% free
    const timer = setTimeout(() => {
      isTransitioning.current = false;
    }, 650);

    return () => clearTimeout(timer);
  }, [rooms, selectedRoomId, isFirstPerson, isTopDownView]);

  // Handle user manual drag interaction start
  useEffect(() => {
    const controls = orbitRef.current;
    if (!controls) return;

    const handleStart = () => {
      // User is dragging mouse to rotate — stop camera lerp immediately
      isTransitioning.current = false;
    };

    controls.addEventListener('start', handleStart);
    return () => {
      controls.removeEventListener('start', handleStart);
    };
  }, []);

  useFrame((_, delta) => {
    if (isFirstPerson) {
      const speed = 4.0 * delta;
      const moveVector = new THREE.Vector3();
      const cameraDirection = new THREE.Vector3();
      camera.getWorldDirection(cameraDirection);
      
      cameraDirection.y = 0;
      cameraDirection.normalize();

      const sideDirection = new THREE.Vector3(-cameraDirection.z, 0, cameraDirection.x);

      if (fpKeys.forward) moveVector.add(cameraDirection.clone().multiplyScalar(speed));
      if (fpKeys.backward) moveVector.sub(cameraDirection.clone().multiplyScalar(speed));
      if (fpKeys.right) moveVector.add(sideDirection.clone().multiplyScalar(speed));
      if (fpKeys.left) moveVector.sub(sideDirection.clone().multiplyScalar(speed));

      camera.position.add(moveVector);
      camera.position.y = 1.6;

      camera.position.x = Math.max(-12.5, Math.min(14.0, camera.position.x));
      camera.position.z = Math.max(-8.5, Math.min(9.5, camera.position.z));
      return;
    }

    // Lerp camera only while transition is active
    if (isTransitioning.current && orbitRef.current) {
      const step = Math.min(delta * 4.0, 1);
      
      camera.position.lerp(targetCamPos.current, step);
      orbitRef.current.target.lerp(targetLookAt.current, step);
      orbitRef.current.update();
    }
  });

  if (isFirstPerson) {
    return (
      <OrbitControls
        ref={orbitRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.7}
        maxPolarAngle={Math.PI / 2 + 0.3}
        minPolarAngle={Math.PI / 2 - 0.5}
      />
    );
  }

  return (
    <OrbitControls
      ref={orbitRef}
      enableDamping
      dampingFactor={0.08}
      minDistance={1.2}
      maxDistance={35}
      maxPolarAngle={isTopDownView ? 0.05 : Math.PI / 2 - 0.04} // Prevent going below floor
      minPolarAngle={0.01}
      target={[0, 0, 0]}
    />
  );
};
