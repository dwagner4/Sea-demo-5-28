import { useGLTF } from "@react-three/drei";

export function BuildingMasses(props) {
  const model = useGLTF('./BuildingMasses.glb')
  return <primitive object={ model.scene } scale={ 1.0 } />
}

useGLTF.preload("./BuildingMasses.glb");

