import { useGLTF } from "@react-three/drei";

export function BuildingMasses(props) {
  const model = useGLTF('./glb_models/BuildingMasses.glb')
  return <primitive object={ model.scene } scale={ 1.0 } />
}

useGLTF.preload("./glb_models/BuildingMasses.glb");

