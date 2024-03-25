import './style/Modeled.css'
import { useState, useRef, Suspense } from 'react'
import { Canvas,  } from '@react-three/fiber'
import { OrbitControls, useGLTF, useAnimations } from '@react-three/drei'
import Model from './Model.jsx'


function Modeled() {
    const ref = useRef()
    return (
    <div className='Modeled'>
        <div className="wrapper">
            <div className="product-canvas">
                <Canvas shadows>
                    <Suspense fallback={null} >
                        <ambientLight />
                        <spotLight intensity={0.9} angle={0.1} penumbra={1} position={[10,15,10]} castShadow/>
                        <Model  />
                        <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} castShadow />
                    </Suspense>
                </Canvas>
            </div>
        </div>
    </div>
  )
}

export default Modeled
