import { useGLTF } from "@react-three/drei";

export function SD4(props) {
  const { position } = props
  const model = useGLTF('./glb_models/SD4_South.glb')
  return <primitive object={ model.scene } scale={ 1.0 } />
}

useGLTF.preload("./glb_models/SD4_South.glb");