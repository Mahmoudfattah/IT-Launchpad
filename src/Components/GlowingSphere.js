import { Canvas } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, Stars } from "@react-three/drei";

function GlowingSphere() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }} style={{ height: "100vh", width: "100vw", background: "transparent" }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[2, 2, 2]} intensity={1.5} color="#007bff" />

      {/* More stars, spread across the full height */}
      <Stars 
        radius={10}      // Increase radius to make stars appear further away
        depth={100}      // Extend stars in depth (3D space)
        count={2000}     // Increase the number of stars
        factor={7}       // Increase spacing between stars
        saturation={0} 
        fade 
      />

      {/* Glowing Sphere */}
      <Sphere args={[1, 64, 64]} scale={2}>
        <MeshDistortMaterial 
          color="#007bff" 
          attach="material" 
          distort={0.4} 
          speed={2} 
          emissive="#007bff"
          emissiveIntensity={1}
        />
      </Sphere>
    </Canvas>
  );
}

export default GlowingSphere;
