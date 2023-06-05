import { useGLTF } from "@react-three/drei";

export function CarAgency(props) {
  const model = useGLTF('./glb_models/CarAgency.glb')
  return <primitive object={ model.scene } scale={ 1.0 } />
}

useGLTF.preload("./glb_models/CarAgency.glb");

