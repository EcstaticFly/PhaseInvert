"use client";

import { useEffect, useRef } from "react";
import { vertexShader, fragmentShader } from "./shaders";
import * as THREE from "three";

function InversionLens({ src, className }) {
  const containerRef = useRef(null);
  const rendererRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const uniformsRef = useRef(null);
  const isSetupCompleteRef = useRef(false);

  const config = {
    maskRadius: 0.15,
    maskSpeed: 0.75,
    lerpFactor: 0.05,
    radiusLerpSpeed: 0.1,
    turbulenceIntensity: 0.075,
  };

  const targetMouse = useRef(new THREE.Vector2(0.5, 0.5));
  const lerpedMouse = useRef(new THREE.Vector2(0.5, 0.5));
  const targetRadius = useRef(0.0);
  const inInView = useRef(false);
  const isMouseInsideContainer = useRef(false);
  const lastMouseX = useRef(0);
  const lastMouseY = useRef(0);
  const animationFrameId = useRef(null);

  useEffect(() => {
    
  }, [src])

  return (
    <div ref={containerRef} className={`inversion-lens ${className || ""}`}>
      <img src={src} style={{ display: none }} alt="" />
    </div>
  );
}

export default InversionLens;
