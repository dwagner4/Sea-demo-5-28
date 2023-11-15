import { useGLTF } from "@react-three/drei";

export function SouthTerminal(props) {
  const { position } = props
  const model = useGLTF('./glb_models/SouthTerminalComp.glb')
  return <primitive object={ model.scene } rotation={[0, 0.2, 0]} position={position} scale={ 1.0 } />
}

useGLTF.preload("./glb_models/SouthTerminalComp.glb");
