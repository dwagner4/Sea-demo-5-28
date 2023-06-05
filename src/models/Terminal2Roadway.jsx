import { useGLTF } from "@react-three/drei";

export function Terminal2Roadway(props) {
  const model = useGLTF('./glb_models/Terminal2RoadwaysComp.glb')
  return <primitive object={ model.scene } scale={ 1.0 } />
}

useGLTF.preload("./glb_models/Terminal2RoadwaysComp.glb");