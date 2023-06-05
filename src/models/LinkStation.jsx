import { useGLTF } from "@react-three/drei";

export function LinkStation(props) {
  const model = useGLTF('./glb_models/LinkStation.glb')
  return <primitive object={ model.scene } scale={ 1.0 } position={[ 0, -30, 0 ]} />
}

useGLTF.preload("./glb_models/LinkStation.glb");