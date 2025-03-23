// src/Components/SpinningBox.js
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

function SpinningBox() {
  const meshRef = useRef();

  // Rotate the box on each frame
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#007bff" />
    </mesh>
  );
}

export default SpinningBox;
