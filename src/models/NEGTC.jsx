import { useGLTF } from "@react-three/drei";

export function NEGTC(props) {
  const { position } = props
  const model = useGLTF('./glb_models/NE_GTC.glb')
  return <primitive object={ model.scene } position={position} scale={ 1.0 } />
}

useGLTF.preload("./glb_models/NE_GTC.glb");