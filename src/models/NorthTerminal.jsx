import { useGLTF } from "@react-three/drei";

export function NorthTerminal(props) {
  const model = useGLTF('./glb_models/NorthTerminalComp.glb')
  return <primitive object={ model.scene } scale={ 1.0 } />
}

useGLTF.preload("./glb_models/NorthTerminalComp.glb");