import { useGLTF } from "@react-three/drei";

export function FuelTanks(props) {
  const model = useGLTF('./Fuel_Tank_Area.glb')
  return <primitive object={ model.scene } scale={ 1.0 } />
}

useGLTF.preload("./Fuel_Tank_Area.glb");