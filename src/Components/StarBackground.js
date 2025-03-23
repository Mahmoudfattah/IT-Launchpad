// src/Components/StarBackground.js
import React, { useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";

function StarBackground() {
  // Generate random star positions
  const starPositions = useMemo(() => {
    return new Float32Array(
      new Array(500).fill(0).flatMap(() => [
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 30,
      ])
    );
  }, []);

  return (
    <Canvas
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1, // Behind the section content
      }}
      camera={{ position: [0, 0, 20] }}
      gl={{ alpha: true }} // Allows transparency if needed
    >
      {/* Optional soft ambient light */}
      <ambientLight intensity={0.2} />
      <Points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={starPositions}
            count={starPositions.length / 3}
            itemSize={3}
          />
        </bufferGeometry>
        <PointMaterial
          attach="material"
          size={0.5}   // Adjust star size
          color="white"
          transparent
          opacity={0.8}
        />
      </Points>
    </Canvas>
  );
}

export default StarBackground;
