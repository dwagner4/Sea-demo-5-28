import { useGLTF } from "@react-three/drei";

export function ConcourseD(props) {
  const { position } = props
  const model = useGLTF('./glb_models/ConcourseD.glb')
  return <primitive object={ model.scene } position={position} scale={ 1.0 } />
}

useGLTF.preload("./glb_models/ConcourseD.glb");