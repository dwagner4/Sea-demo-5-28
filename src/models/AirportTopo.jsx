import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function AirportTopo(props) {
  const { nodes, materials } = useGLTF("./glb_models/S10_Only_Topo_2022_2_Gltf.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        name="Plane001"
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={materials["Material #4"]}
        position={[-972, 75.138, -359.661]}
        rotation={[0, -1.566, 0]}
        scale={0.05}
      />
      {/* <mesh
        name="Airfield"
        castShadow
        receiveShadow
        geometry={nodes.Airfield.geometry}
        material={materials["Material #2146772860"]}
        position={[-1089.989, 50.851, -838.295]}
        scale={0.025}
      /> */}
    </group>
  );
}

useGLTF.preload("./glb_models/S10_Only_Topo_2022_2_Gltf.glb");

