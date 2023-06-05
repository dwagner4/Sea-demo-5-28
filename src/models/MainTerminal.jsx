import { useGLTF } from "@react-three/drei";

export function MainTerminal(props) {
  const model = useGLTF('./glb_models/MainPassengerComp.glb')
  return <primitive object={ model.scene } scale={ 1.0 } />
}

useGLTF.preload("./glb_models/MainPassengerComp.glb");

