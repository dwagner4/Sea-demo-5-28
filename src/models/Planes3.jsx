import { useGLTF } from "@react-three/drei";

export function Planes3(props) {
  const model = useGLTF('./glb_models/Planes_ParkedComp.glb')
  return <primitive object={ model.scene } scale={ 1.0 } />
}

useGLTF.preload("./glb_models/Planes_ParkedComp.glb");