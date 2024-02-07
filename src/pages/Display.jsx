import { Suspense, useState, useEffect } from 'react'
import { Canvas, useThree  } from '@react-three/fiber'
import Loader from '../components/Loader'

import Tower from '../models/Tower';
import Sky from '../models/Sky';
import { OrbitControls, Preload } from '@react-three/drei';

const Display = ({ isHome }) => {
  const [isRotating, setIsRotating] =useState(false);

  const adjustTowerForScreen = () => {
    let screenScale = null;
    let screenPosition = [0, -3.3, -3];
    let rotation = [ 0.2, 0, 0 ];

    if(window.innerWidth < 768 ) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }

    return [screenScale, screenPosition, rotation]
  }

  const className = isHome ? "w-full h-screen relative" : "w-full h-[calc(100vh-80px)] relative";

  const [isTowerScale, isTowerPosition, isTowerRotation] = adjustTowerForScreen();

  return (
    <section className={className}>
      <Canvas 
        className = {`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.2, far: 1000}}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<Loader />}>
          {/* <OrbitControls 
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          /> */}
          <directionalLight position={[1, 1, 3]} intensity={2.8} />
          <ambientLight intensity={0.6} />
          {/* <spotLight
            position={[1.7, -15, 10]}
            angle={Math.PI/50}
            penumbra={1}
            intensity={200}
          /> */}
          <hemisphereLight 
            skyColor="#b1e1ff" 
            groundColor="#000000" 
            intensity={1} 
          />

          <Sky isRotating={isRotating}  />
          <Tower
            position={isTowerPosition}
            scale={isTowerScale}
            rotation={isTowerRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
          />
        </Suspense>

        <Preload all />
      </Canvas>
    </section>
  )
}

export default Display