import { useGLTF } from "@react-three/drei";

export function TrainTracks(props) {
  const { position } = props
  const model = useGLTF('./glb_models/SD4_Train_TracksComp.glb')
  return <primitive object={ model.scene } position={position} scale={ 1.0 } />
}

useGLTF.preload("./glb_models/SD4_Train_TracksComp.glb");