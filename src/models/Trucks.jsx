import { useGLTF } from "@react-three/drei";

export function Trucks(props) {
  const model = useGLTF('./glb_models/Trailer_TrucksComp.glb')
  return <primitive object={ model.scene } scale={ 1.0 } />
}

useGLTF.preload("./glb_models/Trailer_TrucksComp.glb");