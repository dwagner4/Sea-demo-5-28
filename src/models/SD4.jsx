import { useGLTF } from "@react-three/drei";

export function SD4(props) {
  const model = useGLTF('./SD4_South.glb')
  return <primitive object={ model.scene } scale={ 1.0 } />
}

useGLTF.preload("./SD4_South.glb");