/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function GoBowl(props) {
  const { nodes, materials } = useGLTF("/go/goBowl.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bowl.geometry}
        material={materials.wood_bowl}
        position={[ 0, 0.03, 0]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.dummy.geometry}
          material={materials.go_white}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.cover.geometry}
        material={materials.wood_bowl}
        position={[0.04, 0.01, 0.1]}
        rotation={[0, 0, -Math.PI]}
      />
    </group>
  );
}

useGLTF.preload("go/goBowl.glb");
