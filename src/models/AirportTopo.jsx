import { useGLTF } from "@react-three/drei";

export function AirportTopo(props) {
  const model = useGLTF('./glb_models/S10_Only_Topo_2022_2_Gltf.glb')
  return <primitive object={ model.scene } scale={ 1.0 } />
}

useGLTF.preload("./glb_models/S10_Only_Topo_2022_2_Gltf.glb");

