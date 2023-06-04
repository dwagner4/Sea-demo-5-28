import { useGLTF } from "@react-three/drei";

export function Terminal2Roadway(props) {
  const model = useGLTF('./Terminal2RoadwaysComp.glb')
  return <primitive object={ model.scene } scale={ 1.0 } />
}

useGLTF.preload("./Terminal2RoadwaysComp.glb");