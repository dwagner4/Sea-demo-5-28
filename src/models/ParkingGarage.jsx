import { useGLTF } from "@react-three/drei";

export function ParkingGarage(props) {
  const { position } = props
  const model = useGLTF('./glb_models/210_Parking_Garage_rebuild_updated_gitf.glb')
  return <primitive object={ model.scene } position={position} scale={ 1.0 } />
}

useGLTF.preload("./glb_models/210_Parking_Garage_rebuild_updated_gitf.glb");

