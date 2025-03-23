// src/Components/SpinningBoxScene.js
import React from "react";
import { Canvas } from "@react-three/fiber";
import SpinningBox from "./SpinningBox";

function SpinningBoxScene() {
  return (
    <Canvas style={{ width: "100vw", height: "100vh", background: "black" }}>
      {/* A subtle ambient light to avoid complete darkness */}
      <ambientLight intensity={0.2} />

      {/* Multiple point lights at different positions & colors */}
      <pointLight position={[2, 2, 2]} intensity={1} color="#ff007b" />
      <pointLight position={[-2, 2, 2]} intensity={1} color="#00ff7b" />
      <pointLight position={[0, -2, -2]} intensity={1} color="#007bff" />

      {/* Your SpinningBox in the center */}
      <SpinningBox />
    </Canvas>
  );
}

export default SpinningBoxScene;
