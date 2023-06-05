import { useGLTF } from "@react-three/drei";

export function GTC(props) {
  const model = useGLTF('./glb_models/GTC_2022.glb')
  return <primitive object={ model.scene } scale={ 1.0 } position={[ 0, 150, 0 ]} />
}

useGLTF.preload("./glb_models/GTC_2022.glb");