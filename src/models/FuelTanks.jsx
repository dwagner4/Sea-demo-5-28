import { useGLTF } from "@react-three/drei";

export function FuelTanks(props) {
  const { position } = props
  const model = useGLTF('./glb_models/Fuel_Tank_Area.glb')
  return <primitive object={ model.scene } position={position} scale={ 1.0 } />
}

useGLTF.preload("./glb_models/Fuel_Tank_Area.glb");