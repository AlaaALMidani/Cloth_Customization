import React from 'react'
import * as THREE from 'three';
import { easing } from 'maath';
import { useSnapshot } from 'valtio';
import { useFrame, useThree } from '@react-three/fiber';
import { Decal, useGLTF, useTexture, OrbitControls } from '@react-three/drei';
import { useLoader } from '@react-three/fiber'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import state from '../store';
import { useRef, useState } from 'react';
import { TextureLoader } from 'three';
import { MeshStandardMaterial } from 'three';

const MyOBJComponent = () => {
  const [decalPosition, setDecalPosition] = useState([0, 0, 0]);
  const [isDragging, setIsDragging] = useState(false);
  const decalRef = useRef();
  const objRef = useRef();
  const texture = useLoader(TextureLoader, '/threejs.png');

  if (!obj) return <div>Error loading OBJ model</div>;

  // Assign a material to the OBJ mesh (crucial for OBJ files)
  obj.traverse((child) => {
    if (child.isMesh) {
      child.material = new MeshStandardMaterial({ color: 'blue' }); //Example Material
    }
  });


  const handlePointerDown = (e) => {
    setIsDragging(true);
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;
    const mouse = new THREE.Vector2((e.clientX / window.innerWidth) * 2 - 1, -(e.clientY / window.innerHeight) * 2 + 1);
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, camera);

    const intersects = raycaster.intersectObject(objRef.current, true); // Raycast against the OBJ

    if (intersects.length > 0) {
      const intersectPoint = intersects[0].point;
      setDecalPosition([intersectPoint.x, intersectPoint.y, intersectPoint.z]);
    }
  };

  return (
    <>
      <group >
        <mesh ref={objRef}> {/* Wrap OBJ and Decal in a mesh */}
          <primitive object={obj} />
          <Decal
            ref={decalRef}
            position={decalPosition}
            rotation={[0, 0, 0]}
            scale={[0.5, 0.5, 0.5]}
            map={texture}
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
            onPointerMove={handlePointerMove}
          />
        </mesh>
      </group>
    </>
  );
};

const Shirt = () => {
  const snap = useSnapshot(state);
  const { nodes, materials, scene } = useGLTF('/couples.glb')
  scene.traverse((node) => {
    if (node.isMesh) {
      console.log('shado')
      node.castShadow = true; // Enable shadow casting
      node.receiveShadow = true; // Enable shadow receiving
    }
  });
  const logoTexture = useTexture(snap.frontLogoDecal);
  const fullTexture = useTexture(snap.fullDecal);
  const backLogoTexture = useTexture(snap.backLogoDecal);

  useFrame((state, delta) => easing.dampC(materials.initialShadingGroup.color, snap.color, 0.25, delta));

  const stateString = JSON.stringify(snap);

  const createTextTexture = (text, font, size, color) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    ctx.font = `${size}px ${font}`;
    const textWidth = ctx.measureText(text).width;
    canvas.width = textWidth;
    canvas.height = size;
    ctx.fillStyle = color;
    ctx.font = `${size}px ${font}`;
    ctx.fillText(text, 0, size);
    return new THREE.CanvasTexture(canvas);
  }

  return (
    <>
      <OrbitControls />
      <group key={stateString}>
        <mesh
          geometry={nodes.cloth1.geometry}
          material={materials.initialShadingGroup}
          position={[3.059, 0, 0.125]}
          rotation={[Math.PI / 2, 0, 0]}
               
          // material-roughness={0}
          material-metalness={0.1}
          dispose={null}
        >

          {snap.isFullTexture && (
            <Decal
              debug
              position={[0, 0, 0]}
              rotation={[0, 0, 0]}
              scale={1}
              map={fullTexture}
              depthTest={false}
              depthWrite={true}
            />
          )}

          {snap.isFrontLogoTexture && (
            <Decal
              debug
              position={snap.frontLogoPosition}
              rotation={[0, 0, 0]}
              scale={snap.frontLogoScale}
              map={logoTexture}
              map-anisotropy={16}
              depthTest={false}
              depthWrite={true}
            />
          )}
          {snap.isFrontText && (
            <Decal
              debug
              position={snap.frontTextPosition}
              rotation={snap.frontTextRotation}
              scale={snap.frontTextScale}
              map={createTextTexture(snap.frontText, snap.frontTextFont, snap.frontTextSize, snap.frontTextColor)}
            />
          )}

          {snap.isBackLogoTexture && (
            <Decal
              position={snap.backLogoPosition}
              rotation={snap.backLogoRotation}
              scale={snap.backLogoScale}
              map={backLogoTexture}
              map-anisotropy={16}
              depthTest={false}
              depthWrite={true}
            />
          )}
          {snap.isBackText && (
            <Decal
              position={snap.backTextPosition}
              rotation={snap.backTextRotation}
              scale={snap.backTextScale}
              map={createTextTexture(snap.backText, snap.backTextFont, snap.backTextSize, snap.backTextColor)}
            />
          )}
        </mesh>
      </group>
    </>
  );
}

export default Shirt
