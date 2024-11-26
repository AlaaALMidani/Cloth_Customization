

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/couples.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.cloth1.geometry} material={materials.initialShadingGroup} position={[3.059, 0, 0.125]} rotation={[Math.PI / 2, 0, 0]} scale={0.1} />
    </group>
  )
}

useGLTF.preload('/couples.glb')
