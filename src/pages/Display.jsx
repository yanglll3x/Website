import {Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'

const Display = () => {
  return (
    <div>
        <Canvas 
        className = "w-full h-screen bg-transparent"
        camera={{ near: 0.1, far: 1000}}
        >
            <Suspense fallback={<Loader />}>
                <directionalLight />
                <ambientLight />
                <pointLight />
                <spotLight />
                <hemisphereLight />
            </Suspense>

        </Canvas>
    </div>
  )
}

export default Display