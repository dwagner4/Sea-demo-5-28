import { useGLTF } from "@react-three/drei";

export function CarAgency(props) {
  const model = useGLTF('./CarAgency.glb')
  return <primitive object={ model.scene } scale={ 1.0 } />
}

useGLTF.preload("./CarAgency.glb");

