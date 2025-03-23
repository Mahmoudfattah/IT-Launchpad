import { Canvas } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useRef, useEffect, useMemo } from "react";
import * as THREE from "three";

function Background() {
  const ref = useRef();

  // (Optional) Comment out rotation while debugging:
  /*
  useEffect(() => {
    let frameId;
    const animate = () => {
      if (ref.current) {
        ref.current.rotation.y += 0.0005;
      }
      frameId = requestAnimationFrame(animate);
    };
    animate();
    return () => {
      cancelAnimationFrame(frameId);
      console.log("Background Component Unmounted");
    };
  }, []);
  */

  // Generate star positions in a smaller range
  const positions = useMemo(() => {
    return new Float32Array(
      new Array(500).fill(0).flatMap(() => [
        (Math.random() - 0.5) * 20, // reduced spread
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
      ])
    );
  }, []);

  return (
    <Canvas
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -10,
        background: "black", // for debugging
      }}
      camera={{ position: [0, 0, 20] }}  // Camera further back
      gl={{ alpha: true }}
    >
      <ambientLight intensity={0.2} />
      <Points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={positions}
            count={positions.length / 3}
            itemSize={3}
          />
        </bufferGeometry>
        <PointMaterial
          attach="material"
          size={2}         // Increase star size for visibility
          color="white"
          transparent
          opacity={1}
        />
      </Points>
    </Canvas>
  );
}

export default Background;
