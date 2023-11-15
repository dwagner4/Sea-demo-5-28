import { useGLTF } from "@react-three/drei";

export function Terminal2(props) {
  const { position } = props
  const model = useGLTF('./glb_models/Terminal2.glb')
  return <primitive object={ model.scene } position={position} scale={ 1.0 } />
}

useGLTF.preload("./glb_models/Terminal2.glb");