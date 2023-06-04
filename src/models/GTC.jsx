import { useGLTF } from "@react-three/drei";

export function GTC(props) {
  const model = useGLTF('./GTC_2022.glb')
  return <primitive object={ model.scene } scale={ 1.0 } position={[ 0, 150, 0 ]} />
}

useGLTF.preload("./GTC_2022.glb");