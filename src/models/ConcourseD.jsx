import { useGLTF } from "@react-three/drei";

export function ConcourseD(props) {
  const model = useGLTF('./ConcourseD.glb')
  return <primitive object={ model.scene } scale={ 1.0 } />
}

useGLTF.preload("./ConcourseD.glb");