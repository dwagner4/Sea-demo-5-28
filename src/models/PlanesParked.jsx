import { useGLTF } from "@react-three/drei";

export function PlanesParked(props) {
  const model = useGLTF('./Planes_Parked2.glb')
  return <primitive object={ model.scene } scale={ 1.0 } />
}

useGLTF.preload("./Planes_Parked2.glb");