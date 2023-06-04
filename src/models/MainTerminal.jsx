import { useGLTF } from "@react-three/drei";

export function MainTerminal(props) {
  const model = useGLTF('./MainPassengerComp.glb')
  return <primitive object={ model.scene } scale={ 1.0 } />
}

useGLTF.preload("./MainPassengerComp.glb");

