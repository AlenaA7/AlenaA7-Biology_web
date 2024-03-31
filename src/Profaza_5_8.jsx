
import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('./public/Profaza_5_8/Profaza_5_8.gltf')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" position={[0.172, 1.819, 0]}>
          <primitive object={nodes.Bone} />
          <primitive object={nodes.Bone006} />
          <primitive object={nodes.Bone025} />
          <primitive object={nodes.Bone043} />
          <primitive object={nodes.Bone002} />
          <primitive object={nodes.Bone009} />
          <primitive object={nodes.Bone008} />
          <primitive object={nodes.Bone066} />
          <primitive object={nodes.Bone001} />
          <primitive object={nodes.Bone067} />
          <primitive object={nodes.Bone068} />
          <primitive object={nodes.Bone069} />
          <primitive object={nodes.Bone076} />
          <primitive object={nodes.Bone077} />
          <primitive object={nodes.Bone078} />
          <primitive object={nodes.Bone079} />
          <primitive object={nodes.Bone086} />
          <primitive object={nodes.Bone087} />
          <primitive object={nodes.Bone088} />
          <primitive object={nodes.Bone089} />
          <primitive object={nodes.Bone090} />
          <primitive object={nodes.Bone091} />
          <primitive object={nodes.Bone092} />
          <primitive object={nodes.Bone093} />
          <primitive object={nodes.Bone096} />
          <primitive object={nodes.Bone097} />
          <primitive object={nodes.Bone104} />
          <primitive object={nodes.Bone105} />
          <primitive object={nodes.Bone130} />
          <primitive object={nodes.Bone132} />
          <primitive object={nodes.Bone140} />
          <primitive object={nodes.Bone128} />
          <primitive object={nodes.Bone139} />
          <primitive object={nodes.Bone129} />
          <primitive object={nodes.Bone003} />
          <primitive object={nodes.Bone208} />
          <primitive object={nodes.Bone210} />
          <primitive object={nodes.Bone209} />
          <group name="Centriol1">
            <skinnedMesh name="Cylinder011" geometry={nodes.Cylinder011.geometry} material={materials['Material.004']} skeleton={nodes.Cylinder011.skeleton} />
            <skinnedMesh name="Cylinder011_1" geometry={nodes.Cylinder011_1.geometry} material={materials['Material.003']} skeleton={nodes.Cylinder011_1.skeleton} />
          </group>
          <group name="Centriol2">
            <skinnedMesh name="Cylinder016" geometry={nodes.Cylinder016.geometry} material={materials['Material.004']} skeleton={nodes.Cylinder016.skeleton} />
            <skinnedMesh name="Cylinder016_1" geometry={nodes.Cylinder016_1.geometry} material={materials['Material.003']} skeleton={nodes.Cylinder016_1.skeleton} />
          </group>
          <skinnedMesh name="Hromosoma1" geometry={nodes.Hromosoma1.geometry} material={materials['Material.002']} skeleton={nodes.Hromosoma1.skeleton} />
          <skinnedMesh name="Hromosoma2" geometry={nodes.Hromosoma2.geometry} material={materials['Material.007']} skeleton={nodes.Hromosoma2.skeleton} />
          <group name="Hromosoma_blue1">
            <skinnedMesh name="BezierCurve017" geometry={nodes.BezierCurve017.geometry} material={materials['Material.017']} skeleton={nodes.BezierCurve017.skeleton} />
            <skinnedMesh name="BezierCurve017_1" geometry={nodes.BezierCurve017_1.geometry} material={materials['Material.016']} skeleton={nodes.BezierCurve017_1.skeleton} />
          </group>
          <group name="Hromosoma_red1">
            <skinnedMesh name="BezierCurve008" geometry={nodes.BezierCurve008.geometry} material={materials['Material.012']} skeleton={nodes.BezierCurve008.skeleton} />
            <skinnedMesh name="BezierCurve008_1" geometry={nodes.BezierCurve008_1.geometry} material={materials['Material.011']} skeleton={nodes.BezierCurve008_1.skeleton} />
            <skinnedMesh name="BezierCurve008_2" geometry={nodes.BezierCurve008_2.geometry} material={materials['Material.013']} skeleton={nodes.BezierCurve008_2.skeleton} />
          </group>
          <group name="Hromosoma_red1001">
            <skinnedMesh name="BezierCurve019" geometry={nodes.BezierCurve019.geometry} material={materials['Material.012']} skeleton={nodes.BezierCurve019.skeleton} />
            <skinnedMesh name="BezierCurve019_1" geometry={nodes.BezierCurve019_1.geometry} material={materials['Material.011']} skeleton={nodes.BezierCurve019_1.skeleton} />
            <skinnedMesh name="BezierCurve019_2" geometry={nodes.BezierCurve019_2.geometry} material={materials['Material.013']} skeleton={nodes.BezierCurve019_2.skeleton} />
          </group>
          <group name="Hromosoma_red1002">
            <skinnedMesh name="BezierCurve020" geometry={nodes.BezierCurve020.geometry} material={materials['Material.012']} skeleton={nodes.BezierCurve020.skeleton} />
            <skinnedMesh name="BezierCurve020_1" geometry={nodes.BezierCurve020_1.geometry} material={materials['Material.011']} skeleton={nodes.BezierCurve020_1.skeleton} />
            <skinnedMesh name="BezierCurve020_2" geometry={nodes.BezierCurve020_2.geometry} material={materials['Material.013']} skeleton={nodes.BezierCurve020_2.skeleton} />
          </group>
          <group name="Hromosoma_red1003">
            <skinnedMesh name="BezierCurve021" geometry={nodes.BezierCurve021.geometry} material={materials['Material.012']} skeleton={nodes.BezierCurve021.skeleton} />
            <skinnedMesh name="BezierCurve021_1" geometry={nodes.BezierCurve021_1.geometry} material={materials['Material.011']} skeleton={nodes.BezierCurve021_1.skeleton} />
            <skinnedMesh name="BezierCurve021_2" geometry={nodes.BezierCurve021_2.geometry} material={materials['Material.013']} skeleton={nodes.BezierCurve021_2.skeleton} />
          </group>
          <skinnedMesh name="Sphere" geometry={nodes.Sphere.geometry} material={materials['Material.001']} skeleton={nodes.Sphere.skeleton} />
          <skinnedMesh name="Vereteno1" geometry={nodes.Vereteno1.geometry} material={materials['Material.005']} skeleton={nodes.Vereteno1.skeleton} />
          <skinnedMesh name="Vereteno2" geometry={nodes.Vereteno2.geometry} material={materials['Material.006']} skeleton={nodes.Vereteno2.skeleton} />
          <skinnedMesh name="Vereteno3" geometry={nodes.Vereteno3.geometry} material={materials['Material.006']} skeleton={nodes.Vereteno3.skeleton} />
          <skinnedMesh name="Vereteno4" geometry={nodes.Vereteno4.geometry} material={materials['Material.006']} skeleton={nodes.Vereteno4.skeleton} />
          <skinnedMesh name="Vereteno5" geometry={nodes.Vereteno5.geometry} material={materials['Material.006']} skeleton={nodes.Vereteno5.skeleton} />
          <skinnedMesh name="Vereteno6" geometry={nodes.Vereteno6.geometry} material={materials['Material.006']} skeleton={nodes.Vereteno6.skeleton} />
          <skinnedMesh name="Vereteno7" geometry={nodes.Vereteno7.geometry} material={materials['Material.006']} skeleton={nodes.Vereteno7.skeleton} />
          <skinnedMesh name="Vereteno8" geometry={nodes.Vereteno8.geometry} material={materials['Material.006']} skeleton={nodes.Vereteno8.skeleton} />
        </group>
        <group name="Empty" position={[-0.001, -0.005, 0]} />
      </group>
    </group>
  )
}

useGLTF.preload('./public/Profaza_5_8/Profaza_5_8.gltf')
