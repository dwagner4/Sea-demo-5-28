import { useGLTF } from "@react-three/drei";

export function Terminal2(props) {
  const model = useGLTF('./Terminal2.glb')
  return <primitive object={ model.scene } scale={ 1.0 } />
}

useGLTF.preload("./Terminal2.glb");