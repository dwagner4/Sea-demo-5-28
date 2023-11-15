import { useGLTF } from "@react-three/drei";

export function LinkStation(props) {
  const { position } = props
  const model = useGLTF('./glb_models/LinkStation.glb')
  return <primitive object={ model.scene } scale={ 1.0 } position={position} />
}

useGLTF.preload("./glb_models/LinkStation.glb");