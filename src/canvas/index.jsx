import { Canvas } from '@react-three/fiber'
import { Center } from '@react-three/drei';
import Shirt from './Shirt';
import CameraRig from './CameraRig';
import OBJComponent from './OBJComponent';
import * as THREE from "three";
import { useRef } from 'react';
import { useThree } from "@react-three/fiber";
import { Decal, useGLTF } from "@react-three/drei";
import { useState, useEffect } from 'react';
const DecalExample = () => {
  const { nodes } = useGLTF("/shirt.glb"); 

  const [decalProperties, setDecalProperties] = useState({
    position: null,
    normal: new THREE.Vector3(0, 1, 0),
    scale: [0.1, 0.1, 0.1],
    rotation: [0, 0, 0],
  });

  const { raycaster, mouse } = useThree();

  const handlePointerMove = (event) => {
    raycaster.setFromCamera(mouse, event.camera);
    const intersects = raycaster.intersectObject(nodes.T_Shirt_male); 

    if (intersects.length > 0) {
      const intersect = intersects[0];
      setDecalProperties((prev) => ({
        ...prev,
        position: intersect.point,
        normal: intersect.face.normal,
      }));
    }
  };

  return (
    <>
     
      <mesh
        geometry={nodes.T_Shirt_male.geometry}
        onPointerMove={handlePointerMove}
      >
        <meshStandardMaterial color="lightgrey" />
        {decalProperties.position && (
          <Decal
          debug
            position={decalProperties.position}
            normal={decalProperties.normal}
            scale={decalProperties.scale}
            rotation={decalProperties.rotation}
          >
            <meshStandardMaterial
              map={new THREE.TextureLoader().load("/person.jpg")}
              transparent
            />
          </Decal>
        )}
      </mesh>
    </>
  );
};

const CanvasModel = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 0], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      className="w-full max-w-full h-full transition-all ease-in"
    >
      <ambientLight intensity={0.4} />
      <directionalLight
        castShadow
        position={[0, 10, 0]}
        intensity={1}
      />

      <CameraRig>
        <Center>
          {/* <Shirt />
          <TexturedPlane /> */}
          <DecalExample />
        </Center>
      </CameraRig>
    </Canvas>
  )
}

export default CanvasModel