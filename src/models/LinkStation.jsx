import { useGLTF } from "@react-three/drei";

export function LinkStation(props) {
  const model = useGLTF('./LinkStation.glb')
  return <primitive object={ model.scene } scale={ 1.0 } position={[ 0, -30, 0 ]} />
}

useGLTF.preload("./LinkStation.glb");