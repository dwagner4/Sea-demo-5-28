import { useGLTF } from "@react-three/drei";

export function SouthTerminal(props) {
  const model = useGLTF('./glb_models/SouthTerminalComp.glb')
  return <primitive object={ model.scene } scale={ 1.0 } />
}

useGLTF.preload("./glb_models/SouthTerminalComp.glb");
