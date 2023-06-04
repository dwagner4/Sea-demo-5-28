import { useGLTF } from "@react-three/drei";

export function CargoPlanes(props) {
  const model = useGLTF('./Cargo_PlanesComp.glb')
  return <primitive object={ model.scene } scale={ 1.0 } />
}

useGLTF.preload("./Cargo_PlanesComp.glb");

