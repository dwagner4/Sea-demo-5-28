import * as THREE from 'three'


export const TestPlane = ({ position, rotation, scale }) => {
    return (
        <mesh position={position} rotation={rotation} scale={scale}>
          <meshNormalMaterial side={THREE.DoubleSide}/>
          <planeGeometry />
        </mesh>
    )
}