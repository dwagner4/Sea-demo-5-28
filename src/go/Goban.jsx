/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Goban(props) {
  const { nodes, materials } = useGLTF("/go/goBan.glb");

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials.wood_table_001}
        position={[0, 0.13, 0]}
        rotation={[0, 0, Math.PI]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder.geometry}
          material={materials.ashi_black}
          position={[-0.14, 0.05, 0.14]}
          rotation={[0, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003.geometry}
          material={materials.wood_table_001}
          position={[-0.14, 0.07, 0.14]}
          rotation={[-Math.PI, 0, -Math.PI]}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("/go/goBan.glb");
