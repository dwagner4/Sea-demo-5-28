import { useGLTF } from "@react-three/drei";

export function NEGTC(props) {
  const model = useGLTF('./NE_GTC.glb')
  return <primitive object={ model.scene } scale={ 1.0 } />
}

useGLTF.preload("./NE_GTC.glb");