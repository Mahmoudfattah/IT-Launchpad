// TestPage.js
import React from "react";
import { Canvas } from "@react-three/fiber";
import SpinningBox from "./SpinningBox";

function TestPage() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas style={{ background: "black" }}>
        <ambientLight />
        <SpinningBox />
      </Canvas>
      <div
        style={{
          position: "absolute",
          top: 0,
          width: "100%",
          color: "#007bff",
          textAlign: "center",
          zIndex: 1,
        }}
      >
        
      </div>
    </div>
  );
}

export default TestPage;
