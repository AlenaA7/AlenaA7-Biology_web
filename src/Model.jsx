import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

const vay = './public/Primer/primer.gltf'

export default function Model(props) {
  
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(vay)
  const { actions, names } = useAnimations(animations, group)
  console.log(names)

  useEffect(() => {
    actions[names[0]].reset().fadeIn(1).play();
  }, []);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[0.774, 0.231, -0.063]}>
          <primitive object={nodes.Bone} />
          <primitive object={nodes.Bone001} />
          <skinnedMesh name="Cube" geometry={nodes.Cube.geometry} material={materials.Material} skeleton={nodes.Cube.skeleton} />
          <skinnedMesh name="Cylinder" geometry={nodes.Cylinder.geometry} material={materials['Material.001']} skeleton={nodes.Cylinder.skeleton} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload(vay)
