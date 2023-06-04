/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function BlackStone(props) {
  const { nodes, materials } = useGLTF("/go/blackStone.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.black.geometry}
        material={materials.go_black}
        position={[0, 0.0035, 0]}
      />
    </group>
  );
}

useGLTF.preload("/go/blackStone.glb");