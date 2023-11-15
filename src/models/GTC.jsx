import { useGLTF } from "@react-three/drei";

export function GTC(props) {
  const { position } = props
  const model = useGLTF('./glb_models/GTC_2022.glb')
  return <primitive object={ model.scene } scale={ 1.0 } position={position} />
}

useGLTF.preload("./glb_models/GTC_2022.glb");