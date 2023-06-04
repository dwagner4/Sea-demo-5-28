import { useGLTF } from "@react-three/drei";

export function SouthTerminal(props) {
  const model = useGLTF('./SouthTerminalComp.glb')
  return <primitive object={ model.scene } scale={ 1.0 } />
}

useGLTF.preload("./SouthTerminalComp.glb");
