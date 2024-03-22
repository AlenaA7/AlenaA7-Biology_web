import './App.css'
import { useState, useRef, Suspense } from 'react'
import { Canvas,  } from '@react-three/fiber'
import { OrbitControls, useGLTF, useAnimations } from '@react-three/drei'
import Model from './Model.jsx'


function App() {
    const ref = useRef()
    return (
    <div className='App'>
        <div className="wrapper">
            <div className="product-canvas">
                <Canvas>
                    <Suspense fallback={null} >
                        <ambientLight />
                        <spotLight intensity={0.9} angle={0.1} penumbra={1} position={[10,15,10]} castShadow/>
                        <Model />
                        <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
                    </Suspense>
                </Canvas>
            </div>
        </div>
    </div>
  )
}

export default App
